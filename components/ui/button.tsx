"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "danger";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-300 disabled:pointer-events-none disabled:opacity-60",
        variant === "primary" &&
          "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20 hover:bg-cyan-300",
        variant === "secondary" &&
          "border border-slate-700 bg-slate-900/70 text-slate-100 hover:border-cyan-300/60 hover:bg-slate-800",
        variant === "ghost" && "text-slate-300 hover:bg-white/8 hover:text-white",
        variant === "danger" && "bg-rose-500 text-white shadow-lg shadow-rose-500/20 hover:bg-rose-400",
        className,
      )}
      {...props}
    />
  );
}
