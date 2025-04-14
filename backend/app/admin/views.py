import datetime
from typing import Any, Dict

from starlette.requests import Request
from starlette_admin import EnumField
from starlette_admin.contrib.sqla import ModelView
from starlette_admin.exceptions import FormValidationError

from app.admin.image_view import ImageView


class ApartmentImageView(ImageView):
    """Админка изображений квартир."""

    pass


class ProjectImageView(ImageView):
    """Админка изображений проектов."""

    fields = [
        "id",
        "name",
        "image",
        "project",
    ]


class ProjectView(ModelView):
    """Админка проектов."""

    fields = [
        "id",
        "name",
        "description",
        "city",
        "address",
        "construction_year",
        EnumField(
            "construction_quarter",
            choices=[
                ("I квартал", "I квартал"),
                ("II квартал", "II квартал"),
                ("III квартал", "III квартал"),
                ("IV квартал", "IV квартал"),
            ],
        ),
        "images",
    ]

    async def validate(self, request: Request, data: Dict[str, Any]) -> None:
        errors: Dict[str, str] = dict()
        construction_year = data.get("construction_year")
        year_more = datetime.datetime.now().year + 100
        if not 1950 <= construction_year <= year_more:
            errors["construction_year"] = (
                f"Год постройки должен быть от 1950 до {year_more}."
            )
        if len(errors) > 0:
            raise FormValidationError(errors)
        return await super().validate(request, data)


class CityView(ModelView):
    """Админка городов."""
    name = "City"

    fields = [
        "id",
        "name",
    ]


class ApartmentView(ModelView):
    """Админка для квартир."""

    fields = [
        "id",
        "name",
        "price",
        "discount_percent",
        "on_sale",
        "rooms_count",
        "section",
        "floor",
        "area",
        "project",
        "image",
    ]

    async def validate(self, request: Request, data: Dict[str, Any]) -> None:
        errors: Dict[str, str] = dict()
        if not 1 <= len(data["name"]) <= 200:
            errors["name"] = "Название должно быть длинной от 1 до 200 символов."
        if not 500000 <= data["price"] <= 500000000:
            errors["price"] = "Цена должна быть от 500 000 до 500 000 000."
        if not 0 <= data["discount_percent"] <= 100:
            errors["discount_percent"] = "Скидка должна быть от 0 до 100 %."
        if not 0 <= data["floor"] <= 200:
            errors["floor"] = "Этаж должен быть от 0 до 200."
        if not 0 <= data["area"] <= 200:
            errors["area"] = "Площадь должна быть от 0 до 1000."

        if len(errors) > 0:
            raise FormValidationError(errors)
        return await super().validate(request, data)


class QuestionView(ModelView):
    """Админка для вопросов."""

    fields = [
        "id",
        "add_site",
        "owner",
        "phone",
        "question",
        "answer",
    ]
