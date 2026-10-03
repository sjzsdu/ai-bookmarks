---
title: "Ollama"
description: "Run open models locally with one command — data never leaves your machine."
translationKey: "ollama"
category: "Model & API"
website: "https://ollama.com"
price: "Free OSS"
access: "需代理"
platforms: ["macOS", "Windows", "Linux"]
highlights:
  - "One command to run Llama/Qwen/DeepSeek locally"
  - "Exposes an OpenAI-compatible local API automatically"
  - "Fully local — the privacy-first default"
usecases:
  - title: "Private local AI"
    desc: "Run models inside air-gapped or sensitive environments."
  - title: "Dev iteration"
    desc: "Call local models during development, zero API burn."
forwho:
  - "Developers and geeks running local models"
  - "Privacy-sensitive scenarios"
notforwho:
  - "Machines without decent RAM/GPU (small models aside)"
  - "Users chasing flagship-model ceilings"
faq:
  - q: "Hardware needs?"
    a: "7B models run in 8GB RAM; 14B wants 16GB+; 70B-class needs pro GPUs."
  - q: "vs LM Studio?"
    a: "Ollama is CLI-first for servers and automation; LM Studio offers a full GUI."
---

Ollama reduces 'running open models' to one line: ollama run qwen3 — download, chat, and it quietly serves an OpenAI-compatible API on localhost, so existing code switches by changing a URL. For privacy-sensitive contexts (intranet, offline, compliance), it's the de-facto standard for local LLMs.

## Strengths
- One-command pulls for hundreds of open models
- Local OpenAI-compatible API
- Quantization and GPU acceleration
- Cross-platform (macOS/Windows/Linux)

## Pricing & access

Free and open source; the download site may need a proxy, models have mirrors.

## Compared
LM Studio (GUI-first), llama.cpp (lower-level); Ollama wins for engineering use.

## Bottom line

The entry-level infrastructure of the local-model ecosystem.

