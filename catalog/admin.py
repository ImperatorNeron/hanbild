from django.contrib import admin
from django.utils.safestring import mark_safe
from modeltranslation.admin import TranslationAdmin
from catalog.models import (
    Categories,
    Goods,
    GoodsCharacteristic,
    GoodsImage,
    GoodsVideo,
)
from embed_video.admin import AdminVideoMixin


class GoodsImagesTabulareAdmin(admin.TabularInline):
    model = GoodsImage
    fields = ("good", "image")
    search_fields = ("good",)


class GoodsVideosTabulareAdmin(admin.TabularInline):
    model = GoodsVideo
    fields = ("good", "video")
    search_fields = ("good",)


class GoodsCharacteristicTabulareAdmin(admin.TabularInline):
    model = GoodsCharacteristic
    fields = (
        "good",
        "name_uk",
        "description_uk",
        "name_en",
        "description_en",
    )
    search_fields = (
        "good",
        "name",
    )


class GoodsTabulareAdmin(admin.TabularInline):
    model = Goods
    readonly_fields = ("name", "price", "upload_time")
    fields = ("name", "price", "upload_time")
    search_fields = ("name", "price")
    extra = 0


@admin.register(Categories)
class CategoriesAdmin(TranslationAdmin):
    prepopulated_fields = {"slug": ("name",)}
    fields = (("name_uk", "name_en"), "slug")
    list_display = ("id", "name_uk", "name_en", "slug")
    list_editable = ("name_uk", "name_en", "slug")
    inlines = (GoodsTabulareAdmin,)
    list_filter = ("name_uk",)


@admin.register(Goods)
class GoodsAdmin(TranslationAdmin):
    exclude = ("slug",)
    list_display = ("name", "category", "price", "upload_time")
    list_display_links = ("name", "price", "upload_time")
    list_editable = ("category",)
    fields = (
        "category",
        ("name_uk", "name_en"),
        "price",
        "preview_image",
        ("description_uk", "description_en"),
    )
    inlines = (
        GoodsCharacteristicTabulareAdmin,
        GoodsImagesTabulareAdmin,
        GoodsVideosTabulareAdmin,
    )
    list_filter = ("upload_time", "category")
