"use client";
import React from "react";
import { motion } from "framer-motion";
import { SkillCard } from "../sections/SkillCard";
import { skillCategories } from "../data/skillset";

interface SkillCarouselProps {
  activeIndex: number;
  setActiveIndex: (idx: number) => void;
}

export const SkillCarousel = ({ activeIndex, setActiveIndex }: SkillCarouselProps) => {
  const getSlotPosition = (index: number) => {
    const total = skillCategories.length;
    const position = (index - activeIndex + total) % total;
    if (position === 0) return 0;
    if (position === 1) return 1;
    if (position === total - 1) return -1;
    return 2;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex-1 relative w-full flex items-center justify-center min-h-[450px] lg:min-h-[550px]"
    >
      <div className="relative w-full max-w-[600px] h-full flex items-center justify-center">
        {skillCategories.map((category, idx) => {
          const position = getSlotPosition(idx);
          if (Math.abs(position) > 1) return null;

          return <SkillCard key={category.id} category={category} isActive={activeIndex === idx} position={position} onClick={() => setActiveIndex(idx)} />;
        })}
      </div>
    </motion.div>
  );
};
