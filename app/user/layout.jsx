"use client";
import UserNavbar from "@/components/user/UserNavbar";
import { useState, useEffect, useRef } from "react";
import CartModal from "@/components/user/CartModal";
import { CartContext } from "@/components/user/CartContext";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal";

export default function UserLayout({ children }) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState(undefined);
  const [cartItems, setCartItems] = useState([]);
  const [beerCapacity, setBeerCapacity] = useState(0);
  const [plan, setPlan] = useState("");
  const modalRef = useRef();
  const [content, setContent] = useState("");

  const handlePlan = (plan) => {
    setCartItems([]);
    if (plan === "basico") {
      setBeerCapacity(6);
      return;
    }
    if (plan === "experto") {
      setBeerCapacity(12);
      return;
    }
    if (plan === "guru") {
      setBeerCapacity(24);
      return;
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("userData");
    const plan = localStorage.getItem("plan");
    if (!plan) {
      router.push("/pricing");
      return;
    }
    handlePlan(plan);
    if (user) {
      setUserData(user);
    }
  }, [plan]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const addItem = (item) => {
    const totalItems = cartItems.reduce(
      (acc, item) => acc + item.cartQuantity,
      0
    );
    if (totalItems === beerCapacity) {
      setContent(
        "El plan " +
          plan +
          " solo te permite seleccionar " +
          beerCapacity +
          " cervezas, considere cambiar de plan para agregar más cervezas."
      );
      modalRef.current.showModal();
      return false;
    }
    const foundItem = cartItems.find((i) => i._id === item._id);

    if (foundItem) {
      foundItem.cartQuantity += 1;
      setCartItems([...cartItems]);
      return true;
    }

    item.cartQuantity = 1;
    setCartItems([...cartItems, item]);
    return true;
  };

  const removeItem = (item) => {
    const foundItem = cartItems.find((i) => i._id === item._id);

    foundItem.cartQuantity -= 1;

    if (foundItem.cartQuantity === 0) {
      const newItems = cartItems.filter((i) => i._id !== item._id);
      setCartItems(newItems);
      return;
    }

    setCartItems([...cartItems]);
  };

  const cxtValue = {
    items: cartItems,
    plan: plan,
    beerCapacity: beerCapacity,
    setPlan: setPlan,
    addItem: addItem,
    removeItem: removeItem,
  };

  return (
    <>
      <CartContext.Provider value={cxtValue}>
        <Modal modalRef={modalRef} content={content}></Modal>
        <section className="flex flex-col">
          {isModalOpen && <CartModal closeModal={closeModal}></CartModal>}
          <UserNavbar
            openModal={openModal}
            isUserLogged={userData ? true : false}
          ></UserNavbar>
          {children}
        </section>
      </CartContext.Provider>
    </>
  );
}
