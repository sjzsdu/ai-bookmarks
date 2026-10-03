---
title: "Dify"
description: "开源LLLM应用开发平台，RAG、Agent、工作流整合在可视化界面里。"
translationKey: "dify"
category: "自动化与 Agent"
website: "https://dify.ai"
price: "Free / Cloud USD"
highlights:
  - "开源 LLM 应用平台：RAG/Agent/工作流可视化"
  - "可自托管可上云，带生产级可观测性"
  - "一个平台覆盖聊天机器人到自动化后端"
usecases:
  - title: "企业知识库问答"
    desc: "上传文档构建 RAG 问答应用。"
  - title: "AI 工作流"
    desc: "可视化编排模型调用和业务逻辑。"
  - title: "私有化部署"
    desc: "Docker 自托管满足数据合规。"
forwho:
  - "要快速搭建 LLM 应用的团队"
  - "对数据主权有要求的企业"
notforwho:
  - "只要聊天界面的个人用户"
  - "不想运维服务的团队（用托管产品）"
faq:
  - q: "Dify 开源免费吗？"
    a: "开源版可自部署免费使用；云版按用量订阅，部分高级功能限于付费版。"
  - q: "和 FastGPT 怎么选？"
    a: "Dify 更全面（Agent、工作流、模型管理），FastGPT 在中文知识库问答场景更专注；都能自托管。"
---

Dify 是开源 LLM 应用开发平台里完成度最高的之一：提示词编排、RAG 知识库、Agent、工作流可视化搭建，加上 API 发布和日志观测，一个平台覆盖从原型到生产的链路。

## 上手体验

Docker Compose 一键自部署，或直接用云版；先建知识库应用跑通 RAG 流程，再试工作流编排。

## 具体能干嘛

- 可视化编排：提示词、工具、分支拖拽组装
- RAG 引擎：文档分段、向量检索、引用标注
- 应用发布：WebApp、API、嵌入脚本多形态

## 不足和坑

自部署需要维护模型供应商的密钥和向量库；复杂工作流的调试要靠日志排查；社区版的功能边界与企业版有差异。

## 替代方案

专注知识库问答看 FastGPT；可视化搭流程看 Flowise/Langflow；纯框架集成用 LangChain。
