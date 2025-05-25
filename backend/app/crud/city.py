from typing import Sequence

from sqlalchemy import select, func
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.models import City, Project


async def get_cities_with_projects(db: AsyncSession) -> Sequence[City]:
    """Получает список городов, у которых есть хотя бы один проект."""
    async with db as session:
        result = await session.execute(
            select(City)
            .join(City.projects)
            .group_by(City.id)
            .having(func.count(Project.id) > 0)
        )
    return result.scalars().all()
