"use client";

import { PortfolioItem } from "@/types/project";

interface ModalOverviewProps {
  item: PortfolioItem;
}

export const ModalOverview = ({ item }: ModalOverviewProps) => {
  return (
    <section className="space-y-5">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Overview</p>

        <h3 className="text-2xl font-semibold text-white">Project Context</h3>
      </div>

      <p className="leading-relaxed text-description-text text-base md:text-lg">{item.description}</p>
    </section>
  );
};
