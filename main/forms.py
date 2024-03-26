import re
from django import forms
from django.utils.translation import gettext_lazy as _

from main.models import ClientMessages


class OnlineApplicationForm(forms.ModelForm):
    class Meta:
        model = ClientMessages
        fields = ["name", "number_or_email", "message"]

    def clean_number_or_email(self):
        data = self.cleaned_data['number_or_email']
        # Перевірка, чи введено номер телефону або електронну пошту
        if not re.match(r'^[\w\.-]+@[\w\.-]+$', data) and not re.match(r'^\+?1?\d{9,15}$', data):
            raise forms.ValidationError("Введіть дійсний номер телефону або електронну пошту")
        return data



    # person_initials = forms.CharField()
    # email = forms.CharField()
    # phone_number = forms.CharField()
    # comment = forms.CharField(widget=forms.Textarea)
    # agreedment = forms.BooleanField()

    # def clean_person_initials(self):
    #     data = self.cleaned_data["person_initials"]

    #     if not re.match(r"^[^\W\d_]+(\s[^\W\d_]+)*$", data, re.UNICODE):
    #         raise forms.ValidationError(_("Ініціали повинні містити лише букви"))

    #     return data

    # def clean_phone_number(self):
    #     data = self.cleaned_data["phone_number"]

    #     if not data.isdigit():
    #         raise forms.ValidationError(
    #             _("Номер телефону повинен складатися лише з цифр!")
    #         )

    #     pattern = re.compile(r"^\d{10}$")
    #     if not pattern.match(data):
    #         raise forms.ValidationError(_("Неправильний формат номера!"))

    #     return data
