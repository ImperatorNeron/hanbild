from django.shortcuts import redirect, render

from main.forms import OnlineApplicationForm


def index(request):
    context = {"title": "HanBild - виробник самоскидних та бортових кузовів"}
    return render(request, "main/index.html", context=context)


def contacts(request):

    if request.method == "POST":
        form = OnlineApplicationForm(data=request.POST)
        if form.is_valid():
            print(form.cleaned_data)
            return redirect("main:index")
    else:
        form = OnlineApplicationForm()
    context = {"title": "Контакти компанії | HanBild.com.ua", "form": form}
    return render(request, "main/contact_us.html", context=context)


def services(request):
    context = {"title": "Ремонт, Trade in та Leasing | HanBild.com.ua"}
    return render(request, "main/services.html", context=context)
