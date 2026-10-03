---
title: "CosyVoice"
description: "阿里通义开源的 TTS 模型，多语种支持好，音色自然。"
translationKey: "cosyvoice"
category: "音频与音乐"
website: "https://github.com/FunAudioLLM/CosyVoice"
price: "Free"
highlights:
  - "阿里开源 TTS，3 秒样本即可克隆音色"
  - "中英日韩粤多语言覆盖"
  - "开源可商用，社区生态活跃"
usecases:
  - title: "音色克隆"
    desc: "用短样本复刻指定人声做配音。"
  - title: "多语言内容"
    desc: "同一音色输出多种语言音频。"
  - title: "私有化部署"
    desc: "企业内网跑开源模型，数据不出域。"
forwho:
  - "需要声音克隆的内容团队"
  - "要私有化部署语音能力的企业"
notforwho:
  - "只求最简开箱即用的用户"
  - "无 GPU 资源的轻量场景"
faq:
  - q: "CosyVoice 和 ChatTTS 比？"
    a: "多语种支持更好，中文自然度也很高；ChatTTS 在韵律控制上更灵活。"
  - q: "能本地跑吗？"
    a: "可以，开源模型下载到本地运行。"
---

CosyVoice 是阿里 FunAudioLLM 团队的开源语音模型：最大卖点是「短样本克隆」——3 秒参考音频就能复刻音色，同时保持多语言合成质量，是开源阵营里实用性最高的选择之一。

## 上手体验

准备干净的 3-10 秒参考音频（无背景音），克隆效果立刻上一个档次；长文本先试 emotion 和语速参数再批量跑。

## 具体能干嘛

- 零样本/少样本克隆：短音频复刻音色
- 多语言合成：中英日韩粤等语种
- 指令控制：用自然语言描述说话风格

## 不足和坑

克隆音色的法律边界要先想清楚——只克隆有权使用的声音；显存要求中等，CPU 推理速度慢，批量任务需要 GPU。

## 替代方案

不想折腾直接用 ElevenLabs（克隆最强）；中文口语感用 ChatTTS；企业稳定服务用 Azure TTS。
