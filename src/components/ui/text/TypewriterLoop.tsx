"use client";

import { useEffect, useState } from "react";

export const TypewriterLoop = ({ words, speed = 100, deleteSpeed = 50, delay = 1500, className }: { words: string[]; speed?: number; deleteSpeed?: number; delay?: number; className?: string }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // typing
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, speed);
      } else {
        // pause sebelum delete
        timeout = setTimeout(() => setIsDeleting(true), delay);
      }
    } else {
      // deleting
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <span className={className}>
      {displayText}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  );
};
