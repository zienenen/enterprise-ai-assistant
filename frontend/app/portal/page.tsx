import Link from "next/link";
import { ArrowRight, Building2, FileText, Landmark, ScrollText, Settings, Users } from "lucide-react";

const assistants = [
  { key: "plan", name: "计划管理助手", status: "已上线", href: "/assistants/plan", icon: FileText },
  { key: "policy", name: "制度理解助手", status: "待建设", href: "#", icon: ScrollText },
  { key: "procurement", name: "采购助手", status: "待建设", href: "#", icon: Building2 },
  { key: "contract", name: "合同审查助手", status: "待建设", href: "#", icon: Landmark },
  { key: "hr", name: "人事助手", status: "待建设", href: "#", icon: Users },
  { key: "finance", name: "财务助手", status: "待建设", href: "#", icon: Settings },
];

export default function PortalPage() {
  return (
    <main className="min-h-screen px-8 py-6">
      <header className="mx-auto flex max-w-7xl items-center justify-between border-b border-slate-200 pb-5">
        <div>
          <p className="text-sm text-slate-500">当前组织：广东省人智研究院</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">企业管理 AI 助手平台</h1>
        </div>
        <div className="text-right text-sm text-slate-600">
          <p>当前用户：领导演示账号</p>
          <Link className="mt-2 inline-flex text-slate-950 underline" href="/settings">
            系统设置
          </Link>
        </div>
      </header>

      <section className="mx-auto mt-8 max-w-7xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold text-slate-950">助手门户</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              以企业管理场景为中心组织多个 AI 助手。计划管理助手作为一期完整业务助手上线，其他助手保留扩展入口。
            </p>
          </div>
          <Link
            href="/overview"
            className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 shadow-sm"
          >
            平台总览
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {assistants.map((assistant) => {
            const Icon = assistant.icon;
            const active = assistant.status === "已上线";
            const card = (
              <div className="h-full rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-slate-950 text-white">
                    <Icon size={21} />
                  </div>
                  <span
                    className={
                      active
                        ? "rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
                        : "rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500"
                    }
                  >
                    {assistant.status}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-950">{assistant.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {active ? "进入计划管理助手，完成上传、审查、导出、封存和看板闭环。" : "该助手保留平台扩展入口，一期暂不开放真实业务。"}
                </p>
              </div>
            );

            return active ? (
              <Link key={assistant.key} href={assistant.href}>
                {card}
              </Link>
            ) : (
              <div key={assistant.key}>{card}</div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
