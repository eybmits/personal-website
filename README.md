# Markus Baumann Personal Website (Astro)

Astro source for [eybmits.github.io](https://eybmits.github.io), the canonical public website for Markus Baumann (@eybmits), a researcher at LMU Munich / QAR-Lab working on Quantum Reservoir Computing, Quantum Machine Learning, time-series forecasting, and reproducible research software.

## Visibility goals

- Keep the same identity phrase on the website, GitHub profile, LMU profile, QAR-Lab context, and research repositories.
- Make GitHub, LMU, QAR-Lab, and arXiv links visible from the homepage and markdown fallbacks.
- Expose structured `Person` data for search engines with research topics, affiliation, and canonical profiles.
- Keep public pages readable without JavaScript through `.md` routes.

## Stack

- Astro 5
- MD/MDX content collections
- Search via Pagefind
- RSS + Sitemap
- Vercel deployment metadata
- GitHub Pages static deployment mirror

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

Deployment helper:

```bash
npm run deploy
```

## Main public files

- `src/consts.ts` - canonical site title, description, repository, and timezone.
- `src/pages/index.astro` - homepage hero and public identity links.
- `src/pages/about.mdx` - human-readable research bio.
- `src/components/StructuredData.astro` - search-engine structured data.
- `src/pages/index.md.ts` and `src/pages/about.md.ts` - markdown fallbacks for crawlers and text clients.

## License

- Content: CC BY 4.0
- Code: MIT
