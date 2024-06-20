"use client";
import { useRouter } from "next/navigation";

export default function CatalogFilter() {
  const router = useRouter();

  const query = (filter, value) => {
    router.push("/user/catalog?filter=" + filter + "&value=" + value);
  };

  const recommended = () => {
    router.push("/user/catalog");
  };

  return (
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
            className="p-1 rounded-md hover:cursor-pointer hover:bg-black/20"
            onClick={() => query("style", "lager")}
          >
            Lager
          </p>
          <p
            className="p-1 rounded-md hover:cursor-pointer hover:bg-black/20"
            onClick={() => query("style", "ale")}
          >
            Ale
          </p>
          <p
            className="p-1 rounded-md hover:cursor-pointer hover:bg-black/20"
            onClick={() => query("style", "ipa")}
          >
            Ipa
          </p>
          <p
            className="p-1 rounded-md hover:cursor-pointer hover:bg-black/20"
            onClick={() => query("style", "pilsner")}
          >
            Pilsner
          </p>
          <p
            className="p-1 rounded-md hover:cursor-pointer hover:bg-black/20"
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
  );
}
