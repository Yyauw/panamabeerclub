import Subscription from "@/models/Subscription";
import Shipment from "@/models/Shipment";
import User from "@/models/User";
import connectDB from "@/lib/connectDB";
import Address from "@/models/Address";
import Beer from "@/models/Beer";
import Orders from "@/components/user/orders/Orders";

export default async function page() {
  const fecthOrders = async (id) => {
    "use server";
    await connectDB();
    const orders = await Shipment.find({ user: id }).populate([
      {
        path: "beers.beer",
        model: Beer,
      },
      {
        path: "address",
        model: Address,
      },
    ]);

    return JSON.stringify(orders);
  };

  return <Orders fecthOrders={fecthOrders}></Orders>;
}
