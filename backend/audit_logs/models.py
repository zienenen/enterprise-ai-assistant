from django.conf import settings
from django.db import models

from organizations.models import Organization


class OperationLog(models.Model):
    organization = models.ForeignKey(Organization, on_delete=models.PROTECT, related_name="operation_logs")
    actor = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT)
    action = models.CharField(max_length=120)
    target_type = models.CharField(max_length=120)
    target_id = models.CharField(max_length=120, blank=True)
    detail = models.JSONField(default=dict, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f"{self.action}:{self.target_type}"
