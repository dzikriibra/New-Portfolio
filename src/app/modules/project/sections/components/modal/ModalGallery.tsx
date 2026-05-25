"use client";

import Image from "next/image";
import { PortfolioItem } from "@/types/project";

interface ModalGalleryProps {
  item: PortfolioItem;
}

export const ModalGallery = ({ item }: ModalGalleryProps) => {
  return (
    <div
      className="
        overflow-hidden rounded-3xl
        border border-white/10
        bg-white/[0.03]
      "
    >
      <div className="relative aspect-video w-full">
        <Image src={item.coverImage} alt={item.title} fill className="object-cover" />
      </div>
    </div>
  );
};
