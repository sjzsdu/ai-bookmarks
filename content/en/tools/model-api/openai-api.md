---
title: "OpenAI API"
description: "Official API for GPT models — pay-as-you-go, most widely adopted."
translationKey: "openai-api"
category: "Model API"
website: "https://platform.openai.com"
price: "$0.20 / 1M tokens"
highlights:
  - "The most widely integrated model API in the ecosystem"
  - "Full model lineup: reasoning, multimodal, embeddings, audio"
  - "Tooling maturity: function calling, batching, fine-tuning"
usecases:
  - title: "General AI features"
    desc: "GPT chat, reasoning, and multimodality."
  - title: "Agents & tools"
    desc: "Function calling, batching, fine-tuning."
  - title: "Speech & images"
    desc: "TTS, transcription, image generation APIs."
forwho:
  - "Teams wanting the most mature API"
  - "Products needing text+speech+image in one"
notforwho:
  - "Cost-sensitive batch workloads"
  - "Direct China access"
faq:
  - q: "Is the OpenAI API expensive?"
    a: "Token-billed; mini tiers are far cheaper, Batch API is half price, caching helps."
  - q: "Usable from China?"
    a: "Official access needs overseas network/payment, or route through Azure OpenAI."
---

The OpenAI API is the industry's most-integrated model interface: the GPT lineup covers chat, reasoning, and multimodal, wrapped in function calling, batching, fine-tuning, and evals — most tutorials assume you start here.

## Getting started

Get a key and send a first request with the official SDK; start on a mini tier and upgrade only if quality demands.

## What you can actually do

- Chat Completions/Responses with streaming
- Tool calling and structured outputs
- Batch API and prompt caching for savings

## Trade-offs and gotchas

Access and payment barriers from China. Fast deprecation cycles — watch announcements in production. Costs scale linearly; set budget alerts.

## Alternatives

DeepSeek for value, OpenRouter for aggregation, Azure OpenAI for enterprise compliance.
