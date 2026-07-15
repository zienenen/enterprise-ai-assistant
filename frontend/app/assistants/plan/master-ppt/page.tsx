import { SplitSquareHorizontal, UploadCloud } from "lucide-react";
import { buttonClass, DataTable, Field, inputClass, Panel, PlanPageFrame, secondaryButtonClass, StatusBadge } from "@/features/plan-assistant/ui";

export default function MasterPptPage() {
  return (
    <PlanPageFrame title="总 PPT 拆分入库" description="管理员上传汇总 PPT，系统按人员、类型和板块拆分，确认后覆盖对应批次数据。">
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[420px_minmax(0,1fr)]">
        <Panel title="拆分配置">
          <div className="grid grid-cols-1 gap-4">
            <Field label="日期批次">
              <input className={inputClass} defaultValue="2026-07-13" type="date" />
            </Field>
            <Field label="导入类型">
              <select className={inputClass}>
                <option>周计划汇总 PPT</option>
                <option>周总结汇总 PPT</option>
              </select>
            </Field>
            <Field label="覆盖策略">
              <select className={inputClass}>
                <option>同日期、同人员、同类型覆盖</option>
                <option>仅新增，不覆盖已有数据</option>
              </select>
            </Field>
            <label className="flex min-h-36 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 text-center hover:bg-slate-100">
              <UploadCloud className="text-slate-500" size={28} />
              <span className="mt-3 text-sm font-medium text-slate-900">上传总 PPT</span>
              <span className="mt-1 text-xs text-slate-500">拆分前会展示人员与页码预览</span>
              <input className="sr-only" type="file" accept=".ppt,.pptx" />
            </label>
            <button className={buttonClass} type="button">
              <SplitSquareHorizontal size={16} />
              执行拆分预览
            </button>
          </div>
        </Panel>

        <Panel title="拆分结果预览">
          <DataTable
            columns={["人员", "部门", "页码", "识别类型", "条数", "处理状态"]}
            rows={[
              ["张三", "研发部", "3-5", "周计划", "6", <StatusBadge tone="green" key="s1">可入库</StatusBadge>],
              ["李四", "产品部", "6-7", "周计划", "4", <StatusBadge tone="green" key="s2">可入库</StatusBadge>],
              ["王五", "运营部", "8-10", "周计划", "5", <StatusBadge tone="amber" key="s3">需确认姓名</StatusBadge>],
              ["赵六", "综合部", "11", "周计划", "2", <StatusBadge tone="red" key="s4">模板异常</StatusBadge>],
            ]}
          />
          <div className="mt-4 flex flex-wrap gap-3">
            <button className={buttonClass} type="button">确认批量入库</button>
            <button className={secondaryButtonClass} type="button">下载异常清单</button>
          </div>
        </Panel>
      </div>
    </PlanPageFrame>
  );
}
