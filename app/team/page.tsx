import { MailPlus, ShieldCheck } from "lucide-react";
import { AppShell } from "@/components/dashboard/app-shell";
import { PageHeader } from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { team } from "@/lib/demo-data";

export default function TeamPage() {
  return (
    <AppShell>
      <PageHeader title="Team Management" description="Invite operators, assign role-based permissions, and keep surveillance workflows accountable." />
      <div className="mb-6 flex justify-end"><Button><MailPlus size={18} /> Invite member</Button></div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {team.map((member) => (
          <Card key={member.email}>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-300 to-blue-500 font-bold text-slate-950">{member.name.slice(0, 1)}</div>
            <h2 className="mt-4 font-semibold">{member.name}</h2>
            <p className="mt-1 text-sm text-slate-400">{member.email}</p>
            <div className="mt-5 flex items-center justify-between"><Badge tone={member.role === "Admin" ? "cyan" : "slate"}>{member.role}</Badge><span className="flex items-center gap-1 text-xs text-emerald-300"><ShieldCheck size={14} /> {member.status}</span></div>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
