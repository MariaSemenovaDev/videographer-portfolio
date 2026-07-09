# Videographer Portfolio

Next.js portfolio site with static export for regular hosting and a separate Sanity Studio.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- GSAP
- Sanity CMS

## Main principle

The public site is built as a fully static export:

- `next build` generates `out/`
- the files from `out/` can be uploaded directly to REG.RU
- no Node.js runtime is required on hosting
- `next start` is not used in production

Sanity is used only as a build-time CMS source. If Sanity is not configured yet, the site still builds from local fallback data in `src/content/site.ts`.

## Scripts

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run build:reg`
- `npm run lint`
- `npm run typecheck`
- `npm run check`
- `npm run preview:static`
- `npm run studio:dev`
- `npm run studio:build`
- `npm run studio:deploy`

## Environment variables

Create `.env.local` from the example:

```bash
cp .env.example .env.local
```

`.env.example`:

```env
NEXT_PUBLIC_SITE_URL=https://verteletskiy-video.ru
NEXT_PUBLIC_SANITY_PROJECT_ID=replace_with_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-07-09
SANITY_API_READ_TOKEN=
```

Notes:

- `SANITY_API_READ_TOKEN` is only needed for a private dataset.
- Never expose a private token through `NEXT_PUBLIC_*`.
- If Sanity env vars are missing, the build falls back to local data.

## Sanity Studio

Studio is a separate app in `studio/`. It is not embedded into the Next app and there is no `/studio` route in `src/app`.

### Studio env

```bash
cp studio/.env.example studio/.env.local
```

```env
SANITY_STUDIO_PROJECT_ID=replace_with_project_id
SANITY_STUDIO_DATASET=production
```

### Run Studio locally

```bash
npm run studio:dev
```

### Build Studio

```bash
npm run studio:build
```

### Deploy Studio

```bash
npm run studio:deploy
```

Typical deployed domain:

```txt
verteletskiy-video.sanity.studio
```

## Deploy to REG.RU

REG.RU is the default deployment mode.

### Build

```bash
npm install
cp .env.example .env.local
# fill in Sanity envs if available
npm run check
npm run build:reg
```

After the build completes, Next.js creates:

```txt
out/
```

### What to upload

Upload the contents of `out/`, not the `out` folder itself.

Typical destination on REG.RU:

```txt
public_html/
```

Important:

- do not run `next start`
- Node.js is not required on REG.RU
- do not upload `.next/`
- do not upload source files
- upload only the ready static files from `out/`
- after editing content in Sanity, rebuild the site and upload the new `out/`

## GitHub Pages

GitHub Pages remains an optional mode only.

It uses:

```txt
GITHUB_PAGES=true
```

Only in that mode `next.config.mjs` adds:

- `basePath: "/videographer-portfolio"`
- `assetPrefix: "/videographer-portfolio/"`

Default local and REG.RU builds do not use them.
