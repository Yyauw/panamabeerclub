import User from "@/models/User";
import connectDB from "@/lib/connectDB";
import Shipment from "@/models/Shipment";
import Beer from "@/models/Beer";
import Address from "@/models/Address";

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
  fetchUser();
  return (
    <div className="h-[80vh]">
      <h1>Page</h1>
      <p>Thank you for your purchase.</p>
    </div>
  );
}
