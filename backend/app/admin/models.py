from fastapi import UploadFile
from sqladmin import ModelView
from sqladmin.fields import FileField

from app.db.models import Zone, Apartment


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

    # TODO: Разобраться как подставить url в начало
    # column_formatters = {
    #     Apartment.image_url: lambda m, a: m.image_url[:10]
    # }

    form_overrides = {
        "image": FileField
    }

    form_excluded_columns = {
        Apartment.image_url
    }

    async def on_model_change(self, data, model, is_created, request):
        image: UploadFile = data.get('image')
        filename = image.filename

        image.filename = filename.replace(' ', '_')
        data['image_url'] = f'/apartment/{image.filename}'
        await super().on_model_change(data, model, is_created, request)
