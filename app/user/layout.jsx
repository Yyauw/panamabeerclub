"use client";
import UserNavbar from "@/components/user/UserNavbar";
import { useState, useEffect } from "react";
import CartModal from "@/components/user/CartModal";
import { CartContext } from "@/components/user/CartContext";

export default function userLayout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState(undefined);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem("userData");
    if (user) {
      setUserData(user);
    }
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const addItem = (item) => {
    const existingItems = cartItems.map((i) => {
      if (i.id === item.id) {
        i.quantity += 1;
        return i;
      }
      return i;
    });

    if (existingItems.length === 0) {
      item.quantity = 1;
      existingItems.push(item);
    }
    setCartItems(existingItems);
  };

  const removeItem = (id) => {
    const newItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newItems);
  };

  const cxtValue = {
    items: cartItems,
    addItem: addItem,
    removeItem: removeItem,
  };

  return (
    <>
      <CartContext.Provider value={cxtValue}>
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
