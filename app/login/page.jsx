import Link from "next/link";
import User from "@/models/User";
import connectDB from "@/lib/connectDB";
import Address from "@/models/Address";
import logo from "@/public/images/logo.svg";
import Image from "next/image";
import bglogin from "@/public/images/bg-login.svg";
import LoginForm from "@/components/login/LoginForm";
import { redirect } from "next/navigation";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";
export default function LoginPage() {
  // const fetchUsers = async () => {
  //   await connectDB();
  //   const users = await User.find({}).populate({
  //     path: "address",
  //   });
  //   console.log(users[0]);
  // };
  // //fetchUsers();

  const redirectExistingUser = async (session) => {
    "use server";
    await connectDB();
    console.log(session);
    const user = await User.findOne({ _id: session });
    console.log(user);
    if (user.userType === "admin") redirect("/admin");
    if (user.userType === "client") redirect("/user/catalog");
  };

  const validateUser = async (userData) => {
    "use server";
    const { email, password } = userData;
    const loginResponse = signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const userFB = userCredential.user;
        console.log("logged in!");
        await connectDB();
        const user = await User.findOne({ uid: userFB.uid }).exec();
        console.log(user);
        return JSON.stringify(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        return "Incorrect email or password";
      });
    return loginResponse;
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Image src={bglogin} alt="Background" layout="fill" objectFit="cover" />
      </div>
      <div className="section-auth relative z-10 h-[100vh] ">
        <Link href="/">
          <Image
            src={logo}
            alt="Panama Beer Club"
            className="hidden md:block"
          />
        </Link>
        <LoginForm
          validateUser={validateUser}
          redirect={redirectExistingUser}
        ></LoginForm>
      </div>
    </>
  );
}
