INCIDENTS = [
    {
        "id": "INC-1048",
        "title": "Unauthorized access near storage zone",
        "zone": "Warehouse B",
        "time": "14:38",
        "severity": "Critical",
        "status": "Investigating",
        "summary": "Unauthorized access detected near storage zone between 14:32 and 14:38. Multiple PPE violations identified.",
    },
    {
        "id": "INC-1047",
        "title": "Worker without helmet on loading dock",
        "zone": "Dock 3",
        "time": "13:12",
        "severity": "Medium",
        "status": "Open",
        "summary": "AI detected two workers entering the loading dock without helmets.",
    },
]

ANALYTICS = {
    "active_cameras": 48,
    "threat_alerts": 12,
    "ppe_violations": 27,
    "safety_score": 91,
    "detection_accuracy": 96.4,
    "series": [
        {"day": "Mon", "incidents": 24, "ppe": 18},
        {"day": "Tue", "incidents": 18, "ppe": 13},
        {"day": "Wed", "incidents": 32, "ppe": 22},
        {"day": "Thu", "incidents": 21, "ppe": 17},
        {"day": "Fri", "incidents": 39, "ppe": 28},
    ],
}
