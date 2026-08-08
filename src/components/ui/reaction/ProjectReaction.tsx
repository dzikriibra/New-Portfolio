"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export interface EmojiOption {
  id: string;
  emoji: string;
  label: string;
}

// 5 Preset Emoji Universal & Jelas
const EMOJI_LIST: EmojiOption[] = [
  { id: "fire", emoji: "🔥", label: "Fire" },
  { id: "awesome", emoji: "🚀", label: "Awesome" },
  { id: "clean", emoji: "🎨", label: "Clean UI" },
  { id: "insightful", emoji: "💡", label: "Insightful" },
  { id: "needswork", emoji: "🥱", label: "Needs Work" },
];

const formatCount = (count: number) => {
  if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
  return count;
};

interface ProjectReactionProps {
  projectId: string;
  initialReactions?: Record<string, number>;
  compact?: boolean;
}

export const ProjectReaction = ({ projectId, initialReactions = {}, compact = false }: ProjectReactionProps) => {
  const [counts, setCounts] = useState<Record<string, number>>(initialReactions);
  const [userSelected, setUserSelected] = useState<string | null>(null);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  // Sync state dari LocalStorage
  useEffect(() => {
    const savedSelected = localStorage.getItem(`reaction_user_${projectId}`);
    const savedCounts = localStorage.getItem(`reaction_counts_${projectId}`);

    if (savedSelected) setUserSelected(savedSelected);
    if (savedCounts) {
      try {
        setCounts(JSON.parse(savedCounts));
      } catch (e) {
        setCounts(initialReactions);
      }
    } else {
      setCounts(initialReactions);
    }
  }, [projectId]);

  const handleToggleReaction = (emojiId: string) => {
    let updatedCounts = { ...counts };
    let newSelection: string | null = null;

    if (userSelected === emojiId) {
      updatedCounts[emojiId] = Math.max(0, (updatedCounts[emojiId] || 1) - 1);
      newSelection = null;
    } else {
      if (userSelected) {
        updatedCounts[userSelected] = Math.max(0, (updatedCounts[userSelected] || 1) - 1);
      }
      updatedCounts[emojiId] = (updatedCounts[emojiId] || 0) + 1;
      newSelection = emojiId;
    }

    setCounts(updatedCounts);
    setUserSelected(newSelection);
    setIsPickerOpen(false);

    if (newSelection) {
      localStorage.setItem(`reaction_user_${projectId}`, newSelection);
    } else {
      localStorage.removeItem(`reaction_user_${projectId}`);
    }
    localStorage.setItem(`reaction_counts_${projectId}`, JSON.stringify(updatedCounts));
  };

  // Filter emoji yang aktif (count > 0 atau sedang dipilih user) & urutkan terbanyak
  const activeEmojis = EMOJI_LIST.filter((item) => (counts[item.id] || 0) > 0 || userSelected === item.id).sort((a, b) => (counts[b.id] || 0) - (counts[a.id] || 0));

  return (
    <div className="relative flex items-center gap-1.5 flex-wrap z-20">
      {/* 1. PILL BADGES EMOJI AKTIF */}
      {activeEmojis.map((item) => {
        const isSelected = userSelected === item.id;
        const count = counts[item.id] || 0;

        return (
          <div key={item.id} className="relative">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleToggleReaction(item.id)}
              onMouseEnter={() => setActiveTooltip(item.id)}
              onMouseLeave={() => setActiveTooltip(null)}
              className={`
                flex items-center gap-1.5 rounded-full font-semibold border transition-all duration-200 backdrop-blur-md
                ${compact ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-xs"}
                ${isSelected ? "border-accent bg-accent/25 text-white shadow-[0_0_12px_rgba(var(--accent-rgb),0.3)]" : "border-white/10 bg-white/5 text-neutral-300 hover:border-white/30 hover:bg-white/10"}
              `}
            >
              <span className={compact ? "text-xs" : "text-sm"}>{item.emoji}</span>
              <span className="font-mono text-slate-200">{formatCount(count)}</span>
            </motion.button>

            {/* Tooltip Keterangan Emoji */}
            <AnimatePresence>
              {activeTooltip === item.id && (
                <motion.div
                  initial={{ opacity: 0, y: 4, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.9 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 z-30 pointer-events-none whitespace-nowrap rounded-md border border-white/10 bg-slate-950/90 px-2 py-0.5 text-[10px] text-neutral-200 shadow-md backdrop-blur-md"
                >
                  {item.label}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}

      {/* 2. TOMBOL ADD REACTION (+😊) */}
      <div className="relative">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsPickerOpen(!isPickerOpen)}
          className={`
            flex items-center gap-1 rounded-full border border-white/10 bg-white/5 text-neutral-300
            hover:border-white/30 hover:bg-white/10 hover:text-white transition-all backdrop-blur-md
            ${compact ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-xs"}
            ${isPickerOpen ? "border-accent text-accent" : ""}
          `}
          title="Add Reaction"
        >
          <Plus size={compact ? 12 : 14} />
          <span className={compact ? "text-xs" : "text-sm"}>😊</span>
        </motion.button>

        {/* 3. POP-UP EMOJI PICKER */}
        <AnimatePresence>
          {isPickerOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setIsPickerOpen(false)} />

              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 8 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="
                  absolute bottom-full left-0 mb-2 z-50
                  flex items-center gap-1 p-1.5
                  rounded-full border border-white/20
                  bg-slate-950/90 shadow-2xl backdrop-blur-2xl
                "
              >
                {EMOJI_LIST.map((item) => (
                  <div key={item.id} className="relative group">
                    <button
                      onClick={() => handleToggleReaction(item.id)}
                      className={`
                        p-1.5 sm:p-2 rounded-full text-base sm:text-lg leading-none transition-transform hover:scale-125
                        ${userSelected === item.id ? "bg-white/20" : "hover:bg-white/10"}
                      `}
                    >
                      {item.emoji}
                    </button>
                    {/* Tooltip mini pas picker kebuka */}
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block whitespace-nowrap rounded border border-white/10 bg-slate-900 px-1.5 py-0.5 text-[9px] text-white shadow-md">
                      {item.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
