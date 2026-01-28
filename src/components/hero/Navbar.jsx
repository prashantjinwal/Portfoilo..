"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Navbar({ scrollRef }) {
  const navLinks = ["Projects", "About", "Resume"];
  const [hidden, setHidden] = useState(false);

 
  const { scrollY } = useScroll({
    container: scrollRef,
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > previous && latest > 80) {
      setHidden(true); // scroll down
    } else {
      setHidden(false); // scroll up
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -90, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 px-12 py-6 flex items-center justify-between "
    >
      
      <div className="text-white text-xl tracking-widest font-zen">
        PRASHANT<span className="text-blue-500">...</span> &lt;/&gt;
      </div>

      
      <div className="flex items-center gap-8 text-lg font-semibold text-gray-300">
        {navLinks.map((link, idx) => (
          <a key={idx} href={`#${link.toLowerCase()}`} className="relative group">
            <span className="relative z-10">{link}</span>
            <span className="absolute left-0 bottom-0 h-[2px] bg-blue-500 w-0 group-hover:w-full transition-all duration-300" />
          </a>
        ))}

        <button className="relative px-5 py-1 rounded-full overflow-hidden text-black bg-blue-500 group">
          <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
          <span className="relative z-10">Contact</span>
        </button>
      </div>
    </motion.nav>
  );
}
