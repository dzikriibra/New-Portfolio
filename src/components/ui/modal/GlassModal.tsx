"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface GlassModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;

  maxWidth?: "max-w-md" | "max-w-lg" | "max-w-xl" | "max-w-2xl" | "max-w-4xl" | "max-w-5xl" | "max-w-6xl" | "max-w-7xl";

  maxHeight?: string;
}

export const GlassModal = ({ isOpen, onClose, title, children, maxWidth = "max-w-2xl", maxHeight = "80vh" }: GlassModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className={`
              relative w-full
              ${maxWidth}
              overflow-hidden
              rounded-2xl
              border border-white/20
              bg-white/10
              p-6
              shadow-2xl
              backdrop-blur-xl
            `}
          >
            {/* Header */}
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-xl font-bold text-white">{title}</h3>

              <button
                onClick={onClose}
                className="
                  rounded-full p-1
                  text-white/50
                  transition-colors
                  hover:bg-white/10
                  hover:text-white
                "
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div
              className="overflow-y-auto pr-2 custom-scrollbar text-white"
              style={{
                maxHeight,
              }}
            >
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
