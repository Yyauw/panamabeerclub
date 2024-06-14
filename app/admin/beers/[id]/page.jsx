import BeerForm from "@/components/admin/beer/BeerForm";
import Beer from "@/models/Beer";
import connectDB from "@/lib/connectDB";
import { subirFoto } from "@/lib/fileUploadHelper";

export default async function editBeerPage({ params }) {
  connectDB();
  const beerInfo = await Beer.findById(params.id);
  async function editBeer(formData) {
    "use server";
    const beer = {
      name: formData.get("name"),
      style: formData.get("style"),
      ibu: formData.get("ibu"),
      alc: formData.get("alc"),
      aroma: formData.get("aroma"),
      body: formData.get("body"),
      quantity: formData.get("quantity"),
      company: formData.get("company"),
      description: formData.get("description"),
      image: formData.get("image"),
    };
    const id = formData.get("id");
    if (beer.image.size > 0) {
      const url = await subirFoto(beer.image, "beers");
      beer.image = url;
    } else {
      beer.image = beerInfo.image;
    }
    //console.log(beer.image.size === 0 ? "no hay imagen" : "hay imagen");
    //console.log({ ...beer, image: beerInfo.image });
    connectDB();
    const editedBeer = await Beer.findByIdAndUpdate(id, beer);
  }

  return (
    <div className="">
      <BeerForm
        data={beerInfo}
        editBeer={editBeer}
        msg="Cerveza actualizada con éxito"
      />
    </div>
  );
}
