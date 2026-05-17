"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Bell,
  FileText,
  Flame,
  Gauge,
  HardHat,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  Shield,
  UploadCloud,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const nav = [
  ["Dashboard", "/dashboard", LayoutDashboard],
  ["Upload Center", "/upload", UploadCloud],
  ["Analytics", "/analytics", BarChart3],
  ["PPE Compliance", "/ppe", HardHat],
  ["Heatmap", "/heatmap", Flame],
  ["AI Reports", "/reports", FileText],
  ["Alerts", "/alerts", AlertTriangle],
  ["Team", "/team", Users],
  ["Activity Logs", "/logs", Activity],
  ["Settings", "/settings", Settings],
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#05070d] text-white">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-white/10 bg-slate-950/80 p-4 backdrop-blur-xl lg:block">
        <Link href="/" className="mb-8 flex items-center gap-3 px-2 py-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400 text-slate-950">
            <Shield size={22} />
          </span>
          <span>
            <span className="block text-lg font-bold">NetraCore AI</span>
            <span className="text-xs text-slate-400">Safety Intelligence OS</span>
          </span>
        </Link>
        <nav className="space-y-1">
          {nav.map(([label, href, Icon]) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-400 transition hover:bg-white/7 hover:text-white",
                pathname === href && "bg-cyan-400/12 text-cyan-100 ring-1 ring-cyan-300/20",
              )}
            >
              <Icon size={18} />
              {label}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-cyan-300/20 bg-cyan-300/8 p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-cyan-100">
            <Gauge size={16} /> AI Runtime Healthy
          </div>
          <p className="mt-2 text-xs leading-5 text-slate-400">YOLOv8 edge profile active across 48 camera streams.</p>
        </div>
      </aside>
      <main className="lg:pl-72">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-white/10 bg-slate-950/70 px-4 backdrop-blur-xl md:px-8">
          <div className="flex items-center gap-3">
            <button className="rounded-lg border border-slate-700 p-2 lg:hidden" aria-label="Open navigation">
              <Menu size={18} />
            </button>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">Command Center</p>
              <h1 className="text-sm font-semibold text-slate-200 md:text-base">FactoryOne · Bengaluru Cluster</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative rounded-lg border border-slate-700 p-2 text-slate-300">
              <Bell size={18} />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-rose-400" />
            </button>
            <div className="hidden items-center gap-3 rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 md:flex">
              <span className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-300 to-blue-500" />
              <span className="text-sm">Admin</span>
              <LogOut size={15} className="text-slate-500" />
            </div>
          </div>
        </header>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="p-4 md:p-8">
          {children}
        </motion.div>
      </main>
    </div>
  );
}
