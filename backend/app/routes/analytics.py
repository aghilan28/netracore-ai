from fastapi import APIRouter

from app.services.demo_data import ANALYTICS

router = APIRouter(tags=["analytics"])


@router.get("/analytics")
async def get_analytics():
    return ANALYTICS
