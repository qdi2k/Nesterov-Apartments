from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from starlette import status

from api.contact.schema import ContactManagerCreate, ContactManagerResponse
from api.contact.services import (check_await_contact_user,
                                  create_new_data_contact_user)
from core.exeptions import ErrorDescriptions
from databases.sessions import get_session

TAGS = ["Contact"]
contact_router = APIRouter(tags=TAGS)


@contact_router.post(
    status_code=status.HTTP_201_CREATED,
    path="/manager", response_model=ContactManagerResponse,
    summary="Create new registration contact with manager",
    response_description="The created registration contact",
    responses={
        status.HTTP_404_NOT_FOUND: ErrorDescriptions.bad_request_entity(),
    }
)
async def contact_manager(data: ContactManagerCreate,
                          session: AsyncSession = Depends(get_session)):
    """
    ## Связаться с менеджером
    #### Входные параметры (_необходимо указать одно из опциональных полей_):
    `name` - Имя пользователя (_обязательное_);

    `phone` - Номер телефона пользователя (_опционально_);

    `email` - Электронная почта пользователя (_опционально_).

    На выходе создается запись в БД, для связи менеджера с пользователем
    """
    await check_await_contact_user(session=session, email=data.email,
                                   phone=data.phone)
    await create_new_data_contact_user(session=session, data=data)
    return ContactManagerResponse()
