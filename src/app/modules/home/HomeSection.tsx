"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

import Marquee from "@/components/ui/marquee/Marquee";
import { HeroContent } from "./sections/HomeContent";
import { HOME_CONTENT } from "./constants/home";
import CursorSpotlight from "@/components/ui/effects/CursorSpotlight";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HomeSection() {
  return (
    <motion.section id="home" variants={containerVariants} initial="hidden" animate="visible" className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-primary-bg antialiased">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image src={HOME_CONTENT.backgroundImage} alt="Hero Background" fill priority className="object-cover object-center" />
      </div>

      <CursorSpotlight />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 z-10 bg-primary-bg/10" />

      {/* MAIN CONTENT */}
      <div className="container relative z-20 mx-auto flex-1 flex items-center justify-center">
        <HeroContent staggerItemVariants={itemVariants} />
      </div>

      {/* MARQUEE */}
      <motion.div variants={itemVariants} className="relative z-20 w-full">
        <Marquee items={HOME_CONTENT.marqueeItems} />
      </motion.div>
    </motion.section>
  );
}
