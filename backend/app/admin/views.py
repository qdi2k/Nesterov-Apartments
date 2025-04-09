from starlette_admin.contrib.sqla import ModelView

from app.admin.image_view import ImageView

FIRST_ELEM_TUPLE_IMAGE = 0


class ApartmentImageView(ImageView):
    """Админка изображений квартир."""
    pass


class ProjectImageView(ImageView):
    """Админка изображений проектов."""
    fields = [
        "id",
        "name",
        "image",
        "project",
    ]


class ProjectView(ModelView):
    """Админка проектов"""
    fields = [
        "id",
        "name",
        "description",
        "city",
        "address",
        "construction_date",
        "images",
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
