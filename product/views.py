from django.shortcuts import render
from django.urls import reverse_lazy

from main.views import BaseApplicationFormView
from django.utils.translation import gettext_lazy as _


class ProductView(BaseApplicationFormView):
    template_name = "product/product.html"
    success_url = reverse_lazy("product:product")
    title = _("Продукція від компанії HanBild | HanBild.com.ua")
