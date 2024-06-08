import UserForm from "@/components/admin/userForm";
import User from "@/models/User";
import connectDB from "@/lib/connectDB";

export default async function editUserPage({ params }) {
  connectDB();
  const userInfo = JSON.stringify(await User.findById(params.id));
  console.log(userInfo);
  const editUser = async (id, editedUser) => {
    "use server";
    connectDB();
    const user = await User.findByIdAndUpdate(id, editedUser);
  };

  return (
    <div className="">
      <UserForm
        data={userInfo}
        editUser={editUser}
        msg="Usuario actualizado con éxito"
      />
    </div>
  );
}
