export type Severity = "Critical" | "Medium" | "Low";

export interface Metric {
  label: string;
  value: string;
  delta: string;
  tone: "cyan" | "blue" | "green" | "amber" | "red" | "violet";
}

export interface Detection {
  label: string;
  confidence: number;
  timestamp: string;
  box?: [number, number, number, number];
}

export interface Incident {
  id: string;
  title: string;
  zone: string;
  time: string;
  severity: Severity;
  summary: string;
  status: "Open" | "Investigating" | "Resolved";
}

export interface Alert {
  id: string;
  title: string;
  source: string;
  severity: Severity;
  time: string;
  message: string;
}

export interface TeamMember {
  name: string;
  email: string;
  role: "Admin" | "Operator" | "Viewer";
  status: "Active" | "Invited";
}
