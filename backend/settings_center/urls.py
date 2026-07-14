from django.http import JsonResponse
from django.urls import path


def settings_index(_request):
    return JsonResponse({"items": [], "domain": "settings_center"})


urlpatterns = [
    path("", settings_index),
]
