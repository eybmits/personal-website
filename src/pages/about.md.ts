import type { APIRoute } from "astro";
import { SITE } from "@/config";

export const GET: APIRoute = async () => {
  const markdownContent = `# About ${SITE.title}

I'm ${SITE.author}, a researcher at LMU Munich / QAR-Lab working on Quantum Reservoir Computing, Quantum Machine Learning, time-series forecasting, and reproducible research software.

## Focus Areas

- Quantum Reservoir Computing
- Quantum Machine Learning benchmarks and controls
- Time-series forecasting
- Reproducible research software
- Quantum generative modeling and optimization workflows

## Contact

- GitHub: https://github.com/eybmits
- LMU profile: https://www.ifi.lmu.de/mvs/en/team/contact-page/contact-page_9536.html
- QAR-Lab: https://qarlab.de/en/
- arXiv: https://arxiv.org/search/?query=Markus+Baumann&searchtype=author
- Email: hello@eybmits.dev

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
