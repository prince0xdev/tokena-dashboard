import { Inter } from "next/font/google";
import "./globals.css";
import "./mono-sans.css";
import SideBar from "./components/SideBar";


export const metadata = {
  title: "Tokena App",
  description: "Discover the best financial App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="font-mono-sans-regular " >
        {/* <SideBar/> */}
        {children}
      </body>
    </html>
  );
}
