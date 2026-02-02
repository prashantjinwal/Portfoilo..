
import IDCardImage from "./IDCardImage";
import ParticleNetwork from "./ParticleNetwork";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        pb-28
      "
    >

      <ParticleNetwork />

      

      <IDCardImage />

     
      <h1 className="text-[14vw] mt-10 font-mono text-[#edf2f4] tracking-widest z-10">
        PRASHANT
      </h1>

      

     
      <div className="absolute bottom-5  text-2xl opacity-70 z-10 font-arc">
        <span className=" animate-bounce" >↓</span> EXPLORE MORE
      </div>
    </section>
  );
}
