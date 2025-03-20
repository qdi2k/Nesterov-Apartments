from fastapi import UploadFile
from sqladmin import ModelView
from wtforms import FileField

from app.core.config import apartments_storage
from app.db.models import Project, Apartment
from app.utils.functools import (generate_unique_filename,
                                 check_image_extension, convert_url_to_html)

IMAGE_EXTENSIONS = [
    "bmp", "jpg", "jpeg", "png", "gif", "tiff", "tif", "webp", "ppm", "pgm",
    "pbm", "xbm", "ico", "raw", "hdr", "exr", "dds", "psd"
]


class ProjectAdmin(ModelView, model=Project):
    """Админ модель проектов."""

    name_plural = "Проекты"

    column_list = [
        Project.id, Project.name, Project.description,
        Project.city, Project.district, Project.address,
    ]
    column_labels = {
        "name": "Название проекта",
        "description": "Описание",
        "city": "Город",
        "district": "Район",
        "address": "Адрес"
    }
    column_searchable_list = [Project.name, Project.description, ]
    column_sortable_list = [Project.name, ]
    column_default_sort = [(Project.name, True), ]

    form_excluded_columns = [Project.apartments, ]


class ApartmentAdmin(ModelView, model=Apartment):
    """Админ модель проектов."""

    name_plural = "Квартиры"

    column_list = [
        Apartment.id, Apartment.project, Apartment.name, Apartment.price,
        Apartment.discounted_price, Apartment.image,
    ]
    column_formatters = {
        Apartment.image: lambda m, a: convert_url_to_html(
            href=apartments_storage.get_path(m.image), value=m.image
        )
    }
    column_labels = {
        "name": "Имя квартиры",
        "price": "Цена",
        "discounted_price": "Цена со скидкой",
        "project": "Проект",
        "rooms_count": "Количество комнат",
        "section": "Секция",
        "floor": "Этаж",
        "area": "Площадь",
        "image": "Картинка",
    }

    form_columns = [
        Apartment.id, Apartment.name, Apartment.price,
        Apartment.discounted_price, Apartment.project,
        Apartment.rooms_count, Apartment.section,
        Apartment.floor, Apartment.area, Apartment.image,
    ]
    form_overrides = dict(image=FileField)

    async def on_model_change(self, data, model, is_created, request) -> None:
        """Перед созданием или обновлением модели меняет имя файла."""
        image: UploadFile = data.get('image')
        if image:
            check_image_extension(filename=image.filename)
            image.filename = generate_unique_filename(file=image)
            apartments_storage.write(image.file, image.filename)
            data['image'] = image.filename
        await super().on_model_change(data, model, is_created, request)
