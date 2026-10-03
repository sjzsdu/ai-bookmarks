---
title: "Bark"
description: "Suno's open-source TTS model with multi-language and emotional speech support."
translationKey: "bark"
category: "Audio & Music"
website: "https://github.com/suno-ai/bark"
price: "Free"
highlights:
  - "Open source and free — runs locally, even offline"
  - "Generates laughter, sighs, and non-verbal sounds"
  - "Multilingual mixing with usable Chinese"
usecases:
  - title: "Offline voice"
    desc: "Speech generation that never leaves your machine."
  - title: "Creative SFX"
    desc: "Speech with emotion, pauses, and laughs baked in."
  - title: "Hacking"
    desc: "Build your own voice apps on open weights."
forwho:
  - "Developers with GPUs who tinker"
  - "Privacy-sensitive setups"
notforwho:
  - "Users wanting plug-and-play"
  - "Production stability (output variance is high)"
faq:
  - q: "Can Bark run locally?"
    a: "Yes, open-source model runs locally on GPU, no internet needed."
  - q: "How does it compare to commercial TTS?"
    a: "Good multi-language and emotional expression, but lower quality than commercial options."
---

Bark is Suno's open-source TTS, and its claim to fame is humanity: it laughs, sighs, pauses, and can mix languages mid-sentence. The trade-off is variance — the same line twice can sound very different.

## Getting started

Call it via transformers after a Python setup; generate several candidates per line and pick, keeping the noise parameter modest.

## What you can actually do

- Multilingual TTS: Chinese/English/Japanese mixing works
- Non-verbal sounds: realistic laughs, sighs, throat clears
- Local deployment: downloadable open weights

## Trade-offs and gotchas

No fine-grained controls — stable voices rely on prompt tricks and rerolling. VRAM needs are nontrivial; split long texts and stitch the audio.

## Alternatives

Azure TTS for stable commercial use, ChatTTS for Chinese prosody, CosyVoice or Fish Speech for cloning.
