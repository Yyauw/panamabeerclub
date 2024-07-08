"use client";
import { CartContext } from "../CartContext";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
export default function SubInfo() {
  const { items, plan, beerCapacity } = useContext(CartContext);
  const totalItems = items.reduce((acc, item) => acc + item.cartQuantity, 0);
  const [sub, setSub] = useState(false);
  const [isInPeriod, setIsInPeriod] = useState(false);

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
    <div className="border-2 rounded-xl mt-2 bg-secondary/50 border-hidden p-4 mx-auto">
      {isInPeriod ? (
        <p className="">
          Ya has seleccionado tu cervezas en este periodo.
          <br />
          Puedes ver tus pedidos{" "}
          <Link href="/user/orders" className="link link-primary">
            aqui
          </Link>
        </p>
      ) : (
        <>
          <h1 className="notranslate text-2xl font-bold text-center">
            Plan {plan}
          </h1>
          <p className="notranslate text-cbg my-3 text-center">
            <span className="notranslate font-bold">Cervezas: </span>{" "}
            {totalItems}/{beerCapacity}
          </p>
          <p className="text-center mt-4">
            <Link href="/user/pricing" className="btn btn-primary btn-sm px-10">
              Confirmar Seleccion
            </Link>
          </p>
        </>
      )}
    </div>
  );
}
