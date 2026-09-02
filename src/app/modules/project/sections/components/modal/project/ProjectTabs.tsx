"use client";

import React, { useState, useMemo, memo } from "react";

interface ProjectTabsProps {
  problem?: string;
  solution?: string;
  impact?: string;
}

type TabType = "problem" | "solution" | "impact";

export const ProjectTabs = memo(({ problem, solution, impact }: ProjectTabsProps) => {
  const [activeTab, setActiveTab] = useState<TabType>("problem");

  const content = useMemo(() => {
    return {
      problem: problem || "Problem documentation is currently unavailable.",
      solution: solution || "Solution documentation is currently unavailable.",
      impact: impact || "Impact documentation is currently unavailable.",
    };
  }, [problem, solution, impact]);

  const currentContent = content[activeTab];
  const isFallback = currentContent.endsWith("documentation is currently unavailable.");

  return (
    <div className="space-y-4">
      {/* TABS HEADER */}
      <div
        className="
          flex flex-wrap
          items-center gap-4
          text-sm font-semibold
        "
      >
        {(["problem", "solution", "impact"] as TabType[]).map((tab, idx) => (
          <React.Fragment key={tab}>
            {idx > 0 && <span className="text-white/20">|</span>}
            <button
              onClick={() => setActiveTab(tab)}
              type="button"
              className={`
                flex-1
                py-2
                text-center
                uppercase
                tracking-widest
                font-semibold
                transition-colors
                ${activeTab === tab ? "text-accent" : "text-white/60 hover:text-white"}
              `}
            >
              {tab}
            </button>
          </React.Fragment>
        ))}
      </div>

      {/* CONTENT AREA */}
      <div
        className="
          h-[260px]
          overflow-y-auto
          pr-3
          custom-scrollbar
          text-description-text
          leading-relaxed
        "
      >
        {isFallback ? (
          <div
            className="
              flex h-full
              items-center
              justify-center
              text-center
              text-white/40
              text-sm
            "
          >
            {currentContent}
          </div>
        ) : (
          <p className="whitespace-pre-line">{currentContent}</p>
        )}
      </div>
    </div>
  );
});

ProjectTabs.displayName = "ProjectTabs";
