import Table from "@/components/admin/Table";
import Link from "next/link";
import connectDB from "@/lib/connectDB";
import Beer from "@/models/Beer";
import { borrarFoto } from "@/lib/fileUploadHelper";
import { revalidatePath } from "next/cache";

export default async function beersAdminPage() {
  const fetchBeers = async () => {
    await connectDB();
    const beerList = await Beer.find({});
    return beerList;
  };

  const beerList = await fetchBeers();

  const fields = [
    "name",
    "company",
    "style",
    "ibu",
    "alc",
    "aroma",
    "body",
    "quantity",
  ];

  const deleteBeer = async (id) => {
    "use server";
    connectDB();
    const beer = await Beer.findById(id);
    await borrarFoto(beer.image);
    await Beer.findByIdAndDelete(id);
    revalidatePath("/admin/beers");
  };

  return (
    <>
      <main className="p-2">
        <h1 className="text-4xl font-bold">Beers admin page</h1>
        <p>Beers Panel</p>
        <Link
          href="beers/new"
          className="btn btn-success btn-sm my-3 text-white"
        >
          Add New Beer
        </Link>
        <Table
          tableHeadFields={fields}
          tableRowItems={beerList}
          type="beers"
          deleteItem={deleteBeer}
        ></Table>
      </main>
    </>
  );
}
