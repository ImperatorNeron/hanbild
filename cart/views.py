from django.http import JsonResponse
from django.shortcuts import redirect, render
from django.template.loader import render_to_string

from cart.models import Cart
from catalog.models import Goods


def cart_add(request, product_slug):
    item = Goods.objects.get(slug=product_slug)

    carts = Cart.objects.filter(
        session_key=request.session.session_key, item=item
    )
    if carts.exists():
        cart = carts.first()
        if cart:
            cart.quantity += 1
            cart.save()
    else:
        Cart.objects.create(
            session_key=request.session.session_key, item=item, quantity=1
        )

    # user_carts = get_user_carts(request)

    # cart_items_html = render_to_string(
    #     "carts/includes/_cart.html", {"carts": user_carts}, request=request
    # )

    # response_data = {
    #     "message": "Товар доданий в корзину",
    #     "cart_items_html": cart_items_html,
    # }

    # return JsonResponse(response_data)
        
    return redirect(request.META["HTTP_REFERER"])

def cart_change(request, product_slug): ...


def cart_remove(request, product_id):
    cart = Cart.objects.get(id=product_id)
    cart.delete()
    return redirect(request.META["HTTP_REFERER"])
    
