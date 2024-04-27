from pydantic import BaseModel, constr, confloat, Field
from datetime import datetime

class GameBase(BaseModel):
    name: constr(min_length=2, strip_whitespace=True)
    price: confloat(gt=0.0)
    genre: constr(min_length=2)

class GameRequest(GameBase):
    pass


class GameResponse(GameBase):
    created_at: datetime = Field(default=datetime.utcnow())
    updated_at: datetime = Field(default=datetime.utcnow())
