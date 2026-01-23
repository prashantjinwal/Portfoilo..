import Navbar from "@/components/Navbar";
import IDCardImage from "@/components/IDCardImage";

export default function Home() {
  return (
    <section className="
      relative
      min-h-screen
      bg-transparent
      overflow-hidden
      flex
      items-center
      justify-center
      isolate
    ">

      <Navbar />
      <IDCardImage />

      {/* Big Background Name */}
      <h1 className="text-[14vw] font-mono text-[#edf2f4] tracking-widest z-10">
        PRASHANT
      </h1>

      {/* Bottom strip */}
      <div className="absolute bottom-32 text-blue-400 text-sm tracking-wide z-10">
        Python • SQL • Dashboards • React Js • Power BI
      </div>

      <div className="absolute bottom-12 text-xs opacity-60 z-10">
        ↓ EXPLORE MORE
      </div>
    </section>
  );
}
