import { Severity } from "@/types";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "blue",
}: {
  children: React.ReactNode;
  tone?: "blue" | "cyan" | "green" | "amber" | "red" | "slate";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold",
        tone === "blue" && "border-blue-400/30 bg-blue-400/10 text-blue-200",
        tone === "cyan" && "border-cyan-300/30 bg-cyan-300/10 text-cyan-200",
        tone === "green" && "border-emerald-300/30 bg-emerald-300/10 text-emerald-200",
        tone === "amber" && "border-amber-300/30 bg-amber-300/10 text-amber-200",
        tone === "red" && "border-rose-300/30 bg-rose-300/10 text-rose-200",
        tone === "slate" && "border-slate-600 bg-slate-800 text-slate-300",
      )}
    >
      {children}
    </span>
  );
}

export function SeverityBadge({ severity }: { severity: Severity }) {
  return <Badge tone={severity === "Critical" ? "red" : severity === "Medium" ? "amber" : "cyan"}>{severity}</Badge>;
}
