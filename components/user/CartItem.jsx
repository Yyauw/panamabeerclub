"use client";
import Image from "next/image";

export default function CartItem({ item, addItem, removeItem }) {
  return (
    <div className="border-2 rounded-md bg-slate-50 grid grid-cols-4 my-3 p-2 w-[100%]">
      <figure className="">
        {" "}
        <img
          src={item.image}
          className="w-[30px] max-h-[250px] object-center mx-auto"
          alt={item.name}
        />
      </figure>
      <h1 className="notranslate text-black text-xl col-span-2">{item.name}</h1>
      <div className="flex flex-row ms-auto my-auto">
        {" "}
        <button
          className="btn btn-xs btn-primary"
          onClick={() => removeItem(item)}
        >
          -
        </button>
        <p className="mx-2 text-black">{item.cartQuantity}</p>
        <button
          className="btn btn-xs btn-primary"
          onClick={() => addItem(item)}
        >
          +
        </button>
      </div>
    </div>
  );
}
