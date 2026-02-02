"use client";

import { motion } from "framer-motion";
import TechStack from "./TechStack";

export default function AboutSection() {
  return (
    <div className="relative w-full bg-black px-6   py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        
        <div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-zen text-5xl md:text-6xl tracking-widest text-white mb-8 mt-4"
          >
            ABOUT
          </motion.h2>

          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="
              group
              relative
              bg-[#151515]/90
              backdrop-blur-md
              rounded-2xl
              p-10
              pl-14
              border border-white/10
              overflow-hidden
              max-w-xl
            "
          >
            
            <div
              className="
                pointer-events-none
                absolute inset-0
                rounded-2xl
                bg-blue-500/25
                blur-2xl
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-500
              "
            />

            
            <span
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                bottom-0
                w-[3px]
                bg-blue-500
                shadow-[0_0_12px_rgba(59,130,246,0.6)]
              "
            />

           
            <div className="relative z-10">
              <h3 className="text-white text-xl font-semibold tracking-wide mb-4">
                Data Analyst with an Engineering Edge
              </h3>

              <p className="text-slate-400 leading-relaxed mb-4">
                I turn raw, messy data into meaningful insights using
                <span className="text-white"> Python, SQL, and analytical dashboards</span>.
                My focus is on solving real-world problems — not just building charts.
              </p>

              <p className="text-slate-400 leading-relaxed mb-6">
                I’ve worked on data-driven projects involving data cleaning,
                exploratory analysis, and performance tracking.
                My background in full-stack development helps me understand
                how data is generated, stored, and consumed in production systems.

                
              </p>

             
             

              <p className="text-slate-500 text-sm italic">
                I don’t just analyze data — I help turn it into decisions.
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT side ka TECH STACK */}
        <TechStack />
      </div>
    </div>
  );
}
