from fastapi import APIRouter

from app.models.schemas import Incident
from app.services.demo_data import INCIDENTS

router = APIRouter(tags=["incidents"])


@router.get("/incidents", response_model=list[Incident])
async def get_incidents():
    return INCIDENTS
