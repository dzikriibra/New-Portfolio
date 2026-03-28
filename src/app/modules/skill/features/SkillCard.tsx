"use client";
import React from "react";
import { motion } from "framer-motion";

interface SkillCardProps {
  category: any;
  isActive: boolean;
  position: number; // 0 = tengah, -1 = atas, 1 = bawah
  onClick: () => void;
}

export const SkillCard = ({ category, isActive, position, onClick }: SkillCardProps) => {
  const Icon = category.icon;

  return (
    <motion.div
      layout
      onClick={onClick}
      initial={false}
      animate={{
        scale: isActive ? 1 : 0.8,
        y: position * 150, // Jarak tumpukan atas-bawah
        x: 0, // Reset geser samping
        opacity: isActive ? 1 : 0.3,
        zIndex: isActive ? 50 : 30,
        filter: isActive ? "blur(0px)" : "blur(3px)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className={`absolute w-full max-w-[700px] cursor-pointer group p-5 rounded-2xl bg-card-bg/40 border border-white/5 backdrop-blur-xl shadow-2xl transition-colors ${isActive ? "border-accent/40" : "hover:border-white/20"}`}
    >
      {/* Header Card */}
      <div className="flex justify-between items-start mb-5">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center ${isActive ? "bg-accent/10" : ""}`}>{Icon && <Icon size={20} className={isActive ? "text-accent" : "text-white/40"} />}</div>
          <div>
            <h4 className="text-white font-bold text-base leading-tight mb-1">{category.title}</h4>
            <p className="text-white/40 text-[11px] uppercase tracking-widest">{category.count}</p>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded-full border border-accent/30 text-[10px] text-accent font-bold uppercase">{category.label}</span>
      </div>

      {/* Skill Badges */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill: string) => (
          <span key={skill} className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[12px] text-description-text whitespace-nowrap">
            {skill}
          </span>
        ))}
      </div>

      {/* Glow Effect */}
      {isActive && <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent pointer-events-none" />}
    </motion.div>
  );
};
