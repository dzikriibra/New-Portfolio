"use client";
import React, { useEffect, useState } from "react";

export default function CursorSpotlight() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[15]"
      style={{
        background: `
          radial-gradient(
            circle 220px at ${position.x}px ${position.y}px,
            transparent 0%,
            rgba(0,0,0,0.15) 50%,
            rgba(0,0,0,0.90) 100%
          )
        `,
        transition: "background 0.05s linear",
      }}
    />
  );
}
