"use client";
import { BaseButton } from "@/components/ui/button/BaseButton";

interface FilterTabsProps {
  active: string;
  onChange: (val: "all" | "project" | "certificate") => void;
}

export const FilterTabs = ({ active, onChange }: FilterTabsProps) => {
  const tabs = ["all", "project", "certificate"];

  return (
    <div className="flex justify-center gap-3 mb-6 flex-wrap">
      {tabs.map((tab) => {
        const isActive = active === tab;

        return (
          <BaseButton key={tab} onClick={() => onChange(tab as any)} variant={isActive ? "primary" : "outline"} size="sm" className="capitalize">
            {tab}
          </BaseButton>
        );
      })}
    </div>
  );
};
