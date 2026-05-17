import { AppShell } from "@/components/dashboard/app-shell";
import { PageHeader } from "@/components/dashboard/page-header";
import { MetricCard } from "@/components/dashboard/metric-card";
import { Card } from "@/components/ui/card";
import { ComplianceChart, HourlyBarChart, IncidentsAreaChart, ThreatPieChart } from "@/components/charts/charts";
import { metrics } from "@/lib/demo-data";

export default function AnalyticsPage() {
  return (
    <AppShell>
      <PageHeader title="Incident Analytics" description="Trend intelligence for alerts, camera health, PPE exposure, and suspicious activity across monitored zones." />
      <div className="grid gap-4 md:grid-cols-3">{metrics.slice(1, 4).map((metric) => <MetricCard key={metric.label} metric={metric} />)}</div>
      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <Card><h2 className="mb-4 text-lg font-semibold">Incident trend</h2><IncidentsAreaChart /></Card>
        <Card><h2 className="mb-4 text-lg font-semibold">Hourly analytics</h2><HourlyBarChart /></Card>
        <Card><h2 className="mb-4 text-lg font-semibold">Threat mix</h2><ThreatPieChart /></Card>
        <Card><h2 className="mb-4 text-lg font-semibold">Compliance split</h2><ComplianceChart /></Card>
      </div>
    </AppShell>
  );
}
