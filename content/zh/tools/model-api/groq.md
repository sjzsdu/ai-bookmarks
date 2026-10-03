---
title: "Groq"
description: "超快的AI推理服务，用定制芯片实现极速响应。"
translationKey: "groq"
category: "模型 API"
website: "https://groq.com"
price: "Free"
highlights:
  - "LPU 推理带来极高的每秒 token 输出"
  - "开源模型（Llama/Mixtral）近即时延迟"
  - "OpenAI 兼容接口，迁移几乎零成本"
usecases:
  - title: "低延迟对话"
    desc: "LPU 推理让开源模型秒回。"
  - title: "语音类应用"
    desc: "高速率 token 输出适配实时场景。"
  - title: "开源模型试用"
    desc: "免费档快速对比多个开源模型。"
forwho:
  - "对响应速度敏感的应用"
  - "想低成本试用开源模型的开发者"
notforwho:
  - "需要最新闭源模型能力的场景"
  - "大批量生产（速率限制需规划）"
faq:
  - q: "Groq 上有哪些模型？"
    a: "以 Llama、Mixtral、Qwen、DeepSeek 等开源模型为主，清单见官网 models 页。"
  - q: "为什么快？"
    a: "自研 LPU 推理芯片，专为大模型推理优化，吞吐和首 token 延迟领先。"
---

Groq 用自研 LPU 芯片做推理，把开源模型的速度拉到「近乎即时」：每秒数百到上千 token 的输出让对话和语音类应用第一次有了生产级的流畅度。

## 上手体验

注册拿免费 key，用 OpenAI 兼容接口把 base_url 换成 Groq 即可试用；注意免费档速率限制。

## 具体能干嘛

- OpenAI 兼容 API：一行换 base_url 迁移
- 多开源模型：Llama/Mixtral/Qwen 等
- 极速推理：数百 token/秒的输出

## 不足和坑

模型清单随官方策略变动，依赖单一模型前确认可用性；速率限制严格，生产用量需付费档；上下文窗口相对较小。

## 替代方案

模型广度用 Together/OpenRouter；本地部署用 Ollama；闭源能力用官方 API。
