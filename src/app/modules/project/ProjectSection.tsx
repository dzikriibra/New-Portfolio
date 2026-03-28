"use client";
import React, { useState } from "react";
import { BasicCard } from "@/components/ui/card/BasicCard";
import { HighlightCard } from "@/components/ui/card/HighlightCard";

import { projects } from "./data/projects";
import { certificates } from "./data/certificates";

import { BaseButton } from "@/components/ui/button/BaseButton";
import { FilterTabs } from "./features/FilterTabs";
import { ArrowDown } from "lucide-react";

export default function ProjectSection() {
  const [filter, setFilter] = useState<"all" | "project" | "certificate">("all");

  const allItems = [...projects, ...certificates];

  const filteredItems = filter === "all" ? allItems : allItems.filter((item) => item.type === filter);

  return (
    <section id="project" className="relative flex min-h-screen w-full flex-col items-center bg-primary-bg pt-15">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-7 space-y-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-headline text-white font-bold">Featured Projects & Validations</h2>
          <p className="text-description-text max-w-2xl mx-auto">
            A collection of real-world solutions and <span className="text-accent italic font-semibold">national-level recognitions</span>
          </p>
        </div>

        {/* FILTER */}
        <FilterTabs active={filter} onChange={setFilter} />

        {/* FEATURED (SELALU ADA) */}
        <HighlightCard />

        {/* GRID */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <BasicCard key={item.id} {...item} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <BaseButton variant="outline" size="lg" className="group">
            Show More
            <ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-1" />
          </BaseButton>
        </div>
      </div>
    </section>
  );
}
