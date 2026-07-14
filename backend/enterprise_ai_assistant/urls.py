from django.contrib import admin
from django.http import JsonResponse
from django.urls import include, path


def health(_request):
    return JsonResponse({"status": "ok", "service": "enterprise-ai-assistant-api"})


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/health/", health),
    path("api/auth/", include("accounts.urls")),
    path("api/organizations/", include("organizations.urls")),
    path("api/portal/", include("portal.urls")),
    path("api/assistants/", include("assistants.urls")),
    path("api/workflows/", include("workflows.urls")),
    path("api/files/", include("files.urls")),
    path("api/tasks/", include("tasks.urls")),
    path("api/audit-logs/", include("audit_logs.urls")),
    path("api/settings/", include("settings_center.urls")),
    path("api/assistants/plan/", include("plan_assistant.urls")),
]
