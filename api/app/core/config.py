from starlette.config import Config
from pydantic import MySQLDsn

config = Config()


class Settings:
    MYSQL_USER = config("MYSQL_USER", cast=str)
    MYSQL_PASSWORD = config("MYSQL_PASSWORD", cast=str)
    MYSQL_SERVER = config("MYSQL_SERVER", cast=str)
    MYSQL_PORT = config("MYSQL_PORT", cast=str, default="5432")
    MYSQL_DB = config("MYSQL_DB", cast=str)

    SQLALCHEMY_DATABASE_URI: str = MySQLDsn.build(
        scheme="mysql+pymysql",
        username=MYSQL_USER,
        password=str(MYSQL_PASSWORD),
        host=MYSQL_SERVER,
        port=int(MYSQL_PORT),
        path=f"{MYSQL_DB or ''}",
    )


settings = Settings()
