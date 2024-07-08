"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function logoutPage() {
  const router = useRouter();
  useEffect(() => {
    localStorage.removeItem("userData");
    localStorage.removeItem("plan");
    localStorage.removeItem("preferences");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("beerCapacity");
    localStorage.removeItem("address");
    localStorage.removeItem("subscription");
    localStorage.removeItem("capacity");
    localStorage.removeItem("deliveryDate");
    router.push("/");
  }, []);

  return (
    <>
      <h1>logging out</h1>
    </>
  );
}
