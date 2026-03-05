---
title: Building a Brainfog Decision Tree MVP
description: A small UI prototype that turns a brainfog checklist into an animated decision tree with practical interventions.
pubDatetime: 2026-03-05T23:50:00.000Z
tags:
  - product
  - react
  - interface
  - prototyping
source: https://github.com/eybmits/brainfog-decision-tree
---

I just shipped a small prototype that explores a simple question:

What if a brainfog intake did not feel like a form, but like a visible decision tree?

The MVP is built with React, Vite, TypeScript, and Framer Motion. Instead of expanding every question into a full card, the interface keeps one active node large and renders the rest as compact previews on the tree. That preserves the diagram feeling without collapsing into overlapping UI.

The current flow covers six baseline checkpoints:

1. sleep
2. Omega-3
3. hydration
4. movement
5. stress regulation
6. B12 / iron

The interaction model is intentionally narrow:

- `Optimized` pushes the path deeper down the branch
- `Not optimized` stops the path and opens the first practical intervention
- the tree stays visible throughout the flow

Two links if you want to inspect it:

- [Live demo](https://eybmits.github.io/brainfog-decision-tree/)
- [GitHub repository](https://github.com/eybmits/brainfog-decision-tree)

This is still an MVP, not a medical tool. The point was to test the visual structure, the state flow, and whether the interface can make a small intervention tree feel more legible and more alive than a standard questionnaire.

The next obvious extension would be true branching instead of stopping at the first unresolved factor.
