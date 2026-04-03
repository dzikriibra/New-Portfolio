"use client";
import { motion } from "framer-motion";
import { AboutStats } from "./AboutStats";
import { ABOUT_DATA } from "../constants/about";
import { ExpandableText } from "@/components/ui/text/ExpandableText";
import { TypewriterLoop } from "@/components/ui/text/TypewriterLoop";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const AboutContent = () => {
  return (
    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="w-full lg:w-[60%] text-left">
      <motion.div variants={itemVariants} className="border-l-4 border-accent pl-6 mb-5">
        <h3 className="italic text-xl md:text-2xl text-white leading-relaxed text-center lg:text-left">
          Building <span className="text-accent">Digital Solutions</span> with Integrity and
          <span className="text-accent italic">
            <TypewriterLoop words={ABOUT_DATA.typeWriterItems} />
          </span>
        </h3>
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-4 font-body text-description-text text-base md:text-lg leading-relaxed text-center lg:text-left">
        <p>
          I’m <span className="text-white font-semibold">Dzikri Ibrahim Wahhab</span>, a <span className="font-semibold text-accent">Frontend Developer</span> with a background in{" "}
          <span className="font-semibold text-accent">Informatics</span>.
        </p>
        <p>I bring clarity to complex ideas by understanding data flow, aligning requirements, and structuring solutions before execution.</p>

        <ExpandableText
          mobileOnly={true}
          text={
            <div className="space-y-3">
              <p>I approach problems by defining what truly needs to be built before writing code.</p>
              <p>
                I’ve applied this approach by leading a team to achieve <span className="font-semibold text-accent">a Top 10 Finalist position in the Healtech UI/UX Design Competition, organized by AOEN 2025</span>, and contributing to
                real-world system development projects.
              </p>
              <p>Currently, I’m strengthening my technical execution while maintaining a strong foundation in structured thinking and problem-solving.</p>
            </div>
          }
        />
      </motion.div>

      <motion.div variants={itemVariants} className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {ABOUT_DATA.stats.map((stat, idx) => (
          <AboutStats key={idx} {...stat} />
        ))}
      </motion.div>
    </motion.div>
  );
};
