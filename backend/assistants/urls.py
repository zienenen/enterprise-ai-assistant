from django.http import JsonResponse
from django.urls import path


def assistant_list(_request):
    return JsonResponse({"items": [], "domain": "assistants"})


urlpatterns = [
    path("", assistant_list),
]
