from django.core.mail import EmailMessage
from django.template.loader import render_to_string


def send_email(context, letter_template, send_to="www.vladik49@gmail.com"):
    html_content = render_to_string(
        letter_template,
        context=context,
    )

    email = EmailMessage(
        subject=f"Нове повідомлення від {context['name']}",
        body=html_content,
        from_email="km2022tm@gmail.com",
        to=[send_to],
    )
    email.content_subtype = "html"
    email.send()
