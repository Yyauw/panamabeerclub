import CatalogFilter from "@/components/user/catalog/CatalogFilter";
import ItemCard from "@/components/user/catalog/ItemCard";

export default function CatalogPage() {
  return (
    <>
      <main className="container mx-auto p-4 ">
        <section className="headerSection grid grid-cols-5">
          <div className="col-span-4">
            <h1 className="text-2xl font-bold">
              Welcome to your craft beer section!
            </h1>
            <p className="text-xl">
              Discover a curated collection of the finest craft beers from{" "}
              <br />
              Panama, select your favorites.
            </p>
          </div>
          <div className="">
            {" "}
            <div className="border-2 rounded-xl mt-2 bg-secondary/50 border-hidden p-4">
              <h1 className="text-2xl font-bold text-center">Basic Plan</h1>
              <p className="text-cbg my-3 text-center">
                <span className="font-bold">Beers: </span> 0/6
              </p>
              <p className="text-center mt-4">
                <button className="btn btn-primary btn-sm">Change Plan</button>
              </p>
            </div>
          </div>
        </section>
        <section className="mainSection grid grid-cols-5 mt-1 gap-2">
          <aside className="col-span-1 border-2 border-primary rounded-md bg-primary p-1 h-[60vh] overflow-auto">
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="#ffffff"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <p className="text-black font-bold mt-2">Filter by:</p>
            <CatalogFilter></CatalogFilter>
          </aside>
          <section className="col-span-4  p-1 h-[60vh] overflow-auto grid grid-cols-3 gap-2">
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
          </section>
        </section>
      </main>
    </>
  );
}
