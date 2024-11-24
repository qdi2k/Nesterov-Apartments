from pydantic import BaseModel


class GlobalTypeError(BaseModel):
    """Основной наследуемый класс ошибок"""
    detail: str


class BadRequestError(GlobalTypeError):
    """Ошибка на стороне клиента"""
    pass


class ErrorDescriptions:
    @staticmethod
    def bad_request_entity():
        return {
            "model": BadRequestError,
            "description": "Невозможно обработать запрос",
        }
