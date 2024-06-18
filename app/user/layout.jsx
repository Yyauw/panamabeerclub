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
    const foundItem = cartItems.find((i) => i._id === item._id);

    if (foundItem) {
      foundItem.cartQuantity += 1;
      setCartItems([...cartItems]);
      return;
    }

    item.cartQuantity = 1;
    setCartItems([...cartItems, item]);
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
