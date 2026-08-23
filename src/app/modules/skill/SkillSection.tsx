"use client";

import React from "react";
import { motion } from "framer-motion";
import { SkillHeader } from "./sections/SkillHeader";
import { skillset } from "./data/skillset";
import { SkillCard } from "./sections/SkillCard";

export default function SkillSection() {
  return (
    <section
      id="skill"
      className="
        relative flex min-h-screen w-full flex-col
        overflow-hidden bg-primary-bg
        px-4 pt-14 pb-12 
        md:px-6 md:pt-16 md:pb-16
        lg:pt-18 lg:pb-20
      "
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* HEADER */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <SkillHeader />
        </motion.div>

        {/* SKILLS GRID */}
        <div className="mt-6 md:mt-8 lg:mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 items-stretch">
          {skillset.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="w-full h-full flex"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
