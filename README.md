# 企业管理 AI 助手平台

本工程是完全重构的新系统骨架，不是旧 `plan-management` 项目的延续。

顶层产品定位：

```text
企业管理 AI 助手平台
```

一期范围：

- 企业管理 AI 助手门户。
- 平台总览。
- 系统设置。
- 计划管理助手完整业务闭环。
- 其他助手以待建设状态展示。

核心技术栈：

```text
前端：Next.js + React + TypeScript + Tailwind CSS + shadcn/ui
后端：Python + Django + Django REST Framework
数据库：PostgreSQL
缓存 / 队列：Redis
异步任务：Celery
AI：一期只做 demo 展示，中期接入 LangGraph
```

工程原则：

- 计划管理助手只是平台下的一个子助手。
- 不允许把 `plans` 或 `/api/plans/*` 作为系统顶层。
- 旧项目只参考业务流程、字段习惯、PPT 模板处理经验，不迁移旧目录命名。
- 开发、测试、生产环境统一使用 PostgreSQL。
