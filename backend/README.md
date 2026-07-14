# Backend Skeleton

后端采用：

```text
Python + Django + Django REST Framework
PostgreSQL
Redis + Celery
```

推荐 Django 项目名：

```text
enterprise_ai_assistant
```

后端模块边界：

```text
accounts          用户、登录、角色、权限
organizations     组织 / 租户预留
portal            企业管理 AI 助手门户
assistants        助手定义、助手状态、助手入口
workflows         AI 工作流 demo 配置
files             上传文件、生成文件、下载鉴权
tasks             异步任务状态
audit_logs        操作审计
settings_center   系统设置
plan_assistant    计划管理助手业务子域
```

注意：

- `plan_assistant` 不是系统顶层。
- 新 API 不使用 `/api/plans/*` 顶层路径。
- 计划管理助手 API 应放在 `/api/assistants/plan/*` 下。
