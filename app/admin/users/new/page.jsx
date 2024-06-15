import UserForm from "@/components/admin/userForm";
import User from "@/models/User";
import connectDB from "@/lib/connectDB";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";
import { revalidatePath } from "next/cache";

export default function newUserFormPage() {
  const createUser = async (data) => {
    "use server";
    await connectDB();

    const signupResponse = createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    )
      .then(async (userCredential) => {
        const user = userCredential.user;
        const newUser = new User({ ...data, uid: user.uid });
        await newUser.save();
        revalidatePath("/admin/users");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(error);
        return error.message;
      });
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
