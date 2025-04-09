from typing import Any, Dict

from starlette.requests import Request
from starlette_admin import BaseField, RequestAction
from starlette_admin.contrib.sqla import ModelView
from starlette_admin.exceptions import FormValidationError

from app.admin.image_view import ImageView

FIRST_ELEM_TUPLE_IMAGE = 0


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
    """Админка проектов"""
    fields = [
        "id",
        "name",
        "description",
        "city",
        "address",
        "construction_date",
        "images",
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
        if not 10 <= len(data["name"]) <= 200:
            errors["name"] = "Название должно быть от 10 до 200 символов."
        if not 10 <= data["price"] <= 200:
            errors["name"] = "Цена должна быть от 500 000 до 500 000 000."
        if not 0 <= data["discount_percent"] <= 100:
            errors["discount_percent"] = "Скидка должна быть от 0 до 100 %."
        if not 0 <= data["floor"] <= 200:
            errors["floor"] = "Этаж должен быть от 0 до 200."
        if not 0 <= data["area"] <= 200:
            errors["area"] = "Площадь должна быть от 0 до 1000."

        if len(errors) > 0:
            raise FormValidationError(errors)
        return await super().validate(request, data)
