from fastapi import HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from starlette import status

from app.api.schema.city import ResponseListCity, CitySchema
from app.crud.city import get_cities


async def get_cities_or_404(db: AsyncSession) -> ResponseListCity:
    """Получить список городов или вернуть 404."""
    cities = await get_cities(db=db)
    if not cities:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Города не найдены."
        )
    result = ResponseListCity(
        cities=[CitySchema.model_validate(city) for city in cities]
    )
    return result
