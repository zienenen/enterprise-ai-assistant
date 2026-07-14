import Link from "next/link";
import { Archive, ClipboardCheck, Database, FileUp, LayoutDashboard, Presentation, Repeat2 } from "lucide-react";

const modules = [
  { name: "员工工作台", href: "/assistants/plan/my-workspace", icon: LayoutDashboard },
  { name: "领导看板", href: "/assistants/plan/dashboard", icon: LayoutDashboard },
  { name: "上传解析", href: "/assistants/plan/uploads", icon: FileUp },
  { name: "总 PPT 拆分", href: "/assistants/plan/master-ppt", icon: Presentation },
  { name: "数据维护", href: "/assistants/plan/data", icon: Database },
  { name: "格式检查报告", href: "/assistants/plan/reviews", icon: ClipboardCheck },
  { name: "计划/总结转换", href: "/assistants/plan/conversions", icon: Repeat2 },
  { name: "导出与封存", href: "/assistants/plan/exports", icon: Archive },
];

export default function PlanAssistantPage() {
  return (
    <main className="min-h-screen px-8 py-6">
      <header className="mx-auto flex max-w-7xl items-center justify-between border-b border-slate-200 pb-5">
        <div>
          <Link className="text-sm text-slate-500 underline" href="/portal">
            返回助手门户
          </Link>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">计划管理助手</h1>
          <p className="mt-2 text-sm text-slate-600">
            计划管理是企业管理 AI 助手平台的一期完整业务助手，不是系统顶层。
          </p>
        </div>
      </header>

      <section className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <Link
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300"
              href={module.href}
              key={module.name}
            >
              <Icon className="text-slate-950" size={22} />
              <h2 className="mt-4 text-base font-semibold text-slate-950">{module.name}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">进入计划管理助手内部能力。</p>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
