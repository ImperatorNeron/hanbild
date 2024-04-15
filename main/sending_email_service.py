from django.core.mail import EmailMessage
from django.template.loader import render_to_string


def send_email(context, send_to=None):
    print("1")
    if send_to == None:
        send_to = "www.vladik49@gmail.com"
        context["successful_message_1"] = f"Нове повідомлення від {context['name']}"
        context["successful_message_2"] = f"Зв'яжіться з клієнтом за такими даними:"
    else:
        context["successful_message_1"] = f"Дякуємо за ваше повідомлення!"
        context["successful_message_2"] = (
            f"Скоро наш менеджер зв'яжеться з вами, гарного дня!"
        )

    html_content = render_to_string(
        "email_letters/success_message.html",
        context=context,
        # "email_letters/cart_message.html", context=context
    )

    email = EmailMessage(
        subject=f"Нове повідомлення від {context['name']}",
        body=html_content,
        from_email="km2022tm@gmail.com",
        to=[send_to],
    )
    "darushkakle@gmail.com"
    "karina20070@ukr.net"
    "Sorry for this message. If you see this, don`t notice it, maybe i missed another email"
    email.content_subtype = "html"
    email.send()
