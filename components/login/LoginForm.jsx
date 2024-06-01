"use client";
import googleicon from "@/public/images/Google.svg";
import Image from "next/image";
import Link from "next/link";
import Modal from "../Modal";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm({ validateUser, redirect }) {
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
      console.log(atob(session));
      redirect(atob(session));
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
    console.log(form);
    const loginResponse = await validateUser(form);
    if (loginResponse !== "Incorrect email or password") {
      setModalContent("logged in!");
      modalRef.current.showModal();
      const dataEncrypted = btoa(loginResponse);
      localStorage.setItem("userData", dataEncrypted);
      console.log(dataEncrypted);
      setTimeout(() => redirect(loginResponse), 3000);
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
