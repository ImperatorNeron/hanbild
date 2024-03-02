from django.shortcuts import render

def index(request):
    context = {
        "title": "HanBild - виробник самоскидних та бортових кузовів"
    }
    return render(request, "main/index.html", context=context)

def contacts(request):
    context = {
        "title": "Контакти компанії | HanBild.com.ua"
    }
    return render(request, "main/index.html", context=context)

def solutions(request):
    context = {
        "title": "Готові рішення | HanBild.com.ua"
    }
    return render(request, "main/solutions.html", context=context)