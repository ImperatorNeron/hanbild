from pyexpat.errors import messages
from urllib import request
from django.db import transaction
from django.forms import ValidationError
from django.http import JsonResponse
from django.shortcuts import redirect, render
from django.urls import reverse_lazy
from django.utils.translation import gettext_lazy as _
from django.views import View
from django.views.generic import FormView

from cart.models import Cart
from main.views import BaseApplicationFormView
from order.forms import CreateOrderForm
from order.models import OrderDetails, OrderItem


class OrderView(FormView):

    template_name = "order/order.html"
    form_class = CreateOrderForm
    title = "HanBild.com.ua"
    success_url = reverse_lazy("order:success-order")

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context["title"] = self.title
        return context

    def form_valid(self, form):
        super().form_valid(form)
        try:
            with transaction.atomic():
                session_key = self.request.session.session_key
                cart_items = Cart.objects.filter(session_key=session_key)
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
                            name=item.item.name,
                            price=item.goods_price(),
                            quantity=item.quantity,
                        )
                    cart_items.delete()
                return JsonResponse({"success": True, "url": self.success_url})
        except ValidationError as e:
            messages.success(request, str(e))
            return JsonResponse({"success": False, "form_errors": form.errors})

    def form_invalid(self, form):
        form_errors = (
            ("#user_city", form.errors.get("city")),
            ("#user_address", form.errors.get("delivery_address")),
            ("#user_email", form.errors.get("email")),
            ("#user_name_", form.errors.get("name")),
            ("#user_surname", form.errors.get("surname")),
            ("#user_phone_number", form.errors.get("phone_number")),
        )
        return JsonResponse({"success": False, "form_errors": form_errors})


# class OrderView(View):

#     def get(self, request, *args, **kwargs):
#         form = CreateOrderForm()
#         return render(request, "order/order.html", context={"form": form})

#     def post(self, request, *args, **kwargs):
#         form = CreateOrderForm(data=request.POST)
#         if form.is_valid():
#             try:
#                 with transaction.atomic():
#                     session_key = request.session.session_key
#                     cart_items = Cart.objects.filter(session_key=session_key)
#                     if cart_items.exists():
#                         order = OrderDetails.objects.create(
#                             name=form.cleaned_data["name"],
#                             surname=form.cleaned_data["surname"],
#                             phone_number=form.cleaned_data["phone_number"],
#                             email=form.cleaned_data["email"],
#                             city=form.cleaned_data["city"],
#                             delivery_address=form.cleaned_data["delivery_address"],
#                             message=form.cleaned_data["message"],
#                         )
#                         for item in cart_items:
#                             print(
#                                 order,
#                                 item.item,
#                                 item.item.name,
#                                 item.goods_price(),
#                                 item.quantity,
#                             )
#                             OrderItem.objects.create(
#                                 order=order,
#                                 product=item.item,
#                                 name=item.item.name,
#                                 price=item.goods_price(),
#                                 quantity=item.quantity,
#                             )
#                         cart_items.delete()
#                     return redirect("order:success-order")
#             except ValidationError as e:
#                 messages.success(request, str(e))
#                 return redirect("order:order")
#         else:
#             print(form.errors)
#             return render(request, "order/order.html", context={"form": form})


class SuccessOrderView(BaseApplicationFormView):
    template_name = "order/success_order.html"
    success_url = reverse_lazy("order:success-order")
