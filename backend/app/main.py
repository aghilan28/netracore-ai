from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.routes import analytics, detection, incidents

app = FastAPI(
    title="NetraCore AI API",
    description="FastAPI backend for AI surveillance detection, incidents, and analytics.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://*.vercel.app", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/processed", StaticFiles(directory="processed"), name="processed")

app.include_router(detection.router)
app.include_router(incidents.router)
app.include_router(analytics.router)


@app.get("/health")
async def health():
    return {"status": "healthy", "service": "netracore-ai", "model": "yolov8n-demo"}
