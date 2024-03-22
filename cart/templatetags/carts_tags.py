from django import template

from cart.models import Cart

register = template.Library()


@register.simple_tag()
def anonymous_user_carts(request):
    if not request.session.session_key:
        request.session.create()
    return Cart.objects.filter(session_key=request.session.session_key).select_related(
        "item"
    )
