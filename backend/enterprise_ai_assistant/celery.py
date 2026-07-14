import os

from celery import Celery


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "enterprise_ai_assistant.settings")

app = Celery("enterprise_ai_assistant")
app.config_from_object("django.conf:settings", namespace="CELERY")
app.autodiscover_tasks()
