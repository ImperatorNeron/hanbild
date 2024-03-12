from django.urls import path

from catalog import views

app_name = "catalog"

urlpatterns = [
    path("", views.catalog, name="catalog"),
    path("", views.catalog, name="search"),
    path("<slug:item_slug>", views.goods, name="goods"),
]
