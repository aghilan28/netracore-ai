import { Bell, KeyRound, SlidersHorizontal, ToggleRight } from "lucide-react";
import { AppShell } from "@/components/dashboard/app-shell";
import { PageHeader } from "@/components/dashboard/page-header";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function SettingsPage() {
  return (
    <AppShell>
      <PageHeader title="Settings" description="Organization configuration, AI sensitivity, notifications, theme controls, and mock API setup for deployment demos." />
      <div className="grid gap-6 xl:grid-cols-2">
        <Card><h2 className="mb-4 flex items-center gap-2 text-lg font-semibold"><KeyRound className="text-cyan-300" /> Organization</h2><div className="space-y-3"><Input defaultValue="FactoryOne MSME Cluster" /><Input defaultValue="Bengaluru, Karnataka" /></div></Card>
        <Card><h2 className="mb-4 flex items-center gap-2 text-lg font-semibold"><SlidersHorizontal className="text-cyan-300" /> AI sensitivity</h2>{["PPE", "Loitering", "Object dwell"].map((label, i) => <label key={label} className="mb-4 block text-sm text-slate-300">{label}<input className="mt-2 w-full accent-cyan-300" type="range" defaultValue={85 - i * 10} /></label>)}</Card>
        <Card><h2 className="mb-4 flex items-center gap-2 text-lg font-semibold"><Bell className="text-cyan-300" /> Notifications</h2>{["Critical SMS", "Email reports", "Webhook alerts"].map((label) => <div key={label} className="mb-3 flex items-center justify-between rounded-lg border border-slate-700 p-3"><span>{label}</span><ToggleRight className="text-cyan-300" /></div>)}</Card>
        <Card><h2 className="mb-4 text-lg font-semibold">API configuration</h2><div className="space-y-3"><Input defaultValue="http://localhost:8000" /><Input defaultValue="demo-key-ncai-msme" /></div></Card>
      </div>
    </AppShell>
  );
}
