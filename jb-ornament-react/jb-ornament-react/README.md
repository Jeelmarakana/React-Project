# Jay Bhavani Ornament — React + Vite

A simple, production-ready front-end with:
- Pages: Home, Products (with filters), Product Detail, About, Contact
- Components: Navbar, Footer, ProductCard
- Data file for Silver & Gold items
- All contact text is clickable (tel, WhatsApp, email, map)
- Ready for GitHub Pages deploy (`npm run deploy`) or Netlify/Vercel

## Quick Start

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages Deploy

1. In `vite.config.js`, uncomment and set `base` to `/<repo-name>/`.
2. Commit and push to GitHub.
3. `npm run deploy` (uses `gh-pages` to publish `dist/` branch).

## Netlify / Vercel

- **Netlify:** New site → Import from Git → Build command `npm run build`, Publish directory `dist`.
- **Vercel:** Import → Framework: Vite → Build `npm run build`, Output `dist`.

Enjoy!
