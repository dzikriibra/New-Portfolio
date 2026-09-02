import React, { memo } from "react";

interface ProjectTagsProps {
  tags: string[];
}

export const ProjectTags = memo(({ tags }: ProjectTagsProps) => {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="
            rounded-full
            border border-white/20
            bg-black/10
            px-3 py-1
            text-xs
            text-white
          "
        >
          {tag}
        </span>
      ))}
    </div>
  );
});

ProjectTags.displayName = "ProjectTags";
