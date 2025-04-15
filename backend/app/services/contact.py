from fastapi import HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from starlette import status

from app.api.schema.contact import (
    ResponseGetListQuestion,
    ItemFromGetQuestion,
    RequestCreateQuestion,
    ResponseCreateQuestion,
)
from app.crud.contact import (
    get_list_questions_with_answer,
    create_question_user,
    get_question_with_phone_and_accept_false,
)


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


async def create_question_and_get_response(
        db: AsyncSession, data: RequestCreateQuestion
) -> ResponseCreateQuestion:
    """Создание вопроса пользователя."""
    old_question = await get_question_with_phone_and_accept_false(
        db=db, phone=data.phone
    )
    if old_question:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail=(
                f"Ваше обращение ещё не закрыто."
                f" Дождитесь когда менеджер свяжется с вами."
            )
        )
    new_question = await create_question_user(db=db, data=data)
    return ResponseCreateQuestion.model_validate(new_question)
