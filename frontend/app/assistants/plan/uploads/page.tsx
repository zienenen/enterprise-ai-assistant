import { CheckCircle2, FileUp, UploadCloud } from "lucide-react";
import { buttonClass, DataTable, Field, inputClass, Panel, PlanPageFrame, secondaryButtonClass, StatusBadge } from "@/features/plan-assistant/ui";

export default function UploadsPage() {
  return (
    <PlanPageFrame title="PPT 上传解析" description="上传单人计划或总结 PPT，填写责任人与批次，解析预览后确认入库。">
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[420px_minmax(0,1fr)]">
        <Panel title="上传信息">
          <div className="grid grid-cols-1 gap-4">
            <Field label="文件类型">
              <select className={inputClass}>
                <option>周计划 PPT</option>
                <option>周总结 PPT</option>
              </select>
            </Field>
            <Field label="责任人">
              <input className={inputClass} defaultValue="张三" />
            </Field>
            <Field label="日期批次">
              <input className={inputClass} defaultValue="2026-07-13" type="date" />
            </Field>
            <label className="flex min-h-36 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 text-center hover:bg-slate-100">
              <UploadCloud className="text-slate-500" size={28} />
              <span className="mt-3 text-sm font-medium text-slate-900">选择或拖入 PPT 文件</span>
              <span className="mt-1 text-xs text-slate-500">支持 .pptx，解析后先预览再入库</span>
              <input className="sr-only" type="file" accept=".ppt,.pptx" />
            </label>
            <div className="flex gap-3">
              <button className={buttonClass} type="button">
                <FileUp size={16} />
                开始解析
              </button>
              <button className={secondaryButtonClass} type="button">清空</button>
            </div>
          </div>
        </Panel>

        <Panel
          title="解析预览"
          action={<StatusBadge tone="green"><CheckCircle2 className="mr-1 inline" size={13} />已识别 4 条</StatusBadge>}
        >
          <DataTable
            columns={["板块", "序号", "内容", "完成时间", "风险"]}
            rows={[
              ["重点工作", "1", "完成企业 AI 助手门户联调", "2026-07-17", <StatusBadge tone="green" key="r1">低</StatusBadge>],
              ["重点工作", "2", "补齐计划助手上传解析页面", "2026-07-18", <StatusBadge tone="amber" key="r2">中</StatusBadge>],
              ["协同事项", "3", "确认 PPT 模板字段映射", "2026-07-19", <StatusBadge tone="amber" key="r3">中</StatusBadge>],
              ["风险问题", "4", "旧模板存在格式不一致", "2026-07-20", <StatusBadge tone="red" key="r4">高</StatusBadge>],
            ]}
          />
          <div className="mt-4 flex flex-wrap gap-3">
            <button className={buttonClass} type="button">确认入库</button>
            <button className={secondaryButtonClass} type="button">重新解析</button>
            <button className={secondaryButtonClass} type="button">导出预览</button>
          </div>
        </Panel>
      </div>
    </PlanPageFrame>
  );
}
