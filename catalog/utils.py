from operator import le
from unittest import result
import uuid
from deep_translator import GoogleTranslator
from django.utils.text import slugify
from django.db.models import Q
from django.contrib.postgres.search import (
    SearchVector,
    SearchRank,
    SearchHeadline,
    TrigramSimilarity,
    SearchQuery,
)


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


def filter_categories(request, result):
    if keys := request.GET.keys():
        qeary = Q()
        for key in keys:
            qeary |= Q(category__slug=key)
        return result.filter(qeary)
    return result


def q_search(query, result):
    if query.isdigit() and len(query) <= 3:
        return result.filter(id=int(query))

    if len(query.split()) == 1:
        return result.filter(name__trigram_word_similar=query)
    return result.filter(name__trigram_similar=query)


def check_filters(request):
    from catalog.models import Goods

    q_query = request.GET.get("q", None)

    if not len(request.GET) or q_query == "" and len(request.GET) == 1:
        return Goods.objects.all()

    if not q_query and len(request.GET) >= 1:
        return filter_categories(request, Goods.objects)

    elif q_query and len(request.GET) == 1:
        return q_search(q_query, Goods.objects)
    else:
        result = q_search(q_query, Goods.objects)
        request.GET.dict().pop("q")
        return filter_categories(request, result)
        

