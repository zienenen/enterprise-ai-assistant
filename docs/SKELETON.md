# 工程骨架确认

## 1. 顶层定位

本工程顶层是“企业管理 AI 助手平台”，不是计划管理系统。

计划管理助手是一期开通的第一个完整业务助手。

## 2. 后端骨架

```text
backend/
  enterprise_ai_assistant/
  accounts/
  organizations/
  portal/
  assistants/
  workflows/
  files/
  tasks/
  audit_logs/
  settings_center/
  plan_assistant/
```

## 3. 前端骨架

```text
frontend/
  app/
  components/
  features/
    portal/
    assistants/
    plan-assistant/
    workflows/
    settings/
  lib/
```

## 4. API 分层

平台级 API：

```text
/api/auth/*
/api/organizations/*
/api/portal/*
/api/assistants/*
/api/workflows/*
/api/files/*
/api/tasks/*
/api/audit-logs/*
/api/settings/*
```

计划管理助手 API：

```text
/api/assistants/plan/uploads/*
/api/assistants/plan/items/*
/api/assistants/plan/reviews/*
/api/assistants/plan/conversions/*
/api/assistants/plan/exports/*
/api/assistants/plan/archives/*
/api/assistants/plan/dashboards/*
```

## 5. 待研发落地

- 初始化真实 Django 项目。
- 初始化真实 Next.js 项目。
- 接入 PostgreSQL 配置。
- 接入 Redis + Celery。
- 建立平台门户和计划管理助手首屏。
