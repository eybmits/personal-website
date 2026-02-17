# Agent Runbook: `personal-website`

Last updated: **February 17, 2026**

This file is the single operational handover for agents working on this project.
If you are new to this repo, read this file top-to-bottom before editing anything.

## 1. Mission

Build and maintain a personal website with the same functional pattern as the original reference:

- Astro site
- Post collection in Markdown/MDX
- Search with Pagefind
- RSS + Sitemap
- PWA support
- Markdown endpoint support via `vercel.json` rewrites

Current owner profile in repo defaults:

- Name: `Markus Baumann`
- Primary repo: `https://github.com/eybmits/personal-website`
- Live URL: `https://eybmits.github.io/`

## 2. Repo Topology

There are **two repositories** involved:

1. Source repo (code):
- `https://github.com/eybmits/personal-website`

2. Live static host repo (GitHub Pages artifact):
- `https://github.com/eybmits/eybmits.github.io`

How deployment works right now:

- Build output (`dist/`) from source repo is synced into `eybmits.github.io` root.
- GitHub Pages serves that second repo at `https://eybmits.github.io/`.

## 3. Current Architecture

### 3.1 Important paths

- Site config: `src/consts.ts`
- Social links: `src/constants.ts`
- Astro config: `astro.config.mjs`
- Vercel routing/headers: `vercel.json`
- Home page: `src/pages/index.astro`
- About page: `src/pages/about.mdx`
- Posts listing: `src/pages/posts/index.astro`
- Post detail route: `src/pages/posts/[...slug]/index.astro`
- RSS: `src/pages/rss.xml.ts`
- Markdown endpoints: `src/pages/*.md.ts`, `src/pages/posts/[...slug].md.ts`
- Blog content: `src/content/blog/`
- Content intake template: `content/intake.md`

### 3.2 Content model

Defined in `src/content.config.ts` collection `blog`.
Required frontmatter keys (practically required for stable rendering):

- `title`
- `description`
- `pubDatetime`
- `tags`

Optional but commonly used:

- `featured`
- `draft`
- `heroImage`
- `modDatetime`

## 4. Commands (Source Repo)

From repo root:

- Install deps: `npm install`
- Dev server: `npm run dev`
- Build (Astro + Pagefind): `npm run build`
- Preview build: `npm run preview`
- Lint/check: `npm run check`

## 5. Deploy Procedure

### 5.1 Standard deploy (GitHub Pages)

1. Build:
- `npm run build`

2. Deploy:
- `npm run deploy`

`npm run deploy` calls:
- `scripts/deploy-gh-pages.sh`

The deploy script will:

- clone `eybmits/eybmits.github.io`
- sync `dist/` into it
- create `.nojekyll`
- commit and push only if files changed

### 5.2 Override deploy target (optional)

Use env vars:

- `GH_PAGES_REPO` (default: `eybmits/eybmits.github.io`)
- `GH_PAGES_BRANCH` (default: `main`)

Example:

```bash
GH_PAGES_REPO=myuser/myuser.github.io GH_PAGES_BRANCH=main npm run deploy
```

## 6. Personalization Checklist

When adapting for a new owner, update in this order:

1. `src/consts.ts`
- `website`, `author`, `profile`, `title`, `shortName`, `repository`, `timezone`

2. `src/constants.ts`
- active socials and URLs

3. `src/pages/about.mdx`
- bio, contact links

4. `src/pages/index.md.ts` + `src/pages/about.md.ts`
- markdown mirror content

5. `public/avatar.svg` and optional visuals

6. `content/intake.md`
- fill real content payload for posts/profile

## 7. Quality Gate Before Push

Always run:

1. `npm run build`
2. check `git status`
3. ensure no old owner/domain strings remain:

```bash
rg -n "steipete|peter@|steipete.me|personal-website.vercel.app" src public README.md content
```

Expected: no matches (unless intentionally retained in historical docs).

## 8. Known Operational Notes

- Vercel CLI login token was invalid in this environment during initial live setup.
- Live serving currently uses GitHub Pages and is fully operational.
- If Vercel is desired later, connect `personal-website` repo in Vercel and set production domain explicitly.

## 9. Definition of Clean Repo (for this project)

A "clean" state means:

- no stale template content/posts left
- no unused large legacy assets from old owner
- reproducible build passes locally
- deploy path is scripted and documented
- handover docs are explicit enough for a new agent to continue without chat history

## 10. Fast Start for Next Agent

```bash
git pull
npm install
npm run build
npm run deploy
```

Then verify:

- `https://eybmits.github.io/`
- `https://eybmits.github.io/rss.xml`
- `https://eybmits.github.io/search/`
