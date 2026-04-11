import React from "react";
import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";

export const ActionMode = ({ item }: { item: any }) => {
  if (item.type !== "project") {
    // Kondisi kalau fotonya ADA
    if (item.credentialSrc && item.credentialSrc.length > 0) {
      return (
        <div className="relative group overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-[#050505]">
          {/* Foto Sertifikat */}
          <img src={item.credentialSrc[0]} className="w-full h-auto select-none pointer-events-none filter brightness-90" onContextMenu={(e) => e.preventDefault()} />

          {/* Watermark Protection */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none select-none">
            <p className="text-4xl md:text-6xl font-black border-8 p-4 border-white -rotate-12 uppercase">Verified Document</p>
          </div>

          {/* Laser Scan Effect*/}
          <motion.div animate={{ top: ["0%", "100%", "0%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute left-0 right-0 h-[1px] bg-cyan-400/30 z-10 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
        </div>
      );
    }

    // Kondisi KOSONG
    return (
      <div className="w-full h-64 p-6 flex flex-col items-start justify-start font-mono text-left bg-[#0a0a0a] rounded-xl border border-white/10 relative overflow-hidden">
        <div className="flex gap-1.5 mb-4">
          <div className="w-2 h-2 rounded-full bg-red-500/30" />
          <div className="w-2 h-2 rounded-full bg-amber-500/30" />
          <div className="w-2 h-2 rounded-full bg-green-500/30" />
        </div>

        <div className="space-y-3 z-10">
          <div className="flex items-center gap-2 text-cyan-400 text-xs">
            <p className="font-bold tracking-wider underline underline-offset-4">SYSTEM_CHECK: CERTIFICATE_VERIFICATION</p>
          </div>

          <div className="text-white/40 text-[11px] leading-relaxed border-l-2 border-white/5 pl-4 space-y-2">
            <p className="text-white/60 font-bold">[TARGET]: {item.title}</p>
            <p>
              [STATUS]: <span className="text-amber-500/80 italic">Awaiting_Digital_Archive</span>
            </p>
            <p>[INFO]: Dokumen sedang dalam proses validasi sistem.</p>
            <p>[NOTE]: Silakan gunakan tombol "Verify" untuk tautan resmi.</p>
          </div>

          <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }} className="w-2 h-4 bg-cyan-400/40 mt-2" />
        </div>

        <Code2 className="absolute bottom-4 right-6 text-white/[0.03] w-24 h-24 -rotate-12" />
      </div>
    );
  }

  // Logic Status Project
  if (item.link && item.link !== "#" && item.link !== "") {
    return (
      <div className="w-full space-y-6">
        <div className="rounded-lg bg-green-500/10 p-8 border border-green-500/20 text-center">
          <h4 className="font-bold text-xl text-green-400 mb-2">Project is Live!</h4>
          <p className="text-neutral-400 mb-6 text-sm">Kamu bisa melihat langsung hasil deploy dari proyek ini.</p>
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all active:scale-95">
            Kunjungi Website <ExternalLink size={18} className="ml-2" />
          </a>
        </div>
      </div>
    );
  }

  if (item.status === "maintenance") {
    return (
      <div className="rounded-lg bg-blue-500/20 p-6 text-blue-400 border border-blue-500/30 text-center">
        <h4 className="font-bold text-lg italic uppercase tracking-widest text-blue-300">Under Construction</h4>
        <p className="text-sm mt-2 opacity-80 leading-relaxed">Proyek publik ini sedang dalam tahap perbaikan. Tunggu kejutan barunya!</p>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-amber-500/20 p-6 text-amber-400 border border-amber-500/30 text-center">
      <h4 className="font-bold text-lg italic uppercase tracking-widest">Private System / NDA</h4>
      <p className="text-sm mt-2 opacity-80 leading-relaxed">Proyek bersifat internal. Akses publik dibatasi demi kerahasiaan data.</p>
    </div>
  );
};
