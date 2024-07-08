"use client";
import Link from "next/link";
import logo from "@/public/images/logo.svg";
import Image from "next/image";
import CartIcon from "@/public/icon/Cart.svg";
import ProfileIcon from "@/public/icon/profile.svg";

export default function UserNavbar({ openModal, isUserLogged }) {
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
                <Link href="/" className="notranslate ">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/user/catalog">Catalogo</Link>
              </li>
              <li>
                <Link href="/user/pricing">Princing</Link>
              </li>
              {isUserLogged ? (
                <>
                  <li>
                    <Link href="/user/profile" className="notranslate ">
                      Perfil
                    </Link>
                  </li>

                  <li>
                    <Link href="/user/orders" className="notranslate">
                      Historial
                    </Link>
                  </li>
                  <li>
                    <h1 className="notranslate" onClick={openModal}>
                      Carrito
                    </h1>
                  </li>
                  <li>
                    <Link href="/logout" className="text-red-500">
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <li className="item-navegacion-login">
                  <Link href="/login" className="notranslate ">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div className="title-web">
            <Link href="/" className="text-xl md:hidden notranslate ">
              Panama<span className="notranslate text-primary">BeerClub</span>
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
              <Link href="/">Inicio</Link>
            </li>
            {/*                        <li>
                            <Link href="/sobre/nosotros">About</Link>
                        </li>
                        <li>
                            <Link href="/planes">Princing</Link>
                        </li> */}
            <li className=" text-xl ">
              <Link href="/user/catalog">Catalogo</Link>
            </li>
            <li className=" text-xl ">
              <Link href="/user/pricing">Pricing</Link>
            </li>
          </ul>
        </div>
        <div className="ms-auto navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-xl">
              <div onClick={openModal}>
                <Image src={CartIcon} width={40}></Image>
              </div>
            </li>
            {/*                        <li>
                            <Link href="/sobre/nosotros">About</Link>
                        </li>
                        <li>
                            <Link href="/planes">Princing</Link>
                        </li> */}
            <li className="item-navegacion-login text-xl text-primary">
              {isUserLogged ? (
                <div className="dropdown dropdown-bottom dropdown-end">
                  <div tabIndex={0} role="button">
                    <Image src={ProfileIcon} width={40}></Image>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box relative"
                  >
                    <li>
                      <Link href="/user/profile" className="text-xl">
                        Perfil
                      </Link>
                    </li>
                    <li>
                      <Link href="/user/orders" className="notranslate text-xl">
                        Historial
                      </Link>
                    </li>
                    <li>
                      <Link href="/logout" className="text-xl">
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link href="/login" className="txt-primary my-auto font-bold">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
