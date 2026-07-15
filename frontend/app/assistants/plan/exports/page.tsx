import { Download, FileArchive } from "lucide-react";
import { buttonClass, DataTable, Field, inputClass, Panel, PlanPageFrame, secondaryButtonClass, StatusBadge } from "@/features/plan-assistant/ui";

export default function ExportsPage() {
  return (
    <PlanPageFrame title="PPT 导出" description="按人员、批次和导出类型生成 PPT，导出记录统一授权下载。">
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[420px_minmax(0,1fr)]">
        <Panel title="新建导出任务">
          <div className="space-y-4">
            <Field label="导出类型">
              <select className={inputClass}>
                <option>单人 PPT</option>
                <option>按人批量导出</option>
                <option>全周汇总 PPT</option>
                <option>周例会 PPT</option>
              </select>
            </Field>
            <Field label="日期批次"><input className={inputClass} defaultValue="2026-07-13" type="date" /></Field>
            <Field label="人员/部门范围"><input className={inputClass} placeholder="全部或输入人员/部门" /></Field>
            <Field label="模板">
              <select className={inputClass}><option>默认周计划模板</option><option>领导汇报模板</option><option>周例会模板</option></select>
            </Field>
            <button className={buttonClass} type="button">
              <FileArchive size={16} />
              创建导出任务
            </button>
          </div>
        </Panel>

        <Panel title="导出记录">
          <DataTable
            columns={["文件名", "导出类型", "操作人", "生成时间", "状态", "操作"]}
            rows={[
              ["20260713_周例会汇总.pptx", "周例会 PPT", "管理员", "2026-07-15 10:20", <StatusBadge tone="green" key="e1">已完成</StatusBadge>, <span className="inline-flex items-center gap-1" key="dl1"><Download size={15} />下载</span>],
              ["20260713_研发部批量.zip", "按人批量", "管理员", "2026-07-15 10:05", <StatusBadge tone="green" key="e2">已完成</StatusBadge>, <span className="inline-flex items-center gap-1" key="dl2"><Download size={15} />下载</span>],
              ["20260713_张三_计划.pptx", "单人 PPT", "张三", "2026-07-15 09:50", <StatusBadge tone="amber" key="e3">生成中</StatusBadge>, "查看进度"],
            ]}
          />
          <div className="mt-4 flex flex-wrap gap-3">
            <button className={secondaryButtonClass} type="button">刷新任务</button>
            <button className={secondaryButtonClass} type="button">查看下载权限</button>
          </div>
        </Panel>
      </div>
    </PlanPageFrame>
  );
}
