---
title: "OpenAI Codex"
description: "OpenAI's software engineering agent — runs tasks in parallel cloud sandboxes, included with ChatGPT."
translationKey: "codex"
category: "Coding & Dev"
website: "https://openai.com/codex"
price: "From $20/mo via ChatGPT"
priceCurrency: "USD"
access: "需代理"
platforms: ["Web", "CLI", "IDE extension"]
highlights:
  - "Parallel cloud sandboxes — tasks run off your machine"
  - "codex model fine-tuned for real software engineering"
  - "Included with existing ChatGPT subscriptions"
usecases:
  - title: "Parallel work"
    desc: "Dispatch bugfixes, tests, and dependency upgrades simultaneously."
  - title: "Issue-to-PR automation"
    desc: "Hand it a GitHub issue and get a pull request back."
forwho:
  - "ChatGPT Pro/Team subscribers"
  - "Small teams automating repetitive engineering"
notforwho:
  - "Local, interactive debugging sessions"
  - "Users needing direct China access"
faq:
  - q: "Codex vs ChatGPT coding?"
    a: "Codex is a separate agent: it gets a copy of your repo in a cloud container, runs tests, and iterates for minutes to hours."
  - q: "Is it safe?"
    a: "Runs in isolated sandboxes without network egress by default; code stays within your environment."
---

Codex turns GPT models into a software engineering agent: dispatch a task from web or CLI, and it clones your repo in a cloud sandbox, writes code, runs tests, and returns a diff or PR. Because it's cloud-based, tasks run in parallel — several at once, which local tools can't do.

## Strengths
- Cloud sandbox execution with parallel tasks
- Web, CLI, and IDE entry points
- Outputs diffs/PRs wired into GitHub workflows
- codex model tuned for real engineering

## Pricing & access
Included in ChatGPT Plus/Pro/Team. Proxy required in China.

## Alternatives
Claude Code (same agentic style), Tongyi Lingma and Trae domestically.

## Bottom line
The 'dispatch and wait for PR' mode suits process-driven teams; fine-grained debugging stays local.

