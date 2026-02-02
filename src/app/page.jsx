"use client";

import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/About/AboutSection";
import Projectpage from "@/app/project/page";

export default function Home() {
  return (
    <>
      <main className="snap-y snap-proximity scroll-smooth">
        <section id="hero" className="h-screen snap-start">
          <HeroSection />
        </section>

        <section id="about" className="min-h-screen snap-start">
          <AboutSection />
        </section>

        <section id="projects" className="snap-start">
          <Projectpage />
        </section>
      </main>
    </>
  );
}
