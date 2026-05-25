"use client";

import { PortfolioItem } from "@/types/project";
import { BaseButton } from "@/components/ui/button/BaseButton";

import { Eye, ExternalLink } from "lucide-react";

interface ModalActionProps {
  item: PortfolioItem;
}

export const ModalAction = ({ item }: ModalActionProps) => {
  const hasLiveLink = item.link && item.link !== "#" && item.link.trim() !== "";

  const handleOpenLink = () => {
    if (!hasLiveLink) return;

    window.open(item.link, "_blank");
  };

  return (
    <section
      className="
        rounded-3xl border border-white/10
        bg-white/[0.03]
        p-6
      "
    >
      <div className="space-y-6">
        {/* HEADER */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Actions</p>

          <h3 className="mt-2 text-xl font-semibold text-white">Explore Project</h3>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col gap-3">
          {/* LIVE PREVIEW */}
          <BaseButton onClick={handleOpenLink} disabled={!hasLiveLink} className="w-full">
            {hasLiveLink ? "Live Preview" : "Private Project"}

            <Eye size={16} className="ml-2" />
          </BaseButton>

          {/* EXTERNAL */}
          <BaseButton onClick={handleOpenLink} disabled={!hasLiveLink} variant="outline" className="w-full border-white/10">
            External Resource
            <ExternalLink size={16} className="ml-2" />
          </BaseButton>
        </div>
      </div>
    </section>
  );
};
