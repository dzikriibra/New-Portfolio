"use client";
import React from "react";
import { AboutVisual } from "./sections/AboutVisual";
import { AboutContent } from "./sections/AboutContent";

export default function AboutSection() {
  return (
    <section id="about" className="relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-primary-bg pt-13 antialiased lg:pt-25">
      <div className="container relative z-10 mx-auto px-4 flex-1 flex flex-col items-center md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
          <AboutVisual />
          <AboutContent />
        </div>
      </div>
    </section>
  );
}
