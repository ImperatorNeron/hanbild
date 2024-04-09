from django.http import JsonResponse

from main.models import ClientMessages


def create_user_message(form, **kwargs):
    ClientMessages.objects.create(
        name=form.cleaned_data["name"],
        number_or_email=form.cleaned_data["number_or_email"],
        message=form.cleaned_data["message"],
    )
    # send_email(form.cleaned_data)
    print(form.cleaned_data)
    return JsonResponse({"success": True, "message": "Повідомлення надійшло успішно!"})

def contact_form_errors(form, **kwargs):
    return JsonResponse({"success": False, "form_errors": form.errors})