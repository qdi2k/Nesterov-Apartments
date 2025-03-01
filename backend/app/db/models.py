from sqlalchemy import Integer, String, Float, Enum, ForeignKey
from sqlalchemy.orm import mapped_column, Mapped, relationship
from fastapi_storages.integrations.sqlalchemy import FileType

from app.db.database import Base
from app.core.config import APARTMENTS_IMAGE
from app.core.enums import CountRooms


class Zone(Base):
    __tablename__ = 'zones'

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    city: Mapped[str] = mapped_column(String, nullable=False)
    district: Mapped[str] = mapped_column(String, nullable=False)

    # "one to many" with Apartment
    apartments: Mapped[list["Apartment"]] = relationship(
        argument="Apartment", back_populates="zone"
    )

    def __str__(self):
        return f"{self.city}, {self.district}"


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

    zone_id: Mapped[int] = mapped_column(
        ForeignKey("zones.id"), nullable=False
    )
    zone: Mapped["Zone"] = relationship(
        argument="Zone", back_populates="apartments"
    )
