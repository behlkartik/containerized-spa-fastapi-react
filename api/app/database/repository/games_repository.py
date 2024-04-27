from app.database.models import Game, Base
from app.database.repository.base_repository import BaseRepository

class GameRepository(BaseRepository):
    def __int__(self, model: Base):
        super().__init__(model)


games_repository = GameRepository(Game)

