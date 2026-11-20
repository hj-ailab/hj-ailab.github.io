# Build report

Generated: 2026-11-20T03:47:37.174Z

## Static build

```text
$ npm run build

> hj-ailab-site@1.0.0 build
> ASTRO_TELEMETRY_DISABLED=1 astro build

12:47:38 [content] Syncing content
12:47:38 [content] Synced content
12:47:38 [types] Generated 39ms
12:47:38 [build] output: "static"
12:47:38 [build] mode: "static"
12:47:38 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
12:47:38 [build] Collecting build info...
12:47:38 [build] ✓ Completed in 55ms.
12:47:38 [build] Building static entrypoints...
12:47:38 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
12:47:39 [vite] ✓ built in 846ms
12:47:39 [build] ✓ Completed in 881ms.

 building client (vite) 
12:47:39 [vite] transforming...
12:47:39 [vite] ✓ 4 modules transformed.
12:47:39 [vite] rendering chunks...
12:47:39 [vite] ✓ built in 19ms

 generating static routes 
12:47:39 ▶ src/pages/404.astro
12:47:39   └─ /404.html (+10ms) 
12:47:39 ▶ src/pages/contact.astro
12:47:39   └─ /contact/index.html (+2ms) 
12:47:39 ▶ src/pages/index.astro
12:47:39   └─ /index.html (+10ms) 
12:47:39 ▶ src/pages/news/index.astro
12:47:39   └─ /news/index.html (+3ms) 
12:47:39 λ src/pages/news/rss.xml.ts
12:47:39   └─ /news/rss.xml (+2ms) 
12:47:39 ▶ src/pages/people.astro
12:47:39   └─ /people/index.html (+2ms) 
12:47:39 ▶ src/pages/publications.astro
12:47:39   └─ /publications/index.html (+3ms) 
12:47:39 ▶ src/pages/research.astro
12:47:39   └─ /research/index.html (+15ms) 
12:47:39 ✓ Completed in 117ms.

12:47:39 [build] 7 page(s) built in 1.09s
12:47:39 [build] Complete!

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
PASS: rendered highlights match data/publications.json (22 total, 13 top-tier).
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

12:47:45 [content] Syncing content
12:47:46 [content] Synced content
12:47:46 [types] Generated 39ms
12:47:46 [build] output: "static"
12:47:46 [build] mode: "static"
12:47:46 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
12:47:46 [build] Collecting build info...
12:47:46 [build] ✓ Completed in 55ms.
12:47:46 [build] Building static entrypoints...
12:47:46 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
12:47:47 [vite] ✓ built in 1.63s
12:47:47 [build] ✓ Completed in 1.66s.

 building client (vite) 
12:47:47 [vite] transforming...
12:47:47 [vite] ✓ 4 modules transformed.
12:47:47 [vite] rendering chunks...
12:47:47 [vite] ✓ built in 21ms

 generating static routes 
src/data/publications.yaml
0.topics.0: Invalid enum value. Expected 'evaluation' | 'efficiency' | 'understanding', received 'unknown-topic'
  Stack trace:
    at validate (file:///home2/r7play/hj-ailab.github.io/dist/chunks/data_GQKj7N8X.mjs:14:11)
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

12:47:48 [content] Syncing content
12:47:48 [content] Synced content
12:47:48 [types] Generated 39ms
12:47:48 [build] output: "static"
12:47:48 [build] mode: "static"
12:47:48 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
12:47:48 [build] Collecting build info...
12:47:48 [build] ✓ Completed in 54ms.
12:47:48 [build] Building static entrypoints...
12:47:49 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
12:47:49 [vite] ✓ built in 934ms
12:47:49 [build] ✓ Completed in 968ms.

 building client (vite) 
12:47:49 [vite] transforming...
12:47:49 [vite] ✓ 4 modules transformed.
12:47:49 [vite] rendering chunks...
12:47:49 [vite] ✓ built in 20ms

 generating static routes 
src/data/publications.yaml
0.venue: Required
  Stack trace:
    at validate (file:///home2/r7play/hj-ailab.github.io/dist/chunks/data_GQKj7N8X.mjs:14:11)
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

12:47:51 [content] Syncing content
12:47:51 [content] Synced content
12:47:51 [types] Generated 53ms
12:47:51 [build] output: "static"
12:47:51 [build] mode: "static"
12:47:51 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
12:47:51 [build] Collecting build info...
12:47:51 [build] ✓ Completed in 69ms.
12:47:51 [build] Building static entrypoints...
12:47:51 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
12:47:51 [vite] ✓ built in 783ms
12:47:51 [build] ✓ Completed in 817ms.

 building client (vite) 
12:47:51 [vite] transforming...
12:47:51 [vite] ✓ 4 modules transformed.
12:47:51 [vite] rendering chunks...
12:47:51 [vite] ✓ built in 21ms

 generating static routes 
src/data/honors.yaml
0.member: Invalid enum value. Expected 'hyunjong' | 'suho', received 'unknown-member'
  Stack trace:
    at validate (file:///home2/r7play/hj-ailab.github.io/dist/chunks/data_GQKj7N8X.mjs:14:11)
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

12:47:53 [content] Syncing content
12:47:53 [content] Synced content
12:47:53 [types] Generated 45ms
12:47:53 [build] output: "static"
12:47:53 [build] mode: "static"
12:47:53 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
12:47:53 [build] Collecting build info...
12:47:53 [build] ✓ Completed in 64ms.
12:47:53 [build] Building static entrypoints...
12:47:53 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
12:47:54 [vite] ✓ built in 860ms
12:47:54 [build] ✓ Completed in 898ms.

 building client (vite) 
12:47:54 [vite] transforming...
12:47:54 [vite] ✓ 4 modules transformed.
12:47:54 [vite] rendering chunks...
12:47:54 [vite] ✓ built in 21ms

 generating static routes 
src/data/honors.yaml
0.kind: Invalid enum value. Expected 'fellowship' | 'scholarship' | 'award' | 'competition', received 'unknown-kind'
  Stack trace:
    at validate (file:///home2/r7play/hj-ailab.github.io/dist/chunks/data_GQKj7N8X.mjs:14:11)
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

12:47:55 [content] Syncing content
12:47:55 [content] Synced content
12:47:55 [types] Generated 54ms
12:47:55 [build] output: "static"
12:47:55 [build] mode: "static"
12:47:55 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
12:47:55 [build] Collecting build info...
12:47:55 [build] ✓ Completed in 70ms.
12:47:55 [build] Building static entrypoints...
12:47:56 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
12:47:56 [vite] ✓ built in 1.51s
12:47:56 [build] ✓ Completed in 1.54s.

 building client (vite) 
12:47:56 [vite] transforming...
12:47:56 [vite] ✓ 4 modules transformed.
12:47:56 [vite] rendering chunks...
12:47:56 [vite] ✓ built in 20ms

 generating static routes 
src/data/service.yaml
0.member: Invalid enum value. Expected 'hyunjong' | 'suho', received 'unknown-member'
  Stack trace:
    at validate (file:///home2/r7play/hj-ailab.github.io/dist/chunks/data_GQKj7N8X.mjs:14:11)
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

12:47:58 [content] Syncing content
12:47:58 [content] Synced content
12:47:58 [types] Generated 40ms
12:47:58 [build] output: "static"
12:47:58 [build] mode: "static"
12:47:58 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
12:47:58 [build] Collecting build info...
12:47:58 [build] ✓ Completed in 56ms.
12:47:58 [build] Building static entrypoints...
12:47:58 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
12:47:58 [vite] ✓ built in 756ms
12:47:58 [build] ✓ Completed in 793ms.

 building client (vite) 
12:47:58 [vite] transforming...
12:47:58 [vite] ✓ 4 modules transformed.
12:47:58 [vite] rendering chunks...
12:47:58 [vite] ✓ built in 21ms

 generating static routes 
12:47:58 ▶ src/pages/404.astro
12:47:58   └─ /404.html (+11ms) 
12:47:59 ▶ src/pages/contact.astro
12:47:59   └─ /contact/index.html (+2ms) 
12:47:59 ▶ src/pages/index.astro
12:47:59   └─ /index.html (+13ms) 
12:47:59 ▶ src/pages/news/index.astro
12:47:59   └─ /news/index.html (+2ms) 
12:47:59 λ src/pages/news/rss.xml.ts
12:47:59   └─ /news/rss.xml (+2ms) 
12:47:59 ▶ src/pages/people.astro
12:47:59   └─ /people/index.html (+2ms) 
12:47:59 ▶ src/pages/publications.astro
12:47:59   └─ /publications/index.html (+4ms) 
12:47:59 ▶ src/pages/research.astro
12:47:59   └─ /research/index.html (+2ms) 
12:47:59 ✓ Completed in 109ms.

12:47:59 [build] 7 page(s) built in 993ms
12:47:59 [build] Complete!

exit code: 0
```

BUILD: PASS
