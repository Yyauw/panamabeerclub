"use client";
import { useEffect, useRef } from "react";

export default function TransactionPanel({ getLocalStorageData }) {
  const initialized = useRef(false);
  useEffect(() => {
    const data = {
      userID: localStorage.getItem("userData"),
      CartItems: localStorage.getItem("cartItems"),
      plan: localStorage.getItem("plan"),
    };
    console.log("ejecucion");
    if (!initialized.current) {
      initialized.current = true;
      getLocalStorageData(data);
    }
  }, []);

  return (
    <div className="h-[80vh]">
      <h1>Transaction</h1>
      <p>Thank you for your purchase.</p>
    </div>
  );
}
