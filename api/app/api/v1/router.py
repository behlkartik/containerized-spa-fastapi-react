from fastapi import APIRouter
from app.api.v1 import api_games

api_router = APIRouter(tags=["CRUD APIs"])
api_router.include_router(api_games.api_router, prefix="/games")
