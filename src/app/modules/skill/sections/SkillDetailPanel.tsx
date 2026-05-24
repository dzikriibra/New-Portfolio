"use client";
import { SkillCategory } from "@/types/skill";

interface SkillDetailPanelProps {
  item: SkillCategory;
}

export default function SkillDetailPanel({ item }: SkillDetailPanelProps) {
  return (
    <div
      className="
        sticky top-28
        h-[330px]
        overflow-hidden
        rounded-3xl
        border border-white/10
        bg-white/[0.04]
        backdrop-blur-2xl
      "
    >
      {/* GLASS LIGHT */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />

      <div className="relative h-full overflow-y-auto custom-scrollbar p-6">
        {/* TOP */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10"
              style={{
                backgroundColor: `${item.color}15`,
              }}
            >
              <item.icon
                size={26}
                style={{
                  color: item.color,
                }}
              />
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-white">{item.title}</h3>

              <p className="mt-1 text-sm text-description-text">{item.tools.length} technologies & principles</p>
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-6">
          <p className="max-w-2xl leading-relaxed text-description-text">{item.description}</p>
        </div>

        {/* PRINCIPLES */}
        <div className="mt-6">
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/50">Working Principles</h4>

          <div className="space-y-4">
            {item.principles.map((principle) => (
              <div key={principle} className="flex items-start gap-4">
                <div
                  className="mt-2 h-2 w-2 rounded-full"
                  style={{
                    backgroundColor: item.color,
                  }}
                />

                <span className="text-white/80">{principle}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TOOLS */}
        <div className="mt-8">
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white/50">Stack & Tools</h4>

          <div className="flex flex-wrap gap-3">
            {item.tools.map((tool) => (
              <div
                key={tool}
                className="
                  rounded-full border border-white/10
                  bg-white/[0.03]
                  px-3 py-1
                  text-[12px] text-white/80
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:border-white/20
                  hover:bg-white/[0.06]
                "
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
