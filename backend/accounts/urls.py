from django.http import JsonResponse
from django.urls import path


def current_user(_request):
    return JsonResponse({"detail": "current user endpoint placeholder"})


urlpatterns = [
    path("me/", current_user),
]
