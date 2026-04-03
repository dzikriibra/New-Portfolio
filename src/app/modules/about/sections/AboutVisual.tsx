"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ABOUT_DATA } from "../constants/about";
import { CometCard } from "@/components/ui/card/CometCard";

export const AboutVisual = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full lg:w-1/3 flex flex-col items-center justify-center"
    >
      <h2 className="text-center font-headline text-xl md:text-3xl text-white mb-4 md:mb-6 lg:mb-8 tracking-tight">
        The Person <span className="text-accent">Behind the Code</span>
      </h2>

      <div className="relative group">
        <div className="absolute -inset-4 bg-accent/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <CometCard className="w-70 h-95 md:w-82.5 md:h-107.5 relative z-10 overflow-hidden">
          <Image src={ABOUT_DATA.profileImage} alt="Dzikri Ibrahim Wahhab" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out" />
        </CometCard>
      </div>
    </motion.div>
  );
};
