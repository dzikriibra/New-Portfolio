"use client";

import { useState } from "react";

interface ProjectTabsProps {
  problem?: string;
  solution?: string;
  impact?: string;
}

type TabType = "problem" | "solution" | "impact";

export const ProjectTabs = ({ problem, solution, impact }: ProjectTabsProps) => {
  const [activeTab, setActiveTab] = useState<TabType>("problem");

  const content = {
    problem: problem || "Problem documentation is currently unavailable.",

    solution: solution || "Solution documentation is currently unavailable.",

    impact: impact || "Impact documentation is currently unavailable.",
  };

  const currentContent = content[activeTab];

  const isFallback = currentContent.includes("documentation is currently unavailable.");

  return (
    <div className="space-y-4">
      {/* TABS */}
      <div
        className="
          flex flex-wrap
          items-center gap-4
          text-sm font-semibold
        "
      >
        <button
          onClick={() => setActiveTab("problem")}
          className={`
            flex-1
            py-3
            text-center
            uppercase
            tracking-widest
            font-semibold
            transition-all
            ${activeTab === "problem" ? "text-accent" : "text-white/60"}
          `}
        >
          Problem
        </button>

        <span>|</span>

        <button
          onClick={() => setActiveTab("solution")}
          className={`
            flex-1
            py-3
            text-center
            uppercase
            tracking-widest
            font-semibold
            transition-all
            ${activeTab === "solution" ? "text-accent" : "text-white/60"}
          `}
        >
          Solution
        </button>

        <span>|</span>

        <button
          onClick={() => setActiveTab("impact")}
          className={`
            flex-1
            py-3
            text-center
            uppercase
            tracking-widest
            font-semibold
            transition-all
            ${activeTab === "impact" ? "text-accent" : "text-white/60"}
          `}
        >
          Impact
        </button>
      </div>

      {/* CONTENT */}
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
            "
          >
            {currentContent}
          </div>
        ) : (
          currentContent
        )}
      </div>
    </div>
  );
};
