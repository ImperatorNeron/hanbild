from django.shortcuts import render
from django.utils.translation import gettext_lazy as _

from catalog.models import Categories, Goods


def catalog(request):
    categories = Categories.objects.all()
    goods = Goods.objects.all()
    context = {
        "title": _("Каталог компанії | HanBild.com.ua"),
        "categories": categories,
        "goods": goods,
    }
    return render(request, "catalog/catalog.html", context=context)
