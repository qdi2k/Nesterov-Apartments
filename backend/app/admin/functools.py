import os
import re
import uuid
from typing import Dict, Any

from fastapi import UploadFile, HTTPException
from fastapi_storages import S3Storage
from markupsafe import Markup
from starlette import status

from app.core.config import apartments_storage, JINJA_ENV

LAST_SPLIT_FILE_PATH = -1
FILE_EXTENSION_SPLIT = 1
FIRST_ELEM_TUPLE_IMAGE = 0
IMAGE_EXTENSIONS = [
    "bmp", "jpg", "jpeg", "png", "gif", "tiff", "tif", "webp", "ppm", "pgm",
    "pbm", "xbm", "ico", "raw", "hdr", "exr", "dds", "psd"
]


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


def generate_unique_filename(file: UploadFile) -> str:
    """Генерация уникального имени с помощью uuid."""
    file_extension = os.path.splitext(file.filename)[FILE_EXTENSION_SPLIT]
    return f"{uuid.uuid4()}{file_extension}"


def check_image_extension(filename: str) -> None:
    """Проверка расширения изображения."""
    file_extension = filename.split('.')[LAST_SPLIT_FILE_PATH].lower()
    if file_extension not in IMAGE_EXTENSIONS:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail=(
                f"Неподдерживаемое расширение файла: {file_extension}."
                f" Разрешённые расширения: {', '.join(IMAGE_EXTENSIONS)}"
            )
        )


def validate_phone(phone: str) -> bool:
    """Строгая валидация номера телефона."""
    return bool(re.fullmatch(r'^(\+7|8)\d{10}$', phone))
