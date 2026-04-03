"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import { HOME_CONTENT } from "../constants/home";

export const HeroIllustration = () => {
  return (
    <div className="flex flex-1 items-center justify-center relative w-full lg:w-auto mt-1 lg:mt-0">
      {/* 1. BACKGROUND ABSTRAK MODERN (Melayang di belakang) */}
      <motion.div animate={{ x: [0, 15, 0], y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute z-0 w-[110%] h-[110%] lg:w-[130%] lg:h-[130%] opacity-20">
        {/* Bulatan & Bentuk Modern (Glassmorphism + Gradient) */}
        <div className="absolute top-10 right-30 w-40 h-40 rounded-full bg-accent blur-[60px]" />
        <div className="absolute top-60 left-10 w-32 h-32 rounded-full bg-purple-600 blur-[50px]" />
        <div className="absolute top-20 left-1/4 w-32 h-32 rotate-45 border-2 border-dashed border-white/5 opacity-30" />
      </motion.div>

      {/* 2. CONTAINER KARAKTER (Dengan Glow Efek) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: HOME_CONTENT.appearDelay + 0.1 }}
        className="relative z-10 h-70 w-70 md:h-87.5 md:w-87.5 lg:h-112.5 lg:w-112.5"
      >
        {/* Bayangan halus di bawah laptop agar menyatu dengan background */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-accent/20 rounded-full blur-[30px]" />

        {/* Gambar Karakter */}
        <div className="relative h-full w-full overflow-hidden flex items-center justify-center">
          <Image
            src={HOME_CONTENT.characterImage}
            alt="Character working on a laptop"
            fill
            sizes="(max-width: 768px) 280px, (max-width: 1024px) 350px, 450px"
            className="object-contain"
            priority // Penting buat SEO karena ini Hero image
          />
        </div>
      </motion.div>
    </div>
  );
};
