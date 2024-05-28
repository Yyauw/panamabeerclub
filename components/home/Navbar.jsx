import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" text-white p-4 relative z-10">
      <div className="navbar bg-transparent">
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
            <h1>
              <Link href="/">
                Panama<span>BeerClub</span>
              </Link>
            </h1>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            {/*                        <li>
                            <Link href="/sobre/nosotros">About</Link>
                        </li>
                        <li>
                            <Link href="/planes">Princing</Link>
                        </li> */}
            <li className="item-navegacion-login">
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
