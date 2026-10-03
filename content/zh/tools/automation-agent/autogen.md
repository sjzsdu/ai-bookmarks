---
title: "AutoGen"
description: "微软开源的多Agent框架，让多个AI对话协作解决问题。"
translationKey: "autogen"
category: "自动化与 Agent"
website: "https://github.com/microsoft/autogen"
price: "Free（开源）"
highlights:
  - "多智能体对话：Agent 之间互相协作与互评"
  - "微软背景的开源项目，v0.4 架构演进迅速"
  - "支持代码执行型 Agent，任务结果可验证"
usecases:
  - title: "多智能体协作研究"
    desc: "让多个 Agent 分工讨论并互相校验结论。"
  - title: "代码生成任务"
    desc: "Agent 生成并执行代码，用运行结果自我修正。"
  - title: "人类介入流程"
    desc: "关键节点设置人工审核后再继续执行。"
forwho:
  - "研究多智能体系统的开发者"
  - "需要可验证代码执行的工程团队"
notforwho:
  - "零代码需求用户"
  - "只要单一对话助手的场景"
faq:
  - q: "AutoGen 和 CrewAI 怎么选？"
    a: "AutoGen 强在对话式协作和代码执行，CrewAI 的角色分工抽象更简单；复杂工程两者都可，团队偏 Python 深度用 AutoGen。"
  - q: "需要付费吗？"
    a: "框架开源免费，底层模型调用按所选供应商计费。"
---

AutoGen 是微软开源的多智能体框架，核心能力是让多个 Agent 以对话方式协作——一个负责规划、一个负责执行、一个负责审查，互相批评和修正，直到任务完成。

## 上手体验

从官方 notebook 示例入手：先跑两个 Agent 的对话协作，理解 assistant 与 user proxy 的分工，再加入代码执行和人工审核环节。

## 具体能干嘛

- 对话式多 Agent 编排：定义发言顺序和协作规则
- 代码执行 Agent：生成、运行、根据报错自我修正
- 人类回调：在关键决策点插入人工确认

## 不足和坑

多 Agent 系统的调试成本远高于单 Agent——发言轮次失控会快速烧 token；v0.4 架构与旧版 API 差异大，参考资料要注意版本。

## 替代方案

角色分工更简单的看 CrewAI；可视化编排看 Langflow 和 Flowise；要开箱即用的产品看 Dify。
