from django.contrib import admin

from order.models import OrderDetails, OrderItem

admin.site.register(OrderDetails)
admin.site.register(OrderItem)