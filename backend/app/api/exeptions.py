from abc import ABC
from typing import Dict, Any

from pydantic import BaseModel
from starlette import status


class GlobalTypeError(BaseModel, ABC):
    """Основной наследуемый класс ошибок"""

    _status_code: int
    detail: str

    def get_error(self) -> Dict[int, Dict[str, Any]]:
        """Получить ошибку для документации."""
        return {
            self._status_code: {
                "model": self, "description": self.detail
            }
        }

class NotFountError(GlobalTypeError):
    _status_code: int = status.HTTP_404_NOT_FOUND
    detail: str = "Запрашиваемый вами ресурс не найден"
