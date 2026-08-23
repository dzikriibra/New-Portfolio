"use client";

import { Skill } from "@/types/skill";
import React from "react";

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <article
      className="
        flex w-full flex-col justify-between
        rounded-2xl border border-white/10
        bg-[#111625]/80 p-6 sm:p-7
        backdrop-blur-sm
        transition-all duration-300
        hover:border-accent/40 hover:bg-[#131a2e]
      "
    >
      <div>
        <h3 className="font-headline text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
          <span className="text-white">{skill.number}. </span>
          <span>{skill.title}</span>
        </h3>

        <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">{skill.description}</p>

        <div className="space-y-5">
          {skill.sections.map((section) => (
            <div key={section.label} className="space-y-1">
              <h4 className="text-xs sm:text-sm font-bold text-slate-200 uppercase tracking-wider">{section.label}</h4>

              {section.items.length <= 3 ? (
                <p className="text-sm text-slate-300/90 leading-relaxed">{section.items.join(" · ")}</p>
              ) : (
                <ul className="space-y-1 pt-0.5 text-sm text-slate-300/90 leading-relaxed">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.75 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300/80" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {skill.id === 2 && <p className="mt-6 text-[11px] italic text-amber-400 border-t border-white/5 pt-3">*Design supports how I build, not what I primarily build.</p>}
    </article>
  );
};
