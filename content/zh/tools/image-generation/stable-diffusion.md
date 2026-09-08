---
title: "Stable Diffusion"
description: "开源图像生成模型，可本地部署，完全可控、数据不出本机。"
translationKey: "stable-diffusion"
category: "图像生成"
website: "https://stability.ai"
price: "Free"
platforms: ["本地部署", "Windows", "macOS", "Linux"]
highlights:
  - "图和提示词都在自己手上，反复跑不看平台脸色"
  - "ControlNet、LoRA 等工具能把构图和风格管得更细"
  - "社区教程多，遇到怪问题基本都能搜到解法"
usecases:
  - title: "给商品做固定构图的批量图"
    desc: "用参考图和控制工具锁住姿势、构图，再替换产品或背景。"
  - title: "训练自己的视觉风格"
    desc: "整理一组已授权素材做 LoRA，让后续生成更接近品牌调性。"
forwho: ["重视隐私和可控性的团队", "愿意研究工作流的设计师和开发者"]
notforwho: ["不想安装软件或调参数的人", "只有轻薄本又不想租云显卡的用户"]
faq:
  - q: "Stable Diffusion 能在国内本地跑吗？"
    a: "可以，开源权重可下载到本地显卡运行，无需联网。"
  - q: "新手怎么上手？"
    a: "用 ComfyUI 或秋叶整合包降低门槛。"
---

Stable Diffusion 像一间自己的暗房：刚开始要认设备、调参数，熟了以后想怎么做都不受平台额度限制。对要长期做同类素材的人，这份自由比“点一下出图”更值钱。

## 核心能力
- 文生图、图生图、局部重绘、LoRA 风格训练
- 插件生态庞大（ControlNet、IP-Adapter 等）
- 权重开源，可离线运行，数据完全自主

## 价格与访问
模型免费开源，仅需显卡硬件成本。国内可直接从 HuggingFace 镜像下载权重。

## 国内替代
通义万相（在线免部署）、可灵图像（国内直连）、LiblibAI（国内模型社区）。

## 别低估上手成本
免费说的是模型，不是时间和硬件。第一次安装、下载权重和处理显存报错都要花功夫；如果只是临时赶一张图，在线工具反而更快。
