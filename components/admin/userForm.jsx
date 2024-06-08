"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Modal from "../Modal";

export default function UserForm({
  data,
  editUser = undefined,
  msg,
  createUser = undefined,
}) {
  const modalRef = useRef();
  const [modalContent, setModalContent] = useState("");
  const router = useRouter();
  const [userInfo, setUserInfo] = useState(JSON.parse(data));

  // Set the form data with the user info
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    birthDate: "",
    userType: "client",
  });

  // Set the form data with the user info
  useEffect(() => {
    if (data === undefined) return;
    // Parse the user info

    setFormData({
      name: userInfo.name,
      lastName: userInfo.lastName,
      email: userInfo.email,
      phoneNumber: userInfo.phoneNumber,
      birthDate: new Date(userInfo.birthDate).toISOString().replace(/T.*/, ""),
      userType: userInfo.userType,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario

    if (editUser) {
      editUser(userInfo._id, { ...data, ...formData });
    }

    if (createUser) createUser(formData);
    setModalContent(msg);
    modalRef.current.showModal();
    setTimeout(() => router.push("/admin/users"), 3000);
  };

  return (
    <>
      <Modal modalRef={modalRef} content={modalContent}></Modal>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-white">Añadir Usuario</h2>

        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-900 border-gray-700"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="lastname"
          >
            Apellido
          </label>
          <input
            type="text"
            id="lastname"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-900 border-gray-700"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-900 border-gray-700"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-900 border-gray-700"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="birthdate"
          >
            Fecha de Nacimiento
          </label>
          <input
            type="date"
            id="birthdate"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-900 border-gray-700"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="userType"
          >
            Tipo de Usuario
          </label>
          <select
            id="userType"
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-900 border-gray-700"
          >
            <option value="admin">Admin</option>
            <option value="client">Client</option>
            <option value="delivery">Delivery</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Añadir Usuario
          </button>
        </div>
      </form>
    </>
  );
}
