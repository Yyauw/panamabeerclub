import UserNavbar from "@/components/user/UserNavbar";

export default function userLayout({ children }) {
  return (
    <>
      <section className="flex flex-col h-screen">
        <UserNavbar></UserNavbar>
        {children}
      </section>
    </>
  );
}
