from modeltranslation.translator import register, TranslationOptions
from .models import Categories, CategoryDescription


@register(Categories)
class CategoriesTranslationOptions(TranslationOptions):
    fields = ("name", "description")


@register(CategoryDescription)
class CategoryDescriptionTranslationOptions(TranslationOptions):
    fields = ("text_content",)
