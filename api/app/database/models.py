import sqlalchemy as sa
from app.core.database.database import Base

import datetime

class Game(Base):
    __tablename__ = "games"

    id = sa.Column(sa.Integer, primary_key=True, index=True, autoincrement=True)
    name = sa.Column(sa.String(30), unique=True, nullable=False)
    price = sa.Column(sa.Float, nullable=False)
    genre = sa.Column(sa.String(40), nullable=False)
    created_at = sa.Column(sa.DATETIME, default=datetime.datetime.utcnow())
    updated_at = sa.Column(sa.DATETIME, default=datetime.datetime.utcnow())

# class Genre(Base):
#     __tablename__ = "genre"
#
#     id = sa.Column(sa.Integer, primary_key=True, index=True)
#     name = sa.Column(sa.String(20), unique=True, nullable=False)
#
# class GameGenre(Base):
#     __tablename__ = "game_genre"
#     game_id = sa.Column(sa.Integer, sa.ForeignKey('game.id'))
#     genre_id = sa.Column(sa.Integer, sa.ForeignKey('genre.id'))