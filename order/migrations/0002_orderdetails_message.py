# Generated by Django 4.2.10 on 2024-04-07 20:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("order", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="orderdetails",
            name="message",
            field=models.TextField(blank=True, null=True, verbose_name="Повідомлення"),
        ),
    ]
