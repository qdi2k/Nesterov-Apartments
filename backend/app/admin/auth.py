from typing import Optional, Union

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import Session
from starlette_admin.auth import AuthProvider
from starlette.requests import Request
from starlette.responses import Response
from starlette_admin.exceptions import LoginFailed

from app.core.config import pwd_context
from app.db.models import AdminUser


class DBAuthProvider(AuthProvider):
    async def login(
        self,
        username: str,
        password: str,
        remember_me: bool,
        request: Request,
        response: Response,
    ) -> Response:
        """Логин пользователя."""
        session: Union[Session, AsyncSession] = request.state.session
        user = await session.execute(
            select(AdminUser).where(AdminUser.username == username)
        )
        user = user.scalar_one_or_none()
        if not user or not pwd_context.verify(password, user.password):
            raise LoginFailed("Неверное имя или пароль")
        if not user.is_active:
            raise LoginFailed("Пользователь не активирован")
        request.session.update({"user_id": user.id})
        return response

    async def is_authenticated(self, request) -> bool:
        """Аутентификация пользователя."""
        if "user_id" not in request.session:
            return False
        session = request.state.session
        user = await session.execute(
            select(AdminUser)
            .where(AdminUser.id == request.session["user_id"])
        )
        user = user.scalar_one_or_none()
        if user is not None and user.is_active:
            request.state.user = user
            return True
        return False

    def get_admin_user(self, request: Request) -> Optional[AdminUser]:
        """Получить администратора."""
        return request.state.user

    async def logout(self, request: Request, response: Response) -> Response:
        """Выход пользователя."""
        request.session.clear()
        return response
