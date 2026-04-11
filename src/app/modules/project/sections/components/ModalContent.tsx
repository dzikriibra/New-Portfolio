"use client";
import React, { useState } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight, Lightbulb, Target } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ActionMode } from "./sub-modal/ActionMode";
import { StepContent } from "./sub-modal/StepContent";

export const PortfolioModalContent = ({ item, mode }: { item: any; mode: "action" | "detail" }) => {
  const [activeStep, setActiveStep] = useState(0);

  if (!item) return null;

  const steps = [
    { label: "RESULT", icon: <CheckCircle2 size={18} />, content: item.description },
    { label: "CHALLENGE", icon: <Target size={18} />, content: item.challenge || "Menganalisis hambatan teknis dan kompleksitas kebutuhan sistem." },
    { label: "STRATEGY", icon: <Lightbulb size={18} />, content: item.strategy || "Implementasi arsitektur modular untuk skalabilitas jangka panjang." },
  ];

  if (mode === "action") return <ActionMode item={item} />;

  return (
    <div className="flex flex-col space-y-10 py-4 px-2">
      {/* 1. PROGRESS TRACK */}
      <div className="relative w-full pt-5 pb-5 shrink-0">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2" />
        <motion.div className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 -translate-y-1/2 origin-left z-10" animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }} />
        <div className="relative flex justify-between w-full z-20">
          {steps.map((step, index) => (
            <button key={index} onClick={() => setActiveStep(index)} className="relative flex flex-col items-center group">
              <motion.span
                animate={{ opacity: index === activeStep ? 1 : 0.4, y: index === activeStep ? -8 : 0, scale: index === activeStep ? 1 : 0.8 }}
                className={cn("absolute -top-6 font-bold text-[12px] tracking-[0.2em] transition-colors whitespace-nowrap", index === activeStep ? "text-cyan-400" : "text-neutral-500")}
              >
                {step.label}
              </motion.span>
              <div className={cn("w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 bg-primary-bg", index <= activeStep ? "border-cyan-500 text-cyan-400" : "border-white/10 text-neutral-600")}>
                {step.icon}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 2. CONTENT BOX  */}
      <div className="relative h-67.5 w-full bg-white/3 border border-white/10 rounded-3xl backdrop-blur-sm overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div key={activeStep} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="absolute inset-0 p-6 overflow-y-auto custom-scrollbar">
            <div className="flex flex-col items-center min-h-full text-center">
              <StepContent step={steps[activeStep]} index={activeStep} item={item} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3. NAVIGATION */}
      <div className="flex gap-4 shrink-0">
        {[
          { label: "PREVIOUS", icon: <ChevronLeft />, dir: -1, disabled: activeStep === 0 },
          { label: "NEXT", icon: <ChevronRight />, dir: 1, disabled: activeStep === steps.length - 1 },
        ].map((btn) => (
          <button
            key={btn.label}
            disabled={btn.disabled}
            onClick={() => setActiveStep((s) => s + btn.dir)}
            className={cn(
              "flex-1 flex items-center justify-center gap-3 py-3 rounded-2xl text-xs font-bold transition-all disabled:opacity-10",
              !btn.disabled ? "bg-white/10 border border-white/20 text-white hover:bg-white/20 shadow-lg shadow-cyan-500/5" : "bg-white/70 border border-white/10 text-white cursor-not-allowed",
            )}
          >
            {btn.dir === -1 && btn.icon} {btn.label} {btn.dir === 1 && btn.icon}
          </button>
        ))}
      </div>
    </div>
  );
};
