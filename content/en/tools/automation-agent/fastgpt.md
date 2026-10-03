---
title: "FastGPT"
description: "Open-source Chinese platform for knowledge-base Q&A and visual agent workflows."
translationKey: "fastgpt"
category: "Automation & Agent"
website: "https://fastgpt.cn"
price: "Free (open source)"
highlights:
  - "Knowledge-base Q&A platform tuned for RAG accuracy"
  - "Visual flow editor for retrieval, tools, and dialogue"
  - "Chinese-first community with active enterprise deployments"
usecases:
  - title: "KB Q&A"
    desc: "Rapid deployment for support, policy, and docs."
  - title: "Ticket triage"
    desc: "Smart routing with human handoff into business systems."
  - title: "App orchestration"
    desc: "Visual flows combining retrieval and tools."
forwho:
  - "Chinese knowledge-base teams"
  - "Enterprises self-hosting"
notforwho:
  - "Multimodal or complex agent needs"
  - "English-first corpora"
faq:
  - q: "Is FastGPT free?"
    a: "Self-hosted open source is free; the hosted cloud bills by usage."
  - q: "Supported models?"
    a: "Any OpenAI-compatible endpoint; docs for DeepSeek, Qwen, and GLM are first-class."
---

FastGPT is a Chinese open-source KB Q&A platform that goes deep on RAG: ingestion, chunking, QA-pair generation, retrieval testing, plus visual orchestration for real business flows.

## Getting started

After self-hosting, build the knowledge base and check chunk quality — it caps answer quality — then test a simple Q&A app.

## What you can actually do

- KB management: multi-format import and tuning
- Visual orchestration: retrieval, branches, HTTP nodes
- Channels: Feishu, WeChat, API embeds

## Trade-offs and gotchas

Tuned for Chinese; English corpora underperform. Retrieval quality depends heavily on chunking and cleanup. Deep customization means reading source.

## Alternatives

Dify for broader platforms, OneAPI for model aggregation, LangChain for the Western toolchain.
