import { Alert, Incident, Metric, TeamMember } from "@/types";

export const metrics: Metric[] = [
  { label: "Active Cameras", value: "48", delta: "+6 online", tone: "cyan" },
  { label: "Threat Alerts", value: "12", delta: "-18% vs yesterday", tone: "red" },
  { label: "PPE Violations", value: "27", delta: "4 critical", tone: "amber" },
  { label: "AI Detections Today", value: "8,420", delta: "+22%", tone: "blue" },
  { label: "Safety Score", value: "91%", delta: "+7 pts", tone: "green" },
  { label: "Detection Accuracy", value: "96.4%", delta: "YOLOv8 pipeline", tone: "violet" },
];

export const incidentsOverTime = [
  { day: "Mon", incidents: 24, ppe: 18, threats: 5 },
  { day: "Tue", incidents: 18, ppe: 13, threats: 4 },
  { day: "Wed", incidents: 32, ppe: 22, threats: 8 },
  { day: "Thu", incidents: 21, ppe: 17, threats: 3 },
  { day: "Fri", incidents: 39, ppe: 28, threats: 9 },
  { day: "Sat", incidents: 17, ppe: 12, threats: 2 },
  { day: "Sun", incidents: 12, ppe: 8, threats: 1 },
];

export const hourlyAnalytics = Array.from({ length: 12 }, (_, index) => ({
  hour: `${index + 8}:00`,
  detections: 120 + Math.round(Math.sin(index / 1.7) * 55 + index * 18),
  alerts: 8 + Math.round(Math.cos(index / 1.5) * 4 + index / 2),
}));

export const complianceTrend = [
  { name: "Helmet", compliant: 84, violation: 16 },
  { name: "Vest", compliant: 78, violation: 22 },
  { name: "Restricted", compliant: 93, violation: 7 },
];

export const threatDistribution = [
  { name: "PPE", value: 42 },
  { name: "Loitering", value: 18 },
  { name: "Access", value: 24 },
  { name: "Object", value: 16 },
];

export const incidents: Incident[] = [
  {
    id: "INC-1048",
    title: "Unauthorized access near storage zone",
    zone: "Warehouse B",
    time: "14:38",
    severity: "Critical",
    status: "Investigating",
    summary:
      "Unauthorized access detected near storage zone between 14:32 and 14:38. Multiple PPE violations identified across the same camera stream.",
  },
  {
    id: "INC-1047",
    title: "Worker without helmet on loading dock",
    zone: "Dock 3",
    time: "13:12",
    severity: "Medium",
    status: "Open",
    summary:
      "AI detected two workers entering the loading dock without helmets. No vehicle proximity risk was detected.",
  },
  {
    id: "INC-1046",
    title: "Abandoned package detected",
    zone: "Retail Aisle 6",
    time: "11:54",
    severity: "Low",
    status: "Resolved",
    summary:
      "Object remained stationary for 9 minutes. Operator verified package belonged to store inventory.",
  },
];

export const alerts: Alert[] = [
  {
    id: "ALT-9001",
    title: "PPE violation",
    source: "Cam 12 · Dock 3",
    severity: "Critical",
    time: "Now",
    message: "No helmet detected with 92% confidence.",
  },
  {
    id: "ALT-9000",
    title: "Suspicious movement",
    source: "Cam 04 · Warehouse B",
    severity: "Medium",
    time: "3 min ago",
    message: "Repeated motion pattern near restricted shelf.",
  },
  {
    id: "ALT-8999",
    title: "Object abandonment",
    source: "Cam 31 · Retail Aisle 6",
    severity: "Low",
    time: "9 min ago",
    message: "Stationary object exceeded configured dwell time.",
  },
];

export const logs = [
  ["15:04:22", "Cam 12", "No Helmet", "Critical", "0.92"],
  ["14:58:03", "Cam 04", "Person Loitering", "Medium", "0.87"],
  ["14:41:19", "Cam 18", "Safety Vest", "Low", "0.95"],
  ["14:32:44", "Cam 09", "Unauthorized Access", "Critical", "0.91"],
  ["13:12:05", "Cam 12", "No Vest", "Medium", "0.89"],
  ["12:49:32", "Cam 31", "Suspicious Object", "Low", "0.81"],
];

export const team: TeamMember[] = [
  { name: "Akila Raman", email: "akila@netracore.ai", role: "Admin", status: "Active" },
  { name: "Meera Shah", email: "meera@factoryone.in", role: "Operator", status: "Active" },
  { name: "Rahul Iyer", email: "rahul@factoryone.in", role: "Viewer", status: "Invited" },
  { name: "Nisha Kapoor", email: "nisha@factoryone.in", role: "Operator", status: "Active" },
];

export const cameras = [
  ["CAM-01", "Factory Floor", "Online", "97%", "Normal"],
  ["CAM-04", "Warehouse B", "Online", "94%", "Motion"],
  ["CAM-12", "Dock 3", "Online", "92%", "Alert"],
  ["CAM-31", "Retail Aisle 6", "Online", "89%", "Review"],
];
