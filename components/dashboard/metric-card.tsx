import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Metric } from "@/types";

const tones = {
  cyan: "from-cyan-300/20 text-cyan-200",
  blue: "from-blue-400/20 text-blue-200",
  green: "from-emerald-400/20 text-emerald-200",
  amber: "from-amber-400/20 text-amber-200",
  red: "from-rose-400/20 text-rose-200",
  violet: "from-violet-400/20 text-violet-200",
};

export function MetricCard({ metric }: { metric: Metric }) {
  return (
    <Card className={cn("relative overflow-hidden bg-gradient-to-br to-transparent", tones[metric.tone])}>
      <div className="flex items-start justify-between">
        <p className="text-sm text-slate-400">{metric.label}</p>
        <ArrowUpRight size={18} className="text-slate-500" />
      </div>
      <p className="mt-5 text-3xl font-bold tracking-tight text-white">{metric.value}</p>
      <p className="mt-2 text-xs font-medium">{metric.delta}</p>
    </Card>
  );
}
