import React from "react";
import Image from "next/image";
import { Code2, Globe, GraduationCap } from "lucide-react";
import { CometCard } from "@/components/ui/card/CometCard";
import { ExpandableText } from "@/components/ui/text/ExpandableText";
import { TypewriterLoop } from "@/components/ui/text/TypewriterLoop";

export default function AboutSection() {
  const TypewriterItem = [" Clarity", " Structure", " Precision", " Consistency"];

  return (
    <section id="about" className="relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-primary-bg pt-13 antialiased lg:pt-25">
      <div className="container relative z-10 mx-auto px-4 flex-1 flex flex-col items-start md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Sisi Kiri: Foto dengan Meteor Card */}
          <div className="w-full lg:w-1/3 flex flex-col items-center justify-center">
            <h2 className="text-center font-headline text-xl md:text-2xl text-white mb-4 md:mb-6 lg:mb-8">The Person Behind the Code</h2>

            <CometCard className="w-70 h-95 md:w-82.5 md:h-107.5">
              <Image src="/BDD.jpg" alt="Dzikri Ibrahim Wahhab" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </CometCard>
          </div>

          {/* Sisi Kanan: Bio & Stats */}
          <div className="w-full lg:w-[60%] text-left">
            <div className="border-l-4 border-accent pl-6 mb-5">
              <h3 className="italic text-xl md:text-2xl text-white leading-relaxed text-center md:text-left">
                Building <span className="text-accent">Digital Solutions</span> with Integrity and
                <span className="text-accent italic">
                  <TypewriterLoop words={TypewriterItem} />
                </span>
              </h3>
            </div>

            <div className="space-y-3 font-body text-description-text text-base md:text-lg leading-relaxed text-center lg:text-left">
              {/* Core (selalu tampil) */}
              <p>
                I’m <span className="text-white font-semibold">Dzikri Ibrahim Wahhab</span>, a <span className="font-semibold text-accent">Frontend Developer</span> with a background in{" "}
                <span className="font-semibold text-accent">Informatics</span>.
              </p>
              <p>I bring clarity to complex ideas by understanding data flow, aligning requirements, and structuring solutions before execution.</p>
              <p>I approach problems by defining what truly needs to be built before writing code.</p>

              <ExpandableText
                mobileOnly={true}
                text={
                  <div className="space-y-3">
                    <p>
                      I’ve applied this approach by leading a team to achieve <span className="font-semibold text-accent">a Top 10 Finalist position in the Healtech UI/UX Design Competition, organized by AOEN 2025</span>, and contributing
                      to real-world system development projects.
                    </p>
                    <p>Currently, I’m strengthening my technical execution while maintaining a strong foundation in structured thinking and problem-solving.</p>
                  </div>
                }
              />
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Stat 1: Experience */}
              <div className="group flex items-center justify-between px-5 py-6 bg-card-bg/40 rounded-2xl border border-white/5 backdrop-blur-sm hover:border-accent transition-all duration-300">
                <div className="flex flex-col">
                  <div className="text-2xl font-bold text-white leading-none">1+</div>
                  <div className="text-sm text-description-text mt-2 tracking-wider">Years Experience</div>
                </div>
                <Globe className="text-accent group-hover:scale-110 transition-transform duration-300" size={32} />
              </div>

              {/* Stat 2: Projects */}
              <div className="group flex items-center justify-between px-5 py-6 bg-card-bg/40 rounded-2xl border border-white/5 backdrop-blur-sm hover:border-green-700 transition-all duration-300">
                <div className="flex flex-col">
                  <div className="text-2xl font-bold text-white leading-none">20+</div>
                  <div className="text-sm text-description-text mt-2 tracking-wider">Projects Completed</div>
                </div>
                <Code2 className="text-green-600 group-hover:scale-110 transition-transform duration-300" size={32} />
              </div>

              {/* Stat 3: Certifications */}
              <div className="group flex items-center justify-between px-5 py-6 bg-card-bg/40 rounded-2xl border border-white/5 backdrop-blur-sm hover:border-amber-400 transition-all duration-300">
                <div className="flex flex-col">
                  <div className="text-2xl font-bold text-white leading-none">8</div>
                  <div className="text-sm text-description-text mt-2 tracking-wider">Certifications</div>
                </div>
                <GraduationCap className="text-amber-400 group-hover:scale-110 transition-transform duration-300" size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
