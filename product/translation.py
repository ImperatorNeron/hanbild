from modeltranslation.translator import register, TranslationOptions
from .models import Product, Service


@register(Product)
class ProductTranslationOptions(TranslationOptions):
    fields = ("paragraph",)


@register(Service)
class ServiceTranslationOptions(TranslationOptions):
    fields = ("service_name", "service_description")
