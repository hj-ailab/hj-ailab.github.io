# HJAI Lab website: benchmark of 12 lab sites and a design recommendation

Date: 2026-11-20. Purpose: decide the information architecture, visual direction and build approach for a two-person research lab site on GitHub Pages.

Method. Each site's homepage (and one or two inner pages where noted) was read with WebFetch on 2026-11-20. Fonts and colors come from the live HTML and CSS fetched with `curl`. They are `@font-face` / `font-family` declarations, CSS custom properties, and the most frequent hex values in the shipped stylesheet. WebFetch does not show rendered styling, so "Typography / color" rows report declared values, not screenshots. The build stack comes from the `generator` meta tag or from asset paths (`_next/`, `_astro/`, `wp-content/`, Webflow CDN). Nous Research (nousresearch.com) was also fetched. It is left out because the page was mostly product marketing with no research, team or publication listing to compare.

A note on the EleutherAI fetch: the extracted page text contained an embedded instruction aimed at automated agents. It was ignored and has no bearing on anything below.

## Contents

1. Per-site tables (12 sites)
2. Cross-site patterns
3. Recommendation for HJAI Lab

---

## 1. Per-site tables

### 1.1 Sakana AI — https://sakana.ai

| Aspect | Observed |
|---|---|
| Information architecture | Nav: Research (sub-groups: RSI Lab, Frontier Intelligence Group, Security Research Group), Solutions, Platform, Products, Careers, About (Blog, Corporate Info, Contact). EN/日本語 toggle. Homepage: hero → Products → Solutions (filter tabs) → Research (10 cards) → hiring CTA. |
| Members | Not on the site's main surface. Only Careers and Corporate Info. |
| Publications | Research cards with a thumbnail, a venue/year label ("ICLR 2026", "2025") and a program tag (RSI, FIG, Open source). No author line on the card. |
| News | Case-study cards with a category label and "Mar 2026"-style date, title, summary, thumbnail. Blog at /blog/ filtered by label. |
| Hero / landing | Text-led. Logo, "Building Frontier AI in Japan", two buttons. No photo. |
| Typography / color | `--hp-font: "Poppins", "Noto Sans JP"`. White background (`--bg: #fff`), single red accent `--accent: #e10600`, Tailwind-style grays (#6b7280, #e5e7eb). Max width 1200px. |
| Footer | Product/Platform/Solutions/Research/Company columns, contact form link, "Tokyo, Japan © 2026 Sakana AI 株式会社", X / LinkedIn / Instagram icons. City only, no street address. |
| Worth copying | Venue/year label on research cards instead of a date. It tells the reader where the work was vetted. Also: one bold accent color on white is enough. |

### 1.2 Hazy Research (Stanford) — https://hazyresearch.stanford.edu

| Aspect | Observed |
|---|---|
| Information architecture | Nav: People, Blog. Homepage: one-sentence thesis heading → paragraph on the group (Stanford CS, led by Chris Ré) → pointer to blog → sponsors line → full post feed (2017–2026). |
| Members | /people grouped PhDs, Postdocs, Faculty, Recent Alumni. Each card is a headshot, name, one link (site / LinkedIn / Scholar / X). No role, no interests. |
| Publications | No separate paper list. Work is presented as blog posts. |
| News | Feed entries: linked title (some with subtitle), date "Oct 12, 2026", middle dot, author names (mostly linked). No tags. |
| Hero / landing | Text only. A large thesis statement instead of a tagline. |
| Typography / color | DM Sans (body), DM Serif Display / DM Serif Text (headings), DM Mono. Text #444, primary #212121, secondary #666, wash #f6f6f6, accent brick red `#b63629`. Built with Next.js. |
| Footer | One line: "Made by Hazy Research." plus a link to the lab. |
| Worth copying | The serif-display + sans-body + mono-metadata trio, and the quiet "post feed as homepage" for a group whose output is writing. Dated, authored entries do the credibility work. |

### 1.3 EleutherAI — https://www.eleuther.ai (+ /papers/, /staff/)

| Aspect | Observed |
|---|---|
| Information architecture | Nav: About, Staff, Research (dropdown: three groups of three areas), Papers, Community, Blog (external), Donate. Homepage: hero → Latest (4 blog posts) → Focus Areas (4 illustrated cards) → Recent Papers (4) → footer. |
| Members | /staff grouped Leadership, NLP Team, Interpretability Team, Policy, Operations. Each team has a short description. Person: headshot (or placeholder), name, title, optional icon links (website, Scholar, GitHub). No bios. |
| Publications | /papers "Research Library": search box; filter panel with Research area, Year (2019–2026), Venue type (Conference/journal, Workshop, arXiv), Venue; total count (209) and "Newest first"; grouped by year; entry = title, authors (truncated "and 51 others"), venue line, award badges (best paper / spotlight / oral), outbound links (arXiv, OpenReview, ACL Anthology). Empty state "No publications match these filters" with "Clear filters". |
| News | "Latest" cards: "Blog" label, title, date. |
| Hero / landing | "Independent AI Research, Done in the Open" + mission line + three stat callouts (200+ publications, 65,000+ citations linked to Scholar, 157M+ downloads linked to HF) + two CTAs. |
| Typography / color | Inter + ui-monospace. Dark theme: `theme-color #07090d`, ink `#f4f5f7`, panel `#0d1218`, muted `#89939f`. Per-research-area accents (`--blue #78b8ee`, `--coral`, `--gold`, `--green`, `--violet`). Built with Hugo. |
| Footer | Name, Donate, "Website licensed under CC BY 4.0", icons for email (contact@eleuther.ai), Discord, GitHub, Twitter. No address. |
| Worth copying | The publication library: year grouping plus area / year / venue-type filters with a count and a proper empty state. This is the best publication UX of the set. |

### 1.4 Answer.AI — https://www.answer.ai

| Aspect | Observed |
|---|---|
| Information architecture | Single listing page. Title "Answer.AI - Practical AI R&D", intro paragraph, rule, "Categories" with counts (All 48, ai 27, coding 10, …), reverse-chronological post feed. RSS and X icons in header. |
| Members | None. Authors appear only as bylines. |
| Publications | None as a list. Posts only. |
| News | Post entries: optional thumbnail, title, lowercase category tags, 1–2 sentence summary, "Aug 19, 2026" date, author names. |
| Hero / landing | Plain H1 and paragraph. No images, no buttons. |
| Typography / color | Quarto site on Bootstrap. "Open Sans" body, SFMono code. Bootstrap palette (#446e9b blue most frequent). |
| Footer | No footer in the fetched content. |
| Worth copying | Category list with counts as the filter. One line of UI that tells a visitor how much work exists in each area. |

### 1.5 METR — https://metr.org (+ /research)

| Aspect | Observed |
|---|---|
| Information architecture | Nav: Our Work (Research, Notes, Updates, Risk Assessment), About, Donate, Careers, Search; language selector (EN/ES/中文). Homepage: hero → Featured work (category filters) → Partnerships (logo row) → METR in the press (dated, outlet logos) → Recent (cards) → tagline + Subscribe → footer. |
| Members | No team on homepage. |
| Publications | /research is a reverse-chronological feed: title, date ("August 26, 2026"), summary, "Read more". No authors, no type labels, no thumbnails, no filters. Type only implied by URL (/blog/ vs /evaluations/). |
| News | "Recent" cards: title, date, one-sentence summary, thumbnail. Separate "Notes" section for rough updates. |
| Hero / landing | Name expansion "Model Evaluation & Threat Research" + one-line mission + "About METR" link. |
| Typography / color | "Instrument Sans" body, "Cabin Sketch" (hand-drawn) display, Montserrat. Dark navy `#131925`, muted green `#589885`, light gray `#eaecf0`. Bootstrap base. |
| Footer | Logo + one-paragraph description ("METR (pronounced 'meter') is a nonprofit…"), Subscribe, Resources / Follow / Company columns, info@ and press@ emails, privacy, "© 2026 METR. All rights reserved.", language links. No address. |
| Worth copying | Separating polished research from "Notes" (short, rough updates). A two-person lab can publish small evaluation notes without them competing with papers. Also the one-paragraph "what we are" in the footer. |

### 1.6 Transluce — https://transluce.org (+ /about)

| Aspect | Observed |
|---|---|
| Information architecture | Nav: Research (3 areas + All Reports), Products (Docent…), Governance, Press, About (About Us, Team, Independence, Get Involved), search (⌘K), Careers. Homepage: hero → Research (3 cards) → Products → Governance → In the press (logo row). About page: mission → socials → Our Team → Advisors → Board → Get Involved → Governance. |
| Members | /about: cards with photo, name, title, links (site, LinkedIn, X). No bios. Advisors and Board listed without photos. |
| Publications | Research cards: category label, date, title, thumbnail. No authors on cards. |
| News | Product blog cards (date, title, thumbnail). |
| Hero / landing | Large wordmark banner, one-sentence nonprofit mission, three bullets of what the lab does, two illustrations. |
| Typography / color | Inter (Google Fonts link), Open Sans in compiled CSS, Merriweather as the serif. Tailwind grays: `#111827` ink, `#e5e7eb` rules. Built with Next.js. |
| Footer | Wordmark + "Independent 501(c)(3) nonprofit · Independence policy", X / LinkedIn / GitHub / email icons, three link columns, "© 2026 Transluce". |
| Worth copying | The hero's "three bullets of what we do". It is concrete, scannable, and maps one-to-one onto nav sections. Also listing advisors text-only under the team, which suits a small group with collaborators. |

### 1.7 Apollo Research — https://www.apolloresearch.ai

| Aspect | Observed |
|---|---|
| Information architecture | Announcement banners → nav: About, Team, Press, Blog, Science, Monitoring, Governance, Careers. Homepage: hero → partner logos → product block → Mission → Science (3 cards) → Monitoring (4) → Governance (3) → blog (3) → testimonials → "Get in touch" → newsletter. |
| Members | Team only via nav link. Not on homepage. |
| Publications | Science/Monitoring/Governance cards: title, summary, "Read more". No dates, tags or authors. |
| News | Blog cards: image, "19 November 2026" date, title, summary. |
| Hero / landing | Mission headline + subline + two buttons + background image. |
| Typography / color | PP Neue Montreal. Near-black `#171717` / `#1a1919`, light `#f5f5f5`, teal accent `#17cfb9`, violet `#8d7acc`. Built with Webflow. |
| Footer | Who We Are / General / Legal / Get in touch columns. Registration line "EIN 93-4310599 DE, USA" and "EU Transparency Register #…". X, LinkedIn. No street address or email. |
| Worth copying | Putting the legal identity (registration numbers) as one quiet footer line rather than an address block. If HJAI Lab is ever a registered entity, this is the format. Not worth copying: the testimonial and logo strips, which read as corporate. |

### 1.8 Goodfire — https://www.goodfire.com (goodfire.ai redirects here)

| Aspect | Observed |
|---|---|
| Information architecture | Nav: Product (LLMs, Life Sciences), Research, About (Company, Careers, Blog), "Talk to our team". Homepage: hero → Our Mission → product areas → research agenda in three pillars (Understand / Debug / Design, three cards each) → Research (3 items) → CTA → footer. |
| Members | Not linked as a team page. |
| Publications | Research list: title, date ("November 10, 2026"), comma-separated plain-text authors. No tags. |
| News | Via Blog (not shown on homepage). |
| Hero / landing | Text-led headline + paragraph + one button over decorative textured background art. |
| Typography / color | Suisse Intl (sans), Suisse Works (serif), IBM Plex Mono. Warm off-white `#f6f5f0` / `#fbfaf7`, dark slate `#1d272a`, burnt-orange accent `#c4652d`. Built with Astro. |
| Footer | Logo, link list, X / LinkedIn, legal links (terms, privacy, vulnerability disclosure), "© 2026 All rights reserved". No contact or address. |
| Worth copying | The palette: warm paper background, one dark slate ink, one earthy accent, mono for metadata. It looks serious without looking corporate. Also the research list format (title, date, authors) with nothing else. |

### 1.9 Sky Computing Lab (UC Berkeley) — https://sky.cs.berkeley.edu (+ /people/)

| Aspect | Observed |
|---|---|
| Information architecture | Nav: People, Projects, Publications, News, Events, Sponsors, Contact, DARE. Homepage: hero cards (white paper, video, DARE) → News (5) → Events (4) → Publications (12, by month) → Recent Projects (18 cards) → lab story → Sponsors (logos) → footer. |
| Members | /people grouped Core Faculty, Faculty, GSR, Postdoc, Staff, Visiting Student Researcher, Affiliate, Visiting Scholar, 5th Year Masters. Person: photo (or placeholder), name, role label; photo links out. Several photo links point to the wrong person's page. |
| Publications | Month/year headings, linked title only (DOI/PDF). No authors or venues. |
| News | Date heading, linked headline, short summary. |
| Hero / landing | Big heading + subtitle + three link cards. No image. |
| Typography / color | Roboto Slab and Open Sans (Google Fonts). WordPress 6.6.2 with block plugins. |
| Footer | Repeated nav, X icon, "Copyright 2022 - SKY Computing UC Berkeley EECS". No address in footer. |
| Worth copying | Mostly a counter-example: a homepage with seven stacked sections, title-only publications, stale copyright year and mislinked people photos. These are the failure modes of a hand-maintained site without structured data. Worth copying: project cards (thumbnail + one-line description) as a distinct type from papers. |

### 1.10 al-folio (Jekyll academic theme demo) — https://alshedivat.github.io/al-folio/ (+ /publications/)

| Aspect | Observed |
|---|---|
| Information architecture | Nav: about, blog, publications, projects, repositories, CV, teaching, people, submenus. About page: name, affiliation line, photo, address/contact, bio → news → latest posts → selected publications → social icon row. |
| Members | "people" page exists (nav only in fetch). |
| Publications | Generated by jekyll-scholar from BibTeX. Year headings, numbered list. Entry: optional venue label (link or text), optional preview GIF, title, italic authors, venue/year line, buttons Abs (expands inline), Bib (shows BibTeX), DOI, HTML, PDF, Video, plus Shields.io citation badges (Scholar, InspireHEP). No filters. |
| News | "news" block: date "Jan 15, 2016" + one-line inline announcement or linked title. |
| Hero / landing | Personal-homepage layout (photo + bio), not a lab landing. |
| Typography / color | Roboto + Roboto Slab (Google Fonts). Light/dark toggle (`id="light-toggle"`), `--global-bg-color #ffffff` / `#1c1c1d`, theme color `#b509ac` (light) / `#2698ba` (dark). |
| Footer | "© Copyright 2026 …", "Powered by Jekyll with al-folio theme", "Hosted by GitHub Pages", "Photos from Unsplash". |
| Worth copying | Abs/Bib toggles per entry. Inline abstract and a copyable BibTeX are the two things a reader of an academic site actually wants. Not worth copying: deriving everything from a .bib file (needs non-whitelisted plugins, so an Actions build anyway) and the personal-homepage layout. |

### 1.11 AMI Lab, KAIST — https://ami.kaist.ac.kr

| Aspect | Observed |
|---|---|
| Information architecture | Nav: About, News, Members, Publications, Gallery. Homepage: lab title + banner image → Notice (application instructions, "no individual replies") → Latest Admission Updates (open/closed for postdoc / grad / undergrad) → News feed with "Load more" → Research Agenda (3 themes) → Links & Contact → Address → Past Funding Partners → Collaboration logos → Affiliation (NAIRL). |
| Members | Nav only in fetch. |
| Publications | Nav only in fetch. |
| News | Cards: category emoji, bracketed venue tag + headline ("[EACL'27] …"), category label (Academic / Admission / News / Awards), date `2026/10/22`. |
| Hero / landing | Logo + title + banner image. Dark/light toggle. |
| Typography / color | System UI sans stack, SF Mono. Next.js. |
| Footer | Full street address (E3-5 Krafton Building, 291 Daehak-ro, Daejeon), affiliation, partner logos. No email. No copyright line. |
| Worth copying | The `[VENUE'YY]` prefix on news headlines and a fixed set of news categories. Scannable and filterable. |

### 1.12 MLI Lab, KAIST — https://mli.kaist.ac.kr (+ /people/, /publications/)

| Aspect | Observed |
|---|---|
| Information architecture | Nav: HOME, NEWS, PUBLICATIONS, DEADLINES, PEOPLE, CONTACT. Homepage: "WELCOME TO / MACHINE LEARNING AND INTELLIGENCE LAB" + five research-area tiles → recent news (5) → recruitment posts → footer. |
| Members | /people grouped Professor (with bio), Post Doctors, Ph.D., Military Affiliation, Part-Time, M.S., Scholarship, Alumni. Current member: photo, name (linked), email, "Since Fall 2026", research interests (comma list). Alumni: name, email, degree + year, current position. No photos for alumni. |
| Publications | One long list 2026→2010 with "ALL / CONFERENCE / JOURNAL / ETC" filter row; entry = title, authors, venue line with track/award note ("(findings)", "(Oral Presentation)"); "*: equal contribution"; `[paper] [code] [project]` links; rules between entries. Lab members not highlighted. |
| News | Title, "MLILAB" author, date `2026-08-31`, short body ("Three papers accepted to EMNLP 2026"). |
| Hero / landing | Welcome banner + research-area tiles. |
| Typography / color | Plain static HTML/CSS (`static/style.css`, normalize.css). |
| Footer | Logo, "© Copyright , MLILAB, …" (year missing), full Seoul address with ZIP, professor and lab-head emails, X and GitHub. |
| Worth copying | The member fields "Since <term>" and comma-listed interests, and alumni with "now at …". Counter-example: lab members not highlighted in author lists, which makes it hard to see the lab's own role. |

---

## 2. Cross-site patterns

- **Text-led heroes dominate.** 9 of 12 have no photo or banner image in the hero. Apollo (background image), AMI (banner) and the al-folio demo (profile photo) are the exceptions. Transluce adds illustrations and Goodfire a background texture, but both lead with text.
- **Team pages are minimal.** EleutherAI, Transluce, Hazy and Sky show photo + name + role/title + links, without bios. The two KAIST labs are the only ones adding interests and start term, and MLI is the only one tracking alumni destinations.
- **Publication UX ranges widely.** Sky shows title only, METR and Goodfire show a dated feed, MLI has type filters, al-folio has per-entry Abs/Bib toggles, and EleutherAI has a searchable, faceted library. Only EleutherAI shows award badges and a count. None of the sites bold the lab's own members in author lists (al-folio intends to, but the demo has no owner name in the data).
- **Dates.** Four formats seen: "Oct 12, 2026" (Hazy, Answer.AI), "November 10, 2026" (Goodfire, METR), "19 November 2026" (Apollo), ISO-like `2026/10/22` / `2026-08-31` (KAIST). Venue labels replace dates on Sakana's research cards.
- **Footers.** US/EU organizations show legal identity (Transluce 501(c)(3), Apollo EIN + EU register) but no street address. Sakana shows city + legal name. The KAIST labs show a full street address because they have an office. Stale or missing copyright years appear on Sky (2022) and MLI (blank). A build-time year avoids this.
- **Typography.** The calmer research sites pair a serif with a sans and a mono for metadata (Hazy: DM Serif + DM Sans + DM Mono; Goodfire: Suisse Works + Suisse Intl + IBM Plex Mono; Transluce: Merriweather + Inter). Company sites use one geometric/grotesk sans (Poppins, PP Neue Montreal).
- **Color.** Every site uses one accent at most on a neutral base: Sakana red `#e10600`, Hazy brick `#b63629`, Goodfire burnt orange `#c4652d`, METR muted green `#589885`, Apollo teal `#17cfb9`. EleutherAI is the only dark-first site.
- **Stacks.** Next.js (Hazy, Transluce, AMI), Astro (Goodfire), Hugo (EleutherAI), Quarto (Answer.AI), Jekyll (al-folio), WordPress (Sky), Webflow (Apollo), hand-written HTML (MLI). Structured-data sites (EleutherAI, al-folio) have the most consistent publication lists. The hand-maintained ones (Sky, MLI) show the drift: wrong links, missing year.

---

## 3. Recommendation for HJAI Lab

One design, decided. The reasoning for each choice cites the site it came from.

### 3.1 Pages

| Path | Page | Content |
|---|---|---|
| `/` | Home | See 3.2. |
| `/research/` | Research | Three themes, one section each: (1) Evaluation of multimodal, speech and LLM systems; (2) Efficient inference; (3) LLM agents. Each section has two or three paragraphs, the theme's publications (auto-filtered from the same data), and related code/data releases. |
| `/publications/` | Publications | Full library, filterable (3.4). |
| `/people/` | People | Two member cards (3.3), then a text-only "Collaborators" list (name, affiliation, link), like Transluce's advisors list. |
| `/news/` | News | Full archive grouped by year (3.5). Includes short "Notes" entries (METR's split) for small evaluation write-ups that are not papers. |
| `/contact/` | Contact | Emails, GitHub/HF orgs, city, a sentence on what kinds of collaboration requests are welcome. Short page. It exists so the nav has a stable target and the footer stays one line. |
| `/404.html` | Not found | Required by GitHub Pages for a styled 404. |

No individual member pages: each card links to the member's own site. No blog at launch. Notes inside News cover short writing, and a blog can be added later as a new content type without restructuring.

Nav order: Research, Publications, People, News, Contact. The lab name on the left links home. A light/dark toggle is on the right (al-folio and AMI both offer one).

### 3.2 Landing layout (top to bottom)

1. **Header**: wordmark "HJAI Lab" (set in the heading serif, no logo graphic at launch), nav, theme toggle.
2. **Intro block**, text only, max ~70 characters per line:
   - One-sentence statement of what the lab does (Hazy's thesis-statement style, not a slogan).
   - Three bullets, one per research theme, each linking to its `/research/#anchor` (Transluce's three-bullets pattern).
   - No buttons, no stats row. EleutherAI's citation/download counters only work at their scale.
3. **Selected publications**: 3–4 entries with `selected: true`, rendered in the same entry format as the library (3.4), each with a small figure thumbnail on wide screens only. "All publications →".
4. **News**: latest 5 items (3.5). "All news →".
5. **People strip**: the two members side by side: photo, name, one-line role, link to /people.
6. **Footer** (3.6).

Sakana, Transluce and Apollo all stack sections in a similar way. Sky's seven-section homepage is the limit to stay under. Four content blocks is enough for a two-person lab.

### 3.3 Member card fields

| Field | Required | Notes |
|---|---|---|
| `id` | yes | Slug used to link authors in publications (`hyunjong-ok`). |
| `name` | yes | Display name in English. |
| `name_local` | no | Korean name, shown beside the English name. |
| `photo` | yes | Square, ≥ 600 px, same crop and background for both members. |
| `role` | yes | One line, e.g. "PhD student, <University>". Affiliation is stated here, not implied. |
| `interests` | yes | 3–4 short phrases, comma-listed (MLI pattern). |
| `bio` | yes | One or two sentences. EleutherAI/Transluce show none. With only two people, a short bio carries useful signal. |
| `since` | no | "Since 2026" (MLI's "Since Fall 2026"). |
| `links` | yes | `email`, `website`, `scholar`, `github`; optional `x`, `linkedin`, `cv`. Rendered as an icon row with text labels on hover/focus. |

Collaborators list: `name`, `affiliation`, `url`. No photos.

### 3.4 Publication entries and filters

Entry fields (one YAML record per paper):

| Field | Required | Rendering |
|---|---|---|
| `id` | yes | Anchor (`/publications/#<id>`) and BibTeX key. |
| `title` | yes | Linked to the primary link. |
| `authors` | yes | List of `{name}` or `{person: <member id>}`. Member authors are bold and linked to /people. Equal-contribution marked with `*` and a legend under the list. The lab's own role is visible, which none of the benchmarked sites do. |
| `venue` | yes | Short label shown as a mono tag in front of the title, e.g. `ICLR 2027`, `arXiv 2026` (Sakana's venue label, AMI's `[VENUE'YY]`). |
| `venue_full` | no | Full name in the details line and BibTeX. |
| `year` | yes | Grouping key. |
| `type` | yes | `conference` / `journal` / `workshop` / `preprint`. |
| `topics` | yes | One or more from a fixed vocabulary: `evaluation`, `multimodal`, `speech`, `llm`, `efficient-inference`, `agents`. |
| `award` | no | `oral` / `spotlight` / `best-paper`, shown as a small badge (EleutherAI). |
| `links` | at least `paper` | `paper`, `arxiv`, `code`, `project`, `data` (Hugging Face), `slides`, `video`, `poster`. Rendered as text buttons in a fixed order (al-folio). |
| `abstract` | no | Behind an "Abstract" toggle (al-folio Abs). |
| `bibtex` | generated | "BibTeX" toggle with a copy button, generated from the fields above. |
| `tldr` | no | One line under the title on the home page only. |
| `thumbnail` | no | Used on the home page "Selected" block only. The library stays text-dense. |
| `selected` | no | Puts the entry in the home page block. |

Only publicly released work goes on the site (accepted papers, or preprints already on arXiv). The data schema has no "under review" status, so an anonymous submission cannot be listed by mistake.

Library page layout and filters (EleutherAI library, sized down):

- Above the list: a search box (title + authors), then three chip rows: **Topic** (with counts, Answer.AI style), **Year**, **Type**. A line "N publications · newest first" and a "Clear filters" link.
- List grouped under year headings, newest first.
- The full list is rendered into the HTML at build time. The filter script only hides entries, so the page works without JavaScript and every paper is indexable.
- Filter state is mirrored in the URL query (`?topic=speech&type=conference`), so a filtered view can be linked from the Research page and from CVs.
- Empty state: "No publications match these filters. Clear filters."

### 3.5 News format

- One line per item: **date**, **category tag**, **sentence with inline links**. No thumbnails, no body text on the list.
  - Example: `2026-11 · paper · "<Title>" accepted to ICLR 2027 (paper, code).`
- Date shown as `YYYY-MM` in the mono face (stored as a full ISO date for sorting). Month precision is enough for lab news and avoids the four competing date styles seen above.
- Categories (fixed set, AMI pattern): `paper`, `release` (code/data/model), `talk`, `award`, `note`, `people`.
- `note` items link to a short page under `/news/<slug>/` (METR "Notes"). Every other item links outward or to a publication anchor.
- Home page shows the latest 5. /news shows all, grouped by year. An RSS/Atom feed at `/news/feed.xml` (Answer.AI and al-folio both expose RSS).

### 3.6 Footer contents

One compact block, two rows:

1. **Identity line**: "HJAI Lab — an independent research lab working on evaluation, efficient inference and agents for multimodal, speech and language models." (METR's one-paragraph self-description, cut to one sentence.)
2. **Links row**: contact email, GitHub org, Hugging Face org, Google Scholar (if a lab profile exists), X; "Seoul, Republic of Korea" (city only, like Sakana; add a street address only if there is an actual office visitors can go to); `© <build year> HJAI Lab` (computed at build time, avoiding Sky's and MLI's stale years); "Site source" link to the repository; RSS icon.

Business information: omit. The sites that show legal identity (Transluce, Apollo, Sakana) do so because they are registered entities. Add a single registration line in Apollo's format only if HJAI Lab becomes a registered organization.

### 3.7 Typography and color

Direction: paper-like, quiet, one accent. Goodfire's palette logic with Hazy's font roles.

Fonts (all free on Google Fonts, self-hosted as WOFF2 to avoid a third-party request):

| Role | Font | Use |
|---|---|---|
| Headings, wordmark | Source Serif 4 (600) | Page titles, section headings, member names. |
| Body and UI | IBM Plex Sans (400/500) | Text, nav, buttons. 17 px, line-height 1.6, measure ≤ 72ch. |
| Metadata | IBM Plex Mono (400) | Dates, venue tags, topic chips, BibTeX. |

Color tokens. The accent is the Tableau blue already used in the lab's paper figures, so site and figures match. It is darkened for text, because `#4E79A7` on the paper background measures 4.21:1, below WCAG AA for body text.

| Token | Light | Dark | Contrast (computed) |
|---|---|---|---|
| `--bg` | `#f7f6f2` | `#15181b` | — |
| `--ink` | `#1d2327` | `#e8e6e1` | 14.7 : 1 / 14.3 : 1 |
| `--muted` | `#5b6168` | `#9aa1a8` | 5.8 : 1 / 6.8 : 1 |
| `--accent` (links, active chip) | `#3b6491` | `#8fb3d9` | 5.7 : 1 / 8.2 : 1 |
| `--accent-fill` (badges, figure-matching) | `#4e79a7` | `#4e79a7` | non-text only |
| `--rule` | `#e3e1da` | `#2a2f34` | — |

No gradients, no shadows, no rounded "cards" with borders. Sections are separated by whitespace and 1 px rules. Layout: 1120 px max container, 16 px side gutter on phones, single column below 760 px. Default theme follows `prefers-color-scheme`. The toggle overrides it and remembers the choice in `localStorage` (wrapped in try/catch).

### 3.8 Build approach: Astro, built and deployed by GitHub Actions

Decision: **Astro (static output) + YAML content collections + GitHub Actions deploy to Pages.**

Why this over the two alternatives:

| | Hand-written HTML/CSS/JS + JSON | Jekyll + `_data` (native Pages build) | **Astro + Actions** |
|---|---|---|---|
| Shared header/footer across 6 pages | Copy-paste per page, or inject with JS (blank without JS, worse for indexing). | Layouts and includes. | Layouts and components. |
| Data validation | None. A typo renders an empty field. | None. Liquid renders blanks silently; Sky- and MLI-style drift. | **Content-collection schemas (Zod) fail the build** on a missing `venue`, an unknown topic, or an author `person:` id that is not in `people.yaml`. |
| Publications filter, BibTeX generation, author linking | Client-side only. | Liquid loops for rendering. BibTeX from fields is awkward in Liquid. jekyll-scholar is not on the Pages plugin whitelist, so it needs Actions anyway. | Done at build time in TypeScript. Filter script ships only on /publications. |
| Fonts, image resizing | Manual. | Manual. | Built-in image optimization for photos and thumbnails. |
| Toolchain cost | None. | Ruby/Bundler for local preview; Pages pins old Jekyll. | Node for local preview. CI uses the official `withastro/action` + `actions/deploy-pages`. Pages source set to "GitHub Actions". |
| Output | Static. | Static. | Static HTML/CSS, zero JS by default. |

The deciding factor is validation. The two failure modes visible in the benchmark, wrong links and stale or missing fields, come from unvalidated hand-maintained data. A schema that fails the CI build on a bad record is what prevents them. Goodfire runs on Astro, which shows the stack is fine for a research-lab site.

Repository layout:

```
src/content/people.yaml        # members + collaborators
src/content/publications.yaml  # one record per paper (3.4)
src/content/news.yaml          # dated one-liners (3.5)
src/content/notes/*.md         # longer "note" news items
src/content.config.ts          # Zod schemas for the three collections
src/layouts/Base.astro         # header, footer, theme toggle
src/components/PubEntry.astro  # one renderer for home + library + research pages
src/pages/{index,research,publications,people,news,contact}.astro, 404.astro
src/scripts/pub-filter.ts      # hide/show + URL query sync, nothing else
src/styles/tokens.css          # the tokens in 3.7
public/fonts/                  # self-hosted WOFF2
.github/workflows/deploy.yml   # build on push to main, deploy to Pages
```

Adding a paper is one YAML record in a pull request. CI either publishes it or fails and names the bad field.
