"use client";

import "./globals.css";
import { Major_Mono_Display, Zen_Dots, Acme } from "next/font/google";
import { useEffect, useState } from "react";
import PageReveal from "@/components/PageReveal";
import Navbar from "@/components/hero/Navbar";
import Footer from "@/components/hero/Footer";
import Loader from "@/components/Loader";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800); // loader duration (1.8s)

    return () => clearTimeout(timer);
  }, []);

  return (
    <html
      lang="en"
      className={`${mono.variable} ${zen.variable} ${arc.variable}`}
    >
      <body className="bg-black text-white">
        {loading && <Loader />}

        {!loading && (
        <PageReveal>
          <Navbar />
            {children}
          <Footer />
        </PageReveal>
        )}

      </body>
    </html>
  );
}
