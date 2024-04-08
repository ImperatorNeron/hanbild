# Generated by Django 4.2.10 on 2024-04-08 08:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Categories",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "name",
                    models.CharField(max_length=150, unique=True, verbose_name="Назва"),
                ),
                (
                    "name_uk",
                    models.CharField(
                        max_length=150, null=True, unique=True, verbose_name="Назва"
                    ),
                ),
                (
                    "name_en",
                    models.CharField(
                        max_length=150, null=True, unique=True, verbose_name="Назва"
                    ),
                ),
                (
                    "slug",
                    models.SlugField(
                        max_length=200, null=True, unique=True, verbose_name="URL"
                    ),
                ),
            ],
            options={
                "verbose_name": "категорію",
                "verbose_name_plural": "Категорії",
                "db_table": "category",
            },
        ),
        migrations.CreateModel(
            name="Goods",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "slug",
                    models.SlugField(
                        blank=True, max_length=200, null=True, verbose_name="URL"
                    ),
                ),
                ("name", models.CharField(max_length=150, verbose_name="Назва товару")),
                (
                    "name_uk",
                    models.CharField(
                        max_length=150, null=True, verbose_name="Назва товару"
                    ),
                ),
                (
                    "name_en",
                    models.CharField(
                        max_length=150, null=True, verbose_name="Назва товару"
                    ),
                ),
                (
                    "preview_image",
                    models.ImageField(
                        blank=True,
                        null=True,
                        upload_to="goods_images",
                        verbose_name="Зображення",
                    ),
                ),
                ("price", models.FloatField(default=0, verbose_name="Ціна товару")),
                ("upload_time", models.DateTimeField(auto_now_add=True)),
                (
                    "description",
                    models.TextField(blank=True, null=True, verbose_name="Опис товару"),
                ),
                (
                    "description_uk",
                    models.TextField(blank=True, null=True, verbose_name="Опис товару"),
                ),
                (
                    "description_en",
                    models.TextField(blank=True, null=True, verbose_name="Опис товару"),
                ),
                (
                    "category",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        to="catalog.categories",
                    ),
                ),
            ],
            options={
                "verbose_name": "товар",
                "verbose_name_plural": "Товар",
                "db_table": "goods",
            },
        ),
        migrations.CreateModel(
            name="GoodsImage",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "image",
                    models.ImageField(
                        null=True, upload_to="goods_images", verbose_name="Зображення"
                    ),
                ),
                (
                    "good",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        to="catalog.goods",
                    ),
                ),
            ],
            options={
                "verbose_name": "фотографію товару",
                "verbose_name_plural": "Фотографії товару",
                "db_table": "goods_images",
            },
        ),
    ]
