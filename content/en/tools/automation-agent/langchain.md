---
title: "LangChain"
description: "The go-to framework for building AI applications that connect LLMs with tools and data."
translationKey: "langchain"
category: "Automation & Agent"
website: "https://langchain.com"
price: "Free (open source)"
highlights:
  - "The de-facto framework library for LLM applications"
  - "Massive integration ecosystem: models, vector stores, tools"
  - "LangGraph adds stateful, controllable agent orchestration"
usecases:
  - title: "LLM app development"
    desc: "Apps with tool calling and data grounding."
  - title: "RAG systems"
    desc: "The standard component set for retrieval Q&A."
  - title: "Agent orchestration"
    desc: "Stateful multi-step agents via LangGraph."
forwho:
  - "Developers building AI applications"
  - "Systems integrating many models and sources"
notforwho:
  - "Users wanting a finished product"
  - "Minimal use cases (the framework is heavy)"
faq:
  - q: "Is LangChain hard to learn?"
    a: "Core abstractions (models, prompts, chains, retrievers) are simple; the integration sprawl is the challenge. Adopt incrementally."
  - q: "LangChain vs LangGraph?"
    a: "LangGraph is the team's stateful agent orchestration library — the recommended path for production agents."
---

LangChain is the standard library of LLM app development: unified model calls, prompt templates, retrieval, tools, and memory, with an enormous integration ecosystem — the default starting point for AI apps in Python/JS.

## Getting started

Compose a minimal chain (model + prompt + parser) with LCEL, then add retrieval or tools as needed; go straight to LangGraph for production agents.

## What you can actually do

- One model interface across OpenAI/Anthropic/local
- Retrieval components: loaders, splitters, vector stores
- LangGraph for graph-based stateful agents

## Trade-offs and gotchas

Many abstractions and fast releases — tutorials rot constantly. Over-abstraction hurts simple use cases. Pin versions and write integration tests for production.

## Alternatives

Official SDKs for lightweight direct calls, Langflow/Flowise for visuals, Dify for a productized platform.
