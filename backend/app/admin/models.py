from starlette_admin.contrib.sqla import ModelView

from app.db.models import Zone, Apartment


class ZoneView(ModelView):
    fields = [
        Zone.id,
        Zone.city,
        Zone.district,
    ]

    sortable_fields = [
        Zone.id,
        Zone.city,
        Zone.district,
    ]
    searchable_fields = [
        Zone.id,
        Zone.city,
        Zone.district,
    ]

    column_visibility = False
    search_builder = True
    responsive_table = False
    save_state = True


class ApartmentView(ModelView):
    pass

    # TODO: Удалить после настройки
    # fields = [
    #     Apartment.id,
    #     Apartment.name,
    #     Apartment.project,
    #     Apartment.address,
    #     EnumField("rooms_count", enum=CountRooms),
    #     Apartment.section,
    #     Apartment.floor,
    #     Apartment.area,
    #     ImageField("image"),
    #     Apartment.price,
    #     Apartment.discounted_price,
    #     Apartment.zone,
    # ]
    #
    # exclude_fields_from_list = [Apartment.image,]
