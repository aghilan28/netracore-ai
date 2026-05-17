from pathlib import Path
from typing import Any
from uuid import uuid4

import cv2

try:
    from ultralytics import YOLO
except Exception:  # Ultralytics is optional for fast demos and light deploys.
    YOLO = None


LABEL_MAP = {
    "person": "Person",
    "backpack": "Suspicious Object",
    "handbag": "Suspicious Object",
    "suitcase": "Suspicious Object",
}


class DetectionService:
    def __init__(self) -> None:
        self.model: Any | None = None
        if YOLO:
            try:
                self.model = YOLO("yolov8n.pt")
            except Exception:
                self.model = None

    def detect(self, file_path: Path, processed_dir: Path) -> dict:
        media_type = "video" if file_path.suffix.lower() in {".mp4", ".mov", ".avi", ".mkv"} else "image"
        if media_type == "image":
            return self._detect_image(file_path, processed_dir)
        return self._mock_video(file_path)

    def _detect_image(self, file_path: Path, processed_dir: Path) -> dict:
        image = cv2.imread(str(file_path))
        detections = []

        if image is not None and self.model is not None:
            results = self.model(str(file_path), verbose=False)
            height, width = image.shape[:2]
            for result in results:
                for box in result.boxes:
                    cls_name = result.names[int(box.cls[0])]
                    label = LABEL_MAP.get(cls_name, cls_name.title())
                    conf = float(box.conf[0])
                    x1, y1, x2, y2 = [float(v) for v in box.xyxy[0]]
                    detections.append(
                        {
                            "label": label,
                            "confidence": round(conf, 2),
                            "timestamp": "00:00:01",
                            "box": [
                                round(x1 / width * 100, 2),
                                round(y1 / height * 100, 2),
                                round((x2 - x1) / width * 100, 2),
                                round((y2 - y1) / height * 100, 2),
                            ],
                        }
                    )
                    cv2.rectangle(image, (int(x1), int(y1)), (int(x2), int(y2)), (34, 211, 238), 2)
                    cv2.putText(image, label, (int(x1), max(20, int(y1) - 8)), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (34, 211, 238), 2)

        if not detections:
            detections = self._mock_detections()

        processed_name = f"{uuid4().hex}_{file_path.name}"
        processed_path = processed_dir / processed_name
        if image is not None:
            cv2.imwrite(str(processed_path), image)

        return {
            "media_type": "image",
            "detections": detections,
            "processed_url": f"/processed/{processed_name}" if image is not None else None,
        }

    def _mock_video(self, file_path: Path) -> dict:
        return {"media_type": "video", "detections": self._mock_detections(), "processed_url": None}

    def _mock_detections(self) -> list[dict]:
        return [
            {"label": "Person", "confidence": 0.96, "timestamp": "00:00:03", "box": [18, 18, 28, 58]},
            {"label": "No Helmet", "confidence": 0.92, "timestamp": "00:00:05", "box": [52, 20, 24, 22]},
            {"label": "Suspicious Object", "confidence": 0.84, "timestamp": "00:00:11", "box": [62, 62, 20, 16]},
        ]


detection_service = DetectionService()
