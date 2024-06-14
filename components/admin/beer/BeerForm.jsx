"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal";

export default function BeerForm({
  data = undefined,
  editBeer = undefined,
  msg,
  actionHandler = undefined,
}) {
  const modalRef = useRef();
  const [modalContent, setModalContent] = useState("");
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    style: "lager",
    ibu: "",
    alc: "",
    aroma: "citrico",
    body: "ligero",
    quantity: "",
    company: "casa bruja",
    description: "",
    image: "",
  });

  useEffect(() => {
    if (data === undefined) return;
    // Parse the beer info
    const beerInfo = data;
    setFormData({
      name: beerInfo.name,
      style: beerInfo.style,
      ibu: beerInfo.ibu,
      alc: beerInfo.alc,
      aroma: beerInfo.aroma,
      body: beerInfo.body,
      quantity: beerInfo.quantity,
      company: beerInfo.company,
      description: beerInfo.description,
      image: beerInfo.image,
      id: beerInfo._id,
    });
  }, []);

  const handleChange = (e) => {
    const { name, type, files, value } = e.target;

    if (type === "file") {
      // Si el tipo de input es 'file', obtenemos el archivo seleccionado
      const file = files[0];
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: file,
      }));
    } else {
      // Si no, manejamos el input normalmente
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleClick = (e) => {
    if (
      formData.name === "" ||
      formData.ibu === "" ||
      formData.alc === "" ||
      formData.quantity === ""
    )
      return;
    setModalContent(msg);
    modalRef.current.showModal();
    setTimeout(() => router.push("/admin/beers"), 3000);
  };

  return (
    <div className="">
      <Modal modalRef={modalRef} content={modalContent}></Modal>
      <form
        action={editBeer === undefined ? actionHandler : editBeer}
        className="max-w-lg p-8 rounded-lg shadow-md"
      >
        {editBeer !== undefined && (
          <input
            type="text"
            className="hidden"
            name="id"
            id="id"
            value={formData.id}
            onChange={handleChange}
          />
        )}

        <h2 className="text-2xl font-bold mb-6 text-white">Añadir Cerveza</h2>

        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Nombre de la Cerveza
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
            required
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
            required
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
            htmlFor="body"
          >
            Compañia
          </label>
          <select
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-900 border-gray-700"
          >
            <option value="casa bruja">Casa bruja</option>
            <option value="rana dorada">Rana dorada</option>
            <option value="clandestina">Clandestina</option>
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
            htmlFor="name"
          >
            Descripcion{" "}
          </label>
          <textarea
            id="name"
            name="description"
            value={formData.description}
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
            onClick={handleClick}
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
