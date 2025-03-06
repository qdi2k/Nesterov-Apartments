from sqlalchemy.ext.asyncio import (async_sessionmaker, create_async_engine,
                                    AsyncSession)
from sqlalchemy.orm import (DeclarativeBase, Mapped, mapped_column,
                            declared_attr)

from app.core.config import settings

engine = create_async_engine(
    settings.get_async_database_url, echo=settings.DEBUG
)
async_session_maker = async_sessionmaker(engine, class_=AsyncSession)


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
        Автоматически генерирует имя таблицы на основе имени класса в стиле
        snake_case. Приведение к нижнему регистру, а также если символ
        заглавный и это не первый символ, то добавляем `_`.
        """
        snake_case = ""
        for i, char in enumerate(cls.__name__):
            if char.isupper() and i != 0:
                snake_case += "_"
            snake_case += char.lower()
        return snake_case
