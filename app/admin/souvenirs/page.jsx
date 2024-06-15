import Table from "@/components/admin/Table";
import Link from "next/link";
import Souvenir from "@/models/Souvenir";
import connectDB from "@/lib/connectDB";
import { revalidatePath } from "next/cache";

export default async function Page() {
  const fields = ["name", "description", "quantity"];
  const fetchSouvenirs = async () => {
    const souvenirList = await Souvenir.find({});
    return souvenirList;
  };

  const deleteSouvenir = async (id) => {
    "use server";
    await connectDB();
    const souvenir = await Souvenir.findByIdAndDelete(id);
    revalidatePath("/admin/souvenirs");
  };

  const souvenirList = await fetchSouvenirs();
  return (
    <>
      <main className="p-2">
        <h1 className="text-4xl font-bold">Souvenirs admin page</h1>
        <p>Souvenir Panel</p>
        <Link
          href="souvenirs/new"
          className="btn btn-success btn-sm my-3 text-white"
        >
          Add New Souvenir
        </Link>
        <Table
          tableHeadFields={fields}
          tableRowItems={souvenirList}
          type="souvenirs"
          deleteItem={deleteSouvenir}
        ></Table>
      </main>
    </>
  );
}
