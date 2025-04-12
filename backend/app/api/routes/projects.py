from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from starlette import status

from app.api.exeptions import NotFountError
from app.api.schema.project import ResponseListProjectsByCity, ResponseProject
from app.db.database import get_async_session
from app.services.project import (
    get_projects_by_city_or_404, get_project_by_id_or_404
)

project_router = APIRouter(prefix="/projects", tags=["Project"])


@project_router.get(
    path="/city/{city}",
    response_model=ResponseListProjectsByCity,
    status_code=status.HTTP_200_OK,
    responses={**NotFountError().get_error()},
)
async def get_list_projects_by_city(
        city: str, db: AsyncSession = Depends(get_async_session),
) -> ResponseListProjectsByCity:
    """
    ## Получение проектов.

    Получает список проектов, существующих в передаваемом городе.

    ---
    #### Принимает на вход следующий параметр:
    * `city` - название города.

    #### Возвращает список проектов состоящих из следующих элементов:
    * `id` - id проекта;

    * `name` - название проекта;

    * `city` - название города;

    * `address` - адрес проекта;

    * `construction_date` - дата постройки;

    * `description` - описание проекта;

    * `images` - список картинок проекта.

    """
    return await get_projects_by_city_or_404(db=db, city=city)


@project_router.get(
    path="/{project_id}",
    response_model=ResponseProject,
    status_code=status.HTTP_200_OK,
    responses={**NotFountError().get_error()},
)
async def get_project(
        project_id: int, db: AsyncSession = Depends(get_async_session),
) -> ResponseProject:
    """
    ## Получение проектов.

    Получает данные о проекте, соответствующему передаваемому id.

    ---
    #### Принимает на вход следующий параметр:
    * `project_id` - id проекта.

    #### Возвращает объект состоящих из следующих элементов:
    * `id` - id проекта;

    * `name` - название проекта;

    * `city` - название города;

    * `address` - адрес проекта;

    * `construction_date` - дата постройки;

    * `description` - описание проекта;

    * `images` - список картинок проекта.
    """
    return await get_project_by_id_or_404(db=db, project_id=project_id)
