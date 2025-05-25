from typing import List, Sequence

from fastapi import HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from starlette import status

from app.api.schema.apartment import (
    RequestSearchApartment,
    ResponseSearchApartment,
    ItemSearchApartment,
    ResponseGetApartment,
)
from app.api.schema.project import ProjectFieldSearch
from app.crud.apartment import get_list_apartments_for_search, get_apartment_by_id
from app.db.models import Apartment
from app.services.project import (
    get_projects_by_city_and_ids_or_404, get_projects_id_by_city_or_404,
)


async def get_search_data_apartments(
        db: AsyncSession, data: RequestSearchApartment
) -> ResponseSearchApartment:
    """Поиск квартир."""
    project_ids = await _get_project_ids_for_search(
        db=db, city=data.city, project_ids=data.project_ids
    )
    apartments = await get_list_apartments_for_search(
        db=db, data=data, project_ids=project_ids
    )
    if not apartments:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Квартир по вашему запросу не найдено!"
        )
    return await _format_to_answer_for_search(apartments)


async def get_apartment_by_id_or_404(
        db: AsyncSession, apartment_id: int
) -> ResponseGetApartment:
    """Получить информацию о квартире по её id или вернуть 404."""
    apartment = await get_apartment_by_id(db=db, apartment_id=apartment_id)
    if not apartment:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Проект с project_id={apartment_id} не найден."
        )
    return ResponseGetApartment.model_validate(apartment)


async def _get_project_ids_for_search(
        db: AsyncSession, city: str, project_ids: List[int]
) -> List[int]:
    """Получение списка id проектов для поиска квартир."""
    if project_ids:
        return await get_projects_by_city_and_ids_or_404(
            db=db, city=city, project_ids=project_ids
        )
    return await get_projects_id_by_city_or_404(db=db, city=city)


async def _format_to_answer_for_search(apartments: Sequence[Apartment]):
    """Форматирование результата для выдачи."""
    unique_project = dict()
    list_apartment = []
    for apartment in apartments:
        unique_project[apartment.project_id] = ProjectFieldSearch(
            project_id=apartment.project_id,
            project_name=apartment.project.name,
            quarter=apartment.project.construction_quarter,
            year=apartment.project.construction_year
        )
        list_apartment.append(ItemSearchApartment.model_validate(apartment))
    result = ResponseSearchApartment(
        projects=[unique_project[proj] for proj in unique_project],
        apartments=list_apartment,
    )
    return result
