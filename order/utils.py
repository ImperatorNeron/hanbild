import time
from django.db import transaction
from django.forms import ValidationError
from django.http import JsonResponse

from cart.models import Cart
from main.sending_email_service import send_email
from order.models import OrderDetails, OrderItem


def create_order_transaction(form, **kwargs):
    try:
        with transaction.atomic():
            cart_items = Cart.objects.filter(session_key=kwargs["session_key"])
            if cart_items.exists():
                order = OrderDetails.objects.create(
                    name=form.cleaned_data["name"],
                    surname=form.cleaned_data["surname"],
                    phone_number=form.cleaned_data["phone_number"],
                    email=form.cleaned_data["email"],
                    city=form.cleaned_data["city"],
                    delivery_address=form.cleaned_data["delivery_address"],
                    message=form.cleaned_data["message"],
                )
                for item in cart_items:
                    OrderItem.objects.create(
                        order=order,
                        product=item.item,
                        name=item.item.name_uk,
                        price=item.goods_price(),
                        quantity=item.quantity,
                    )
                form.cleaned_data["order_id"] = order.id
                form.cleaned_data["cart_items"] = cart_items
                form.cleaned_data["total_price"] = cart_items.total_price()


                form.cleaned_data["title_1"] = "Дякуємо за Ваше замовлення!"
                form.cleaned_data["title_2"] = (
                    "Найближчим часом з вами зв'яжеться наш менеджер."
                )
                send_email(
                    form.cleaned_data,
                    "email_letters/cart_message.html",
                    send_to=form.cleaned_data["email"],
                )
                form.cleaned_data["title_1"] = "У вас нове замовлення!"
                form.cleaned_data["title_2"] = (
                    "Зв'яжіться із клієнтом для подальшої співпраці."
                )
                send_email(
                    form.cleaned_data,
                    "email_letters/cart_message.html",
                )
                cart_items.delete()
            return JsonResponse({"success": True, "url": kwargs["success_url"]})
    except ValidationError as e:
        print("Problem")


def order_fields_errors(form, **kwargs):
    time.sleep(0.5)
    form_errors = (
        ("#user_city", form.errors.get("city")),
        ("#user_address", form.errors.get("delivery_address")),
        ("#user_email", form.errors.get("email")),
        ("#user_name_", form.errors.get("name")),
        ("#user_surname", form.errors.get("surname")),
        ("#user_phone_number", form.errors.get("phone_number")),
    )
    return JsonResponse({"success": False, "form_errors": form_errors})
