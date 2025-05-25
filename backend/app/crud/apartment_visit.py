from typing import Optional

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.schema.contact import RequestCreateApartmentVisit
from app.db.models import ApartmentVisit


async def get_visit_with_phone_and_accept_false(
        db: AsyncSession, phone: str
) -> Optional[ApartmentVisit]:
    """Получает неотвеченный вопрос пользователя."""
    async with db as session:
        result = await session.execute(
            select(ApartmentVisit)
            .where(
                ApartmentVisit.accept == False,
                ApartmentVisit.phone == phone,
            )
            .order_by(ApartmentVisit.id.desc())
            .limit(1)
        )
    return result.one_or_none()


async def create_visit_user(
        db: AsyncSession, apartment_id: int, data: RequestCreateApartmentVisit
) -> ApartmentVisit:
    """Создает запись с телефоном, именем, квартирой и опционально временем
    визита посещения квартиры."""
    async with db as session:
        visit = ApartmentVisit(
            owner=data.name_owner,
            phone=data.phone,
            date_visit=data.date_visit,
            apartment_id=apartment_id,
        )
        session.add(visit)
        await session.commit()
        await session.refresh(visit)
    return visit
