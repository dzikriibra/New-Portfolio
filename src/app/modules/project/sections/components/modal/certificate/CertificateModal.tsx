"use client";

import { PortfolioItem } from "@/types/project";

import { CertificatePreview } from "./CertificatePreview";
import { CertificateInfo } from "./CertificateInfo";

interface CertificateModalProps {
  item: PortfolioItem;
}

export const CertificateModal = ({ item }: CertificateModalProps) => {
  return (
    <div
      className="
        grid
        gap-8
        lg:grid-cols-[1.2fr_1fr]
        items-start
      "
    >
      {/* LEFT */}

      <CertificatePreview image={item.credentialSrc?.[0]} title={item.title} />

      {/* RIGHT */}

      <div className="space-y-6">
        <div>
          <p
            className="
              mt-3
              text-description-text
              leading-relaxed
            "
          >
            {item.description}
          </p>
        </div>

        <CertificateInfo item={item} />
      </div>
    </div>
  );
};
