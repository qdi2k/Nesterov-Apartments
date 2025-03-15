import os

from fastapi import APIRouter, HTTPException
from fastapi.responses import FileResponse
from starlette import status

from app.core.config import APARTMENTS_IMAGE

image_router = APIRouter(prefix="/files", tags=["images"])


@image_router.get("/apartment/{filename}")
async def get_image_apartment(filename: str):
    """
    ## Получить картинку квартиры.
    """
    file_path = APARTMENTS_IMAGE.get_path(filename)
    if not os.path.exists(file_path):
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Файл '{filename}' не найден!"
        )

    return FileResponse(file_path)
