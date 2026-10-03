---
title: "Ollama"
description: "本地大模型运行器：一行命令在自己电脑上跑开源模型，数据不出机器。"
translationKey: "ollama"
category: "模型与 API"
website: "https://ollama.com"
price: "免费开源"
access: "需代理"
platforms: ["macOS", "Windows", "Linux"]
highlights:
  - "一行命令下载运行 Llama/Qwen/DeepSeek 等开源模型"
  - "自动暴露 OpenAI 兼容本地 API"
  - "数据完全本地，隐私场景首选"
usecases:
  - title: "本地私有 AI"
    desc: "敏感数据环境下本地跑模型，数据不出内网。"
  - title: "开发调试"
    desc: "开发时调用本地模型，不烧 API 费。"
forwho:
  - "想本地跑模型的开发者和极客"
  - "隐私敏感场景"
notforwho:
  - "没有像样显卡/内存的电脑（小模型除外）"
  - "追求最强模型能力的用户（本地模型略逊旗舰）"
faq:
  - q: "Ollama 需要什么配置？"
    a: "7B 模型 8G 内存可跑，14B 建议 16G+，70B 级别需要专业卡。"
  - q: "和 LM Studio 区别？"
    a: "Ollama 是 CLI 优先、适合服务器和自动化；LM Studio 有完整 GUI，适合桌面用户。"
---

Ollama 把「跑开源模型」简化到一行命令：ollama run qwen3，模型下载完就能对话，还自动在本地起一个 OpenAI 兼容 API——你现有的代码把 URL 指到 localhost 就完成切换。对隐私敏感场景（内网、离线、合规），它是本地大模型的事实标准。

## 核心能力
- 一行命令拉取和运行上百个开源模型
- 本地 OpenAI 兼容 API
- 模型量化与 GPU 加速
- 跨平台（macOS/Windows/Linux）

## 价格与访问
完全免费开源。官网下载需代理，模型可走国内镜像。

## 同类对比
LM Studio（GUI 向）、llama.cpp（更底层）；工程化首选 Ollama。

## 定位
本地模型生态的入口级基础设施。

