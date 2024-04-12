from django.core.validators import MinValueValidator
from django.db import models

from catalog.models import Categories
from product.utils import translate_product_paragraph, translate_service


class Product(models.Model):
    category = models.ForeignKey(
        to=Categories,
        on_delete=models.SET_NULL,
        null=True,
        verbose_name="Категорія",
    )
    index_on_page = models.IntegerField(
        verbose_name="Порядковий номер", validators=[MinValueValidator(0)], default=0
    )
    paragraph = models.TextField(verbose_name="Абзац тексту")
    paragraph_image = models.ImageField(
        upload_to="categories_images", verbose_name="Фото до абзацу"
    )

    class Meta:
        db_table = "product"
        verbose_name = "продукт"
        verbose_name_plural = "Продукцію"

    def save(self, *args, **kwargs):
        translate_product_paragraph(self)
        return super().save(*args, **kwargs)
    
    def __str__(self):
        return f"Продукт категорії: '{self.category}'"


class Service(models.Model):
    index_on_page = models.IntegerField(
        verbose_name="Порядковий номер", validators=[MinValueValidator(0)], default=0
    )
    service_name = models.CharField(max_length=200, verbose_name="Назва послуги")
    service_description = models.TextField(verbose_name="Опис послуги")
    service_image = models.ImageField(
        upload_to="services_images", verbose_name="Фото послуги"
    )

    class Meta:
        db_table = "service"
        verbose_name = "сервіс"
        verbose_name_plural = "Сервіси"

    def save(self, *args, **kwargs):
        translate_service(self)
        return super().save(*args, **kwargs)
    
    def __str__(self):
        return f"{self.service_name}"