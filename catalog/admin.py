from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from catalog.models import Categories, CategoryDescription, CategoryImage


@admin.register(Categories)
class CategoriesAdmin(TranslationAdmin):
    prepopulated_fields = {"slug": ("name",)}


@admin.register(CategoryDescription)
class CategoryDescriptionAdmin(TranslationAdmin): ...


@admin.register(CategoryImage)
class CategoryImageAdmin(admin.ModelAdmin): ...
