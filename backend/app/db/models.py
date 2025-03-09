from typing import List

from sqlalchemy import Integer, String, Float, Enum, ForeignKey
from sqlalchemy.orm import mapped_column, Mapped, relationship
from fastapi_storages.integrations.sqlalchemy import FileType

from app.core.config import APARTMENTS_IMAGE
from app.db.database import Base
from app.core.enums import CountRooms


class Apartment(Base):
    """Модель квартир."""

    name: Mapped[str] = mapped_column(String(200), nullable=False)
    price: Mapped[float] = mapped_column(Float, nullable=False)
    discounted_price: Mapped[float] = mapped_column(Float, nullable=False)
    image: Mapped[str] = mapped_column(
        FileType(storage=APARTMENTS_IMAGE), nullable=True
    )

    details: Mapped["ApartmentDetail"] = relationship(
        back_populates="apartments"
    )

    zone_id: Mapped[int] = mapped_column(
        ForeignKey("zones.id"), nullable=False
    )
    zone: Mapped["Zone"] = relationship(
        argument="Zone", back_populates="apartments"
    )

    project_id: Mapped[int] = mapped_column(
        ForeignKey("projects.id"), nullable=False
    )
    project: Mapped["Project"] = relationship(
        "Project", back_populates="apartments"
    )

    def __str__(self):
        return f'id={self.id}, name={self.name}'


class ApartmentDetail(Base):
    """Модель подробности квартир."""

    __tablename__ = "apartment_details"

    rooms_count: Mapped[CountRooms] = mapped_column(
        Enum(
            CountRooms,
            values_callable=lambda x: [e.value for e in CountRooms]
        )
    )
    section: Mapped[str] = mapped_column(String(50), nullable=False)
    floor: Mapped[int] = mapped_column(Integer, nullable=False)
    area: Mapped[float] = mapped_column(Float, nullable=False)

    # "one-to-one" with Apartment
    apartment_id: Mapped[int] = mapped_column(
        ForeignKey("apartments.id"), nullable=False, unique=True
    )
    apartments: Mapped["Apartment"] = relationship(back_populates="details")


class Project(Base):
    """Модель проектов."""

    name: Mapped[str] = mapped_column(String(200), nullable=False)
    description: Mapped[str] = mapped_column(String(500), nullable=True)

    # "one to many" with Zone
    zones: Mapped[List["Zone"]] = relationship(
        argument="Zone", back_populates="project"
    )
    # "one to many" with Apartment
    apartments: Mapped[List["Apartment"]] = relationship(
        argument="Apartment", back_populates="project"
    )

    def __str__(self):
        return f'{self.name}'


class Zone(Base):
    """Модель зоны."""

    city: Mapped[str] = mapped_column(String(100), nullable=False)
    district: Mapped[str] = mapped_column(String(100), nullable=False)
    address: Mapped[str] = mapped_column(String(300), nullable=False)

    # "many to one" with Project
    project_id: Mapped[int] = mapped_column(
        ForeignKey("projects.id"), nullable=False
    )
    project: Mapped["Project"] = relationship(
        argument="Project", back_populates="zones"
    )
    # "one to many" with Apartment
    apartments: Mapped[list["Apartment"]] = relationship(
        argument="Apartment", back_populates="zone"
    )

    def __str__(self):
        return f'{self.city}, {self.district}, {self.address}'
