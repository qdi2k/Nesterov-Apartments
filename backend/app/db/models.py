from typing import List

from jinja2 import Template
from sqlalchemy import Integer, String, Float, Enum, ForeignKey, Boolean
from sqlalchemy.orm import mapped_column, Mapped, relationship
from starlette.requests import Request

from app.core.config import apartments_storage
from app.db.database import Base
from app.core.enums import CountRooms


class Apartment(Base):
    """Модель квартир."""

    id: Mapped[int] = mapped_column(autoincrement=True, primary_key=True)
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

    image_id: Mapped[int] = mapped_column(
        ForeignKey("apartment_images.id"), nullable=True
    )
    image: Mapped["ApartmentImage"] = relationship(
        argument="ApartmentImage", back_populates="apartments", lazy="select"
    )


def __str__(self):
        return f'id={self.id}, name={self.name}'


class Project(Base):
    """Модель проектов."""

    id: Mapped[int] = mapped_column(autoincrement=True, primary_key=True)
    name: Mapped[str] = mapped_column(String(200), nullable=False)
    description: Mapped[str] = mapped_column(String(500), nullable=True)
    city: Mapped[str] = mapped_column(String(100), nullable=False)
    address: Mapped[str] = mapped_column(String(300), nullable=False)

    # "one to many" with Apartment
    apartments: Mapped[List["Apartment"]] = relationship(
        argument="Apartment", back_populates="project"
    )

    def __str__(self):
        return f'{self.name}'

    async def __admin_repr__(self, request: Request):
        return f"{self.city} {self.name}"


class ApartmentImage(Base):
    """Модель картинок квартир."""

    id: Mapped[int] = mapped_column(autoincrement=True, primary_key=True)
    name: Mapped[str] = mapped_column(String(200), nullable=False)
    image: Mapped[str] = mapped_column(String(300), nullable=False)

    apartments: Mapped[List["Apartment"]] = relationship(
        argument="Apartment", back_populates="image", lazy="select"
    )

    async def __admin_repr__(self, request: Request):
        return self.name

    async def __admin_select2_repr__(self, request: Request) -> str:
        url = apartments_storage.get_path(self.image)
        template_str = (
            '<div class="d-flex align-items-center"><span class="me-2 avatar'
            ' avatar-xs"{% if url %} style="background-image:'
            ' url({{url}});--tblr-avatar-size: 1.5rem;{%endif%}">{% if not url'
            " %}obj.name[:2]{%endif%}</span>{{obj.name}} <div>"
        )
        return Template(template_str, autoescape=True).render(obj=self, url=url)


class AdminUser(Base):
    """Модель пользователей админки"""

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    username: Mapped[str] = mapped_column(String(50), unique=True, nullable=False)
    email: Mapped[str] = mapped_column(String(100), unique=True, nullable=False)
    password: Mapped[str] = mapped_column(String(100), nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    is_superuser: Mapped[bool] = mapped_column(Boolean, default=False)

    def __str__(self):
        return self.username
