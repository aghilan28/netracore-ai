import { AppShell } from "@/components/dashboard/app-shell";
import { PageHeader } from "@/components/dashboard/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const zones = [
  ["Receiving", "High", "left-[10%] top-[18%] h-28 w-36 bg-rose-400/50"],
  ["Storage", "Medium", "left-[42%] top-[28%] h-36 w-44 bg-amber-300/45"],
  ["Packing", "Low", "left-[68%] top-[54%] h-24 w-32 bg-cyan-300/45"],
  ["Dock 3", "Critical", "left-[24%] top-[62%] h-28 w-40 bg-rose-500/60"],
];

export default function HeatmapPage() {
  return (
    <AppShell>
      <PageHeader title="Heatmap Visualization" description="AI-generated activity density, risky dwell zones, and worker movement overlays for store and warehouse layouts." />
      <Card>
        <div className="relative min-h-[620px] overflow-hidden rounded-lg border border-slate-700 bg-slate-950 p-6">
          <div className="absolute inset-0 grid-bg opacity-80" />
          <div className="relative grid h-full grid-cols-4 gap-4">
            {Array.from({ length: 16 }).map((_, i) => <div key={i} className="min-h-28 rounded-lg border border-slate-800 bg-slate-900/60" />)}
          </div>
          {zones.map(([label, , className]) => (
            <div key={label} className={`absolute rounded-full blur-2xl ${className}`} />
          ))}
          {zones.map(([label, risk], index) => (
            <div key={`${label}-pin`} className="absolute rounded-lg border border-white/15 bg-slate-950/85 p-3 shadow-xl" style={{ left: `${14 + index * 20}%`, top: `${22 + (index % 2) * 36}%` }}>
              <p className="text-sm font-semibold">{label}</p>
              <Badge tone={risk === "Critical" || risk === "High" ? "red" : risk === "Medium" ? "amber" : "cyan"}>{risk} risk</Badge>
            </div>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}
