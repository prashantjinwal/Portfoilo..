"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Filter, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import projects from "./projects";

const categories = ["All", "Data Analytics", "Full Stack", "Frontend"];

export default function Projectmain() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <main className="bg-black text-white px-6 md:px-16 py-24 relative">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-14 flex justify-between items-center"
      >
        <h1 className="text-5xl font-zen md:text-6xl font-bold tracking-wide">
          Projects
        </h1>
        <a
          href="/all-projects"
          className="flex items-center gap-2 text-sm text-blue-500 hover:text-blue-400 font-medium"
        >
          See All <ArrowRight size={16} />
        </a>
      </motion.div>

      
      <div className="flex gap-3 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm border transition-all
              ${
                active === cat
                  ? "bg-blue-600 border-blue-500"
                  : "border-white/20 hover:border-white/50"
              }`}
          >
            <Filter size={14} />
            {cat}
          </button>
        ))}
      </div>

      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            whileHover={{ scale: 1.03, y: -6 }}
            className="rounded-2xl bg-white/5 border border-white/20 backdrop-blur-xl shadow-glass overflow-hidden cursor-pointer transition-all duration-300"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.37), 0 0 0 1px rgba(255, 255, 255, 0.1)",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0))",
            }}
          >
            
            <div className="relative h-48 w-full group">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>

              
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 hover:bg-blue-500/20 transition-all duration-300 cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>

              
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-sm hover:text-blue-400 transition"
                >
                  <Github size={16} /> Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 text-sm hover:text-blue-400 transition"
                >
                  <ExternalLink size={16} /> Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
