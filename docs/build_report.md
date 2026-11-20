# Build report

Generated: 2026-11-20T04:53:42.664Z

## Static build

```text
$ npm run build

> hj-ailab-site@1.0.0 build
> ASTRO_TELEMETRY_DISABLED=1 astro build

13:53:43 [content] Syncing content
13:53:43 [content] Synced content
13:53:43 [types] Generated 38ms
13:53:43 [build] output: "static"
13:53:43 [build] mode: "static"
13:53:43 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
13:53:43 [build] Collecting build info...
13:53:43 [build] ✓ Completed in 53ms.
13:53:43 [build] Building static entrypoints...
13:53:44 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
13:53:44 [vite] ✓ built in 925ms
13:53:44 [build] ✓ Completed in 960ms.

 building client (vite) 
13:53:44 [vite] transforming...
13:53:44 [vite] ✓ 4 modules transformed.
13:53:44 [vite] rendering chunks...
13:53:44 [vite] ✓ built in 21ms

 generating static routes 
13:53:44 ▶ src/pages/404.astro
13:53:44   └─ /404.html (+11ms) 
13:53:44 ▶ src/pages/contact.astro
13:53:44   └─ /contact/index.html (+2ms) 
13:53:44 ▶ src/pages/index.astro
13:53:44   └─ /index.html (+10ms) 
13:53:44 ▶ src/pages/news/index.astro
13:53:44   └─ /news/index.html (+46ms) 
13:53:44 λ src/pages/news/rss.xml.ts
13:53:44   └─ /news/rss.xml (+11ms) 
13:53:44 ▶ src/pages/people.astro
13:53:44   └─ /people/index.html (+2ms) 
13:53:44 ▶ src/pages/publications.astro
13:53:44   └─ /publications/index.html (+4ms) 
13:53:44 ▶ src/pages/research.astro
13:53:44   └─ /research/index.html (+14ms) 
13:53:44 ✓ Completed in 172ms.

13:53:44 [build] 7 page(s) built in 1.22s
13:53:44 [build] Complete!

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
PASS: all 5 selected publications on home are top-tier.
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
45 rendered publication entries checked against data/publications.json across all pages.
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

13:53:59 [content] Syncing content
13:53:59 [content] Synced content
13:53:59 [types] Generated 40ms
13:53:59 [build] output: "static"
13:53:59 [build] mode: "static"
13:53:59 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
13:53:59 [build] Collecting build info...
13:53:59 [build] ✓ Completed in 56ms.
13:53:59 [build] Building static entrypoints...
13:53:59 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
13:53:59 [vite] ✓ built in 788ms
13:53:59 [build] ✓ Completed in 824ms.

 building client (vite) 
13:53:59 [vite] transforming...
13:53:59 [vite] ✓ 4 modules transformed.
13:53:59 [vite] rendering chunks...
13:53:59 [vite] ✓ built in 20ms

 generating static routes 
src/data/publications.yaml
0.topics.0: Invalid enum value. Expected 'evaluation' | 'efficiency' | 'understanding', received 'unknown-topic'
  Stack trace:
    at validate (file:///home2/r7play/hj-ailab.github.io/dist/chunks/data_DlMApuer.mjs:14:11)
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

13:54:01 [content] Syncing content
13:54:01 [content] Synced content
13:54:01 [types] Generated 40ms
13:54:01 [build] output: "static"
13:54:01 [build] mode: "static"
13:54:01 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
13:54:01 [build] Collecting build info...
13:54:01 [build] ✓ Completed in 56ms.
13:54:01 [build] Building static entrypoints...
13:54:01 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
13:54:01 [vite] ✓ built in 731ms
13:54:01 [build] ✓ Completed in 766ms.

 building client (vite) 
13:54:01 [vite] transforming...
13:54:01 [vite] ✓ 4 modules transformed.
13:54:01 [vite] rendering chunks...
13:54:01 [vite] ✓ built in 22ms

 generating static routes 
src/data/publications.yaml
0.venue: Required
  Stack trace:
    at validate (file:///home2/r7play/hj-ailab.github.io/dist/chunks/data_DlMApuer.mjs:14:11)
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

13:54:03 [content] Syncing content
13:54:03 [content] Synced content
13:54:03 [types] Generated 67ms
13:54:03 [build] output: "static"
13:54:03 [build] mode: "static"
13:54:03 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
13:54:03 [build] Collecting build info...
13:54:03 [build] ✓ Completed in 83ms.
13:54:03 [build] Building static entrypoints...
13:54:03 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
13:54:03 [vite] ✓ built in 743ms
13:54:03 [build] ✓ Completed in 777ms.

 building client (vite) 
13:54:04 [vite] transforming...
13:54:04 [vite] ✓ 4 modules transformed.
13:54:04 [vite] rendering chunks...
13:54:04 [vite] ✓ built in 19ms

 generating static routes 
src/data/honors.yaml
0.member: Invalid enum value. Expected 'hyunjong' | 'suho', received 'unknown-member'
  Stack trace:
    at validate (file:///home2/r7play/hj-ailab.github.io/dist/chunks/data_DlMApuer.mjs:14:11)
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

13:54:05 [content] Syncing content
13:54:05 [content] Synced content
13:54:05 [types] Generated 39ms
13:54:05 [build] output: "static"
13:54:05 [build] mode: "static"
13:54:05 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
13:54:05 [build] Collecting build info...
13:54:05 [build] ✓ Completed in 54ms.
13:54:05 [build] Building static entrypoints...
13:54:05 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
13:54:06 [vite] ✓ built in 833ms
13:54:06 [build] ✓ Completed in 868ms.

 building client (vite) 
13:54:06 [vite] transforming...
13:54:06 [vite] ✓ 4 modules transformed.
13:54:06 [vite] rendering chunks...
13:54:06 [vite] ✓ built in 20ms

 generating static routes 
src/data/honors.yaml
0.kind: Invalid enum value. Expected 'fellowship' | 'scholarship' | 'award' | 'competition', received 'unknown-kind'
  Stack trace:
    at validate (file:///home2/r7play/hj-ailab.github.io/dist/chunks/data_DlMApuer.mjs:14:11)
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

13:54:07 [content] Syncing content
13:54:07 [content] Synced content
13:54:07 [types] Generated 38ms
13:54:07 [build] output: "static"
13:54:07 [build] mode: "static"
13:54:07 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
13:54:07 [build] Collecting build info...
13:54:07 [build] ✓ Completed in 54ms.
13:54:07 [build] Building static entrypoints...
13:54:07 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
13:54:08 [vite] ✓ built in 711ms
13:54:08 [build] ✓ Completed in 744ms.

 building client (vite) 
13:54:08 [vite] transforming...
13:54:08 [vite] ✓ 4 modules transformed.
13:54:08 [vite] rendering chunks...
13:54:08 [vite] ✓ built in 22ms

 generating static routes 
src/data/service.yaml
0.member: Invalid enum value. Expected 'hyunjong' | 'suho', received 'unknown-member'
  Stack trace:
    at validate (file:///home2/r7play/hj-ailab.github.io/dist/chunks/data_DlMApuer.mjs:14:11)
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

13:54:09 [content] Syncing content
13:54:09 [content] Synced content
13:54:09 [types] Generated 42ms
13:54:09 [build] output: "static"
13:54:09 [build] mode: "static"
13:54:09 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
13:54:09 [build] Collecting build info...
13:54:09 [build] ✓ Completed in 59ms.
13:54:09 [build] Building static entrypoints...
13:54:09 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
13:54:09 [vite] ✓ built in 704ms
13:54:09 [build] ✓ Completed in 738ms.

 building client (vite) 
13:54:09 [vite] transforming...
13:54:09 [vite] ✓ 4 modules transformed.
13:54:09 [vite] rendering chunks...
13:54:09 [vite] ✓ built in 19ms

 generating static routes 
13:54:10 ▶ src/pages/404.astro
13:54:10   └─ /404.html (+10ms) 
13:54:10 ▶ src/pages/contact.astro
13:54:10   └─ /contact/index.html (+2ms) 
13:54:10 ▶ src/pages/index.astro
13:54:10   └─ /index.html (+11ms) 
13:54:10 ▶ src/pages/news/index.astro
13:54:10   └─ /news/index.html (+1ms) 
13:54:10 λ src/pages/news/rss.xml.ts
13:54:10   └─ /news/rss.xml (+1ms) 
13:54:10 ▶ src/pages/people.astro
13:54:10   └─ /people/index.html (+2ms) 
13:54:10 ▶ src/pages/publications.astro
13:54:10   └─ /publications/index.html (+146ms) 
13:54:10 ▶ src/pages/research.astro
13:54:10   └─ /research/index.html (+3ms) 
13:54:10 ✓ Completed in 247ms.

13:54:10 [build] 7 page(s) built in 1.08s
13:54:10 [build] Complete!

exit code: 0
```

BUILD: PASS
