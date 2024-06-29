"use client";
import checkpricing from "@/public/images/checkpricing.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useRef, useState } from "react";
import { CartContext } from "@/components/user/CartContext";

export default function pricingPage() {
  const modalRef = useRef();
  const [plans, setPlans] = useState("basico");
  const { setPlan, setCartItems } = useContext(CartContext);
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

  const handleConfirm = () => {
    modalRef.current.close();
    setPlanHandler(plans);
  };

  const openModal = (plan) => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setPlans(plan);
      modalRef.current.showModal();
      return;
    }
    setPlans(plan);
    setPlanHandler(plan);
  };

  return (
    <>
      <dialog id="my_modal_1" className="modal" ref={modalRef}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Cuidado!</h3>
          <p className="py-4">
            Cambiar de plan limpiara tu seleccion de cerveza, estas seguro de
            proceder?
          </p>
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

      <section className="section-pricing mb-6" style={{ paddingTop: 0 }}>
        <div className="pricing-cards">
          <div className="pricing-card-blue">
            <div className="flex h-[100%] flex-col">
              <h5>Basic</h5>
              <p>$14.99 Per Delivery</p>
              <ul>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span>6 Craft-beers</span>
                </li>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span>20+ varieties of Craft-Beer</span>
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
              <ul>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span>12 Craft-beers</span>
                </li>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span>20+ varieties of Craft-Beer</span>
                </li>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span>Merchandising</span>
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
              <ul>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span>24 Craft-beers</span>
                </li>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span>20+ varieties of Craft-Beer</span>
                </li>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span>Merchandising</span>
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
