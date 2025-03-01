from sqladmin import ModelView

from app.db.models import Apartment


class ApartmentAdmin(ModelView, model=Apartment):
    column_list = [
        Apartment.id, Apartment.name, Apartment.project, Apartment.address,
        Apartment.section, Apartment.floor, Apartment.area,
        Apartment.image, Apartment.price, Apartment.discounted_price
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
        Apartment.price, Apartment.discounted_price, Apartment.image
    ]