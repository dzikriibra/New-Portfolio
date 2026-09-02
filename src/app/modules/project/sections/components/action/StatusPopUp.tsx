"use client";

import React, { memo } from "react";
import { ExternalLink, ShieldCheck, Wrench, Lock, Clock3 } from "lucide-react";

interface StatusPopupProps {
  data: any;
}

export const StatusPopup = memo(({ data }: StatusPopupProps) => {
  if (!data) return null;

  // VERIFIED CERTIFICATE
  if (data.status === "verified") {
    return (
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#050505]">
        <img src={data.image} alt="Certificate" className="w-full h-auto select-none pointer-events-none" onContextMenu={(e) => e.preventDefault()} />

        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
          <p className="text-5xl font-black uppercase border-[10px] border-white p-5 -rotate-12">Verified</p>
        </div>

        {/* Optimized Scan Line (CSS Keyframe / Lightweight Translate) */}
        <div className="absolute left-0 right-0 top-0 h-[2px] bg-cyan-400/60 shadow-[0_0_12px_rgba(6,182,212,0.8)] animate-pulse" />
      </div>
    );
  }

  // LIVE PROJECT
  if (data.status === "live") {
    return (
      <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-8 text-center space-y-5">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400">
          <ShieldCheck size={28} />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-green-400">{data.title}</h3>
          <p className="text-sm text-neutral-300 leading-relaxed max-w-md mx-auto">{data.description}</p>
        </div>

        <a
          href={data.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2
            rounded-2xl bg-green-500 px-6 py-3
            text-sm font-bold text-white
            transition-all hover:bg-green-600 active:scale-95
          "
        >
          {data.buttonLabel}
          <ExternalLink size={16} />
        </a>
      </div>
    );
  }

  // MAINTENANCE
  if (data.status === "maintenance") {
    return (
      <div className="rounded-3xl border border-blue-500/20 bg-blue-500/10 p-8 text-center space-y-5">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
          <Wrench size={28} />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-blue-400">{data.title}</h3>
          <p className="text-sm text-neutral-300 leading-relaxed max-w-md mx-auto">{data.description}</p>
        </div>
      </div>
    );
  }

  // PRIVATE / NDA
  if (data.status === "private") {
    return (
      <div className="rounded-3xl border border-amber-500/20 bg-amber-500/10 p-8 text-center space-y-5">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
          <Lock size={28} />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-amber-400">{data.title}</h3>
          <p className="text-sm text-neutral-300 leading-relaxed max-w-md mx-auto">{data.description}</p>
        </div>
      </div>
    );
  }

  // PENDING CERTIFICATE
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center space-y-5">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-neutral-300">
        <Clock3 size={28} />
      </div>

      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-white">{data.title}</h3>
        <p className="text-sm text-neutral-400 leading-relaxed max-w-md mx-auto">{data.description}</p>
      </div>
    </div>
  );
});

StatusPopup.displayName = "StatusPopup";
