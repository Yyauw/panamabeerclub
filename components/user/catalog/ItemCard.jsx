"use client";
import SearhIcon from "@/public/icon/Search.svg";
import Image from "next/image";
import ItemModal from "./ItemModal";
import { useRef, useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";

export default function ItemCard({ beer }) {
  const modalRef = useRef();
  const { items, addItem, removeItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  const totalItems = items.reduce((acc, item) => acc + item.cartQuantity, 0);

  const openModal = () => {
    modalRef.current.showModal();
  };

  const addHandler = () => {
    if (totalItems === 6) {
      alert("You can only select 6 beers");
      return;
    }
    setQuantity(quantity + 1);
    addItem(beer);
    console.log(items);
  };

  const removeHandler = () => {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
    removeItem(beer);
  };

  return (
    <>
      <ItemModal item={beer} modalRef={modalRef}></ItemModal>
      <div class="border-2 rounded-lg bg-slate-100 shadow-xl max-h-[250px] text-black flex flex-col">
        <div className="grid grid-cols-3 h-[100%]">
          <figure className="flex">
            {" "}
            <img
              src={beer.image}
              alt={beer.name}
              className=" max-h-[200px] object-center m-auto"
            />
          </figure>
          <div className="col-span-2 p-2">
            <h1 className="text-2xl font-bold uppercase mb-2">{beer.name}</h1>
            <p>
              <span className="font-bold">Style:</span> {beer.style}
            </p>
            <p>
              <span className="font-bold">Body:</span> {beer.body}
            </p>
            <p>
              <span className="font-bold">Aroma:</span> {beer.aroma}
            </p>
            <p>
              <span className="font-bold">Brand:</span> {beer.company}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-auto p-1">
          <div className="flex flex-row mx-auto">
            {" "}
            <button className="btn btn-xs btn-primary" onClick={removeHandler}>
              -
            </button>
            <p className="mx-2">{quantity}</p>
            <button className="btn btn-xs btn-primary" onClick={addHandler}>
              +
            </button>
          </div>
          <div
            className="ms-auto col-span-2 hover:cursor-pointer"
            onClick={openModal}
          >
            <Image src={SearhIcon} width={30}></Image>
          </div>
        </div>
      </div>
    </>
  );
}
