"""
Основной стартующий файл.
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.openapi.utils import get_openapi
from starlette.middleware.sessions import SessionMiddleware
from starlette.middleware.trustedhost import TrustedHostMiddleware
from starlette_admin.contrib.sqla import Admin

from app.admin.auth import DBAuthProvider
from app.admin.views import (
    ApartmentImageView,
    ProjectView,
    ApartmentView,
    ProjectImageView, CityView,
)
from app.api.routes.apartments import apartment_router
from app.api.routes.city import city_router
from app.api.routes.projects import project_router
from app.core.config import settings, API_TITLE, API_VERSION, API_DESCRIPTION
from app.core.log_config import init_loggers
from app.api.middleware import ExceptionHandlerMiddleware
from app.db.database import async_engine
from app.db.models import ApartmentImage, Project, Apartment, ProjectImage, City


class FastAPIApp:
    MAX_AGE_CORS: int = 10

    def __init__(self) -> None:
        """
        ### Инициализирует экземпляр `FastAPIApp`.
            Импортирует промежуточные обработчики запросов, роуты,
            и документацию в приложение
        """
        init_loggers()

        self.app: FastAPI = FastAPI()
        self.include_middlewares()
        self.include_routers()
        self.setup_admin()
        self.include_openapi()

    def include_middlewares(self) -> None:
        """
        ### Добавляет промежуточное программное обеспечение `(middleware) `
            в приложение `FastAPI`.
        """
        self.app.add_middleware(middleware_class=ExceptionHandlerMiddleware)
        self.app.add_middleware(
            middleware_class=CORSMiddleware,
            allow_origins=settings.ALLOWED_HOSTS.split(),
            allow_credentials=True,
            allow_methods=["*"],
            allow_headers=["*"],
            max_age=self.MAX_AGE_CORS,
            # Максимальное время (в секундах), в течение которого браузер
            # может кэшировать результаты предварительных запросов
            # (preflight requests) CORS
        )
        self.app.add_middleware(
            middleware_class=TrustedHostMiddleware,
            allowed_hosts=settings.ALLOWED_HOSTS.split(),
        )
        self.app.add_middleware(
            SessionMiddleware, secret_key=settings.SECRET_KEY
        )

    def include_routers(self) -> None:
        """
        ### Подключает роутеры к приложению `FastAPI`.
        """
        # self.app.include_router(router=apartment_router, prefix="/api")
        self.app.include_router(router=project_router, prefix="/api")
        self.app.include_router(router=city_router, prefix="/api")


    def include_openapi(self) -> None:
        """
        ### Настраивает документацию
        """
        if self.app.openapi_schema:
            self.app.openapi = app.openapi_schema
        else:
            self.app.openapi_schema = get_openapi(
                title=API_TITLE,
                version=API_VERSION,
                description=API_DESCRIPTION,
                routes=self.app.routes,
            )

    def setup_admin(self) -> None:
        """
        ### Добавление представлений админ-панели.
        """
        admin = Admin(
            async_engine,
            title="Admin Panel",
            auth_provider=DBAuthProvider(),
            debug=settings.DEBUG,
        )
        admin.add_view(ApartmentView(Apartment))
        admin.add_view(ProjectView(Project))
        admin.add_view(CityView(City, label="Cities"))
        admin.add_view(ApartmentImageView(ApartmentImage))
        admin.add_view(ProjectImageView(ProjectImage))
        admin.mount_to(self.app)


def create_app() -> FastAPI:
    """
    ## Создает и возвращает экземпляр `FastAPI` приложения.

    ### Этот метод инициализирует экземпляр класса `FastAPIApp`,
        который настраивает и конфигурирует приложение FastAPI.
    ### Затем он возвращает сам экземпляр FastAPI, который можно использовать
        для дальнейшей работы с приложением.

    ### Returns:
        FastAPI: Экземпляр FastAPI приложения.
    """
    application = FastAPIApp()
    return application.app


app: FastAPI = create_app()

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app="main:app", reload=True)
