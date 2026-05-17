from pathlib import Path
from uuid import uuid4

from fastapi import APIRouter, File, UploadFile

from app.models.schemas import DetectionResponse
from app.services.ai_service import detection_service

router = APIRouter(tags=["detection"])
UPLOAD_DIR = Path("uploads")
PROCESSED_DIR = Path("processed")
UPLOAD_DIR.mkdir(exist_ok=True)
PROCESSED_DIR.mkdir(exist_ok=True)


@router.post("/upload", response_model=DetectionResponse)
async def upload(file: UploadFile = File(...)):
    return await detect(file)


@router.post("/detect", response_model=DetectionResponse)
async def detect(file: UploadFile = File(...)):
    suffix = Path(file.filename or "upload.bin").suffix
    safe_name = f"{uuid4().hex}{suffix}"
    path = UPLOAD_DIR / safe_name
    path.write_bytes(await file.read())
    result = detection_service.detect(path, PROCESSED_DIR)
    return {
        "filename": file.filename or safe_name,
        "media_type": result["media_type"],
        "detections": result["detections"],
        "processed_url": result.get("processed_url"),
    }
