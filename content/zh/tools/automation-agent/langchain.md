---
title: "LangChain"
description: "AI应用开发框架，用代码把大模型和各种工具串起来。"
translationKey: "langchain"
category: "自动化与 Agent"
website: "https://langchain.com"
price: "Free（开源）"
highlights:
  - "LLM 应用开发的事实标准框架"
  - "集成生态庞大：模型、向量库、工具一应俱全"
  - "LangGraph 提供有状态可控制的 Agent 编排"
usecases:
  - title: "LLM 应用开发"
    desc: "构建带工具调用和数据接管的 AI 应用。"
  - title: "RAG 系统"
    desc: "文档检索增强问答的标准组件库。"
  - title: "Agent 编排"
    desc: "用 LangGraph 构建有状态的多步智能体。"
forwho:
  - "构建 AI 应用的开发者"
  - "需要集成多个模型和数据源的系统"
notforwho:
  - "只想用现成产品的用户"
  - "极简场景（框架偏重）"
faq:
  - q: "LangChain 学习成本高吗？"
    a: "核心抽象（模型、提示词、链、检索器）不难，难在集成选项太多；建议按需引入而不是一次学完。"
  - q: "LangChain 和 LangGraph 的关系？"
    a: "LangGraph 是其团队推出的有状态 Agent 编排库，生产级 Agent 推荐用它。"
---

LangChain 是 LLM 应用开发的「标准库」：模型调用、提示词模板、文档检索、工具调用、记忆管理都有现成抽象，配合庞大的集成生态，几乎是 Python/JS 做 AI 应用的默认起点。

## 上手体验

先用 LCEL（表达式语法）串起「模型+提示词+输出解析」的最小链，再按需加检索或工具；生产 Agent 直接学 LangGraph。

## 具体能干嘛

- 统一模型接口：OpenAI/Anthropic/本地模型一套 API
- 检索组件：文档加载、切分、向量库集成
- LangGraph：有状态的图式 Agent 编排

## 不足和坑

抽象层多、版本迭代快，教程过时是常态；过度封装在简单场景里反而累赘；生产环境建议锁定版本并写集成测试。

## 替代方案

轻量直连用各模型官方 SDK；可视化编排用 Langflow/Flowise；产品化平台用 Dify。
