from modeltranslation.translator import register, TranslationOptions
from .models import Categories


@register(Categories)
class CategoriesTranslationOptions(TranslationOptions):
    fields = ("name", "description")
