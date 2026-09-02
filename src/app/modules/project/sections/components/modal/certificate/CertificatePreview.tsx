import React, { memo } from "react";
import Image from "next/image";

interface CertificatePreviewProps {
  image?: string;
  title: string;
}

export const CertificatePreview = memo(({ image, title }: CertificatePreviewProps) => {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-2xl
        border border-white/10
        aspect-[4/3]
        bg-black/20
        transform-gpu
      "
    >
      {image ? (
        <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 50vw" quality={75} priority className="object-cover" />
      ) : (
        <div
          className="
            flex h-full items-center justify-center
            bg-white/[0.03]
            text-white/50
            text-sm
          "
        >
          Certificate Preview Unavailable
        </div>
      )}
    </div>
  );
});

CertificatePreview.displayName = "CertificatePreview";
