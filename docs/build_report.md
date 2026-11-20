# Build report

Generated: 2026-11-20T03:43:32.138Z

## Static build

```text
$ npm run build

> hj-ailab-site@1.0.0 build
> ASTRO_TELEMETRY_DISABLED=1 astro build

12:43:33 [content] Syncing content
12:43:33 [content] Synced content
12:43:33 [types] Generated 39ms
12:43:33 [build] output: "static"
12:43:33 [build] mode: "static"
12:43:33 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
12:43:33 [build] Collecting build info...
12:43:33 [build] ✓ Completed in 54ms.
12:43:33 [build] Building static entrypoints...
12:43:33 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
12:43:35 [vite] ✓ built in 2.17s
12:43:35 [build] ✓ Completed in 2.20s.

 building client (vite) 
12:43:35 [vite] transforming...
12:43:35 [vite] ✓ 4 modules transformed.
12:43:35 [vite] rendering chunks...
12:43:35 [vite] ✓ built in 22ms

 generating static routes 
12:43:35 ▶ src/pages/404.astro
12:43:35   └─ /404.html (+10ms) 
12:43:35 ▶ src/pages/contact.astro
12:43:35   └─ /contact/index.html (+2ms) 
12:43:35 ▶ src/pages/index.astro
12:43:35   └─ /index.html (+11ms) 
12:43:35 ▶ src/pages/news/index.astro
12:43:35   └─ /news/index.html (+1ms) 
12:43:35 λ src/pages/news/rss.xml.ts
12:43:35   └─ /news/rss.xml (+1ms) 
12:43:35 ▶ src/pages/people.astro
12:43:35   └─ /people/index.html (+2ms) 
12:43:35 ▶ src/pages/publications.astro
12:43:35   └─ /publications/index.html (+3ms) 
12:43:35 ▶ src/pages/research.astro
12:43:35   └─ /research/index.html (+2ms) 
12:43:35 ✓ Completed in 103ms.

12:43:35 [build] 7 page(s) built in 2.40s
12:43:35 [build] Complete!

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

12:43:44 [content] Syncing content
12:43:44 [content] Synced content
12:43:44 [types] Generated 39ms
12:43:44 [build] output: "static"
12:43:44 [build] mode: "static"
12:43:44 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
12:43:44 [build] Collecting build info...
12:43:44 [build] ✓ Completed in 54ms.
12:43:44 [build] Building static entrypoints...
12:43:44 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
12:43:44 [vite] ✓ built in 742ms
12:43:44 [build] ✓ Completed in 776ms.

 building client (vite) 
12:43:44 [vite] transforming...
12:43:44 [vite] ✓ 4 modules transformed.
12:43:44 [vite] rendering chunks...
12:43:44 [vite] ✓ built in 23ms

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

12:43:46 [content] Syncing content
12:43:46 [content] Synced content
12:43:46 [types] Generated 42ms
12:43:46 [build] output: "static"
12:43:46 [build] mode: "static"
12:43:46 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
12:43:46 [build] Collecting build info...
12:43:46 [build] ✓ Completed in 59ms.
12:43:46 [build] Building static entrypoints...
12:43:46 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
12:43:46 [vite] ✓ built in 776ms
12:43:46 [build] ✓ Completed in 813ms.

 building client (vite) 
12:43:46 [vite] transforming...
12:43:46 [vite] ✓ 4 modules transformed.
12:43:46 [vite] rendering chunks...
12:43:46 [vite] ✓ built in 22ms

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

12:43:48 [content] Syncing content
12:43:48 [content] Synced content
12:43:48 [types] Generated 60ms
12:43:48 [build] output: "static"
12:43:48 [build] mode: "static"
12:43:48 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
12:43:48 [build] Collecting build info...
12:43:48 [build] ✓ Completed in 82ms.
12:43:48 [build] Building static entrypoints...
12:43:48 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
12:43:49 [vite] ✓ built in 1.10s
12:43:49 [build] ✓ Completed in 1.14s.

 building client (vite) 
12:43:49 [vite] transforming...
12:43:49 [vite] ✓ 4 modules transformed.
12:43:49 [vite] rendering chunks...
12:43:49 [vite] ✓ built in 20ms

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

12:43:50 [content] Syncing content
12:43:50 [content] Synced content
12:43:50 [types] Generated 39ms
12:43:50 [build] output: "static"
12:43:50 [build] mode: "static"
12:43:50 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
12:43:50 [build] Collecting build info...
12:43:50 [build] ✓ Completed in 54ms.
12:43:50 [build] Building static entrypoints...
12:43:51 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
12:43:51 [vite] ✓ built in 705ms
12:43:51 [build] ✓ Completed in 740ms.

 building client (vite) 
12:43:51 [vite] transforming...
12:43:51 [vite] ✓ 4 modules transformed.
12:43:51 [vite] rendering chunks...
12:43:51 [vite] ✓ built in 23ms

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

12:43:52 [content] Syncing content
12:43:52 [content] Synced content
12:43:52 [types] Generated 39ms
12:43:52 [build] output: "static"
12:43:52 [build] mode: "static"
12:43:52 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
12:43:52 [build] Collecting build info...
12:43:52 [build] ✓ Completed in 55ms.
12:43:52 [build] Building static entrypoints...
12:43:53 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
12:43:53 [vite] ✓ built in 750ms
12:43:53 [build] ✓ Completed in 784ms.

 building client (vite) 
12:43:53 [vite] transforming...
12:43:53 [vite] ✓ 4 modules transformed.
12:43:53 [vite] rendering chunks...
12:43:53 [vite] ✓ built in 21ms

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

12:43:54 [content] Syncing content
12:43:54 [content] Synced content
12:43:54 [types] Generated 39ms
12:43:54 [build] output: "static"
12:43:54 [build] mode: "static"
12:43:54 [build] directory: /home2/r7play/hj-ailab.github.io/dist/
12:43:54 [build] Collecting build info...
12:43:54 [build] ✓ Completed in 55ms.
12:43:54 [build] Building static entrypoints...
12:43:55 [WARN] [vite] "isRemoteAllowed", "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from external module "@astrojs/internal-helpers/remote" but never used in "node_modules/astro/dist/assets/utils/remotePattern.js".
12:43:55 [vite] ✓ built in 753ms
12:43:55 [build] ✓ Completed in 786ms.

 building client (vite) 
12:43:55 [vite] transforming...
12:43:55 [vite] ✓ 4 modules transformed.
12:43:55 [vite] rendering chunks...
12:43:55 [vite] ✓ built in 22ms

 generating static routes 
12:43:55 ▶ src/pages/404.astro
12:43:55   └─ /404.html (+12ms) 
12:43:55 ▶ src/pages/contact.astro
12:43:55   └─ /contact/index.html (+2ms) 
12:43:55 ▶ src/pages/index.astro
12:43:55   └─ /index.html (+12ms) 
12:43:55 ▶ src/pages/news/index.astro
12:43:55   └─ /news/index.html (+2ms) 
12:43:55 λ src/pages/news/rss.xml.ts
12:43:55   └─ /news/rss.xml (+2ms) 
12:43:55 ▶ src/pages/people.astro
12:43:55   └─ /people/index.html (+2ms) 
12:43:55 ▶ src/pages/publications.astro
12:43:55   └─ /publications/index.html (+4ms) 
12:43:55 ▶ src/pages/research.astro
12:43:55   └─ /research/index.html (+3ms) 
12:43:55 ✓ Completed in 118ms.

12:43:55 [build] 7 page(s) built in 995ms
12:43:55 [build] Complete!

exit code: 0
```

BUILD: PASS
