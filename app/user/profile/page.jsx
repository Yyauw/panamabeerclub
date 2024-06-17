import TopSection from "@/components/user/profile/TopSection";
import AddressSection from "@/components/user/profile/AddressSection";
import Address from "@/models/Address";
import User from "@/models/User";
import connectDB from "@/lib/connectDB";

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
          <div className="border-2 rounded-md mt-2 bg-secondary border-hidden p-4">
            <h1 className="text-2xl font-bold text-center">Subscription</h1>
            <p className="text-cbg my-3 ">
              <span className="font-bold">Plan: </span> Basic
            </p>
            <p className="text-cbg my-3 ">
              <span className="font-bold">Next payment: </span> 1/7/2024
            </p>
            <p className="text-cbg my-3 ">
              <span className="font-bold">Billing: </span> 14.99$
            </p>
            <p className="text-center mt-4">
              <button className="btn btn-primary ">Change Plan</button>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
