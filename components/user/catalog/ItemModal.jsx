export default function ItemModal({ item, modalRef }) {
  return (
    <dialog id="my_modal_1" className="modal" ref={modalRef}>
      <div className="modal-box bg-slate-50 min-w-[60vw] max-w-[60vw]">
        <h3 className="font-bold text-3xl uppercase text-black text-center">
          {item.name}
        </h3>
        <div className="grid grid-cols-2 mt-4">
          <figure>
            <img
              src={item.image}
              alt={item.name}
              className=" max-w-[25vw] object-center m-auto max-h-[500px]"
            />
          </figure>
          <div className="p-2 text-black">
            <p className="my-1">
              <span className="font-bold">IBU:</span> {item.ibu}
            </p>
            <p className="my-1">
              <span className="font-bold">Alc:</span> {item.alc}%
            </p>
            <p className="my-1">
              <span className="font-bold">Style:</span> {item.style}
            </p>
            <p className="my-1">
              <span className="font-bold">Body:</span> {item.body}
            </p>
            <p className="my-1">
              <span className="font-bold">Aroma:</span> {item.aroma}
            </p>
            <p className="my-1">
              <span className="font-bold">Brand:</span> {item.company}
            </p>
            <p className="my-1">
              <span className="font-bold">Descripcion:</span> {item.description}
            </p>
          </div>
        </div>
        z
        <div className="modal-action mt-0">
          <form method="dialog">
            <button className="btn btn-primary">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
