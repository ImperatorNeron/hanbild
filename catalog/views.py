from django.shortcuts import render

from catalog.models import Categories


def catalog(request):
    categories = Categories.objects.all()

    context = {
        "title": "Каталог продукції | HanBild.com.ua",
        "categories": categories,
    }
    return render(request, "catalog/catalog.html", context=context)


def category_products(request, category_slug):
    category = Categories.objects.get(slug=category_slug)
    context = {
        "title": f"{category.name} | HanBild.com.ua",
        "category": category,
    }
    return render(request, "catalog/category.html", context=context)
