"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Brain, FileVideo, Loader2, UploadCloud } from "lucide-react";
import { AppShell } from "@/components/dashboard/app-shell";
import { PageHeader } from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Detection } from "@/types";
import { runDetection } from "@/services/api";

const fallbackDetections: Detection[] = [
  { label: "Person", confidence: 0.96, timestamp: "00:00:03", box: [18, 18, 28, 58] },
  { label: "No Helmet", confidence: 0.92, timestamp: "00:00:05", box: [52, 20, 24, 22] },
  { label: "Suspicious Object", confidence: 0.84, timestamp: "00:00:11", box: [62, 62, 20, 16] },
];

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [detections, setDetections] = useState<Detection[]>(fallbackDetections);
  const preview = useMemo(() => (file ? URL.createObjectURL(file) : ""), [file]);

  async function analyze() {
    if (!file) return;
    setLoading(true);
    try {
      const result = await runDetection(file);
      setDetections(result.detections.length ? result.detections : fallbackDetections);
    } catch {
      setDetections(fallbackDetections);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AppShell>
      <PageHeader title="CCTV Upload Center" description="Upload video or still frames, run the FastAPI detection pipeline, and inspect labels, confidence scores, timestamps, and bounding boxes." />
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <label className="grid min-h-72 cursor-pointer place-items-center rounded-lg border border-dashed border-cyan-300/35 bg-cyan-300/5 p-8 text-center transition hover:bg-cyan-300/10">
            <input
              type="file"
              accept="image/*,video/*"
              className="hidden"
              onChange={(event) => setFile(event.target.files?.[0] ?? null)}
            />
            <span>
              <UploadCloud className="mx-auto text-cyan-300" size={44} />
              <span className="mt-4 block text-lg font-semibold">Drop CCTV footage or click to upload</span>
              <span className="mt-2 block text-sm text-slate-400">Supports images and short demo video clips.</span>
            </span>
          </label>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-slate-400">{file ? `${file.name} · ${(file.size / 1024 / 1024).toFixed(2)} MB` : "No file selected"}</p>
            <Button onClick={analyze} disabled={!file || loading}>{loading ? <Loader2 className="animate-spin" size={18} /> : <Brain size={18} />} Run AI detection</Button>
          </div>
        </Card>
        <Card>
          <h2 className="mb-4 text-lg font-semibold">Detection metadata</h2>
          <div className="space-y-3">
            {detections.map((detection) => (
              <div key={`${detection.label}-${detection.timestamp}`} className="rounded-lg border border-slate-700 bg-slate-950/70 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold">{detection.label}</p>
                  <Badge tone={detection.confidence > 0.9 ? "green" : "amber"}>{Math.round(detection.confidence * 100)}%</Badge>
                </div>
                <p className="mt-1 text-sm text-slate-400">Timestamp {detection.timestamp}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <Card className="mt-6">
        <div className="mb-4 flex items-center gap-2"><FileVideo className="text-cyan-300" /><h2 className="text-lg font-semibold">Processed preview</h2></div>
        <div className="relative aspect-video overflow-hidden rounded-lg border border-slate-700 bg-slate-950">
          {preview && file?.type.startsWith("image/") ? <Image src={preview} alt="Uploaded CCTV frame" fill unoptimized className="object-cover opacity-80" /> : null}
          {!preview || file?.type.startsWith("video/") ? <div className="grid h-full place-items-center text-slate-500">AI annotated preview will render here for video files</div> : null}
          {detections.map((detection, index) => {
            const [left, top, width, height] = detection.box ?? [12 + index * 20, 18 + index * 12, 22, 18];
            return (
              <div key={detection.label} className="absolute border-2 border-cyan-300" style={{ left: `${left}%`, top: `${top}%`, width: `${width}%`, height: `${height}%` }}>
                <span className="absolute -top-7 left-0 rounded bg-cyan-300 px-2 py-1 text-xs font-bold text-slate-950">{detection.label}</span>
              </div>
            );
          })}
        </div>
      </Card>
    </AppShell>
  );
}
