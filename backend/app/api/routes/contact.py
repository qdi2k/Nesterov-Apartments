from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from starlette import status

from app.api.exeptions import NotFountError, ForbiddenError
from app.api.schema.contact import (
    ResponseGetListQuestion,
    RequestCreateQuestion,
    ResponseCreateQuestion,
    RequestCreateApartmentVisit,
    ResponseCreateApartmentVisit,
)
from app.db.database import get_async_session
from app.services.contact import (
    get_list_question_and_answer_or_404,
    create_question_and_get_response,
    create_apartment_visit_and_get_response,
)

contact_router = APIRouter(prefix="/contact", tags=["Contact"])


@contact_router.get(
    path="/questions",
    response_model=ResponseGetListQuestion,
    status_code=status.HTTP_200_OK,
    responses={**NotFountError().get_error()},
)
async def get_list_questions(
        db: AsyncSession = Depends(get_async_session),
) -> ResponseGetListQuestion:
    """
    ## Получить список вопросов и ответов.

    Возвращает только те вопросы, у которых стоит флаг add_site и есть ответ.

    ---
    #### Возвращает список объектов состоящий из следующих элементов:
    * `question` - вопрос;

    * `answer` - ответ на вопрос.
    """
    return await get_list_question_and_answer_or_404(db=db)


@contact_router.post(
    path="/questions",
    response_model=ResponseCreateQuestion,
    status_code=status.HTTP_201_CREATED,
    responses={**ForbiddenError().get_error()}
)
async def create_question(
        data: RequestCreateQuestion,
        db: AsyncSession = Depends(get_async_session),
) -> ResponseCreateQuestion:
    """
    ## Остались вопросы.

    Эндпоинт позволяет клиенту задать вопрос, чтобы с ним связались.
    Если статус вопроса accept значится как неотвеченный,
    то доступ будет заблокирован

    ---
    #### Принимает на вход следующие параметры:
    * `name_owner` - имя клиента;

    * `phone` - номер телефона клиента;

    * `question` - (опциональный) вопрос клиента.

    #### Возвращает объект состоящий из следующих элементов:
    * `id` - id вопроса;

    * `created_at` - дата создания вопроса;

    * `owner` - имя клиента;

    * `phone` - номер телефона клиента.
    """
    return await create_question_and_get_response(db=db, data=data)


@contact_router.post(
    path="/apartments/{apartment_id}",
    response_model=ResponseCreateApartmentVisit,
    status_code=status.HTTP_201_CREATED,
    responses={**NotFountError().get_error(), **ForbiddenError().get_error()}
)
async def create_apartment_visit(
        apartment_id: int,
        data: RequestCreateApartmentVisit,
        db: AsyncSession = Depends(get_async_session),
) -> ResponseCreateApartmentVisit:
    """
    ## Записаться на просмотр квартиры.

    ---
    #### Принимает на вход следующие параметры:
    * `name_owner` - имя клиента;

    * `phone` - номер телефона клиента;

    * `date_visit` - (опциональный) дата визита.

    #### Возвращает объект состоящий из следующих элементов:
    * `id` - id записи на посещение;

    * `created_at` - дата создания записи на посещение;

    * `owner` - имя клиента;

    * `phone` - номер телефона клиента;

    * `date_visit` - дата посещения;

    * `apartment_id` - id квартиры.
    """
    return await create_apartment_visit_and_get_response(
        db=db, apartment_id=apartment_id, data=data
    )
