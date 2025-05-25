from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from starlette import status

from app.api.exceptions import NotFountError
from app.api.schema.project import (
    ResponseListProjects, ResponseProject, ResponseUniqueDateProject
)
from app.db.database import get_async_session
from app.services.project import (
    get_projects_by_city_or_404,
    get_project_by_id_or_404,
    get_projects_or_404,
    get_unique_construction_dates_or_404
)

project_router = APIRouter(prefix="/projects", tags=["Project"])


@project_router.get(
    path="",
    response_model=ResponseListProjects,
    status_code=status.HTTP_200_OK,
    responses={**NotFountError().get_error()},
)
async def get_list_projects(
        db: AsyncSession = Depends(get_async_session),
) -> ResponseListProjects:
    """
    ## Получение списка проектов.

    ---
    #### Возвращает список проектов состоящих из следующих элементов:
    * `id` - id проекта;

    * `name` - название проекта;

    * `city` - название города;

    * `address` - адрес проекта;

    * `construction_year` - год постройки;

    * `construction_quarter` - квартал постройки;

    * `description` - описание проекта;

    * `images` - список картинок проекта.
    """
    return await get_projects_or_404(db=db)


@project_router.get(
    path="/city/{city_name}",
    response_model=ResponseListProjects,
    status_code=status.HTTP_200_OK,
    responses={**NotFountError().get_error()},
)
async def get_list_projects_by_city(
        city_name: str, db: AsyncSession = Depends(get_async_session),
) -> ResponseListProjects:
    """
    ## Получение списка проектов, существующих в передаваемом городе.

    ---
    #### Принимает на вход следующий параметр:
    * `city_name` - название города.

    #### Возвращает список проектов состоящих из следующих элементов:
    * `id` - id проекта;

    * `name` - название проекта;

    * `city` - название города;

    * `address` - адрес проекта;

    * `construction_year` - год постройки;

    * `construction_quarter` - квартал постройки;

    * `description` - описание проекта;

    * `images` - список картинок проекта.
    """
    return await get_projects_by_city_or_404(db=db, city=city_name)


@project_router.get(
    path="/dates",
    response_model=ResponseUniqueDateProject,
    status_code=status.HTTP_200_OK,
    responses={**NotFountError().get_error()},
)
async def get_list_unique_dates_projects(
        db: AsyncSession = Depends(get_async_session)
) -> ResponseUniqueDateProject:
    """
    ## Получение списка уникальных дат постройки проектов.
    """
    return await get_unique_construction_dates_or_404(db=db)


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
    ## Получение данных о проекте, по id.

    ---
    #### Принимает на вход следующий параметр:
    * `project_id` - id проекта.

    #### Возвращает объект состоящих из следующих элементов:
    * `id` - id проекта;

    * `name` - название проекта;

    * `city` - название города;

    * `address` - адрес проекта;

    * `construction_year` - год постройки;

    * `construction_quarter` - квартал постройки;

    * `description` - описание проекта;

    * `images` - список картинок проекта.
    """
    return await get_project_by_id_or_404(db=db, project_id=project_id)
