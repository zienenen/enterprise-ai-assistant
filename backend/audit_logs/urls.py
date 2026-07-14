from django.http import JsonResponse
from django.urls import path


def audit_log_list(_request):
    return JsonResponse({"items": [], "domain": "audit_logs"})


urlpatterns = [
    path("", audit_log_list),
]
