"use client";

import MapComponent from "@/components/Map";
import { useState, useEffect } from "react";

export default function ModalForm({ modalRef, addNewAddress, setChange }) {
  const [marker, setMarker] = useState({
    latitude: 9.008244148939845,
    longitude: -79.55049521046072,
  });
  const [address, setAddress] = useState({
    address: "",
    description: "",
    lng: 0,
    lat: 0,
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      /* geolocation is available */
      navigator.geolocation.getCurrentPosition((position) => {
        setMarker({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    modalRef.current.close();
    const user = localStorage.getItem("userData");
    await addNewAddress(user, {
      ...address,
      lng: marker.longitude,
      lat: marker.latitude,
    });
    setChange((previousState) => !previousState);
    setAddress({
      address: "",
      description: "",
      lng: 0,
      lat: 0,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((previousState) => {
      return { ...previousState, [name]: value };
    });
  };

  return (
    <>
      <dialog id="my_modal_1" className="modal" ref={modalRef}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Agregar Direccion</h3>
          <form action="">
            <input
              type="text"
              className="input input-bordered w-full max-w-xs my-2"
              placeholder="N. de casa / Apartamento"
              name="address"
              value={address.address}
              onChange={handleChange}
            />
            <input
              type="text"
              className="input input-bordered w-full max-w-xs my-2"
              placeholder="Descripcion"
              name="description"
              value={address.description}
              onChange={handleChange}
            />
            <label className="form-control">Coloque su ubicacion</label>
            <MapComponent marker={marker} setMarker={setMarker}></MapComponent>
          </form>
          <div className="modal-action">
            <button className="btn btn-success" onClick={handleSubmit}>
              Confirmar
            </button>
            <form method="dialog">
              <button className="btn btn-primary">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
