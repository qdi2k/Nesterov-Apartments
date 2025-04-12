from typing import Sequence

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.models import City


async def get_cities(db: AsyncSession) -> Sequence[City]:
    """Получает список городов."""
    async with db as session:
        result = await session.execute(select(City))
    return result.scalars().all()
