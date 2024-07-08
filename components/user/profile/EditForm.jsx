"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EditForm({ fetchUserData, actionHandler }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    phoneNumber: "",
    birthDate: "",
  });
  const [id, setId] = useState("");

  useEffect(() => {
    const idLocal = localStorage.getItem("userData");
    setId(idLocal);

    const loadUserData = async () => {
      const userString = await fetchUserData(idLocal);
      const user = await JSON.parse(userString);
      setFormData({
        name: user.name,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
        birthDate: new Date(user.birthDate).toISOString().replace(/T.*/, ""),
      });
    };
    loadUserData();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await actionHandler(id, formData);
    router.push("/user/profile");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-white">Editar Usuario</h2>

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

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Confirmar
        </button>
      </div>
    </form>
  );
}
