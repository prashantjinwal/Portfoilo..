"use client";

import { useRef } from "react";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/About/AboutSection";

export default function Home() {
  const scrollRef = useRef(null);

  return (
    <>
      {/* NAVBAR ko ref pass hoga (layout me bhi kar sakta hai) */}

      <main
        ref={scrollRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      >
        <section id="hero" className="h-screen snap-start">
          <HeroSection />
        </section>

        <section id="about" className="h-screen snap-start">
          <AboutSection />
        </section>
      </main>
    </>
  );
}
