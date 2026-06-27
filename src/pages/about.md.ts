import type { APIRoute } from "astro";
import { SITE } from "@/config";

export const GET: APIRoute = async () => {
  const markdownContent = `# About ${SITE.title}

I'm ${SITE.author}, a researcher at LMU Munich / QAR-Lab working on Quantum Reservoir Computing, Quantum Machine Learning, and time-series forecasting. I keep research outputs reproducible and inspectable through public code, experiment manifests, cached artifacts, figures, and paper material where possible.

This page follows the public GitHub profile as the ground truth for current project orientation.

## Current Research Focus

- Quantum Reservoir Computing with strict classical, feature-budget, and shot-budget controls
- Quantum Machine Learning benchmarks where claims, baselines, and evidence stay auditable
- Time-series forecasting from quantum measurement records and controlled reservoir features
- Research reproducibility: scripts, manifests, cached artifacts, and publication figures
- Quantum generative modeling, parametrized Hamiltonians, and optimization workflows

## Open Research

- QRC Operating Band: https://github.com/eybmits/qrc-operating-band
- VQML Symmetry Artifact: https://github.com/eybmits/vqml-symmetry-artifact
- IQP Generative Modeling: https://github.com/eybmits/iqp-generative-modeling
- Hamiltonian Implicit Differentiation: https://github.com/eybmits/hamiltonian-implicit-differentiation
- Statistically Learnable QRC: https://github.com/eybmits/qrc-statistical-learning

## Public Documentation and Tools

- VibeTracker: https://eybmits.github.io/vibe-tracker-pages/ and https://github.com/eybmits/vibe-tracker
- Interactive QRC learning platform: https://eybmits.github.io/qrc-learning-platform/ and https://github.com/eybmits/qrc-learning-platform
- Research website and identity hub: https://eybmits.github.io and https://github.com/eybmits/research-website
- Spaced-repetition tutor: https://memry-7ppl.onrender.com and https://github.com/eybmits/spaced-repetition-tutor
- Terminal-first longevity tracker: https://eybmits.github.io/posts/2026/longevity-logbook and https://github.com/eybmits/longevity-logbook
- 100x100 Pomodoro tracker: https://eybmits.github.io/pomodoro-100x100/#/ and https://github.com/eybmits/pomodoro-100x100
- Cognitive decision tree: https://eybmits.github.io/cognitive-decision-tree/ and https://github.com/eybmits/cognitive-decision-tree
- macOS writing assistant: https://github.com/eybmits/writing-assistant-macos

## Contact

- Personal website: https://eybmits.github.io/
- GitHub: https://github.com/eybmits
- Google Scholar: https://scholar.google.com/citations?hl=en&user=gjjgrw0AAAAJ
- LMU profile: https://www.ifi.lmu.de/mvs/de/team/kontaktseite/markus-baumann-eb504667.html
- QAR-Lab: https://qarlab.de/en/
- Email: ${SITE.email}

---

[Back to Home](/index.md)`;

  return new Response(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
