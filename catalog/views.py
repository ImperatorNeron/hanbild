from django.shortcuts import render

def catalog(request):
    context = {
        "title": "Каталог продукції "
    }
    return render(request, "catalog/catalog.html", context=context)
