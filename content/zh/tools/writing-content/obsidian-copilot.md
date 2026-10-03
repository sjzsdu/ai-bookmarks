---
title: "Obsidian Copilot"
description: "Obsidian 笔记软件的 AI 插件，在知识库里直接用 AI 辅助整理和生成。"
translationKey: "obsidian-copilot"
category: "写作与内容"
website: "https://github.com/logancyang/obsidian-copilot"
price: "Free（开源）"
faq:
  - q: "Obsidian Copilot 需要付费吗？"
    a: "插件免费开源，但 AI 模型调用需要自己的 API Key（如 OpenAI）。"
  - q: "能离线用吗？"
    a: "不行，需要联网调用 AI 模型，但可以用本地模型（如 Ollama）实现离线。"
highlights:
  - "把大模型接进本地笔记库"
  - "Chat 模式基于你的 vault 回答"
  - "支持任意模型供应商（含本地 Ollama）"
usecases:
  - title: "笔记问答"
    desc: "向自己的笔记库提问并溯源。"
  - title: "写作辅助"
    desc: "在笔记内续写和总结。"
  - title: "本地隐私"
    desc: "接本地模型实现数据不出机。"
forwho:
  - "Obsidian 重度用户"
  - "在意数据隐私的知识管理者"
notforwho:
  - "不用 Obsidian 的人"
  - "希望零配置的用户（需自备 API key）"
---

Obsidian Copilot 是社区开发的 AI 插件：它把大模型接进你的本地 vault，聊天模式基于笔记内容回答并给出来源链接，还能接本地 Ollama 模型做到数据完全不出机。

## 上手体验

在 Obsidian 插件市场安装后配置 API key（或本地 Ollama 地址）；先在设置里选择默认的「vault 模式」。

## 具体能干嘛

- 把一封语气拿不准的英文客户邮件先写完，再逐条决定是否采纳建议。
- 交付英文简历、论文摘要或产品页前，专门抓拼写、冠词和不自然的长句。
- 需要换一种语气时，先保留原稿，再比较它给出的几个改写版本。

## 不足和坑

插件质量依赖社区维护；模型调用的费用自付；长 vault 的检索效果与索引方式有关，需调试。

## 替代方案

云端一体化用 Notion AI；文献管理用 Zotero+LLM 插件；纯写作辅助用专用工具。
