---
title: "AutoGen"
description: "Microsoft's open-source multi-agent framework for conversational AI collaboration."
translationKey: "autogen"
category: "Automation & Agent"
website: "https://github.com/microsoft/autogen"
price: "Free (open source)"
highlights:
  - "Multi-agent conversations where agents talk (and critique) each other"
  - "Microsoft-backed open source with a fast-moving v0.4 architecture"
  - "Code-executing agents for verified, hands-off task completion"
usecases:
  - title: "Multi-agent research"
    desc: "Agents split work, debate, and cross-check conclusions."
  - title: "Code generation"
    desc: "Agents write, run, and self-correct from execution output."
  - title: "Human-in-the-loop"
    desc: "Pause for review at critical decision points."
forwho:
  - "Developers researching multi-agent systems"
  - "Engineering teams needing verifiable execution"
notforwho:
  - "No-code users"
  - "Single-assistant use cases"
faq:
  - q: "AutoGen or CrewAI?"
    a: "AutoGen excels at conversational collaboration and code execution; CrewAI's role abstraction is simpler. For deep Python work, AutoGen."
  - q: "Does it cost money?"
    a: "The framework is free and open source; you pay your model provider for calls."
---

AutoGen is Microsoft's open-source multi-agent framework built on conversation: a planner agent, an executor, and a critic talk to each other, critique, and revise until the job is done.

## Getting started

Start with the official notebooks: two-agent conversation first, understand the assistant/user-proxy split, then add code execution and human review.

## What you can actually do

- Conversational orchestration with speaker order and rules
- Code-executing agents that self-correct from errors
- Human callbacks at key decision points

## Trade-offs and gotchas

Multi-agent debugging costs far more than single-agent — runaway conversation loops burn tokens fast. v0.4 broke APIs from older versions; check tutorial versions.

## Alternatives

CrewAI for simpler role abstraction, Langflow and Flowise for visual builds, Dify for a ready-made product.
