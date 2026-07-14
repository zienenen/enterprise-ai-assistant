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

禁止在新系统中把 `/api/plans/*` 作为顶层 API。计划管理只是助手域，必须挂在 `/api/assistants/plan/*` 下。

## 5. 首页与导航

登录后第一屏必须是企业管理 AI 助手门户，不是计划管理页面。

平台一级导航只展示平台级能力：

- 助手门户
- 总览图
- AI 工作流中心
- 系统设置
- 当前用户 / 当前组织

计划管理助手内部菜单只在进入计划管理助手后出现。

## 6. 待研发落地

- 初始化真实 Django 项目。
- 初始化真实 Next.js 项目。
- 接入 PostgreSQL 配置。
- 接入 Redis + Celery。
- 建立平台门户和计划管理助手首屏。

## 7. 研发派单入口

最新一期研发任务以 [PHASE1_DEVELOPMENT_TASKS.md](./PHASE1_DEVELOPMENT_TASKS.md) 为准。

关键约束：

- 所有新开发进入 `enterprise-ai-assistant` 仓库。
- 旧 `plan-management` 只作为历史业务资料参考。
- 计划管理助手 API 统一放在 `/api/assistants/plan/*`。
- 开发、测试、生产环境统一使用 PostgreSQL。
- 登录后第一屏必须是企业管理 AI 助手门户 `/portal`。
