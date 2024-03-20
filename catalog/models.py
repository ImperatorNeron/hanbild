from django.db import models
from django.urls import reverse

from catalog.utils import translate_categories, translate_goods, validate_slug


class Categories(models.Model):
    name = models.CharField(max_length=150, unique=True, verbose_name="Назва")
    slug = models.SlugField(
        max_length=200,
        unique=True,
        null=True,
        verbose_name="URL",
    )

    class Meta:
        db_table = "category"
        verbose_name = "категорію"
        verbose_name_plural = "Категорії"

    def __str__(self):
        return f"{self.name}"

    def save(self, *args, **kwargs):
        translate_categories(self)
        return super().save(*args, **kwargs)


class Goods(models.Model):
    category = models.ForeignKey(to=Categories, on_delete=models.SET_NULL, null=True)
    slug = models.SlugField(max_length=200, blank=True, null=True, verbose_name="URL")
    name = models.CharField(max_length=150, verbose_name="Назва товару")
    preview_image = models.ImageField(
        upload_to="goods_images", null=True, blank=True, verbose_name="Зображення"
    )
    price = models.FloatField(verbose_name="Ціна товару", default=0)
    upload_time = models.DateTimeField(auto_now_add=True)
    description = models.TextField(verbose_name="Опис товару", null=True, blank=True)

    def __str__(self):
        return f"{self.category.name} - {self.name}"

    class Meta:
        db_table = "goods"
        verbose_name = "товар"
        verbose_name_plural = "Товар"

    def save(self, *args, **kwargs):
        translate_goods(self)
        validate_slug(self)
        return super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse("catalog:goods", kwargs={"item_slug": self.slug})


class GoodsImage(models.Model):
    good = models.ForeignKey(to=Goods, on_delete=models.SET_NULL, null=True)
    image = models.ImageField(
        upload_to="goods_images",
        verbose_name="Зображення",
        null=True,
    )

    def __str__(self):
        return f"{self.good.name} - {self.image.name}"

    class Meta:
        db_table = "goods_images"
        verbose_name = "фотографію товару"
        verbose_name_plural = "Фотографії товару"
