"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Play, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, SectionTitle } from "@/components/ui/card";
import { IncidentsAreaChart } from "@/components/charts/charts";

const features = ["Suspicious activity detection", "PPE compliance intelligence", "AI incident summaries", "Heatmaps and risk zones", "Operator-ready alerts", "MSME-friendly deployment"];

export default function LandingPage() {
  return (
    <main className="grid-bg min-h-screen overflow-hidden">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
        <Link href="/" className="flex items-center gap-3 font-bold">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400 text-slate-950"><Shield size={22} /></span>
          NetraCore AI
        </Link>
        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <Link href="/login">Login</Link>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 pt-14 lg:grid-cols-[1fr_0.92fr] lg:pt-24">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100">
            <Sparkles size={16} /> AI Smart Surveillance for MSMEs
          </div>
          <h1 className="text-balance text-5xl font-bold tracking-tight text-white md:text-7xl">
            AI-Powered Surveillance Intelligence for Modern MSMEs
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Transform ordinary CCTV systems into intelligent safety and threat detection infrastructure using computer vision and real-time analytics.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/dashboard"><Button>Start Monitoring <ArrowRight size={18} /></Button></Link>
            <Link href="/upload"><Button variant="secondary"><Play size={18} /> Watch Demo</Button></Link>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
            {["96.4% accuracy", "48 cameras", "8.4k detections"].map((stat) => (
              <div key={stat} className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-slate-300">{stat}</div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 }} className="relative">
          <Card className="p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">Live AI Console</p>
                <h2 className="mt-1 text-xl font-semibold">Factory floor risk graph</h2>
              </div>
              <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-200">Live</span>
            </div>
            <IncidentsAreaChart />
            <div className="grid gap-3 md:grid-cols-3">
              {["No helmet", "Restricted entry", "Object dwell"].map((item, index) => (
                <div key={item} className="rounded-lg border border-slate-700 bg-slate-950/70 p-3">
                  <p className="text-xs text-slate-400">Detection {index + 1}</p>
                  <p className="mt-1 font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-5 py-16">
        <SectionTitle eyebrow="Platform" title="Built for safety teams that need signal, not noise" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature} className="flex items-center gap-3">
              <CheckCircle2 className="text-cyan-300" size={20} />
              <span className="text-slate-200">{feature}</span>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-5 py-16 md:grid-cols-4">
        {["72% faster review", "31% fewer violations", "4 min mean response", "24/7 AI monitoring"].map((stat) => (
          <Card key={stat}><p className="text-2xl font-bold">{stat}</p><p className="mt-2 text-sm text-slate-400">Enterprise demo benchmark</p></Card>
        ))}
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-5 py-16">
        <SectionTitle eyebrow="Pricing" title="MSME-ready plans that scale by camera count" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {["Starter", "Growth", "Command"].map((plan, index) => (
            <Card key={plan} className={index === 1 ? "border-cyan-300/40" : ""}>
              <h3 className="text-xl font-semibold">{plan}</h3>
              <p className="mt-4 text-3xl font-bold">₹{[7999, 19999, 49999][index]}<span className="text-sm text-slate-400">/mo</span></p>
              <p className="mt-3 text-sm text-slate-400">{[8, 32, 120][index]} camera streams with AI alerts, reports, and analytics.</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-5 py-16">
        <SectionTitle eyebrow="FAQ" title="Demo-friendly, deployable, and realistic" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {["Does it need new cameras?", "Can it run with mock AI?", "Is it deployable?", "Does it support PPE?"].map((q) => (
            <Card key={q}><h3 className="font-semibold">{q}</h3><p className="mt-2 text-sm text-slate-400">Yes. The MVP is designed to ingest ordinary CCTV media and use a reliable demo path when heavy inference is unavailable.</p></Card>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500">
        NetraCore AI - Smart surveillance and safety intelligence for MSMEs.
      </footer>
    </main>
  );
}
