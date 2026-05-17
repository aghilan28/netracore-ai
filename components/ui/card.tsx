import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("glass rounded-lg p-5", className)} {...props} />;
}

export function SectionTitle({
  title,
  eyebrow,
}: {
  title: string;
  eyebrow?: string;
}) {
  return (
    <div>
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">{eyebrow}</p> : null}
      <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">{title}</h2>
    </div>
  );
}
