"use client";
import UserNavbar from "@/components/user/UserNavbar";
import { useState } from "react";
import CartModal from "@/components/user/CartModal";

export default function userLayout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="flex flex-col">
        {isModalOpen && <CartModal closeModal={closeModal}></CartModal>}
        <UserNavbar openModal={openModal}></UserNavbar>
        {children}
      </section>
    </>
  );
}
