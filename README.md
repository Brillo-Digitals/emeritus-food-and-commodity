# Emeritus Foods & Commodities Website

This is the website I built for Emeritus Foods & Commodities using React, TypeScript, and Tailwind CSS.
It is a simple marketing site for the brand, with pages for the home page, about page, farms, products,
markets, contact, and quote requests.

## What I used

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router

## Running it locally

```bash
npm install
npm run dev
```

After that, open the local URL shown in the terminal.

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

- `src/pages` - the main pages for each route
- `src/components` - reusable layout, UI, and section components
- `src/data` - content for the company, products, farms, markets, and categories
- `src/lib` - small shared helpers and hooks
- `src/assets` - logos and other local assets

## Notes

- The site uses real editable content from the data files instead of hard-coded demo text.
- Images and motion are handled in reusable components so the pages stay consistent.
- The WhatsApp and contact details are all wired from shared company data.

## Scripts

- `npm run dev` - start the development server
- `npm run build` - create a production build
- `npm run preview` - preview the production build
- `npm run lint` - run linting
