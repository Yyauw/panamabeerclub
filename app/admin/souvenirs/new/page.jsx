import SouvenirForm from "@/components/admin/souvenir/SouvenirForm";
import Souvenir from "@/models/Souvenir";
import connectDB from "@/lib/connectDB";

export default function Page() {
  const createSouvenir = async (formData) => {
    "use server";
    await connectDB();
    const souvenir = new Souvenir(formData);
    await souvenir.save();
  };
  return (
    <>
      <SouvenirForm createSouvenir={createSouvenir}></SouvenirForm>
    </>
  );
}
