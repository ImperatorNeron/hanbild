from operator import le
from django.http import JsonResponse
from django.shortcuts import redirect, render
from django.template.loader import render_to_string

from cart.models import Cart
from cart.utils import get_user_carts
from catalog.models import Goods


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

    user_carts = get_user_carts(request)

    cart_items_html = render_to_string(
        "cart/includes/_included_cart.html", {"carts": user_carts}, request=request
    )

    response_data = {
        "message": "Товар доданий в корзину",
        "cart_items_html": cart_items_html,
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
        "message": "Товар видалений",
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
        "message": "Товар доданий в корзину",
        "cart_items_html": cart_items_html,
    }

    return JsonResponse(response_data)
