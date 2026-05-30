"use client";

import { PortfolioItem } from "@/types/project";

import { ProjectModal } from "./project/ProjectModal";
import { CertificateModal } from "./certificate/CertificateModal";

interface PortfolioModalProps {
  item?: PortfolioItem | null;
}

export const PortfolioModal = ({ item }: PortfolioModalProps) => {
  if (!item) return null;

  switch (item.type) {
    case "project":
      return <ProjectModal item={item} />;

    case "certificate":
      return <CertificateModal item={item} />;

    default:
      return null;
  }
};
