import { AlertTriangle, CheckCircle2, Clock, FileText } from "lucide-react";
import { buttonClass, DataTable, Panel, PlanPageFrame, secondaryButtonClass, StatCard, StatusBadge } from "@/features/plan-assistant/ui";

export default function MyWorkspacePage() {
  return (
    <PlanPageFrame title="我的工作台" description="员工默认工作台，查看个人计划、总结、待处理问题和格式检查报告。">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <StatCard icon={FileText} label="本周计划" value="6 条" hint="2 条今日到期" />
        <StatCard icon={CheckCircle2} label="已完成事项" value="4 条" hint="完成率 67%" />
        <StatCard icon={AlertTriangle} label="待处理问题" value="3 个" hint="1 个高优先级" />
        <StatCard icon={Clock} label="最近提交" value="今天 09:30" hint="周计划 PPT 已解析" />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
        <Panel title="我的计划/总结">
          <DataTable
            columns={["类型", "日期批次", "事项", "状态", "操作"]}
            rows={[
              ["计划", "2026-07-13", "完成计划助手页面迁移", <StatusBadge tone="green" key="w1">进行中</StatusBadge>, "编辑"],
              ["计划", "2026-07-13", "联调 PPT 解析字段", <StatusBadge tone="amber" key="w2">需协同</StatusBadge>, "查看"],
              ["总结", "2026-07-06", "完成门户首页重构", <StatusBadge tone="green" key="w3">已完成</StatusBadge>, "查看"],
              ["总结", "2026-07-06", "旧模板字段差异梳理", <StatusBadge tone="red" key="w4">有问题</StatusBadge>, "修正"],
            ]}
          />
        </Panel>

        <Panel title="快捷处理">
          <div className="space-y-3">
            <button className={buttonClass} type="button">上传本周 PPT</button>
            <button className={secondaryButtonClass} type="button">生成下周计划</button>
            <button className={secondaryButtonClass} type="button">查看格式报告</button>
            <button className={secondaryButtonClass} type="button">提交给领导</button>
          </div>
        </Panel>
      </div>
    </PlanPageFrame>
  );
}
