"use client";
import { EncryptedText } from "@/components/ui/text/EncryptedText";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";

import { BaseButton } from "@/components/ui/button/BaseButton";
import { HOME_CONTENT } from "../constants/home";

export const HeroContent = () => {
  return (
    <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
      <h1 className="font-headline text-2xl md:text-3xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
        <EncryptedText text="Transforming" className="inline lg:block text-white" />
        <EncryptedText text=" Product Ideas into" className="text-white" />
        <EncryptedText text=" Clear and Structured Digital Solutions" className=" text-accent italic" />
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: HOME_CONTENT.appearDelay,
        }}
        className="mt-4 lg:mt-8 max-w-2xl font-body text-md text-description-text md:text-xl lg:text-2xl text-center lg:text-left"
      >
        <span className="font-semibold text-accent">A Frontend Developer</span> who bridges client needs with technical reality — <span className="font-semibold text-accent">bringing clarity</span> to complex ideas while
        <span className="font-semibold text-accent"> supporting</span> structured execution.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: HOME_CONTENT.appearDelay + 0.3 }}
        className="mt-6 md:mt-8 lg:mt-10 flex flex-wrap items-center justify-center gap-5 lg:justify-start"
      >
        <BaseButton variant="primary" size="md" className="lg:px-8 lg:py-3 lg:text-base" as="a" href="#project">
          See My Projects <ArrowUpRight size={20} />
        </BaseButton>
        <BaseButton variant="outline" size="md" className="lg:px-8 lg:py-3 lg:text-base" as="a" href="#contact">
          Let's Talk <MessageCircle size={20} />{" "}
        </BaseButton>
      </motion.div>
    </div>
  );
};
