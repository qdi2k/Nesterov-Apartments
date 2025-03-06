from sqlalchemy import Integer, String, Float, Enum, ForeignKey
from sqlalchemy.orm import mapped_column, Mapped, relationship
from fastapi_storages.integrations.sqlalchemy import FileType

from app.core.config import APARTMENTS_IMAGE
from app.db.database import Base
from app.core.enums import CountRooms


class Project(Base):
    name: Mapped[str] = mapped_column(String(200), nullable=False)
    description: Mapped[str] = mapped_column(String(500), nullable=True)
    address: Mapped[str] = mapped_column(String(300), nullable=False)

    # "one to many" with Apartment
    apartments: Mapped[list["Apartment"]] = relationship(
        argument="Apartment", back_populates="project"
    )


class Zone(Base):
    city: Mapped[str] = mapped_column(String(100), nullable=False)
    district: Mapped[str] = mapped_column(String(100), nullable=False)

    # "one to many" with Apartment
    apartments: Mapped[list["Apartment"]] = relationship(
        argument="Apartment", back_populates="zone"
    )


class Apartment(Base):
    name: Mapped[str] = mapped_column(String(200), nullable=False)
    price: Mapped[float] = mapped_column(Float, nullable=False)
    discounted_price: Mapped[float] = mapped_column(Float, nullable=False)
    image: Mapped[str] = mapped_column(
        FileType(storage=APARTMENTS_IMAGE), nullable=True
    )

    details: Mapped["ApartmentDetail"] = relationship(
        back_populates="apartment"
    )

    zone_id: Mapped[int] = mapped_column(
        ForeignKey("zone.id"), nullable=False
    )
    zone: Mapped["Zone"] = relationship(
        argument="Zone", back_populates="apartment"
    )

    project_id: Mapped[int] = mapped_column(
        ForeignKey("project.id"), nullable=False
    )
    projects: Mapped["Project"] = relationship(
        argument="Project", back_populates="apartment"
    )


class ApartmentDetail(Base):
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
        ForeignKey("apartment.id"), nullable=False, unique=True
    )
    apartment: Mapped["Apartment"] = relationship(back_populates="apartment_detail")
