from django.http import JsonResponse
from django.urls import path


def plan_assistant_index(_request):
    return JsonResponse({"assistant": "plan", "name": "计划管理助手"})


def placeholder(_request, section: str):
    return JsonResponse({"assistant": "plan", "section": section, "items": []})


urlpatterns = [
    path("", plan_assistant_index),
    path("uploads/", placeholder, {"section": "uploads"}),
    path("items/", placeholder, {"section": "items"}),
    path("reviews/", placeholder, {"section": "reviews"}),
    path("conversions/", placeholder, {"section": "conversions"}),
    path("exports/", placeholder, {"section": "exports"}),
    path("archives/", placeholder, {"section": "archives"}),
    path("dashboards/", placeholder, {"section": "dashboards"}),
]
