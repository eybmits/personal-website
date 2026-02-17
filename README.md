# Personal Website (Astro)

Personal site and blog based on a proven Astro architecture, adapted for your own profile and content.

## Stack

- Astro 5
- MD/MDX content collections
- Search via Pagefind
- RSS + Sitemap
- PWA via `@vite-pwa/astro`
- Vercel deployment (`vercel.json` includes redirects/rewrites/headers)

## Project Structure

```text
├── content/
│   └── intake.md          # structured template for your real profile/posts
├── public/
│   ├── avatar.svg
│   ├── about-photo.svg
│   └── images/posts/
├── src/
│   ├── components/
│   ├── content/
│   │   └── blog/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── astro.config.mjs
├── vercel.json
└── package.json
```

## Commands

- `npm install` - install dependencies
- `npm run dev` - start local dev server
- `npm run build` - production build + Pagefind index
- `npm run preview` - preview production build

## Personalization Checklist

1. Update `src/consts.ts` with your real name, domain, repo, social links.
2. Fill `content/intake.md` with your real bio + posts.
3. Replace placeholder assets in `public/` if desired.
4. Set optional newsletter/env values in `.env` (see `.env.example`).

## Deployment

1. Create repo `personal-website` on GitHub.
2. Push `main`.
3. Import repo into Vercel.
4. Keep Vercel subdomain first, add custom domain later.

## Agent Handover

Operational handover for any new agent is documented in:

- `docs/AGENT_RUNBOOK.md`

## License

- Content: CC BY 4.0
- Code: MIT
