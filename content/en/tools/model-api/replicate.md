---
title: "Replicate"
description: "Run open-source models via API — no GPU setup, pay only for compute used."
translationKey: "replicate"
category: "Model API"
website: "https://replicate.com"
price: "$0.09 / hour"
highlights:
  - "Run thousands of open models via one simple API"
  - "Pay per second of compute — no infrastructure to manage"
  - "Deploy custom models with Cog, infra-free"
usecases:
  - title: "Open models as APIs"
    desc: "Thousands of community models on demand."
  - title: "Custom deployment"
    desc: "Package your own model with Cog."
  - title: "Image generation apps"
    desc: "Hosted SD/FLUX inference."
forwho:
  - "App developers avoiding GPU ops"
  - "Image/audio/video generation products"
notforwho:
  - "Very high-volume inference (do the math)"
  - "Ultra-low-latency real-time use"
faq:
  - q: "How does Replicate bill?"
    a: "Per second of model runtime based on hardware pricing; idle time costs nothing."
  - q: "Can I deploy my own?"
    a: "Yes — package with Cog and push to get an API."
---

Replicate turns 'running open models' into a per-second API: thousands of versioned community models (image, video, audio, LLM) on demand, and your own models ship via Cog — no GPU touching required.

## Getting started

Play with models on the web first, then take an API token once quality is confirmed; hardware pricing varies a lot per model.

## What you can actually do

- Model marketplace with versioned, callable models
- Cog deployments for your own weights
- Per-second billing with zero idle cost

## Trade-offs and gotchas

Per-second pricing can beat monthly GPUs only sometimes — model your batch costs. Cold starts hurt real-time UX. Community quality varies; curate.

## Alternatives

Groq/Together for LLM inference, Ollama for local, OpenRouter for aggregation.
