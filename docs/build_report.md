# Build report

Generated: 2026-11-20T03:12:50.011Z

Pages deployment is configured for `https://hj-ailab.github.io/`, base `/`. Set repository Settings → Pages → Source to **GitHub Actions** before deployment. No remote settings, repositories, commits, or pushes are changed by this check.

Implementation follows [Astro’s GitHub Pages deployment guide](https://docs.astro.build/en/guides/deploy/github/).

The four publications without a mapped theme remain in the full library with their original tags. No additional themes, abstracts, collaborators, or paper illustrations are inferred. BibTeX uses the supplied venue: arXiv venue entries become articles; accepted venue entries become proceedings even when their paper URL points to arXiv.

## Clean install and build

```text
$ npm ci && npm run build

added 292 packages, and audited 293 packages in 17s

153 packages are looking for funding
  run `npm fund` for details

5 vulnerabilities (1 moderate, 3 high, 1 critical)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

> hj-ailab-site@1.0.0 build
> ASTRO_TELEMETRY_DISABLED=1 astro build

12:13:08 [content] Syncing content
12:13:08 [content] Synced content
12:13:08 [types] Generated 109ms
12:13:08 [build] output: "static"
12:13:08 [build] mode: "static"
12:13:08 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
12:13:08 [build] Collecting build info...
12:13:08 [build] ✓ Completed in 125ms.
12:13:08 [build] Building static entrypoints...
12:13:09 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
12:13:09 [vite] ✓ built in 731ms
12:13:09 [build] ✓ Completed in 767ms.

 building client (vite) 
12:13:09 [vite] transforming...
12:13:09 [vite] ✓ 4 modules transformed.
12:13:09 [vite] rendering chunks...
12:13:09 [vite] ✓ built in 19ms

 generating static routes 
12:13:09 ▶ src/pages/404.astro
12:13:09   └─ /404.html (+10ms) 
12:13:09 ▶ src/pages/contact.astro
12:13:09   └─ /contact/index.html (+2ms) 
12:13:09 ▶ src/pages/index.astro
12:13:09   └─ /index.html (+8ms) 
12:13:09 ▶ src/pages/news/index.astro
12:13:09   └─ /news/index.html (+2ms) 
12:13:09 λ src/pages/news/rss.xml.ts
12:13:09   └─ /news/rss.xml (+1ms) 
12:13:09 ▶ src/pages/people.astro
12:13:09   └─ /people/index.html (+1ms) 
12:13:09 ▶ src/pages/publications.astro
12:13:09   └─ /publications/index.html (+10ms) 
12:13:09 ▶ src/pages/research.astro
12:13:09   └─ /research/index.html (+3ms) 
12:13:09 ✓ Completed in 106ms.

12:13:09 [build] 7 page(s) built in 1.03s
12:13:09 [build] Complete!
npm warn deprecated tsconfck@3.1.6: unmaintained

exit code: 0
```

## Generated HTML

```text
$ find dist -name '*.html'
dist/404.html
dist/contact/index.html
dist/index.html
dist/news/index.html
dist/people/index.html
dist/publications/index.html
dist/research/index.html
```

## Negative build: Unknown topic

```text
$ npm run build

> hj-ailab-site@1.0.0 build
> ASTRO_TELEMETRY_DISABLED=1 astro build

12:13:10 [content] Syncing content
12:13:10 [content] Synced content
12:13:10 [types] Generated 38ms
12:13:10 [build] output: "static"
12:13:10 [build] mode: "static"
12:13:10 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
12:13:10 [build] Collecting build info...
12:13:10 [build] ✓ Completed in 54ms.
12:13:10 [build] Building static entrypoints...
12:13:11 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
12:13:11 [vite] ✓ built in 665ms
12:13:11 [build] ✓ Completed in 699ms.

 building client (vite) 
12:13:11 [vite] transforming...
12:13:11 [vite] ✓ 4 modules transformed.
12:13:11 [vite] rendering chunks...
12:13:11 [vite] ✓ built in 19ms

 generating static routes 
src/data/publications.yaml
0.topics.0: Invalid enum value. Expected 'evaluation' | 'efficiency' | 'understanding', received 'unknown-topic'
  Stack trace:
    at validate (file:///home2/r7play/hj-ailab.github.io/dist/chunks/data_DM7tbUPW.mjs:14:11)
    at ModuleJob.run (node:internal/modules/esm/module_job:430:25)
    at async BuildPipeline.retrieveSsrEntry (file:///home2/r7play/hj-ailab.github.io/node_modules/astro/dist/core/build/pipeline.js:221:15)
    at async staticBuild (file:///home2/r7play/hj-ailab.github.io/node_modules/astro/dist/core/build/static-build.js:87:5)
    at async AstroBuilder.run (file:///home2/r7play/hj-ailab.github.io/node_modules/astro/dist/core/build/index.js:188:7)

exit code: 1
```

## Negative build: Missing venue

```text
$ npm run build

> hj-ailab-site@1.0.0 build
> ASTRO_TELEMETRY_DISABLED=1 astro build

12:13:12 [content] Syncing content
12:13:12 [content] Synced content
12:13:12 [types] Generated 45ms
12:13:12 [build] output: "static"
12:13:12 [build] mode: "static"
12:13:12 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
12:13:12 [build] Collecting build info...
12:13:12 [build] ✓ Completed in 62ms.
12:13:12 [build] Building static entrypoints...
12:13:12 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
12:13:13 [vite] ✓ built in 661ms
12:13:13 [build] ✓ Completed in 695ms.

 building client (vite) 
12:13:13 [vite] transforming...
12:13:13 [vite] ✓ 4 modules transformed.
12:13:13 [vite] rendering chunks...
12:13:13 [vite] ✓ built in 21ms

 generating static routes 
src/data/publications.yaml
0.venue: Required
  Stack trace:
    at validate (file:///home2/r7play/hj-ailab.github.io/dist/chunks/data_DM7tbUPW.mjs:14:11)
    at ModuleJob.run (node:internal/modules/esm/module_job:430:25)
    at async BuildPipeline.retrieveSsrEntry (file:///home2/r7play/hj-ailab.github.io/node_modules/astro/dist/core/build/pipeline.js:221:15)
    at async staticBuild (file:///home2/r7play/hj-ailab.github.io/node_modules/astro/dist/core/build/static-build.js:87:5)
    at async AstroBuilder.run (file:///home2/r7play/hj-ailab.github.io/node_modules/astro/dist/core/build/index.js:188:7)

exit code: 1
```

## Restored data build

```text
$ npm run build

> hj-ailab-site@1.0.0 build
> ASTRO_TELEMETRY_DISABLED=1 astro build

12:13:14 [content] Syncing content
12:13:14 [content] Synced content
12:13:14 [types] Generated 39ms
12:13:14 [build] output: "static"
12:13:14 [build] mode: "static"
12:13:14 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
12:13:14 [build] Collecting build info...
12:13:14 [build] ✓ Completed in 55ms.
12:13:14 [build] Building static entrypoints...
12:13:14 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
12:13:15 [vite] ✓ built in 722ms
12:13:15 [build] ✓ Completed in 756ms.

 building client (vite) 
12:13:15 [vite] transforming...
12:13:15 [vite] ✓ 4 modules transformed.
12:13:15 [vite] rendering chunks...
12:13:15 [vite] ✓ built in 20ms

 generating static routes 
12:13:15 ▶ src/pages/404.astro
12:13:15   └─ /404.html (+11ms) 
12:13:15 ▶ src/pages/contact.astro
12:13:15   └─ /contact/index.html (+1ms) 
12:13:15 ▶ src/pages/index.astro
12:13:15   └─ /index.html (+7ms) 
12:13:15 ▶ src/pages/news/index.astro
12:13:15   └─ /news/index.html (+1ms) 
12:13:15 λ src/pages/news/rss.xml.ts
12:13:15   └─ /news/rss.xml (+1ms) 
12:13:15 ▶ src/pages/people.astro
12:13:15   └─ /people/index.html (+5ms) 
12:13:15 ▶ src/pages/publications.astro
12:13:15   └─ /publications/index.html (+3ms) 
12:13:15 ▶ src/pages/research.astro
12:13:15   └─ /research/index.html (+4ms) 
12:13:15 ✓ Completed in 102ms.

12:13:15 [build] 7 page(s) built in 946ms
12:13:15 [build] Complete!

exit code: 0
```

## Screenshots and horizontal overflow

```text
$ node scripts/verify.mjs (Puppeteer browser checks)
/ 1280x800 light: overflow=false; docs/screens/home-1280-light.png
/research/ 1280x800 light: overflow=false; docs/screens/research-1280-light.png
/publications/ 1280x800 light: overflow=false; docs/screens/publications-1280-light.png
/people/ 1280x800 light: overflow=false; docs/screens/people-1280-light.png
/news/ 1280x800 light: overflow=false; docs/screens/news-1280-light.png
/contact/ 1280x800 light: overflow=false; docs/screens/contact-1280-light.png
/404.html 1280x800 light: overflow=false; docs/screens/404-1280-light.png
/ 390x844 light: overflow=false; docs/screens/home-390-light.png
/research/ 390x844 light: overflow=false; docs/screens/research-390-light.png
/publications/ 390x844 light: overflow=false; docs/screens/publications-390-light.png
/people/ 390x844 light: overflow=false; docs/screens/people-390-light.png
/news/ 390x844 light: overflow=false; docs/screens/news-390-light.png
/contact/ 390x844 light: overflow=false; docs/screens/contact-390-light.png
/404.html 390x844 light: overflow=false; docs/screens/404-390-light.png
/ 1280x800 dark: overflow=false; docs/screens/home-1280-dark.png
/publications/ 1280x800 dark: overflow=false; docs/screens/publications-1280-dark.png
/ 390x844 dark: overflow=false; docs/screens/home-390-dark.png
/publications/ 390x844 dark: overflow=false; docs/screens/publications-390-dark.png
/ 360x800: overflow=false
/research/ 360x800: overflow=false
/publications/ 360x800: overflow=false
/people/ 360x800: overflow=false
/news/ 360x800: overflow=false
/contact/ 360x800: overflow=false
/404.html 360x800: overflow=false
```

## Publication link parity and prose

```text
44 rendered publication entries checked against data/publications.json across all pages.
All 22 publications present in the library.
copy.yaml exists: true; rendered TODO check: passed.
```

## Interaction checks

```text
PASS: theme/year/type/member filters and combined query; title search; URL sync; clear/empty state; BibTeX clipboard; theme override persistence; all 22 papers readable without JavaScript; no browser runtime errors.
```

BUILD: PASS
