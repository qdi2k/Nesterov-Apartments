from typing import Sequence, Any, List, Optional

from sqlalchemy import select, and_, Select
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.schema.apartment import RequestSearchApartment
from app.db.models import Apartment


async def get_list_apartments_for_search(
    db: AsyncSession, data: RequestSearchApartment, project_ids: List[int],
) -> Sequence[Apartment]:
    """Поиск квартир по заданным параметрам."""
    query = select(Apartment).where(
        Apartment.project_id.in_(project_ids),
        Apartment.on_sale == data.on_sale
    )
    query = _get_filters_for_search(query, data)
    result = await db.execute(query.order_by(Apartment.price))
    return result.scalars().all()


async def get_apartment_by_id(
        db: AsyncSession, apartment_id: int
) -> Optional[Apartment]:
    """Получает квартиру по его id."""
    async with db as session:
        result = await session.execute(
            select(Apartment)
            .where(Apartment.id == apartment_id)
        )
    return result.scalars().first()


def _get_filters_for_search(
        query: Select[Any], data: RequestSearchApartment
) -> Select[Any]:
    """Получить фильтры для поиска квартир."""
    if data.exclude_id:
        query = query.where(Apartment.id != data.exclude_id)

    if data.rooms_count:
        query = query.where(Apartment.rooms_count.in_(data.rooms_count))

    query = _get_filter_by_area(
        query, min_area=data.min_area, max_area=data.max_area
    )
    query = _get_filter_by_floor(
        query, min_floor=data.min_floor, max_floor=data.max_floor
    )
    query = _get_filter_by_price(
        query, min_price=data.min_price, max_price=data.max_price
    )
    return query


def _get_filter_by_area(
        query: Select[Any], min_area: Optional[float], max_area: Optional[float]
) -> Select[Any]:
    """Получить фильтр по площади."""
    area_filters = []
    if min_area:
        area_filters.append(Apartment.area >= min_area)
    if max_area:
        area_filters.append(Apartment.area <= max_area)
    if area_filters:
        query = query.where(and_(*area_filters))
    return query


def _get_filter_by_floor(
        query: Select[Any], min_floor: Optional[float], max_floor: Optional[float]
) -> Select[Any]:
    """Получить фильтр по этажу."""
    floor_filters = []
    if min_floor:
        floor_filters.append(Apartment.floor >= min_floor)
    if max_floor:
        floor_filters.append(Apartment.floor <= max_floor)
    if floor_filters:
        query = query.where(and_(*floor_filters))
    return query


def _get_filter_by_price(
        query: Select[Any], min_price: Optional[int], max_price: Optional[int]
) -> Select[Any]:
    """Получить фильтр по цене (учитываем скидку если есть)."""
    price_filters = []
    if min_price:
        price_filters.append(
            Apartment.price * (1 - Apartment.discount_percent / 100) >= min_price
        )
    if max_price:
        price_filters.append(
            Apartment.price * (1 - Apartment.discount_percent / 100) <= max_price
        )
    if price_filters:
        query = query.where(and_(*price_filters))
    return query
