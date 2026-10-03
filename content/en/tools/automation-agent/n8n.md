---
title: "n8n"
description: "Open-source workflow automation; self-hostable to wire AI into business processes."
translationKey: "n8n"
category: "Automation & Agent"
website: "https://n8n.io"
price: "Free (open source)"
highlights:
  - "Open-source workflow automation you can self-host"
  - "Code when you want it: JavaScript/Python nodes alongside no-code"
  - "AI agent nodes bring LLM steps into data pipelines"
usecases:
  - title: "Validate one repetitive job"
    desc: "Turn a copying, sorting, or research task into a small observable loop first."
  - title: "Keep a human handoff"
    desc: "Require review before external messages, database writes, or spend."
forwho:
  - "Product and operations teams willing to test with real workflows"
  - "Developers who can maintain integrations and failure handling"
notforwho:
  - "Teams expecting zero setup and fully autonomous judgment"
faq:
  - q: "Where should I start?"
    a: "Pick a low-risk workflow with human review, then track quality, time saved, and actual cost."
  - q: "Is it ready for production?"
    a: "Potentially, after you add access control, rate limits, logs, retries, and an escalation path."
---
n8n is worth considering when you specifically need **self-hosted business automation**. Start with one narrow, measurable workflow instead of treating it as a generic AI add-on.

## Getting started
Use realistic but redacted data in a read-only proof of concept. Check access, rate limits, failure notifications, and the cost of a normal week before connecting anything that writes or sends.

## What you can actually do
- Turn incoming documents, forms, or requests into a reviewable first draft.
- Give support, sales, or research a first pass at retrieval, classification, and summarization.
- Connect a bounded API action, such as looking up a record, creating a task, or routing an exception.
- Compare prompts or model settings on a small sample before changing a live workflow.

## Trade-offs and gotchas
The attractive demo is the easy part. Production needs explicit ownership for bad inputs, permissions, retries, occasional wrong output, and spend limits. Do not remove the human review step until you have measured real failures.

## Alternatives
Choose a lower-code alternative when speed of setup matters, a self-hosted option when data control matters, or a code-first framework when the workflow needs tests and fine-grained behavior. Those priorities usually pull in different directions.
