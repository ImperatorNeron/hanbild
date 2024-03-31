from django.http import HttpRequest, HttpResponse, JsonResponse
from django.shortcuts import render
from django.urls import reverse_lazy
from django.utils.translation import gettext_lazy as _
from django.views import View

from main.forms import OnlineApplicationForm
from main.models import ClientMessages
from main.sending_email_service import send_email

from django.views.generic import FormView


class BaseApplicationFormView(FormView):

    form_class = OnlineApplicationForm
    context = {}

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        if self.context:
            for key, value in self.context.items():
                context[key] = value
        if kwargs:
            for key, value in kwargs.items():
                context[key] = value
        return context

    def form_valid(self, form):
        super().form_valid(form)
        # ClientMessages.objects.create(
        #     name=form.cleaned_data["name"],
        #     number_or_email=form.cleaned_data["number_or_email"],
        #     message=form.cleaned_data["message"],
        # )
        # send_email(form.cleaned_data)
        print(form.cleaned_data)
        return JsonResponse(
            {"success": True, "message": "Повідомлення надійшло успішно!"}
        )

    def form_invalid(self, form):
        return JsonResponse({"success": False, "form_errors": form.errors})


class IndexView(BaseApplicationFormView):
    template_name = "main/index.html"
    success_url = reverse_lazy("main:index")
    context = {"title": _("HanBild - виробник самоскидних та бортових кузовів")}


class ContactsView(BaseApplicationFormView):
    template_name = "main/contact_us.html"
    success_url = reverse_lazy("main:contacts")
    context = {"title": _("Контакти компанії | HanBild.com.ua")}


class ServicesView(BaseApplicationFormView):
    template_name = "main/services.html"
    success_url = reverse_lazy("main:services")
    context = {"title": _("Ремонт, Trade in та Leasing | HanBild.com.ua")}


def page404exception(request, exception):
    return render(request, "main/page404.html", status=404)

def page500exception(request):
    return render(request, "main/page404.html", status=500)