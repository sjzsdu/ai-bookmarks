---
title: "CrewAI"
description: "Multi-agent framework where AI roles collaborate like a team to complete complex tasks."
translationKey: "crewai"
category: "Automation & Agent"
website: "https://crewai.com"
price: "Free / $50"
highlights:
  - "Role-based agent crews: define jobs, let them collaborate"
  - "Clean Python abstraction over multi-agent orchestration"
  - "Works with any LLM provider out of the box"
usecases:
  - title: "Content pipelines"
    desc: "Researcher, writer, and reviewer roles relay output."
  - title: "Research tasks"
    desc: "Roles split gathering, synthesis, and reporting."
  - title: "Process automation"
    desc: "Business flows decomposed into role chains."
forwho:
  - "Python devs entering multi-agent"
  - "Small teams adding AI division of labor"
notforwho:
  - "Fine conversation control (AutoGen)"
  - "Non-technical users"
faq:
  - q: "Is CrewAI free?"
    a: "Open source and free; model calls bill to your provider."
  - q: "Relation to LangChain?"
    a: "CrewAI can use LangChain tools but has its own orchestration, focused on role-based collaboration."
---

CrewAI abstracts multi-agent work into crews: define each agent's role, goal, and tools, and the framework relays tasks through them to completion.

## Getting started

Build a minimal three-role crew (goal, backstory, tools), get it running, then add process control and task dependencies.

## What you can actually do

- Role definitions with goals, backstories, tools
- Task chains with outputs and dependencies
- Sequential and hierarchical processes

## Trade-offs and gotchas

Roles aren't smart by default — prompt quality decides output. Errors cascade in long chains. Token burn grows linearly with agent count.

## Alternatives

AutoGen for conversational control and code execution, Flowise for visual builds, Dify for a productized platform.
