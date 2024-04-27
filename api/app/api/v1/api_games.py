from fastapi import APIRouter, Depends
from http import HTTPStatus
from sqlalchemy.orm import Session

import typing as t

from app.schemas.games import GameResponse, GameRequest
from app.core.database.deps import get_db
from app.services import games_service

api_router = APIRouter()

@api_router.get("", response_model=t.Optional[t.List[GameResponse]], status_code=HTTPStatus.OK)
async def get_all_games(db: Session = Depends(get_db)):
    return games_service.get_games(db)

@api_router.post("", response_model=GameResponse, status_code=HTTPStatus.CREATED)
async def add_game(game_request: GameRequest, db: Session = Depends(get_db)):
    return games_service.add_game(db, game_request)

