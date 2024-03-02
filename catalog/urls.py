from django.urls import path

from catalog import views

app_name = "catalog"

urlpatterns = [
    path("", views.catalog, name="catalog"),
    path("<slug:category_slug>", views.category_products, name="category"),
]
