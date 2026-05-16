"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { BaseButton } from "@/components/ui/button/BaseButton";
import SplitText from "@/components/ui/text/SplitText";

export const HeroContent = ({ staggerItemVariants }: { staggerItemVariants: any }) => {
  return (
    <div className="flex flex-1 flex-col items-center text-center px-4 max-w-5xl mx-auto space-y-8 md:space-y-10">
      {/* HEADLINE */}
      <motion.div variants={staggerItemVariants} className="w-full flex flex-col gap-2">
        <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
          {/* LINE 1 */}
          <div className="flex justify-center items-center">
            <SplitText text="Transforming Product Ideas into" className="text-white" delay={30} ease="elastic.out(1, 0.75)" />
          </div>

          {/* LINE 2 */}
          <div className="flex justify-center items-center">
            <SplitText text="Clear and Structured Digital Solutions" className="text-accent italic" delay={40} ease="elastic.out(1, 0.75)" />
          </div>
        </h1>
      </motion.div>

      {/* SUB HEADLINE */}
      <motion.p variants={staggerItemVariants} className="max-w-2xl font-body text-base md:text-xl text-description-text leading-relaxed px-2">
        <span className="text-accent font-medium">A Frontend Web Developer</span> who bridges client needs with technical reality —<span className="text-accent font-medium"> bringing clarity</span> to complex ideas while supporting
        structured execution.
      </motion.p>

      {/* CTA BUTTONS */}
      <motion.div variants={staggerItemVariants} className="flex flex-wrap items-center justify-center gap-5 w-full pt-4">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <BaseButton variant="primary" className="px-8 py-4 text-base shadow-xl shadow-accent/20 flex items-center gap-2" as="a" href="#project">
            See My Projects
            <ArrowUpRight size={20} />
          </BaseButton>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <BaseButton variant="outline" className="px-8 py-4 text-base flex items-center gap-2" as="a" href="#contact">
            Let&apos;s Talk
            <MessageCircle size={20} />
          </BaseButton>
        </motion.div>
      </motion.div>
    </div>
  );
};
