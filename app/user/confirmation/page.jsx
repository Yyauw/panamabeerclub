import ConfirmationPanel from "@/components/user/confirmation/ConfirmationPanel";
import connectDB from "@/lib/connectDB";
import User from "@/models/User";
import Address from "@/models/Address";
import Subscription from "@/models/Subscription";
import Shipment from "@/models/Shipment";
import Souvenir from "@/models/Souvenir";
import Beer from "@/models/Beer";

export default function ConfirmationPage() {
  const fillRandomBeers = async (beers, capacity) => {
    "use server";
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

  const subtractBeerStock = async (beers) => {
    "use server";
    await connectDB();
    beers.forEach(async (beer) => {
      const cerveza = await Beer.findById(beer.beer);
      cerveza.stock -= beer.quantity;
      await cerveza.save();
    });
  };

  const assingDelivery = async (shipment) => {
    "use server";
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

  const fetchUser = async (id) => {
    "use server";
    await connectDB();
    const user = await User.findById(id).populate("address");
    return JSON.stringify(user);
  };

  const fetchSubcription = async (id) => {
    "use server";
    await connectDB();
    const subscription = await Subscription.findOne({ user: id });
    return JSON.stringify(subscription);
  };

  const createShipment = async (
    cart,
    user,
    subscriptionId,
    address,
    capacity
  ) => {
    "use server";
    await connectDB();
    const subcription = await Subscription.findOne({ user: user });
    const beerCart = await fillRandomBeers(cart, capacity);
    const fecha = subcription.nextPayment;
    const nuevaFecha = new Date(fecha.getTime() + 7 * 24 * 60 * 60 * 1000);

    console.log(beerCart);
    const shipment = new Shipment({
      shippingDate: nuevaFecha,
      beers: beerCart,
      status: "pending",
      user: user,
      address: address,
      evidence: "",
    });

    if (subcription.plan !== "basico") {
      const souvenir = await Souvenir.findOne();
      shipment.souvenirs = { souvenir: souvenir._id, quantity: 1 };
    }

    await subtractBeerStock(beerCart);
    await shipment.save();
    assingDelivery(shipment);
    subcription.shipment.push(shipment);
    subcription.save();
    return true;
  };

  return (
    <div className="h-[87vh] flex items-center justify-center">
      <ConfirmationPanel
        fetchUser={fetchUser}
        fetchSubcription={fetchSubcription}
        createShipment={createShipment}
      ></ConfirmationPanel>
    </div>
  );
}
