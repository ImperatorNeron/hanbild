from django.urls import path

from catalog import views

app_name = "catalog"

urlpatterns = [
    path("", views.products, name="product"),
    # path("catalog/", views.catalog, name="catalog"),
    path("<slug:category_slug>", views.category_products, name="category"),
]
