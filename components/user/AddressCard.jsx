import Image from "next/image";
import deleteIcon from "@/public/icon/Delete.svg";
import editIcon from "@/public/icon/Edit.svg";

export default function AddressCard() {
  return (
    <div className="border-2 rounded-md p-3 bg-white text-black my-2">
      <div className="grid grid-cols-3 ">
        <div className=""></div>
        <h1 className="text-center font-bold text-xl">CASITA A1</h1>
        <div className="flex flex-row justify-end">
          <Image
            src={editIcon}
            width={30}
            className="me-4 hover:cursor-pointer"
          ></Image>{" "}
          <Image
            src={deleteIcon}
            width={30}
            className="hover:cursor-pointer"
          ></Image>
        </div>
      </div>
      <div className="btn-wrapper w-[100%] grid grid-cols-5">
        <p className="col-span-4 break-words mt-1">
          descripcionasdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </p>
        <button className="btn btn-xs ms-auto mt-auto btn-outline text-black">
          view Map
        </button>
      </div>
    </div>
  );
}
