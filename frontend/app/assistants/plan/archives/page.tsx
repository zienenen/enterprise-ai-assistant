import { Archive, Lock, Unlock } from "lucide-react";
import { buttonClass, DataTable, Field, inputClass, Panel, PlanPageFrame, secondaryButtonClass, StatCard, StatusBadge } from "@/features/plan-assistant/ui";

export default function ArchivesPage() {
  return (
    <PlanPageFrame title="数据封存" description="管理员按日期批次封存或解封数据，封存后允许查看和导出，但禁止普通写入。">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <StatCard icon={Archive} label="封存批次" value="6" hint="历史批次只读" />
        <StatCard icon={Unlock} label="开放批次" value="2" hint="本周与下周仍可写入" />
        <StatCard icon={Lock} label="强制修改" value="3 次" hint="均已记录审计日志" />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-[420px_minmax(0,1fr)]">
        <Panel title="封存/解封操作">
          <div className="space-y-4">
            <Field label="日期批次"><input className={inputClass} defaultValue="2026-07-13" type="date" /></Field>
            <Field label="操作类型">
              <select className={inputClass}><option>封存批次</option><option>解封批次</option></select>
            </Field>
            <Field label="操作原因">
              <textarea className="min-h-24 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-slate-950" placeholder="填写封存、解封或强制修改原因" />
            </Field>
            <div className="flex gap-3">
              <button className={buttonClass} type="button"><Lock size={16} />确认执行</button>
              <button className={secondaryButtonClass} type="button">查看影响范围</button>
            </div>
          </div>
        </Panel>

        <Panel title="批次状态与审计记录">
          <DataTable
            columns={["日期批次", "状态", "操作人", "操作时间", "原因", "操作"]}
            rows={[
              ["2026-07-13", <StatusBadge tone="green" key="a1">未封存</StatusBadge>, "-", "-", "-", "封存"],
              ["2026-07-06", <StatusBadge tone="slate" key="a2">已封存</StatusBadge>, "管理员", "2026-07-09 18:00", "周报归档", "解封"],
              ["2026-06-29", <StatusBadge tone="slate" key="a3">已封存</StatusBadge>, "管理员", "2026-07-02 18:30", "月度归档", "查看审计"],
              ["2026-06-22", <StatusBadge tone="red" key="a4">强制修改</StatusBadge>, "管理员", "2026-06-26 09:15", "修正责任人", "查看审计"],
            ]}
          />
        </Panel>
      </div>
    </PlanPageFrame>
  );
}
