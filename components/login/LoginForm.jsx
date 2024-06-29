"use client";
import googleicon from "@/public/images/Google.svg";
import Image from "next/image";
import Link from "next/link";
import Modal from "../Modal";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm({
  validateUser,
  redirect,
  loadSubscription,
}) {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const modalRef = useRef();
  const [modalContent, setModalContent] = useState("");

  //si el usuario ya tiene una session lo redirige
  useEffect(() => {
    const session = localStorage.getItem("userData");
    if (session) {
      redirect(session);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((previousState) => {
      return { ...previousState, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginResponse = await validateUser(form);
    if (loginResponse !== "Incorrect email or password") {
      setModalContent("logged in!");
      modalRef.current.showModal();
      const user = JSON.parse(loginResponse);
      if (user.preference) {
        const preferences = JSON.stringify(user.preference);
        localStorage.setItem("preferences", preferences);
      }
      const subscription = await loadSubscription(user._id);
      if (subscription) {
        localStorage.setItem("plan", JSON.parse(subscription).plan);
        localStorage.setItem("subscription", subscription);
      }
      localStorage.setItem("userData", user._id);
      setTimeout(() => redirect(user._id), 3000);
      return;
    }
    setModalContent(loginResponse);
    modalRef.current.showModal();
  };

  return (
    <>
      <Modal modalRef={modalRef} content={modalContent}></Modal>
      <form className="auth-container" onSubmit={handleSubmit}>
        <h2>Login To Your Account</h2>
        <p>Start Tasting...</p>
        <div>
          <label className="input input-bordered flex items-center gap-2 mb-3">
            <input
              type="text"
              className="grow"
              placeholder="Email"
              name="email"
              required
              onChange={handleChange}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="password"
              className="grow"
              placeholder="Password"
              name="password"
              required
              onChange={handleChange}
            />
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
      </form>
    </>
  );
}
