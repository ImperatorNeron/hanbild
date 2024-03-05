from django.db.models.signals import pre_save
from django.dispatch import receiver
from .models import Categories, CategoryDescription
from deep_translator import GoogleTranslator


@receiver(pre_save, sender=Categories)
def translate_name_en(sender, instance, **kwargs):
    if not instance.name_en:
        instance.name_en = GoogleTranslator(source="auto", target="en").translate(
            instance.name_uk
        )


@receiver(pre_save, sender=CategoryDescription)
def translate_description_en(sender, instance, **kwargs):
    if not instance.description_en:
        instance.description_en = GoogleTranslator(source="auto", target="en").translate(
            instance.description_uk
        )