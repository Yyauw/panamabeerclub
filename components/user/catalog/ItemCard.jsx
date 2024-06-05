import Fula from "@/public/images/Fula.png";
import SearhIcon from "@/public/icon/Search.svg";
import Image from "next/image";

export default function ItemCard() {
  return (
    <>
      <div class="border-2 rounded-lg bg-slate-100 shadow-xl max-h-[250px] text-black">
        <div className="grid grid-cols-3">
          <figure className="">
            {" "}
            <Image
              src={Fula}
              width={50}
              className=" max-h-[250px] object-center mx-auto"
            />
          </figure>
          <div className="col-span-2 p-2">
            <h1 className="text-xl font-bold">Fula</h1>
            <p>
              <span className="font-bold">Style:</span> Pale
            </p>
            <p>
              <span className="font-bold">Body:</span> Complete
            </p>
            <p>
              <span className="font-bold">Aroma:</span> Citrus
            </p>
            <p>
              <span className="font-bold">Brand:</span> Casa Bruja
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="flex flex-row mx-auto">
            {" "}
            <button className="btn btn-xs btn-primary">-</button>
            <p className="mx-2">0</p>
            <button className="btn btn-xs btn-primary">+</button>
          </div>
          <div className="ms-auto col-span-2 hover:cursor-pointer">
            <Image src={SearhIcon} width={30}></Image>
          </div>
        </div>
      </div>
    </>
  );
}
