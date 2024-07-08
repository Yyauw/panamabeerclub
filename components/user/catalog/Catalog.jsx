"use client";
import ItemCard from "./ItemCard";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../CartContext";
import { useSearchParams, useRouter } from "next/navigation";

export default function Catalog({ fetchBeers }) {
  const { plan } = useContext(CartContext);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);

  const filterByPreferences = (beers) => {
    const preferences = localStorage.getItem("preferences");
    if (!preferences) return beers;
    const { aroma, body, style } = JSON.parse(preferences);
    console.log(aroma);
    const recommendedBeers = beers.filter((beer) => {
      return beer.aroma === aroma || beer.body === body || beer.style === style;
    });
    return recommendedBeers;
  };

  const filterBeers = (beers) => {
    const searchQuery = searchParams.get("filter");
    const searchValue = searchParams.get("value");
    console.log(searchParams.size);
    if (searchQuery === "all") return beers;
    if (searchQuery === null) return beers;

    const filteredBeers = beers.filter((beer) => {
      console.log(beer[searchQuery] + " > " + searchValue);
      return beer[searchQuery] === searchValue;
    });
    return filteredBeers;
  };

  const filterBySearch = (beers) => {
    const searchQuery = searchParams.get("search");
    if (!searchQuery) return beers;
    const filteredBeers = beers.filter((beer) => {
      return beer.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    return filteredBeers;
  };

  useEffect(() => {
    const isPlanSet = localStorage.getItem("plan");
    if (!isPlanSet) {
      router.push("/user/pricing");
    }
  }, [plan]);

  useEffect(() => {
    const search = searchParams.get("search");

    if (searchParams.size === 0) {
      console.log("fetching beers");
      const getBeers = async () => {
        if (beers.length === 0) {
          const beersF = JSON.parse(await fetchBeers());
          setBeers(beersF);
          const recommendedBeers = await filterByPreferences(beersF);
          setFilteredBeers(recommendedBeers);
          return;
        }
        const recommendedBeers = await filterByPreferences(beers);
        console.log(recommendedBeers);
        setFilteredBeers(recommendedBeers);
      };
      getBeers();
      return;
    }
    if (search) {
      setFilteredBeers(filterBySearch(beers));
      return;
    }
    const filteredBeers = filterBeers(beers);
    setFilteredBeers(filteredBeers);
    console.log(filteredBeers);
  }, [searchParams]);

  return (
    <section className=" col-span-4   overflow-auto grid grid-cols-1 md:grid-cols-3 gap-2 auto-cols-min ">
      {filteredBeers.map((beer) => (
        <ItemCard key={beer._id} beer={beer}></ItemCard>
      ))}
    </section>
  );
}
