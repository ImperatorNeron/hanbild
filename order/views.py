from django.urls import reverse_lazy
from django.utils.translation import gettext_lazy as _
from main.views import BaseApplicationFormView

class OrderView(BaseApplicationFormView):
    template_name = "order/order.html"
    title = _("Оформлення замовлення | HanBild.com.ua")
    success_url = reverse_lazy("catalog:catalog")
