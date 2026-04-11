"use client";
import React from "react";
import { motion } from "framer-motion";
import { HighlightCard } from "@/components/ui/card/HighlightCard";
import { projects } from "./data/projects";
import { certificates } from "./data/certificates";
import { BaseButton } from "@/components/ui/button/BaseButton";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { LayoutGrid } from "@/components/ui/card/LayoutGrid";
import { useState } from "react";
import { GlassModal } from "@/components/ui/modal/GlassModal";
import { PortfolioCard } from "./sections/components/CardItem";
import { PortfolioModalContent } from "./sections/components/ModalContent";

export default function ProjectSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeContent, setActiveContent] = useState<any>(null);
  const [modalMode, setModalMode] = useState<"action" | "detail">("detail");

  const featuredProjects = projects.slice(0, 2);
  const featuredCertificates = certificates.slice(0, 2);
  const featuredItems = [featuredProjects[0], featuredCertificates[0], featuredCertificates[1], featuredProjects[1]];

  const openModal = (item: any, mode: "action" | "detail") => {
    setActiveContent(item);
    setModalMode(mode);
    setIsModalOpen(true);
  };

  const cards = featuredItems.map((item, index) => ({
    id: item.id,
    thumbnail: item.coverImage,
    title: item.title,
    type: item.type,
    className: index % 4 === 0 || index % 4 === 3 ? "md:col-span-2 h-[350px]" : "col-span-1 h-[350px]",
    content: <PortfolioCard item={item} onOpenModal={openModal} />,
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <section id="project" className="relative flex min-h-screen w-full flex-col items-center bg-primary-bg pt-17 overflow-hidden">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" exit={{ opacity: 0, transition: { duration: 0.3 } }} viewport={{ once: false, amount: 0.1 }} className="container mx-auto px-4 md:px-6">
          {/* Header dengan animasi slide up */}
          <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="text-center mb-14 space-y-4">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-headline text-white font-bold text-center">Featured Projects & Validations</h2>
            <p className="text-description-text max-w-2xl mx-auto text-center">
              A collection of real-world solutions and <span className="text-accent italic font-semibold">national-level recognitions</span>
            </p>
          </motion.div>

          <motion.div variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
            <HighlightCard onOpenModal={openModal} />
          </motion.div>

          <motion.div variants={{ hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="mt-14">
            <LayoutGrid cards={cards} />
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="mt-8 md:mt-12 flex justify-center">
            <Link href="/portofolio" passHref>
              <BaseButton variant="outline" className="group active:scale-95 transition-all text-sm md:text-base px-6 py-3 md:px-8 md:py-4 flex items-center gap-2 border-white/10 hover:border-accent/50">
                Show More
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </BaseButton>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <GlassModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={activeContent?.title}>
        <PortfolioModalContent item={activeContent} mode={modalMode} />
      </GlassModal>
    </>
  );
}
