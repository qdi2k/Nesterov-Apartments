import uuid
import os

from fastapi import UploadFile, HTTPException
from markupsafe import Markup
from starlette import status

LAST_SPLIT_FILE_PATH = -1
FILE_EXTENSION_SPLIT = 1
IMAGE_EXTENSIONS = [
    "bmp", "jpg", "jpeg", "png", "gif", "tiff", "tif", "webp", "ppm", "pgm",
    "pbm", "xbm", "ico", "raw", "hdr", "exr", "dds", "psd"
]


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


def convert_url_to_html(href: str, value: str):
    """Конвертация url в ссылку для html."""
    return Markup(f'<a href="{href}">{value}</a>')
