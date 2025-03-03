from app.db.models import Zone
from app.repositories.base_repository import Repository


class ZoneRepository(Repository):
    """
    Репозиторий для работы с моделью Apartment.
    """

    model = Zone
