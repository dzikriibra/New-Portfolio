"use client";

import React from "react";

interface ExperienceContentProps {
  type: string;
  role: string;
  period: string;
  company: string;
  description: string;
}

export const ExperienceContent: React.FC<ExperienceContentProps> = ({ type, role, period, company, description }) => {
  return (
    <div className="space-y-4 w-full p-3">
      {/* BADGE TYPE */}
      <div className="inline-flex items-center gap-2 text-accent text-xs font-semibold bg-accent/10 px-3 py-1.5 rounded-md border border-accent/20">
        <span>💼</span>
        <span>{type}</span>
      </div>

      {/* TITLE & METADATA */}
      <div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">{role}</h3>
      </div>

      <div>
        <p className="text-base font-semibold text-slate-300">{period}</p>
        <p className="text-sm font-medium text-slate-400 mt-3">{company}</p>
      </div>

      {/* DESKRIPSI */}
      <p className="text-base text-description-text leading-relaxed">{description}</p>
    </div>
  );
};
