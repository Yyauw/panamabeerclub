import Link from "next/link";
import User from "@/models/User";
import connectDB from "@/lib/connectDB";
import Address from "@/models/Address";

export default function signupPage() {
  // const createUser = async () => {
  //   await connectDB();

  //   const addrss = new Address({
  //     address: "casa a1",
  //     description: "beside the school",
  //     lng: 8.431676910487093,
  //     lat: -823.92032323233,
  //   });

  //   addrss.save();
  //   console.log(addrss);
  //   const person = new User({
  //     uid: "qhUYtPqsWzPlIRwEfsbxLLWQ9CT2",
  //     name: "manolo5000",
  //     lastName: "xd",
  //     birthday: Date.now(),
  //     email: "yunieryau7@gmail.com",
  //     phoneNumber: 343434343,
  //     preference: {
  //       style: ["xd", "x222"],
  //       ibu: 44,
  //       alc: 5.8,
  //       aroma: ["2233", "floral"],
  //       body: ["completo"],
  //     },
  //     address: [addrss._id],
  //   });
  //   await person.save();
  //   console.log("inside api");
  // };

  // createUser();
  return (
    <>
      <h1>signup site</h1>
      <Link href="/login">login</Link>
    </>
  );
}
