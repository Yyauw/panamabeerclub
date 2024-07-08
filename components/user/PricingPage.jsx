"use client";
import checkpricing from "@/public/images/checkpricing.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useRef, useState, useEffect } from "react";
import { CartContext } from "@/components/user/CartContext";
import Modal from "../Modal";

export default function pricingPage({ updateSubcription }) {
  const modalRef = useRef();
  const modalRef2 = useRef();
  const [content, setContent] = useState("");
  const [plans, setPlans] = useState("basico");
  const { setPlan, setCartItems, plan } = useContext(CartContext);
  const [sub, setSub] = useState(false);
  const router = useRouter();
  const setPlanHandler = (plan) => {
    localStorage.setItem("plan", plan);
    setPlan(plan);
    const preferences = localStorage.getItem("preferences");
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      localStorage.removeItem("cartItems");
      setCartItems([]);
    }
    if (preferences) {
      router.push("/user/catalog");
      return;
    }
    router.push("/survey");
  };

  const updatePlan = async (newPlan, planName) => {
    const body = {
      stripeId: sub.stripeId,
      newPrice: newPlan,
    };
    const res = await fetch("/api/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (data.session) {
      const subResponse = await updateSubcription(sub.stripeId, planName);
      localStorage.setItem("subscription", subResponse);
      setPlan(planName);
      localStorage.setItem("plan", planName);
      setContent("Plan actualizado correctamente");
      modalRef2.current.showModal();
      return;
    }
    console.log(data);
  };

  const handleConfirm = () => {
    modalRef.current.close();
    if (sub) {
      if (plans === "basico")
        updatePlan("price_1PXDOUIJkH0G341VFbCs3jAI", "basico");
      if (plans === "experto")
        updatePlan("price_1PXDLrIJkH0G341VN73a2lSG", "experto");
      if (plans === "guru")
        updatePlan("price_1PXDOvIJkH0G341VEORmZQf1", "guru");
      return;
    }
    setPlanHandler(plans);
  };

  const openModal = (plan) => {
    const cartItems = localStorage.getItem("cartItems");

    if (sub) {
      if (plan !== sub.plan) {
        console.log("plan diferente");
        setPlans(plan);
        setContent(
          "Ya cuentas con una subcripcion activa, si cambias de plan este se efectuara el siguiente periodo. Estas seguro de proceder?"
        );
        modalRef.current.showModal();
        return;
      }

      if (plan === sub.plan) return;
    }
    if (cartItems) {
      setPlans(plan);
      setContent(
        "Cambiar de plan limpiara tu seleccion de cerveza, estas seguro de proceder?"
      );
      modalRef.current.showModal();
      return;
    }
    setPlans(plan);
    setPlanHandler(plan);
  };

  useEffect(() => {
    const isPlanSet = localStorage.getItem("plan");
    if (!isPlanSet) {
      setContent("Selecciona un plan para continuar");
      modalRef2.current.showModal();
    }
  }, [plan]);

  useEffect(() => {
    const subcription = JSON.parse(localStorage.getItem("subscription"));
    if (subcription) {
      const subcriptionDate = new Date(subcription.subscriptionDate);
      subcription.deliveryDate = subcriptionDate.setDate(
        subcriptionDate.getDate() + 7
      );
      subcription.deliveryDate = new Date(
        subcription.deliveryDate
      ).toLocaleDateString();
    }
    setSub(subcription);
  }, []);

  return (
    <>
      <dialog id="my_modal_1" className="modal" ref={modalRef}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Cuidado!</h3>
          <p className="py-4">{content}</p>
          <div className="modal-action">
            <button className="btn btn-success" onClick={handleConfirm}>
              Confirmar
            </button>
            <form method="dialog">
              <button className="btn btn-primary">Cerrar</button>
            </form>
          </div>
        </div>
      </dialog>
      <Modal modalRef={modalRef2} content={content} />
      <section className="section-pricing mb-6" style={{ paddingTop: 0 }}>
        <div className="pricing-cards">
          <div className="pricing-card-blue">
            <div className="flex h-[100%] flex-col">
              <h5>Basic</h5>
              <p>$14.99 Per Delivery</p>
              <ul className="max-w-[100%] text-start">
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span>6 Craft-beers</span>
                </li>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span>20+ Variedad de cerveza artesanales para escoger</span>
                </li>
              </ul>
              <button
                onClick={() => {
                  openModal("basico");
                }}
                className="btn-pricing mt-auto"
              >
                Select
              </button>
            </div>
          </div>
          <div className="pricing-card-brown">
            <div className="flex h-[100%] flex-col">
              <h5>Expert</h5>
              <p>$29.99 Per Delivery</p>
              <ul className="max-w-[100%] text-start">
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span>12 Craft-beers</span>
                </li>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span>20+ Variedad de cerveza artesanales para escoger</span>
                </li>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span>Mercancia exclusiva</span>
                </li>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span>Informational Brochure</span>
                </li>
              </ul>

              <button
                className="btn-pricing mt-auto"
                onClick={() => {
                  openModal("experto");
                }}
              >
                Select
              </button>
            </div>
          </div>
          <div className="pricing-card-blue">
            <div className="flex h-[100%] flex-col">
              <h5>Guru</h5>
              <p>$49.99 Per Delivery</p>
              <ul className="max-w-[100%] text-start">
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span>24 Craft-beers</span>
                </li>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span>20+ Variedad de cerveza artesanales para escoger</span>
                </li>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span>Mercancia exclusiva</span>
                </li>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span>Informational Brochure</span>
                </li>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span>Special Rewards</span>
                </li>
              </ul>

              <button
                className="btn-pricing mt-auto"
                onClick={() => {
                  openModal("guru");
                }}
              >
                Select
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
