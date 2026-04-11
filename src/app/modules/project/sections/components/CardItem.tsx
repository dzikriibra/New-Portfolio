"use client";
import React from "react";
import { Eye, ExternalLink, Award, Briefcase, School } from "lucide-react";
import { BaseButton } from "@/components/ui/button/BaseButton";
import { PortfolioItem } from "@/types/project";

interface PortfolioCardProps {
  item: PortfolioItem;
  onOpenModal: (item: any, mode: "action" | "detail") => void;
}

export const PortfolioCard = ({ item, onOpenModal }: PortfolioCardProps) => {
  const isProject = item.type === "project";

  return (
    <div className="w-full text-white">
      <div className="flex flex-wrap gap-2 mb-2">
        <span
          className={`border text-[10px] px-2 py-0.5 rounded-md uppercase font-bold inline-flex items-center gap-1
          ${isProject ? "bg-green-400/20 border-y-green-400/30 text-green-300" : "bg-yellow-400/20 border-yellow-400/30 text-yellow-300"}`}
        >
          {isProject && <Briefcase size={10} />}
          {!isProject && <Award size={10} />}
          {isProject ? "Project" : "Certificate"}
        </span>

        {!isProject && item.publisher && (
          <span className="bg-white/10 border border-white/20 text-white text-[10px] px-2 py-0.5 rounded-md font-semibold inline-flex items-center gap-1">
            <School size={10} />
            {item.publisher}
          </span>
        )}
      </div>

      <h4 className="font-bold text-xl md:text-md mb-1 line-clamp-2">{item.title}</h4>
      <p className="text-sm text-neutral-300 line-clamp-2 mb-4 font-body">{item.description}</p>

      {/* SECTION TAGS */}
      <div className="flex flex-wrap gap-1.5 mb-auto pb-4">
        {/* MOBILE & TABLET TAGS  */}
        <div className="flex lg:hidden flex-wrap gap-1.5 items-center">
          {item.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full bg-white/5 px-2 py-1 text-[10px] font-medium border border-white/10 text-neutral-300">
              {tag}
            </span>
          ))}
          {item.tags.length > 3 && <span className="text-[10px] font-semibold text-neutral-500">+{item.tags.length - 3}</span>}
        </div>

        {/* DESKTOP TAGS */}
        <div className="hidden lg:flex flex-wrap gap-1.5 items-center">
          {item.tags.slice(0, 6).map((tag) => (
            <span key={tag} className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-medium border border-white/10 text-neutral-300 hover:border-cyan-500/30 transition-colors">
              {tag}
            </span>
          ))}
          {item.tags.length > 6 && <span className="text-[10px] font-semibold text-neutral-500">+{item.tags.length - 6}</span>}
        </div>
      </div>

      <div className="flex gap-2">
        <BaseButton onClick={() => onOpenModal(item, "action")} variant="primary" size="sm" className="flex-1 text-[12px] h-8">
          <span className="hidden lg:inline">{isProject ? "View Project" : "Verify Certificate"}</span>
          <span className="inline lg:hidden">{isProject ? "View" : "Verify"}</span>
          <Eye size={14} className="ml-2 shrink-0" />
        </BaseButton>

        <BaseButton onClick={() => onOpenModal(item, "detail")} variant="outline" size="sm" className="h-8 px-3 lg:px-8 border-white/20 hover:bg-white/10">
          Detail <ExternalLink size={14} className="ml-2" />
        </BaseButton>
      </div>
    </div>
  );
};
