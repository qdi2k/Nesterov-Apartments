from pathlib import Path

from dotenv import load_dotenv
from fastapi_mail import ConnectionConfig
from pydantic import Field, SecretStr, EmailStr
from pydantic_settings import BaseSettings

load_dotenv()
BASE_DIR = Path(__file__).resolve().parent.parent
API_TITLE = """Nesterov Apartments"""
API_VERSION = "0.0.1"
API_DESCRIPTION = """
    API сайта для демонстрации новых жилищных комплексов от застройщика,
    с возможностью записаться на просмотр квартир
""".strip()


class Settings(BaseSettings):
    """
    Базовые настройки проекта. Выполняет инициализацию параметров из
    переменных окружения для подключения к базам данных.
    """
    # Подключение к БД
    DB_USER: str = Field(description='Database username')
    DB_PASSWORD: str = Field(description='Database password')
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
