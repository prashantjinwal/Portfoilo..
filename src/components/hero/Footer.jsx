"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mt-40 overflow-hidden border-t border-white/10 bg-black"
    >
      
      <motion.div
        aria-hidden
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-500/10"
      />

      
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 py-12">

        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">

          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold tracking-wide text-white">
              Prashant
            </h3>
            <p className="mt-1 text-sm text-white/60">
              Data Analyst · Full Stack Engineer
            </p>
          </motion.div>

   
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -8, 0], opacity: [0.6, 1, 0.6] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
                className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 shadow-[0_0_16px_rgba(56,189,248,0.7)]"
              />
            ))}
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-6"
          >
            {[
              { icon: Github, link: "https://github.com/yourusername" },
              { icon: Linkedin, link: "https://linkedin.com/in/yourusername" },
              { icon: Mail, link: "mailto:yourmail@gmail.com" },
            ].map(({ icon: Icon, link }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                whileHover={{ scale: 1.15, y: -3 }}
                transition={{ type: "spring", stiffness: 260 }}
                className="group relative text-white/60 hover:text-white"
              >
                <Icon size={20} />

                
                <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-blue-500/40 to-cyan-400/40 blur-lg opacity-0 transition group-hover:opacity-100" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 border-t border-white/5 pt-6 text-center text-xs text-white/40"
        >
          © {new Date().getFullYear()} Prashant — Built with Next.js & Tailwind
        </motion.div>

      </div>
    </motion.footer>
  );
}
