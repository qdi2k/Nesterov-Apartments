import sys
from pathlib import Path

import click
from sqlalchemy import select

from app.core.config import pwd_context
from app.db.database import async_session_maker
from app.db.models import AdminUser

sys.path.insert(0, str(Path(__file__).parent.parent.parent))


async def create_admin_user(
        username: str, password: str, email: str = None,
        is_superuser: bool = True
):
    """Функция создания суперпользователя/администратора админ-панели"""
    async with async_session_maker() as session:
        existing_user = await session.execute(
            select(AdminUser).where(AdminUser.username == username)
        )
        if existing_user.scalar_one_or_none():
            print(f"Пользователь {username} - {email} уже существует!")
            return False

        new_user = AdminUser(
            username=username,
            password=pwd_context.hash(password),
            email=email,
            is_superuser=is_superuser,
            is_active=True
        )
        session.add(new_user)
        await session.commit()
        print(f"Создан администратор: {username} - {email}")
        return True


@click.command()
@click.option(
    '--username',
    prompt='Имя пользователя',
    help='Логин администратора'
)
@click.option(
    '--password',
    prompt=True,
    hide_input=True,
    confirmation_prompt=True,
    help='Пароль администратора'
)
@click.option(
    '--email',
    prompt='Email',
    help='Email администратора'
)
def cli(username, password, email):
    """Скрипт для создания администратора"""
    import asyncio

    asyncio.run(create_admin_user(
        username=username, password=password, email=email
    ))


if __name__ == '__main__':
    cli()
