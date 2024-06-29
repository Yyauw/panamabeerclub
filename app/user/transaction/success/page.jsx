import Stripe from "stripe";
import TransactionPanel from "@/components/user/transaction/TransactionPanel";
import connectDB from "@/lib/connectDB";
import User from "@/models/User";
import Address from "@/models/Address";
import Subscription from "@/models/Subscription";
import Shipment from "@/models/Shipment";
import Beer from "@/models/Beer";

const errorTemplate = (
  <div className="h-[80vh]">
    <h1>Payment not completed</h1>
    <p> something went wrong.</p>
  </div>
);

const fillRandomBeers = async (beers, capacity) => {
  const totalItems = beers.reduce((acc, item) => acc + item.cartQuantity, 0);
  const beersArr = beers.map((beer) => {
    return {
      beer: beer._id,
      quantity: beer.cartQuantity,
    };
  });
  if (totalItems < capacity) {
    const remaining = capacity - totalItems;
    const idsExcluir = beers.map((beer) => beer._id);
    await connectDB();
    const cervezasAleatorias = await Beer.aggregate([
      { $match: { _id: { $nin: idsExcluir } } }, // Excluye los IDs especificados
      { $sample: { size: remaining } }, // Añade un campo `cartQuantity` con valor 1
      { $project: { _id: 1 } },
    ]);
    const cervezasNuevas = cervezasAleatorias.map((cerveza) => {
      return {
        beer: cerveza._id,
        quantity: 1,
      };
    });
    const cer = [...beersArr, ...cervezasNuevas];

    return cer;
  } else {
    return beersArr;
  }
};

const assingDelivery = async (shipment) => {
  await connectDB();
  const result = await User.aggregate([
    {
      $match: { userType: "delivery" },
    },
    {
      $project: {
        name: 1, // Incluye el nombre del usuario en los resultados
        shipmentCount: { $size: "$shipments" }, // Calcula el tamaño del array de `shipments`
      },
    },
    {
      $sort: { shipmentCount: 1 }, // Ordena los resultados por el número de `shipments` en orden ascendente
    },
  ]);
  //console.log(result);
  const user = await User.findById(result[0]._id);
  user.shipments.push(shipment._id);
  await user.save();
};

export default async function successPage(req) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  if (req.searchParams.session_id === undefined) return errorTemplate;

  const session = await stripe.checkout.sessions.retrieve(
    req.searchParams.session_id
  );
  if (session.payment_status !== "paid") return errorTemplate;
  const customer = await stripe.customers.retrieve(session.customer);
  //console.log(session);
  const invoice = await stripe.invoices.retrieve(session.invoice);
  //console.log(invoice); //subcription, invoice_pdf
  //console.log(customer);
  const createSubcription = async (data) => {
    "use server";
    await connectDB();
    const user = await User.findById(data.userID);
    const beers = JSON.parse(data.CartItems);
    //console.log(data.userID);
    const subscription = new Subscription({
      frequency: "monthly",
      status: "activo",
      plan: data.plan,
      price: invoice.amount_due / 100,
      subscriptionDate: new Date(invoice.period_start * 1000),
      nextPayment: new Date((invoice.period_end + 30 * 24 * 60 * 60) * 1000),
      stripeId: invoice.subscription,
      invoice: invoice.invoice_pdf,
      user: user._id,
    });
    const beerCart = await fillRandomBeers(beers, data.capacity);
    console.log(beerCart);
    const shipment = new Shipment({
      shippingDate: new Date((invoice.period_end + 7 * 24 * 60 * 60) * 1000),
      beers: beerCart,
      status: "pending",
      user: user._id,
      address: data.address,
      evidence: "",
    });
    await shipment.save();
    assingDelivery(shipment);
    subscription.shipment.push(shipment);

    await subscription.save();

    //console.log(subscription);
  };

  const getLocalStorageData = async (data) => {
    "use server";
    console.log(data);
    createSubcription(data);
  };

  return (
    <div className="h-[80vh]">
      <h1>Confirmation</h1>
      <p>Payment completed.</p>
      <TransactionPanel
        getLocalStorageData={getLocalStorageData}
      ></TransactionPanel>
    </div>
  );
}
