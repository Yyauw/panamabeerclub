import Link from "next/link";
import User from "@/models/User";
import connectDB from "@/lib/connectDB";
import Address from "@/models/Address";
import logo from "@/public/images/logo.svg";
import Image from "next/image";
import googleicon from "@/public/images/Google.svg";
import bglogin from "@/public/images/bg-login.svg";

export default function LoginPage() {
  const fetchUsers = async () => {
    await connectDB();
    const users = await User.find({}).populate({
      path: "address",
    });
    console.log(users[0]);
  };
  //fetchUsers();
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
      <div className="section-auth relative z-10 h-[100vh]">
        <div>
          <Image src={logo} alt="Panama Beer Club" />
        </div>
        <div className="auth-container">
          <h2>Login To Your Account</h2>
          <p>Start Tasting...</p>
          <div>
            <label className="input input-bordered flex items-center gap-2 mb-3">
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input type="password" className="grow" placeholder="Password" />
            </label>
          </div>
          <div>
            <Link href={"/auth/login"}>
              <p>Forgot Your Password?</p>
            </Link>
          </div>
          <button className="btn-auth">Login</button>

          <p>Or</p>

          <button className="btn-google">
            <Image src={googleicon} alt="Google" />
            <p>Continue with Google</p>
          </button>

          <div>
            <p>
              Don&apos;t have an account?
              <br />
              <Link href={"/signup"}>
                <span>Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
