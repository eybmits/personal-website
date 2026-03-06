---
title: Longevity Logbook
description: A minimal terminal-first training tracker for bodyweight, Zone 2, Zone 5 / HIIT, and strength work.
pubDatetime: 2026-03-06T00:40:00.000Z
featured: true
tags:
  - product
  - terminal
  - fitness
  - typescript
source: https://github.com/eybmits/longevity-logbook
---

I just shipped **Longevity Logbook**, a small terminal-first app for tracking the sessions I actually care about week to week:

- bodyweight
- Zone 2
- Zone 5 / HIIT
- strength training

The main idea is not to build another bloated fitness app. The point is to make logging frictionless, keep the weekly targets visible, and let the training plan evolve without adding unnecessary UI.

The app opens into a rolling 7-day dashboard and shows:

- the latest bodyweight entry and change,
- current weekly progress,
- the next strength workout in the cycle,
- recent sessions,
- and the current data file on disk.

Strength is built around a simple editable plan:

- fixed but editable 6-day workout cycle,
- manual session selection so I can choose the day I am actually doing,
- editable exercises, starting weights, and increments,
- per-exercise progression,
- rep target from `6` to `12`,
- and automatic weight increases only after the top of the range is completed.

If an exercise is **not completed**, it stays at the same weight and the same rep target next time. Progression is tracked per exercise, not just per workout.

Everything is stored locally in a single JSON file. There is no backend, no account system, and no sync layer.

Two practical details I wanted from the start:

1. the full strength plan should be visible from the CLI,
2. the strength plan itself should be editable from the CLI.

That is now part of the shipped version, together with a global `gym` launcher after running `npm link`.

The current default split is:

1. arms and side delts
2. lats, shoulders, and glutes
3. chest and posterior chain
4. arms and shoulder isolation
5. vertical pull, shoulders, and legs
6. chest, shoulders, and lower body

Repository:

- [GitHub: longevity-logbook](https://github.com/eybmits/longevity-logbook)

If you want a tiny training logger that stays out of the way, this is the direction I think makes sense.
