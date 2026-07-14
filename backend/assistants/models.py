from django.db import models


class Assistant(models.Model):
    class Status(models.TextChoices):
        ONLINE = "online", "已上线"
        DEMO = "demo", "Demo"
        COMING_SOON = "coming_soon", "待建设"

    key = models.CharField(max_length=64, unique=True)
    name = models.CharField(max_length=120)
    description = models.TextField(blank=True)
    status = models.CharField(max_length=32, choices=Status.choices, default=Status.COMING_SOON)
    sort_order = models.PositiveIntegerField(default=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.name
