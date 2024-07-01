import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/home/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PanamaBeerClub",
  description: "Subcripcion de cervezas artesanales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={inter.className}>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
