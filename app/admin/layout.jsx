import { Inter } from "next/font/google";
import "../globals.css";
import SidebarItem from "@/components/admin/SidebarItem";
import userIcon from "@/public/icon/users-svgrepo-com.svg";
import bottleIcon from "@/public/icon/bottle-2-svgrepo-com.svg";
import souvenirIcon from "@/public/icon/souvenir-svgrepo-com.svg";
import logoutIcon from "@/public/icon/logout-2-svgrepo-com.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin site",
  description: "PanamaBeerClub Admin Site",
};

export default function adminHeader({ children }) {
  return (
    <main className="flex flex-row h-screen w-screen">
      <aside className="h-screen flex-1">
        <ul className="menu bg-base-200 h-screen">
          <h1 className="text-2xl text-center font-bold mb-4">ADMIN PANEL</h1>
          <li>
            <SidebarItem href="/admin/users" icon={userIcon}>
              Users
            </SidebarItem>
          </li>
          <li>
            <SidebarItem href="/admin/beers" icon={bottleIcon}>
              Beers
            </SidebarItem>
          </li>
          <li>
            <SidebarItem href="/admin/users" icon={souvenirIcon}>
              Souvenirs
            </SidebarItem>
          </li>
          <li className="mt-auto text-red-400 font-bold">
            <SidebarItem href="/admin/users" icon={logoutIcon}>
              Log Out
            </SidebarItem>
          </li>
        </ul>
      </aside>
      <section className="flex-[4] overflow-auto">{children}</section>
    </main>
  );
}
