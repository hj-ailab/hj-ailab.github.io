# HJ AILAB

Astro static site for https://hj-ailab.github.io, with root base `/`.

## Local development

Use Node 22.12 or newer. Install dependencies with `npm install` to generate the initial lockfile, then use `npm ci` for reproducible installs. Keep `package-lock.json` in version control.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

## Content

- `content/copy.yaml` is owned by the writing lane. The loader uses `content/copy.example.yaml` only when the real file is absent. Do not edit the writing lane's file through this implementation workflow.
- `src/data/publications.yaml` contains the 22 converted publication records. Original metadata is preserved from `data/publications.json`. Themes follow only the specified tag mapping; unmapped papers remain visible in the full library.
- `src/data/people.yaml` contains member facts. Prose merges by member ID.
- `src/data/site.yaml` contains the lab identity and disabled optional business block.
- `src/lib/data.ts` validates YAML with Zod during every Astro build. Invalid IDs, unknown topics, missing venues, invalid URLs, and incomplete business details fail the build.
- Publication selections are controlled by `selected`; all pages use the same publication component. BibTeX is generated from supplied metadata, without external enrichment.

## Deployment

The workflow in `.github/workflows/deploy.yml` builds with `withastro/action` and publishes with `actions/deploy-pages` on pushes to `main` or manual dispatch. In the existing GitHub repository, select **Settings → Pages → Build and deployment → Source → GitHub Actions**. This local implementation does not change GitHub settings or push commits.

## Acceptance checks

```sh
node scripts/verify.mjs
```

The verifier runs the clean build, negative schema builds with restoration, rebuilds valid data, starts a temporary preview server, and uses the specified local Puppeteer installation and Chrome path resolver. It captures viewport screenshots at 1280×800 and 390×844, checks horizontal overflow (also at 360px), compares rendered publication links with the original JSON, and checks filtering, clipboard copying, theme persistence, and no-JavaScript rendering. It writes `docs/build_report.md`, saves screenshots in `docs/screens/`, and stops its browser and server before exiting. It requires installed dependencies and an environment that permits child processes and loopback networking.
