from typing import List

from fastapi import HTTPException
from starlette import status

from app.api.schema.apartment import (RequestSearchApartment,
                                      ResponseSearchApartment)
from app.utils.unitofwork import IUnitOfWork


class ApartmentService:
    """
    Бизнес логика подбора квартир.
    """

    def __init__(self, uow: IUnitOfWork):
        self.uow = uow


    async def search_apartments(
            self, data: RequestSearchApartment
    ) -> List[ResponseSearchApartment]:
        """Поиск квартир."""
        zone_id = await self._get_zone_id_or_404(
            city=data.city, district=data.district
        )
        return await self._get_apartments_or_404(
            zone_id=zone_id, data=data
        )

    async def _get_zone_id_or_404(
            self, city: str, district: str
    ) -> int:
        """Получить zone_id и проверка существования зоны в БД."""
        async with self.uow:
            zone = await self.uow.zone.get_one(city=city, district=district)
            if not zone:
                raise HTTPException(
                    status_code=status.HTTP_404_NOT_FOUND,
                    detail=f"Текущая зона {city} - {district} не найдена"
                )
            return zone.id

    async def _get_apartments_or_404(
            self, zone_id: int, data: RequestSearchApartment
    ) -> List[ResponseSearchApartment]:
        """Проверка существования зоны в БД."""
        async with self.uow:
            apartments = await self.uow.apartment.find_by_filters(
                zone_id=zone_id,
                rooms_count=data.rooms_count,
                min_area=data.min_area,
                max_area=data.max_area,
                min_floor=data.min_floor,
                max_floor=data.max_floor,
                min_price=data.min_price,
                max_price=data.max_price,
            )
            if not apartments:
                raise HTTPException(
                    status_code=status.HTTP_404_NOT_FOUND,
                    detail=f"Квартиры по вашему запросу не найдены!"
                )
            return [
                ResponseSearchApartment.model_validate(apartment)
                for apartment in apartments
            ]
