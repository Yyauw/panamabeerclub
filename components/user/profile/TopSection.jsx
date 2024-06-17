"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function TopSection({ fetchUserData }) {
  const [userData, setUserData] = useState(undefined);
  const router = useRouter();
  useEffect(() => {
    const user = localStorage.getItem("userData");
    if (!user) {
      router.push("/login");
    }

    const fetchData = async () => {
      const userfetched = await fetchUserData(user);
      const userParsed = await JSON.parse(userfetched);
      setUserData(userParsed);
    };
    fetchData();
  }, []);

  return (
    <>
      {userData && (
        <section className="profile-topsection bg-primary/80  ">
          <div className="wrapper container mx-auto flex p-4 w-[89vw]">
            <div className="info-section w-[100%] text-black">
              <div className="border-b-2 border-black border-cbg flex content-center items-center py-3">
                <h1 className="text-3xl text-cbg font-extrabold uppercase">
                  HELLO, {userData?.name + " " + userData?.lastName}
                </h1>
                <Link
                  href="/user/profile/edit"
                  className="ms-auto text-white hover:cursor-pointer hover:underline"
                >
                  Edit Info
                </Link>
              </div>
              <p className="text-cbg my-3 ">
                <span className="font-bold">Email: </span> {userData?.email}
              </p>
              <p className="text-cbg my-3">
                <span className="font-bold">Phone number: </span>{" "}
                {userData?.phoneNumber}
              </p>
              <p className="text-cbg my-3">
                <span className="font-bold">BirthDate: </span>{" "}
                {userData?.birthDate.split("T")[0]}
              </p>
            </div>
            <div className="img-section ms-auto pt-6">
              <div className="avatar">
                <div className="w-40 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
