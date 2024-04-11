from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from catalog.models import (
    Categories,
    Goods,
    GoodsCharacteristic,
    GoodsImage,
    GoodsVideo,
)
from embed_video.admin import AdminVideoMixin


@admin.register(Categories)
class CategoriesAdmin(TranslationAdmin):
    prepopulated_fields = {"slug": ("name",)}
    exclude = ("name_en",)


@admin.register(Goods)
class GoodsAdmin(TranslationAdmin):
    exclude = ("slug", "name_en", "description_en")


@admin.register(GoodsImage)
class GoodsImagesAdmin(admin.ModelAdmin): ...


@admin.register(GoodsVideo)
class GoodsVideosAdmin(AdminVideoMixin, admin.ModelAdmin): ...

@admin.register(GoodsCharacteristic)
class GoodsCharacteristicsAdmin(TranslationAdmin): ...