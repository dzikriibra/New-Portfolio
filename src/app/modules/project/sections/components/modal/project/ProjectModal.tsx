"use client";

import React, { memo } from "react";
import { PortfolioItem } from "@/types/project";
import { ProjectGallery } from "./ProjectGallery";
import { ProjectTags } from "./ProjectTags";
import { ProjectTabs } from "./ProjectTabs";

interface ProjectModalProps {
  item: PortfolioItem;
}

export const ProjectModal = memo(({ item }: ProjectModalProps) => {
  return (
    <div
      className="
        grid
        gap-8
        lg:grid-cols-[1.2fr_1fr]
        items-start
      "
    >
      {/* LEFT SIDE */}
      <div className="space-y-4">
        <ProjectGallery images={item.documentationSrc} title={item.title} />
        <ProjectTags tags={item.tags} />
      </div>

      {/* RIGHT SIDE */}
      <div className="h-full">
        <ProjectTabs problem={item.problem} solution={item.solution} impact={item.impact} />
      </div>
    </div>
  );
});

ProjectModal.displayName = "ProjectModal";
