"use client";
import React from "react";
import Marquee from "@/components/ui/marquee/Marquee";
import { HeroContent } from "./sections/HomeContent";
import { HeroIllustration } from "./sections/HomeIllustration";
import { HOME_CONTENT } from "./constants/home";

export default function HomeSection() {
  return (
    <section id="home" className="relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-primary-bg pt-10 antialiased lg:pt-25">
      <div className="container relative z-10 mx-auto px-4 flex-1 flex items-start md:px-6">
        <div className="flex flex-col-reverse items-center gap-8 lg:flex-row lg:gap-14">
          <HeroContent />
          <HeroIllustration />
        </div>
      </div>

      <div className="w-full mt-auto">
        <Marquee items={HOME_CONTENT.marqueeItems} />
      </div>
    </section>
  );
}
