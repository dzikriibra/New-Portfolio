"use client";

import React from "react";
import { ExperienceHeader } from "./sections/ExperienceHeader";
import { ExperienceCard } from "./sections/ExperienceCard";
import { experiences } from "./data/experiences";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="
          relative flex min-h-screen w-full flex-col
          overflow-hidden bg-primary-bg
          pt-14 
        "
    >
      <div className="w-full max-w-7xl mx-auto space-y-12">
        <ExperienceHeader />

        <div className="space-y-8 w-full">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
