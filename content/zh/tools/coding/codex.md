---
title: "OpenAI Codex"
description: "OpenAI 的软件工程代理，云端并行执行任务，ChatGPT 订阅即可使用。"
translationKey: "codex"
category: "编程与开发"
website: "https://openai.com/codex"
price: "随 ChatGPT 订阅 $20/月起"
priceCurrency: "USD"
access: "需代理"
platforms: ["Web", "CLI", "IDE 插件"]
highlights:
  - "云端沙箱并行跑多个任务，不占本地资源"
  - "codex-1 模型针对真实软件工程微调"
  - "与 ChatGPT 订阅打通，无需额外付费"
usecases:
  - title: "并行处理任务"
    desc: "同时派发修 Bug、写测试、升级依赖等多个任务。"
  - title: "基于 issue 的自动化"
    desc: "把 GitHub issue 丢给它，拿到 PR 回来。"
forwho:
  - "ChatGPT Pro/Team 订阅用户"
  - "想把重复工程任务自动化的小团队"
notforwho:
  - "需要本地文件实时交互的调参场景"
  - "国内直连需求用户"
faq:
  - q: "Codex 和 ChatGPT 写代码有什么区别？"
    a: "Codex 是独立代理：在云端容器里拿到你的仓库副本，能跑测试、迭代几分钟到几小时。"
  - q: "安全吗？"
    a: "云端沙箱隔离运行，无网络出口（可配置），代码只在你的环境内处理。"
---

Codex 是 OpenAI 把 GPT 系模型变成软件工程代理的产物：你在网页或 CLI 里派任务，它在云端沙箱里 clone 你的仓库、写代码、跑测试，最后交回 diff 或 PR。云端的意味着可以并行——同时开几个任务各干各的，这是本地工具做不到的。

## 核心能力
- 云端沙箱执行，任务可并行
- 支持 Web、CLI、IDE 三种入口
- 产出 diff / PR，接入 GitHub 工作流
- codex 模型针对真实工程任务强化

## 价格与访问
包含在 ChatGPT Plus/Pro/Team 订阅中。需代理。

## 国内替代
通义灵码、Trae；或用 Claude Code（同为代理式，需代理）。

## 定位
「甩任务等 PR」的协作模式适合流程化团队；精细调试还得回到本地工具。

