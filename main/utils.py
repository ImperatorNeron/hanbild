from django.http import JsonResponse

from main.models import ClientMessages
from main.sending_email_service import send_email
from django.core.validators import validate_email
from django.core.exceptions import ValidationError


def create_user_message(form, **kwargs):
    ClientMessages.objects.create(
        name=form.cleaned_data["name"],
        number_or_email=form.cleaned_data["number_or_email"],
        message=form.cleaned_data["message"],
    )
    try:
        validate_email(form.cleaned_data["number_or_email"])
        # send_email(form.cleaned_data, send_to=form.cleaned_data["number_or_email"])
    except ValidationError:
        print("Введено номер телефону або неправильну адресу")
    send_email(form.cleaned_data)
    return JsonResponse({"success": True, "message": "Повідомлення надійшло успішно!"})

def contact_form_errors(form, **kwargs):
    return JsonResponse({"success": False, "form_errors": form.errors})