from dataclasses import dataclass
from typing import Optional, Sequence, List, Any

from sqlalchemy import select, and_, or_

from app.db.models import Apartment
from app.repositories.base_repository import Repository


@dataclass
class ApartmentFilters:
    project_id: int
    rooms_count: Optional[List[int]] = None
    min_area: Optional[float] = None
    max_area: Optional[float] = None
    min_floor: Optional[int] = None
    max_floor: Optional[int] = None
    min_price: Optional[float] = None
    max_price: Optional[float] = None


class ApartmentRepository(Repository):
    """
    Репозиторий для работы с моделью Apartment.
    """

    model = Apartment

    async def find_by_filters(self, **filters) -> Sequence[Apartment]:
        """Возвращает все квартиры, соответствующие заданным фильтрам."""
        filter_conditions = self._build_filters(ApartmentFilters(**filters))
        stmt = select(self.model).where(and_(*filter_conditions))
        result = await self.session.execute(stmt)
        return result.scalars().all()

    def _build_filters(self, filters: ApartmentFilters) -> List[Any]:
        """Создает фильтры для запроса."""
        filter_conditions = [self.model.project_id == filters.project_id]

        if filters.rooms_count:
            filter_conditions.append(or_(
                self.model.rooms_count == room for room in filters.rooms_count
            ))

        if filters.min_area is not None:
            filter_conditions.append(self.model.area >= filters.min_area)
        if filters.max_area is not None:
            filter_conditions.append(self.model.area <= filters.max_area)

        if filters.min_floor is not None:
            filter_conditions.append(self.model.floor >= filters.min_floor)
        if filters.max_floor is not None:
            filter_conditions.append(self.model.floor <= filters.max_floor)

        if filters.min_price is not None:
            filter_conditions.append(self.model.price >= filters.min_price)
        if filters.max_price is not None:
            filter_conditions.append(self.model.price <= filters.max_price)

        return filter_conditions
