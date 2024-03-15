import re
from django import forms
from django.utils.translation import gettext_lazy as _


class OnlineApplicationForm(forms.Form):
    person_initials = forms.CharField()
    email = forms.CharField()
    phone_number = forms.CharField()
    comment = forms.CharField(widget=forms.Textarea)
    agreedment = forms.BooleanField()

    def clean_person_initials(self):
        data = self.cleaned_data["person_initials"]

        if not re.match(r"^[^\W\d_]+(\s[^\W\d_]+)*$", data, re.UNICODE):
            raise forms.ValidationError(_("Ініціали повинні містити лише букви"))

        return data

    def clean_phone_number(self):
        data = self.cleaned_data["phone_number"]

        if not data.isdigit():
            raise forms.ValidationError(
                _("Номер телефону повинен складатися лише з цифр!")
            )

        pattern = re.compile(r"^\d{10}$")
        if not pattern.match(data):
            raise forms.ValidationError(_("Неправильний формат номера!"))

        return data
