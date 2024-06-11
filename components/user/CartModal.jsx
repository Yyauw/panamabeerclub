import ItemCard from "./catalog/ItemCard";
import Fula from "@/public/images/Fula.png";
import Image from "next/image";

export default function CartModal({ closeModal }) {
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
        <p className="text-xl text-black mt-4">Current Selection: 4/6</p>
        <div className="">
          <div className="border-2 rounded-md bg-slate-50 grid grid-cols-4 my-3 p-2 w-[100%]">
            <figure className="">
              {" "}
              <Image
                src={Fula}
                width={30}
                className=" max-h-[250px] object-center mx-auto"
              />
            </figure>
            <h1 className="text-black text-xl col-span-2">Fula</h1>
            <div className="flex flex-row ms-auto my-auto">
              {" "}
              <button className="btn btn-xs btn-primary">-</button>
              <p className="mx-2 text-black">3</p>
              <button className="btn btn-xs btn-primary">+</button>
            </div>
          </div>
          <div className="border-2 rounded-md bg-slate-50 grid grid-cols-4 my-3 p-2 w-[100%]">
            <figure className="">
              {" "}
              <Image
                src={Fula}
                width={30}
                className=" max-h-[250px] object-center mx-auto"
              />
            </figure>
            <h1 className="text-black text-xl col-span-2">Fula 2</h1>
            <div className="flex flex-row ms-auto my-auto">
              {" "}
              <button className="btn btn-xs btn-primary">-</button>
              <p className="mx-2 text-black">1</p>
              <button className="btn btn-xs btn-primary">+</button>
            </div>
          </div>
        </div>
        <button className="mt-auto btn ">Confirm Selection</button>
      </div>
    </>
  );
}
