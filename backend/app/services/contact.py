from fastapi import HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from starlette import status

from app.api.schema.contact import ResponseGetListQuestion, ItemFromGetQuestion
from app.crud.contact import get_list_questions_with_answer


async def get_list_question_and_answer_or_404(
        db: AsyncSession
) -> ResponseGetListQuestion:
    """Получить список вопросов и ответов или вернуть 404."""
    questions = await get_list_questions_with_answer(db)
    if not questions:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"В текущей конфигурации нет вопросов."
        )
    result = ResponseGetListQuestion(
        questions=[
            ItemFromGetQuestion(question=ques.question, answer=ques.answer)
            for ques in questions
        ]
    )
    return result
