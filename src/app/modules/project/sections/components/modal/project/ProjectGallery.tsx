"use client";

import Image from "next/image";

interface ProjectGalleryProps {
  images?: string[];
  title: string;
}

export const ProjectGallery = ({ images, title }: ProjectGalleryProps) => {
  const preview = images?.[0];

  if (!preview) {
    return (
      <div
        className="
          flex
          aspect-video
          items-center
          justify-center
          rounded-2xl
          border border-dashed border-white/10
          bg-white/[0.02]
          text-center
          text-based text-white/40
        "
      >
        Documentation preview is unavailable.
      </div>
    );
  }

  return (
    <div
      className="
        relative
        aspect-video
        overflow-hidden
        rounded-2xl
        border border-white/10
        bg-black/20
      "
    >
      <Image src={preview} alt={title} fill className="object-cover" />
    </div>
  );
};
