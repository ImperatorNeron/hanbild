# Generated by Django 4.2.10 on 2024-04-17 15:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("vacancy", "0001_initial"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="vacancy",
            options={"verbose_name": "вакансія", "verbose_name_plural": "Вакансії"},
        ),
        migrations.AlterModelOptions(
            name="vacancydescription",
            options={
                "verbose_name": "опис вакансії",
                "verbose_name_plural": "Опис вакансій",
            },
        ),
        migrations.AlterModelTable(
            name="vacancy",
            table="vacancies",
        ),
        migrations.AlterModelTable(
            name="vacancydescription",
            table="vacancies_description",
        ),
    ]