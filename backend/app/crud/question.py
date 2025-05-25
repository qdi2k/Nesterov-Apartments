from typing import Sequence, Optional

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.schema.contact import RequestCreateQuestion
from app.db.models import Question


async def get_list_questions_with_answer(db: AsyncSession) -> Sequence[Question]:
    """Получает список вопросов, у которых есть вопрос, ответ и флаг `add_site`."""
    async with db as session:
        result = await session.execute(
            select(Question)
            .where(
                Question.answer.is_not(None),
                Question.answer != "",
                Question.question.is_not(None),
                Question.question != "",
                Question.add_site.is_(True)
            )
            .order_by(Question.id.desc())
        )
    return result.scalars().all()


async def create_question_user(
        db: AsyncSession, data: RequestCreateQuestion
) -> Question:
    """Создает запись с телефоном, именем и опционально вопросом пользователя"""
    async with db as session:
        question = Question(
            owner=data.name_owner,
            phone=data.phone,
            question=data.question
        )
        session.add(question)
        await session.commit()
        await session.refresh(question)
    return question


async def get_question_with_phone_and_accept_false(
        db: AsyncSession, phone: str
) -> Optional[Question]:
    """Получает неотвеченный вопрос пользователя."""
    async with db as session:
        result = await session.execute(
            select(Question)
            .where(
                Question.accept == False,
                Question.phone == phone,
            )
            .order_by(Question.id.desc())
            .limit(1)
        )
    return result.one_or_none()
