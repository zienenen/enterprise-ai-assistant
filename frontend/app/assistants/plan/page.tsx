import Link from "next/link";
import {
  Archive,
  ArrowRight,
  ClipboardCheck,
  Database,
  FileUp,
  LayoutDashboard,
  Presentation,
  Repeat2,
  Send,
  Sparkles,
} from "lucide-react";

const quickActions = [
  { name: "我的工作台", href: "/assistants/plan/my-workspace", icon: LayoutDashboard },
  { name: "领导看板", href: "/assistants/plan/dashboard", icon: LayoutDashboard },
  { name: "上传解析", href: "/assistants/plan/uploads", icon: FileUp },
  { name: "总 PPT 拆分", href: "/assistants/plan/master-ppt", icon: Presentation },
  { name: "数据维护", href: "/assistants/plan/data", icon: Database },
  { name: "格式检查", href: "/assistants/plan/reviews", icon: ClipboardCheck },
  { name: "计划/总结转换", href: "/assistants/plan/conversions", icon: Repeat2 },
  { name: "导出与封存", href: "/assistants/plan/exports", icon: Archive },
];

const suggestions = ["帮我检查本周计划格式", "从总结生成下周计划", "汇总本周风险事项", "导出周例会 PPT"];

export default function PlanAssistantPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-8 py-6">
      <header className="mx-auto flex max-w-7xl items-center justify-between border-b border-slate-200 pb-5">
        <div>
          <Link className="text-sm text-slate-500 underline" href="/portal">
            返回助手门户
          </Link>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">计划管理助手</h1>
          <p className="mt-2 text-sm text-slate-600">
            计划管理助手是企业管理 AI 助手平台的一期业务助手，后续工作流能力统一接入对话入口。
          </p>
        </div>
      </header>

      <section className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="flex min-h-[620px] flex-col rounded-lg border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-950 text-white">
                <Sparkles size={20} />
              </div>
              <div>
                <h2 className="text-base font-semibold text-slate-950">对话工作台</h2>
                <p className="text-sm text-slate-500">通过自然语言发起计划、总结、检查、导出等业务动作。</p>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-5 px-6 py-6">
            <div className="max-w-3xl rounded-lg bg-slate-100 px-4 py-3 text-sm leading-6 text-slate-700">
              我可以协助处理计划管理相关工作：上传解析 PPT、检查格式问题、维护计划/总结、生成转换结果、查看看板、导出材料和封存数据。
            </div>
            <div className="ml-auto max-w-2xl rounded-lg bg-slate-950 px-4 py-3 text-sm leading-6 text-white">
              先帮我看一下本周计划材料是否完整，并指出需要修正的地方。
            </div>
            <div className="max-w-3xl rounded-lg bg-slate-100 px-4 py-3 text-sm leading-6 text-slate-700">
              当前为一期演示入口。真实业务执行将逐步接入对应接口和工作流，现阶段可先通过右侧快捷入口进入具体模块。
            </div>
          </div>

          <div className="border-t border-slate-200 p-5">
            <div className="mb-3 flex flex-wrap gap-2">
              {suggestions.map((item) => (
                <button
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 hover:border-slate-300"
                  key={item}
                  type="button"
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-slate-300 bg-white px-4 py-3">
              <input
                className="min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                placeholder="输入计划管理需求，例如：帮我审查本周计划格式"
                type="text"
              />
              <button
                aria-label="发送"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-950 text-white"
                type="button"
              >
                <Send size={17} />
              </button>
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-slate-950">快捷入口</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">一期保留确定性业务入口，后续逐步由对话统一编排。</p>
            <div className="mt-4 space-y-2">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <Link
                    className="flex items-center justify-between rounded-md border border-slate-200 px-3 py-3 text-sm text-slate-800 hover:border-slate-300 hover:bg-slate-50"
                    href={action.href}
                    key={action.name}
                  >
                    <span className="flex items-center gap-3">
                      <Icon size={17} />
                      {action.name}
                    </span>
                    <ArrowRight size={15} />
                  </Link>
                );
              })}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
