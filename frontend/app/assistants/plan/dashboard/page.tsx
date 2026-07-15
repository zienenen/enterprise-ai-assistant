import { AlertTriangle, Archive, CheckCircle2, FileText, Users } from "lucide-react";
import { buttonClass, DataTable, Panel, PlanPageFrame, secondaryButtonClass, StatCard, StatusBadge } from "@/features/plan-assistant/ui";

export default function PlanDashboardPage() {
  return (
    <PlanPageFrame title="领导看板" description="按日期批次查看全员计划/总结提交、风险事项、封存状态和 AI 汇总摘要。">
      <div className="mb-5 grid grid-cols-1 gap-3 md:grid-cols-4">
        <select className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm">
          <option>2026-07-13 周计划批次</option>
          <option>2026-07-06 周总结批次</option>
        </select>
        <select className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm">
          <option>全部部门</option>
          <option>产品部</option>
          <option>研发部</option>
          <option>运营部</option>
        </select>
        <button className={secondaryButtonClass} type="button">刷新统计</button>
        <button className={buttonClass} type="button">生成 AI 摘要</button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
        <StatCard icon={Users} label="应提交人数" value="32" hint="覆盖当前组织全部在岗成员" />
        <StatCard icon={CheckCircle2} label="已提交" value="28" hint="提交率 87.5%" />
        <StatCard icon={FileText} label="计划条数" value="146" hint="较上周增加 12 条" />
        <StatCard icon={AlertTriangle} label="风险事项" value="9" hint="其中高风险 2 条" />
        <StatCard icon={Archive} label="封存状态" value="未封存" hint="管理员可在导出与封存中处理" />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
        <Panel title="部门提交与风险排行">
          <DataTable
            columns={["部门", "提交人数", "未提交", "计划条数", "风险事项", "状态"]}
            rows={[
              ["研发部", "12/13", "1", "58", "4", <StatusBadge tone="amber" key="dev">需跟进</StatusBadge>],
              ["产品部", "7/7", "0", "33", "1", <StatusBadge tone="green" key="product">正常</StatusBadge>],
              ["运营部", "6/8", "2", "29", "3", <StatusBadge tone="amber" key="ops">需催办</StatusBadge>],
              ["综合部", "3/4", "1", "26", "1", <StatusBadge tone="slate" key="office">观察</StatusBadge>],
            ]}
          />
        </Panel>

        <Panel title="AI 周报摘要">
          <div className="space-y-3 text-sm leading-6 text-slate-700">
            <p>本周计划整体聚焦系统重构、PPT 解析能力补齐和组织权限梳理。研发部存在 2 项跨模块依赖，建议在周会明确接口冻结时间。</p>
            <p>运营部未提交人员较多，建议先完成数据补齐后再执行批量导出。</p>
            <div className="flex flex-wrap gap-2 pt-2">
              <button className={secondaryButtonClass} type="button">查看风险明细</button>
              <button className={secondaryButtonClass} type="button">导出看板</button>
            </div>
          </div>
        </Panel>
      </div>
    </PlanPageFrame>
  );
}
