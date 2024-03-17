from django.core.mail import EmailMessage
from django.template.loader import render_to_string


def send_email(form_data):
    context = {
        "name": form_data["person_initials"],
        "email": form_data["email"],
        "phone_number": form_data["phone_number"],
        "comment": form_data["comment"],
    }
    html_content = render_to_string("email_letters/get_message.html", context=context)

    email = EmailMessage(
        subject=f"Нове повідомлення від {form_data['person_initials']}",
        body=html_content,
        from_email="km2022tm@gmail.com",
        to=["www.vladik49@gmail.com"],
    )
    email.content_subtype = "html"
    email.send()
