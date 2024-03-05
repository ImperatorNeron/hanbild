from django.db.models.signals import pre_save
from django.dispatch import receiver
from .models import Categories
from deep_translator import GoogleTranslator


@receiver(pre_save, sender=Categories)
def translate_name_description_en(sender, instance, **kwargs):
    if not instance.name_en:
        print(instance.name_uk)
        instance.name_en = GoogleTranslator(source="auto", target="en").translate(
            instance.name_uk
        )
    if not instance.description_en:
        print(instance.description_uk)
        instance.description_en = GoogleTranslator(
            source="auto", target="en"
        ).translate(instance.description_uk)
