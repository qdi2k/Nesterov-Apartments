from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from starlette import status

from app.api.exeptions import NotFountError
from app.api.schema.contact import ResponseGetListQuestion
from app.db.database import get_async_session
from app.services.contact import get_list_question_and_answer_or_404

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

    ---
    #### Возвращает список объектов состоящий из следующих элементов:
    * `question` - вопрос;

    * `answer` - ответ на вопрос.
    """
    return await get_list_question_and_answer_or_404(db=db)
