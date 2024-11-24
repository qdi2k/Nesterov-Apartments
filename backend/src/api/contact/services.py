from fastapi import HTTPException
from sqlalchemy import and_
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from starlette import status

from api.contact.schema import ContactManagerCreate
from core.enums import CallStatusEnum
from databases.models import CallUser


async def check_await_contact_user(
        session: AsyncSession, email: str, phone: str
):
    """Проверка на наличие записи с таким email или phone
     и status_completed == 'await'"""
    query = select(CallUser).where(
        and_(
            (CallUser.email == email) | (CallUser.phone == phone),
            CallUser.status_completed == CallStatusEnum.AWAIT
        )
    )
    result = await session.execute(query)
    existing_record = result.scalars().first()

    if existing_record:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Запись с таким `email` или `phone` уже существует"
                   + " и находится в статусе `await`")


async def create_new_data_contact_user(
        session: AsyncSession,
        data: ContactManagerCreate
):
    """Создание новой записи в БД о связи с пользователем"""
    data = CallUser(**data.dict())
    session.add(data)
    await session.commit()
    await session.refresh(data)
