"use client";

import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { complianceTrend, hourlyAnalytics, incidentsOverTime, threatDistribution } from "@/lib/demo-data";

const colors = ["#22d3ee", "#3b82f6", "#f59e0b", "#ef4444"];

export function IncidentsAreaChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <AreaChart data={incidentsOverTime}>
        <defs>
          <linearGradient id="incidents" x1="0" x2="0" y1="0" y2="1">
            <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.45} />
            <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="#1e293b" strokeDasharray="3 3" />
        <XAxis dataKey="day" stroke="#64748b" />
        <YAxis stroke="#64748b" />
        <Tooltip contentStyle={{ background: "#020617", border: "1px solid #334155", borderRadius: 8 }} />
        <Area dataKey="incidents" stroke="#22d3ee" fill="url(#incidents)" strokeWidth={2} />
        <Area dataKey="ppe" stroke="#f59e0b" fillOpacity={0} strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function HourlyBarChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={hourlyAnalytics}>
        <CartesianGrid stroke="#1e293b" strokeDasharray="3 3" />
        <XAxis dataKey="hour" stroke="#64748b" />
        <YAxis stroke="#64748b" />
        <Tooltip contentStyle={{ background: "#020617", border: "1px solid #334155", borderRadius: 8 }} />
        <Bar dataKey="detections" fill="#3b82f6" radius={[6, 6, 0, 0]} />
        <Bar dataKey="alerts" fill="#22d3ee" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function ThreatPieChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <PieChart>
        <Pie data={threatDistribution} dataKey="value" innerRadius={56} outerRadius={92} paddingAngle={5}>
          {threatDistribution.map((entry, index) => (
            <Cell key={entry.name} fill={colors[index]} />
          ))}
        </Pie>
        <Tooltip contentStyle={{ background: "#020617", border: "1px solid #334155", borderRadius: 8 }} />
      </PieChart>
    </ResponsiveContainer>
  );
}

export function ComplianceChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={complianceTrend} layout="vertical">
        <CartesianGrid stroke="#1e293b" strokeDasharray="3 3" />
        <XAxis type="number" stroke="#64748b" />
        <YAxis dataKey="name" type="category" stroke="#64748b" />
        <Tooltip contentStyle={{ background: "#020617", border: "1px solid #334155", borderRadius: 8 }} />
        <Bar dataKey="compliant" stackId="a" fill="#10b981" radius={[6, 0, 0, 6]} />
        <Bar dataKey="violation" stackId="a" fill="#f59e0b" radius={[0, 6, 6, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
