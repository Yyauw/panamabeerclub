import Link from "next/link";
import User from "@/models/User";
import connectDB from "@/lib/connectDB";
import Address from "@/models/Address";
import logo from "@/public/images/logo.svg";
import Image from "next/image";

import bglogin from "@/public/images/bg-login.svg";
import SignupForm from "@/components/signup/SignupForm";

export default function signupPage() {
  const createUser = async (userData) => {
    "use server";
    const { name, lastName, email, phoneNumber, birthDate } = userData;
    await connectDB();

    // const addrss = new Address({
    //   address: "casa a1",
    //   description: "beside the school",
    //   lng: 8.431676910487093,
    //   lat: -823.92032323233,
    // });
    // addrss.save();

    const person = new User({
      name,
      lastName,
      birthDate,
      email,
      phoneNumber,
      uid: "adasdasdasd",
      userType: "admin",
    });
    await person.save();
    console.log("inside api");
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Image src={bglogin} alt="Background" layout="fill" objectFit="cover" />
      </div>
      <div className="section-auth relative z-10 h-screen">
        <SignupForm createUser={createUser}></SignupForm>
        <div>
          <Image
            src={logo}
            alt="Panama Beer Club "
            className="hidden md:block"
          />
        </div>
      </div>
    </>
  );
}
