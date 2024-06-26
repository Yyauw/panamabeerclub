"use client";
import { useEffect } from "react";

export default function ConfirmationPanel() {
  const priceId = "price_1PNP8tIJkH0G341VKxYIdihH";
  const handleConfirmation = async () => {
    console.log("Confirmation");
    const res = await fetch("/api/pay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ priceId }),
    });
    const data = await res.json();
    window.location.href = data.session;
  };

  return (
    <button className="btn btn-primary" onClick={handleConfirmation}>
      Confirmar
    </button>
  );
}
