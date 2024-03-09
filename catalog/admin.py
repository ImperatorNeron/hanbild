from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from catalog.models import (
    Categories,
    Goods,
    GoodsImage,
)


@admin.register(Categories)
class CategoriesAdmin(TranslationAdmin):
    prepopulated_fields = {"slug": ("name",)}


@admin.register(Goods)
class GoodsAdmin(TranslationAdmin):
    prepopulated_fields = {"slug": ("name",)}


@admin.register(GoodsImage)
class GoodsImagesAdmin(admin.ModelAdmin): ...
