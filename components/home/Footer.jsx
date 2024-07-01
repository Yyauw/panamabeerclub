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
        <p>Copyright © 2024 - All right reserved</p>
      </div>
      <div className="footer-sections">
        <div>
          <h3>Services</h3>
          <Link href={"/"}>Subscription</Link>
          <Link href={"/"}>Pricing</Link>
          <Link href={"/"}>Login</Link>
          <Link href={"/"}>Sing Up</Link>
        </div>
        <div>
          <h3>Company</h3>
          <Link href={"/"}>About Us</Link>
          <Link href={"/"}>Contac</Link>
          <Link href={"/"}>Jobs</Link>
        </div>
        <div>
          <h3>Legal</h3>
          <Link href={"/"}>Terms Of Use</Link>
          <Link href={"/"}>Privacy Policy</Link>
          <Link href={"/"}>Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
