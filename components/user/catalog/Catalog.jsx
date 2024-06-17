"use client";
import ItemCard from "./ItemCard";
import { useEffect, useState } from "react";

export default function Catalog({ fetchBeers }) {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const getBeers = async () => {
      const beers = await fetchBeers();
      setBeers(JSON.parse(beers));
    };
    getBeers();
    console.log(beers);
  }, []);

  return (
    <section className="col-span-4   overflow-auto grid grid-cols-3 gap-2">
      {beers.map((beer) => (
        <ItemCard key={beer._id} beer={beer}></ItemCard>
      ))}
    </section>
  );
}
