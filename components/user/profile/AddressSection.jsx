"use client";
import AddressCard from "../AddressCard";
import ModalForm from "./ModalForm";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AddressSection({
  addNewAddress,
  fetchUserData,
  deleteAddress,
}) {
  const modalRef = useRef();
  const confirmationModalRef = useRef();
  const [addID, setAddId] = useState("");
  const [userData, setUserData] = useState(undefined);
  const [change, setChange] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("userData");
    if (!user) {
      router.push("/login");
    }
    const fetchData = async () => {
      const userfetched = await fetchUserData(user);
      const userParsed = await JSON.parse(userfetched);
      setUserData(userParsed);
    };
    fetchData();
  }, [change]);

  const openModalForm = () => {
    modalRef.current.showModal();
  };
  const deleteAddressHandler = async (address_id) => {
    confirmationModalRef.current.showModal();
    setAddId(address_id);
  };

  const handleConfirm = () => {
    deleteAddress(userData._id, addID);
    localStorage.removeItem("address");
    setChange(!change);
    confirmationModalRef.current.close();
  };

  return (
    <>
      <dialog id="my_modal_1" className="modal" ref={confirmationModalRef}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Message!</h3>
          <p className="py-4">Quieres borrar esta direccion?</p>
          <div className="modal-action">
            <button className="btn btn-success" onClick={handleConfirm}>
              Confirmar
            </button>
            <form method="dialog">
              <button className="btn btn-primary">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <ModalForm
        modalRef={modalRef}
        addNewAddress={addNewAddress}
        setChange={setChange}
      ></ModalForm>
      <div className="w-[60%] border-r-2 px-8">
        <div className="flex w-[100%]">
          <h1 className="font-bold text-3xl ">Addresses</h1>
          <p
            className="ms-auto text-primary my-auto hover:underline hover:cursor-pointer"
            onClick={openModalForm}
          >
            +Add New
          </p>
        </div>
        <div className="overflow-auto p-3 ">
          {userData?.address.map((address) => {
            return (
              <AddressCard
                key={address._id}
                address={address}
                deleteAddress={deleteAddressHandler}
              ></AddressCard>
            );
          })}
        </div>
      </div>
    </>
  );
}
