from abc import ABC
from typing import Dict, Any, Sequence, Optional

from fastapi_storages import S3Storage
from markupsafe import Markup
from sqlalchemy import select
from starlette_admin import RequestAction, BaseField, ImageField
from starlette.requests import Request
from starlette_admin.contrib.sqla import ModelView
from starlette_admin.helpers import extract_fields

from app.admin.functools import (
    process_image_upload, render_help_text_for_image,
)
from app.core.config import apartments_storage
from app.db.database import sync_engine

FIRST_ELEM_TUPLE_IMAGE = 0


class ImageView(ModelView, ABC):
    """
    Глобальная модель картинок для админ-панели, связка с S3-хранилищем.
    """
    storage: S3Storage = apartments_storage
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
            base_fields = self.prepare_image_field(base_fields, request, action)
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
            return render_help_text_for_image(self.storage, value)
        return serialized_value

    def prepare_image_field(
            self,
            base_fields: Sequence[BaseField],
            request: Request,
            action: RequestAction
    ) -> Sequence[BaseField]:
        """Подготавливает изображение для форм."""
        result = list()
        for field in base_fields:
            if field.name == "image":
                new_field = ImageField("image")
                new_field.help_text = self.get_help_text_for_image(request, action)
                result.append(new_field)
                break
            else:
                result.append(field)
        return result

    def get_help_text_for_image(
            self, request: Request, action: RequestAction
    ) -> Optional[Markup]:
        """Получить подсказку под изображение."""
        if action == RequestAction.EDIT or action == RequestAction.DETAIL:
            obj_id = (
                request.path_params.get('pk') or request.path_params.get('id')
            )
            if obj_id:
                image_name = self._get_image_by_pk(int(obj_id))
                if image_name:
                    return render_help_text_for_image(self.storage, image_name)
        return None

    def _get_image_by_pk(self, pk: int) -> str:
        """Получает изображение по ID."""
        with sync_engine.connect() as conn:
            result = conn.execute(
                select(self.model.image)
                .where(self.model.id == pk)
            ).scalar()
            return result
