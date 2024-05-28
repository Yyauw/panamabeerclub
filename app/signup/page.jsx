import Link from "next/link";
import User from "@/models/User";
import connectDB from "@/lib/connectDB";
import Address from "@/models/Address";
import logo from "@/public/images/logo.svg";
import Image from "next/image";
import googleicon from "@/public/images/Google.svg";
import bglogin from "@/public/images/bg-login.svg";

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
      <div className="section-auth relative z-10 ">
        <div className="auth-container">
          <h2>Create An Account</h2>
          <div className="auth-inputs">
            <label className="input input-bordered flex items-center gap-2 m-1">
              <input
                type="text"
                className="grow"
                placeholder="Name"
                name="name"
                id="name"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 m-1">
              <input
                type="text"
                className="grow"
                placeholder="Last Name"
                name="lastname"
                id="lastname"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 m-1">
              <input
                type="text"
                className="grow"
                placeholder="Email"
                name="email"
                id="email"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 m-1">
              <input type="password" className="grow" placeholder="Password" />
            </label>
            <label className="input input-bordered flex items-center gap-2 m-1">
              <input
                type="date"
                className="grow"
                placeholder="Birthdate"
                name="birthdate"
                id="birthdate"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 m-1">
              <input
                type="text"
                className="grow"
                placeholder="Phone Number"
                name="phonenumber"
                id="phonenumber"
              />
            </label>
          </div>
          <div className="auth-terms-checkbox">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox"
              name="terms"
              id="terms"
            />
            <p>Accept terms & conditions</p>
          </div>
          <button className="btn-auth">Sign Up</button>

          <p>Or</p>

          <button className="btn-google">
            <Image src={googleicon} alt="Google" />
            <p>Sign Up with Google</p>
          </button>

          <div>
            <p>
              Already Have An Account?
              <br />
              <Link href={"/login"}>
                <span>Login</span>
              </Link>
            </p>
          </div>
        </div>
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
