import Table from "@/components/admin/Table";
import Link from "next/link";

export default function usersAdminPage() {
  const fields = ["name", "style", "ibu", "alc", "aroma", "body", "quantity"];
  const dummyData = [
    {
      _id: "cervecita 1",
      name: "Fula",
      style: "pale",
      ibu: 74,
      alc: 8.3,
      aroma: "citrus",
      body: "complete",
      quantity: 69,
    },
    {
      _id: "cervecita 2",
      name: "Fula2",
      style: "pale",
      ibu: 74,
      alc: 8.3,
      aroma: "citrus",
      body: "complete",
      quantity: 0,
    },
    {
      _id: "cervecita 3",
      name: "Fula69",
      style: "pale",
      ibu: 74,
      alc: 9,
      aroma: "citrus",
      body: "complete",
      quantity: 32,
    },
  ];
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
        <Table tableHeadFields={fields} tableRowItems={dummyData}></Table>
      </main>
    </>
  );
}
