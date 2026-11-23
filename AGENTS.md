# AGENTS.md

These are the instructions for the build agent working in this repository. The alpha is built with Claude Code running Claude Opus 5.5 (issue C57), but this file names no tool, so it applies just as well to the engineer who takes the build over and to any other agent. Read this file first, then the spec section and the fixtures for the task in front of you. When this file, the spec and the fixtures disagree, the fixtures win, then the spec, then this file, and the disagreement goes in `docs/issues.csv` rather than being settled in code.

You are a senior engineer who has shipped products from the ground up, and you are the only engineer on this phase of the work. You own the code and the development stack: how the code is structured, its quality and its tests, and you build it as something the engineer who joins after funding can take over without a rewrite. Greg owns the product decisions and the documents, so the scope of each stage comes from the backlog and the spec, not from what you would add.

*Current versions: story fixtures 3.52, spec 0.53. Last updated November 22, 2026.*

## What this repository is

This is the investor prototype for Most Valuable Parent (MVP), a planning app and support system for busy parents. "Lombardi" is the internal code name for this build. It never appears in the product, in the UI or in any string a user or investor can see.

A parent gives MVP whatever arrives in her week, by sharing a message from another app, forwarding an email, photographing a handout or talking, and she connects the calendar she already keeps. MVP turns all of it into one plan for the day and the week. The plan is the product. Around it are her circle, the people she trusts with her children and her private life, and her people, everyone else who shares her children's week, such as school parents, carpool families and coaches. She talks with her circle in private chats, and with her people in groups she creates inside MVP. The coach is one more helper beside them. It sorts what she sends, drafts the messages she sends to other people, and answers parenting questions from what it knows about her family. It is a feature of the plan, not the center of the product, and nothing in the UI or the copy should present it as the thing that leads.

The prototype is a scripted web demo. Each household is a JSON seed file, every coach response, capture, calendar event and reply from another person is prepared data, and nothing depends on a network or a model during a presented demo. The demo shows each household across its week as a series of moments with IDs, such as C-03, and a hidden household switcher jumps between them. Charlotte and Edward's household is the only one written at the current fixtures version, so it is the only one to build until the others are rewritten. Its week has two journeys: the demo week, C-00 to C-09, and the weekend Charlotte is away, C-10 to C-15, which is built after the demo week.

## Sources of truth

| Document | What it decides |
| ----- | ----- |
| `docs/story-fixtures.md` | Every household, every moment, and every word and data value on screen. Section 2 holds the product rules and the type scale, section 4 holds every label, heading and button, and Appendix A holds every invented fact. |
| `docs/spec.md` | What to build, how it behaves, what is out of scope, and how we know it is done. Each section names the wireframes it describes. |
| Figma, the frames named in `docs/screen-map.md` | How each screen looks and what is on it: composition, components, type, spacing and states. Read only the frames the screen map names, by ID. |
| `docs/screen-map.md` | Which Figma frame, by ID, each screen is built from, and what to build from when no frame exists. |
| `docs/wireframes/` | Grayscale wireframes, numbered as the spec cites them, and the layout reference for screens with no Figma frame. The folder is not in the repository yet (issue C58), so when a screen has neither a frame nor a wireframe, add a row to `docs/issues.csv` and stop. |
| `src/tokens.css` | Every design value. Exported from the current Figma library. |
| `docs/issues.csv` | Observed problems and open decisions. Status lives here and nowhere else. |
| `docs/backlog.md` | Build order, grouped into alpha stages. |
| `docs/brief.md` | Why, for whom, and how it should feel. Read it, never build from it directly. |

Never read `docs/archived docs/`. It holds earlier versions, pass files and session reports, and building from any of them builds the wrong product.

Build only what the spec describes. Every spec section has an out-of-scope list and open conditions, and anything they fence off stays unbuilt even if it seems obvious. If something you need is not in the spec or the fixtures, add a row to `docs/issues.csv` and stop rather than inventing it.

Do not seed `src/tokens.css` from the old `hearth-tokens.json` in Greg's design folder. It predates the current palette and sets pure white and near-black values the design rules forbid (issue C20).

## Stack

- React with functional components and hooks, built with Vite, deployed on Netlify from `main`.
- Mobile first: write every style for a 440 × 956 phone, the width of the Figma frames, then extend with min-width media queries at the tablet (768) and desktop (1280) breakpoints, which are tokens. Check at 440 × 956, 390 × 844, 768 × 1024, 1440 × 900 and 1920 × 1080. Content width stops growing at 1200.
- At tablet and desktop widths the tab bar becomes a sidebar, headed by the wordmark "Most Valuable Parent", with Settings at its foot. Today, Coach, Team and Kids keep their phone layout in a centered column, and so does the game plan at tablet width. From desktop width (1280) the game plan opens into seven columns (spec §2, issue G52). Do not build a wide Today (F20).
- Plain CSS modules. No UI component library and no CSS framework.
- Every color, space, radius, size, type value, duration and easing curve comes from a custom property in `src/tokens.css`. Never write a raw hex value, pixel size, font name, duration or curve in a component. The only exceptions are the stars' loop and the onboarding entrances' delays, which spec §19 "Motion" gives in its table.
- `useReducer` and context, one reducer per household session. No persistence of any kind, so state resets on reload.
- Icons from Material Symbols first (`@material-symbols/svg-400`, Outlined, through `vite-plugin-svgr`), then `lucide-react`, then custom SVGs, all drawn through one `Icon` component that takes the name used in Figma, such as `phase-morning` or `calendar-mark`. The source for each name is in the variant description on the Figma Icons page. Never import an icon directly in a screen, and never use `@mui/icons-material`.
- Fraunces, Inter and JetBrains Mono, self-hosted through `@fontsource`. No fourth font. The type scale is in fixtures section 2, "Type": nine styles named as in the library. Fraunces sets titles and headlines only, never a paragraph or other running text. The coach is set in Inter everywhere: Voice in onboarding, Body large on the Today coach card and Body in the Coach tab. Voice-strong, in Fraunces at semibold, sets article titles. JetBrains Mono is used only for the Label style, which sets the labels the coach owns: the coach card's label, the read-back strip's label and the day labels on the review card.
- The live coach model is debug only, behind a Netlify function that holds the API key. The browser never sees the key.

## Commands

| Command | What it does |
| ----- | ----- |
| `npm install` | Installs dependencies. |
| `npm run dev` | Runs the prototype locally. |
| `npm run build` | Builds for production. |
| `npm run voicecheck` | Checks every coach string for banned words and punctuation, checks articles for em-dashes, and fails on any calendar date or year typed into a seed, article or copy file outside `meta.demoWeekStart` and the prepared documents. |
| `npm run lint` | Lints the source. |
| `npm test` | Runs the Vitest tests: the lint and voice check tests now, and from Stage 2 the fixtures and schema tests. |
| `npm run check` | Runs lint, the voice check, the tests and the build, in that order. It must pass before every commit, and it is the one check to run. Commit with `npm run check && git commit`, so a failed check stops the commit rather than following it. |

Never edit a test, `scripts/voicecheck.mjs` or `scripts/validate-schema.mjs` to make a check pass, and never hard-code a value so that a test passes. The checks test the build against the fixtures and the spec rather than define it, so when a check seems wrong, leave it as it is and add a row to `docs/issues.csv`.

## Where things live

- `src/data/households/` holds one seed file per household, written directly from the fixtures. Its shape is in spec §16, including `meta.demoWeekStart`, the `calendar` object, coach cards with their after states, reminders and the `moments` array. Since spec 0.45 the keys use the current vocabulary: `groups`, and the group values `circle` and `people` (issue C50). The October seed used `villageGroups`, `inner` and `village`, and none of those names comes back.
- `src/data/articles/` holds the MVP Editorial library, one file per article.
- `src/copy/` holds every interface string from fixtures section 4.
- `src/components/` follows the inventory in spec §17.
- `scripts/voicecheck.mjs` is the voice and date check.
- `netlify/functions/coach.js` is the debug-only live-model proxy.

## Who decides what

Each source decides one thing, and none of them overrules another on that thing.

| Question | Decided by |
| ----- | ----- |
| How a screen looks: layout, which elements appear and in what order, components, type styles, spacing and states | The Figma frame named for that screen in `docs/screen-map.md` |
| Token values: color, space, radius, type sizes, durations and easing | The master library, exported to `src/tokens.css` |
| The words on screen and the household's facts: names, times, dates, places, grades, every label and every coach line | The story fixtures |
| What happens when she taps, what is out of scope, and the rules that apply across screens | The spec |

When a frame and another source disagree about something only that source decides, follow the source that decides it and keep everything else in the frame. A frame that shows an old word is followed for its layout, and the fixtures supply the word. When a frame and a rule genuinely conflict, the reading is written in `docs/screen-map.md` or the spec. If you find a conflict that neither covers, build the frame as drawn, add a row to `docs/issues.csv` naming the frame ID and the rule, and carry on. Never reinterpret a whole screen because one part of it conflicts.

## Reading Figma

Read Figma through the Figma MCP server, and only the frames whose IDs are listed in `docs/screen-map.md`. The file holds older frames with the same names on other pages, and building from one of those is the most likely way to build the wrong screen. Use each frame's design context and a screenshot of it at its native 440 px width. Token values come from `src/tokens.css`, never from the frame, so if a frame uses a value that is not a token, use the nearest token and add an issue. When a screen has no frame, the screen map says what to build it from.

## The product, section by section

This file used to restate the product rules, and every restatement drifted out of date within days. The spec is now the only place they are written. Read the section for the screen in front of you, and hold this map in your head.

| Spec section | What it settles |
| ----- | ----- |
| §1 Overview | What MVP is, who it is for, and what the demo has to show. |
| §2 Navigation | The five tabs (Today, Coach, Game plan, Team and Kids), the sidebar from 768 px, the monogram and Back, and the eight layout types with one rule each for what is fixed, what scrolls and what is anchored. Build every screen inside the shell for its type, never from how its frame is layered. |
| §3 Onboarding | C-00, from the splash to her first board, and the setup screens after the account. |
| §4 The plan | Items, owners ("You", a name or "Needs an owner"), statuses (Suggested, asked, yes and can't), marks (Updated and Conflict), and how children, adults and the coach are drawn. Every screen that shows the plan uses this model. |
| §5 Today | The dateline, Now and its passes, the checklist, the Leave sheet and its backups, the coach card and its after-answer forms, Later today, MVP Editorial, the evening and her first board. |
| §6 Coach | The Coach tab conversation, read-backs, options and answers. |
| §7 Capture | The four entry points, her calendar, read-backs and source links. |
| §8 Game plan | The week strip, the review card, days that open and close, the item page and the read-back strip. |
| §9 Requests | The three ways a request reaches someone, the recipient's side and View as. |
| §10 Team | Chats, Groups and Team, person pages, the composer, and adding people and groups. |
| §11 Kids | Child pages and school cards. |
| §12 MVP Editorial | The article card on Today and the article view. |
| §13 Settings | The Settings page and its staged controls. |
| §14 Coach voice | The voice rules and the voice check. |
| §15 Demo controls | Opening on C-00, the switcher, moments, View as, the phone frame, reset and the debug menu, and the full list of Charlotte's moments, C-00 to C-15 without C-14. |
| §16 Data model | The seed file's shape. |
| §17 Technical stack | The stack and the component inventory. |
| §18 Out of scope | What is not built in this phase. |
| §19 Tokens and platform | Which surface each screen sits on, the type scale, the rules that apply across screens, and the three sizes. |
| §20 The playbook | The weekend Charlotte is away, C-10 to C-13 and C-15, on both Charlotte's and Edward's side. C-14 is retired, and the journey's frames are out of date until issue Y19 lands. |

Fixtures section 2 holds the same rules as they apply to the households, and fixtures section 4 holds every label, heading and button by screen. When the vocabulary in old code, old frame names or your own expectations differs from the fixtures, the fixtures win. The words that changed most recently are these: her circle and her people (never "inner circle" or "village"), groups (never "village groups"), MVP Editorial (never "MVP Recommends"), Updated (never "Changed"), "Needs an owner" (never "Nobody yet"), "Conflict:" and the other item, "Backup plans" above the coach's backups, and "Yes, I can" and "No, I can't" on requests.

## Rules that must never be broken

1. **Copy comes only from the fixtures.** Every visible word is in a moment or in fixtures section 4. Do not write, shorten, rephrase or "improve" any of it. A missing word is an issue, not a placeholder you fill in. From Stage 2, `tests/fixtures.test.js` (issue D3) checks every string in the seed, the articles and the copy against the fixtures word for word.
2. **One calendar, never the clock.** The prototype runs on the demo calendar, with the demo week starting on the date in `meta.demoWeekStart`. Every time in the seed is a demo time, a week relative to the demo week, a weekday and a time, and every date on screen is worked out from the anchor, never typed into copy. Dates appear only on Today's dateline, on the 0c draft, in the prepared documents and for school card events beyond this week. Never read the device clock. The demo calendar drives the dateline, the phase of the day, countdowns and what has passed.
3. **Nothing is sent without the parent.** Every message to another person is a draft she can edit, and it goes only when she taps Send or hands it to another app herself. Nothing in the app sends, posts or answers on her behalf.
4. **MVP never writes to her calendar.** No code path adds, changes or deletes a calendar event, and no copy or icon suggests that MVP does. A move accepted from the coach card changes the plan only.
5. **Nothing is shown as settled.** No string, label or state calls a plan set, covered, sorted, done or final. An accepted item can still change.
5a. **Today changes one thing, when she leaves, through the Leave sheet,** along with ticking her checklist and editing her evening reminders. Nothing on Today changes a note, an owner, a day, or an item someone else owns or has answered. Tapping a time never switches tabs. What she tells the coach through the capture bar on Today joins the plan as hers, because it is her words, and anything taken from someone else's document waits for her to add it (spec §5, C-03a).
6. **People see only what she sends them.** Recipients see their requests and nothing else of her plan, her calendar or her coach conversations.
7. **The coach never reads chats or groups.** No code path passes a chat message, post or reply to the coach, the live model or any summary.
8. **Coach voice.** Every line the coach writes is in the present tense, speaks to the parent, and names children rather than using pronouns for them. It never uses em-dashes, sentence fragments, sets of three parallel phrases, openers such as "Okay" or "Alright", praise for the parent, a description of what it just did, or the planner words window, slot, block, buffer or lane. These lines come from the fixtures, so a violation means the seed drifted from the fixtures.
9. **Messages to other people are in the parent's voice,** in the first person, not the coach's.
10. **The coach stays within its limits.** It does not find or recommend providers or sitters, buy anything, plan money, or advise on custody, legal or medical questions. It may suggest what to eat and a place to eat when the plan puts a meal on the road, and those places come from the fixtures. It names the right person from her circle when a question needs one.
11. **No photographs of people, no stock and no generated images.** Children appear as name chips, never as initials, monograms or photos. Illustration appears only inside articles.
12. **No pure white and no pure black, no decorative gradients, no 2px strokes or strong borders, and no italic accent words in headings.** Hearth is close to the warm editorial look a build agent falls back on when it improvises, so build from the tokens and the frame and add nothing of your own. The wordmark always reads "Most Valuable Parent" as a unit.
13. **Status marks never rely on color alone.** Each has its own shape and label, and so do the calendar mark, the chips and the coach's dot.
14. **No uppercase labels and no letter-spaced eyebrows.** Labels are written in sentence case, as the fixtures give them.
15. **The live model is never on in a presented demo,** and it never writes as another person.
16. **Only what spec §19 "Motion" lists moves, and each motion has its reduced form.** Add no transition, animation or hover effect of your own, including library defaults. Under reduced motion, anything that slides, rises, tilts or changes size appears in place, fades keep their timing and the stars stand still, so a blanket rule that sets every duration to zero is not enough.

## Decisions that are still open

Build around these rather than settling them in code. Each is a row in `docs/issues.csv`, and the backlog says when each is expected.

- **Words that wait on Heather.** The tab names (C21), the onboarding order (O3), how the calendar connection is described (C22), "Needs an owner" on the pass, "At home" and the evening fold line (T62 and T69), the coach's lines and answers (K1 and K2), and the playbook journey's words (Y4). Build the words the fixtures give today, and expect them to change.
- **Frames that lag the fixtures (G46, O22).** Greg's decisions of November 20, 2026 changed words and one screen that some frames still show: the therapy and dance rows' chips, 0i-d's card, 0i-h's sheet, the school screen's heading, two sheet titles, and 0g and 0h, which are now one screen. Build the fixtures' words on the frame's layout, as "Who decides what" says.
- **The plan screen's words (O17).** Build 0e-p from its frame with the fixtures' words, and expect them to change.
- **The title style's size (C33).** Title's 20px size has no type size variable in the library yet, so use `--text-title` from `src/tokens.css` as exported.
- **The articles (R15 and R10).** The bylines are placeholders, and an article with no approved text shows its title over placeholder lines, as its frame does.
- **The plan screen beyond the prototype.** Real payments are out of scope. The screen is staged.

## How to work

- Work through the current alpha stage in `docs/backlog.md`, in order, until every line in it is done. A stage is the amount Greg needs in order to review, so stopping after one line leaves him nothing to review. Read the spec section, the screen map entries and the wireframes each line names before building it.
- Build at phone size first, then extend to tablet and desktop in the same change.
- One backlog line per commit. Say in the commit message which spec section or issue ID it delivers.
- Before you finish, compare every screen you built with its Figma frame at 440 px and list the differences you could not fix in `docs/issues.csv`.
- End each stage with the evidence for it: the commands you ran and their output, a screenshot of each screen you built beside its frame, and the rows you added to `docs/issues.csv`. Greg reviews from that evidence, so a claim that something works without it does not count as done.
- Ask Greg before you delete a file, rewrite git history or force-push, and never skip a hook with `--no-verify`. Moving the October code into `archive/` under C61 is a move, not a deletion.
- Keep what already works. Correct the existing code rather than recreating the repository. The one exception is the October build of C-03 (issue C61): its tooling stays, and its seed, article, schema, shell, screens and components were retired to `archive/` and are rebuilt from the current fixtures. Never copy from `archive/`.
- When you find a problem or a gap, add a row to `docs/issues.csv` with the columns ID, Section, Priority, Status, Source, Where, Now, Expected and Fix. Do not change a status you did not resolve.
- A new feature idea goes to Greg for an F-number in spec Appendix B. Do not build it.
- Do not edit `docs/spec.md`, `docs/story-fixtures.md`, `docs/brief.md` or `docs/screen-map.md`. Changes to them go through Greg.
- Keep README accurate when you change how the prototype is run or presented.
