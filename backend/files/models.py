from django.conf import settings
from django.db import models

from organizations.models import Organization


class FileAsset(models.Model):
    class Kind(models.TextChoices):
        UPLOAD = "upload", "上传文件"
        GENERATED = "generated", "生成文件"

    organization = models.ForeignKey(Organization, on_delete=models.PROTECT, related_name="file_assets")
    kind = models.CharField(max_length=32, choices=Kind.choices)
    original_name = models.CharField(max_length=255)
    storage_path = models.CharField(max_length=500)
    content_type = models.CharField(max_length=120, blank=True)
    size_bytes = models.BigIntegerField(default=0)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.original_name
