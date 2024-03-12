from django.shortcuts import render
from django.utils.translation import gettext_lazy as _

from catalog.models import Categories, Goods
from catalog.utils import check_filters


def catalog(request):
    context = {
        "title": _("Каталог компанії | HanBild.com.ua"),
        "goods": check_filters(request),
    }
    return render(request, "catalog/catalog.html", context=context)


def goods(request, item_slug):
    goods = Goods.objects.get(slug=item_slug)
    context = {
        "title": _("Каталог компанії | HanBild.com.ua"),
        "goods": goods,
    }
    return render(request, "catalog/goods.html", context=context)
