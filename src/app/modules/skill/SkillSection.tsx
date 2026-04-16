"use client";
import React, { useState } from "react";
import Marquee from "@/components/ui/marquee/Marquee";
import { SkillHeader } from "./sections/SkillHeader";
import { SkillCarousel } from "./sections/SkillCarousel";

export default function SkillSection() {
  const softSkillMarqueeItems = ["GOOD COMMUNICATION", "TEAM COLLABORATION", "LEADERSHIP", "PROBLEM SOLVING", "CRITICAL THINKING", "ATTENTION TO DETAIL", "ADAPTIVE LEARNING", "TIME MANAGEMENT"];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="skill" className="relative w-full bg-primary-bg pt-16 pb-25 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 my-2">
        <div className="flex flex-col lg:flex-row items-center gap-3 md:gap-6 lg:gap-16">
          <SkillHeader />
          <SkillCarousel activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary-bg via-primary-bg/80 to-transparent">
        <Marquee items={softSkillMarqueeItems} />
      </div>
    </section>
  );
}
