"use client";
import { useEffect } from "react";

export default function TransactionPanel({ getLocalStorageData }) {
  useEffect(() => {
    const data = {
      userID: localStorage.getItem("userData"),
      CartItems: localStorage.getItem("cartItems"),
      plan: localStorage.getItem("plan"),
    };
    console.log("ejecucion");
    getLocalStorageData(data);
  }, []);

  return (
    <div className="h-[80vh]">
      <h1>Transaction</h1>
      <p>Thank you for your purchase.</p>
    </div>
  );
}
