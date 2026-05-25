"use client";

import { PortfolioItem } from "@/types/project";

import { ModalHeader } from "./ModalHeader";
import { ModalGallery } from "./ModalGallery";
import { ModalOverview } from "./ModalOverview";
import { ModalTechStack } from "./ModalTechStack";
import { ModalAction } from "./ModalAction";
import { ModalFooter } from "./ModalFooter";

import { ProblemSection } from "./case-study/ProblemSection";
import { SolutionSection } from "./case-study/SolutionSection";
import { ImpactSection } from "./case-study/ImpactSection";

interface PortfolioModalProps {
  item?: PortfolioItem | null;
}

export const PortfolioModal = ({ item }: PortfolioModalProps) => {
  if (!item) return null;

  return (
    <div className="space-y-10">
      {/* HEADER */}
      {/* <ModalHeader item={item} /> */}

      {/* GALLERY */}
      <ModalGallery item={item} />

      {/* CONTENT */}
      <div
        className="
          grid gap-10
          lg:grid-cols-[1.2fr_0.8fr]
        "
      >
        {/* LEFT SIDE */}
        <div className="space-y-10">
          <ModalOverview item={item} />

          <ProblemSection />

          <SolutionSection />

          <ImpactSection />
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">
          <ModalTechStack item={item} />

          <ModalAction item={item} />
        </div>
      </div>

      {/* FOOTER */}
      <ModalFooter />
    </div>
  );
};
