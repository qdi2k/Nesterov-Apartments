from fastapi import HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from starlette import status

from app.api.schema.contact import (
    ResponseGetListQuestion,
    ItemFromGetQuestion,
    RequestCreateQuestion,
    ResponseCreateQuestion,
    RequestCreateApartmentVisit,
    ResponseCreateApartmentVisit,
)
from app.crud.apartment_visit import (
    get_visit_with_phone_and_accept_false, create_visit_user
)
from app.crud.question import (
    get_list_questions_with_answer,
    create_question_user,
    get_question_with_phone_and_accept_false,
)
from app.services.apartment import get_apartment_by_id_or_404


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


async def create_apartment_visit_and_get_response(
        db: AsyncSession, apartment_id: int, data: RequestCreateApartmentVisit
):
    """Создание записи на просмотр квартиры."""
    await get_apartment_by_id_or_404(db=db, apartment_id=apartment_id)
    old_visit = await get_visit_with_phone_and_accept_false(db=db, phone=data.phone)
    if old_visit:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail=f"У вас уже существует запись на просмотр квартиры."
        )
    new_visit = await create_visit_user(db=db, apartment_id=apartment_id, data=data)
    return ResponseCreateApartmentVisit.model_validate(new_visit)
