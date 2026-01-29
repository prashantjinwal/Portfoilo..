import Navbar from "./Navbar";
import IDCardImage from "./IDCardImage";
import ParticleNetwork from "./ParticleNetwork";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        items-center
        justify-center
        pb-28
      "
    >
      {/* Particle background only for hero */}
      <ParticleNetwork />

      <Navbar />

      {/* ID CARD */}
      <IDCardImage />

      {/* Big background name */}
      <h1 className="text-[14vw] mt-10 font-mono text-[#edf2f4] tracking-widest z-10">
        PRASHANT
      </h1>

      

      {/* Explore */}
      <div className="absolute bottom-5  text-2xl opacity-70 z-10 font-arc">
        <span className=" animate-bounce" >↓</span> EXPLORE MORE
      </div>
    </section>
  );
}
