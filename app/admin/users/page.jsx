import Table from "@/components/admin/Table";
import Link from "next/link";
import User from "@/models/User";
import connectDB from "@/lib/connectDB";
import { revalidatePath } from "next/cache";

export default async function usersAdminPage() {
  const fetchUsers = async () => {
    await connectDB();
    const usersList = await User.find({});
    return usersList;
  };
  const userList = await fetchUsers();

  const formatedList = await userList.map((item) => {
    return {
      ...item._doc,
      birthDate: new Date(item.birthDate).toLocaleDateString(),
      _id: item._id,
    };
  });

  const fields = [
    "name",
    "email",
    "phoneNumber",
    "birthDate",
    "subscription",
    "subscriptionDate",
    "userType",
  ];

  const deleteUser = async (id) => {
    "use server";
    connectDB();
    const user = await User.findByIdAndDelete(id);
    revalidatePath("/admin/users");
  };

  return (
    <>
      <main className="p-2">
        <h1 className="text-4xl font-bold">Users admin page</h1>
        <p>Users & Supcription Data</p>
        <Link
          href="users/new"
          className="btn btn-success btn-sm my-3 text-white"
        >
          Add New User
        </Link>
        <Table
          tableHeadFields={fields}
          tableRowItems={formatedList}
          type="users"
          deleteItem={deleteUser}
        ></Table>
      </main>
    </>
  );
}
