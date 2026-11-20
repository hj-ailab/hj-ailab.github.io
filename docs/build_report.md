# Build report

Generated: 2026-11-20T03:45:46.650Z

## Static build

```text
$ npm run build

> hj-ailab-site@1.0.0 build
> ASTRO_TELEMETRY_DISABLED=1 astro build

12:45:47 [content] Syncing content
12:45:47 [content] Synced content
12:45:47 [types] Generated 39ms
12:45:47 [build] output: "static"
12:45:47 [build] mode: "static"
12:45:47 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
12:45:47 [build] Collecting build info...
12:45:47 [build] ✓ Completed in 54ms.
12:45:47 [build] Building static entrypoints...
12:45:48 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
12:45:50 [vite] ✓ built in 2.50s
12:45:50 [build] ✓ Completed in 2.53s.

 building client (vite) 
12:45:50 [vite] transforming...
12:45:50 [vite] ✓ 4 modules transformed.
12:45:50 [vite] rendering chunks...
12:45:50 [vite] ✓ built in 20ms

 generating static routes 
12:45:50 ▶ src/pages/404.astro
12:45:50   └─ /404.html (+10ms) 
12:45:50 ▶ src/pages/contact.astro
12:45:50   └─ /contact/index.html (+1ms) 
12:45:50 ▶ src/pages/index.astro
12:45:50   └─ /index.html (+11ms) 
12:45:50 ▶ src/pages/news/index.astro
12:45:50   └─ /news/index.html (+1ms) 
12:45:50 λ src/pages/news/rss.xml.ts
12:45:50   └─ /news/rss.xml (+2ms) 
12:45:50 ▶ src/pages/people.astro
12:45:50   └─ /people/index.html (+2ms) 
12:45:50 ▶ src/pages/publications.astro
12:45:50   └─ /publications/index.html (+3ms) 
12:45:50 ▶ src/pages/research.astro
12:45:50   └─ /research/index.html (+2ms) 
12:45:50 ✓ Completed in 104ms.

12:45:50 [build] 7 page(s) built in 2.72s
12:45:50 [build] Complete!

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

## Verification command

```text
$ node scripts/verify.mjs
```

## Member photo

```text
PASS: /images/hyunjong.webp loaded (naturalWidth=480).
```

## Member photo

```text
PASS: /images/suho.webp loaded (naturalWidth=480).
```

## Highlights and top-tier badges

```text
PASS: rendered highlights match data/publications.json (22 total, 13 conference, 9 top-tier).
PASS: all 13 top-tier badges match papers at the top-tier venues. All 2 ACL Findings entries are counted.
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
/ 360x800 light: overflow=false
/research/ 360x800 light: overflow=false
/publications/ 360x800 light: overflow=false
/people/ 360x800 light: overflow=false
/news/ 360x800 light: overflow=false
/contact/ 360x800 light: overflow=false
/404.html 360x800 light: overflow=false
/ 1280x800 dark: overflow=false; docs/screens/home-1280-dark.png
/research/ 1280x800 dark: overflow=false
/publications/ 1280x800 dark: overflow=false; docs/screens/publications-1280-dark.png
/people/ 1280x800 dark: overflow=false
/news/ 1280x800 dark: overflow=false
/contact/ 1280x800 dark: overflow=false
/404.html 1280x800 dark: overflow=false
/ 390x844 dark: overflow=false; docs/screens/home-390-dark.png
/research/ 390x844 dark: overflow=false
/publications/ 390x844 dark: overflow=false; docs/screens/publications-390-dark.png
/people/ 390x844 dark: overflow=false
/news/ 390x844 dark: overflow=false
/contact/ 390x844 dark: overflow=false
/404.html 390x844 dark: overflow=false
/ 360x800 dark: overflow=false
/research/ 360x800 dark: overflow=false
/publications/ 360x800 dark: overflow=false
/people/ 360x800 dark: overflow=false
/news/ 360x800 dark: overflow=false
/contact/ 360x800 dark: overflow=false
/404.html 360x800 dark: overflow=false
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

## Negative build: Unknown topic

```text
$ npm run build

> hj-ailab-site@1.0.0 build
> ASTRO_TELEMETRY_DISABLED=1 astro build

12:45:56 [content] Syncing content
12:45:56 [content] Synced content
12:45:57 [types] Generated 1.07s
12:45:57 [build] output: "static"
12:45:57 [build] mode: "static"
12:45:57 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
12:45:57 [build] Collecting build info...
12:45:57 [build] ✓ Completed in 1.08s.
12:45:57 [build] Building static entrypoints...
12:45:58 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
12:45:58 [vite] ✓ built in 728ms
12:45:58 [build] ✓ Completed in 766ms.

 building client (vite) 
12:45:58 [vite] transforming...
12:45:58 [vite] ✓ 4 modules transformed.
12:45:58 [vite] rendering chunks...
12:45:58 [vite] ✓ built in 24ms

 generating static routes 
src/data/publications.yaml
0.topics.0: Invalid enum value. Expected 'evaluation' | 'efficiency' | 'understanding', received 'unknown-topic'
  Stack trace:
    at validate (file:///home2/r7play/hj-ailab.github.io/dist/chunks/data_B7sI23_y.mjs:14:11)
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

12:45:59 [content] Syncing content
12:45:59 [content] Synced content
12:45:59 [types] Generated 39ms
12:45:59 [build] output: "static"
12:45:59 [build] mode: "static"
12:45:59 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
12:45:59 [build] Collecting build info...
12:45:59 [build] ✓ Completed in 54ms.
12:45:59 [build] Building static entrypoints...
12:46:00 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
12:46:00 [vite] ✓ built in 728ms
12:46:00 [build] ✓ Completed in 762ms.

 building client (vite) 
12:46:00 [vite] transforming...
12:46:00 [vite] ✓ 4 modules transformed.
12:46:00 [vite] rendering chunks...
12:46:00 [vite] ✓ built in 21ms

 generating static routes 
src/data/publications.yaml
0.venue: Required
  Stack trace:
    at validate (file:///home2/r7play/hj-ailab.github.io/dist/chunks/data_B7sI23_y.mjs:14:11)
    at ModuleJob.run (node:internal/modules/esm/module_job:430:25)
    at async BuildPipeline.retrieveSsrEntry (file:///home2/r7play/hj-ailab.github.io/node_modules/astro/dist/core/build/pipeline.js:221:15)
    at async staticBuild (file:///home2/r7play/hj-ailab.github.io/node_modules/astro/dist/core/build/static-build.js:87:5)
    at async AstroBuilder.run (file:///home2/r7play/hj-ailab.github.io/node_modules/astro/dist/core/build/index.js:188:7)

exit code: 1
```

## Negative build: Unknown honor member

```text
$ npm run build

> hj-ailab-site@1.0.0 build
> ASTRO_TELEMETRY_DISABLED=1 astro build

12:46:01 [content] Syncing content
12:46:01 [content] Synced content
12:46:01 [types] Generated 39ms
12:46:01 [build] output: "static"
12:46:01 [build] mode: "static"
12:46:01 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
12:46:01 [build] Collecting build info...
12:46:01 [build] ✓ Completed in 54ms.
12:46:01 [build] Building static entrypoints...
12:46:02 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
12:46:02 [vite] ✓ built in 745ms
12:46:02 [build] ✓ Completed in 780ms.

 building client (vite) 
12:46:02 [vite] transforming...
12:46:02 [vite] ✓ 4 modules transformed.
12:46:02 [vite] rendering chunks...
12:46:02 [vite] ✓ built in 22ms

 generating static routes 
src/data/honors.yaml
0.member: Invalid enum value. Expected 'hyunjong' | 'suho', received 'unknown-member'
  Stack trace:
    at validate (file:///home2/r7play/hj-ailab.github.io/dist/chunks/data_B7sI23_y.mjs:14:11)
    at ModuleJob.run (node:internal/modules/esm/module_job:430:25)
    at async BuildPipeline.retrieveSsrEntry (file:///home2/r7play/hj-ailab.github.io/node_modules/astro/dist/core/build/pipeline.js:221:15)
    at async staticBuild (file:///home2/r7play/hj-ailab.github.io/node_modules/astro/dist/core/build/static-build.js:87:5)
    at async AstroBuilder.run (file:///home2/r7play/hj-ailab.github.io/node_modules/astro/dist/core/build/index.js:188:7)

exit code: 1
```

## Negative build: Unknown honor kind

```text
$ npm run build

> hj-ailab-site@1.0.0 build
> ASTRO_TELEMETRY_DISABLED=1 astro build

12:46:03 [content] Syncing content
12:46:03 [content] Synced content
12:46:03 [types] Generated 39ms
12:46:03 [build] output: "static"
12:46:03 [build] mode: "static"
12:46:03 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
12:46:03 [build] Collecting build info...
12:46:03 [build] ✓ Completed in 55ms.
12:46:03 [build] Building static entrypoints...
12:46:04 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
12:46:04 [vite] ✓ built in 816ms
12:46:04 [build] ✓ Completed in 850ms.

 building client (vite) 
12:46:04 [vite] transforming...
12:46:04 [vite] ✓ 4 modules transformed.
12:46:04 [vite] rendering chunks...
12:46:04 [vite] ✓ built in 20ms

 generating static routes 
src/data/honors.yaml
0.kind: Invalid enum value. Expected 'fellowship' | 'scholarship' | 'award' | 'competition', received 'unknown-kind'
  Stack trace:
    at validate (file:///home2/r7play/hj-ailab.github.io/dist/chunks/data_B7sI23_y.mjs:14:11)
    at ModuleJob.run (node:internal/modules/esm/module_job:430:25)
    at async BuildPipeline.retrieveSsrEntry (file:///home2/r7play/hj-ailab.github.io/node_modules/astro/dist/core/build/pipeline.js:221:15)
    at async staticBuild (file:///home2/r7play/hj-ailab.github.io/node_modules/astro/dist/core/build/static-build.js:87:5)
    at async AstroBuilder.run (file:///home2/r7play/hj-ailab.github.io/node_modules/astro/dist/core/build/index.js:188:7)

exit code: 1
```

## Negative build: Unknown service member

```text
$ npm run build

> hj-ailab-site@1.0.0 build
> ASTRO_TELEMETRY_DISABLED=1 astro build

12:46:05 [content] Syncing content
12:46:05 [content] Synced content
12:46:05 [types] Generated 39ms
12:46:05 [build] output: "static"
12:46:05 [build] mode: "static"
12:46:05 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
12:46:05 [build] Collecting build info...
12:46:05 [build] ✓ Completed in 55ms.
12:46:05 [build] Building static entrypoints...
12:46:06 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
12:46:06 [vite] ✓ built in 738ms
12:46:06 [build] ✓ Completed in 772ms.

 building client (vite) 
12:46:06 [vite] transforming...
12:46:06 [vite] ✓ 4 modules transformed.
12:46:06 [vite] rendering chunks...
12:46:06 [vite] ✓ built in 21ms

 generating static routes 
src/data/service.yaml
0.member: Invalid enum value. Expected 'hyunjong' | 'suho', received 'unknown-member'
  Stack trace:
    at validate (file:///home2/r7play/hj-ailab.github.io/dist/chunks/data_B7sI23_y.mjs:14:11)
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

12:46:07 [content] Syncing content
12:46:07 [content] Synced content
12:46:07 [types] Generated 40ms
12:46:07 [build] output: "static"
12:46:07 [build] mode: "static"
12:46:07 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
12:46:07 [build] Collecting build info...
12:46:07 [build] ✓ Completed in 56ms.
12:46:07 [build] Building static entrypoints...
12:46:08 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
12:46:08 [vite] ✓ built in 716ms
12:46:08 [build] ✓ Completed in 751ms.

 building client (vite) 
12:46:08 [vite] transforming...
12:46:08 [vite] ✓ 4 modules transformed.
12:46:08 [vite] rendering chunks...
12:46:08 [vite] ✓ built in 20ms

 generating static routes 
12:46:08 ▶ src/pages/404.astro
12:46:08   └─ /404.html (+10ms) 
12:46:08 ▶ src/pages/contact.astro
12:46:08   └─ /contact/index.html (+2ms) 
12:46:08 ▶ src/pages/index.astro
12:46:08   └─ /index.html (+11ms) 
12:46:08 ▶ src/pages/news/index.astro
12:46:08   └─ /news/index.html (+1ms) 
12:46:08 λ src/pages/news/rss.xml.ts
12:46:08   └─ /news/rss.xml (+1ms) 
12:46:08 ▶ src/pages/people.astro
12:46:08   └─ /people/index.html (+2ms) 
12:46:08 ▶ src/pages/publications.astro
12:46:08   └─ /publications/index.html (+4ms) 
12:46:08 ▶ src/pages/research.astro
12:46:08   └─ /research/index.html (+2ms) 
12:46:08 ✓ Completed in 105ms.

12:46:08 [build] 7 page(s) built in 946ms
12:46:08 [build] Complete!

exit code: 0
```

BUILD: PASS
