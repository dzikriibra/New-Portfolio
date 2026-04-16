"use client";
import React, { useRef } from "react";
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";

export const MovingBorder = ({ children, duration = 3500, color = "#3b82f6", isActive }: { children: React.ReactNode; duration?: number; color?: string; isActive: boolean }) => {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).x);
  const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).y);
  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <div className="relative p-[1px] overflow-hidden rounded-2xl w-full h-full">
      {isActive && (
        <div className="absolute inset-0" style={{ borderRadius: "1rem" }}>
          <svg preserveAspectRatio="none" className="absolute h-full w-full" width="100%" height="100%">
            <rect fill="none" width="100%" height="100%" rx="1rem" ry="1rem" ref={pathRef} />
          </svg>
          <motion.div style={{ position: "absolute", top: 0, left: 0, display: "inline-block", transform }}>
            <div className="h-24 w-24 opacity-80" style={{ background: `radial-gradient(${color} 0%, transparent 70%)` }} />
          </motion.div>
        </div>
      )}
      <div className="relative bg-card-bg/90 backdrop-blur-xl border border-white/5 rounded-2xl w-full h-full p-5 z-10">{children}</div>
    </div>
  );
};
