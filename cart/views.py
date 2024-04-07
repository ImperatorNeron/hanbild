from operator import le
from django.http import JsonResponse
from django.template.loader import render_to_string
from django.urls import reverse_lazy
from django.views import View

from cart.models import Cart
from cart.utils import get_user_carts
from catalog.models import Goods
from main.views import BaseApplicationFormView
from django.utils.translation import gettext_lazy as _


class CardAddView(View):

    def post(self, request):
        item = Goods.objects.get(id=request.POST.get("product_id"))
        carts = Cart.objects.filter(session_key=request.session.session_key, item=item)
        if carts.exists():
            if cart := carts.first():
                cart.quantity += 1
                cart.save()
        else:
            Cart.objects.create(
                session_key=request.session.session_key, item=item, quantity=1
            )

        return JsonResponse(
            {
                "message": "Товар доданий в корзину",
            }
        )


class CartChangeView(View):

    def post(self, request):
        cart = Cart.objects.get(id=request.POST.get("cart_id"))
        cart.quantity = request.POST.get("quantity")
        cart.save()
        user_carts = get_user_carts(request)
        string_html = render_to_string(
            "cart/includes/_included_cart.html", {"carts": user_carts}, request=request
        )
        return JsonResponse(
            {
                "message": "Змінено кількість",
                "cart_items_html": string_html,
                "total_quantity": user_carts.total_quantity(),
            }
        )


class CartRemoveView(View):

    cart_template = "cart/includes/_included_cart.html"
    cart_empty_template = "cart/includes/_included_empty_cart.html"

    def post(self, request):
        try:
            Cart.objects.get(id=request.POST.get("cart_id")).delete()
        except Cart.DoesNotExist:
            print("Помилка: об'єкт не знайдено!")
        user_carts = get_user_carts(request)
        string_html = render_to_string(
            self.cart_template if user_carts else self.cart_empty_template,
            {"carts": user_carts},
            request=request,
        )
        return JsonResponse(
            {
                "message": "Товар видалено з корзини",
                "cart_items_html": string_html,
                "total_quantity": user_carts.total_quantity(),
            }
        )


class CartView(BaseApplicationFormView):
    template_name = "cart/cart.html"
    success_url = reverse_lazy("cart:cart")
    title = _("Корзина")
