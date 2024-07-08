"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="section-footer relative z-10">
      <div>
        <h2 className="notranslate">
          Panama
          <br />
          <span className="notranslate">BeerClub</span>
        </h2>
        <p className="notranslate">PanamaBeerClub</p>
        <p className="notranslate">Copyright © 2024 - All right reserved</p>
      </div>
      <div className="footer-sections">
        <div>
          <h3 className="notranslate">Services</h3>
          <Link className="notranslate" href={"/"}>
            Subscription
          </Link>
          <Link className="notranslate" href={"/"}>
            Pricing
          </Link>
          <Link className="notranslate" href={"/"}>
            Login
          </Link>
          <Link className="notranslate" href={"/"}>
            Sing Up
          </Link>
        </div>
        <div>
          <h3 className="notranslate">Company</h3>
          <Link className="notranslate" href={"/"}>
            About Us
          </Link>
          <Link className="notranslate" href={"/"}>
            Contac
          </Link>
          <Link className="notranslate" href={"/"}>
            Jobs
          </Link>
        </div>
        <div>
          <h3 className="notranslate">Legal</h3>
          <Link className="notranslate" href={"/"}>
            Terms Of Use
          </Link>
          <Link className="notranslate" href={"/"}>
            Privacy Policy
          </Link>
          <Link className="notranslate" href={"/"}>
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
