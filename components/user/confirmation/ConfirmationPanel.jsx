"use client";
import { useState, useRef, useContext, useEffect } from "react";
import Modal from "@/components/Modal";
import BeerItem from "./BeerItem";
import { CartContext } from "../CartContext";
import Link from "next/link";
import misterio from "@/public/images/misterio.jpg";
import { useRouter } from "next/navigation";

const checkAddress = () => {
  const address = localStorage.getItem("address");
  if (address) {
    return true;
  } else {
    return false;
  }
};

const checkPlan = () => {
  const plan = localStorage.getItem("plan");
  if (plan === "basico") return "price_1PXDOUIJkH0G341VFbCs3jAI";
  if (plan === "experto") return "price_1PXDLrIJkH0G341VN73a2lSG";
  if (plan === "guru") return "price_1PXDOvIJkH0G341VEORmZQf1";
};

export default function ConfirmationPanel({
  fetchUser,
  fetchSubcription,
  createShipment,
}) {
  const { items, plan, beerCapacity } = useContext(CartContext);
  const [userData, setUserData] = useState();
  const [subscription, setSubscription] = useState();
  const [content, setContent] = useState("");
  const [userCart, setUserCart] = useState(items);
  const modalRef = useRef();
  const router = useRouter();
  const [isInPeriod, setIsInPeriod] = useState(false);
  const [minDate, setMinDate] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleConfirmation = async () => {
    let isDataComplete = false;
    const priceId = checkPlan();
    console.log("Confirmation");

    if (userData.address.length === 0) {
      setContent(
        <>
          No tienes direcciones registradas, por favor agrega una direccion
          accediendo al perfil, seccion de direcciones:
          <Link href="profile" className="link link-primary">
            {" "}
            Agregar direccion
          </Link>{" "}
        </>
      );
      modalRef.current.showModal();
      return;
    }

    if (!selectedDate) {
      setContent("Por favor selecciona una fecha de envio");
      modalRef.current.showModal();
      return;
    }

    if (checkAddress()) isDataComplete = true;

    if (isInPeriod) {
      const res = await createShipment(
        userCart,
        userData._id,
        subscription._id,
        localStorage.getItem("address"),
        localStorage.getItem("capacity")
      );
      if (res) {
        setContent(
          "Tu pedido ha sido procesado, puedes verlo en tu historial de pedidos."
        );
        modalRef.current.showModal();
        setTimeout(() => router.push("/user/orders"), 3000);
      }
      return;
    }

    if (isDataComplete) {
      const res = await fetch("/api/pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId, email: userData.email }),
      });
      const data = await res.json();
      window.location.href = data.session;
    }
  };

  const setLocation = (e) => {
    localStorage.setItem("address", e.target.value);
  };

  useEffect(() => {
    const userId = localStorage.getItem("userData");
    if (!userId) {
      setContent(
        "Necesitas una cuenta para continuar, accede a tu cuenta o crea una."
      );
      modalRef.current.showModal();
      setTimeout(() => router.push("/login"), 3000);

      return;
    }
    const fetchData = async () => {
      const data = JSON.parse(await fetchUser(userId));
      const sub = JSON.parse(await fetchSubcription(userId));
      console.log(sub);
      if (sub) {
        sub.deliveryDate = new Date(sub?.subscriptionDate);
        sub.deliveryDate.setDate(sub?.deliveryDate.getDate() + 7);
        setSubscription(sub);
      }

      setUserData(data);
      if (data.address.length > 0) {
        localStorage.setItem("address", data.address[0]._id);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const totalItems = userCart.reduce(
      (acc, item) => acc + item.cartQuantity,
      0
    );
    if (totalItems < beerCapacity) {
      const remaining = beerCapacity - totalItems;

      const randItem = {
        _id: "69",
        name: "Cerveza Aleatoria",
        image: misterio.src,
        cartQuantity: remaining,
      };
      localStorage.setItem("capacity", beerCapacity);
      setUserCart((prvs) => [...userCart, randItem]);
      console.log(userCart);
    }
  }, [items]);

  useEffect(() => {
    const calculateMinDate = () => {
      const today = new Date();
      const nextWeek = new Date(today);
      nextWeek.setDate(today.getDate() + 7);

      // Formatea la fecha en YYYY-MM-DD para usar en el input
      const year = nextWeek.getFullYear();
      const month = String(nextWeek.getMonth() + 1).padStart(2, "0"); // Los meses en JavaScript son de 0 a 11
      const day = String(nextWeek.getDate()).padStart(2, "0");

      return `${year}-${month}-${day}`;
    };

    setMinDate(calculateMinDate());

    const subcription2 = JSON.parse(localStorage.getItem("subscription"));
    if (subcription2) setIsInPeriod(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("deliveryDate", selectedDate);
  }, [selectedDate]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <>
      <Modal modalRef={modalRef} content={content}></Modal>
      <section className="border border-none bg-slate-50 w-[80vw] h-[85%] rounded-md grid grid-cols-2">
        <div className="border border-none rounded-md bg-primary p-4 overflow-y-scroll">
          <h1 className="text-center text-3xl font-bold text-black">
            Cesta de cervezas
          </h1>
          <div className="grid grid-cols-2 gap-3 p-2">
            {userCart.map((i) => (
              <BeerItem item={i} key={i._id}></BeerItem>
            ))}
          </div>
        </div>
        <div className="p-4 grid grid-rows-12">
          <h1 className="text-3xl uppercase font-bold text-black text-center">
            Detalles
          </h1>
          <div className="w-[100%] row-span-9">
            <div className="border border-none rounded-md bg-secondary w-[100%] p-2">
              <h1 className="text-xl font-bold">Subcripcion</h1>
              {subscription ? (
                <div className="">
                  <p className="text-cbg my-3 ">
                    <span className="font-bold">Plan: </span>{" "}
                    {subscription?.plan}
                  </p>
                  <p className="text-cbg my-3 ">
                    <span className="font-bold">Fecha de envio: </span>{" "}
                    {subscription?.deliveryDate.toLocaleDateString()}
                  </p>
                  <p className="text-cbg my-3 ">
                    <span className="font-bold">Estado: </span>{" "}
                    {subscription?.status}
                  </p>
                </div>
              ) : (
                <p>No tienes una subcripcion activa.</p>
              )}
            </div>
            <div className="txt-info-section text-black">
              <p className="text-cbg my-3 capitalize">
                <span className="notranslate font-bold capitalize">
                  Nombre:{" "}
                </span>{" "}
                {userData?.name + " " + userData?.lastName}
              </p>
              <p className="text-cbg my-3 ">
                <span className="font-bold">Email: </span> {userData?.email}
              </p>
              <p className="text-cbg my-3">
                <span className="font-bold">Phone number: </span>{" "}
                {userData?.phoneNumber}
              </p>
              <p className="text-cbg my-3">
                <span className="font-bold">BirthDate: </span>{" "}
                {userData?.birthDate.split("T")[0]}
              </p>
              {!isInPeriod && (
                <p className="text-cbg my-3">
                  <span className="font-bold">Subcripcion a comprar: </span>{" "}
                  plan {plan}
                </p>
              )}
            </div>
            <div className="fechaSelecion">
              <h1 className="text-black font-bold ">Fecha de envio</h1>
              <label className="input input-bordered flex items-center gap-2 m-1">
                <input
                  type="date"
                  className="grow"
                  placeholder="deliveryDate"
                  name="deliveryDate"
                  id="deliveryDate"
                  required
                  min={minDate}
                  onChange={handleDateChange}
                />
              </label>
            </div>
            <div className="direction-select mt-auto">
              <h1 className="text-black font-bold ">Direccion de envio</h1>

              <select
                className="select select-bordered w-full"
                onChange={setLocation}
              >
                {userData?.address.map((a) => {
                  return <option value={a._id}>{a.address}</option>;
                })}
              </select>
            </div>
          </div>
          <button
            className="btn btn-primary mt-auto row-span-2"
            onClick={handleConfirmation}
          >
            {!isInPeriod ? "Confirmar" : "Confirmar seleccion de cervezas"}
          </button>
        </div>
      </section>
    </>
  );
}
