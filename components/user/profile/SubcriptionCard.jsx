"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import ConfirmationModal from "@/components/ConfirmationModal";

export default function SubcriptionCard({
  fetchSubcriptionData,
  cancelSubcription,
  reActivateSubcription,
}) {
  const modalRef = useRef();
  const content =
    "Estas seguro de cancelar tu subcripcion?, tus pedidos aun llegaran pero no se te rebolsara el dinero.";
  const [subscription, setSubscription] = useState(null);
  const [change, setChange] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("userData");
    fetchSubcriptionData(user).then((data) => {
      console.log(data);
      setSubscription(JSON.parse(data));
    });
  }, [change]);

  const openModal = () => {
    modalRef.current.showModal();
  };
  const handleConfirm = () => {
    cancelSubcription(subscription.stripeId);
    setChange(!change);
    modalRef.current.close();
  };

  const handleReActivate = () => {
    reActivateSubcription(subscription.stripeId);
    setChange(!change);
  };

  return (
    <div className="border-2 rounded-md mt-2 bg-secondary border-hidden p-4">
      <ConfirmationModal
        modalRef={modalRef}
        content={content}
        handleConfirm={handleConfirm}
      />
      <h1 className="text-2xl font-bold text-center">Subscription</h1>
      {subscription ? (
        <div>
          <p className="text-cbg my-3 ">
            <span className="font-bold">Plan: </span> {subscription?.plan}
          </p>
          {subscription?.status === "activo" ? (
            <>
              {" "}
              <p className="text-cbg my-3 ">
                <span className="font-bold">Next payment: </span>{" "}
                {subscription?.nextPayment.split("T")[0]}
              </p>
              <p className="text-cbg my-3 ">
                <span className="font-bold">Billing: </span>{" "}
                {subscription?.price}$ + ITBMS
              </p>
            </>
          ) : null}
          <p className="text-cbg my-3 ">
            <span className="font-bold">Estado: </span> {subscription?.status}
          </p>
          <Link
            href={subscription?.invoice}
            target="_blank"
            className="link link-primary"
          >
            Descargar factura
          </Link>
          <p className="text-center mt-4 grid grid-cols-2 gap-2">
            {subscription?.status === "activo" ? (
              <button className="btn btn-error text-white " onClick={openModal}>
                Cancelar subcripcion
              </button>
            ) : (
              <button
                className="btn btn-success text-white "
                onClick={handleReActivate}
              >
                Reactivar subcripcion
              </button>
            )}

            <Link href="./pricing" className="btn btn-primary ">
              Cambiar plan
            </Link>
          </p>
        </div>
      ) : (
        <p className="text-cbg my-3 ">
          <span className="font-bold">
            No tiene ninguna subcripcion activa{" "}
          </span>
        </p>
      )}
    </div>
  );
}
