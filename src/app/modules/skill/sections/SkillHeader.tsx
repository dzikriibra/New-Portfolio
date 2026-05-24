"use client";
import { motion } from "framer-motion";

export const SkillHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        mx-auto flex max-w-5xl flex-col
        items-center text-center
        space-y-5
      "
    >
      {/* HEADING */}
      <div className="space-y-6">
        <h2
          className="
            font-headline text-4xl md:text-5xl lg:text-6xl
            font-bold leading-[1.1]
            tracking-tight text-white
          "
        >
          Defining My <span className="text-accent italic">Technical Foundation</span>
        </h2>

        <div className="mx-auto h-[1px] w-40 bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      </div>

      {/* DESCRIPTION */}
      <p
        className="
          max-w-3xl text-base md:text-lg
          leading-relaxed text-description-text
          font-body
        "
      >
        A combination of frontend engineering, design thinking, and collaborative workflows
        <span className="text-accent font-medium"> that shape how I approach digital product development.</span>
      </p>
    </motion.div>
  );
};
