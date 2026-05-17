import { Download, Search } from "lucide-react";
import { AppShell } from "@/components/dashboard/app-shell";
import { PageHeader } from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SeverityBadge } from "@/components/ui/badge";
import { incidents } from "@/lib/demo-data";

export default function ReportsPage() {
  return (
    <AppShell>
      <PageHeader title="AI Incident Reports" description="Generated incident narratives, searchable history, severity tags, and PDF-ready operational summaries." />
      <Card className="mb-6 flex flex-col gap-3 md:flex-row">
        <div className="relative flex-1"><Search className="absolute left-3 top-3 text-slate-500" size={18} /><Input className="pl-10" placeholder="Search report summaries, zones, and IDs" /></div>
        <Button><Download size={18} /> Download PDF report</Button>
      </Card>
      <div className="grid gap-4">
        {incidents.map((incident) => (
          <Card key={incident.id}>
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
              <div>
                <p className="text-sm text-slate-400">{incident.id} · {incident.zone} · {incident.time}</p>
                <h2 className="mt-2 text-xl font-semibold">{incident.title}</h2>
              </div>
              <SeverityBadge severity={incident.severity} />
            </div>
            <p className="mt-4 leading-7 text-slate-300">{incident.summary}</p>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
