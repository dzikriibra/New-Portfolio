"use client";

import React from "react";
import { Calendar, Briefcase, Building2 } from "lucide-react";

interface ExperienceContentProps {
  type: string;
  role: string;
  period: string;
  company: string;
  description: string;
}

export const ExperienceContent: React.FC<ExperienceContentProps> = ({ type, role, period, company, description }) => {
  return (
    <div className="flex flex-col gap-4 w-full p-2">
      {/* 1. HEADER ROW: BADGE + DOT SEPARATOR + COMPANY */}
      <div className="flex flex-wrap items-center gap-2.5 text-sm font-medium">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-accent/10 border border-accent/20 text-accent font-semibold">
          <Briefcase size={15} />
          <span>{type}</span>
        </span>
        <span className="text-slate-500">•</span>
        <span className="inline-flex items-center gap-1.5 text-slate-300 font-semibold">
          <Building2 size={15} className="text-slate-400" />
          <span>{company}</span>
        </span>
      </div>

      {/* 2. TITLE & PERIOD METADATA */}
      <div className="space-y-4">
        <h3 className="text-2xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">{role}</h3>
        <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
          <Calendar size={16} className="text-accent/80 shrink-0" />
          <span>{period}</span>
        </div>
      </div>

      {/* 3. DESKRIPSI */}
      <p className="text-base text-description-text leading-relaxed font-normal pt-1">{description}</p>
    </div>
  );
};
