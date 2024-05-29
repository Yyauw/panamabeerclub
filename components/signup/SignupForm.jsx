"use client";
import googleicon from "@/public/images/Google.svg";
import Image from "next/image";
import Link from "next/link";
import { validateForm } from "@/lib/formHelper";
import Modal from "../Modal";
import { useState, useRef } from "react";

export default function SignupForm({ createUser }) {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    birthDate: "",
  });
  const modalRef = useRef();
  const [modalContent, setModalContent] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((previousState) => {
      return { ...previousState, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    if (validateForm(form, setModalContent, modalRef)) {
      //TODO sacar las respuestas de la encuesta del usuario del localhost si hay
      //crear la session del usuario despues de haberlo registrado
      createUser(form);
      setModalContent("Cuenta creada");
      modalRef.current.showModal();
      //   setForm({
      //     name: "",
      //     lastName: "",
      //     email: "",
      //     phoneNumber: "",
      //     birthDate: "",
      //   });
      console.log("creando usuario!!");
    }
  };
  return (
    <>
      <Modal modalRef={modalRef} content={modalContent}></Modal>
      <form className="auth-container mt-80 md:mt-0" onSubmit={handleSubmit}>
        <h2>Create An Account</h2>
        <div className="auth-inputs">
          <label className="input input-bordered flex items-center gap-2 m-1">
            <input
              type="text"
              className="grow"
              placeholder="Name"
              name="name"
              id="name"
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 m-1">
            <input
              type="text"
              className="grow"
              placeholder="Last Name"
              name="lastName"
              id="lastname"
              required
              value={form.lastName}
              onChange={handleChange}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 m-1">
            <input
              type="text"
              className="grow"
              placeholder="Email"
              name="email"
              id="email"
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 m-1">
            <input
              type="password"
              className="grow"
              placeholder="Password"
              name="password"
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 m-1">
            <input
              type="date"
              className="grow"
              placeholder="Birthdate"
              name="birthDate"
              id="birthdate"
              required
              value={form.birthDate}
              onChange={handleChange}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 m-1">
            <input
              type="text"
              className="grow"
              placeholder="Phone Number"
              name="phoneNumber"
              id="phonenumber"
              required
              value={form.phoneNumber}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="auth-terms-checkbox p-1 flex items-center">
          <input
            type="checkbox"
            className="checkbox"
            name="terms"
            id="terms"
            required
          />
          <p>Accept terms & conditions</p>
        </div>
        <button className="btn-auth text-black">Sign Up</button>

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
      </form>
    </>
  );
}
