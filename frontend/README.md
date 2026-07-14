# Frontend Skeleton

前端采用：

```text
Next.js + React + TypeScript + Tailwind CSS + shadcn/ui
```

推荐页面层级：

```text
/login
/portal
/overview
/settings
/assistants/plan
/assistants/plan/dashboard
/assistants/plan/my-workspace
/assistants/plan/uploads
/assistants/plan/master-ppt
/assistants/plan/data
/assistants/plan/reviews
/assistants/plan/exports
/assistants/plan/archives
```

原则：

- 登录后第一屏是 `/portal`。
- 平台一级不展示计划管理助手内部菜单。
- 点击计划管理助手卡片后，才进入 `/assistants/plan/*`。
- 其他助手一期只展示待建设状态。
