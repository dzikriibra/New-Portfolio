"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CometCard = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(x, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const rX = (py - 0.5) * 20;
    const rY = (px - 0.5) * -20;

    x.set(rY);
    y.set(rX);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="perspective-[1200px]">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={cn("relative h-full w-full rounded-3xl border border-white/10 bg-card-bg p-2 overflow-hidden", className)}
      >
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-30"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15), transparent 60%)",
          }}
        />

        <div className="absolute inset-0 z-0 pointer-events-none">
          {mounted &&
            [...Array(6)].map((_, i) => (
              <span
                key={i}
                className="absolute h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"
                style={{
                  top: Math.random() * 100 + "%",
                  left: Math.random() * 100 + "%",
                  animationDelay: Math.random() * 8 + "s",
                  animationDuration: Math.random() * 10 + 2 + "s",
                }}
              />
            ))}
        </div>

        {/* CONTENT */}
        <div className="relative z-10 h-full w-full rounded-2xl overflow-hidden border border-white/5" style={{ transform: "translateZ(40px)" }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
};
