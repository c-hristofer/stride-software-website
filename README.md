# Stride Software LLC

Marketing site for Stride Software LLC and its products, DayBound and StrengthPlan.

## Pages

- `/` — contact and support details
- `/daybound` — DayBound
- `/strengthplan` — StrengthPlan
- `/contact` — contact and support alias

## Local development

```bash
npm ci
npm run dev
```

## GitHub Pages

The `Deploy to GitHub Pages` workflow runs on every push to `main`. It builds a static export with Vinext and publishes `dist/client` using the official GitHub Pages Actions.

For local Pages-like output:

```bash
NEXT_PUBLIC_BASE_PATH=/stride-software-website \
NEXT_PUBLIC_SITE_URL=https://c-hristofer.github.io/stride-software-website \
npm run build
```
