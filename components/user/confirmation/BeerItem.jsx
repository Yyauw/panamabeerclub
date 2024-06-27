export default function BeerItem({ item }) {
  return (
    <div className="border-2 rounded-md bg-slate-50/95 grid grid-row-4 p-4 w-[100%]">
      <figure className="row-span-3 p-4">
        {" "}
        <img
          src={item.image}
          className="max-h-[250px] object-center mx-auto object-contain"
          alt={item.name}
        />
      </figure>

      <div className="grid grid-cols-2">
        <h1 className="text-black text-md font-bold  my-auto">{item.name}</h1>{" "}
        <p className="text-black text-md ms-auto font-bold my-auto">
          Cantidad: {item.cartQuantity}
        </p>
      </div>
    </div>
  );
}
