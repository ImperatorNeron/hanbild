from email import message
import re
from django import forms


class CreateOrderForm(forms.Form):
    name = forms.CharField()
    surname = forms.CharField()
    phone_number = forms.CharField()
    email = forms.CharField()
    city = forms.CharField()
    delivery_address = forms.CharField()
    message = forms.CharField(widget=forms.Textarea)
