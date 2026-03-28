"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import Marquee from "@/components/ui/marquee/Marquee";
import { EncryptedText } from "@/components/ui/text/EncryptedText";

const CHARACTER = "/hero-ilustrator.png";

export default function HomeSection() {
  const heroMarqueeItems = ["FRONTEND DEVELOPER", "DESIGN EXPLORATION"];

  const APPEAR_DELAY = 1.2;

  return (
    <section id="home" className="relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-primary-bg pt-13 antialiased lg:pt-25">
      <div className="container relative z-10 mx-auto px-4 flex-1 flex items-start md:px-6">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-14">
          {/* Sisi Kiri: Teks & Action (Tetap sesuai kode lo) */}
          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="font-headline text-2xl md:text-3xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
              <EncryptedText text="Transforming" className="inline lg:block text-white" />
              <EncryptedText text=" Product Ideas into" className="text-white" />
              <EncryptedText text=" Clear and Structured Digital Solutions" className=" text-accent italic" />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: APPEAR_DELAY,
              }}
              className="mt-8 max-w-2xl font-body text-md text-description-text md:text-2xl text-center lg:text-left"
            >
              <span className="font-semibold text-accent">A Frontend Developer</span> who bridges client needs with technical reality — <span className="font-semibold text-accent">bringing clarity</span> to complex ideas while
              <span className="font-semibold text-accent"> supporting</span> structured execution.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: APPEAR_DELAY + 0.3 }} className="mt-10 flex flex-wrap items-center justify-center gap-5 lg:justify-start">
              <button className="group flex items-center gap-2 rounded-full bg-accent px-3 lg:px-6 py-2 lg:py-3 lg:font-semibold text-white transition-all hover:bg-accent/90 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                View My Works
                <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={20} />
              </button>

              <button className="flex items-center gap-2 rounded-full border border-card-bg bg-transparent px-6 py-2 lg:py-3 font-semibold text-white transition-all hover:border-accent hover:bg-card-bg/20">
                Let's Talk <MessageCircle size={20} />
              </button>
            </motion.div>
          </div>

          {/* Sisi Kanan: Ilustrasi Baru dengan Background Modern */}
          <div className="flex flex-1 items-center justify-center relative w-full lg:w-auto mt-10 lg:mt-0">
            {/* 1. BACKGROUND ABSTRAK MODERN (Melayang di belakang) */}
            <motion.div animate={{ x: [0, 15, 0], y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute z-0 w-[120%] h-[120%] lg:w-[130%] lg:h-[130%] opacity-20">
              {/* Bulatan & Bentuk Modern (Glassmorphism + Gradient) */}
              <div className="absolute top-0 right-10 w-40 h-40 rounded-full bg-accent blur-[60px]" />
              <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-purple-600 blur-[50px]" />
              <div className="absolute top-20 left-1/4 w-32 h-32 rotate-45 border-2 border-dashed border-white/5 opacity-30" />
            </motion.div>

            {/* 2. CONTAINER KARAKTER (Dengan Glow Efek) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: APPEAR_DELAY + 0.1 }}
              className="relative z-10 h-[280px] w-[280px] md:h-[350px] md:w-[350px] lg:h-[450px] lg:w-[450px]"
            >
              {/* Bayangan halus di bawah laptop agar menyatu dengan background */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-accent/20 rounded-full blur-[30px]" />

              {/* Gambar Karakter */}
              <div className="relative h-full w-full overflow-hidden flex items-center justify-center">
                <Image
                  src={CHARACTER}
                  alt="Character working on a laptop"
                  fill
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 350px, 450px"
                  className="object-contain" // Biar fotonya ga kepotong
                  priority // Penting buat SEO karena ini Hero image
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee ditaruh di paling bawah section Hero */}
      <div className="w-full mt-auto">
        <Marquee items={heroMarqueeItems} />
      </div>
    </section>
  );
}
