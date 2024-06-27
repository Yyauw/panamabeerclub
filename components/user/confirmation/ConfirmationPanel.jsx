"use client";
import { useState, useRef, useContext } from "react";
import Modal from "@/components/Modal";
import BeerItem from "./BeerItem";
import { CartContext } from "../CartContext";

const checkAddress = () => {
  const address = localStorage.getItem("address");
  if (address) {
    return true;
  } else {
    return false;
  }
};

export default function ConfirmationPanel() {
  const { items, plan, beerCapacity } = useContext(CartContext);
  const [isDataComplete, setIsDataComplete] = useState(true);
  const [content, setContent] = useState("");
  const modalRef = useRef();
  const priceId = "price_1PNP8tIJkH0G341VKxYIdihH";
  const handleConfirmation = async () => {
    console.log("Confirmation");
    if (isDataComplete) {
      const res = await fetch("/api/pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId, email: "yau222@gmail.com" }),
      });
      const data = await res.json();
      window.location.href = data.session;
    }
  };

  return (
    <>
      <Modal></Modal>
      <section className="border border-none bg-slate-300 w-[80vw] h-[85%] rounded-md grid grid-cols-2">
        <div className="border border-none bg-primary p-4 overflow-y-scroll">
          <h1 className="text-center text-3xl font-bold text-black">
            Cesta de cervezas
          </h1>
          <div className="grid grid-cols-2 gap-3 p-2">
            {items.map((i) => (
              <BeerItem item={i} key={i._id}></BeerItem>
            ))}
          </div>
        </div>
        <div className="p-4">
          <h1 className="text-3xl uppercase font-bold text-black text-center">
            Detalles
          </h1>
          <button className="btn btn-primary" onClick={handleConfirmation}>
            Confirmar
          </button>
        </div>
      </section>
    </>
  );
}
