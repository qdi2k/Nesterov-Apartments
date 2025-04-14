from typing import Sequence, Optional, List

from sqlalchemy import select, and_
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.models import Project, City

FIRST_FIELD_FROM_ROW = 0


async def get_projects(db: AsyncSession) -> Sequence[Project]:
    """Получает список проектов."""
    async with db as session:
        result = await session.execute(select(Project))
    return result.scalars().all()


async def get_projects_by_city(db: AsyncSession, city: str) -> Sequence[Project]:
    """Получает список проектов по названию города."""
    async with db as session:
        result = await session.execute(
            select(Project)
            .join(Project.city)
            .where(City.name == city)
            .order_by(Project.id)
        )
    return result.scalars().all()


async def get_project_ids_by_city(db: AsyncSession, city: str) -> List[int]:
    """Получает список id проектов по названию города."""
    async with db as session:
        result = await session.execute(
            select(Project.id)
            .join(Project.city)
            .where(City.name == city)
            .order_by(Project.id)
        )
    return [row[FIRST_FIELD_FROM_ROW] for row in result.all()]


async def get_project_by_id(db: AsyncSession, project_id: int) -> Optional[Project]:
    """Получает проект по его id."""
    async with db as session:
        result = await session.execute(
            select(Project)
            .where(Project.id == project_id)
        )
    return result.scalars().first()


async def get_project_ids_by_city_and_ids(
        db: AsyncSession, city: str, project_ids: List[int]
) -> List[int]:
    """Получает список id проектов по названию города и списку id проектов."""
    if not project_ids:
        return []
    async with db as session:
        result = await session.execute(
            select(Project.id)
            .join(Project.city)
            .where(
                and_(
                    City.name == city,
                    Project.id.in_(project_ids)
                )
            )
            .order_by(Project.id)
        )
    return [row[FIRST_FIELD_FROM_ROW] for row in result.all()]


async def get_unique_construction_dates(db: AsyncSession) -> List[str]:
    """Получает список уникальных сроков сдачи проекта в формате `квартал год`."""
    async with db as session:
        result = await session.execute(
            select(
                Project.construction_quarter,
                Project.construction_year
            )
            .distinct()
            .order_by(
                Project.construction_year,
                Project.construction_quarter
            )
        )
    dates = [f"{quarter.value} {year}" for quarter, year in result.all()]
    return dates
