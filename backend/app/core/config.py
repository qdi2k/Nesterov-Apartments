import os
from pathlib import Path

from dotenv import load_dotenv
from fastapi_mail import ConnectionConfig
from fastapi_storages import S3Storage
from jinja2 import Environment, FileSystemLoader
from passlib.context import CryptContext
from pydantic import Field, SecretStr, EmailStr
from pydantic_settings import BaseSettings

load_dotenv()

BASE_DIR = Path(__file__).resolve().parent.parent
TEMPLATES_DIR = os.path.join(BASE_DIR, 'templates')
JINJA_ENV = Environment(loader=FileSystemLoader(TEMPLATES_DIR))

API_TITLE = """Nesterov Apartments"""
API_VERSION = "1.0.0"
API_DESCRIPTION = """
    API сайта для демонстрации новых жилищных комплексов от застройщика,
    с возможностью записаться на просмотр квартир
""".strip()
URL_API_VERSION = "v" + API_VERSION[0]


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

    # Настройки почтового агента
    SMTP_USER: EmailStr = Field(description="Email username")
    SMTP_PASSWORD: SecretStr = Field(description="Email password")
    SMTP_HOST: str = Field(description="Email host")
    SMTP_PORT: int = Field(description="Email port")
    SMTP_SSL_TLS: bool = Field(
        default=True, description="Email use SSL or TSL - True or False"
    )
    MAIL_STARTTLS: bool = False
    MAIL_USE_CREDENTIALS: bool = True
    MAIL_VALIDATE_CERTS: bool = True
    MAIL_CONF: ConnectionConfig | None = None

    # Настройки S3-хранилища
    S3_ACCESS_KEY: str
    S3_SECRET_KEY: str
    S3_ENDPOINT_URL: str
    S3_AWS_DEFAULT_ACL: str = Field(default="public-read")
    S3_AWS_USE_SSL: bool = Field(default=True)
    S3_BUCKET_APARTMENTS: str
    S3_CUSTOM_DOMAIN_APARTMENTS: str

    def __init__(self, **data):
        super().__init__(**data)
        self.MAIL_CONF = self.get_connect_email_sender()

    @property
    def get_async_database_url(self) -> str:
        """Получение URL-адреса для асинхронного подключения к Postgres"""
        return (
            f"postgresql+asyncpg://{self.DB_USER}:{self.DB_PASS}"
            + f"@{self.DB_HOST}:{self.DB_PORT}/{self.DB_NAME}"
        )

    @property
    def get_sync_database_url(self) -> str:
        """Получение URL-адреса для синхронного подключения к Postgres"""
        return (
            f"postgresql://{self.DB_USER}:{self.DB_PASS}"
            + f"@{self.DB_HOST}:{self.DB_PORT}/{self.DB_NAME}"
        )

    def get_connect_email_sender(self):
        """
        Использует параметры, заданные в классе Settings, для создания
        объекта ConnectionConfig, который определяет настройки подключения к
        почтовому серверу.
        """
        return ConnectionConfig(
            MAIL_USERNAME=str(self.SMTP_USER),
            MAIL_PASSWORD=self.SMTP_PASSWORD,
            MAIL_FROM=self.SMTP_USER,
            MAIL_PORT=int(self.SMTP_PORT),
            MAIL_SERVER=self.SMTP_HOST,
            MAIL_STARTTLS=self.MAIL_STARTTLS,
            MAIL_SSL_TLS=self.SMTP_SSL_TLS,
            USE_CREDENTIALS=self.MAIL_USE_CREDENTIALS,
            VALIDATE_CERTS=self.MAIL_VALIDATE_CERTS
        )

    class Config:
        env_file = '.env'
        env_file_encoding = 'utf-8'


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
