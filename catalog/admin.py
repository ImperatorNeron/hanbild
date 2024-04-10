from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from catalog.models import (
    Categories,
    Goods,
    GoodsImage,
    GoodsVideo,
)
from embed_video.admin import AdminVideoMixin


@admin.register(Categories)
class CategoriesAdmin(TranslationAdmin):
    prepopulated_fields = {"slug": ("name",)}


@admin.register(Goods)
class GoodsAdmin(TranslationAdmin):
    exclude = ("slug", "name_en", "description_en")


@admin.register(GoodsImage)
class GoodsImagesAdmin(admin.ModelAdmin): ...


@admin.register(GoodsVideo)
class GoodsVideosAdmin(AdminVideoMixin, admin.ModelAdmin): ...
