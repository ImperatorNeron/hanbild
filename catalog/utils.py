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


def filter_categories(request, result):
    keys_list = list(request.GET.keys())

    if "sort_by" in keys_list:
        keys_list.remove("sort_by")
    if "q" in keys_list:
        keys_list.remove("q")

    if keys := keys_list:
        qeary = Q()
        for key in keys:
            qeary |= Q(category__slug=key)
        return result.filter(qeary)
    return result


def q_search(query, result):
    if not query:
        return result
    if query.isdigit() and len(query) <= 3:
        return result.filter(id=int(query))

    if len(query.split()) == 1:
        return result.filter(name__trigram_word_similar=query)
    return result.filter(name__trigram_similar=query)


def sorting_filter(sort_by):
    from catalog.models import Goods

    match sort_by:
        case "price-increase":
            return Goods.objects.order_by("price")
        case "price-decrease":
            return Goods.objects.order_by("-price")
        case _:
            return Goods.objects.order_by("upload_time")


def check_filters(request):
    q_query = request.GET.get("q", None)

    sort_by = request.GET.get("sort_by", None)

    objects = sorting_filter(sort_by)
    objects = filter_categories(request, objects)
    objects = q_search(q_query, objects)

    return objects
