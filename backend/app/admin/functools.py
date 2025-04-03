from typing import Optional, Sequence

from jinja2 import Environment, FileSystemLoader
from markupsafe import Markup
from sqlalchemy import select
from starlette_admin import RequestAction, BaseField, ImageField
from starlette.requests import Request

from app.core.config import apartments_storage, TEMPLATES_DIR
from app.db.database import sync_engine
from app.db.models import ApartmentImage

JINJA_ENV = Environment(loader=FileSystemLoader(TEMPLATES_DIR))


def prepare_image_field(
        base_fields: Sequence[BaseField], request: Request,
        action: RequestAction
) -> Sequence[BaseField]:
    """Подготавливает изображение для форм."""
    result = list()
    for field in base_fields:
        if field.name == "image":
            new_field = ImageField("image")
            new_field.help_text = get_help_text_for_image(request, action)
            result.append(new_field)
        else:
            result.append(field)
    return result


def get_help_text_for_image(
        request: Request, action: RequestAction
) -> Optional[Markup]:
    """Получить подсказку под изображение."""
    if action == RequestAction.EDIT:
        obj_id = (
                request.path_params.get('pk') or request.path_params.get('id')
        )
        if obj_id:
            image_name = _get_image_by_pk(int(obj_id))
            return _render_help_text_for_image(image_name)
    return None


def _get_image_by_pk(pk: int) -> str:
    """Получает изображение по ID."""
    with sync_engine.connect() as conn:
        result = conn.execute(
            select(ApartmentImage.image)
            .where(ApartmentImage.id == pk)
        ).scalar()
        return result


def _render_help_text_for_image(image: str) -> Markup:
    """Рендер подсказки под изображением."""
    url = apartments_storage.get_path(image)
    template = JINJA_ENV.get_template("image_edit.html")
    html = template.render(url=url, filename=image)
    return Markup(html)
