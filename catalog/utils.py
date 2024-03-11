import uuid
from deep_translator import GoogleTranslator
from django.utils.text import slugify
from django.db.models import Q


def translate_to_en(to_field):
    return GoogleTranslator(source="auto", target="en").translate(to_field)


def translate_goods(instance):
    if not instance.name_en:
        instance.name_en = translate_to_en(instance.name_uk)

    if not instance.description_en:
        instance.description_en = translate_to_en(instance.description_uk)


def translate_categories(instance):
    if not instance.name_en:
        instance.name_en = translate_to_en(instance.name_uk)


def validate_slug(obj):
    from catalog.models import Goods

    slug = slugify(obj.name_en)
    if not obj.slug:
        if not obj.pk and len(Goods.objects.filter(slug=slug)):
            obj.slug = f"{slug}-{uuid.uuid4().hex[:8]}"
        else:
            obj.slug = slug


def filter_categories(request):
    from catalog.models import Goods

    if keys := request.GET.keys():
        print("her")
        qeary = Q()
        for key in keys:
            qeary |= Q(category__slug=key)
        return Goods.objects.filter(qeary)
    return Goods.objects.all()
