import Link from "next/link";
import User from "@/models/User";
import connectDB from "@/lib/connectDB";
import Address from "@/models/Address";

export default function LoginPage() {
  const fetchUsers = async () => {
    await connectDB();
    const users = await User.find({}).populate({
      path: "address",
    });
    console.log(users[0]);
  };
  fetchUsers();
  return (
    <>
      <h1>Login site</h1>
      <Link href="/signup">singup</Link>
    </>
  );
}
