from django.http import JsonResponse
from django.urls import path


def workflow_list(_request):
    return JsonResponse({"items": [], "domain": "workflows", "mode": "demo"})


urlpatterns = [
    path("", workflow_list),
]
