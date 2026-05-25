"use client";

import React from "react";
import { Eye, ExternalLink, Award, Briefcase, School } from "lucide-react";

import { BaseButton } from "@/components/ui/button/BaseButton";
import { PortfolioItem } from "@/types/project";

interface PortfolioCardProps {
  item: PortfolioItem;
  onOpenModal: (item: any) => void;
  onAction: (item: any) => void;
}

export const PortfolioCard = ({ item, onOpenModal, onAction }: PortfolioCardProps) => {
  const isProject = item.type === "project";

  return (
    <div className="w-full text-white">
      {/* TOP BADGES */}
      <div className="mb-2 flex flex-wrap gap-2">
        <span
          className={`
            inline-flex items-center gap-1
            rounded-md border px-2 py-0.5
            text-[10px] font-bold uppercase
            ${isProject ? "border-green-400/30 bg-green-400/20 text-green-300" : "border-yellow-400/30 bg-yellow-400/20 text-yellow-300"}
          `}
        >
          {isProject ? <Briefcase size={10} /> : <Award size={10} />}

          {isProject ? "Project" : "Certificate"}
        </span>

        {!isProject && item.publisher && (
          <span
            className="
              inline-flex items-center gap-1
              rounded-md border border-white/20
              bg-white/10
              px-2 py-0.5
              text-[10px] font-semibold text-white
            "
          >
            <School size={10} />
            {item.publisher}
          </span>
        )}
      </div>

      {/* TITLE */}
      <h4
        className="
          mb-1 line-clamp-2
          text-xl font-bold
          md:text-md
        "
      >
        {item.title}
      </h4>

      {/* DESCRIPTION */}
      <p
        className="
          mb-4 line-clamp-2
          text-sm text-neutral-300
          font-body
        "
      >
        {item.description}
      </p>

      {/* TAGS */}
      <div className="mb-auto flex flex-wrap gap-1.5 pb-4">
        {/* MOBILE */}
        <div className="flex flex-wrap items-center gap-1.5 lg:hidden">
          {item.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="
                rounded-full border border-white/10
                bg-white/5
                px-2 py-1
                text-[10px] font-medium text-neutral-300
              "
            >
              {tag}
            </span>
          ))}

          {item.tags.length > 3 && <span className="text-[10px] font-semibold text-neutral-500">+{item.tags.length - 3}</span>}
        </div>

        {/* DESKTOP */}
        <div className="hidden flex-wrap items-center gap-1.5 lg:flex">
          {item.tags.slice(0, 6).map((tag) => (
            <span
              key={tag}
              className="
                rounded-full border border-white/10
                bg-white/5
                px-2.5 py-1
                text-[10px] font-medium text-neutral-300
                transition-colors
                hover:border-cyan-500/30
              "
            >
              {tag}
            </span>
          ))}

          {item.tags.length > 6 && <span className="text-[10px] font-semibold text-neutral-500">+{item.tags.length - 6}</span>}
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex gap-2">
        {/* VIEW / VERIFY */}
        <BaseButton onClick={() => onAction(item)} variant="primary" size="sm" className="h-8 flex-1 text-[12px]">
          <span className="hidden lg:inline">{isProject ? "View Project" : "Verify Certificate"}</span>

          <span className="inline lg:hidden">{isProject ? "View" : "Verify"}</span>

          <Eye size={14} className="ml-2 shrink-0" />
        </BaseButton>

        {/* DETAIL */}
        <BaseButton
          onClick={() => onOpenModal(item)}
          variant="outline"
          size="sm"
          className="
            h-8 px-3
            border-white/20
            hover:bg-white/10
            lg:px-8
          "
        >
          Detail
          <ExternalLink size={14} className="ml-2" />
        </BaseButton>
      </div>
    </div>
  );
};
