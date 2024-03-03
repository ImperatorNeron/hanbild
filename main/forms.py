import re
from django import forms

class OnlineApplicationForm(forms.Form):
    person_initials = forms.CharField()
    email = forms.CharField()
    phone_number = forms.CharField()
    comment = forms.CharField(widget=forms.Textarea)
    agreedment = forms.BooleanField()

    def clean_person_initials(self):
        data = self.cleaned_data["person_initials"]

        if not re.match(r"^[^\W\d_]+(\s[^\W\d_]+)*$", data, re.UNICODE):
            raise forms.ValidationError("Ініціали повинні містити лише букви")
    
        return data