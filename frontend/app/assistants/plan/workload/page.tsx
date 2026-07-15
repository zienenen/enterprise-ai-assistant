import { AlertTriangle, BarChart3, Clock3, TrendingUp, Users } from "lucide-react";
import {
  buttonClass,
  DataTable,
  Field,
  inputClass,
  Panel,
  PlanPageFrame,
  secondaryButtonClass,
  StatCard,
  StatusBadge,
} from "@/features/plan-assistant/ui";

export default function WorkloadAnalysisPage() {
  return (
    <PlanPageFrame
      title="工时合理性分析"
      description="从计划事项、历史完成情况、角色负荷和风险等级分析工时是否合理，辅助领导判断安排是否过载或偏低。"
    >
      <Panel title="分析条件">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          <Field label="日期批次">
            <input className={inputClass} defaultValue="2026-07-13" type="date" />
          </Field>
          <Field label="分析范围">
            <select className={inputClass}>
              <option>全部人员</option>
              <option>指定部门</option>
              <option>指定人员</option>
            </select>
          </Field>
          <Field label="部门/人员">
            <input className={inputClass} placeholder="例如：研发部 / 张三" />
          </Field>
          <Field label="参考模型">
            <select className={inputClass}>
              <option>岗位标准工时 + 历史均值</option>
              <option>仅岗位标准工时</option>
              <option>仅历史均值</option>
            </select>
          </Field>
          <div className="flex items-end gap-2">
            <button className={buttonClass} type="button">开始分析</button>
          </div>
        </div>
      </Panel>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-4">
        <StatCard icon={Users} label="分析人数" value="32" hint="覆盖当前批次提交人员" />
        <StatCard icon={Clock3} label="计划总工时" value="1,286h" hint="人均 40.2h" />
        <StatCard icon={AlertTriangle} label="异常人员" value="7 人" hint="过载 5 人，偏低 2 人" />
        <StatCard icon={TrendingUp} label="工时偏差" value="+12%" hint="相对近四周均值" />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_380px]">
        <Panel title="人员工时合理性">
          <DataTable
            columns={["人员", "部门", "计划事项", "计划工时", "历史均值", "偏差", "判断"]}
            rows={[
              ["张三", "研发部", "6", "52h", "41h", "+27%", <StatusBadge tone="red" key="p1">过载</StatusBadge>],
              ["李四", "产品部", "5", "38h", "36h", "+6%", <StatusBadge tone="green" key="p2">合理</StatusBadge>],
              ["王五", "运营部", "4", "24h", "35h", "-31%", <StatusBadge tone="amber" key="p3">偏低</StatusBadge>],
              ["赵六", "综合部", "5", "42h", "39h", "+8%", <StatusBadge tone="green" key="p4">合理</StatusBadge>],
              ["钱七", "研发部", "7", "56h", "44h", "+27%", <StatusBadge tone="red" key="p5">过载</StatusBadge>],
            ]}
          />
        </Panel>

        <Panel title="AI 分析建议">
          <div className="space-y-4 text-sm leading-6 text-slate-700">
            <div className="rounded-lg bg-red-50 p-3 text-red-800">
              研发部张三、钱七计划工时显著高于历史均值，且均包含跨模块依赖，建议拆分低优先级事项或补充协同人员。
            </div>
            <div className="rounded-lg bg-amber-50 p-3 text-amber-800">
              王五计划工时偏低，可能存在事项拆解不足或漏报，建议在提交前补充运营支持类工作。
            </div>
            <div className="rounded-lg bg-slate-100 p-3 text-slate-700">
              当前批次整体工时高于近四周均值 12%，若周例会确认需求不降级，应关注延期风险。
            </div>
            <div className="flex flex-wrap gap-3 pt-1">
              <button className={secondaryButtonClass} type="button">
                <BarChart3 size={16} />
                查看部门分布
              </button>
              <button className={secondaryButtonClass} type="button">导出分析报告</button>
            </div>
          </div>
        </Panel>
      </div>

      <div className="mt-5">
        <Panel title="事项级异常明细">
          <DataTable
            columns={["人员", "事项", "预估工时", "参考工时", "异常原因", "建议"]}
            rows={[
              ["张三", "计划助手上传解析联调", "18h", "10h", "跨前后端且依赖模板字段", "拆分接口联调和模板校验两个事项"],
              ["钱七", "PPT 导出任务队列", "20h", "12h", "包含异步任务与文件权限", "拆出下载授权单独排期"],
              ["王五", "整理周报材料", "4h", "10h", "低于历史运营准备时间", "补充材料核对和异常催办工作"],
            ]}
          />
        </Panel>
      </div>
    </PlanPageFrame>
  );
}
