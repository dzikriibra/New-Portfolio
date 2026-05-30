"use client";

import Image from "next/image";

interface CertificatePreviewProps {
  image?: string;
  title: string;
}

export const CertificatePreview = ({ image, title }: CertificatePreviewProps) => {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-2xl
        border border-white/10
        aspect-[4/3]
      "
    >
      {image ? (
        <Image src={image} alt={title} fill className="object-cover" />
      ) : (
        <div
          className="
            flex h-full items-center justify-center
            bg-white/[0.03]
            text-white/50
          "
        >
          Certificate Preview Unavailable
        </div>
      )}
    </div>
  );
};
