from django.http import JsonResponse
from django.urls import path


def file_list(_request):
    return JsonResponse({"items": [], "domain": "files"})


urlpatterns = [
    path("", file_list),
]
