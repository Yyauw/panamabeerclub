import ConfirmationPanel from "@/components/user/confirmation/ConfirmationPanel";
import connectDB from "@/lib/connectDB";
import User from "@/models/User";
import Address from "@/models/Address";
import Subscription from "@/models/Subscription";

export default function ConfirmationPage() {
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

  return (
    <div className="h-[87vh] flex items-center justify-center">
      <ConfirmationPanel
        fetchUser={fetchUser}
        fetchSubcription={fetchSubcription}
      ></ConfirmationPanel>
    </div>
  );
}
