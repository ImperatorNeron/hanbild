from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from catalog.models import Categories


@admin.register(Categories)
class CategoriesAdmin(TranslationAdmin):
    prepopulated_fields = {"slug": ("name",)}
