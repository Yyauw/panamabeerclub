import TopSection from "@/components/user/profile/TopSection";
import AddressSection from "@/components/user/profile/AddressSection";
import Address from "@/models/Address";
import User from "@/models/User";
import connectDB from "@/lib/connectDB";
import SubcriptionCard from "@/components/user/profile/SubcriptionCard";
import Subscription from "@/models/Subscription";
import Stripe from "stripe";

export default function userProfile() {
  const addNewAddress = async (id, address) => {
    "use server";
    await connectDB();
    const addressdb = new Address({
      address: address.address,
      description: address.description,
      lng: address.lng,
      lat: address.lat,
    });
    await addressdb.save();
    const user = await User.findById(id);
    user.address.push(addressdb._id);
    await user.save();
  };

  const deleteAddress = async (id, addressId) => {
    "use server";
    await connectDB();
    const user = await User.findById(id);
    user.address.pull(addressId);
    await user.save();
    await Address.findByIdAndDelete(addressId);
  };

  const fetchUserData = async (id) => {
    "use server";
    await connectDB();
    const user = await User.findById(id).populate("address");
    return JSON.stringify(user);
  };

  const fetchSubcriptionData = async (id) => {
    "use server";
    await connectDB();
    const sucriptionInfo = await Subscription.findOne({ user: id }).populate(
      "user"
    );
    console.log(id);
    return JSON.stringify(sucriptionInfo);
  };

  const cancelSubcription = async (id) => {
    "use server";
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    await connectDB();
    await stripe.subscriptions.update(id, {
      cancel_at_period_end: true,
    });
    const subscription = await Subscription.findOne({ stripeId: id });
    subscription.status = "cancelado";
    await subscription.save();
  };

  const reActivateSubcription = async (id) => {
    "use server";
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    await connectDB();
    const subscription = await Subscription.findOne({ stripeId: id });
    await stripe.subscriptions.update(id, {
      cancel_at_period_end: false,
    });
    subscription.status = "activo";
    await subscription.save();
  };

  return (
    <>
      <TopSection fetchUserData={fetchUserData}></TopSection>

      <section className="flex container mx-auto mt-3 p-4 min-h-[50vh]">
        <AddressSection
          addNewAddress={addNewAddress}
          fetchUserData={fetchUserData}
          deleteAddress={deleteAddress}
        ></AddressSection>
        <div className="w-[40%] p-2 px-10">
          <SubcriptionCard
            fetchSubcriptionData={fetchSubcriptionData}
            cancelSubcription={cancelSubcription}
            reActivateSubcription={reActivateSubcription}
          ></SubcriptionCard>
        </div>
      </section>
    </>
  );
}
