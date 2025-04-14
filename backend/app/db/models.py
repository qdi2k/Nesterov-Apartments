from typing import List

from jinja2 import Template
from markupsafe import Markup
from sqlalchemy import Integer, String, Float, Enum, ForeignKey, Boolean, Text
from sqlalchemy.orm import mapped_column, Mapped, relationship, validates
from starlette.requests import Request

from app.core.config import apartments_storage, JINJA_ENV
from app.db.database import Base
from app.core.enums import CountRooms, QuarterEnum


class Apartment(Base):
    """Модель квартир."""

    id: Mapped[int] = mapped_column(autoincrement=True, primary_key=True)
    name: Mapped[str] = mapped_column(String(200), nullable=False)
    on_sale: Mapped[bool] = mapped_column(Boolean, default=False)
    price: Mapped[int] = mapped_column(Integer, nullable=False)
    discount_percent: Mapped[float] = mapped_column(
        Float, nullable=False, default=0.0,
    )
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
        ForeignKey("projects.id", ondelete="CASCADE"), nullable=False
    )
    project: Mapped["Project"] = relationship(
        argument="Project", back_populates="apartments", lazy="selectin"
    )

    image_id: Mapped[int] = mapped_column(
        ForeignKey("apartment_images.id"), nullable=True
    )
    image: Mapped["ApartmentImage"] = relationship(
        argument="ApartmentImage", back_populates="apartments", lazy="selectin"
    )

    @validates('discount_percent')
    def validate_discount_percent(self, key, discount):
        if not 0 <= discount <= 100:
            raise ValueError("Скидка должна быть от 0 до 100 процентов.")
        return discount


    def __str__(self):
        return f'id={self.id}, name={self.name}'


class Project(Base):
    """Модель проектов."""

    id: Mapped[int] = mapped_column(autoincrement=True, primary_key=True)
    name: Mapped[str] = mapped_column(String(200), nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=True)
    address: Mapped[str] = mapped_column(String(300), nullable=False)
    construction_year: Mapped[int] = mapped_column(Integer, nullable=False)
    construction_quarter: Mapped[QuarterEnum] = mapped_column(Enum(
        QuarterEnum,
        values_callable=lambda x: [e.value for e in QuarterEnum]
    ))

    city_id: Mapped[int] = mapped_column(ForeignKey('cities.id'), nullable=True)

    city: Mapped["City"] = relationship(back_populates="projects", lazy="selectin")
    apartments: Mapped[List["Apartment"]] = relationship(
        argument="Apartment",
        back_populates="project",
        cascade="all, delete-orphan",
        passive_deletes=True,
    )
    images: Mapped[List["ProjectImage"]] = relationship(
        "ProjectImage",
        back_populates="project",
        lazy="selectin"
    )

    def __str__(self):
        return f'{self.name}'

    async def __admin_repr__(self, request: Request):
        return f"{self.name} - {self.city.name}"

    async def __admin_select2_repr__(self, request: Request) -> str:
        template_str = (
            '<div class="d-flex align-items-center"> '
            '<strong>id: {{obj.id}}</strong>; {{obj.name}} - {{obj.city}}<div>'
        )
        return Template(template_str, autoescape=True).render(obj=self)


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
            " %}obj.name[:2]{%endif%}</span>"
            "<strong>id: {{obj.id}}</strong>; {{obj.name}} <div>"
        )
        return Template(template_str, autoescape=True).render(obj=self, url=url)


class ProjectImage(Base):
    """Модель картинок проекта."""

    id: Mapped[int] = mapped_column(autoincrement=True, primary_key=True)
    name: Mapped[str] = mapped_column(String(200), nullable=False)
    image: Mapped[str] = mapped_column(String(300), nullable=False)

    project_id: Mapped[int] = mapped_column(
        ForeignKey("projects.id"), nullable=True
    )
    project: Mapped["Project"] = relationship(
        "Project",
        back_populates="images"
    )

    async def __admin_repr__(self, request: Request):
        return self.name

    async def __admin_select2_repr__(self, request: Request) -> str:
        url = apartments_storage.get_path(self.image)
        template = JINJA_ENV.get_template("list_images.html")
        html = template.render(obj=self, url=url)
        return Markup(html)


class City(Base):
    """Модель городов."""

    id: Mapped[int] = mapped_column(autoincrement=True, primary_key=True)
    name: Mapped[str] = mapped_column(String(100), nullable=False, unique=True)

    projects: Mapped[list["Project"]] = relationship(back_populates="city")

    async def __admin_repr__(self, request: Request):
        return self.name


class AdminUser(Base):
    """Модель пользователей админки."""

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    username: Mapped[str] = mapped_column(String(50), unique=True, nullable=False)
    email: Mapped[str] = mapped_column(String(100), unique=True, nullable=False)
    password: Mapped[str] = mapped_column(String(100), nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    is_superuser: Mapped[bool] = mapped_column(Boolean, default=False)

    def __str__(self):
        return self.username


class Question(Base):
    """Модель вопросов."""

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    add_site: Mapped[bool] = mapped_column(Boolean, default=False)
    owner: Mapped[str] = mapped_column(String(100), nullable=False)
    phone: Mapped[str] = mapped_column(String(12), nullable=False)
    question: Mapped[str] = mapped_column(Text, nullable=False)
    answer: Mapped[str] = mapped_column(Text, nullable=True)
