from sqlalchemy import Integer, String, DateTime, func, Enum, UniqueConstraint
from sqlalchemy.orm import mapped_column

from core.enums import CallStatusEnum
from app.db.database import Base


class CityArea(Base):
    __tablename__ = 'city_area'

    id = mapped_column(Integer, primary_key=True, autoincrement=True)
    city = mapped_column(String, nullable=False)
    area = mapped_column(String, nullable=False)

    __table_args__ = (
        UniqueConstraint('city', 'area', name='uq_city_area'),
    )

    def __repr__(self):
        return f"<CityArea(id={self.id}, city={self.city}, area={self.area})>"

class CallUser(Base):
    __tablename__ = 'calls'

    id = mapped_column(Integer, primary_key=True, autoincrement=True)
    created_at = mapped_column(DateTime, default=func.now())
    status_completed = mapped_column(
        Enum(CallStatusEnum, create_constraint=False),
        default=CallStatusEnum.AWAIT
    )
    name = mapped_column(String(255), nullable=False)
    phone = mapped_column(String(20))
    email = mapped_column(String(255))

    def __repr__(self):
        return f"<CallUser(id={self.id}, name={self.name}, phone={self.phone}, email={self.email})>"
