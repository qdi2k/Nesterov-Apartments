from app.db.models import Project
from app.repositories.base_repository import Repository


class ProjectRepository(Repository):
    """
    Репозиторий для работы с моделью Project.
    """

    model = Project
