from typing import Dict, Any

from fastapi_storages import S3Storage
from markupsafe import Markup

from app.core.config import apartments_storage, JINJA_ENV
from app.utils.functools import check_image_extension, generate_unique_filename

FIRST_ELEM_TUPLE_IMAGE = 0


async def process_image_upload(data: Dict[str, Any], obj: Any) -> None:
    """Обрабатывает загрузку изображения и сохраняет в хранилище."""
    image = data.get('image')[FIRST_ELEM_TUPLE_IMAGE]
    if image:
        check_image_extension(filename=image.filename)
        image.filename = generate_unique_filename(file=image)
        apartments_storage.write(image.file, image.filename)
        obj.image = image.filename


def render_help_text_for_image(storage: S3Storage, image: str) -> Markup:
    """Рендер подсказки под изображением."""
    url = storage.get_path(image)
    template = JINJA_ENV.get_template("image_block.html")
    html = template.render(url=url, filename=image)
    return Markup(html)
