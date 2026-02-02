"use client";
import { useEffect, useRef } from "react";

export default function ParticleNetwork() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    window.addEventListener("mousemove", (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    });

    window.addEventListener("mouseleave", () => {
      mouse.current.x = -9999;
      mouse.current.y = -9999;
    });

    const COUNT = 120;
    const LINK_DISTANCE = 120;
    const INFLUENCE_RADIUS = 90;
    const SEPARATION_RADIUS = 40;

    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,

    
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,

      size: 1.4,
    }));

    const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

    const animate = () => {
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        
        for (let j = 0; j < particles.length; j++) {
          if (i === j) continue;
          const other = particles[j];

          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const d = Math.hypot(dx, dy);

          if (d > 0 && d < SEPARATION_RADIUS) {
            const push = (SEPARATION_RADIUS - d) / SEPARATION_RADIUS;
            p.vx += (dx / d) * push * 0.015;
            p.vy += (dy / d) * push * 0.015;
          }
        }

        
        const dxm = p.x - mouse.current.x;
        const dym = p.y - mouse.current.y;
        const dm = Math.hypot(dxm, dym);

        if (dm < INFLUENCE_RADIUS) {
          const force = (INFLUENCE_RADIUS - dm) / INFLUENCE_RADIUS;
          p.vx += (dxm / dm) * force * 0.13;
          p.vy += (dym / dm) * force * 0.13;
        }

        
        p.vx += (Math.random() - 0.5) * 0.003;
        p.vy += (Math.random() - 0.5) * 0.003;

        
        p.x += p.vx;
        p.y += p.vy;

        
        p.vx *= 0.997;
        p.vy *= 0.997;

        
        if (p.x <= 0 || p.x >= canvas.width) p.vx *= -1;
        if (p.y <= 0 || p.y >= canvas.height) p.vy *= -1;

        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();
      });

      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const d = dist(p1, p2);

          if (d < LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(255,255,255,${
              1 - d / LINK_DISTANCE
            })`;
            ctx.lineWidth = 0.3;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
     <div
      className="absolute inset-0 -z-10 pointer-events-none"
    >
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
    />
    </div>
  );
}
