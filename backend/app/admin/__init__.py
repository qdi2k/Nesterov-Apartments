from starlette.middleware import Middleware
from starlette.middleware.sessions import SessionMiddleware
from starlette_admin.contrib.sqla import Admin

from app.admin.auth import DBAuthProvider
from app.admin.views import (
    ApartmentView, ProjectView, CityView, ApartmentImageView, ProjectImageView
)
from app.core.config import settings
from app.db.database import async_engine
from app.db.models import Apartment, Project, City, ApartmentImage, ProjectImage

__all__ = ["admin"]

admin = Admin(
    async_engine,
    title="Admin Panel",
    auth_provider=DBAuthProvider(),
    debug=settings.DEBUG,
    middlewares=[Middleware(SessionMiddleware, secret_key=settings.SECRET_KEY)],
)
admin.add_view(ApartmentView(Apartment))
admin.add_view(ProjectView(Project))
admin.add_view(CityView(City, label="Cities"))
admin.add_view(ApartmentImageView(ApartmentImage))
admin.add_view(ProjectImageView(ProjectImage))
