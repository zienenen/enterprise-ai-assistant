from django.db import models

from assistants.models import Assistant


class WorkflowDemo(models.Model):
    assistant = models.ForeignKey(Assistant, on_delete=models.CASCADE, related_name="workflow_demos")
    name = models.CharField(max_length=120)
    key = models.CharField(max_length=80)
    status = models.CharField(max_length=32, default="demo")
    config = models.JSONField(default=dict, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ("assistant", "key")

    def __str__(self) -> str:
        return self.name


class WorkflowNode(models.Model):
    workflow = models.ForeignKey(WorkflowDemo, on_delete=models.CASCADE, related_name="nodes")
    name = models.CharField(max_length=120)
    node_type = models.CharField(max_length=64, default="demo")
    sort_order = models.PositiveIntegerField(default=100)
    config = models.JSONField(default=dict, blank=True)

    def __str__(self) -> str:
        return self.name
