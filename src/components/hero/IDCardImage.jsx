"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export default function IDCardImage() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 250, damping: 20 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["20deg", "-20deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-20deg", "20deg"]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div
      className="
        absolute
        top-[-120px]
        left-1/2
        -translate-x-1/2
        z-20
        w-[260px] sm:w-[300px] md:w-[360px] lg:w-[420px] xl:w-[480px]
      "
      style={{ perspective: "1400px" }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="relative"
      >
        <Image
          src="/image/IDcard.png"
          alt="Prashant ID Card"
          width={480}
          height={720}
          priority
          className="rounded-xl shadow-2xl"
        />
      </motion.div>
    </div>
  );
}
