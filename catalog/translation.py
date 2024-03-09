from modeltranslation.translator import register, TranslationOptions
from .models import Categories, Goods


@register(Categories)
class CategoriesTranslationOptions(TranslationOptions):
    fields = ("name",)


@register(Goods)
class GoodsTranslationOptions(TranslationOptions):
    fields = ("name", "description")
