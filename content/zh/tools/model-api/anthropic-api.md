---
title: "Anthropic API"
description: "Claude系列模型的API，安全性和长文本处理强。"
translationKey: "anthropic-api"
category: "模型 API"
website: "https://console.anthropic.com"
price: "$0.80 / 百万 tokens 起"
highlights:
  - "Claude 系列模型，长上下文能力业内领先"
  - "安全策略严格，指令遵循稳定性好"
  - "提示缓存和批量 API 显著降低成本"
usecases:
  - title: "长文档处理"
    desc: "200K 上下文读整本书或大代码库。"
  - title: "高质量对话产品"
    desc: "以写作和安全著称的 Claude 接入。"
  - title: "Agent 开发"
    desc: "工具调用与计算机使用能力。"
forwho:
  - "对输出质量和安全性要求高的产品"
  - "处理长文档的场景"
notforwho:
  - "追求最低成本的批量任务（DeepSeek 更便宜）"
  - "国内直连需求的场景"
faq:
  - q: "国内能用 Anthropic API 吗？"
    a: "官方 API 需境外网络和支付；合规企业可通过 AWS Bedrock 或 Google Cloud Vertex 接入。"
  - q: "计费方式？"
    a: "按输入/输出 token 计费，提示缓存和批量接口可显著降本。"
---

Anthropic API 是 Claude 系列模型的官方入口：以安全性、指令遵循和长上下文著称，200K 窗口处理整本文档，提示缓存和批处理接口把重度用量的成本压得更低。

## 上手体验

注册后拿 API key，用 OpenAI 兼容 SDK 或官方 SDK 发第一条请求；先在 Workbench 里试提示词再写代码。

## 具体能干嘛

- Messages API：对话与流式输出
- 工具调用：函数调用与 MCP 生态
- Prompt caching / Batch：成本优化的两把钥匙

## 不足和坑

国内访问需代理，支付门槛高；不同模型档位价差大，选型前算 token 预算；速率限制按等级分配，重度使用需申请提升。

## 替代方案

价格敏感用 DeepSeek API；多模型聚合用 OpenRouter；国内合规用百炼或火山方舟。
