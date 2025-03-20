from typing import List

from sqlalchemy import Integer, String, Float, Enum, ForeignKey
from sqlalchemy.orm import mapped_column, Mapped, relationship

from app.db.database import Base
from app.core.enums import CountRooms


class Apartment(Base):
    """Модель квартир."""

    name: Mapped[str] = mapped_column(String(200), nullable=False)
    price: Mapped[float] = mapped_column(Float, nullable=False)
    discounted_price: Mapped[float] = mapped_column(Float, nullable=False)
    rooms_count: Mapped[CountRooms] = mapped_column(
        Enum(
            CountRooms,
            values_callable=lambda x: [e.value for e in CountRooms]
        )
    )

    section: Mapped[str] = mapped_column(String(50), nullable=False)
    floor: Mapped[int] = mapped_column(Integer, nullable=False)
    area: Mapped[float] = mapped_column(Float, nullable=False)

    project_id: Mapped[int] = mapped_column(
        ForeignKey("projects.id"), nullable=False
    )
    project: Mapped["Project"] = relationship(
        argument="Project", back_populates="apartments"
    )

    image: Mapped[str] = mapped_column(String(200), nullable=False)

    def __str__(self):
        return f'id={self.id}, name={self.name}'


class Project(Base):
    """Модель проектов."""

    name: Mapped[str] = mapped_column(String(200), nullable=False)
    description: Mapped[str] = mapped_column(String(500), nullable=True)
    city: Mapped[str] = mapped_column(String(100), nullable=False)
    district: Mapped[str] = mapped_column(String(100), nullable=False)
    address: Mapped[str] = mapped_column(String(300), nullable=False)

    # "one to many" with Apartment
    apartments: Mapped[List["Apartment"]] = relationship(
        argument="Apartment", back_populates="project"
    )

    def __str__(self):
        return f'{self.name}'
