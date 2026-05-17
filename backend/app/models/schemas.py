from pydantic import BaseModel


class Detection(BaseModel):
    label: str
    confidence: float
    timestamp: str
    box: list[float] | None = None


class DetectionResponse(BaseModel):
    filename: str
    media_type: str
    detections: list[Detection]
    processed_url: str | None = None


class Incident(BaseModel):
    id: str
    title: str
    zone: str
    time: str
    severity: str
    status: str
    summary: str
