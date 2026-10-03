---
title: "CosyVoice"
description: "Alibaba's open-source TTS model with strong multi-language and voice cloning support."
translationKey: "cosyvoice"
category: "Audio & Music"
website: "https://github.com/FunAudioLLM/CosyVoice"
price: "Free"
highlights:
  - "Alibaba's open TTS — clones a voice from 3 seconds of audio"
  - "Multilingual: Chinese, English, Japanese, Korean, Cantonese"
  - "Open, commercially usable, active community"
usecases:
  - title: "Voice cloning"
    desc: "Reproduce a target voice from a short sample."
  - title: "Multilingual content"
    desc: "One voice speaking several languages."
  - title: "Private deployment"
    desc: "Run open models inside your intranet."
forwho:
  - "Content teams needing cloning"
  - "Enterprises self-hosting voice"
notforwho:
  - "Users wanting zero-setup simplicity"
  - "Light setups without GPUs"
faq:
  - q: "How does CosyVoice compare to ChatTTS?"
    a: "Better multi-language support; ChatTTS has more flexible prosody control."
  - q: "Can it run locally?"
    a: "Yes, open-source model runs locally on GPU."
---

CosyVoice, from Alibaba's FunAudioLLM team, is the practical star of open TTS: zero-shot cloning from a 3-second reference while keeping multilingual quality high.

## Getting started

Prepare clean 3–10 second reference audio with no background noise — it transforms cloning quality. Tune emotion and pace on short text before batch runs.

## What you can actually do

- Zero/few-shot cloning from short clips
- Multilingual synthesis across major languages
- Instruct control: describe speaking style in words

## Trade-offs and gotchas

Mind the legal line on cloning — only voices you're authorized to use. Mid-range VRAM needs; CPU inference is slow, batch on GPU.

## Alternatives

ElevenLabs for no-fuss cloning, ChatTTS for Chinese conversational tone, Azure TTS for managed enterprise service.
