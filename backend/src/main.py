from fastapi import FastAPI

from api.routers import api_router
from databases.models import init_models

app = FastAPI()


@app.on_event("startup")
async def startup():
    await init_models()

app.include_router(api_router, prefix="/api")
