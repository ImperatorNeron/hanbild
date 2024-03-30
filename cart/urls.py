from django.urls import path
from cart import views

app_name = "cart"

urlpatterns = [
    path("", views.CartView.as_view(), name="cart"),
    path("cart-add/", views.cart_add, name="cart_add"),
    path("cart-change/", views.cart_change, name="cart_change"),
    path("cart-remove/", views.cart_remove, name="cart_remove"),
]
