import Link from "next/link";
import logo from "@/public/images/logo.svg";
import Image from "next/image";
import CartIcon from "@/public/icon/Cart.svg";
import ProfileIcon from "@/public/icon/profile.svg";

export default function UserNavbar() {
  return (
    <nav className=" text-white relative z-10">
      <div className="navbar bg-transparent grid grid-cols-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              {/* 
                            <li>
                                <Link href="/pages/sobrenosotros">About</Link>
                            </li>
                            <li>
                                <Link href="/pages/planes">Princing</Link>
                            </li> 
                            */}
              <li className="item-navegacion-login">
                <Link href="/login">Login</Link>
              </li>
            </ul>
          </div>
          <div className="title-web">
            <Link href="/" className="text-xl md:hidden">
              Panama<span className="text-primary">BeerClub</span>
            </Link>
            <h1 className="text-2xl">
              <Link href="/">
                <div className="w-[7vw]">
                  <Image
                    src={logo}
                    alt="Panama Beer Club "
                    className="hidden md:block"
                    layout="responsive"
                  />
                </div>
              </Link>
            </h1>
          </div>
        </div>
        <div className="hidden lg:flex mx-auto">
          <ul className="menu menu-horizontal px-1 flex flex-row">
            <li className="text-xl">
              <Link href="/">Home</Link>
            </li>
            {/*                        <li>
                            <Link href="/sobre/nosotros">About</Link>
                        </li>
                        <li>
                            <Link href="/planes">Princing</Link>
                        </li> */}
            <li className=" text-xl ">
              <Link href="/login">Catalog</Link>
            </li>
            <li className=" text-xl ">
              <Link href="/login">Pricing</Link>
            </li>
          </ul>
        </div>
        <div className="ms-auto navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-xl">
              <Link href="/">
                <Image src={CartIcon} width={40}></Image>
              </Link>
            </li>
            {/*                        <li>
                            <Link href="/sobre/nosotros">About</Link>
                        </li>
                        <li>
                            <Link href="/planes">Princing</Link>
                        </li> */}
            <li className="item-navegacion-login text-xl text-primary">
              <Link href="/login">
                <Image src={ProfileIcon} width={40}></Image>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
