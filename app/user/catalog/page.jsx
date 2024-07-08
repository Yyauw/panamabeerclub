import CatalogFilter from "@/components/user/catalog/CatalogFilter";
import Catalog from "@/components/user/catalog/Catalog";
import Beer from "@/models/Beer";
import SubInfo from "@/components/user/catalog/SubInfo";
import connectDB from "@/lib/connectDB";
import Link from "next/link";
export default function CatalogPage() {
  const fetchBeers = async () => {
    "use server";
    await connectDB();
    const beers = await Beer.find({});
    return JSON.stringify(beers);
  };

  return (
    <>
      <main className="p-4  mx-[5vw]">
        <section className="headerSection grid grid-rows-2 grid-cols-none md:grid-cols-5 md:grid-rows-none">
          <div className="col-span-3">
            <h1 className="text-2xl font-bold">
              Welcome to your craft beer section!
            </h1>
            <p className="text-xl">
              Discover a curated collection of the finest craft beers from{" "}
              <br />
              Panama, select your favorites. <br />
              No te convece lo recomendado?{" "}
              <Link href="/survey" className="underline underline-primary">
                Vuelve a hacer la encuesta.
              </Link>
            </p>
          </div>
          <div className="col-span-2">
            {" "}
            <SubInfo></SubInfo>
          </div>
        </section>
        <section className="mainSection grid grid-rows-2 md:grid-rows-none  md:grid-cols-5 my-4 gap-2">
          <CatalogFilter></CatalogFilter>

          <Catalog fetchBeers={fetchBeers}></Catalog>
        </section>
      </main>
    </>
  );
}
