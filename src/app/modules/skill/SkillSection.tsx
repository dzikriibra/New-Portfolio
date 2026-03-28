"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "./data/skillset";
import Marquee from "@/components/ui/marquee/Marquee";
import { SkillCard } from "./features/SkillCard";

export default function SkillSection() {
  const softSkillMarqueeItems = ["GOOD COMMUNICATION", "TEAMWORK", "LEADERSHIP", "PROBLEM SOLVING", "CRITICAL THINKING", "ATTENTION TO DETAIL", "ADAPTABILITY", "TIME MANAGEMENT"];

  const [activeIndex, setActiveIndex] = useState(0);

  const getSlotPosition = (index: number) => {
    const total = skillCategories.length;

    const position = (index - activeIndex + total) % total;

    if (position === 0) return 0;
    if (position === 1) return 1;
    if (position === total - 1) return -1;
    return 2;
  };

  return (
    <section id="skill" className="relative w-full bg-primary-bg pt-16 pb-25 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 my-2">
        <div className="flex flex-col lg:flex-row items-center gap-3 md:gap-6 lg:gap-16">
          {/* SISI KIRI: Header & Narrative */}
          <div className="flex-1 space-y-6">
            <div className="relative pl-8 border-l-4 border-accent/40">
              <h2 className="text-3xl md:text-6xl lg:text-8xl font-bold text-center lg:text-left text-white leading-tight font-headline">
                Defining My <br />
                <span className="text-accent ">Technical Skillset</span>
              </h2>
            </div>
            <p className="max-w-lg text-description-text text-md md:text-xl text-center lg:text-left font-body leading-relaxed">
              The frameworks, languages, and leadership principles that form
              <span className="text-accent font-semibold"> the foundation of my professional work.</span>
            </p>
          </div>

          <div className="flex-1 relative w-full flex items-center justify-center min-h-[450px] lg:min-h-[550px]">
            <div className="relative w-full max-w-[600px] h-full flex items-center justify-center">
              {skillCategories.map((category, idx) => {
                const position = getSlotPosition(idx);
                // Kita cuma render yang masuk slot -1, 0, dan 1 biar gak numpuk banyak
                if (Math.abs(position) > 1) return null;

                return <SkillCard key={category.id} category={category} isActive={activeIndex === idx} position={position} onClick={() => setActiveIndex(idx)} />;
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary-bg via-primary-bg/80 to-transparent">
        <Marquee items={softSkillMarqueeItems} />
      </div>
    </section>
  );
}
