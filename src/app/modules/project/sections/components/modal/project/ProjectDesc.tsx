import React, { memo } from "react";

interface ProjectDescriptionProps {
  description: string;
}

export const ProjectDescription = memo(({ description }: ProjectDescriptionProps) => {
  return (
    <div
      className="
        rounded-2xl
        border border-white/10
        bg-white/[0.03]
        p-5
      "
    >
      <h3 className="mb-3 text-lg font-semibold text-white">Overview</h3>

      <p
        className="
          text-description-text
          leading-relaxed
        "
      >
        {description}
      </p>
    </div>
  );
});

ProjectDescription.displayName = "ProjectDescription";
