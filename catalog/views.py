from django.shortcuts import render
from django.urls import reverse_lazy
from django.utils.translation import gettext_lazy as _

from catalog.models import Categories, Goods, GoodsImage, GoodsVideo
from catalog.utils import check_filters
from main.views import BaseApplicationFormView


class CatalogView(BaseApplicationFormView):
    template_name = "catalog/catalog.html"
    success_url = reverse_lazy("catalog:catalog")
    title = _("Каталог компанії | HanBild.com.ua")

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context["goods"] = check_filters(self.request)
        return context


class ItemView(BaseApplicationFormView):
    template_name = "catalog/item.html"
    success_url = reverse_lazy("catalog:item")

    def get(self, request, item_slug, *args, **kwargs):
        item = Goods.objects.get(slug=item_slug)
        item_photos = GoodsImage.objects.filter(good=item)
        item_videos = GoodsVideo.objects.filter(good=item)
        return render(
            request,
            self.template_name,
            {
                "item": item,
                "item_photos": item_photos,
                "item_videos": item_videos,
                "title": f"{item.name} | HanBild.com.ua",
            },
        )

    def dispatch(self, request, *args, **kwargs):
        self.success_url = reverse_lazy(
            "catalog:item", kwargs={"item_slug": kwargs["item_slug"]}
        )
        return super().dispatch(request, *args, **kwargs)
