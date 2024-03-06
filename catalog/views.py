from django.db.models import F
from django.shortcuts import render
from django.utils.translation import gettext_lazy as _

from catalog.models import Categories, CategoryDescription, CategoryImage


def products(request):
    categories_descriptions = CategoryDescription.objects.filter(is_main_content=True)
    categories_images = CategoryImage.objects.filter(is_main_content=True)


    context = {
        "title": _("Продукція компанії | HanBild.com.ua"),
        "categories_descriptions": categories_descriptions,
        "categories_images": categories_images,
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
