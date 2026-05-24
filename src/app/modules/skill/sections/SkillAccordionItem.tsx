"use client";
import { SkillCategory } from "@/types/skill";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface SkillAccordionItemProps {
  item: SkillCategory;
  active: boolean;
  onClick: () => void;
}

export default function SkillAccordionItem({ item, active, onClick }: SkillAccordionItemProps) {
  return (
    <button
      onClick={onClick}
      className="
        group relative w-full
        border-b border-white/10
        py-8 text-left
        transition-all duration-500
        hover:border-white/20
      "
    >
      {/* ACTIVE LINE */}
      <div
        className={`
          absolute bottom-0 left-0 h-[1px]
          transition-all duration-500
          ${active ? "w-full opacity-100" : "w-0 opacity-0"}
        `}
        style={{
          backgroundColor: item.color,
        }}
      />

      <div className="flex items-center justify-between gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span
              className="h-2 w-2 rounded-full"
              style={{
                backgroundColor: item.color,
              }}
            />

            <span
              className={`
                text-xl md:text-3xl font-semibold
                transition-all duration-300 uppercase
                ${active ? "text-white" : "text-white/70"}
              `}
            >
              {item.title}
            </span>
          </div>
        </div>

        <motion.div
          animate={{
            rotate: active ? 90 : 0,
            x: active ? 4 : 0,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <ChevronRight
            size={28}
            className={`
              transition-colors duration-300
              ${active ? "text-white" : "text-white/40"}
            `}
          />
        </motion.div>
      </div>
    </button>
  );
}
