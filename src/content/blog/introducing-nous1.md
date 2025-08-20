---
title: "Introducing Nous-1"
date: "2025-07-20"
readTime: "5 min read"
excerpt: "A brief introduction to the Nous-1 family and its goals for reasoning and instruction-following."
image: "/blog/odyssey-evolution.jpg"
category: "Research"
author: "Aayan Mishra"
slug: "introducing-nous1"
---

# Introducing Nous-1

Nous-1 is our initial public family of models focused on instruction following and improved reasoning. We built the family to cover several parameter scales so teams can pick the right tradeoff between latency and capability.

## Key highlights

- Multi-scale variants (small to large) tailored for deployment and research.
- Standardized evaluation suites and model cards.
- Example deployments and reproducible notebooks to speed integration.

We welcome community feedback and collaboration. Learn more on the project page.

## Overview

This post gives a detailed introduction to the Nous-1 family: design goals, architectural choices, known trade-offs, recommended usage patterns, and a short roadmap. The family was created to provide reproducible, well-documented research models that can be used for both experimentation and production prototypes that prioritize instruction-following and reasoning capabilities.

## Design goals

- Reproducibility: clear training recipes, deterministic evaluation harnesses, and canonical checkpoints.
- Multi-scale coverage: provide multiple parameter points so teams can select a model that matches latency and cost targets.
- Safety-first: provide model cards, red-team notes, and recommended guardrails for real-world deployments.
- Interoperability: standard tokenizer, ONNX/ggml checkpoints where feasible, and clear instructions for converting to quantized backends.

## Family variants

Nous-1 is released in multiple sizes. Example reference naming (actual variant names and sizes may vary):

- Nous-1-2B — optimized for low-latency interactive cases and edge deployments. Ideal for local inference and tight cost budgets.
- Nous-1-4B — a balanced variant for conversational agents and medium-scale deployments.
- Nous-1-8B — higher capacity for improved reasoning and complex instruction-following tasks.

Each variant shares instruction-tuning methods and evaluation suites so results are comparable across scales.

## Architecture & Training

The Nous family is based on the Qwen3 architecture with causal attention and the optimizations that Qwen3 provides for instruction-tuning and efficient inference. Key training highlights:

- Tokenizer: BPE-based tokenizer with a documented vocabulary and tie-ins for conversion to popular tokenizer libraries.
- Instruction tuning: supervised fine-tuning on curated instruction datasets followed by lightweight RLHF-like calibrations for behavior shaping (where applicable).
- Checkpoint format: released in standard PyTorch checkpoint format with conversion notes for other runtimes.

## Evaluation

We evaluate across three axes:

- Instruction following (accuracy on instruction benchmarks and human preference studies).
- Reasoning (chain-of-thought tasks, multi-step logic benchmarks).
- Robustness (adversarial prompts, distribution shifts).

Benchmarking results are included in the repository and in the model card for each variant. Expect the larger variants to show advantages on long-context reasoning tasks and complex multi-step outputs.

## How to get started (developer quickstart)

Below is a minimal example of loading a Nous-1 variant locally (pseudo-code):

```python
from transformers import AutoModelForCausalLM, AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained('noema/nous-1-4b')
model = AutoModelForCausalLM.from_pretrained('noema/nous-1-4b')

prompt = "Explain the principle of active recall in study practice."
inputs = tokenizer(prompt, return_tensors='pt')
outputs = model.generate(**inputs, max_length=256)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))
```

Refer to the full repository for hardware-specific inference tips, quantization guidance, and example notebooks.

## Safety and responsible use

## Reasoning vs Non-Reasoning (thinking mode)

Nous supports two interaction modes shown in the examples below: a "reasoning" (thinking) mode that emits internal chain-of-thought style tokens, and a "non-reasoning" mode that only returns the final content. Use the `enable_thinking` flag in the tokenizer's chat template to switch modes.

Reasoning (thinking) mode example:

```python
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

model_name = "NoemaResearch/Nous-1-4B"

tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(
	model_name,
	torch_dtype="auto",
	device_map="auto"
)

prompt = "Give me a short introduction to large language models."
messages = [{"role": "user", "content": prompt}]
text = tokenizer.apply_chat_template(
	messages,
	tokenize=False,
	add_generation_prompt=True,
	enable_thinking=True  # reasoning/thinking mode
)
model_inputs = tokenizer([text], return_tensors="pt").to(model.device)

generated_ids = model.generate(
	**model_inputs,
	max_new_tokens=1024
)
output_ids = generated_ids[0][len(model_inputs.input_ids[0]):].tolist()

# parse out thinking tokens if present (example token id for </think> may vary)
try:
	index = len(output_ids) - output_ids[::-1].index(151668)
except ValueError:
	index = 0

thinking_content = tokenizer.decode(output_ids[:index], skip_special_tokens=True).strip("\n")
content = tokenizer.decode(output_ids[index:], skip_special_tokens=True).strip("\n")

print("thinking content:", thinking_content)
print("content:", content)
```

Non-reasoning mode example (no internal thinking output):

```python
text = tokenizer.apply_chat_template(
	messages,
	tokenize=False,
	add_generation_prompt=True,
	enable_thinking=False  # non-reasoning mode
)
model_inputs = tokenizer([text], return_tensors="pt").to(model.device)

generated_ids = model.generate(
	**model_inputs,
	max_new_tokens=1024
)
content = tokenizer.decode(generated_ids[0], skip_special_tokens=True)
print(content)
```


Nous-1 models are released with model cards that document risks, limitations, and recommended mitigations. We strongly encourage teams to:

- Apply input filtering and rate limits in user-facing products.
- Use human-in-the-loop review for high-stakes outputs.
- Log and monitor model outputs for distributional drift and abuse.

## Roadmap

- Expanded evaluation suites including multilingual benchmarks.
- Community leaderboard and reproducibility challenges.
- More efficient smaller models with improved instruction alignment.

## Acknowledgements

This work reflects contributions from the Noema Research founding team and early collaborators. If you want to contribute or collaborate, open an issue or reach out via the contact page.

---

_Published by Aayan Mishra — Founder, Noema Research_
