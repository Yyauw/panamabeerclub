"use client";

import CartItem from "./CartItem";
import Fula from "@/public/images/Fula.png";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import Link from "next/link";

export default function CartModal({ closeModal }) {
  const [sub, setSub] = useState(false);
  const [isInPeriod, setIsInPeriod] = useState(false);
  const { items, addItem, removeItem, plan, beerCapacity } =
    useContext(CartContext);
  const totalItems = items.reduce((acc, item) => acc + item.cartQuantity, 0);

  useEffect(() => {
    const subcription = JSON.parse(localStorage.getItem("subscription"));
    if (subcription) {
      const subcriptionDate = new Date(subcription.subscriptionDate);
      subcription.deliveryDate = subcriptionDate.setDate(
        subcriptionDate.getDate() + 7
      );
      const today = new Date();

      subcription.deliveryDate = new Date(
        subcription.deliveryDate
      ).toLocaleDateString();
      setIsInPeriod(today < new Date(subcription.nextPayment));
    }
    setSub(subcription);
  }, []);

  return (
    <>
      <div
        className="backdrop fixed w-screen h-screen  top-0 left-0 bg-black/80 z-20 "
        onClick={closeModal}
      ></div>
      <div className=" fixed w-[85vw] md:w-[35vw] h-screen bg-primary z-40 top-0 right-0 p-4 flex flex-col">
        <h1 className="text-3xl font-bold text-black text-center">Beer Cart</h1>
        <div className="border-2 rounded-md bg-secondary border-hidden px-3 my-2 grid-cols-2 grid">
          <p className="text-cbg my-3 ">
            <span className="font-bold">Plan: </span> {plan}
          </p>
        </div>

        {isInPeriod ? (
          <p className="text-black text-center text-xl font-bold">
            Ya has seleccionado tu cervezas en este periodo. Podras seleccionar
            tus proximas cervezas despues de el {sub?.nextPayment.split("T")[0]}
            <br />
            Puedes ver tus pedidos{" "}
            <Link href="/user/orders" className="link link-secondary">
              aqui
            </Link>
          </p>
        ) : (
          <>
            <p className="notranslate text-xl text-black mt-4">
              Current Selection: {totalItems}/{beerCapacity}
            </p>
            <div className="overflow-auto">
              {items.map((i) => (
                <CartItem
                  item={i}
                  key={i._id}
                  addItem={addItem}
                  removeItem={removeItem}
                ></CartItem>
              ))}
            </div>
            <Link
              href="/user/confirmation"
              onClick={closeModal}
              className="mt-auto btn "
            >
              Confirm Selection
            </Link>
          </>
        )}
      </div>
    </>
  );
}
