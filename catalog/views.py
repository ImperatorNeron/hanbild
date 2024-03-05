from django.shortcuts import render
from django.utils.translation import gettext_lazy as _

from catalog.models import Categories



def products(request):
    # categories = Categories.objects.all()

    context = {
        "title": _("Продукція компанії | HanBild.com.ua"),
        # "categories": categories,
    }
    return render(request, "catalog/products.html", context=context)


def category_products(request, category_slug):
    # category = Categories.objects.get(slug=category_slug)
    context = {
        # "title": f"{category.name} | HanBild.com.ua",
        "title": f" | HanBild.com.ua",
        # "category": category,
    }
    return render(request, "catalog/category_description.html", context=context)
