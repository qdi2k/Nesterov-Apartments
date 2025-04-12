from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from starlette import status

from app.api.exeptions import NotFountError
from app.api.schema.city import ResponseListCity
from app.db.database import get_async_session
from app.services.city import get_cities_or_404

city_router = APIRouter(prefix="/city", tags=["City"])


@city_router.get(
    path="",
    response_model=ResponseListCity,
    status_code=status.HTTP_200_OK,
    responses={**NotFountError().get_error()},
)
async def get_list_city(
        db: AsyncSession = Depends(get_async_session),
) -> ResponseListCity:
    """
    ## Получение городов.

    #### Возвращает список городов состоящих из следующих элементов:
    * `id` - id города;

    * `name` - название города;
    """
    return await get_cities_or_404(db=db)
