"use client";
import React from "react";
import Image from "next/image";
import { Eye, ExternalLink, Award } from "lucide-react";
import { PortfolioItem } from "@/types/project";
import { BaseButton } from "../button/BaseButton";

interface BasicCardProps extends PortfolioItem {
  isSelected?: boolean;
}

export const BasicCard = ({ title, description, image, tags, link, type, imageTone, isSelected }: BasicCardProps) => {
  const isProject = type === "project";
  const isLightImage = imageTone === "light";

  return (
    <div
      className={`group relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-card-bg/40 border border-white/5 transition-all duration-500
      ${isSelected ? "scale-105 border-accent/50 z-10" : "scale-95 opacity-60"}`}
    >
      {/* Image */}
      <Image src={image} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />

      {/* Label */}
      <div className="absolute bottom-6 left-6 z-20 transition-opacity duration-300 group-hover:opacity-0">
        <span
          className={`backdrop-blur-md border text-[10px] px-2 py-0.5 rounded-md mb-2 inline-flex items-center gap-1 uppercase tracking-wider font-bold
          ${isProject ? "bg-accent/20 border-accent/30 text-accent" : "bg-yellow-400/20 border-yellow-400/30 text-yellow-300"}`}
        >
          {isProject ? "Project" : "Certificate"}
          {!isProject && <Award size={10} />}
        </span>

        <h4 className={`font-bold text-xl ${isLightImage ? "text-black" : "text-white"} drop-shadow-md`}>{title}</h4>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-30 flex flex-col justify-end bg-gradient-to-t from-primary-bg via-primary-bg/95 to-transparent p-8 opacity-0 translate-y-10 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
        <h4 className="mb-2 text-xl font-bold text-white">{title}</h4>

        <p className="mb-4 text-sm text-description-text line-clamp-3 font-body">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-accent/10 px-2 py-1 text-[10px] font-medium text-accent border border-accent/20">
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <BaseButton as="a" href={link} variant="primary" size="sm" className="flex-1">
            {isProject ? "View Project" : "Verify Certificate"}
            <Eye size={14} />
          </BaseButton>

          <BaseButton variant="outline" size="sm">
            Detail <ExternalLink size={14} />
          </BaseButton>
        </div>
      </div>
    </div>
  );
};
