"use client";
export default function HistorialItem({ order, index }) {
  console.log("order");
  console.log(order);
  return (
    <div key={index} className="border rounded-lg p-4 shadow-sm bg-white">
      <h2 className="text-black text-xl font-bold mb-2">
        Pedido {index + 1} - Estado: {order.status}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 overflow-auto max-h-[250px] gap-4 items-center">
        {order.beers.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-4">
            <figure>
              <img
                src={item.beer.image}
                alt={item.beer.name}
                className="w-[30px] max-h-[250px] object-center mx-auto"
              />
            </figure>
            <div>
              <div className="font-semibold text-black notranslate">
                {item?.beer?.name}
              </div>
              <div className="text-gray-600">Cantidad: {item?.quantity}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2">
        <span className="text-gray-600">
          Fecha de Envío: {order.shippingDate.split("T")[0]}
        </span>{" "}
      </div>
      <div className="mt-2">
        <span className="text-gray-600">
          Dirección: {order.address.address}, {order.address.description}
        </span>
      </div>
    </div>
  );
}
