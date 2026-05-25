"use client";

import { PortfolioItem } from "@/types/project";
import { Award, Briefcase } from "lucide-react";

interface ModalHeaderProps {
  item: PortfolioItem;
}

export const ModalHeader = ({ item }: ModalHeaderProps) => {
  const isProject = item.type === "project";

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-3">
        <div
          className={`
            inline-flex items-center gap-2
            rounded-full border px-4 py-1.5
            text-xs font-semibold uppercase tracking-[0.15em]
            ${isProject ? "border-green-400/20 bg-green-400/10 text-green-300" : "border-yellow-400/20 bg-yellow-400/10 text-yellow-300"}
          `}
        >
          {isProject ? <Briefcase size={14} /> : <Award size={14} />}
          {isProject ? "Project" : "Certificate"}
        </div>

        {item.publisher && <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70">{item.publisher}</div>}
      </div>

      <div className="space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">{item.title}</h2>

        <div className="h-[1px] w-full bg-white/10" />
      </div>
    </div>
  );
};
