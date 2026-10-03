---
title: "Anthropic API"
description: "Official API for Claude models — strong safety and 200K context window."
translationKey: "anthropic-api"
category: "Model API"
website: "https://console.anthropic.com"
price: "$0.80 / 1M tokens"
highlights:
  - "Claude models with industry-leading long-context handling"
  - "Strong safety posture and consistent instruction following"
  - "Prompt caching and batch APIs cut costs materially"
usecases:
  - title: "Long documents"
    desc: "200K context swallows books and codebases."
  - title: "Quality-first products"
    desc: "Claude's writing and safety in your app."
  - title: "Agent building"
    desc: "Tool use and computer-use capabilities."
forwho:
  - "Products judged on output quality and safety"
  - "Long-document workloads"
notforwho:
  - "Cheapest-possible batch jobs (DeepSeek)"
  - "Direct China access"
faq:
  - q: "Can I use the Anthropic API in China?"
    a: "Official access needs overseas network and payment; enterprises can route via AWS Bedrock or Google Vertex."
  - q: "Billing?"
    a: "Per input/output token; prompt caching and the Batch API cut costs significantly."
---

The Anthropic API is the official door to Claude: known for safety, instruction-following, and 200K context that reads whole documents, with prompt caching and batching to tame heavy-usage costs.

## Getting started

Grab an API key, send a first request via the official or OpenAI-compatible SDK, and prototype in the Workbench before coding.

## What you can actually do

- Messages API with streaming
- Tool use plus the MCP ecosystem
- Prompt caching and Batch for cost control

## Trade-offs and gotchas

Proxy and payment barriers from China. Wide price spread across model tiers — budget tokens first. Rate limits scale with tier; request raises for heavy use.

## Alternatives

DeepSeek API for cost, OpenRouter for aggregation, Bailian or Volcengine Ark for domestic compliance.
