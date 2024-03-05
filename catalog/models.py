from django.db import models
from django.urls import reverse


class Categories(models.Model):
    name = models.CharField(max_length=150, unique=True, verbose_name="Назва")
    slug = models.SlugField(
        max_length=200, unique=True, blank=True, null=True, verbose_name="URL"
    )
    image = models.ImageField(
        upload_to="categories_images", blank=True, null=True, verbose_name="Зображення"
    )
    description = models.TextField(null=True, verbose_name="Опис категорії")

    class Meta:
        db_table = "category"
        verbose_name = "категорію"
        verbose_name_plural = "Категорії"

    def __str__(self):
        return f"{self.name}"

    def get_absolute_url(self):
        return reverse("catalog:category", kwargs={"category_slug": self.slug})


class CategoryDescription(models.Model):
    category_name = models.ForeignKey(to=Categories, on_delete=models.SET_NULL, null=True)
    is_main_content = models.BooleanField(default=False, verbose_name="Головний контент")
    text_content = models.TextField(verbose_name="Опис категорії")

    def __str__(self):
        return f"{self.category_name} - {self.text_content[:20]}"

    class Meta:
        db_table = "category_description"
        verbose_name = "описи категорії"
        verbose_name_plural = "Описи категорій"