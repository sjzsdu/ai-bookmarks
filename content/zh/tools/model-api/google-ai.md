---
title: "Google AI"
description: "Google的AI模型平台，Gemini系列和Vertex AI。"
translationKey: "google-ai"
category: "模型 API"
website: "https://ai.google.dev"
price: "Free"
highlights:
  - "一个 API 覆盖 Gemini 全系多模态模型"
  - "超大上下文窗口和原生多模态输入"
  - "企业级部署可走 Vertex AI 路线"
usecases:
  - title: "Gemini 模型接入"
    desc: "多模态输入（图/音/视频）的对话能力。"
  - title: "超长上下文"
    desc: "百万 token 级窗口处理大文档。"
  - title: "企业部署"
    desc: "Vertex AI 的合规与治理路线。"
forwho:
  - "Google 生态开发者"
  - "需要多模态和大窗口的场景"
notforwho:
  - "国内直连场景"
  - "预算极低的批量任务"
faq:
  - q: "AI Studio 和 Vertex 什么区别？"
    a: "AI Studio 面向个人快速开发（有免费额度），Vertex AI 是企业级平台（数据治理、私有部署选项）。"
  - q: "免费档限制？"
    a: "AI Studio 免费档有速率和用量限制，商用走付费。"
---

Google AI 开发者平台提供 Gemini 系列模型的 API 入口：原生多模态（图像、音频、视频直接输入）、百万级上下文窗口，个人用 AI Studio，企业上 Vertex AI。

## 上手体验

在 AI Studio 拿 key，用 OpenAI 兼容 SDK 或官方 SDK 调用；多模态直接传文件试效果。

## 具体能干嘛

- Gemini 全系 API：Pro/Flash 档位分明
- 原生多模态：图、音、视频输入
- 结构化输出与函数调用

## 不足和坑

国内访问需代理；免费档不适合生产；模型行为随版本更新变化，关键功能要做回归测试。

## 替代方案

纯文本高性价比用 DeepSeek；开源模型用 Together/Groq；国内合规用百炼。
