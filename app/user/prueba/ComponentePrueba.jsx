"use client";

export default function ComponentePrueba({ fillRandomBeers }) {
  const beers = localStorage.getItem("cartItems");
  fillRandomBeers(JSON.parse(beers), 12);
  return (
    <div>
      <h1>ComponentePrueba</h1>
    </div>
  );
}
