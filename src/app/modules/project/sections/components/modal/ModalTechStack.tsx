"use client";

import { PortfolioItem } from "@/types/project";

interface ModalTechStackProps {
  item: PortfolioItem;
}

export const ModalTechStack = ({ item }: ModalTechStackProps) => {
  return (
    <section
      className="
        rounded-3xl border border-white/10
        bg-white/[0.03]
        p-6
      "
    >
      <div className="space-y-5">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Stack</p>

          <h3 className="mt-2 text-xl font-semibold text-white">Technologies & Tools</h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {item.tags.map((tag) => (
            <div
              key={tag}
              className="
                rounded-full border border-white/10
                bg-white/[0.04]
                px-4 py-2
                text-sm text-white/80
              "
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
