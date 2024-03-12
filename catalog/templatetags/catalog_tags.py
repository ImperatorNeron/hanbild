from django import template
from django.utils.http import urlencode

from catalog.models import Categories

register = template.Library()

@register.simple_tag()
def tag_get_categories():
    return Categories.objects.all()