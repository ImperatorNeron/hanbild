from django.shortcuts import render
from django.urls import reverse_lazy

from main.views import BaseApplicationFormView


class ProductView(BaseApplicationFormView):
    template_name = "product/product.html"
    success_url = reverse_lazy("product:product")
    
