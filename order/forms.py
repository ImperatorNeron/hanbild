from email import message
import re
from django import forms
from django.core.validators import EmailValidator, RegexValidator


class CreateOrderForm(forms.Form):

    ukr_eng_alpha_validator = RegexValidator(
        regex="^[a-zA-Zа-яА-ЯіІїЇєЄґҐ]+$",
        message="Поле може містити лише літери українського або англійського алфавіту",
        code="invalid_characters",
    )

    name = forms.CharField(validators=[ukr_eng_alpha_validator])
    surname = forms.CharField(validators=[ukr_eng_alpha_validator])
    phone_number = forms.CharField(
        validators=[
            RegexValidator(
                regex="^\+?1?\d{9,15}$",
                message="Номер телефону повинен бути в форматі +380960001122 або 0960001122",
                code="invalid_phone_number",
            )
        ]
    )
    email = forms.CharField(
        validators=[
            EmailValidator(
                message="Введіть коректну електронну пошту", code="invalid_email"
            )
        ]
    )
    city = forms.CharField(validators=[ukr_eng_alpha_validator])
    delivery_address = forms.CharField()
    message = forms.CharField(widget=forms.Textarea)
