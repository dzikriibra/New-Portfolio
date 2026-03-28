"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const EncryptedText = ({ text, className, revealDuration = 1.5, scrambleSpeed = 40 }: { text: string; className?: string; revealDuration?: number; scrambleSpeed?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const chars = "!@#$%^&*()_+[]{};:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join(""),
      );

      if (iteration >= text.length) clearInterval(interval);
      iteration += text.length / (revealDuration * (1000 / scrambleSpeed));
    }, scrambleSpeed);

    return () => clearInterval(interval);
  }, [text, revealDuration, scrambleSpeed]);

  return <span className={cn("font-jakarta", className)}>{displayText}</span>;
};
