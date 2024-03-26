from django.shortcuts import redirect
from main.forms import OnlineApplicationForm
from main.models import ClientMessages
from main.sending_email_service import send_email


def feedback_from(request):
    return {}