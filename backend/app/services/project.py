from typing import List

from fastapi import HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from starlette import status

from app.api.schema.project import (
    ResponseListProjects, ProjectSchema, ResponseProject
)
from app.crud.project import (
    get_projects_by_city,
    get_project_by_id,
    get_projects,
    get_project_ids_by_city_and_ids,
    get_project_ids_by_city,
)


async def get_projects_or_404(db: AsyncSession) -> ResponseListProjects:
    """Получить список проектов или вернуть 404."""
    projects = await get_projects(db=db)
    if not projects:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"В текущей конфигурации нет проектов."
        )
    result = ResponseListProjects(
        projects=[ProjectSchema.model_validate(project) for project in projects]
    )
    return result


async def get_projects_by_city_or_404(
        db: AsyncSession, city: str
) -> ResponseListProjects:
    """Получить список проектов по городу или вернуть 404."""
    projects = await get_projects_by_city(db=db, city=city)
    if not projects:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Проекты в городе {city} не найдены."
        )
    result = ResponseListProjects(
        projects=[ProjectSchema.model_validate(project) for project in projects]
    )
    return result


async def get_project_by_id_or_404(
        db: AsyncSession, project_id: int
) -> ResponseProject:
    """Получить информацию о проекте по его id или вернуть 404."""
    project = await get_project_by_id(db=db, project_id=project_id)
    if not project:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Проект с project_id={project_id} не найден."
        )
    return ResponseProject(project=ProjectSchema.model_validate(project))


async def get_projects_id_by_city_or_404(
        db: AsyncSession, city: str
) -> List[int]:
    """Получить список id проектов по городу или вернуть 404."""
    projects = await get_project_ids_by_city(db=db, city=city)
    if not projects:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Проекты в городе {city} не найдены."
        )
    return projects


async def get_projects_by_city_and_ids_or_404(
        db: AsyncSession, city: str, project_ids: List[int]
) -> List[int]:
    """Получить список id проектов по городу и списку id проектов или вернуть 404."""
    projects = await get_project_ids_by_city_and_ids(
        db=db, city=city, project_ids=project_ids
    )
    if not projects:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Проекты в городе {city} и с ids = {project_ids} не найдены."
        )
    return projects
