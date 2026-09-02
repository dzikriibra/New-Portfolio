"use client";

import React, { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";

import { LayoutGrid } from "@/components/ui/card/LayoutGrid";
import { BaseButton } from "@/components/ui/button/BaseButton";
import { HighlightCard } from "@/components/ui/card/HighlightCard";
import { GlassModal } from "@/components/ui/modal/GlassModal";

import { projects } from "../data/projects";
import { certificates } from "../data/certificates";

import { FilterTabs } from "../features/FilterTabs";

import { PortfolioCard } from "./components/PortfolioCard";
import { PortfolioModal } from "./components/modal/PortfolioModal";

import { handleProjectAction } from "./components/action/handleProjectAction";
import { handleCertificateAction } from "./components/action/handleCertificateAction";
import { StatusPopup } from "./components/action/StatusPopUp";

const ITEMS_PER_PAGE = 6;

export default function PortofolioSection() {
  const [filter, setFilter] = useState<"all" | "project" | "certificate">("all");
  const [visibleCount, setVisibleCount] = useState<number>(ITEMS_PER_PAGE);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeContent, setActiveContent] = useState<any>(null);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState<any>(null);

  const allItems = useMemo(() => [...projects, ...certificates], []);

  const filteredItems = useMemo(() => {
    return filter === "all" ? allItems : allItems.filter((item) => item.type === filter);
  }, [filter, allItems]);

  const handleFilterChange = useCallback((newFilter: "all" | "project" | "certificate") => {
    setFilter(newFilter);
    setVisibleCount(ITEMS_PER_PAGE);
  }, []);

  const visibleItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const openModal = useCallback((item: any) => {
    setActiveContent(item);
    setIsModalOpen(true);
  }, []);

  const handleAction = useCallback((item: any) => {
    const result = item.type === "project" ? handleProjectAction(item) : handleCertificateAction(item);

    setPopupData(result);
    setIsPopupOpen(true);
  }, []);

  const handleLoadMore = useCallback(() => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  }, []);

  const cards = useMemo(() => {
    return visibleItems.map((item, index) => ({
      id: item.id,
      thumbnail: item.coverImage,
      title: item.title,
      type: item.type,
      initialReactions: item.initialReactions,
      className: index % 4 === 0 || index % 4 === 3 ? "md:col-span-2" : "col-span-1",
      content: <PortfolioCard item={item} onOpenModal={openModal} onAction={handleAction} />,
    }));
  }, [visibleItems, openModal, handleAction]);

  const hasMore = visibleCount < filteredItems.length;

  return (
    <>
      {/* BACK BUTTON */}
      <Link href="/" className="fixed left-6 top-6 z-50 md:left-10 md:top-10">
        <BaseButton
          variant="outline"
          size="sm"
          className="
            group flex items-center gap-2
            rounded-full border-white/10
            bg-black/20 px-4
            backdrop-blur-md
            transition-all
            hover:border-accent/50
          "
        >
          <ArrowLeft
            size={18}
            className="
              transition-transform
              group-hover:-translate-x-1
            "
          />
          <span className="hidden md:inline">Back</span>
        </BaseButton>
      </Link>

      {/* SECTION */}
      <section className="min-h-screen bg-primary-bg py-15 text-white">
        <div className="mx-auto w-full max-w-7xl min-h-375 px-4 md:px-6">
          {/* HEADER */}
          <div className="relative mb-10 flex flex-col items-center">
            <h1 className="text-center font-headline text-3xl font-bold md:text-5xl">Selected Projects & Creative Exploration</h1>
            <p className="mt-4 max-w-3xl text-center text-description-text">Exploring the intersection of logic and design through personal projects, client collaborations, and continuous experimentation.</p>
          </div>

          {/* FILTER */}
          <div className="mb-5 flex justify-center">
            <FilterTabs active={filter} onChange={handleFilterChange} />
          </div>

          {/* HIGHLIGHT */}
          <HighlightCard onOpenModal={openModal} onAction={handleAction} />

          {/* GRID */}
          <div className="mt-14">
            <LayoutGrid cards={cards} />
          </div>

          {/* LOAD MORE BUTTON */}
          {hasMore && (
            <div className="mt-14 flex justify-center">
              <BaseButton
                onClick={handleLoadMore}
                variant="outline"
                className="
                  group flex items-center gap-2
                  border-white/10 px-6 py-3
                  text-sm transition-all
                  hover:border-accent/50
                  active:scale-95
                  md:px-8 md:py-4 md:text-base
                "
              >
                Load More ({filteredItems.length - visibleCount} items left)
                <ChevronDown size={16} className="transition-transform duration-300 group-hover:translate-y-1" />
              </BaseButton>
            </div>
          )}
        </div>
      </section>

      {/* DETAIL MODAL */}
      <GlassModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={activeContent?.title} maxWidth="max-w-6xl" maxHeight="85vh">
        <PortfolioModal item={activeContent} />
      </GlassModal>

      {/* STATUS POPUP */}
      <GlassModal isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} title={popupData?.title} maxWidth="max-w-2xl" maxHeight="70vh">
        <StatusPopup data={popupData} />
      </GlassModal>
    </>
  );
}
