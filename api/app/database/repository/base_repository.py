from app.database.models import Base
from sqlalchemy.orm import Session

class BaseRepository:
    def __init__(self, model: Base):
        self.model = model

    def get_all(self, db: Session):
        return db.query(self.model).all()

    def add_one(self, db: Session, obj):
        if not obj:
            return None
        db.add(obj)
        db.commit()
        db.refresh(obj)
        return obj
