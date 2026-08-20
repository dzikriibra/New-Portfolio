"use client";

import React from "react";

export const SkillHeader = () => {
  return (
    <div className="mx-auto max-w-5xl text-center">
      <h2 className="font-headline text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
        The <span className="text-accent">Technical Foundation</span> Behind My Work
      </h2>

      <p className="mx-auto mt-4 max-w-4xl text-base leading-relaxed text-description-text md:text-md mb-6">
        The technologies, principles, and working practice <span className="text-accent">that support how I design, build, and deliver</span> digital products.
      </p>
    </div>
  );
};
