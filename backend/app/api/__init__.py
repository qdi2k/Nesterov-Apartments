from fastapi import APIRouter

from app.api.routes.apartments import apartment_router
from app.api.routes.city import city_router
from app.api.routes.projects import project_router

__all__ = ['api_router']

api_router = APIRouter(prefix="/v1")

api_router.include_router(apartment_router)
api_router.include_router(city_router)
api_router.include_router(project_router)
