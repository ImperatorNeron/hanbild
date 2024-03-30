from operator import le
from django.http import JsonResponse
from django.shortcuts import redirect, render
from django.template.loader import render_to_string
from django.urls import reverse_lazy

from cart.models import Cart
from cart.utils import get_user_carts
from catalog.models import Goods
from main.views import BaseApplicationFormView


def cart_add(request):
    item_id = request.POST.get("product_id")
    item = Goods.objects.get(id=item_id)
    carts = Cart.objects.filter(session_key=request.session.session_key, item=item)
    if carts.exists():
        cart = carts.first()
        if cart:
            cart.quantity += 1
            cart.save()
    else:
        Cart.objects.create(
            session_key=request.session.session_key, item=item, quantity=1
        )

    response_data = {
        "message": "Товар доданий в корзину",
    }

    return JsonResponse(response_data)


def cart_change(request):
    cart_id = request.POST.get("cart_id")
    quantity = request.POST.get("quantity")
    cart = Cart.objects.get(id=cart_id)
    cart.quantity = quantity
    cart.save()
    user_carts = get_user_carts(request)

    cart_items_html = render_to_string(
        "cart/includes/_included_cart.html", {"carts": user_carts}, request=request
    )

    response_data = {
        "message": "Змінено кількість",
        "cart_items_html": cart_items_html,
    }

    return JsonResponse(response_data)


def cart_remove(request):
    cart_id = request.POST.get("cart_id")
    cart = Cart.objects.get(id=cart_id)
    cart.delete()
    user_carts = get_user_carts(request)

    cart_items_html = render_to_string(
        "cart/includes/_included_cart.html", {"carts": user_carts}, request=request
    )

    response_data = {
        "message": "Товар видалено з корзини",
        "cart_items_html": cart_items_html,
    }

    return JsonResponse(response_data)


class CartView(BaseApplicationFormView):
    template_name = "cart/cart.html"
    success_url = reverse_lazy("cart:cart")

    def get_context_data(self, **kwargs):
        if not self.request.session.session_key:
            self.request.session.create()
        kwargs.update({"carts": get_user_carts(self.request)})
        context = super().get_context_data(**kwargs)
        return context
