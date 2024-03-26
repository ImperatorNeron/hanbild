from os import name
from django.shortcuts import redirect, render
from django.utils.translation import gettext_lazy as _

from main.forms import OnlineApplicationForm
from main.models import ClientMessages
from main.sending_email_service import send_email


def index(request):
    context = {"title": _("HanBild - виробник самоскидних та бортових кузовів")}
    return render(request, "main/index.html", context=context)


def contacts(request):

    if request.method == "POST":
        form = OnlineApplicationForm(data=request.POST)
        if form.is_valid():
            ClientMessages.objects.create(
                name=form.cleaned_data["name"],
                number_or_email=form.cleaned_data["number_or_email"],
                message=form.cleaned_data["message"],
            )
            send_email(form.cleaned_data)
            return redirect("main:index")
    else:
        form = OnlineApplicationForm()
    context = {"title": _("Контакти компанії | HanBild.com.ua"), "form": form}
    return render(request, "main/contact_us.html", context=context)


def services(request):
    context = {"title": _("Ремонт, Trade in та Leasing | HanBild.com.ua")}
    return render(request, "main/services.html", context=context)
