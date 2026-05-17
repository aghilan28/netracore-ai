# NetraCore AI

AI Smart Surveillance & Safety Intelligence Platform for MSMEs.

NetraCore AI is a hackathon-ready SaaS MVP that turns ordinary CCTV footage into a polished safety intelligence workflow: uploads, AI detection, PPE monitoring, alerts, incident analytics, heatmaps, reports, team controls, and activity logs.

## Features

- Premium dark enterprise dashboard inspired by SOC and observability tools
- CCTV image/video upload center with FastAPI detection integration
- YOLOv8 object detection path with dependable mock fallback
- PPE compliance analytics for helmets, vests, violations, and worker counts
- Incident analytics, alert center, AI report history, and searchable logs
- Activity heatmap visualization with high-risk warehouse zones
- Mock login using `admin@netracore.ai` and `password123`
- Vercel-compatible Next.js frontend and Render/Railway-compatible FastAPI backend

## Architecture

```text
netracore-ai/
  app/                  Next.js App Router pages
  components/           Reusable dashboard, chart, and UI components
  hooks/                Frontend hook extension point
  lib/                  Demo data and utilities
  services/             API integration layer
  types/                Shared TypeScript interfaces
  public/               Static assets
  backend/
    app/
      routes/           FastAPI route modules
      services/         YOLO and demo analytics services
      models/           Pydantic schemas
      utils/            Backend utility extension point
    uploads/            Local upload storage
    processed/          Processed media output
```

## Tech Stack

Frontend: Next.js 15, TypeScript, TailwindCSS, shadcn-style primitives, Framer Motion, Recharts, Lucide Icons.

Backend: FastAPI, Python 3.11+, Uvicorn, OpenCV, Ultralytics YOLOv8.

Storage: local upload and processed folders for simple hackathon deployment.


## Local Setup

Install frontend dependencies:

```bash
npm install
npm run dev
```

The frontend runs at `http://localhost:3000`.

Install backend dependencies:

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

The API runs at `http://localhost:8000`.

## API Endpoints

- `GET /health` - backend health check
- `POST /upload` - upload media and run detection
- `POST /detect` - run detection on uploaded image/video
- `GET /incidents` - incident history
- `GET /analytics` - dashboard analytics payload

Detection response format:

```json
{
  "label": "No Helmet",
  "confidence": 0.92,
  "timestamp": "00:01:22"
}
```
---


## 🔁 Core Workflow

1. Surveillance feed uploaded
2. AI detection pipeline processes frames
3. Detection engine identifies anomalies/events
4. Analytics engine generates operational insights
5. Dashboard visualizes incidents in real time
6. Human operators validate and respond

---

# 🤖 AI Integration

## AI-Powered Components

- 🎥 Computer Vision Detection Pipeline
- 🧠 Real-Time Incident Classification
- ⚠️ PPE & Safety Compliance Monitoring
- 📊 Behavioral Analytics Engine
- 🔍 Smart Threat Detection
- 📈 AI-Generated Incident Summaries

> Designed to assist operational monitoring teams — not replace human oversight.

---

# ⚙️ Features

- 📹 Real-time surveillance dashboard
- 🚨 Smart incident alerts
- 👷 PPE compliance monitoring
- 📊 Operational analytics dashboard
- 📈 Heatmap visualization
- 🧠 AI-generated event summaries
- 📁 Incident history tracking
- 🔍 Threat detection workflows
- 🌙 Modern enterprise SaaS UI
- 📱 Fully responsive interface

---

# 📊 Impact Model (Estimated)

| Metric | Traditional Monitoring | With NetraCore AI |
|--------|------------------------|-------------------|
| Incident detection speed | Delayed | Real-time |
| Monitoring efficiency | Manual-heavy | AI-assisted |
| Safety compliance visibility | Limited | High |
| Operator workload | High | Reduced |
| Response coordination | Moderate | Improved |

---

## Operations

- Multi-camera monitoring environments
- Industrial & enterprise surveillance operations
- AI-assisted prioritization workflows

👉 Enables faster operational awareness and intelligent incident response.

---

# 🎬 Demo Flow

1. Open surveillance dashboard
2. Upload surveillance footage/image
3. AI processes visual input
4. Incidents & alerts generated
5. Analytics dashboard updates
6. Monitoring team validates incidents

👉 Demonstrates:
**Detection → Analysis → Alerting → Operational Response**
---

# 🌐 Deployment

## Frontend
Deployed on Vercel

## Backend
Deployed on Railway / Render

---

# 🔐 Design Philosophy

- AI-assisted operational monitoring
- Human-centered surveillance intelligence
- Real-time situational awareness
- Scalable enterprise architecture
- Explainable detection workflows
- Modern SaaS dashboard experience

---

## Future Scope

- Camera RTSP ingestion
- Multi-tenant organizations and real authentication
- Edge inference workers
- Alert webhooks and WhatsApp/SMS escalation
- Report PDF generation service
- S3-compatible media retention

## Contributors

Built as a startup-grade hackathon MVP for NetraCore AI.
