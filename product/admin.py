from django.contrib import admin

from product.models import Service


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ("index_on_page", "service_name")
    list_editable = ("index_on_page",)
    list_display_links = ("service_name",)
    fields = (
        "index_on_page",
        ("service_name_uk", "service_name_en"),
        ("service_description_uk", "service_description_en"),
        "service_image",
    )
