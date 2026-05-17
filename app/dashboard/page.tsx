import { Radio, Video } from "lucide-react";
import { AppShell } from "@/components/dashboard/app-shell";
import { MetricCard } from "@/components/dashboard/metric-card";
import { PageHeader } from "@/components/dashboard/page-header";
import { Card } from "@/components/ui/card";
import { Badge, SeverityBadge } from "@/components/ui/badge";
import { HourlyBarChart, IncidentsAreaChart, ThreatPieChart } from "@/components/charts/charts";
import { alerts, cameras, incidents, metrics } from "@/lib/demo-data";

export default function DashboardPage() {
  return (
    <AppShell>
      <PageHeader title="AI Surveillance Command Center" description="Unified live monitoring, detection telemetry, safety compliance, and incident response for MSME facilities." />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {metrics.map((metric) => <MetricCard key={metric.label} metric={metric} />)}
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <Card>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Incidents over time</h2>
            <Badge tone="cyan">Auto-refresh</Badge>
          </div>
          <IncidentsAreaChart />
        </Card>
        <Card>
          <h2 className="mb-4 text-lg font-semibold">Threat distribution</h2>
          <ThreatPieChart />
        </Card>
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_1fr]">
        <Card>
          <h2 className="mb-4 text-lg font-semibold">Live camera streams</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {cameras.map(([id, zone, status, health, state]) => (
              <div key={id} className="rounded-lg border border-slate-700 bg-slate-950/70 p-4">
                <div className="mb-12 flex items-center justify-between">
                  <Video className="text-cyan-300" size={18} />
                  <Badge tone={state === "Alert" ? "red" : "green"}>{state}</Badge>
                </div>
                <p className="font-semibold">{id} · {zone}</p>
                <p className="mt-1 text-sm text-slate-400">{status} · AI health {health}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <h2 className="mb-4 text-lg font-semibold">Hourly detection load</h2>
          <HourlyBarChart />
        </Card>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="mb-4 text-lg font-semibold">Active alerts</h2>
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div key={alert.id} className="flex items-start gap-3 rounded-lg border border-slate-700 bg-slate-950/70 p-4">
                <Radio className="mt-1 text-cyan-300" size={18} />
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3"><p className="font-semibold">{alert.title}</p><SeverityBadge severity={alert.severity} /></div>
                  <p className="mt-1 text-sm text-slate-400">{alert.source} · {alert.message}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <h2 className="mb-4 text-lg font-semibold">Recent incidents</h2>
          <div className="space-y-3">
            {incidents.map((incident) => (
              <div key={incident.id} className="rounded-lg border border-slate-700 bg-slate-950/70 p-4">
                <div className="flex items-center justify-between gap-3"><p className="font-semibold">{incident.title}</p><SeverityBadge severity={incident.severity} /></div>
                <p className="mt-1 text-sm text-slate-400">{incident.zone} · {incident.time} · {incident.status}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
