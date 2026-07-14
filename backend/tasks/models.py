from django.db import models

from organizations.models import Organization


class TaskRecord(models.Model):
    class Status(models.TextChoices):
        PENDING = "pending", "等待中"
        RUNNING = "running", "执行中"
        SUCCESS = "success", "成功"
        FAILED = "failed", "失败"

    organization = models.ForeignKey(Organization, on_delete=models.PROTECT, related_name="tasks")
    task_type = models.CharField(max_length=80)
    status = models.CharField(max_length=32, choices=Status.choices, default=Status.PENDING)
    payload = models.JSONField(default=dict, blank=True)
    result = models.JSONField(default=dict, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f"{self.task_type}:{self.status}"
