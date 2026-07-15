import { AlertTriangle, CheckCircle2, Search } from "lucide-react";
import { buttonClass, DataTable, Field, inputClass, Panel, PlanPageFrame, secondaryButtonClass, StatCard, StatusBadge } from "@/features/plan-assistant/ui";

export default function ReviewsPage() {
  return (
    <PlanPageFrame title="格式检查报告" description="检查计划和总结的字段完整性、格式规范、风险表述和模板一致性。">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <StatCard icon={Search} label="检查报告" value="18 份" hint="本批次已生成" />
        <StatCard icon={AlertTriangle} label="严重问题" value="5 个" hint="需提交前修正" />
        <StatCard icon={CheckCircle2} label="通过率" value="82%" hint="较上批次提升 6%" />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-[360px_minmax(0,1fr)]">
        <Panel title="生成检查">
          <div className="space-y-4">
            <Field label="检查范围">
              <select className={inputClass}><option>当前批次全部人员</option><option>仅我的数据</option><option>指定部门</option></select>
            </Field>
            <Field label="日期批次"><input className={inputClass} defaultValue="2026-07-13" type="date" /></Field>
            <Field label="检查类型">
              <select className={inputClass}><option>计划与总结</option><option>仅计划</option><option>仅总结</option></select>
            </Field>
            <button className={buttonClass} type="button">生成格式检查报告</button>
          </div>
        </Panel>

        <Panel title="问题明细">
          <DataTable
            columns={["责任人", "类型", "问题", "严重程度", "建议处理"]}
            rows={[
              ["张三", "计划", "缺少完成时间", <StatusBadge tone="red" key="r1">严重</StatusBadge>, "补齐日期后重新检查"],
              ["李四", "计划", "事项描述过短", <StatusBadge tone="amber" key="r2">警告</StatusBadge>, "补充交付物和目标"],
              ["王五", "总结", "未填写风险处置", <StatusBadge tone="red" key="r3">严重</StatusBadge>, "补充风险闭环说明"],
              ["赵六", "总结", "模板页脚不一致", <StatusBadge tone="slate" key="r4">提示</StatusBadge>, "导出前统一模板"],
            ]}
          />
          <div className="mt-4 flex flex-wrap gap-3">
            <button className={secondaryButtonClass} type="button">导出报告</button>
            <button className={secondaryButtonClass} type="button">按人员分发</button>
          </div>
        </Panel>
      </div>
    </PlanPageFrame>
  );
}
