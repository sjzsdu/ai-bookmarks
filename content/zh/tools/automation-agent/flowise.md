---
title: "Flowise"
description: "可视化拖拽搭建LangChain工作流，不用写代码。"
translationKey: "flowise"
category: "自动化与 Agent"
website: "https://flowiseai.com"
price: "Free / $9"
highlights:
  - "拖拽搭建 LangChain 式 LLM 流程"
  - "开源可自托管，API 发布内建"
  - "介于 Notebook 和全代码之间的平衡点"
usecases:
  - title: "LLM 流程原型"
    desc: "拖拽验证 RAG 和 Agent 思路。"
  - title: "内部工具"
    desc: "快速搭对话式业务查询工具。"
  - title: "教学演示"
    desc: "可视化展示 LLM 应用的组成结构。"
forwho:
  - "学 LLM 应用开发的工程师"
  - "需要快速原型的团队"
notforwho:
  - "非技术用户（仍需理解概念）"
  - "大规模生产部署（需自维护）"
faq:
  - q: "Flowise 免费吗？"
    a: "开源版本自部署免费；云托管版按用量订阅。"
  - q: "和 Langflow 的区别？"
    a: "两者都是可视化 LLM 编排；Flowise 基于 LangChain.js，Langflow 基于 Python 的 LangChain，按技术栈选择。"
---

Flowise 是 LangChain 生态的可视化编排器：把链、Agent、检索器、记忆做成拖拽节点，浏览器里拼出 LLM 应用并一键发布成 API 或嵌入聊天窗口。

## 上手体验

从模板市场导入一个 RAG 聊天流，替换文档和模型凭证，跑通后再改造成自己的流程。

## 具体能干嘛

- 拖拽编排：链、Agent、记忆可视化连接
- 聊天嵌入：生成的应用可嵌入网页
- API 发布：流程一键转 REST 接口

## 不足和坑

复杂流程的可视化画布会变得难以维护，建议拆分子流程；基于 JS 版 LangChain，部分 Python 生态组件不可用；版本更新较快注意兼容。

## 替代方案

Python 技术栈看 Langflow；产品化平台看 Dify；纯代码更灵活用 LangChain。
