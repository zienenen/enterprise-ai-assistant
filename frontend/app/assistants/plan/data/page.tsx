import { Edit3, Trash2 } from "lucide-react";
import { buttonClass, DataTable, Field, inputClass, Panel, PlanPageFrame, secondaryButtonClass, StatusBadge } from "@/features/plan-assistant/ui";

export default function PlanDataPage() {
  return (
    <PlanPageFrame title="计划/总结数据维护" description="按责任人、日期批次、类型筛选数据，支持编辑、删除、清空和封存校验。">
      <Panel title="筛选条件">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          <Field label="责任人"><input className={inputClass} placeholder="输入姓名" /></Field>
          <Field label="日期批次"><input className={inputClass} defaultValue="2026-07-13" type="date" /></Field>
          <Field label="类型">
            <select className={inputClass}><option>全部</option><option>计划</option><option>总结</option></select>
          </Field>
          <Field label="封存状态">
            <select className={inputClass}><option>全部</option><option>未封存</option><option>已封存</option></select>
          </Field>
          <div className="flex items-end gap-2">
            <button className={buttonClass} type="button">查询</button>
            <button className={secondaryButtonClass} type="button">重置</button>
          </div>
        </div>
      </Panel>

      <div className="mt-5">
        <Panel title="数据列表" action={<button className={secondaryButtonClass} type="button">按筛选条件清空</button>}>
          <DataTable
            columns={["责任人", "部门", "类型", "日期批次", "事项内容", "状态", "操作"]}
            rows={[
              ["张三", "研发部", "计划", "2026-07-13", "完成上传解析接口联调", <StatusBadge tone="green" key="d1">未封存</StatusBadge>, <span className="inline-flex gap-2" key="a1"><Edit3 size={15} />编辑 <Trash2 size={15} />删除</span>],
              ["李四", "产品部", "计划", "2026-07-13", "确认计划助手对话交互", <StatusBadge tone="green" key="d2">未封存</StatusBadge>, <span className="inline-flex gap-2" key="a2"><Edit3 size={15} />编辑 <Trash2 size={15} />删除</span>],
              ["王五", "运营部", "总结", "2026-07-06", "整理旧 PPT 模板问题", <StatusBadge tone="amber" key="d3">待复核</StatusBadge>, <span className="inline-flex gap-2" key="a3"><Edit3 size={15} />编辑 <Trash2 size={15} />删除</span>],
              ["赵六", "综合部", "总结", "2026-06-29", "完成周例会材料导出", <StatusBadge tone="slate" key="d4">已封存</StatusBadge>, "仅查看"],
            ]}
          />
        </Panel>
      </div>
    </PlanPageFrame>
  );
}
