from django.contrib import admin
from django.conf.urls.static import static
from django.urls import path, include
from django.conf.urls.i18n import i18n_patterns

from hanbild import settings
from hanbild.settings import DEBUG

urlpatterns = [
    path("admin/", admin.site.urls),
]

urlpatterns += i18n_patterns(
    path("i18n/", include("django.conf.urls.i18n")),
    path("", include("main.urls", namespace="main")),
    path("catalog/", include("catalog.urls", namespace="catalog")),
    path("cart/", include("cart.urls", namespace="cart")),
    prefix_default_language=False,
)

if DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
