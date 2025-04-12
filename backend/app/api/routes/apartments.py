from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from starlette import status

from app.api.exeptions import NotFountError
from app.api.schema.apartment import (
    RequestSearchApartment, ResponseSearchApartment, ResponseGetApartment
)
from app.db.database import get_async_session
from app.services.apartment import (
    get_search_data_apartments, get_apartment_by_id_or_404
)

apartment_router = APIRouter(prefix="/apartments", tags=["Apartment"])


@apartment_router.post(
    path="/search",
    response_model=ResponseSearchApartment,
    status_code=status.HTTP_200_OK,
    responses={**NotFountError().get_error()},
)
async def search(
        data: RequestSearchApartment,
        db: AsyncSession = Depends(get_async_session),
) -> ResponseSearchApartment:
    """
    ## Поиск квартир

    Получает список квартир, по переданным фильтрам.

    ---
    #### Принимает на вход следующий параметр:
    * `city` - название города;

    * `on_sale` - (опциональный) статус в продаже ли квартира;

    * `rooms_count` - (опциональный) список количества комнат квартиры;

    * `min_area` - (опциональный) минимальная площадь квартир;

    * `max_area` - (опциональный) максимальная площадь квартир;

    * `min_floor` - (опциональный) минимальная этаж квартир;

    * `max_floor` - (опциональный) максимальный этаж квартир;

    * `min_price` - (опциональный) минимальная цена квартир;

    * `max_price` - (опциональный) максимальная цена квартир.

    #### Возвращает список квартир состоящих из следующих элементов:
    * `id` - id квартиры;

    * `name` - название квартиры;

    * `project_name` - название проекта;

    * `construction_date` - дата постройки проекта;

    * `price` - цена квартиры;

    * `discount_percent` - скидка в процентах;

    * `rooms_count` - количество комнат;

    * `floor` - этаж квартиры;

    * `area` - площадь квартиры.

    * `image` - ссылка на картинку квартиры.
    """
    return await get_search_data_apartments(db=db, data=data)


@apartment_router.post(
    path="/{apartment_id}",
    response_model=ResponseGetApartment,
    status_code=status.HTTP_200_OK,
    responses={**NotFountError().get_error()},
)
async def get_apartment(
        apartment_id: int,
        db: AsyncSession = Depends(get_async_session),
) -> ResponseGetApartment:
    """
    ## Получение информации о квартире по id.

    ---

    #### Возвращает объект состоящий из следующих элементов:
    * `id` - id квартиры;

    * `name` - название квартиры;

    * `on_sale` - статус в продаже ли квартира;

    * `price` - цена квартиры;

    * `discount_percent` - скидка в процентах;

    * `rooms_count` - количество комнат;

    * `section` - секция квартиры;

    * `floor` - этаж квартиры;

    * `area` - площадь квартиры.

    * `image` - ссылка на картинку квартиры.

    * `project_id` - id проекта.
    """
    return await get_apartment_by_id_or_404(db=db, apartment_id=apartment_id)
