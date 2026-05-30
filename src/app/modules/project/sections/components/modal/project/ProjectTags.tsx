"use client";

interface ProjectTagsProps {
  tags: string[];
}

export const ProjectTags = ({ tags }: ProjectTagsProps) => {
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
};
