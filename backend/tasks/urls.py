from django.http import JsonResponse
from django.urls import path


def task_list(_request):
    return JsonResponse({"items": [], "domain": "tasks"})


urlpatterns = [
    path("", task_list),
]
