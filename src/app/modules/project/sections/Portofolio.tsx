"use client";
import React, { useState } from "react";
import Link from "next/link";
import { projects } from "../data/projects";
import { certificates } from "../data/certificates";
import { LayoutGrid } from "@/components/ui/card/LayoutGrid";
import { ArrowLeft } from "lucide-react";
import { BaseButton } from "@/components/ui/button/BaseButton";
import { HighlightCard } from "@/components/ui/card/HighlightCard";
import { PortfolioCard } from "./components/CardItem";
import { FilterTabs } from "../features/FilterTabs";
import { GlassModal } from "@/components/ui/modal/GlassModal";
import { PortfolioModalContent } from "./components/ModalContent";

export default function PortofolioSection() {
  const [filter, setFilter] = useState<"all" | "project" | "certificate">("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeContent, setActiveContent] = useState<any>(null);
  const [modalMode, setModalMode] = useState<"action" | "detail">("detail");

  const allItems = [...projects, ...certificates];

  const filteredItems = filter === "all" ? allItems : allItems.filter((item) => item.type === filter);

  const openModal = (item: any, mode: "action" | "detail") => {
    setActiveContent(item);
    setModalMode(mode);
    setIsModalOpen(true);
  };

  const cards = filteredItems.map((item, index) => ({
    id: item.id,
    thumbnail: item.coverImage,
    title: item.title,
    type: item.type,
    className: index % 4 === 0 || index % 4 === 3 ? "md:col-span-2" : "col-span-1",
    content: <PortfolioCard item={item} onOpenModal={openModal} />,
  }));

  return (
    <>
      <Link href="/" className="fixed top-6 left-6 z-50 md:top-10 md:left-10">
        <BaseButton variant="outline" size="sm" className="group flex items-center gap-2 border-white/10 bg-black/20 backdrop-blur-md hover:border-accent/50 transition-all rounded-full px-4">
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          <span className="hidden md:inline">Back</span>
        </BaseButton>
      </Link>

      <section className="min-h-screen bg-primary-bg py-15 text-white">
        <div className="container mx-auto px-4 min-h-375">
          <div className="flex flex-col items-center mb-10 relative">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-center">Selected Works & Learning Journey</h1>
            <p className="text-description-text mt-4 text-center max-w-3xl">Exploring the intersection of logic and design through personal projects, client collaborations, and continuous skill upgrading.</p>
          </div>

          <div className="mb-5 flex justify-center">
            <FilterTabs active={filter} onChange={setFilter} />
          </div>

          <HighlightCard onOpenModal={openModal} />

          <div className="mt-14">
            <LayoutGrid cards={cards} />
          </div>
        </div>
      </section>

      <GlassModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={activeContent?.title}>
        <PortfolioModalContent item={activeContent} mode={modalMode} />
      </GlassModal>
    </>
  );
}
