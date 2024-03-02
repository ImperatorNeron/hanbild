from django.shortcuts import render

from catalog.models import Categories

def catalog(request):
    categories = Categories.objects.all()

    context = {
        "title": "Каталог продукції | HanBild.com.ua",
        "categories": categories,
    }
    return render(request, "catalog/catalog.html", context=context)
