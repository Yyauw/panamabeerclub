import User from "@/models/User";
import connectDB from "@/lib/connectDB";
import Shipment from "@/models/Shipment";
import Beer from "@/models/Beer";
import Address from "@/models/Address";
import ComponentePrueba from "./ComponentePrueba";

export default function page() {
  const fetchUser = async () => {
    await connectDB();
    const user = await User.findOne({
      _id: "667b65de09ba201a6f9ad641", //pon el id de tu usuario,
    }).populate({
      path: "shipments",
      populate: [
        { path: "beers.beer", model: "Beer" }, // Popula beers.beer
        { path: "user", model: "User" }, // Popula user
        { path: "address", model: "Address" }, // Popula address
      ],
    });
    console.log(user.shipments);
  };
  //fetchUser();

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
      console.log(cer);
    } else {
      console.log(beersArr);
      console.log("No hay cervezas aleatorias");
    }
  };

  return (
    <div className="h-[80vh]">
      <h1>Page</h1>
      <p>Thank you for your purchase.</p>
      <ComponentePrueba fillRandomBeers={fillRandomBeers} />
    </div>
  );
}
