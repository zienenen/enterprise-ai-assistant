from django.http import JsonResponse
from django.urls import path


def organization_list(_request):
    return JsonResponse({"items": [], "domain": "organizations"})


urlpatterns = [
    path("", organization_list),
]
