"use client";

import CartItem from "./CartItem";
import Fula from "@/public/images/Fula.png";
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function CartModal({ closeModal }) {
  const { items, addItem, removeItem } = useContext(CartContext);
  const totalItems = items.reduce((acc, item) => acc + item.cartQuantity, 0);

  return (
    <>
      <div
        className="backdrop fixed w-screen h-screen  top-0 left-0 bg-black/80 z-20 "
        onClick={closeModal}
      ></div>
      <div className=" fixed w-[35vw] h-screen bg-primary z-40 top-0 right-0 p-4 flex flex-col">
        <h1 className="text-3xl font-bold text-black text-center">Beer Cart</h1>
        <div className="border-2 rounded-md bg-secondary border-hidden px-3 my-2 grid-cols-2 grid">
          <p className="text-cbg my-3 ">
            <span className="font-bold">Plan: </span> Basic
          </p>
          <p className="text-cbg my-3 ms-auto">
            <span className="font-bold">Shipping Date: </span> 1/7/2024
          </p>
        </div>
        <p className="text-xl text-black mt-4">
          Current Selection: {totalItems}/6
        </p>
        <div className="">
          {items.map((i) => (
            <CartItem
              item={i}
              key={i._id}
              addItem={addItem}
              removeItem={removeItem}
            ></CartItem>
          ))}
        </div>
        <button className="mt-auto btn ">Confirm Selection</button>
      </div>
    </>
  );
}
