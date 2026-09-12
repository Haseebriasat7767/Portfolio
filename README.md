# Aether — 3D Website & WebGL Development Studio

A design-minded portfolio and lead-generation website for Aether Development. The site is positioned around 3D websites, WebGL experiences, Three.js development, and interactive digital systems for product brands, premium real estate, and digital teams.

## Stack

- React + TypeScript + Vite
- Three.js, loaded dynamically for the interactive WebGL hero
- Responsive CSS with reduced-motion and WebGL fallback support
- Static SEO service and case-study pages in `public/services` and `public/work`

## Development

```bash
npm install
npm run dev
```

## Build and lint

```bash
npm run lint
npm run build
```

## SEO routes

- `/services/3d-website-development/`
- `/services/webgl-development/`
- `/services/threejs-development/`
- `/services/usa-3d-website-development/`
- `/work/aurelia-ridge/`
- `/work/kinetic-commerce/`
- `/work/vertex-os/`

## Customize before launch

- Replace the placeholder/demo project copy with verified client work and outcomes.
- Add the CEO headshot as `public/ceo-photo.jpeg`; the CEO section falls back to the initials mark until the file is present.
- Update `hello@aether.dev`, the production canonical domain, and social profile links.
- Add real client testimonials, awards, and performance measurements only when they can be substantiated.
- Submit `public/sitemap.xml` in Google Search Console and Bing Webmaster Tools after the production domain is live.
