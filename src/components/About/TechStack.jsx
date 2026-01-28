"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const SKILLS = [
  { name: "Excel", x: 20, y: 30, src: "/icons_stack/excel.svg" },
  { name: "Power BI", x: 25, y: 45, src: "/icons_stack/Power_BI.svg" },
  { name: "SQL", x: 35, y: 40, src: "/icons_stack/Microsoft-SQL-Server.svg" },

  { name: "Python", x: 43, y: 55, src: "/icons_stack/Python.svg" },
  { name: "Pandas", x: 50, y: 75, src: "/icons_stack/Pandas.svg" },
  { name: "NumPy", x: 60, y: 48, src: "/icons_stack/Numpy.svg" },
  { name: "Matplotlib", x: 62, y: 70, src: "/icons_stack/Matplotlib.svg" },
  { name: "Seaborn", x: 65, y: 38, src: "/icons_stack/seaborn.svg" },
  { name: "Jupyter", x: 78, y: 62, src: "/icons_stack/jupyter.svg" },

  { name: "React", x: 85, y: 65, src: "/icons_stack/React.svg" },
  { name: "Node.js", x: 82, y: 48, src: "/icons_stack/Node.js.svg" },
  { name: "FastAPI", x: 70, y: 72, src: "/icons_stack/Fastapi.svg" },
];

export default function SkillScatterPlot() {
  return (
    <div className="w-full flex justify-center">
      <div className="relative w-[600px] h-[420px] bg-slate-950 rounded-xl border border-slate-800 p-6">

        
        <svg className="absolute inset-0 w-full h-full">
          
          <line x1="60" y1="360" x2="560" y2="360" stroke="#475569" />
          
          <line x1="60" y1="360" x2="60" y2="40" stroke="#475569" />

          
          {[1,2,3,4].map(i => (
            <g key={i}>
              <line
                x1="60"
                y1={360 - i * 70}
                x2="560"
                y2={360 - i * 70}
                stroke="#1e293b"
                strokeDasharray="4 4"
              />
              <line
                x1={60 + i * 125}
                y1="360"
                x2={60 + i * 125}
                y2="40"
                stroke="#1e293b"
                strokeDasharray="4 4"
              />
            </g>
          ))}
        </svg>

        {/* AXIS LABELS
        <span className="absolute bottom-2 right-6 text-xs text-slate-400">
          Frontend → Backend
        </span>
        <span className="absolute top-4 left-2 text-xs text-slate-400 rotate-[-90deg] origin-left">
          Tools → Advanced Analytics
        </span> */}

        {SKILLS.map((skill, i) => {
          const left = 60 + (skill.x / 100) * 500;
          const top = 360 - (skill.y / 100) * 320;

          return (
            <motion.div
              key={skill.name}
              className="absolute group"
              style={{ left, top }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ scale: 1.25 }}
            >
              <Image
                src={skill.src}
                alt={skill.name}
                width={28}
                height={28}
                className="opacity-80 group-hover:opacity-100"
              />

              
              <div
                className="
                  absolute left-1/2 -translate-x-1/2 -top-7
                  text-[11px] px-2 py-[2px]
                  bg-slate-900 border border-slate-700
                  rounded opacity-0 group-hover:opacity-100
                  transition whitespace-nowrap
                "
              >
                {skill.name}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
