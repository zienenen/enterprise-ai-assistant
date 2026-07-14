# 项目上下文与主线约束

## 1. 当前主项目

当前主项目为：

```text
enterprise-ai-assistant
```

新仓库：

```text
https://github.com/zienenen/enterprise-ai-assistant.git
```

新项目定位：

> 企业管理 AI 助手平台。

顶层产品不是计划管理系统，而是企业管理 AI 助手平台。计划管理助手只是一期第一个完整落地的业务助手。

## 2. 旧项目定位

旧仓库：

```text
https://github.com/zienenen/plan-management.git
```

旧项目定位：

> 历史计划管理系统。

旧项目只允许作为以下内容的参考：

- 业务逻辑
- PPT 模板处理
- 字段习惯
- 历史问题
- 旧流程说明

禁止事项：

- 不要继续在旧项目上做主线开发。
- 不要把旧项目目录结构迁移到新项目。
- 不要把旧项目命名体系作为新系统主结构。
- 不要把 `plan-management` 当作当前主项目。

## 3. 新项目技术栈

新项目技术栈统一为：

```text
前端：Next.js + React + TypeScript + Tailwind CSS + shadcn/ui
后端：Python + Django + Django REST Framework
数据库：PostgreSQL
缓存 / 队列：Redis
异步任务：Celery
AI：一期只做 demo 展示，中期接入 LangGraph
```

数据库要求：

- 开发环境使用 PostgreSQL。
- 测试环境使用 PostgreSQL。
- 生产环境使用 PostgreSQL。
- 不使用 SQLite 作为新系统数据库。

## 4. 新项目工程结构

新项目工程结构：

```text
enterprise-ai-assistant/
  backend/
  frontend/
  docs/
```

所有新开发进入 `enterprise-ai-assistant` 仓库。

## 5. 产品首页规则

登录后第一屏必须是：

```text
企业管理 AI 助手门户
```

不是计划管理页面。

平台一级只展示平台级能力：

- 助手门户
- 总览图
- AI 工作流中心
- 系统设置
- 当前用户 / 当前组织

助手门户展示一组助手卡片：

- 计划管理助手
- 制度理解助手
- 采购助手
- 合同审查助手
- 人事助手
- 财务助手
- 会议纪要助手

其他未建设助手显示“待建设 / 敬请期待”。

## 6. 计划管理助手定位

计划管理助手是平台下的业务助手，不是系统顶层。

进入计划管理助手后，才展示计划管理助手内部功能，例如：

- 助手首页
- 我的计划 / 总结
- 领导看板
- 单人 PPT 上传
- 总 PPT 拆分
- 数据浏览
- 格式审查
- 总结转计划
- 计划转总结
- PPT 导出
- 批量导出
- 数据封存

这些功能不能直接作为平台一级导航。

## 7. API 命名约束

不允许把以下路径作为新系统顶层 API：

```text
/api/plans/*
```

计划管理助手 API 必须统一放在：

```text
/api/assistants/plan/*
```

推荐分组：

```text
/api/assistants/plan/uploads/*
/api/assistants/plan/items/*
/api/assistants/plan/reviews/*
/api/assistants/plan/conversions/*
/api/assistants/plan/exports/*
/api/assistants/plan/archives/*
/api/assistants/plan/dashboards/*
```

平台级 API 使用平台级命名，例如：

```text
/api/auth/*
/api/organizations/*
/api/portal/*
/api/assistants/*
/api/workflows/*
/api/settings/*
```

## 8. 开发要求

1. 所有新开发进入 `enterprise-ai-assistant` 仓库。
2. 不要继续把 `plan-management` 当作主项目。
3. 旧项目只参考逻辑，不迁移旧目录命名。
4. 不允许把 `/api/plans/*` 作为新系统顶层 API。
5. 计划管理助手 API 统一放在 `/api/assistants/plan/*`。
6. 开发、测试、生产环境统一使用 PostgreSQL，不使用 SQLite。
7. 登录后第一屏必须是企业管理 AI 助手门户，不是计划管理页面。

## 9. 一期范围提醒

一期范围：

- 企业管理 AI 助手门户。
- 平台总览图。
- AI 工作流中心 demo。
- 系统设置基础入口。
- 计划管理助手完整业务闭环。
- 其他助手待建设展示。

一期不做：

- 制度助手真实问答。
- 采购助手真实流程。
- LangGraph 完整执行引擎。
- 真实拖拽式工作流编辑器。
- 移动端 App。
- 完整多租户管理后台。
