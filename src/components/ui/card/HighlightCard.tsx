"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Eye, ExternalLink } from "lucide-react";
import { featured } from "@/app/modules/project/data/featured";
import { BaseButton } from "../button/BaseButton";
import { ProjectReaction } from "../reaction/ProjectReaction";

interface HighlightCardProps {
  onOpenModal: (item: any) => void;
  onAction: (item: any) => void;
}

export const HighlightCard = ({ onOpenModal, onAction }: HighlightCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const project = featured[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === featured.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? featured.length - 1 : prev - 1));
  };

  if (!project) return null;

  const tags = project.tags || [];
  const MAX_TAGS = 6;
  const visibleTags = tags.slice(0, MAX_TAGS);
  const hiddenTagsCount = tags.length - MAX_TAGS;

  return (
    <div className="relative mb-16 w-full lg:mb-24 transform-gpu">
      <div
        className="
          relative flex h-[450px]
          flex-col overflow-hidden
          rounded-4xl border border-white/5
          bg-card-bg/90
          lg:h-[400px]
          lg:flex-row
        "
      >
        <div
          className="
            absolute inset-0
            z-0 overflow-hidden
            lg:relative
            lg:w-[50%]
          "
        >
          <Image
            key={project.id}
            quality={70}
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            loading="eager"
            className="
              object-cover
              transition-opacity duration-300
              brightness-[0.3]
              lg:brightness-100
            "
          />

          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-primary-bg
              via-primary-bg/40
              to-transparent
              lg:hidden
            "
          />
        </div>

        <div
          className="
            relative z-10
            flex flex-1 flex-col
            justify-center
            p-8
            lg:p-10
          "
        >
          <h3
            className="
              mb-5 text-center
              text-2xl font-bold
              leading-tight text-white
              lg:mb-8
              lg:text-left
            "
          >
            {project.title}
          </h3>

          <div className="relative mb-5 lg:mb-8">
            <div
              className="
                rounded-2xl
                border-none
                bg-transparent
                p-0
                lg:relative
                lg:z-10
                lg:-ml-20
                lg:border lg:border-white/10
                lg:bg-card-bg/95
                lg:p-6
                lg:shadow-2xl
              "
            >
              <p
                className="
                  line-clamp-3
                  text-center text-sm
                  leading-relaxed
                  text-description-text
                  font-body
                  md:text-base
                  lg:text-left
                "
              >
                {project.description}
              </p>
            </div>
          </div>

          <div
            className="
              mb-5 lg:mb-8 flex flex-wrap
              items-center justify-center gap-2
              lg:justify-start
            "
          >
            {visibleTags.map((tag: string) => (
              <span
                key={tag}
                className="
                  whitespace-nowrap rounded-full border
                  border-accent/20
                  bg-accent/10
                  px-3 py-1
                  text-[10px] text-accent
                  md:text-xs
                "
              >
                {tag}
              </span>
            ))}

            {hiddenTagsCount > 0 && (
              <span
                className="
                  whitespace-nowrap rounded-full border
                  border-white/10
                  bg-white/5
                  px-2.5 py-1
                  text-[10px] font-semibold text-neutral-400
                  md:text-xs
                "
              >
                +{hiddenTagsCount}
              </span>
            )}
          </div>

          <div className="mb-6 flex justify-center lg:hidden">
            <ProjectReaction key={`mobile-${project.id}`} projectId={String(project.id)} initialReactions={project.initialReactions} />
          </div>

          <div
            className="
              flex flex-col
              items-center gap-4
              sm:flex-row
              md:justify-center
              lg:justify-start
            "
          >
            <BaseButton onClick={() => onAction(project)} variant="primary" size="md" className="w-full sm:w-auto">
              View Project
              <Eye size={16} />
            </BaseButton>

            <BaseButton onClick={() => onOpenModal(project)} variant="outline" size="md" className="w-full sm:w-auto">
              Detail
              <ExternalLink size={16} />
            </BaseButton>
          </div>
        </div>
      </div>

      {/* Navigasi Desktop */}
      <div
        className="
          absolute
          -bottom-6
          left-1/2
          w-full
          -translate-x-1/2
          hidden
          lg:flex
          items-center
          justify-between
          z-20
          px-8
        "
      >
        <ProjectReaction key={`desktop-${project.id}`} projectId={String(project.id)} initialReactions={project.initialReactions} />

        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            type="button"
            className="
              rounded-full
              border border-white/10
              bg-card-bg
              p-3
              text-white
              transition-colors
              hover:border-accent
              hover:text-accent
            "
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            type="button"
            className="
              rounded-full
              border border-white/10
              bg-card-bg
              p-3
              text-white
              transition-colors
              hover:border-accent
              hover:text-accent
            "
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Navigasi Mobile */}
      <div
        className="
          absolute
          -bottom-6
          left-1/2
          z-20
          flex
          -translate-x-1/2
          gap-3
          lg:hidden
        "
      >
        <button
          onClick={prevSlide}
          type="button"
          className="
            rounded-full
            border border-white/10
            bg-card-bg
            p-3
            text-white
            transition-colors
            hover:border-accent
            hover:text-accent
          "
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          type="button"
          className="
            rounded-full
            border border-white/10
            bg-card-bg
            p-3
            text-white
            transition-colors
            hover:border-accent
            hover:text-accent
          "
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};
