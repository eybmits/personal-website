import type { APIRoute } from "astro";
import { SITE } from "@/config";

export const GET: APIRoute = async () => {
  const markdownContent = `# About ${SITE.title}

I'm ${SITE.author}, a researcher at LMU Munich / QAR-Lab working on Quantum Reservoir Computing, Quantum Machine Learning, time-series forecasting, and reproducible research software.

This page follows the public GitHub profile as the ground truth for current project orientation.

## Current Research Focus

- Quantum Reservoir Computing with strict classical, feature-budget, and shot-budget controls
- Quantum Machine Learning benchmarks where claims, baselines, and evidence stay auditable
- Time-series forecasting from quantum measurement records and controlled reservoir features
- Reproducible research software: scripts, manifests, cached artifacts, and publication figures
- Quantum generative modeling, parametrized Hamiltonians, and optimization workflows

## Open Research

- QRC Operating Band: https://github.com/eybmits/qrc-operating-band
- QC Symmetry: https://github.com/eybmits/qc_symmetry
- IQP Generative Modeling: https://github.com/eybmits/iqp_generative
- Parametrized Hamiltonians: https://github.com/eybmits/parameterized-hamiltonians-id
- Statistically Learnable QRC: https://github.com/eybmits/QRC-statistically

## Public Documentation and Tools

- VibeTracker / Vibe Shuffle: https://eybmits.github.io/vibe_shuffle_site/ and https://github.com/eybmits/vibe_shuffle
- Interactive QRC learning platform: https://eybmits.github.io/qrc-website/ and https://github.com/eybmits/qrc-website
- Personal website and research identity hub: https://eybmits.github.io and https://github.com/eybmits/personal-website
- Terminal-first longevity tracker: https://eybmits.github.io/posts/2026/longevity-logbook and https://github.com/eybmits/longevity-logbook
- Brainfog decision tree: https://eybmits.github.io/brainfog-decision-tree/ and https://github.com/eybmits/brainfog-decision-tree

## Contact

- GitHub: https://github.com/eybmits
- LMU profile: https://www.ifi.lmu.de/mvs/en/team/contact-page/contact-page_9536.html
- QAR-Lab: https://qarlab.de/en/
- Google Scholar: https://scholar.google.com/citations?hl=en&user=gjjgrw0AAAAJ
- Email: markus.baumann@campus.lmu.de

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
