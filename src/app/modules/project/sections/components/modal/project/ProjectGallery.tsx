"use client";

import React, { useState, useCallback, useEffect, memo, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

interface ProjectGalleryProps {
  images?: string[];
  title: string;
}

export const ProjectGallery = memo(({ images, title }: ProjectGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Ref buat gesture swipe di mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const hasMultipleImages = images && images.length > 1;

  const nextSlide = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (!images) return;
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    },
    [images],
  );

  const prevSlide = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (!images) return;
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    },
    [images],
  );

  // Handler Swipe Gesture
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40; // minimal geser 40px baru dianggap swipe

    if (distance > minSwipeDistance) {
      nextSlide(); // Swipe Kiri -> Slide Berikutnya
    } else if (distance < -minSwipeDistance) {
      prevSlide(); // Swipe Kanan -> Slide Sebelumnya
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Keyboard Shortcuts (ESC & Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (isLightboxOpen) {
        if (e.key === "ArrowRight") nextSlide();
        if (e.key === "ArrowLeft") prevSlide();
      }
    };

    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen, nextSlide, prevSlide]);

  if (!images || images.length === 0) {
    return <div className="flex aspect-video items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02] text-center text-sm text-white/40">Documentation preview is unavailable.</div>;
  }

  const currentImage = images[currentIndex];

  return (
    <>
      <div className="space-y-3">
        {/* FRAME UTAMA (SLIDER) */}
        <div
          onClick={() => setIsLightboxOpen(true)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="group relative aspect-video w-full cursor-zoom-in overflow-hidden rounded-2xl border border-white/10 bg-black/60 transform-gpu select-none"
        >
          {/* Background Blur */}
          <Image key={`bg-${currentIndex}`} src={currentImage} alt="" fill aria-hidden="true" quality={10} className="object-cover blur-2xl opacity-40 scale-110 pointer-events-none" />

          {/* Main Image */}
          <div className="relative h-full w-full p-2">
            <Image
              key={`main-${currentIndex}`}
              src={currentImage}
              alt={`${title} documentation ${currentIndex + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
              priority={currentIndex === 0}
              className="object-contain transition-all duration-300 drop-shadow-md"
            />
          </div>

          {/* INDICATOR ZOOM (Responsif Mobile/Desktop) */}
          <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[10px] sm:text-[11px] font-medium text-white/80 backdrop-blur-md z-10 pointer-events-none">
            <Maximize2 size={11} />
            <span className="hidden sm:inline">Click to zoom</span>
            <span className="sm:hidden">Tap to zoom</span>
          </div>

          {/* TOMBOL NAVIGASI DESKTOP ONLY (Sembunyi di mobile biar gak nutupin gambar) */}
          {hasMultipleImages && (
            <>
              <button
                onClick={prevSlide}
                type="button"
                className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/50 p-2 text-white backdrop-blur-md transition-colors hover:border-accent hover:text-accent active:scale-95 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={nextSlide}
                type="button"
                className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/50 p-2 text-white backdrop-blur-md transition-colors hover:border-accent hover:text-accent active:scale-95 z-10"
                aria-label="Next image"
              >
                <ChevronRight size={18} />
              </button>

              <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 rounded-full border border-white/10 bg-black/60 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-[11px] font-medium text-white/80 backdrop-blur-md z-10">
                {currentIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>

        {/* CONTROLLER KHUSUS MOBILE (Muncul hanya jika gambar > 1) */}
        {hasMultipleImages && (
          <div className="flex items-center justify-between pt-1 sm:hidden">
            <button onClick={prevSlide} type="button" className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white active:bg-white/10">
              <ChevronLeft size={14} />
              <span>Prev</span>
            </button>

            {/* Dots Navigasi */}
            <div className="flex gap-1.5">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  type="button"
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-5 bg-accent" : "w-1.5 bg-white/20"}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button onClick={nextSlide} type="button" className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white active:bg-white/10">
              <span>Next</span>
              <ChevronRight size={14} />
            </button>
          </div>
        )}

        {/* THUMBNAIL DOTS DESKTOP ONLY */}
        {hasMultipleImages && (
          <div className="hidden sm:flex justify-center gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                type="button"
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-6 bg-accent" : "w-1.5 bg-white/20 hover:bg-white/40"}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* LIGHTBOX OVERLAY (FULLSCREEN ZOOM) */}
      {isLightboxOpen && (
        <div
          onClick={() => setIsLightboxOpen(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 p-2 sm:p-4 backdrop-blur-lg animate-in fade-in duration-200 select-none"
        >
          {/* Tombol Close Mobile-Friendly (Hitbox Luas) */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            type="button"
            className="absolute top-4 right-4 rounded-full border border-white/10 bg-white/10 p-3 text-white backdrop-blur-md active:scale-95 z-50 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close zoom preview"
          >
            <X size={20} />
          </button>

          {/* Area Gambar Fullscreen */}
          <div onClick={(e) => e.stopPropagation()} className="relative h-full w-full max-w-6xl max-h-[80vh] sm:max-h-[85vh] flex items-center justify-center">
            <Image src={currentImage} alt={`${title} zoomed documentation ${currentIndex + 1}`} fill unoptimized className="object-contain drop-shadow-2xl" />
          </div>

          {/* Counter di Mobile Fullscreen */}
          {hasMultipleImages && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/70 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-md z-50">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </>
  );
});

ProjectGallery.displayName = "ProjectGallery";
