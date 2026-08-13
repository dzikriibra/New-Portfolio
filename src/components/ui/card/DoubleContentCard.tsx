"use client";

import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

// 1. Container Utama (Glassmorphism Card)
export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`relative w-full rounded-2xl border border-white/10 bg-[#161b26]/60 backdrop-blur-md p-6 sm:p-8 md:p-10 shadow-2xl transition-all duration-300 hover:border-white/20 ${className}`}>
      {/* Wrapper Layout: Flex-col di Mobile -> Flex-row di Desktop (lg) */}
      <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8 w-full">{children}</div>
    </div>
  );
};

// 2. Sisi Kiri
export const CardLeft: React.FC<CardProps> = ({ children, className = "" }) => {
  return <div className={`w-full lg:w-1/2 flex-1 shrink-0 ${className}`}>{children}</div>;
};

// 3. Garis Pembatas (Divider)
export const CardDivider = () => {
  return (
    <div className="flex justify-center items-center self-stretch my-2 lg:my-0 shrink-0">
      {/* Garis Vertikal (Desktop) */}
      <div className="hidden lg:block w-[1.5px] bg-slate-700/60 h-full rounded-full" />
      {/* Garis Horizontal (Mobile) */}
      <div className="block lg:hidden w-full h-[1px] bg-slate-700/60" />
    </div>
  );
};

// 4. Sisi Kanan
export const CardRight: React.FC<CardProps> = ({ children, className = "" }) => {
  return <div className={`w-full lg:w-1/2 flex-1 shrink-0 ${className}`}>{children}</div>;
};
