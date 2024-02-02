import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Indiarto Aji Begawan's CV",
  description: "Website version of Indiarto Aji Begawan's CV",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className} >{children} </body>
    </html>
  );
}
