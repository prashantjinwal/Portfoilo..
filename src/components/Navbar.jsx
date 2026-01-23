"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  const navLinks = ["Projects", "About", "Resume"];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-12 py-6 flex items-center justify-between bg-transparent"
    >
      
      <div className="text-white text-xl tracking-widest font-zen">
        PRASHANT<span className="text-blue-500">...</span> &lt;/&gt;
      </div>

      
      <div className="flex items-center gap-8 text-lg font-semibold text-gray-300">
        
        {navLinks.map((link, idx) => (
          <a
            key={idx}
            href="#"
            className="relative group"
          >
            <span className="relative z-10">{link}</span>
            
            <span
              className="absolute left-0 bottom-0 h-[2px] bg-blue-500 w-0 group-hover:w-full transition-all duration-300 ease-out"
            />
          </a>
        ))}

        
        <button className="relative px-5 py-1 rounded-full overflow-hidden text-black bg-blue-500 group">
          
          <span
            className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out"
          ></span>
          <span className="relative z-10">Contact</span>
        </button>
      </div>
    </motion.nav>
  );
}
