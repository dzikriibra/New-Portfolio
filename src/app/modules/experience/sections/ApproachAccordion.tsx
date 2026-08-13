"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Approach } from "@/types/experience";

interface ApproachAccordionProps {
  approaches: Approach[];
}

export const ApproachAccordion: React.FC<ApproachAccordionProps> = ({ approaches }) => {
  const [openId, setOpenId] = useState<string | null>(approaches[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4 w-full p-3">
      <div>
        <p className="!text-sm sm:!text-base font-semibold tracking-wider text-slate-300 uppercase">Shaped My Approach</p>
        <div className="h-[1px] bg-slate-700/80 w-28 mt-2" />
      </div>

      <div className="space-y-3">
        {approaches.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="border-b border-white/10 pb-3 last:border-none">
              <button type="button" onClick={() => toggleItem(item.id)} className="w-full flex items-center justify-between text-left group py-1 cursor-pointer focus:outline-none">
                <div className="flex items-center gap-3">
                  <span className="!text-sm sm:!text-base font-mono font-bold text-accent shrink-0">{item.number}</span>
                  <span className="!text-base sm:!text-lg font-bold text-white group-hover:text-accent transition-colors">{item.title}</span>
                </div>
                <div className="text-slate-400 group-hover:text-white transition-colors shrink-0">{isOpen ? <ChevronDown size={20} className="text-accent" /> : <ChevronRight size={20} />}</div>
              </button>

              {isOpen && <div className="mt-2 pl-7 !text-sm sm:!text-base text-description-text leading-relaxed">{item.description}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};
