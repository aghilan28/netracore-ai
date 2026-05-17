import { Detection } from "@/types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export async function runDetection(file: File): Promise<{ detections: Detection[]; processed_url?: string }> {
  const form = new FormData();
  form.append("file", file);

  const response = await fetch(`${API_BASE}/detect`, {
    method: "POST",
    body: form,
  });

  if (!response.ok) {
    throw new Error("Detection service unavailable");
  }

  return response.json();
}
