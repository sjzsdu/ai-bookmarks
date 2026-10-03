---
title: "Langflow"
description: "可视化拖拽式 LLM 应用编排平台，可快速搭建 Agent 与 RAG 流程。"
translationKey: "langflow"
category: "自动化与 Agent"
website: "https://www.langflow.org"
price: "Free（开源）"
highlights:
  - "可视化画布编排 LangChain 与 LLM 工作流"
  - "Python 原生：流程可导出成代码不被锁定"
  - "开源社区组件生态增长快"
usecases:
  - title: "可视化 LLM 开发"
    desc: "画布上组合模型、检索和工具节点。"
  - title: "RAG 应用搭建"
    desc: "拖拽完成文档问答应用。"
  - title: "流程转代码"
    desc: "导出 Python 代码脱离画布运行。"
forwho:
  - "Python 技术栈的开发者"
  - "想可视化学习 LangChain 概念的人"
notforwho:
  - "非开发者"
  - "超大规模流程管理"
faq:
  - q: "Langflow 和 Flowise 怎么选？"
    a: "Langflow 基于 Python LangChain 且可导出代码，适合 Python 团队；Flowise 基于 JS，生态组件略有不同。"
  - q: "免费吗？"
    a: "开源可自部署；DataStax 提供云托管版。"
---

Langflow 是 LangChain 生态里另一个主流可视化编排器（Python 系）：画布上拖拽模型、检索器、工具节点组成应用，还能把画布导出成 Python 代码，避免被画布锁定。

## 上手体验

安装后从基础模板起步：一个带检索的对话流；熟悉节点类型后再搭复杂分支。

## 具体能干嘛

- 可视化画布：组件即节点，连线即流程
- 代码导出：流程转 Python 可继续开发
- 多模型支持：OpenAI、本地模型、开源端点

## 不足和坑

画布在超大流程里性能和可读性下降；节点参数暴露不完整时仍需写代码；被 DataStax 收购后的版本节奏需关注。

## 替代方案

JS 技术栈看 Flowise；平台化管理看 Dify；直接写代码用 LangChain。
