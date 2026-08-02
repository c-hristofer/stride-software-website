# Stride Software LLC

Marketing site for Stride Software LLC and its products, DayBound and StrengthPlan.

## Pages

The deployed site uses separate static pages with regular links:

- `/` — contact and support details
- `/daybound/` — DayBound
- `/strengthplan/` — StrengthPlan
- `/contact/` — contact and support alias

## Local development

```bash
npm ci
npm run dev
```

## GitHub Pages

The `Deploy to GitHub Pages` workflow runs on every push to `main`. It builds a static export with Vinext and publishes `dist/client` using the official GitHub Pages Actions. The custom domain is `https://stride-software.info`; assets are built root-relative for that domain and `public/CNAME` keeps the domain in the Pages artifact.

For local Pages-like output:

```bash
NEXT_PUBLIC_BASE_PATH= \
NEXT_PUBLIC_SITE_URL=https://stride-software.info \
npm run build
```
