"use client";
import React from "react";
import Marquee from "@/components/ui/marquee/Marquee";
import { SkillHeader } from "./sections/SkillHeader";
import SkillAccordion from "./sections/SkillAccordion";

export default function SkillSection() {
  const softSkillMarqueeItems = ["GOOD COMMUNICATION", "TEAM COLLABORATION", "LEADERSHIP", "PROBLEM SOLVING", "CRITICAL THINKING", "ATTENTION TO DETAIL", "ADAPTIVE LEARNING", "TIME MANAGEMENT"];

  return (
    <section
      id="skill"
      className="
        relative flex min-h-screen w-full flex-col
        overflow-hidden bg-primary-bg
        pt-14
      "
    >
      {/* CONTENT */}
      <div className="container mx-auto flex-1 px-4 md:px-6">
        <div className="flex flex-col gap-10">
          <SkillHeader />
          <SkillAccordion />
        </div>
      </div>

      {/* MARQUEE */}
      <div className="relative mt-20 w-full">
        <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/70 to-transparent pointer-events-none" />

        <Marquee items={softSkillMarqueeItems} />
      </div>
    </section>
  );
}
