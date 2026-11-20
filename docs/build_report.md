# Build report

Generated: 2026-11-20T03:37:06.095Z

## Static build

```text
$ npm run build

> hj-ailab-site@1.0.0 build
> ASTRO_TELEMETRY_DISABLED=1 astro build

12:37:07 [content] Syncing content
12:37:07 [content] Synced content
12:37:07 [types] Generated 41ms
12:37:07 [build] output: "static"
12:37:07 [build] mode: "static"
12:37:07 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
12:37:07 [build] Collecting build info...
12:37:07 [build] ✓ Completed in 57ms.
12:37:07 [build] Building static entrypoints...
12:37:07 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
12:37:08 [vite] ✓ built in 763ms
12:37:08 [build] ✓ Completed in 799ms.

 building client (vite) 
12:37:08 [vite] transforming...
12:37:08 [vite] ✓ 4 modules transformed.
12:37:08 [vite] rendering chunks...
12:37:08 [vite] ✓ built in 23ms

 generating static routes 
12:37:08 ▶ src/pages/404.astro
12:37:08   └─ /404.html (+10ms) 
12:37:08 ▶ src/pages/contact.astro
12:37:08   └─ /contact/index.html (+2ms) 
12:37:08 ▶ src/pages/index.astro
12:37:08   └─ /index.html (+11ms) 
12:37:08 ▶ src/pages/news/index.astro
12:37:08   └─ /news/index.html (+2ms) 
12:37:08 λ src/pages/news/rss.xml.ts
12:37:08   └─ /news/rss.xml (+2ms) 
12:37:08 ▶ src/pages/people.astro
12:37:08   └─ /people/index.html (+2ms) 
12:37:08 ▶ src/pages/publications.astro
12:37:08   └─ /publications/index.html (+4ms) 
12:37:08 ▶ src/pages/research.astro
12:37:08   └─ /research/index.html (+3ms) 
12:37:08 ✓ Completed in 111ms.

12:37:08 [build] 7 page(s) built in 1.00s
12:37:08 [build] Complete!

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
PASS: all 9 top-tier badges match papers at the top-tier venues. All 2 ACL Findings entries are counted.
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

12:37:30 [content] Syncing content
12:37:30 [content] Synced content
12:37:30 [types] Generated 38ms
12:37:30 [build] output: "static"
12:37:30 [build] mode: "static"
12:37:30 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
12:37:30 [build] Collecting build info...
12:37:30 [build] ✓ Completed in 53ms.
12:37:30 [build] Building static entrypoints...
12:37:30 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
12:37:31 [vite] ✓ built in 718ms
12:37:31 [build] ✓ Completed in 752ms.

 building client (vite) 
12:37:31 [vite] transforming...
12:37:31 [vite] ✓ 4 modules transformed.
12:37:31 [vite] rendering chunks...
12:37:31 [vite] ✓ built in 22ms

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

12:37:32 [content] Syncing content
12:37:32 [content] Synced content
12:37:32 [types] Generated 58ms
12:37:32 [build] output: "static"
12:37:32 [build] mode: "static"
12:37:32 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
12:37:32 [build] Collecting build info...
12:37:32 [build] ✓ Completed in 73ms.
12:37:32 [build] Building static entrypoints...
12:37:32 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
12:37:33 [vite] ✓ built in 700ms
12:37:33 [build] ✓ Completed in 734ms.

 building client (vite) 
12:37:33 [vite] transforming...
12:37:33 [vite] ✓ 4 modules transformed.
12:37:33 [vite] rendering chunks...
12:37:33 [vite] ✓ built in 20ms

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

12:37:34 [content] Syncing content
12:37:34 [content] Synced content
12:37:34 [types] Generated 38ms
12:37:34 [build] output: "static"
12:37:34 [build] mode: "static"
12:37:34 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
12:37:34 [build] Collecting build info...
12:37:34 [build] ✓ Completed in 54ms.
12:37:34 [build] Building static entrypoints...
12:37:34 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
12:37:35 [vite] ✓ built in 707ms
12:37:35 [build] ✓ Completed in 741ms.

 building client (vite) 
12:37:35 [vite] transforming...
12:37:35 [vite] ✓ 4 modules transformed.
12:37:35 [vite] rendering chunks...
12:37:35 [vite] ✓ built in 20ms

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

12:37:36 [content] Syncing content
12:37:36 [content] Synced content
12:37:36 [types] Generated 38ms
12:37:36 [build] output: "static"
12:37:36 [build] mode: "static"
12:37:36 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
12:37:36 [build] Collecting build info...
12:37:36 [build] ✓ Completed in 55ms.
12:37:36 [build] Building static entrypoints...
12:37:36 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
12:37:37 [vite] ✓ built in 750ms
12:37:37 [build] ✓ Completed in 785ms.

 building client (vite) 
12:37:37 [vite] transforming...
12:37:37 [vite] ✓ 4 modules transformed.
12:37:37 [vite] rendering chunks...
12:37:37 [vite] ✓ built in 21ms

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

12:37:38 [content] Syncing content
12:37:38 [content] Synced content
12:37:38 [types] Generated 39ms
12:37:38 [build] output: "static"
12:37:38 [build] mode: "static"
12:37:38 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
12:37:38 [build] Collecting build info...
12:37:38 [build] ✓ Completed in 54ms.
12:37:38 [build] Building static entrypoints...
12:37:38 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
12:37:39 [vite] ✓ built in 739ms
12:37:39 [build] ✓ Completed in 773ms.

 building client (vite) 
12:37:39 [vite] transforming...
12:37:39 [vite] ✓ 4 modules transformed.
12:37:39 [vite] rendering chunks...
12:37:39 [vite] ✓ built in 21ms

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

12:37:40 [content] Syncing content
12:37:40 [content] Synced content
12:37:40 [types] Generated 39ms
12:37:40 [build] output: "static"
12:37:40 [build] mode: "static"
12:37:40 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
12:37:40 [build] Collecting build info...
12:37:40 [build] ✓ Completed in 54ms.
12:37:40 [build] Building static entrypoints...
12:37:40 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
12:37:41 [vite] ✓ built in 744ms
12:37:41 [build] ✓ Completed in 777ms.

 building client (vite) 
12:37:41 [vite] transforming...
12:37:41 [vite] ✓ 4 modules transformed.
12:37:41 [vite] rendering chunks...
12:37:41 [vite] ✓ built in 22ms

 generating static routes 
12:37:41 ▶ src/pages/404.astro
12:37:41   └─ /404.html (+11ms) 
12:37:41 ▶ src/pages/contact.astro
12:37:41   └─ /contact/index.html (+2ms) 
12:37:41 ▶ src/pages/index.astro
12:37:41   └─ /index.html (+11ms) 
12:37:41 ▶ src/pages/news/index.astro
12:37:41   └─ /news/index.html (+1ms) 
12:37:41 λ src/pages/news/rss.xml.ts
12:37:41   └─ /news/rss.xml (+2ms) 
12:37:41 ▶ src/pages/people.astro
12:37:41   └─ /people/index.html (+2ms) 
12:37:41 ▶ src/pages/publications.astro
12:37:41   └─ /publications/index.html (+4ms) 
12:37:41 ▶ src/pages/research.astro
12:37:41   └─ /research/index.html (+5ms) 
12:37:41 ✓ Completed in 109ms.

12:37:41 [build] 7 page(s) built in 976ms
12:37:41 [build] Complete!

exit code: 0
```

BUILD: PASS
