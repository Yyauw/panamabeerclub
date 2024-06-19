"use client";
import { CartContext } from "../CartContext";
import { useContext } from "react";
export default function SubInfo() {
  const { items } = useContext(CartContext);
  const totalItems = items.reduce((acc, item) => acc + item.cartQuantity, 0);
  return (
    <div className="border-2 rounded-xl mt-2 bg-secondary/50 border-hidden p-4">
      <h1 className="text-2xl font-bold text-center">Basic Plan</h1>
      <p className="text-cbg my-3 text-center">
        <span className="font-bold">Beers: </span> {totalItems}/6
      </p>
      <p className="text-center mt-4">
        <button className="btn btn-primary btn-sm">Change Plan</button>
      </p>
    </div>
  );
}
