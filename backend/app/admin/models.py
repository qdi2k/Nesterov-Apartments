from fastapi import UploadFile
from sqladmin import ModelView
from sqladmin.fields import FileField

from app.db.models import Zone, Apartment
from app.utils.functools import generate_unique_filename


class ZoneAdmin(ModelView, model=Zone):
    column_list = [Zone.id, Zone.city, Zone.district]
    form_excluded_columns = [Zone.apartments]


class ApartmentAdmin(ModelView, model=Apartment):
    column_list = [
        Apartment.id,
        Apartment.name,
        Apartment.project,
        Apartment.address,
        Apartment.rooms_count,
        Apartment.section,
        Apartment.floor,
        Apartment.area,
        Apartment.image_url,
        Apartment.price,
        Apartment.discounted_price,
        Apartment.zone,
    ]

    form_overrides = {
        "image": FileField
    }

    form_excluded_columns = {
        Apartment.image_url
    }

    async def on_model_change(self, data, model, is_created, request):
        """Перед созданием или обновлением модели меняет имя файла"""

        image: UploadFile = data.get('image')
        if image:
            unique_filename = generate_unique_filename(file=image)
            image.filename = unique_filename
            data['image_url'] = f'/apartment/{unique_filename}'
        await super().on_model_change(data, model, is_created, request)
