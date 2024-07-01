"use client";
import { useRouter } from "next/navigation";

export default function CatalogFilter() {
  const router = useRouter();

  const query = (filter, value) => {
    router.push("/user/catalog?filter=" + filter + "&value=" + value);
  };

  const search = (e) => {
    if (e.key === "Enter") {
      router.push("/user/catalog?search=" + e.target.value);
    }
  };

  const recommended = () => {
    router.push("/user/catalog");
  };

  return (
    <aside className="col-span-1 border-2 border-primary rounded-md bg-primary p-1 hidden md:block">
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder="Search"
          onKeyDown={search}
        />
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
      <div className="text-black">
        <p
          className="ms-3 py-2 ps-1 text-xl font-medium rounded-md hover:cursor-pointer hover:bg-black/20"
          onClick={() => query("all", "true")}
        >
          Todos
        </p>
        <p
          className="ms-3 py-2 ps-1 text-xl font-medium rounded-md hover:cursor-pointer hover:bg-black/20"
          onClick={() => recommended()}
        >
          Recomendado
        </p>
        <div className="collapse collapse-arrow ">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Brand</div>
          <div className="collapse-content">
            <p
              className="p-1 rounded-md hover:cursor-pointer hover:bg-black/20"
              onClick={() => query("company", "casa bruja")}
            >
              Casa Bruja
            </p>
            <p
              className="p-1 rounded-md hover:cursor-pointer hover:bg-black/20"
              onClick={() => query("company", "rana dorada")}
            >
              Rana Dorada
            </p>
            <p
              className="p-1 rounded-md hover:cursor-pointer hover:bg-black/20"
              onClick={() => query("company", "clandestina")}
            >
              Clandestina
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow ">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Style</div>
          <div className="collapse-content">
            <p
              className="notranslate p-1 rounded-md hover:cursor-pointer hover:bg-black/20"
              onClick={() => query("style", "lager")}
            >
              Lager
            </p>
            <p
              className="notranslate p-1 rounded-md hover:cursor-pointer hover:bg-black/20"
              onClick={() => query("style", "ale")}
            >
              Ale
            </p>
            <p
              className="notranslate p-1 rounded-md hover:cursor-pointer hover:bg-black/20"
              onClick={() => query("style", "ipa")}
            >
              Ipa
            </p>
            <p
              className="notranslate p-1 rounded-md hover:cursor-pointer hover:bg-black/20"
              onClick={() => query("style", "pilsner")}
            >
              Pilsner
            </p>
            <p
              className="notranslate p-1 rounded-md hover:cursor-pointer hover:bg-black/20"
              onClick={() => query("style", "stout")}
            >
              Stout
            </p>
            <p
              className="p-1 rounded-md hover:cursor-pointer hover:bg-black/20"
              onClick={() => query("style", "otros")}
            >
              Otros
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow ">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Aroma</div>
          <div className="collapse-content">
            <p
              className="p-1 rounded-md hover:cursor-pointer hover:bg-black/20"
              onClick={() => query("aroma", "citrico")}
            >
              Citrico
            </p>
            <p
              className="p-1 rounded-md hover:cursor-pointer hover:bg-black/20"
              onClick={() => query("aroma", "floral")}
            >
              Floral
            </p>
            <p
              className="p-1 rounded-md hover:cursor-pointer hover:bg-black/20"
              onClick={() => query("aroma", "frutal")}
            >
              Frutal
            </p>
            <p
              className="p-1 rounded-md hover:cursor-pointer hover:bg-black/20"
              onClick={() => query("aroma", "especiado")}
            >
              Especiado
            </p>
            <p
              className="p-1 rounded-md hover:cursor-pointer hover:bg-black/20"
              onClick={() => query("aroma", "otros")}
            >
              Otros
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow ">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Body</div>
          <div className="collapse-content">
            <p
              className="p-1 rounded-md hover:cursor-pointer hover:bg-black/20"
              onClick={() => query("body", "ligero")}
            >
              Ligero
            </p>
            <p
              className="p-1 rounded-md hover:cursor-pointer hover:bg-black/20"
              onClick={() => query("body", "medio")}
            >
              Medio
            </p>
            <p
              className="p-1 rounded-md hover:cursor-pointer hover:bg-black/20"
              onClick={() => query("body", "completo")}
            >
              Completo
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
