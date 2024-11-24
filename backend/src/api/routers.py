from fastapi import APIRouter

from api.contact.routers import contact_router

api_router = APIRouter()

api_router.include_router(contact_router, prefix="/contact")
