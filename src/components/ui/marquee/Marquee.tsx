"use client";
import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  className?: string;
}

export default function Marquee({ items, className }: MarqueeProps) {
  return (
    <div className={`relative flex w-full overflow-hidden border-t border-white/5 bg-[#0F172A]/80 backdrop-blur-md py-3 ${className}`}>
      <motion.div animate={{ x: [0, -1000] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="flex whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((text, idx) => (
              <span key={idx} className="mx-8 flex items-center gap-15 text-[10px] font-bold tracking-[0.2em] text-gray-400">
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
