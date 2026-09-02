import React, { memo } from "react";
import Image from "next/image";

interface ProjectGalleryProps {
  images?: string[];
  title: string;
}

export const ProjectGallery = memo(({ images, title }: ProjectGalleryProps) => {
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
          text-sm text-white/40
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
        transform-gpu
      "
    >
      <Image src={preview} alt={title} fill sizes="(max-width: 768px) 100vw, 50vw" quality={75} priority className="object-cover" />
    </div>
  );
});

ProjectGallery.displayName = "ProjectGallery";
