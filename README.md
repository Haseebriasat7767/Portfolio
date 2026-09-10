# NOVA3D — 3D Web Design Agency Portfolio

A portfolio/agency website built to attract clients looking for immersive 3D websites. Features a real-time WebGL hero scene (React Three Fiber / Three.js), services, selected work, process, testimonials, and a contact section.

## Stack

- React + TypeScript + Vite
- Three.js via `@react-three/fiber` and `@react-three/drei`

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Customize

- Agency name/branding: `src/components/Nav.tsx`, `Footer.tsx`
- Hero copy & stats: `src/components/Hero.tsx`
- 3D scene: `src/components/HeroScene.tsx`
- Services, work samples, process steps, testimonials: `src/components/*.tsx`
- Contact details: `src/components/Contact.tsx`
