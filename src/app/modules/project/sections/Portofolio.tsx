"use client";

import React, { useState } from "react";
import Link from "next/link";

import { ArrowLeft } from "lucide-react";

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

export default function PortofolioSection() {
  const [filter, setFilter] = useState<"all" | "project" | "certificate">("all");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeContent, setActiveContent] = useState<any>(null);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState<any>(null);

  const allItems = [...projects, ...certificates];

  const filteredItems = filter === "all" ? allItems : allItems.filter((item) => item.type === filter);

  const openModal = (item: any) => {
    setActiveContent(item);
    setIsModalOpen(true);
  };

  const handleAction = (item: any) => {
    const result = item.type === "project" ? handleProjectAction(item) : handleCertificateAction(item);

    setPopupData(result);
    setIsPopupOpen(true);
  };

  const cards = filteredItems.map((item, index) => ({
    id: item.id,
    thumbnail: item.coverImage,
    title: item.title,
    type: item.type,

    className: index % 4 === 0 || index % 4 === 3 ? "md:col-span-2" : "col-span-1",

    content: <PortfolioCard item={item} onOpenModal={openModal} onAction={handleAction} />,
  }));

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
      <section
        className="
          min-h-screen
          bg-primary-bg
          py-15 text-white
        "
      >
        <div
          className="
            container mx-auto
            min-h-375 px-4
          "
        >
          {/* HEADER */}
          <div
            className="
              relative mb-10
              flex flex-col items-center
            "
          >
            <h1
              className="
                text-center font-headline
                text-3xl font-bold
                md:text-5xl
              "
            >
              Selected Projects & Creative Exploration
            </h1>

            <p
              className="
                mt-4 max-w-3xl
                text-center text-description-text
              "
            >
              Exploring the intersection of logic and design through personal projects, client collaborations, and continuous experimentation.
            </p>
          </div>

          {/* FILTER */}
          <div className="mb-5 flex justify-center">
            <FilterTabs active={filter} onChange={setFilter} />
          </div>

          {/* HIGHLIGHT */}
          <HighlightCard onOpenModal={openModal} onAction={handleAction} />

          {/* GRID */}
          <div className="mt-14">
            <LayoutGrid cards={cards} />
          </div>
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
