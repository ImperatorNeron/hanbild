from django.shortcuts import render
from django.utils.translation import gettext_lazy as _

from catalog.models import Categories


def catalog(request):
    context = {
        "title": _("Каталог компанії | HanBild.com.ua"),
    }
    return render(request, "catalog/catalog.html", context=context)
