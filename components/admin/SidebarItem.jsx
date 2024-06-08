import Link from "next/link";
import Image from "next/image";

export default function SidebarItem({ href, icon, children }) {
  return (
    <Link href={href} className="py-3 text-xl">
      {icon && <Image src={icon} width={30} height={30}></Image>}
      {children}
    </Link>
  );
}
