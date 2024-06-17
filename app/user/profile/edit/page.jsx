import User from "@/models/User";
import EditForm from "@/components/user/profile/EditForm";
import connectDB from "@/lib/connectDB";
import { revalidatePath } from "next/cache";

export default function Page() {
  const fetchUserData = async (id) => {
    "use server";
    await connectDB();
    const user = await User.findById(id);
    console.log(id);
    return JSON.stringify(user);
  };

  const actionHandler = async (id, formData) => {
    "use server";
    const user = await User.findById(id);
    await connectDB();
    const editedUser = { ...user._doc, ...formData };
    console.log(editedUser);
    const updatedUser = await User.findByIdAndUpdate(id, editedUser);

    revalidatePath("/user/profile");
    return JSON.stringify(updatedUser);
  };

  return (
    <EditForm
      fetchUserData={fetchUserData}
      actionHandler={actionHandler}
    ></EditForm>
  );
}
