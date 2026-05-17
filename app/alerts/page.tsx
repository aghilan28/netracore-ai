import { CheckCircle2, Eye, Radio } from "lucide-react";
import { AppShell } from "@/components/dashboard/app-shell";
import { PageHeader } from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SeverityBadge } from "@/components/ui/badge";
import { alerts } from "@/lib/demo-data";

export default function AlertsPage() {
  return (
    <AppShell>
      <PageHeader title="Alert Center" description="Real-time styled safety and security alerts with operator triage actions and severity-aware escalation." />
      <div className="grid gap-4">
        {alerts.concat(alerts).map((alert, index) => (
          <Card key={`${alert.id}-${index}`} className={alert.severity === "Critical" ? "animate-pulse border-rose-300/40 shadow-rose-500/10" : ""}>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex gap-4">
                <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-200"><Radio size={18} /></span>
                <div>
                  <div className="flex flex-wrap items-center gap-3"><h2 className="text-lg font-semibold">{alert.title}</h2><SeverityBadge severity={alert.severity} /></div>
                  <p className="mt-1 text-sm text-slate-400">{alert.source} · {alert.time}</p>
                  <p className="mt-2 text-slate-300">{alert.message}</p>
                </div>
              </div>
              <div className="flex gap-2"><Button variant="secondary"><Eye size={18} /> Inspect</Button><Button><CheckCircle2 size={18} /> Acknowledge</Button></div>
            </div>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
