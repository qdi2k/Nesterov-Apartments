from typing import Dict, Any, Sequence

from starlette_admin import RequestAction, BaseField
from starlette.requests import Request
from starlette_admin.contrib.sqla import ModelView
from starlette_admin.helpers import extract_fields

from app.admin.functools import (
    prepare_image_field, render_help_text_for_image, process_image_upload,
)

FIRST_ELEM_TUPLE_IMAGE = 0


class ApartmentImageView(ModelView):
    fields = [
        "id",
        "name",
        "image",
    ]

    def get_fields_list(
            self,
            request: Request,
            action: RequestAction = RequestAction.LIST,
    ) -> Sequence[BaseField]:
        """Переопределяем метод для замены поля image на FileField в формах"""
        base_fields = super().get_fields_list(request, action)
        if action in (RequestAction.CREATE, RequestAction.EDIT):
            base_fields = prepare_image_field(base_fields, request, action)
        return extract_fields(base_fields, action)

    async def before_create(
            self, request: Request, data: Dict[str, Any], obj: Any
    ) -> None:
        """Перед созданием записи сериализует изображение."""
        await process_image_upload(data, obj)

    async def before_edit(
            self, request: Request, data: Dict[str, Any], obj: Any
    ) -> None:
        """Перед изменением записи сериализует изображение."""
        await process_image_upload(data, obj)

    async def serialize_field_value(
            self, value: Any, field: BaseField, action: RequestAction,
            request: Request
    ) -> Any:
        """Форматируем значение поля image для html рендера."""
        serialized_value = await super().serialize_field_value(
            value, field, action, request
        )
        if field.name == "image" and value and action == RequestAction.DETAIL:
            return render_help_text_for_image(value)
        return serialized_value


class ProjectView(ModelView):
    fields = [
        "id",
        "name",
        "description",
        "city",
        "address",
        "construction_date",
    ]


class ApartmentView(ModelView):
    """Админка для квартир"""
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
