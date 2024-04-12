from django.shortcuts import render
from django.urls import reverse_lazy

from main.views import BaseApplicationFormView
from django.utils.translation import gettext_lazy as _

from product.models import Product


class ProductView(BaseApplicationFormView):
    template_name = "product/product.html"
    success_url = reverse_lazy("product:product")
    title = _("Продукція від компанії HanBild | HanBild.com.ua")

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context["product"] = Product.objects.filter(index_on_page=0).order_by("index_on_page")
        return context
