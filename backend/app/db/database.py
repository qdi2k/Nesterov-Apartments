import re
from typing import AsyncGenerator

from sqlalchemy import create_engine
from sqlalchemy.ext.asyncio import (async_sessionmaker, create_async_engine,
                                    AsyncSession)
from sqlalchemy.orm import (DeclarativeBase, declared_attr, sessionmaker, Session)

from app.core.config import settings


sync_engine = create_engine(settings.get_sync_database_url, echo=settings.DEBUG)
sync_session_maker = sessionmaker(sync_engine, class_=Session)

async_engine = create_async_engine(
    settings.get_async_database_url, echo=settings.DEBUG
)
async_session_maker = async_sessionmaker(async_engine, class_=AsyncSession)


async def get_async_session() -> AsyncGenerator[AsyncSession, None]:
    async with async_session_maker() as session:
        yield session


class Base(DeclarativeBase):
    """
    Абстрактный базовый класс, предоставляющий общую функциональность,
    для всех наследованных моделей.
    """

    __abstract__ = True

    @declared_attr.directive
    def __tablename__(cls) -> str:
        """Автоматически генерирует имя таблицы на основе имени класса."""
        name = cls.__name__
        name = re.sub('(.)([A-Z][a-z]+)', r'\1_\2', name)
        name = re.sub('([a-z0-9])([A-Z])', r'\1_\2', name).lower()
        if name.endswith('y') and not name.endswith(('ay', 'ey', 'iy', 'oy', 'uy')):
            plural = name[:-1] + 'ies'
        elif name.endswith(('s', 'sh', 'ch', 'x', 'z')):
            plural = name + 'es'
        else:
            plural = name + 's'
        return plural
