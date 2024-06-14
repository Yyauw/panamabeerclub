"use client";
import { useState, useRef, useEffect } from "react";
import Modal from "@/components/Modal";
import { useRouter } from "next/navigation";

export default function SouvenirForm({
  createSouvenir = undefined,
  editSouvenir = undefined,
  msg,
  data,
}) {
  const router = useRouter();
  const modalRef = useRef();
  const [modalContent, setModalContent] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    description: "",
  });

  useEffect(() => {
    if (data === undefined) return;
    const souvenirInfo = data;
    setFormData({
      name: souvenirInfo.name,
      quantity: souvenirInfo.quantity,
      description: souvenirInfo.description,
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
    if (editSouvenir) {
      setModalContent("Producto actualizado correctamente");
      modalRef.current.showModal();
      editSouvenir(data._id, { ...data, ...formData });
      setTimeout(() => router.push("/admin/souvenirs"), 3000);
      return;
    }

    setModalContent("Producto añadido correctamente");
    modalRef.current.showModal();
    createSouvenir(formData);
    setTimeout(() => router.push("/admin/souvenirs"), 3000);
    // Aquí puedes manejar el envío del formulario
  };

  return (
    <>
      <Modal modalRef={modalRef} content={modalContent}></Modal>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-white">Añadir Producto</h2>

        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Nombre
          </label>
          <input
            required
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
            htmlFor="quantity"
          >
            Cantidad
          </label>
          <input
            required
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-900 border-gray-700"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Descripción
          </label>
          <textarea
            required
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-900 border-gray-700"
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Añadir Producto
          </button>
        </div>
      </form>
    </>
  );
}
