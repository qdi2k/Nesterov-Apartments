import uuid
import os

from fastapi import UploadFile


def generate_unique_filename(file: UploadFile) -> str:
    """Генерация уникального имени с помощью uuid."""
    file_extension = os.path.splitext(file.filename)[1]
    unique_filename = f"{uuid.uuid4()}{file_extension}"
    return unique_filename
