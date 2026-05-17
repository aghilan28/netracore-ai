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

## Screenshots

Add screenshots here after running the app:

- Landing page
- AI command dashboard
- CCTV upload and detection preview
- PPE compliance dashboard
- Heatmap visualization

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

## Deployment

Frontend on Vercel:

1. Import this repository.
2. Set `NEXT_PUBLIC_API_URL` to the deployed backend URL.
3. Deploy with the default Next.js settings.

Backend on Render:

1. Create a new Python web service from `backend/`.
2. Build command: `pip install -r requirements.txt`
3. Start command: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`

Backend on Railway:

1. Create a new service rooted at `backend/`.
2. Railway will use the included `Procfile`.
3. Keep uploads local for demo use.

## Future Scope

- Camera RTSP ingestion
- Multi-tenant organizations and real authentication
- Edge inference workers
- Alert webhooks and WhatsApp/SMS escalation
- Report PDF generation service
- S3-compatible media retention

## Contributors

Built as a startup-grade hackathon MVP for NetraCore AI.
