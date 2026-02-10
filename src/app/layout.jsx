import "./globals.css";
import { Major_Mono_Display, Zen_Dots, Acme } from "next/font/google";
import Navbar from "@/components/hero/Navbar";
import Footer from "@/components/hero/Footer";



const mono = Major_Mono_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
});

const zen = Zen_Dots({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-zen",
});

const arc = Acme({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-arc",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mono.variable} ${zen.variable} ${arc.variable}`}>

      <body className="bg-black text-white">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
