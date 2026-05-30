"use client";

import { PortfolioItem } from "@/types/project";

interface CertificateInfoProps {
  item: PortfolioItem;
}

export const CertificateInfo = ({ item }: CertificateInfoProps) => {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-white/60 text-sm">Publisher</p>

        <p className="text-white font-medium">{item.publisher || "-"}</p>
      </div>

      {item.issuedDate && (
        <div>
          <p className="text-white/60 text-sm">Issued Date</p>

          <p className="text-white">{item.issuedDate}</p>
        </div>
      )}

      {item.credentialId && (
        <div>
          <p className="text-white/60 text-sm">Credential ID</p>

          <p className="text-white break-all">{item.credentialId}</p>
        </div>
      )}

      <div>
        <p className="text-white/60 text-sm mb-3">Skills</p>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="
                px-3 py-1
                rounded-full
              bg-black/10
                border border-white/20
                text-white
                text-xs
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
