"use client";

import { motion } from "framer-motion";

export default function PageReveal({ children }) {
  return (
    <motion.div
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }}
>
  {children}
</motion.div>
  );
}
