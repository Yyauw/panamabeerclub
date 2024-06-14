import BeerForm from "@/components/admin/beer/BeerForm";
import { subirFoto } from "@/lib/fileUploadHelper";
import Beer from "@/models/Beer";
import connectDB from "@/lib/connectDB";

export default function newUserFormPage() {
  async function actionHandler(formData) {
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

    await connectDB();
    const url = await subirFoto(beer.image, "beers");
    beer.image = url;
    const newBeer = new Beer(beer);
    await newBeer.save();
  }

  return (
    <>
      <BeerForm
        actionHandler={actionHandler}
        msg="Cerveza agregada con exito!"
      ></BeerForm>
    </>
  );
}
