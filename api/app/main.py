from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

import socket

from app.database import models
from app.core.database.database import engine
from app.api.v1.router import api_router as v1_router

# loading .env environment variables (uncomment for local dev/testing)
# load_dotenv()

# creating app instance
app = FastAPI()

# enable request from frontend react app
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# create all tables
models.Base.metadata.create_all(bind=engine)

# including routers
app.include_router(v1_router, prefix='/v1')


# base route to check app is running
@app.get("/")
async def root():
    return {
        "status": "Active",
        "hostname": socket.gethostname(),
        "ip_address": socket.gethostbyname(socket.gethostname()),
    }
