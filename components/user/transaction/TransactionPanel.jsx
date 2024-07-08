"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function TransactionPanel({ getLocalStorageData }) {
  const initialized = useRef(false);
  useEffect(() => {
    const createSubscription = async () => {
      const data = {
        userID: localStorage.getItem("userData"),
        CartItems: localStorage.getItem("cartItems"),
        plan: localStorage.getItem("plan"),
        address: localStorage.getItem("address"),
        capacity: localStorage.getItem("capacity"),
        deliveryDate: localStorage.getItem("deliveryDate"),
      };
      console.log("ejecucion");
      if (!initialized.current) {
        initialized.current = true;
        const sub = await getLocalStorageData(data);
        localStorage.setItem("subscription", sub);
      }
    };
    createSubscription();
  }, []);

  return (
    <div className="min-h-screen h-[85vh] flex items-center justify-center bg-secondary/20">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-4"></div>
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          ¡Pago Exitoso!
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Tu transacción ha sido completada con éxito. Gracias por tu compra.
        </p>
        <div className="flex justify-center">
          <Link
            href="/user/orders"
            className="btn bg-secondary text-white px-4 py-2 rounded"
          >
            Ver Pedidos
          </Link>
        </div>
      </div>
    </div>
  );
}
