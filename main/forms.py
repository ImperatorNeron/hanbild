import re
from django import forms
from django.utils.translation import gettext_lazy as _

from main.models import ClientMessages


class OnlineApplicationForm(forms.ModelForm):
    class Meta:
        model = ClientMessages
        fields = ["name", "number_or_email", "message"]

    def clean_number_or_email(self):
        data = self.cleaned_data["number_or_email"]
        # Перевірка, чи введено номер телефону або електронну пошту
        if not re.match(r"^[\w\.-]+@[\w\.-]+$", data) and not re.match(
            r"^\+?1?\d{9,15}$", data
        ):
            raise forms.ValidationError(
                "Введіть дійсний номер телефону або електронну пошту"
            )
        return data
