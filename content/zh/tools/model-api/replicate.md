---
title: "Replicate"
description: "一键部署和调用开源模型，不用自己搭GPU。"
translationKey: "replicate"
category: "模型 API"
website: "https://replicate.com"
price: "$0.09 / 小时起"
highlights:
  - "一个简单 API 调用数千个开源模型"
  - "按计算秒计费，无需管理基础设施"
  - "用 Cog 部署自定义模型几乎零负担"
usecases:
  - title: "开源模型 API 化"
    desc: "数千个社区模型按需调用。"
  - title: "自定义模型部署"
    desc: "用 Cog 打包自己的模型上线。"
  - title: "图像生成应用"
    desc: "SD/FLUX 等模型的托管推理。"
forwho:
  - "不想管 GPU 的应用开发者"
  - "图像和音视频生成类产品"
notforwho:
  - "高频大批量推理（成本要精算）"
  - "需要极低延迟的实时场景"
faq:
  - q: "Replicate 怎么计费？"
    a: "按模型运行的秒数计费（约基于所用硬件单价），空闲不计费。"
  - q: "能部署自己的模型吗？"
    a: "可以，用 Cog 打包后 push 到 Replicate 即可获得 API。"
---

Replicate 把「跑开源模型」做成按秒计费的 API：数千个社区模型（图像、视频、语音、LLM）即调即用，自己的模型用 Cog 打包也能一键上线，全程无需碰 GPU。

## 上手体验

网页上先试玩模型效果，确认输出质量后拿 API token 接入；注意不同模型硬件单价差异大。

## 具体能干嘛

- 模型市场：数千个版本化模型即调即用
- Cog 部署：自有模型容器化上线
- 按秒计费：弹性伸缩无闲置成本

## 不足和坑

按秒计费在批量场景下成本可能高于包月 GPU；冷启动延迟对实时应用不友好；社区模型质量参差需筛选。

## 替代方案

LLM 推理优化看 Groq/Together；本地部署用 Ollama；大平台聚合用 OpenRouter。
