"use client";
import TableItem from "./TableItem";
import { useRef, useState } from "react";
export default function Table({
  tableHeadFields,
  tableRowItems,
  type,
  deleteItem,
}) {
  const modalRef = useRef();
  const [content, setContent] = useState("");
  const [id, setId] = useState("");

  const handleDelete = (idBeer) => {
    setContent("Estas seguro de eliminar este item?");
    modalRef.current.showModal();
    setId(idBeer);
  };

  const handleConfirm = () => {
    deleteItem(id);
    modalRef.current.close();
  };

  return (
    <>
      <dialog id="my_modal_1" className="modal" ref={modalRef}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Message!</h3>
          <p className="py-4">{content}</p>
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
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-black uppercase">
            <tr>
              <th></th>
              {tableHeadFields.map((name) => (
                <th key={name}>{name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {tableRowItems.map((item, index) => (
              <TableItem
                key={item._id}
                data={item}
                keys={tableHeadFields}
                index={index}
                type={type}
                deleteItem={handleDelete}
              ></TableItem>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
