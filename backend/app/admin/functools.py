from typing import Optional, Sequence, Dict, Any

from jinja2 import Environment, FileSystemLoader
from markupsafe import Markup
from sqlalchemy import select
from starlette_admin import RequestAction, BaseField, ImageField
from starlette.requests import Request

from app.core.config import apartments_storage, TEMPLATES_DIR
from app.db.database import sync_engine
from app.db.models import ApartmentImage
from app.utils.functools import check_image_extension, generate_unique_filename

JINJA_ENV = Environment(loader=FileSystemLoader(TEMPLATES_DIR))
FIRST_ELEM_TUPLE_IMAGE = 0


async def process_image_upload(data: Dict[str, Any], obj: Any) -> None:
    """Обрабатывает загрузку изображения и сохраняет в хранилище."""
    image = data.get('image')[FIRST_ELEM_TUPLE_IMAGE]
    if image:
        check_image_extension(filename=image.filename)
        image.filename = generate_unique_filename(file=image)
        apartments_storage.write(image.file, image.filename)
        obj.image = image.filename


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
            break
        else:
            result.append(field)
    return result


def get_help_text_for_image(
        request: Request, action: RequestAction
) -> Optional[Markup]:
    """Получить подсказку под изображение."""
    if action == RequestAction.EDIT or action == RequestAction.DETAIL:
        obj_id = (
                request.path_params.get('pk') or request.path_params.get('id')
        )
        if obj_id:
            image_name = _get_image_by_pk(int(obj_id))
            return render_help_text_for_image(image_name)
    return None


def _get_image_by_pk(pk: int) -> str:
    """Получает изображение по ID."""
    with sync_engine.connect() as conn:
        result = conn.execute(
            select(ApartmentImage.image)
            .where(ApartmentImage.id == pk)
        ).scalar()
        return result


def render_help_text_for_image(image: str) -> Markup:
    """Рендер подсказки под изображением."""
    url = apartments_storage.get_path(image)
    template = JINJA_ENV.get_template("image_block.html")
    html = template.render(url=url, filename=image)
    return Markup(html)
