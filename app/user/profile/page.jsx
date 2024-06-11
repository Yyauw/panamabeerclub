import AddressCard from "@/components/user/AddressCard";

export default function userProfile() {
  return (
    <>
      <section className="profile-topsection bg-primary/80  ">
        <div className="wrapper container mx-auto flex p-4 w-[89vw]">
          <div className="info-section w-[100%] text-black">
            <div className="border-b-2 border-black border-cbg flex content-center items-center py-3">
              <h1 className="text-3xl text-cbg font-extrabold">
                HELLO, MANOLO500
              </h1>
              <p className="ms-auto text-white hover:cursor-pointer hover:underline">
                Edit Info
              </p>
            </div>
            <p className="text-cbg my-3 ">
              <span className="font-bold">Email: </span> MANOLO500@gmail.com
            </p>
            <p className="text-cbg my-3">
              <span className="font-bold">Phone number: </span>{" "}
              MANOLO500@gmail.com
            </p>
            <p className="text-cbg my-3">
              <span className="font-bold">Email: </span> MANOLO500@gmail.com
            </p>
          </div>
          <div className="img-section ms-auto pt-6">
            <div className="avatar">
              <div className="w-40 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex container mx-auto mt-3 p-4">
        <div className="w-[60%] border-r-2 px-8">
          <div className="flex w-[100%]">
            <h1 className="font-bold text-3xl ">Addresses</h1>
            <p className="ms-auto text-primary my-auto hover:underline hover:cursor-pointer">
              +Add New
            </p>
          </div>
          <div className="overflow-auto p-3 ">
            <AddressCard></AddressCard>
            <AddressCard></AddressCard>
            <AddressCard></AddressCard>
          </div>
        </div>
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
