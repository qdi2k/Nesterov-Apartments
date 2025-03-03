from fastapi import APIRouter, Depends
from starlette import status

from app.api.schema.apartment import RequestSearchApartment
from app.utils.unitofwork import IUnitOfWork, UnitOfWork
from app.services.apartment import ApartmentService

apartment_router = APIRouter(prefix="/apartment", tags=["apartment"])


async def get_apartment_service(
        uow: IUnitOfWork = Depends(UnitOfWork)
) -> ApartmentService:
    """
    Создает и возвращает экземпляр сервиса аутентификации пользователей.
    """
    return ApartmentService(uow)


@apartment_router.post(
    path="/search/",
    status_code=status.HTTP_200_OK,
)
async def search(
        data: RequestSearchApartment,
        service: ApartmentService = Depends(get_apartment_service)
):
    """
    ## Поиск квартир
    """
    result = await service.search_apartments(data=data)
    return result
