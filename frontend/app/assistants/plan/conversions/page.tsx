import { ArrowRightLeft } from "lucide-react";
import { buttonClass, DataTable, Field, inputClass, Panel, PlanPageFrame, secondaryButtonClass, StatusBadge } from "@/features/plan-assistant/ui";

export default function ConversionsPage() {
  return (
    <PlanPageFrame title="计划/总结转换" description="支持总结转下周计划、计划转本周总结，转换结果预览确认后保存。">
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[420px_minmax(0,1fr)]">
        <Panel title="转换参数">
          <div className="space-y-4">
            <Field label="转换方向">
              <select className={inputClass}><option>总结转计划</option><option>计划转总结</option></select>
            </Field>
            <Field label="责任人"><input className={inputClass} defaultValue="张三" /></Field>
            <Field label="来源批次"><input className={inputClass} defaultValue="2026-07-06" type="date" /></Field>
            <Field label="目标批次"><input className={inputClass} defaultValue="2026-07-13" type="date" /></Field>
            <button className={buttonClass} type="button">
              <ArrowRightLeft size={16} />
              生成转换预览
            </button>
          </div>
        </Panel>

        <Panel title="转换结果预览">
          <DataTable
            columns={["来源总结", "生成计划", "建议时间", "置信度", "状态"]}
            rows={[
              ["完成门户入口重构", "补齐门户权限与退出登录", "2026-07-16", "92%", <StatusBadge tone="green" key="c1">可保存</StatusBadge>],
              ["确认 PPT 模板字段", "完成模板字段映射配置", "2026-07-17", "88%", <StatusBadge tone="green" key="c2">可保存</StatusBadge>],
              ["上传解析待联调", "联调单人 PPT 解析接口", "2026-07-18", "81%", <StatusBadge tone="amber" key="c3">需确认</StatusBadge>],
            ]}
          />
          <div className="mt-4 flex flex-wrap gap-3">
            <button className={buttonClass} type="button">确认保存到目标批次</button>
            <button className={secondaryButtonClass} type="button">人工调整</button>
          </div>
        </Panel>
      </div>
    </PlanPageFrame>
  );
}
