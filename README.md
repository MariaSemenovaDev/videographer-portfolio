# Videographer Portfolio

Next.js portfolio site prepared for static export and deployment to GitHub Pages.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- GSAP

## Scripts

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run typecheck`

## GitHub Pages

Static export is enabled in `next.config.mjs` with:

- `output: "export"`
- `trailingSlash: true`
- `images.unoptimized: true`
- dynamic `basePath` and `assetPrefix` for project pages repositories

The workflow in `.github/workflows/deploy.yml` uploads the generated `out` directory.
