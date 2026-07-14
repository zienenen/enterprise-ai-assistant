from django.http import JsonResponse
from django.urls import path


def portal_home(_request):
    return JsonResponse(
        {
            "platform": "企业管理 AI 助手平台",
            "assistants": [
                {"key": "plan", "name": "计划管理助手", "status": "online"},
                {"key": "policy", "name": "制度理解助手", "status": "coming_soon"},
                {"key": "procurement", "name": "采购助手", "status": "coming_soon"},
                {"key": "contract", "name": "合同审查助手", "status": "coming_soon"},
                {"key": "hr", "name": "人事助手", "status": "coming_soon"},
                {"key": "finance", "name": "财务助手", "status": "coming_soon"},
                {"key": "meeting", "name": "会议纪要助手", "status": "coming_soon"},
            ],
        }
    )


urlpatterns = [
    path("", portal_home),
]
