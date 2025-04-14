from typing import Sequence

from sqlalchemy import select, func
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.models import Question


async def get_list_questions_with_answer(db: AsyncSession) -> Sequence[Question]:
    """Получает список вопросов, у которых есть ответ и флаг `add_site`."""
    async with db as session:
        result = await session.execute(
            select(Question)
            .where(
                Question.answer.is_not(None),
                Question.answer != "",
                Question.add_site.is_(True)
            )
            .order_by(Question.id.desc())
        )
    return result.scalars().all()
