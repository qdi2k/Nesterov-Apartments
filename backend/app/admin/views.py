from typing import Dict, Any, Sequence

from starlette_admin import RequestAction, BaseField
from starlette.requests import Request
from starlette_admin.contrib.sqla import ModelView
from starlette_admin.helpers import extract_fields

from app.admin.functools import prepare_image_field
from app.core.config import apartments_storage
from app.utils.functools import check_image_extension, generate_unique_filename

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
        """Преобразует изображение"""
        image = data.get('image')[FIRST_ELEM_TUPLE_IMAGE]
        if image:
            check_image_extension(filename=image.filename)
            image.filename = generate_unique_filename(file=image)
            apartments_storage.write(image.file, image.filename)
            obj.image = image.filename
