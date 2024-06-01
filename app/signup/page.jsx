import Link from "next/link";
import User from "@/models/User";
import connectDB from "@/lib/connectDB";
import Address from "@/models/Address";
import logo from "@/public/images/logo.svg";
import Image from "next/image";
import { redirect } from "next/navigation";

import bglogin from "@/public/images/bg-login.svg";
import SignupForm from "@/components/signup/SignupForm";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";

export default function signupPage() {
  const redirectExistingUser = async (session) => {
    "use server";
    await connectDB();
    const userData = JSON.parse(session);
    const user = await User.findById(userData._id).exec();
    console.log(user);
    if (user.userType === "admin") redirect("/admin");
    if (user.userType === "admin") redirect("/user");
  };

  const createUser = async (userData) => {
    "use server";
    const { name, lastName, email, password, phoneNumber, birthDate } =
      userData;
    await connectDB();
    // const addrss = new Address({
    //   address: "casa a1",
    //   description: "beside the school",
    //   lng: 8.431676910487093,
    //   lat: -823.92032323233,
    // });
    // addrss.save();

    //signup crea la cuenta en firebase
    const signupResponse = createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed up
        //sacamos las credenciales que nos genera google
        const user = userCredential.user;
        console.log(user.uid);
        const person = new User({
          name,
          lastName,
          birthDate,
          email,
          phoneNumber,
          uid: user.uid,
          userType: "admin",
        });
        await person.save();
        return JSON.stringify(person);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(error);
        return error.message;
      });

    //devolvemos los datos del usuario, en caso de error se devuelve el mensaje de error
    return signupResponse;

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
        <SignupForm
          createUser={createUser}
          redirect={redirectExistingUser}
        ></SignupForm>
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
