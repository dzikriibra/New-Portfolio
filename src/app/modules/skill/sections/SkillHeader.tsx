"use client";
import { motion } from "framer-motion";

export const SkillHeader = () => {
  return (
    <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, ease: "easeOut" }} className="flex-1 space-y-6">
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
    </motion.div>
  );
};
