import UserForm from "@/components/admin/userForm";
import User from "@/models/User";
import connectDB from "@/lib/connectDB";
export default function newUserFormPage() {
  const createUser = async (data) => {
    "use server";
    await connectDB();
    const newUser = new User(data);
    await newUser.save();
  };

  return (
    <div className="">
      <UserForm
        msg="Usuario creado con exito"
        createUser={createUser}
      ></UserForm>
    </div>
  );
}
