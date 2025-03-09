from sqladmin import ModelView

from app.db.models import Zone, Project


class ZoneAdmin(ModelView, model=Zone):

    column_list = [
        Zone.id, Zone.city, Zone.district, Zone.address, Zone.project,
    ]
    column_searchable_list = [Zone.city, Zone.district, Zone.address,]
    column_sortable_list = [Zone.city, Zone.district, Zone.address,]
    column_default_sort = [(Zone.city, True), (Zone.district, True),]

    form_excluded_columns = [Zone.apartments,]
    form_ajax_refs = {
        'project': {
            'fields': ('name',),
            'order_by': 'name',
        }
    }

class ProjectAdmin(ModelView, model=Project):
    column_list = [
        Project.id, Project.name, Project.description, Project.zones,
    ]
    column_searchable_list = [Project.name, Project.description,]
    column_sortable_list = [Project.name,]
    column_default_sort = [(Project.name, True),]

    form_excluded_columns = [Project.apartments,]
    form_ajax_refs = {
        'zones': {
            'fields': ('city', 'district', 'address'),
            'order_by': 'city',
        }
    }
