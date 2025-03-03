from typing import Optional, Sequence, List

from sqlalchemy import select, and_, or_

from app.db.models import Apartment
from app.repositories.base_repository import Repository


class ApartmentRepository(Repository):
    """
    Репозиторий для работы с моделью Apartment.
    """

    model = Apartment

    async def find_by_filters(
            self, zone_id: int,
            rooms_count: Optional[List[int]] = None,
            min_area: Optional[float] = None,
            max_area: Optional[float] = None,
            min_floor: Optional[int] = None,
            max_floor: Optional[int] = None,
            min_price: Optional[float] = None,
            max_price: Optional[float] = None,
    ) -> Sequence[Apartment]:
        """Возвращает все квартиры, соответствующие заданным фильтрам."""
        filters = [self.model.zone_id == zone_id]

        if rooms_count:
            filters.append(
                or_(self.model.rooms_count == room for room in rooms_count)
            )

        if min_area:
            filters.append(self.model.area >= min_area)
        if max_area:
            filters.append(self.model.area <= max_area)

        if min_floor:
            filters.append(self.model.floor >= min_floor)
        if max_floor:
            filters.append(self.model.floor <= max_floor)

        if min_price:
            filters.append(self.model.price >= min_price)
        if max_price:
            filters.append(self.model.price <= max_price)

        stmt = select(self.model).where(and_(*filters))
        result = await self.session.execute(stmt)
        return result.scalars().all()
