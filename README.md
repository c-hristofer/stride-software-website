# Stride Software LLC

Marketing site for Stride Software LLC and its products, DayBound and StrengthPlan.

## Pages

The deployed site is technically one document. The header and product cards use hash routes so the experience still feels multi-page without asking GitHub Pages to resolve client-side paths:

- `/` — contact and support details
- `/#daybound` — DayBound
- `/#strengthplan` — StrengthPlan

Static `/daybound`, `/strengthplan`, and `/contact` entry points remain as direct-link aliases.

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
