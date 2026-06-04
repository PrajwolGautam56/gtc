# GTC Nepal Website

Production-ready marketing site for **GTC Nepal** (Geo Testing & Construction Lab, Butwal, Nepal) — built with React, Vite, Tailwind CSS, and React Router.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

```bash
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Updating images

All images live under `/public/images/` — **do not import images in JS/JSX**.

1. Drop photos into the correct folder (see structure below).
2. Add each filename to `/public/images/manifest.json` under the matching key.
3. Refresh the site — images appear automatically.

**Example** — add a gallery photo:

1. Save `site-visit.jpg` to `public/images/gallery/`
2. Edit `manifest.json`:

```json
{
  "gallery": ["site-visit.jpg", "lab-interior.jpg"]
}
```

**Service images** — first file in the array is used on cards and hero:

```json
{
  "services/lab": ["lab-main.jpg"]
}
```

If a folder is empty or a file is missing, a grey placeholder with a camera icon is shown.

### Folder structure

```
public/images/
  manifest.json
  gallery/
  about/
  hero/
  why-us/
  services/
    lab/
    soil/
    tmt/
    bitumen/
    concrete/
    lab-equipment/
    chemical/
    survey/
    ppe/
    design/
```

## Routes

| Path | Page |
|------|------|
| `/` | Home (full landing) |
| `/about` | About |
| `/gallery` | Gallery |
| `/contact` | Contact |
| `/services/:slug` | Service detail (10 services) |

## Tech stack

- React 18 + Vite 6
- React Router 6
- Tailwind CSS 3
- Google Fonts: Syne (headings), DM Sans (body)

## Brand

- Primary red: `#C8281E`
- Navy: `#0D1B2A`
- Gold: `#D4A024`

## Contact form

Front-end only: validates fields, logs payload to the console, and shows a success toast. Wire to your API or email service when ready.

## License

© 2026 GTC Nepal · Website by ECSE Group
