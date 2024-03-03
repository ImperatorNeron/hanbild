from django.contrib import admin
from django.conf.urls.static import static
from django.urls import path, include

from hanbild import settings
from hanbild.settings import DEBUG

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("main.urls", namespace="main")),
    path("products/", include("catalog.urls", namespace="catalog")),
]

if DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)