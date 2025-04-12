from typing import Sequence, Optional

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.models import Project, City


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


async def get_project_by_id(db: AsyncSession, project_id: int) -> Optional[Project]:
    """Получает проект по его id."""
    async with db as session:
        result = await session.execute(
            select(Project)
            .where(Project.id == project_id)
        )
    return result.scalars().first()
