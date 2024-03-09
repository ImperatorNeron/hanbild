import uuid
from django.db.models.signals import pre_save
from django.dispatch import receiver

from catalog.utils import translate_to_en
from .models import Categories, Goods


@receiver(pre_save, sender=Categories)
def translate_categories(sender, instance, **kwargs):
    if not instance.name_en:
        instance.name_en = translate_to_en(instance.name_uk)


@receiver(pre_save, sender=Goods)
def translate_goods(sender, instance, **kwargs):
    if not instance.name_en:
        instance.name_en = translate_to_en(instance.name_uk)

    if not instance.description_en:
        instance.description_en = translate_to_en(instance.description_uk)


# @receiver(pre_save, sender=Goods)
# def check_slug(sender, instance, **kwargs):
#     # вирішити проблему, коли оновляю запис, додається до слагу знову штука
#     if Goods.objects.filter(slug=instance.slug).exists():
#         instance.slug = f"{instance.slug}-{uuid.uuid4().hex[0:8]}"
