from sqlalchemy import create_engine
from sqlalchemy.ext.asyncio import (async_sessionmaker, create_async_engine,
                                    AsyncSession)
from sqlalchemy.orm import (DeclarativeBase, Mapped, mapped_column,
                            declared_attr, sessionmaker, Session)

from app.core.config import settings


sync_engine = create_engine(settings.get_sync_database_url, echo=settings.DEBUG)
sync_session_maker = sessionmaker(sync_engine, class_=Session)

async_engine = create_async_engine(
    settings.get_async_database_url, echo=settings.DEBUG
)
async_session_maker = async_sessionmaker(async_engine, class_=AsyncSession)


class Base(DeclarativeBase):
    """
    Абстрактный базовый класс, предоставляющий общую функциональность,
    для всех наследованных моделей.
    """

    __abstract__ = True

    id: Mapped[int] = mapped_column(autoincrement=True, primary_key=True)

    @declared_attr.directive
    def __tablename__(cls) -> str:
        """
        Автоматически генерирует имя таблицы на основе имени класса в
        нижнем регистре.
        """
        return f"{cls.__name__.lower()}s"
