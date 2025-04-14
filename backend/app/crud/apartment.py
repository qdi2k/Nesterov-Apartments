import logging
from typing import Sequence, Any, List, Optional

from sqlalchemy import select, and_, Select, or_, case
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.schema.apartment import RequestSearchApartment
from app.core.enums import SortSearchFilter, CountRooms
from app.db.models import Apartment, Project


logger = logging.getLogger()


async def get_list_apartments_for_search(
    db: AsyncSession, data: RequestSearchApartment, project_ids: List[int],
) -> Sequence[Apartment]:
    """Поиск квартир по заданным параметрам."""
    query = (
        select(Apartment)
        .join(Project)
        .where(
            Apartment.project_id.in_(project_ids),
            Apartment.on_sale == data.on_sale
        )
    )
    query = _get_filters_for_search(query, data=data)
    if data.sort_filter:
        query = _apply_sorting(query, sort_filter=data.sort_filter)

    logger.debug(f"Запрос на поиск квартир:\n{query}")
    result = await db.execute(query)
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
    if data.dates:
        date_conditions = []
        for date_item in data.dates:
            date_conditions.append(
                and_(
                    Project.construction_quarter == date_item.quarter,
                    Project.construction_year == date_item.year
                )
            )
        query = query.where(or_(*date_conditions))

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


def _apply_sorting(query: Select[Any], sort_filter: SortSearchFilter) -> Select:
    """Применяет сортировку в соответствии с выбранным фильтром."""
    if sort_filter == SortSearchFilter.LOW_FLOOR:
        return query.order_by(Apartment.floor.asc())
    if sort_filter == SortSearchFilter.HIGH_FLOOR:
        return query.order_by(Apartment.floor.desc())

    if sort_filter == SortSearchFilter.SMALL_AREA:
        return query.order_by(Apartment.area.asc())
    if sort_filter == SortSearchFilter.LARGE_AREA:
        return query.order_by(Apartment.area.desc())

    if sort_filter == SortSearchFilter.LOW_PRICE:
        total_price_expr = Apartment.price * (1 - Apartment.discount_percent / 100.0)
        return query.order_by(total_price_expr.asc())
    if sort_filter == SortSearchFilter.HIGH_PRICE:
        total_price_expr = Apartment.price * (1 - Apartment.discount_percent / 100.0)
        return query.order_by(total_price_expr.desc())

    if sort_filter == SortSearchFilter.FEW_ROOMS:
        room_order = case(
            {
                CountRooms.STUDIO: 0,
                CountRooms.ONE: 1,
                CountRooms.TWO: 2,
                CountRooms.THREE: 3,
                CountRooms.FOUR: 4,
                CountRooms.FIVE: 5
            },
            value=Apartment.rooms_count
        )
        return query.order_by(room_order.asc())
    if sort_filter == SortSearchFilter.MANY_ROOMS:
        room_order = case(
            {
                CountRooms.STUDIO: 0,
                CountRooms.ONE: 1,
                CountRooms.TWO: 2,
                CountRooms.THREE: 3,
                CountRooms.FOUR: 4,
                CountRooms.FIVE: 5
            },
            value=Apartment.rooms_count
        )
        return query.order_by(room_order.desc())
    return query
