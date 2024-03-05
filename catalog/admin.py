from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from catalog.models import Categories, CategoryDescription


@admin.register(Categories)
class CategoriesAdmin(TranslationAdmin):
    prepopulated_fields = {"slug": ("name",)}


@admin.register(CategoryDescription)
class CategoryDescriptionAdmin(TranslationAdmin):
    fields = ("category_name", "is_main_content", "text_content")