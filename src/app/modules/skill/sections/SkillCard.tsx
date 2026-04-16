"use client";
import React, { useRef } from "react";
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
import { MovingBorder } from "@/components/ui/border/MovingBorder";
import { Badge } from "@/components/ui/badge/Badge";

interface SkillCardProps {
  category: any;
  isActive: boolean;
  position: number;
  onClick: () => void;
}

export const SkillCard = ({ category, isActive, position, onClick }: SkillCardProps) => {
  const Icon = category.icon;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      layout
      onClick={onClick}
      animate={{
        scale: isActive ? 1 : 0.8,
        y: position * 150,
        opacity: isActive ? 1 : 0.3,
        zIndex: isActive ? 50 : 30,
        filter: isActive ? "blur(0px)" : "blur(3px)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.8 }}
      className="absolute w-full max-w-[700px] cursor-pointer"
    >
      <MovingBorder color={category.color} isActive={isActive}>
        <div className="flex justify-between items-start mb-5 relative z-20">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center border transition-colors"
              style={{
                backgroundColor: isActive ? `${category.color}15` : "rgba(255,255,255,0.05)",
                borderColor: isActive ? `${category.color}30` : "rgba(255,255,255,0.1)",
              }}
            >
              {Icon && <Icon size={20} style={{ color: isActive ? category.color : "rgba(255,255,255,0.4)" }} />}
            </div>
            <div>
              <h4 className="text-white font-bold text-base leading-tight mb-1">{category.title}</h4>
              <p className="text-white/40 text-[11px] uppercase tracking-widest">{category.count}</p>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full border text-[10px] font-bold uppercase" style={{ borderColor: isActive ? `${category.color}40` : "rgba(255,255,255,0.1)", color: isActive ? category.color : "rgba(255,255,255,0.4)" }}>
            {category.label}
          </span>
        </div>

        <motion.div className="flex flex-wrap gap-2 relative z-20" variants={containerVariants} initial="hidden" animate={isActive ? "visible" : "hidden"}>
          {category.skills.map((skill: string) => (
            <Badge key={skill} skill={skill} color={category.color} variants={itemVariants} isActive={isActive} />
          ))}
        </motion.div>

        {isActive && <div className="absolute inset-0 rounded-2xl pointer-events-none z-0" style={{ background: `radial-gradient(circle at top left, ${category.color}08, transparent 70%)` }} />}
      </MovingBorder>
    </motion.div>
  );
};
