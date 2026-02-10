"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      
      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-500/10" />

      <div className="relative flex flex-col items-center gap-6">

        {/* Floating dots */}
        <div className="flex gap-4">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
              className="h-3 w-3 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.8)]"
            />
          ))}
        </div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm tracking-[0.4em] text-white/70"
        >
          PRASHANT
        </motion.h1>

      </div>
    </div>
  );
}
