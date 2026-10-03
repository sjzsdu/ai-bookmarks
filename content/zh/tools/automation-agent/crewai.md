---
title: "CrewAI"
description: "多Agent协作框架，让多个AI角色分工完成复杂任务。"
translationKey: "crewai"
category: "自动化与 Agent"
website: "https://crewai.com"
price: "Free / $50"
highlights:
  - "角色化 Agent 编排：分工明确协同完成"
  - "干净的 Python 抽象，多智能体上手友好"
  - "任意 LLM 供应商开箱即用"
usecases:
  - title: "内容生产流水线"
    desc: "研究员、写手、审校三个角色接力产出。"
  - title: "数据调研任务"
    desc: "多个角色分工搜集、汇总、输出报告。"
  - title: "流程自动化"
    desc: "把固定业务流程拆成角色任务链。"
forwho:
  - "Python 开发者入门多智能体"
  - "想给业务流程加 AI 分工的小团队"
notforwho:
  - "需要精细对话控制的场景（AutoGen 更强）"
  - "非技术用户"
faq:
  - q: "CrewAI 免费吗？"
    a: "框架开源免费，模型调用费用按所选供应商计。"
  - q: "和 LangChain 什么关系？"
    a: "CrewAI 可用 LangChain 组件做工具，但编排层是独立实现，更专注于角色化协作。"
---

CrewAI 把多智能体协作抽象成「组队」：给每个 Agent 定义角色（研究员、写手、审核）、目标和工具，框架负责让它们按流程接力完成任务。

## 上手体验

从定义三个角色的最小 Crew 开始（目标+背景故事+工具），跑通后再加流程控制和任务依赖。

## 具体能干嘛

- 角色定义：目标、背景、工具按角色拆分
- 任务链：任务间传递产出并设定依赖
- 流程控制：顺序、层级两种协作模式

## 不足和坑

角色不会自动变聪明——提示词质量决定产出；任务链过长时错误会级联放大；Token 消耗随 Agent 数量线性增长。

## 替代方案

对话式协作和代码执行用 AutoGen；可视化搭建看 Flowise；要产品化平台用 Dify。
