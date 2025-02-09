from sqlalchemy import (Column, Integer, String, DateTime, func, Enum,
                        UniqueConstraint)
from sqlalchemy.ext.declarative import declarative_base

from core.enums import CallStatusEnum
from .sessions import engine

Base = declarative_base()


class CityArea(Base):
    __tablename__ = 'city_area'

    id = Column(Integer, primary_key=True, autoincrement=True)
    city = Column(String, nullable=False)
    area = Column(String, nullable=False)

    __table_args__ = (
        UniqueConstraint('city', 'area', name='uq_city_area'),
    )

    def __repr__(self):
        return f"<CityArea(id={self.id}, city={self.city}, area={self.area})>"


class CallUser(Base):
    __tablename__ = 'calls'

    id = Column(Integer, primary_key=True, autoincrement=True)
    created_at = Column(DateTime, default=func.now())
    status_completed = Column(Enum(CallStatusEnum),
                              default=CallStatusEnum.AWAIT)
    name = Column(String(255), nullable=False)
    phone = Column(String(20))
    email = Column(String(255))


async def init_models():
    """Функция для инициализации моделей в БД"""
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
