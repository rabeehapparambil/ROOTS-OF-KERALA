# ROOTS OF KERALA

A premium, editorial single-page homepage for a Kerala family homestay brand built with Next.js App Router, Tailwind CSS, GSAP, and one hero-only Three.js prism.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production checks

```bash
npm run lint
npm run build
```

## Project notes

- All copy, labels, links, and image references live in `content/site-content.ts`.
- Replace placeholder visuals by swapping files inside `public/images/` and updating the matching content objects.
- The current photo placeholders are local copies sourced from Pexels and Unsplash for a more realistic visual direction.
- The booking form is intentionally lightweight. It prepares a WhatsApp or email handoff, with Airbnb and Instagram kept as direct contact options rather than a backend booking engine.
- Motion is concentrated in the hero, reveal transitions, and the day narrative section to keep the page calm and performant.
