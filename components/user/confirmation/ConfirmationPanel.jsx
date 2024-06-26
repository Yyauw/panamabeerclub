"use client";
import { useState, useRef } from "react";
import Modal from "@/components/Modal";

const checkAddress = () => {
  const address = localStorage.getItem("address");
  if (address) {
    return true;
  } else {
    return false;
  }
};

export default function ConfirmationPanel() {
  const [isDataComplete, setIsDataComplete] = useState(false);
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
        body: JSON.stringify({ priceId }),
      });
      const data = await res.json();
      window.location.href = data.session;
    }
  };

  return (
    <>
      <Modal></Modal>
      <button className="btn btn-primary" onClick={handleConfirmation}>
        Confirmar
      </button>
    </>
  );
}
