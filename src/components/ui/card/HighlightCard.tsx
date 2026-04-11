"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Eye, ExternalLink } from "lucide-react";
import { featured } from "@/app/modules/project/data/featured";
import { BaseButton } from "../button/BaseButton";

interface HighlightCardProps {
  onOpenModal: (item: any, mode: "action" | "detail") => void;
}

export const HighlightCard = ({ onOpenModal }: HighlightCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = featured[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === featured.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? featured.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full mb-16 lg:mb-24">
      {/* Container Utama */}
      <div className="relative flex flex-col lg:flex-row bg-card-bg/20 rounded-4xl border border-white/5 overflow-hidden backdrop-blur-xl h-[450px] lg:h-[400px]">
        {/* Sisi Foto (Di mobile jadi background full, di desktop jadi sisi kiri) */}
        <div className="absolute inset-0 lg:relative lg:w-[50%] lg:aspect-auto overflow-hidden z-0">
          <Image src={project.coverImage} alt={project.title} fill className="object-cover transition-all duration-700 brightness-[0.3] lg:brightness-100" />
          {/* Overlay remang-remang khusus mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/40 to-transparent lg:hidden" />
        </div>

        {/* Sisi Deskripsi (Di mobile numpuk di atas foto, di desktop di samping) */}
        <div className="relative z-10 flex-1 p-8 lg:p-12 flex flex-col justify-center">
          {/* Title - Mobile: Center, Desktop: Left */}
          <h3 className="text-white text-2xl lg:text-2xl font-bold mb-6 lg:mb-3 text-center lg:text-left leading-tight">{project.title}</h3>

          <div className="relative mb-6 lg:mb-8">
            {/* Box Deskripsi - Mobile: Background Transparan, Desktop: Box Melayang */}
            <div className="bg-transparent lg:bg-card-bg/80 border-none lg:border lg:border-white/10 p-0 lg:p-6 rounded-2xl lg:-ml-20 lg:relative z-10 lg:shadow-2xl lg:backdrop-blur-md">
              <p className="text-description-text text-sm md:text-base leading-relaxed font-body text-center lg:text-left line-clamp-3">{project.description}</p>
            </div>
          </div>

          {/* Tech Stack - Mobile: Center, Desktop: Left */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
            {project.tags.map((tag: any) => (
              <span key={tag} className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-[10px] md:text-xs text-accent">
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons - Mobile: Stack/Center, Desktop: Row/Left */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <BaseButton onClick={() => onOpenModal(project, "action")} variant="primary" size="md" className="w-full sm:w-auto">
              View Project <Eye size={14} />
            </BaseButton>

            <BaseButton onClick={() => onOpenModal(project, "detail")} variant="outline" size="md" className="w-full sm:w-auto">
              Detail <ExternalLink size={14} />
            </BaseButton>
          </div>
        </div>
      </div>

      {/* Navigasi < > */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-12 flex gap-3 z-20">
        <button onClick={prevSlide} className="p-3 rounded-full bg-card-bg border border-white/10 text-white hover:border-accent hover:text-accent transition-all">
          <ChevronLeft size={20} />
        </button>
        <button onClick={nextSlide} className="p-3 rounded-full bg-card-bg border border-white/10 text-white hover:border-accent hover:text-accent transition-all">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};
