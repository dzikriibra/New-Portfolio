"use client";

import React, { useState, useMemo, useCallback, useTransition } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";

import { HighlightCard } from "@/components/ui/card/HighlightCard";
import { LayoutGrid } from "@/components/ui/card/LayoutGrid";
import { BaseButton } from "@/components/ui/button/BaseButton";

import { projects } from "./data/projects";
import { certificates } from "./data/certificates";

import { PortfolioCard } from "./sections/components/PortfolioCard";
import { handleProjectAction } from "./sections/components/action/handleProjectAction";
import { handleCertificateAction } from "./sections/components/action/handleCertificateAction";

// Dynamic Import untuk memotong bundle awal dan menunda mounting DOM
const GlassModal = dynamic(() => import("@/components/ui/modal/GlassModal").then((mod) => mod.GlassModal), { ssr: false });

const PortfolioModal = dynamic(() => import("./sections/components/modal/PortfolioModal").then((mod) => mod.PortfolioModal), { ssr: false });

const StatusPopup = dynamic(() => import("./sections/components/action/StatusPopUp").then((mod) => mod.StatusPopup), { ssr: false });

export default function ProjectSection() {
  const [isPending, startTransition] = useTransition();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeContent, setActiveContent] = useState<any>(null);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState<any>(null);

  // Optimized click handlers menggunakan startTransition untuk membebaskan Main Thread
  const openModal = useCallback((item: any) => {
    startTransition(() => {
      setActiveContent(item);
      setIsModalOpen(true);
    });
  }, []);

  const handleAction = useCallback((item: any) => {
    startTransition(() => {
      const result = item.type === "project" ? handleProjectAction(item) : handleCertificateAction(item);

      setPopupData(result);
      setIsPopupOpen(true);
    });
  }, []);

  const featuredItems = useMemo(() => {
    const featuredProjects = projects.slice(0, 2);
    const featuredCertificates = certificates.slice(0, 2);
    return [featuredProjects[0], featuredCertificates[0], featuredCertificates[1], featuredProjects[1]].filter(Boolean);
  }, []);

  const cards = useMemo(() => {
    return featuredItems.map((item, index) => ({
      id: item.id,
      thumbnail: item.coverImage,
      title: item.title,
      type: item.type,
      initialReactions: item.initialReactions,
      className: index % 4 === 0 || index % 4 === 3 ? "md:col-span-2 h-[350px]" : "col-span-1 h-[350px]",
      content: <PortfolioCard item={item} onOpenModal={openModal} onAction={handleAction} />,
    }));
  }, [featuredItems, openModal, handleAction]);

  return (
    <>
      <section
        id="project"
        className="
          relative flex min-h-screen w-full
          flex-col items-center overflow-hidden
          bg-primary-bg pt-16
        "
      >
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.1 }} className="mx-auto w-full max-w-7xl px-4 md:px-6">
          {/* HEADER */}
          <div className="mb-11 space-y-4 text-center">
            <h2 className="font-headline text-3xl font-bold text-white lg:text-5xl">Featured Projects & Achievements</h2>
            <p className="mx-auto max-w-2xl text-description-text">
              A collection of real-world solutions and <span className="font-semibold italic text-accent">national-level recognitions</span>
            </p>
          </div>

          {/* HIGHLIGHT */}
          <HighlightCard onOpenModal={openModal} onAction={handleAction} />

          {/* GRID */}
          <div className="mt-14">
            <LayoutGrid cards={cards} />
          </div>

          {/* BUTTON */}
          <div className="mt-14 flex justify-center">
            <Link href="/portofolio" prefetch={false}>
              <BaseButton
                variant="outline"
                className="
                  group flex items-center gap-2
                  border-white/10 px-6 py-3
                  text-sm transition-all
                  hover:border-accent/50 active:scale-95
                  md:px-8 md:py-4 md:text-base
                "
              >
                Show More
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </BaseButton>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* DETAIL MODAL - Hanya di-render jika isOpen true */}
      {isModalOpen && (
        <GlassModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={activeContent?.title} maxWidth="max-w-6xl" maxHeight="55vh">
          <PortfolioModal item={activeContent} />
        </GlassModal>
      )}

      {/* STATUS POPUP - Hanya di-render jika isOpen true */}
      {isPopupOpen && (
        <GlassModal isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} title={popupData?.title} maxWidth="max-w-2xl" maxHeight="70vh">
          <StatusPopup data={popupData} />
        </GlassModal>
      )}
    </>
  );
}
