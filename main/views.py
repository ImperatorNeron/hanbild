from django.shortcuts import render


def index(request):
    context = {"title": "HanBild - виробник самоскидних та бортових кузовів"}
    return render(request, "main/index.html", context=context)


def contacts(request):
    context = {"title": "Контакти компанії | HanBild.com.ua"}
    return render(request, "main/index.html", context=context)


def services(request):
    context = {"title": "Ремонт, Trade in та Leasing | HanBild.com.ua"}
    return render(request, "main/services.html", context=context)
