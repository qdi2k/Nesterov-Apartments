from sqlalchemy.ext.asyncio import (async_sessionmaker, create_async_engine,
                                    AsyncSession)
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column

from app.core.config import settings

engine = create_async_engine(settings.get_async_database_url)
async_session_maker = async_sessionmaker(engine, class_=AsyncSession)


class Base(DeclarativeBase):
    id: Mapped[int] = mapped_column(autoincrement=True, primary_key=True)
