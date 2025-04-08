from starlette_admin.contrib.sqla import ModelView

from app.admin.image_view import ImageView
from app.core.config import apartments_storage

FIRST_ELEM_TUPLE_IMAGE = 0


class ApartmentImageView(ImageView):
    """Админка изображений квартир."""
    storage = apartments_storage


class ProjectView(ModelView):
    """Админка проектов"""
    fields = [
        "id",
        "name",
        "description",
        "city",
        "address",
        "construction_date",
    ]


class ApartmentView(ModelView):
    """Админка для квартир."""
    fields = [
        "id",
        "name",
        "price",
        "discount_percent",
        "on_sale",
        "rooms_count",
        "section",
        "floor",
        "area",
        "project",
        "image",
    ]
