---
title: "Hugging Face"
description: "最大的开源模型库，下载和部署 AI 模型都在这个平台。"
translationKey: "huggingface"
category: "模型 API"
website: "https://huggingface.co"
price: "Free"
highlights:
  - "开源模型之家：百万级模型和数据集"
  - "Inference Endpoints 和 Spaces 托管与演示"
  - "Transformers 库是整个生态的通用语言"
usecases:
  - title: "模型发现与下载"
    desc: "百万级开源模型和数据的检索。"
  - title: "在线推理"
    desc: "Inference API 免部署试用模型。"
  - title: "应用托管"
    desc: "Spaces 一键部署模型演示页。"
forwho:
  - "AI 研究者和工程师"
  - "寻找开源模型的应用团队"
notforwho:
  - "只要闭源 API 的用户"
  - "国内直连需求的场景（镜像可用）"
faq:
  - q: "Hugging Face 免费吗？"
    a: "模型下载和 Spaces 免费额度可用；Inference Endpoints 和企业功能付费。"
  - q: "国内访问？"
    a: "官方站需代理；可用 hf-mirror 等镜像下载模型。"
---

Hugging Face 是开源 AI 的事实总部：百万级模型、数据集和 Spaces 演示，Transformers 库是行业通用接口。找模型、试模型、部署模型，都从这里开始。

## 上手体验

先按任务筛选模型（看下载量和评测榜），用 Inference API 或本地 transformers 试用；Spaces 能 fork 现成演示改造成自己的。

## 具体能干嘛

- Model Hub：按任务/许可筛选百万级模型
- Inference API：无 GPU 试用模型
- Spaces：Gradio/Streamlit 应用免费托管

## 不足和坑

模型质量参差，看下载量、社区活跃度和许可证；Inference API 冷启动慢；生产部署建议用专用推理方案而非免费端点。

## 替代方案

模型聚合 API 看 OpenRouter/Together；本地部署用 Ollama；国内下载用 hf-mirror。
