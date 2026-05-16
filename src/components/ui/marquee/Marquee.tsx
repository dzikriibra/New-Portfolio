"use client";
import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  className?: string;
}

export default function Marquee({ items, className }: MarqueeProps) {
  return (
    <div
      className={`
        relative flex w-full overflow-hidden
        border-t border-white/10
        bg-transparent
        py-3
        ${className}
      `}
    >
      {/* Fade kiri */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-primary-bg to-transparent" />

      {/* Fade kanan */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-primary-bg to-transparent" />

      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap"
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((text, idx) => (
              <span
                key={idx}
                className="
                  mx-8 flex items-center gap-15
                  text-[10px]
                  font-bold
                  tracking-[0.2em]
                  text-white/50
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {text}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
