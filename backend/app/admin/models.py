from sqladmin import ModelView
from wtforms import validators

from app.core.enums import CountRooms
from app.db.models import Apartment, Zone


class ZoneAdmin(ModelView, model=Zone):
    column_list = [Zone.id, Zone.city, Zone.district]
    column_searchable_list = [Zone.city, Zone.district]
    column_sortable_list = [Zone.city, Zone.district]
    form_columns = [Zone.city, Zone.district]


class ApartmentAdmin(ModelView, model=Apartment):
    column_list = [
        Apartment.id, Apartment.name, Apartment.project, Apartment.address,
        Apartment.section, Apartment.floor, Apartment.area,
        Apartment.rooms_count, Apartment.image, Apartment.price,
        Apartment.discounted_price, Apartment.zone
    ]
    column_searchable_list = [
        Apartment.name, Apartment.project, Apartment.address
    ]
    column_sortable_list = [
        Apartment.price, Apartment.discounted_price, Apartment.floor
    ]
    form_columns = [
        Apartment.name, Apartment.project, Apartment.address,
        Apartment.section, Apartment.floor, Apartment.area,
        Apartment.price, Apartment.discounted_price, Apartment.image,
        Apartment.zone, Apartment.rooms_count,
    ]
    form_ajax_refs = {
        'zone': {
            'fields': ('id', 'city', 'district'),
            'order_by': 'city',
        }
    }

    form_args = {
        'rooms_count': {
            'validators': [validators.InputRequired()],
            'choices': [room.value for room in CountRooms]
        }
    }
