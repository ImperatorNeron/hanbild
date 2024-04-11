from django.db import transaction
from django.forms import ValidationError
from django.http import JsonResponse

from cart.models import Cart
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
                cart_items.delete()
            return JsonResponse({"success": True, "url": kwargs["success_url"]})
    except ValidationError as e:
        print("Problem")


def order_fields_errors(form, **kwargs):
    form_errors = (
        ("#user_city", form.errors.get("city")),
        ("#user_address", form.errors.get("delivery_address")),
        ("#user_email", form.errors.get("email")),
        ("#user_name_", form.errors.get("name")),
        ("#user_surname", form.errors.get("surname")),
        ("#user_phone_number", form.errors.get("phone_number")),
    )
    return JsonResponse({"success": False, "form_errors": form_errors})
