---
title: "Groq"
description: "Ultra-fast AI inference using custom LPU chips — free tier included."
translationKey: "groq"
category: "Model API"
website: "https://groq.com"
price: "Free"
highlights:
  - "LPU inference delivers extreme tokens-per-second"
  - "Run open models (Llama, Mixtral) at near-instant latency"
  - "Simple OpenAI-compatible endpoint for easy migration"
usecases:
  - title: "Low-latency chat"
    desc: "LPU inference makes open models instant."
  - title: "Voice-class apps"
    desc: "Token throughput fits real-time UX."
  - title: "Open-model sampling"
    desc: "Free tier to compare models quickly."
forwho:
  - "Latency-sensitive applications"
  - "Devs trialing open models cheaply"
notforwho:
  - "Latest closed-model capability"
  - "High-volume production (plan rate limits)"
faq:
  - q: "Which models run on Groq?"
    a: "Open models mainly — Llama, Mixtral, Qwen, DeepSeek; see the live models page."
  - q: "Why is it fast?"
    a: "Custom LPU inference chips tuned for LLM workloads — leading throughput and time-to-first-token."
---

Groq runs open models on custom LPU chips at near-instant speed: hundreds to thousands of tokens per second, the first production-grade fluency for chat and voice apps.

## Getting started

Grab a free key and swap the OpenAI-compatible base_url to Groq; mind the free-tier rate limits.

## What you can actually do

- OpenAI-compatible API — one line to migrate
- Llama/Mixtral/Qwen and more
- Hundreds of tokens/second output

## Trade-offs and gotchas

The model list shifts with policy — confirm before depending on one. Strict rate limits; production wants paid tiers. Context windows run smaller.

## Alternatives

Together/OpenRouter for model breadth, Ollama for local, official APIs for closed-model capability.
