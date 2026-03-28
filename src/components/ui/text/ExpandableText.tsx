"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExpandableTextProps {
  text: React.ReactNode;
  className?: string;
  mobileOnly?: boolean;
}

export const ExpandableText = ({ text, className, mobileOnly = true }: ExpandableTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={cn("flex flex-col", className)}>
      <div className={cn("relative transition-all duration-500", !isExpanded && mobileOnly ? "max-h-[30px] overflow-hidden md:max-h-none" : "", !isExpanded && !mobileOnly ? "max-h-[30px] overflow-hidden" : "")}>
        {text}

        {/* Efek Fade Out biar gak kepotong kaku */}
        {!isExpanded && <div className={cn("absolute bottom-0 left-0 h-12 w-full bg-gradient-to-t from-primary-bg to-transparent", mobileOnly ? "md:hidden" : "")} />}
      </div>

      <button onClick={() => setIsExpanded(!isExpanded)} className={cn("mt-2 flex items-center gap-1 text-sm font-bold text-accent transition-all hover:opacity-80", mobileOnly ? "md:hidden" : "")}>
        {isExpanded ? (
          <>
            Show Less <ChevronUp size={16} />
          </>
        ) : (
          <>
            Read More <ChevronDown size={16} />
          </>
        )}
      </button>
    </div>
  );
};
