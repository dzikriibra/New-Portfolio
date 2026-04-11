import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ImageIcon, Terminal, Code2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export const StepContent = ({ step, index, item }: { step: any; index: number; item: any }) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const hasCredentials = item.documentationSrc && item.documentationSrc.length > 0;
  const photos = hasCredentials ? item.documentationSrc : [];

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  if (index === 0) {
    return (
      <div className="space-y-6 w-full">
        {/* --- MAIN CONTENT BOX --- */}
        <div className="group relative h-55 w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shrink-0 bg-[#050505] flex items-center justify-center">
          {/* SOLUSI 1: BLUEPRINT GRID  */}
          <div
            className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />

          {/* SOLUSI 2: AMBIENT GLOW  */}
          <motion.div animate={{ opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute w-1/2 h-1/2 bg-cyan-500/20 blur-[100px] rounded-full z-0" />

          {hasCredentials ? (
            <>
              <AnimatePresence mode="wait">
                <motion.div key={currentPhoto} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="relative z-10 h-full w-full flex items-center justify-center ">
                  {/* FOTO UTAMA  */}
                  <img src={photos[currentPhoto]} alt="Proof" className="max-h-full max-w-full object-contain shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/5 relative z-10 p-1" />

                  {/* SOLUSI 3: LASER SCAN LINE */}
                  <motion.div
                    animate={{ top: ["5%", "95%", "5%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-20 opacity-60 shadow-[0_0_15px_rgba(6,182,212,1)] pointer-events-none"
                  />

                  {/* Efek Flicker/Scanline Tipis */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] z-20 pointer-events-none bg-[length:100%_2px,3px_100%]" />
                </motion.div>
              </AnimatePresence>

              {/* NAVIGASI & INDICATOR */}
              {photos.length > 1 && (
                <>
                  <button onClick={prevPhoto} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-all z-30 border border-white/10 backdrop-blur-md">
                    <ChevronLeft size={18} />
                  </button>
                  <button onClick={nextPhoto} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-all z-30 border border-white/10 backdrop-blur-md">
                    <ChevronRight size={18} />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
                    {photos.map((_: any, i: any) => (
                      <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === currentPhoto ? "w-4 bg-cyan-400" : "w-1.5 bg-white/20"}`} />
                    ))}
                  </div>
                </>
              )}

              {/* Counter ala Dashboard */}
              <div className="absolute top-4 right-4 flex items-center gap-2 text-[10px] font-mono text-cyan-400/80 bg-cyan-950/20 px-2 py-1 rounded-xl border border-cyan-500/20 backdrop-blur-md z-30">
                <ImageIcon size={12} className="animate-pulse" />
                <span>
                  {currentPhoto + 1} / {photos.length}
                </span>
              </div>
            </>
          ) : (
            <div className="w-full h-full p-6 flex flex-col items-start justify-start font-mono text-left bg-[#0a0a0a]">
              <div className="flex gap-1.5 mb-3 md:mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-cyan-400/80 text-[10px] md:text-xs break-all">
                  <Terminal size={14} />
                  <span>dzikri@portfolio:~$ fetch --status "{item.title}"</span>
                </div>
                <p className="text-white/40 text-[9px] md:text-[11px] leading-relaxed">
                  [SYSTEM] Initializing credential verification... <br />
                  [INFO] Content is under development. <br />
                  [STATUS] <span className="text-amber-500/80">PENDING_DOCUMENTATION</span> <br />
                  [ACTION] Check back later for official proof.
                </p>
                <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }} className="w-2 h-4 bg-cyan-400/50 mt-2" />
              </div>
              <Code2 className="absolute bottom-4 right-8 text-white/5 w-24 h-24 -rotate-20" />
            </div>
          )}
        </div>

        {/* CONTENT DESCRIPTION */}
        <div className="px-4">
          <p className="text-sm text-neutral-300 leading-relaxed max-w-md mx-auto text-center font-body italic">"{step.content}"</p>
        </div>
      </div>
    );
  }

  // --- INDEX 1 & 2 (CHALLENGE / STRATEGY) ---
  return (
    <div className="space-y-5 max-w-md my-auto py-8 px-4 flex flex-col items-center text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-14 h-14 rounded-3xl bg-cyan-500/5 flex items-center justify-center border border-cyan-500/20 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.1)] shrink-0"
      >
        {step.icon}
      </motion.div>
      <div className="space-y-2">
        <h3 className="text-white font-bold tracking-[0.2em] uppercase text-[10px] opacity-60">Phase: {step.label}</h3>
        <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-body">{step.content}</p>
      </div>
    </div>
  );
};
