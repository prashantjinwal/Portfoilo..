"use client";

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import Image from "next/image";

const SKILLS = [
  { name: "Excel", src: "/icons_stack/Excel.svg" },
  { name: "Power BI", src: "/icons_stack/Power_BI.svg" },
  { name: "SQL", src: "/icons_stack/Microsoft-SQL-Server.svg" },
  { name: "Python", src: "/icons_stack/Python.svg" },
  { name: "Pandas", src: "/icons_stack/Pandas.svg" },
  { name: "NumPy", src: "/icons_stack/NumPy.svg" },
  { name: "Matplotlib", src: "/icons_stack/Matplotlib.svg" },
  { name: "Seaborn", src: "/icons_stack/seaborn.svg" },
  { name: "Jupyter", src: "/icons_stack/Jupyter.svg" },
  { name: "GitHub", src: "/icons_stack/GitHub.svg" },
  { name: "JavaScript", src: "/icons_stack/JavaScript.svg" },
  { name: "React", src: "/icons_stack/React.svg" },
  { name: "Node", src: "/icons_stack/Node.js.svg" },
];

export default function PhysicsSkillsVortex() {
  const boxRef = useRef(null);
  const iconRefs = useRef([]);
  const engineRef = useRef(null);
  const bodiesRef = useRef([]);

  const [spaceMode, setSpaceMode] = useState(true);
  const [magnet, setMagnet] = useState(false);
  const [vortexMode, setVortexMode] = useState(false);

  useEffect(() => {
    const {
      Engine,
      Runner,
      Bodies,
      World,
      Body,
      Events,
      Mouse,
      MouseConstraint,
    } = Matter;

    const width = 600;
    const height = 420;
    const SIZE = 46;
    const MAX_SPEED = 6;

    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

    const engine = Engine.create();
    engine.gravity.y = 0;
    engineRef.current = engine;

    
    const walls = [
      Bodies.rectangle(width / 2, -10, width, 20, { isStatic: true }),
      Bodies.rectangle(width / 2, height + 10, width, 20, { isStatic: true }),
      Bodies.rectangle(-10, height / 2, 20, height, { isStatic: true }),
      Bodies.rectangle(width + 10, height / 2, 20, height, { isStatic: true }),
    ];

    
    const bodies = SKILLS.map(() =>
      Bodies.circle(
        Math.random() * (width - 120) + 60,
        Math.random() * (height - 120) + 60,
        SIZE / 2,
        {
          restitution: 0.9,
          frictionAir: 0.02,
          sleepThreshold: Infinity, 
        }
      )
    );

    bodiesRef.current = bodies;
    World.add(engine.world, [...walls, ...bodies]);

    
    bodies.forEach((b) => {
      Body.setVelocity(b, {
        x: (Math.random() - 0.5) * 6,
        y: (Math.random() - 0.5) * 6,
      });
      Body.setAngularVelocity(b, (Math.random() - 0.5) * 0.05);
    });

    
    Events.on(engine, "beforeUpdate", () => {
      const cx = width / 2;
      const cy = height / 2;

      bodies.forEach((b) => {
        
        const jitter = 0.0008;
        Body.applyForce(b, b.position, {
          x: (Math.random() - 0.5) * jitter,
          y: (Math.random() - 0.5) * jitter,
        });

        
        const v = b.velocity;
        const speed = Math.hypot(v.x, v.y);
        if (speed > MAX_SPEED) {
          Body.setVelocity(b, {
            x: (v.x / speed) * MAX_SPEED,
            y: (v.y / speed) * MAX_SPEED,
          });
        }

        
        if (vortexMode) {
          const dx = cx - b.position.x;
          const dy = cy - b.position.y;
          const dist = Math.hypot(dx, dy) || 1;

          
          const tangential = 0.00015 * b.mass;
          Body.applyForce(b, b.position, {
            x: (-dy / dist) * tangential,
            y: (dx / dist) * tangential,
          });

          
          const radial = 0.00002 * b.mass;
          Body.applyForce(b, b.position, {
            x: (dx / dist) * radial,
            y: (dy / dist) * radial,
          });
        }

        
        if (magnet) {
          bodies.forEach((a) => {
            if (a === b) return;
            const dx = a.position.x - b.position.x;
            const dy = a.position.y - b.position.y;
            const dist = Math.hypot(dx, dy) || 1;
            const force = 0.000015;
            Body.applyForce(b, b.position, {
              x: (dx / dist) * force,
              y: (dy / dist) * force,
            });
          });
        }
      });
    });

   
    Events.on(engine, "afterUpdate", () => {
      bodies.forEach((b, i) => {
        b.position.x = clamp(b.position.x, SIZE / 2, width - SIZE / 2);
        b.position.y = clamp(b.position.y, SIZE / 2, height - SIZE / 2);

        const el = iconRefs.current[i];
        if (!el) return;

        el.style.transform = `translate(${b.position.x - SIZE / 2}px, ${
          b.position.y - SIZE / 2
        }px)`;
      });
    });

    
    const mouse = Mouse.create(boxRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.12,
        damping: 0.25,
      },
    });

    World.add(engine.world, mouseConstraint);

    const runner = Runner.create();
    Runner.run(runner, engine);

    return () => {
      Runner.stop(runner);
      World.clear(engine.world);
      Engine.clear(engine);
    };
  }, [magnet, vortexMode]);

  const toggleGravity = () => {
    setSpaceMode(!spaceMode);
    engineRef.current.gravity.y = spaceMode ? 1 : 0;
  };

  return (
    <div className="w-full flex flex-col items-center gap-4">
      
      <div className="flex gap-3 text-xs">
        <button onClick={toggleGravity} className="px-3 py-1 border rounded ">
          {spaceMode ? "Enable Gravity" : "Space Mode"}
        </button>
        <button
          onClick={() => setMagnet(!magnet)}
          className="px-3 py-1 border rounded"
        >
          {magnet ? "Disable Magnet" : "Magnetic Clustering"}
        </button>
        <button
          onClick={() => setVortexMode(!vortexMode)}
          className="px-3 py-1 border rounded"
        >
          {vortexMode ? "Disable Vortex" : "Vortex Mode"}
        </button>
      </div>

      
      <div
        ref={boxRef}
        className="relative w-[600px] h-[420px] bg-slate-950 border border-slate-800 rounded-xl overflow-hidden"
      >
        {SKILLS.map((skill, i) => (
          <div
            key={skill.name}
            ref={(el) => (iconRefs.current[i] = el)}
            className="absolute group will-change-transform"
            style={{ width: 46, height: 46 }}
          >
            <Image src={skill.src} alt={skill.name} width={46} height={46} />
            <span className="tooltip">{skill.name}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .tooltip {
          position: absolute;
          top: -26px;
          left: 50%;
          transform: translateX(-50%);
          background: #020617;
          border: 1px solid #334155;
          font-size: 11px;
          padding: 2px 6px;
          border-radius: 4px;
          opacity: 0;
          transition: 0.2s;
          white-space: nowrap;
          pointer-events: none;
        }
        .group:hover .tooltip {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
