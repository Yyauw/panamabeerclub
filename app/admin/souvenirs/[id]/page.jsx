import SouvenirForm from "@/components/admin/souvenir/SouvenirForm";
import Souvenir from "@/models/Souvenir";
import connectDB from "@/lib/connectDB";

export default async function page({ params }) {
  connectDB();
  const souvenir = await Souvenir.findById(params.id);

  console.log(souvenir);

  const editSouvenir = async (id, editedSouvenir) => {
    "use server";
    connectDB();
    const souvenir = await Souvenir.findByIdAndUpdate(id, editedSouvenir);
  };

  return (
    <div className="">
      <SouvenirForm
        data={souvenir}
        editSouvenir={editSouvenir}
        msg="Usuario actualizado con éxito"
      />
    </div>
  );
}
