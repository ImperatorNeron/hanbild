from django.shortcuts import render
from django.urls import reverse_lazy

from catalog.models import Categories
from main.views import BaseApplicationFormView
from django.utils.translation import gettext_lazy as _

import product
from product.models import (
    Product,
    ProductCharacteristics,
    ProductPhotos,
    ProductVideos,
)


class ProductView(BaseApplicationFormView):
    template_name = "product/product.html"
    success_url = reverse_lazy("product:product")
    title = _("Продукція від компанії HanBild | HanBild.com.ua")

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context["product"] = Product.objects.order_by("index_on_page")
        return context


class ProductDetailView(BaseApplicationFormView):
    template_name = "product/product_page.html"
    success_url = reverse_lazy("product:product")
    title = _("Продукція від компанії HanBild | HanBild.com.ua")

    def get(self, request, product_details_slug, *args, **kwargs):
        category = Categories.objects.get(slug=product_details_slug)
        product = Product.objects.get(category=category)
        product_characteristics = ProductCharacteristics.objects.filter(
            category=product
        )
        product_photos = ProductPhotos.objects.filter(category=product)
        product_videos = ProductVideos.objects.filter(category=product)

        return render(
            request,
            self.template_name,
            {
                "product": product,
                "product_paragraphs": {},
                "product_characteristics": product_characteristics,
                "product_photos": product_photos,
                "product_videos": product_videos,
            },
        )

    def dispatch(self, request, *args, **kwargs):
        self.success_url = reverse_lazy(
            "product:product_details",
            kwargs={
                "product_details_slug": kwargs["product_details_slug"],
            },
        )
        return super().dispatch(request, *args, **kwargs)
