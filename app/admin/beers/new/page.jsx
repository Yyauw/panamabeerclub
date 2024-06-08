"use client";
import { useState } from "react";
export default function newUserFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    style: "lager",
    ibu: "",
    alc: "",
    aroma: "citrico",
    body: "ligero",
    quantity: "",
  });

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
    console.log(formData);
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-white">Añadir Cerveza</h2>

        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Nombre de la Cerveza
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
            htmlFor="style"
          >
            Estilo
          </label>
          <select
            id="style"
            name="style"
            value={formData.style}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-900 border-gray-700"
          >
            <option value="lager">Lager</option>
            <option value="ale">Ale</option>
            <option value="ipa">IPA</option>
            <option value="pilsner">Pilsner</option>
            <option value="stout">Stout</option>
            <option value="otros">Otros</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="ibu"
          >
            IBU
          </label>
          <input
            type="number"
            id="ibu"
            name="ibu"
            value={formData.ibu}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-900 border-gray-700"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="alc"
          >
            Alcohol (%)
          </label>
          <input
            type="number"
            step="0.1"
            id="alc"
            name="alc"
            value={formData.alc}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-900 border-gray-700"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="aroma"
          >
            Aroma
          </label>
          <select
            id="aroma"
            name="aroma"
            value={formData.aroma}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-900 border-gray-700"
          >
            <option value="citrico">Cítrico</option>
            <option value="floral">Floral</option>
            <option value="frutal">Frutal</option>
            <option value="especiado">Especiado</option>
            <option value="otros">Otros</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="body"
          >
            Cuerpo
          </label>
          <select
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-900 border-gray-700"
          >
            <option value="ligero">Ligero</option>
            <option value="medio">Medio</option>
            <option value="completo">Completo</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="quantity"
          >
            Cantidad
          </label>
          <input
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
            htmlFor="image"
          >
            Imagen
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Añadir Cerveza
          </button>
        </div>
      </form>
    </div>
  );
}
