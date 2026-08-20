"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExperienceHeader } from "./sections/ExperienceHeader";
import { ExperienceCard } from "./sections/ExperienceCard";
import { experiences } from "./data/experiences";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="
        relative flex min-h-screen w-full
        flex-col items-center
        overflow-hidden
        bg-primary-bg
        pt-16
        lg:pt-20
      "
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <ExperienceHeader />
        </motion.div>

        <div className="mt-12 w-full space-y-8 lg:mt-14">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <ExperienceCard experience={exp} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
