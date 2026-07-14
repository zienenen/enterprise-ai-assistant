from django.conf import settings
from django.db import models

from files.models import FileAsset
from organizations.models import Organization


class PlanAssistantItem(models.Model):
    class DataType(models.TextChoices):
        PLAN = "plan", "计划"
        SUMMARY = "summary", "总结"

    organization = models.ForeignKey(Organization, on_delete=models.PROTECT, related_name="plan_items")
    date_batch = models.CharField(max_length=32)
    person_name = models.CharField(max_length=120)
    data_type = models.CharField(max_length=32, choices=DataType.choices)
    module = models.CharField(max_length=120, blank=True)
    category = models.CharField(max_length=120, blank=True)
    task_key = models.CharField(max_length=120)
    content = models.TextField(blank=True)
    responsible = models.CharField(max_length=120, blank=True)
    planned_hours = models.DecimalField(max_digits=8, decimal_places=2, null=True, blank=True)
    actual_hours = models.DecimalField(max_digits=8, decimal_places=2, null=True, blank=True)
    completion_status = models.CharField(max_length=120, blank=True)
    source_file = models.ForeignKey(FileAsset, on_delete=models.SET_NULL, null=True, blank=True)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        indexes = [
            models.Index(fields=["organization", "date_batch", "person_name", "data_type"]),
        ]

    def __str__(self) -> str:
        return f"{self.date_batch}:{self.person_name}:{self.data_type}:{self.task_key}"


class PlanAssistantUploadBatch(models.Model):
    organization = models.ForeignKey(Organization, on_delete=models.PROTECT, related_name="plan_upload_batches")
    date_batch = models.CharField(max_length=32)
    upload_type = models.CharField(max_length=32)
    person_name = models.CharField(max_length=120, blank=True)
    file = models.ForeignKey(FileAsset, on_delete=models.PROTECT)
    status = models.CharField(max_length=32, default="pending")
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT)
    created_at = models.DateTimeField(auto_now_add=True)


class PlanAssistantReviewReport(models.Model):
    organization = models.ForeignKey(Organization, on_delete=models.PROTECT, related_name="plan_review_reports")
    date_batch = models.CharField(max_length=32)
    person_name = models.CharField(max_length=120)
    data_type = models.CharField(max_length=32, choices=PlanAssistantItem.DataType.choices)
    issue_count = models.PositiveIntegerField(default=0)
    generated_at = models.DateTimeField(auto_now_add=True)


class PlanAssistantReviewIssue(models.Model):
    report = models.ForeignKey(PlanAssistantReviewReport, on_delete=models.CASCADE, related_name="issues")
    severity = models.CharField(max_length=32)
    code = models.CharField(max_length=80)
    message = models.TextField()
    row_index = models.PositiveIntegerField(null=True, blank=True)
    field = models.CharField(max_length=120, blank=True)


class PlanAssistantExportJob(models.Model):
    organization = models.ForeignKey(Organization, on_delete=models.PROTECT, related_name="plan_export_jobs")
    date_batch = models.CharField(max_length=32)
    export_type = models.CharField(max_length=64)
    status = models.CharField(max_length=32, default="pending")
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT)
    created_at = models.DateTimeField(auto_now_add=True)


class PlanAssistantExportFile(models.Model):
    job = models.ForeignKey(PlanAssistantExportJob, on_delete=models.CASCADE, related_name="files")
    file = models.ForeignKey(FileAsset, on_delete=models.PROTECT)
    status = models.CharField(max_length=32, default="generated")


class PlanAssistantArchiveRecord(models.Model):
    organization = models.ForeignKey(Organization, on_delete=models.PROTECT, related_name="plan_archives")
    date_batch = models.CharField(max_length=32)
    is_archived = models.BooleanField(default=True)
    note = models.TextField(blank=True)
    operated_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT)
    operated_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ("organization", "date_batch")
