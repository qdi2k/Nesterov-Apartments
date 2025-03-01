from sqlalchemy import Integer, String, Float, Enum
from sqlalchemy.orm import mapped_column, Mapped
from fastapi_storages.integrations.sqlalchemy import FileType

from app.db.database import Base
from app.core.config import APARTMENTS_IMAGE
from core.enums import CountRooms


class Apartment(Base):
    __tablename__ = 'apartments'

    name: Mapped[str] = mapped_column(String, nullable=False)

    project: Mapped[str] = mapped_column(String, nullable=False)
    address: Mapped[str] = mapped_column(String, nullable=False)

    rooms_count: Mapped[CountRooms] = mapped_column(
        Enum(CountRooms), nullable=False
    )
    section: Mapped[str] = mapped_column(String, nullable=False)
    floor: Mapped[int] = mapped_column(Integer, nullable=False)
    area: Mapped[float] = mapped_column(Float, nullable=False)

    image: Mapped[str] = mapped_column(
        FileType(storage=APARTMENTS_IMAGE), nullable=True
    )

    price: Mapped[float] = mapped_column(Float, nullable=False)
    discounted_price: Mapped[float] = mapped_column(Float, nullable=False)


