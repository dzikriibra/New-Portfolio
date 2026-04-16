"use client";
import { motion } from "framer-motion";

export const Badge = ({ skill, color, variants, isActive }: any) => (
  <motion.span
    variants={variants}
    whileHover={
      isActive
        ? {
            y: -4,
            backgroundColor: `${color}20`,
            borderColor: `${color}50`,
            color: "#fff",
            boxShadow: `0 8px 20px -5px ${color}40`,
          }
        : {}
    }
    className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[12px] text-description-text whitespace-nowrap cursor-default transition-colors duration-200"
  >
    {skill}
  </motion.span>
);
