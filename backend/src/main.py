from fastapi import FastAPI, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from pydantic import BaseModel

from databases.models import init_models, User
from databases.sessions import get_session

app = FastAPI()


@app.on_event("startup")
async def startup():
    await init_models()


class UserCreate(BaseModel):
    name: str
    email: str


@app.post("/users/")
async def create_user(user: UserCreate,
                      session: AsyncSession = Depends(get_session)):
    new_user = User(**user.dict())
    session.add(new_user)
    await session.commit()
    await session.refresh(new_user)
    return new_user


@app.get("/users/")
async def read_users(session: AsyncSession = Depends(get_session)):
    result = await session.execute(select(User))
    users = result.scalars().all()
    return users
