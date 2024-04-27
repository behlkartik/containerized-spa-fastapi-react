from sqlalchemy.orm import Session
from app.database.repository.games_repository import games_repository
from app.schemas.games import GameRequest
from app.database.models import Game


def get_games(db: Session):
    games = games_repository.get_all(db=db)
    return games

def add_game(db: Session, game_request: GameRequest):
    game = Game()
    game.name = game_request.name
    game.price = game_request.price
    game.genre = game_request.genre
    return games_repository.add_one(db=db, obj=game)
