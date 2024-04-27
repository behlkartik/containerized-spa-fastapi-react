from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from app.core.config import settings

sqlalchemy_uri = str(settings.SQLALCHEMY_DATABASE_URI)
print("SQLALCHEMY URI:", sqlalchemy_uri)
engine = create_engine(sqlalchemy_uri)
SessionLocal = sessionmaker(autoflush=False, autocommit=False, bind=engine)
Base = declarative_base()
