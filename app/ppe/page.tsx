import { HardHat, ShieldCheck, Shirt, UserCheck } from "lucide-react";
import { AppShell } from "@/components/dashboard/app-shell";
import { PageHeader } from "@/components/dashboard/page-header";
import { Card } from "@/components/ui/card";
import { ComplianceChart, IncidentsAreaChart } from "@/components/charts/charts";

export default function PPEPage() {
  const cards = [
    ["Helmet compliance", "84%", HardHat],
    ["Vest compliance", "78%", Shirt],
    ["Violation percentage", "18.6%", ShieldCheck],
    ["Workers detected", "412", UserCheck],
  ] as const;
  return (
    <AppShell>
      <PageHeader title="PPE Compliance Monitoring" description="Computer vision driven worker safety scoring for helmets, reflective vests, restricted areas, and shift-level reporting." />
      <div className="grid gap-4 md:grid-cols-4">
        {cards.map(([label, value, Icon]) => (
          <Card key={label}><Icon className="text-cyan-300" /><p className="mt-5 text-3xl font-bold">{value}</p><p className="mt-1 text-sm text-slate-400">{label}</p></Card>
        ))}
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <Card><h2 className="mb-4 text-lg font-semibold">Safety score meter</h2><div className="grid aspect-square place-items-center rounded-full border-[18px] border-cyan-300/70 text-5xl font-bold">91%</div></Card>
        <Card><h2 className="mb-4 text-lg font-semibold">Violation timeline</h2><IncidentsAreaChart /></Card>
        <Card className="xl:col-span-2"><h2 className="mb-4 text-lg font-semibold">Compliance by policy</h2><ComplianceChart /></Card>
      </div>
    </AppShell>
  );
}
