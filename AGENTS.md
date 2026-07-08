# Project Goal

This project is a production-ready portfolio website for a videographer.

The goal is to create an editorial, film-led portfolio that presents the videographer as an author with a strong visual eye, not just as a service provider. The website should feel like a cinematic art-book spread: spacious, minimal, image-led, and emotionally precise.

Code quality, visual consistency, accessibility, responsive behavior, performance, and maintainability matter.


## Product Direction

The website should help a potential client quickly understand:

* what kind of films the videographer creates;
* what mood and visual language the work has;
* which projects are selected as portfolio cases;
* what services are available;
* how to contact or book the videographer.

The site should feel premium, calm, cinematic, and editorial.

Avoid generic wedding/service landing-page clichés. The tone should be closer to an independent film director’s portfolio than to a template marketplace landing page.

## Core Pages / Sections

The initial version should include:

* Homepage

    * Header
    * Hero poster headline
    * Full-bleed video or image band
    * Selected films grid
    * Featured film section
    * Services / “What I Film”
    * About / author statement
    * Process
    * Contact CTA
    * Footer

Optional future pages:

* `/films` — all portfolio films
* `/films/:slug` — individual film page
* `/about` — extended biography and approach
* `/contact` — separate contact page

## Commands

* `npm install` — install project dependencies
* `npm run dev` — start the development server
* `npm run build` — build the production bundle
* `npm run lint` — run lint checks
* `npm run preview` — preview the production build locally

If tests are added later:

* `npm run test` — run unit/component tests
* `npm run e2e` — run Playwright end-to-end tests

## Tech Stack

Use:

* React
* TypeScript
* Vite
* Tailwind CSS v4

Do not add external UI libraries unless there is a clear reason. Prefer custom reusable components.

Do not introduce heavy animation libraries in the first version. Motion can be added later only if it supports the cinematic/editorial feeling and does not harm performance.

## Visual Identity

Use the attached style reference as the visual foundation.

Core visual principles:

* Warm paper-like canvas, not pure white.
* Oversized editorial typography.
* Light-weight headings.
* Full-bleed photography and video.
* Sharp image and card corners.
* Minimal navigation chrome.
* Sparse chromatic accents.
* Large negative space.
* Left-aligned layouts.
* No decorative clutter.

### Colors

Use these base tokens:

```css
--color-bone-white: #fffef7;
--color-ink-black: #000000;
--color-graphite: #666666;
--color-ash: #aaaaaa;
--color-magenta-bloom: #8a0467;
--color-forest-teal: #03624c;
--color-powder-blue: #a5c8eb;
--color-candy-pink: #ffacea;
--color-mint-wash: #a5ebd6;
--color-navy-ink: #101731;
--color-signal-yellow: #ffd001;
```

Rules:

* Use `#fffef7` as the main page background.
* Do not use pure `#ffffff` as the page canvas.
* Use black for main text and primary pill buttons.
* Use graphite for secondary text, captions, metadata, and descriptions.
* Use accent colors only in small amounts: tags, borders, rare accent cards, or small visual details.
* Do not use colorful CTA buttons as the primary action style.

### Typography

Use one sans-serif family with a true light weight.

Preferred:

* Switzer, if available.
* Fallback: Inter, Söhne, or system sans-serif.

Rules:

* Display and heading text should use weight `300`.
* Body, metadata, and UI controls should use weight `400`.
* Do not bold headings.
* Large headings should use tight letter spacing.
* Headings should feel like editorial poster type, not SaaS dashboard titles.

Recommended scale:

```css
--text-caption: 12px;
--text-body-sm: 14px;
--text-body: 16px;
--text-subheading: 20px;
--text-heading-sm: 34px;
--text-heading: 54px;
--text-display: 84px;
```

Use `clamp()` for responsive display typography.

## Layout Rules

* Use full-bleed layout.
* Avoid narrow centered website containers as the default structure.
* Use consistent side padding:

    * mobile: 16px;
    * tablet: 24px;
    * desktop: 32px or more.
* Keep sections spacious.
* Prefer 48–64px section gaps.
* Let images and videos carry the visual weight.
* Use whitespace as the main layout tool.
* Keep content left-aligned.
* Avoid centered marketing stacks unless there is a strong visual reason.

## Component Rules

Create reusable semantic components:

* `Header`
* `HeroPoster`
* `FullBleedMedia`
* `SectionTitle`
* `FilmCard`
* `FilmGrid`
* `FeaturedFilm`
* `ServiceCard`
* `ProcessList`
* `ContactSection`
* `Footer`

Components should be simple, typed, and
