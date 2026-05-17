import { Download, Filter, Search } from "lucide-react";
import { AppShell } from "@/components/dashboard/app-shell";
import { PageHeader } from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { logs } from "@/lib/demo-data";

export default function LogsPage() {
  return (
    <AppShell>
      <PageHeader title="Activity Logs" description="Searchable detection event stream with confidence, severity, camera source, timestamps, and export controls." />
      <Card className="mb-6 flex flex-col gap-3 md:flex-row">
        <div className="relative flex-1"><Search className="absolute left-3 top-3 text-slate-500" size={18} /><Input className="pl-10" placeholder="Search logs" /></div>
        <Button variant="secondary"><Filter size={18} /> Filter</Button>
        <Button><Download size={18} /> Export</Button>
      </Card>
      <Card className="overflow-x-auto p-0">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="border-b border-slate-800 text-slate-400"><tr>{["Time", "Camera", "Detection", "Severity", "Confidence"].map((h) => <th key={h} className="p-4">{h}</th>)}</tr></thead>
          <tbody>
            {logs.map((row) => (
              <tr key={row.join("-")} className="border-b border-slate-800/80">
                {row.map((cell, index) => <td key={cell} className="p-4">{index === 3 ? <Badge tone={cell === "Critical" ? "red" : cell === "Medium" ? "amber" : "cyan"}>{cell}</Badge> : cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </AppShell>
  );
}
