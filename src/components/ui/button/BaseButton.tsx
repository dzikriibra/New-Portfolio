"use client";
import React from "react";
import clsx from "clsx";

interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  as?: "button" | "a";
  href?: string;
  children: React.ReactNode;
}

export const BaseButton = ({ variant = "primary", size = "md", className, as = "button", href, children, ...props }: BaseButtonProps) => {
  const classes = clsx(
    "rounded-full font-semibold transition-all flex items-center justify-center gap-2",

    // SIZE
    size === "sm" && "px-4 py-1.5 text-xs",
    size === "md" && "px-6 py-2 text-sm",
    size === "lg" && "px-8 py-3 text-base",

    // VARIANT
    variant === "primary" && "bg-accent text-white hover:bg-accent/80",
    variant === "outline" && "border border-white/10 text-white hover:border-accent hover:text-accent",
    variant === "ghost" && "text-white/70 hover:text-accent",

    className,
  );

  if (as === "a") {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
