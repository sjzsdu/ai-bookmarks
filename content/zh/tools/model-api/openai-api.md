---
title: "OpenAI API"
description: "GPT系列模型的官方API，按量付费。"
translationKey: "openai-api"
category: "模型 API"
website: "https://platform.openai.com"
price: "$0.20 / 百万 tokens 起"
highlights:
  - "生态内集成最广泛的模型 API"
  - "模型线齐全：推理、多模态、向量、音频"
  - "工具链成熟：函数调用、批处理、微调"
usecases:
  - title: "通用 AI 功能接入"
    desc: "GPT 系模型的对话、推理与多模态。"
  - title: "Agent 与工具调用"
    desc: "函数调用、批处理、微调全套。"
  - title: "语音与图像"
    desc: "TTS、转写、图像生成 API。"
forwho:
  - "需要业界最成熟 API 的团队"
  - "多能力（文本+语音+图像）一体化需求"
notforwho:
  - "成本敏感的批量场景"
  - "国内直连需求"
faq:
  - q: "OpenAI API 贵吗？"
    a: "按 token 计费，mini 档位便宜得多；批处理接口五折；缓存可降本。"
  - q: "国内能直接调用吗？"
    a: "官方 API 需境外网络与支付；或经合规云渠道（Azure OpenAI）接入。"
---

OpenAI API 是行业集成度最高的模型接口：GPT 系列覆盖对话、推理、多模态，配套函数调用、批处理、微调和评估工具链，几乎所有的 AI 应用教程默认从这里开始。

## 上手体验

拿 key 后用官方 SDK 发第一条请求；不确定选型时从 mini 档开始，效果不够再升档。

## 具体能干嘛

- Chat Completions/Responses：对话与流式
- 工具调用与结构化输出
- 批处理与提示缓存：成本优化

## 不足和坑

国内访问与支付有门槛；模型退役节奏快，生产环境要跟 deprecation 公告；成本随用量线性增长需预算告警。

## 替代方案

价格敏感用 DeepSeek；聚合多家用 OpenRouter；企业合规走 Azure OpenAI。
