"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export default function IDCardImage() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

 
  const springConfig = { stiffness: 250, damping: 20 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);


  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["25deg", "-25deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-25deg", "25deg"]);

  
  const zTranslate = useTransform(mouseY, [-0.5, 0.5], [15, -15]);

  
  const ribbonRotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const ribbonRotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    x.set(mx / rect.width - 0.5);
    y.set(my / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div
      className="fixed top-[-80px] left-1/2 -translate-x-1/2 z-50 pointer-events-auto
      w-[260px] sm:w-[300px] md:w-[360px] lg:w-[420px] xl:w-[480px]"
      style={{ perspective: "1500px" }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          translateZ: zTranslate,
          transformStyle: "preserve-3d",
        }}
        className="relative"
      >
        {/* Card Image */}
        <div className="relative rounded-xl shadow-2xl overflow-hidden">
          <Image
            src="/image/IDcard.png"
            alt="Prashant ID Card"
            width={480}
            height={720}
            priority
            className="w-full h-auto rounded-xl"
          />
        </div>

        {/* Ribbon */}
        <motion.div
          style={{
            rotateX: ribbonRotateX,
            rotateY: ribbonRotateY,
            transformStyle: "preserve-3d",
          }}
          className="absolute top-4 left-0 w-full flex justify-center pointer-events-none z-20"
        >
          <div className="bg-red-500 text-white px-4 py-1 rounded-full font-bold text-sm shadow-lg">
            Here is bug 
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
