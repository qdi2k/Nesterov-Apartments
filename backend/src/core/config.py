from dotenv import load_dotenv
from pydantic import Field
from pydantic_settings import BaseSettings

load_dotenv()


class Settings(BaseSettings):
    SCHEME: str = 'postgresql+asyncpg'

    DB_USER: str = Field(description='Database username')
    DB_PASSWORD: str = Field(description='Database password')
    DB_HOST: str = Field(description='Database host')
    DB_PORT: int = Field(description='Database port')
    DB_NAME: str = Field(description='Database name')

    class Config:
        env_file = '.env'
        env_file_encoding = 'utf-8'

    def get_database_url(self) -> str:
        """Получение URL-адреса для подключения к БД"""
        return (f'{self.SCHEME}://{self.DB_USER}:{self.DB_PASSWORD}'
                + f'@{self.DB_HOST}:{self.DB_PORT}/{self.DB_NAME}')


settings = Settings()
