from modeltranslation.translator import register, TranslationOptions
from .models import Product, ProductCharacteristics, ProductParagraphs, Service


@register(Product)
class ProductTranslationOptions(TranslationOptions):
    fields = ("paragraph",)


@register(Service)
class ServiceTranslationOptions(TranslationOptions):
    fields = ("service_name", "service_description")


@register(ProductCharacteristics)
class ProductCharacteristicsTranslationOptions(TranslationOptions):
    fields = ("name", "description")


@register(ProductParagraphs)
class ProductParagraphsTranslationOptions(TranslationOptions):
    fields = ("paragraph", )


