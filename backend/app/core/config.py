import os
from pathlib import Path

from fastapi_storages import S3Storage, FileSystemStorage
from jinja2 import Environment, FileSystemLoader
from passlib.context import CryptContext
from pydantic import Field
from pydantic_settings import BaseSettings

# Документация API
API_TITLE = """Nest Apartments"""
API_VERSION = "1.0.0"
API_DESCRIPTION = (
    "#### Документация к API backend-решению для организации взаимодействия"
    " застройщика с потенциальными клиентами."
)
URL_API_VERSION = "v" + API_VERSION[0]

# Базовые директории
BASE_DIR = Path(__file__).resolve().parent.parent

TEMPLATES_DIR = os.path.join(BASE_DIR, 'templates')
JINJA_ENV = Environment(loader=FileSystemLoader(TEMPLATES_DIR))

MEDIA_DIR = os.path.join(BASE_DIR, 'media')
DOCUMENT_DIR = os.path.join(MEDIA_DIR, 'docs')
DOCUMENT_STORAGE = FileSystemStorage(path=DOCUMENT_DIR)


class Settings(BaseSettings):
    """
    Базовые настройки проекта. Выполняет инициализацию параметров из
    переменных окружения для подключения к базам данных.
    """
    # Настройки FastAPI
    DEBUG: bool = Field(default=False, description="True or False")
    ALLOWED_HOSTS: str = Field(default="localhost 127.0.0.1")
    SECRET_KEY: str = Field(description="Secret key")

    # Подключение к БД
    DB_USER: str = Field(description='Database username')
    DB_PASS: str = Field(description='Database password')
    DB_HOST: str = Field(description='Database host')
    DB_PORT: int = Field(description='Database port')
    DB_NAME: str = Field(description='Database name')

    # Настройки S3-хранилища
    S3_ACCESS_KEY: str = Field()
    S3_SECRET_KEY: str = Field()
    S3_ENDPOINT_URL: str = Field()
    S3_AWS_DEFAULT_ACL: str = Field(default="public-read")
    S3_AWS_USE_SSL: bool = Field(default=True)
    S3_BUCKET_APARTMENTS: str = Field()
    S3_CUSTOM_DOMAIN_APARTMENTS: str = Field()

    class Config:
        env_file = '.env'
        env_file_encoding = 'utf-8'

    @property
    def get_async_database_url(self) -> str:
        """Получение URL-адреса для асинхронного подключения к Postgres."""
        return (
            f"postgresql+asyncpg://{self.DB_USER}:{self.DB_PASS}"
            + f"@{self.DB_HOST}:{self.DB_PORT}/{self.DB_NAME}"
        )

    @property
    def get_sync_database_url(self) -> str:
        """Получение URL-адреса для синхронного подключения к Postgres."""
        return (
            f"postgresql://{self.DB_USER}:{self.DB_PASS}"
            + f"@{self.DB_HOST}:{self.DB_PORT}/{self.DB_NAME}"
        )


settings = Settings()


class SettingsS3Storage(S3Storage):
    """
    Глобальные настройки S3-хранилища.
    """
    AWS_ACCESS_KEY_ID = settings.S3_ACCESS_KEY
    AWS_SECRET_ACCESS_KEY = settings.S3_SECRET_KEY
    AWS_S3_ENDPOINT_URL = settings.S3_ENDPOINT_URL
    AWS_DEFAULT_ACL = settings.S3_AWS_DEFAULT_ACL
    AWS_S3_USE_SSL = settings.S3_AWS_USE_SSL
    AWS_S3_BUCKET_NAME = settings.S3_BUCKET_APARTMENTS
    AWS_S3_CUSTOM_DOMAIN = settings.S3_CUSTOM_DOMAIN_APARTMENTS


apartments_storage = SettingsS3Storage()

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
