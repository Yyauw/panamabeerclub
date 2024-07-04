"use client";
import HistorialItem from "./HistorialItem";
import { useEffect, useState } from "react";

export default function Orders({ fecthOrders }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const id = localStorage.getItem("userData");
      const orders = await fecthOrders(id);
      setOrders(JSON.parse(orders));
      console.log(JSON.parse(orders));
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4 h-[86vh] max-h-[86vh] overflow-auto">
      <h1 className="text-2xl font-bold mb-4">Historial de Pedidos</h1>
      <div className="space-y-4">
        {orders?.length === 0 && (
          <h1 className="text-center text-2xl ">No tienes ningun pedido</h1>
        )}
        {orders?.map((order, index) => {
          return <HistorialItem key={index} index={index} order={order} />;
        })}
      </div>
    </div>
  );
}
