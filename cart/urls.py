from django.urls import path
from cart import views

app_name = "cart"

urlpatterns = [
    path("cart-add/<slug:product_slug>", views.cart_add, name="cart_add"),
    path("cart-change/<slug:product_slug>", views.cart_change, name="cart_change"),
    path("cart-remove/<int:product_id>", views.cart_remove, name="cart_remove"),
]
