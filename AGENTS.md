# AGENTS.md

These are the instructions for Codex working in this repository. Read this file first, then the spec section and the fixtures for the task in front of you. When this file, the spec and the fixtures disagree, the fixtures win, then the spec, then this file, and the disagreement goes in `docs/issues.csv` rather than being settled in code.

*Current versions: story fixtures 3.10, spec 0.11. Last updated October 13, 2026.*

## What this repository is

This is the investor prototype for Most Valuable Parent (MVP), a planning app and support system for busy parents. "Lombardi" is the internal code name for this build. It never appears in the product, in the UI or in any string a user or investor can see.

A parent gives MVP whatever arrives in her week, by sharing a message from another app, forwarding an email, photographing a handout or talking, and she connects the calendar she already keeps. MVP turns all of it into one plan for the day and the week. The plan is the product. Around it are her inner circle, the people she trusts with her children, and her village, the other parents who share her children's week, whom she talks with in village groups inside MVP. The coach is one more helper beside them. It sorts what she sends, drafts the messages she sends to other people, and answers parenting questions from what it knows about her family. It is a feature of the plan, not the center of the product, and nothing in the UI or the copy should present it as the thing that leads.

The prototype is a scripted web demo. Each household is a JSON seed file, every coach response, capture, calendar event and reply from another person is prepared data, and nothing depends on a network or a model during a presented demo. The demo shows each household across its week as a series of moments with IDs, such as C-03, and a hidden household switcher jumps between them. Charlotte and Edward's household is the only one written at the current fixtures version, so it is the only one to build until the others are rewritten.

## Sources of truth

| Document | What it decides |
| ----- | ----- |
| `docs/story-fixtures.md` | Every household, every moment, and every word and data value on screen. Section 2 holds the product rules, section 4 holds every label, heading and button, and Appendix A holds every invented fact. |
| `docs/spec.md` | What to build, how it behaves, what is out of scope, and how we know it is done. Each section names the wireframes it describes. |
| `docs/wireframes/` | Grayscale wireframes, one per screen, numbered as the spec cites them. Layout reference, not visual design. |
| `docs/design/` | Frames exported from Figma for the task at hand. Visual reference. |
| `src/tokens.css` | Every design value. Exported from the current Figma variables. |
| `docs/issues.csv` | Observed problems and open decisions. Status lives here and nowhere else. |
| `docs/backlog.md` | Build order. Take the next line, build it, and stop. |
| `docs/brief.md` | Why, for whom, and how it should feel. Read it, never build from it directly. |

Build only what the spec describes. Every spec section has an out-of-scope list and open conditions, and anything they fence off stays unbuilt even if it seems obvious. If something you need is not in the spec or the fixtures, add a row to `docs/issues.csv` and stop rather than inventing it.

Do not seed `src/tokens.css` from the old `hearth-tokens.json` in Greg's design folder. It predates the current palette and sets pure white and near-black values the design rules forbid (issue C20).

## Stack

- React with functional components and hooks, built with Vite, deployed on Netlify from `main`.
- Mobile first: write every style for a 390 × 844 phone, then extend with min-width media queries at the tablet (768) and desktop (1280) breakpoints, which are tokens. Check at 390 × 844, 768 × 1024, 1440 × 900 and 1920 × 1080. Content width stops growing at 1200.
- Plain CSS modules. No UI component library and no CSS framework.
- Every color, space, radius, size and type value comes from a custom property in `src/tokens.css`. Never write a raw hex value, pixel size or font name in a component.
- `useReducer` and context, one reducer per household session. No persistence of any kind, so state resets on reload.
- Icons from Material Symbols first (`@material-symbols/svg-400`, Outlined, through `vite-plugin-svgr`), then `lucide-react`, then custom SVGs, all drawn through one `Icon` component that takes the name used in Figma, such as `phase-morning` or `calendar-mark`. The source for each name is in the variant description on the Figma Icons page. Never import an icon directly in a screen, and never use `@mui/icons-material`. The five tab icons are the exception to that order: Today, Coach and Team use Lucide, and Game plan and Kids use custom drawings, so the tab bar reads as one set.
- Fraunces, Inter and JetBrains Mono, self-hosted through `@fontsource`. No fourth font. Fraunces is for headlines and titles, and for the coach on the Today coach card and in onboarding, in the `voice` style. In the coach chat, the coach is set in Inter. JetBrains Mono is for card and alert labels, in `meta-strong`.
- The live coach model is debug only, behind a Netlify function that holds the API key. The browser never sees the key.

## Commands

| Command | What it does |
| ----- | ----- |
| `npm ci` | Installs the locked dependencies. |
| `npm run dev` | Runs the prototype locally. |
| `npm run build` | Builds for production. Must pass before any commit. |
| `npm run voicecheck` | Checks every coach string for banned words and punctuation, checks articles for em-dashes, and checks every seed, article and copy file for calendar dates. Must pass before any commit that touches `src/data/` or `src/copy/`. |
| `npm run lint` | Checks JavaScript/JSX and React hook usage. Must pass before any commit. |
| `npm test` | Runs the automated checks, including voicecheck regression tests. |
| `npm run check` | Runs lint, voicecheck, tests and the production build. |
| `npm run voicecheck -- --require-content` | Also fails if any content directory is empty. Use once seeds, articles and copy exist. |

## Where things live

- `src/data/households/` holds one seed file per household, written directly from the fixtures. Its shape is in spec §16, including the `calendar` object and the `moments` array.
- `src/data/articles/` holds the MVP Recommends library, one file per article.
- `src/copy/` holds every interface string from fixtures section 4.
- `src/components/` follows the inventory in spec §17.
- `scripts/voicecheck.mjs` is the voice and date check.
- `netlify/functions/coach.js` is the debug-only live-model proxy.

## Getting design context from Figma

Codex may read Figma directly through the connected Figma MCP server. The reference file is https://www.figma.com/design/RK2JTfwao4mV4JgUA193M1/mvp-lombardi?node-id=21-805. Inspect the relevant frames, components and variables for each task. Visual values come from the master library, https://www.figma.com/design/A3SHbWiO5cyRDtIZ9sNNz7/mvp-design-library, and Today's visual reference is frame 2486:1078 in the reference file. `docs/design/token-mapping.md` records how the library maps to code. This older file supplies visual references; the current fixtures and spec govern content and behavior, and the current wireframes govern structure. Do not reintroduce retired features or copy from the older design.

Export approved variable values into `src/tokens.css` and save useful frame snapshots under `docs/design/`, named by wireframe number with their Figma node references. Figma is a build-time source only; the app must never depend on MCP or Figma at runtime. If a required token is missing, inspect the relevant Figma variables first, then record any unresolved design choice rather than guessing. Reading Figma does not authorize changing the Figma file.

## The product in brief

Read the spec section for the details. This is the shape you should hold in your head while building.

**Navigation (spec §2).** Five tabs: Today, Coach, Game plan, Team and Kids. On a phone they sit at the bottom, and from tablet width up they become a left sidebar headed "Most Valuable Parent". Settings opens from the parent's avatar, an outlined circle with her initial (`AdultAvatar`), at the top right of every tab, and from the bottom of the sidebar at wider sizes. A page opened inside a tab, such as a child page, a school card, an article or a draft, shows Back in place of the avatar.

**Onboarding (spec §3).** Before any account: splash (0s), welcome with first name and zip code (0w), who she is planning for (0k), show me one thing (0a), check the photo (0v), reading (0r), the read-back with the child confirmation, one question and the hand-off (0b), making the draft (0t), and the draft with the account prompt (0c). Setup, with a counter from 01 of 05 to 05 of 05: create your account (0e), connect your calendar (0q), schools (0f), household (0g) and who else helps (0h). Then getting ready (0p), the coach's introduction (0j) and her first board on Today (0i). The first draft covers the rest of this week, and she starts it herself with "Make Mallory's plan". Nothing before the account is kept if she leaves.

**The plan (spec §4).** Every item has an owner ("You", a name, or "Nobody yet"), at most one status (Suggested, Asked, yes, can't, always naming the person, such as "Asked Edward" or "Edward: yes"), and two possible marks (Changed and Conflict, shown as "Conflicts with" and the other item). An item shows the time the thing itself starts, such as ballet at 4:15 pm, and departures on Today show when to leave, such as 3:55 pm. A change she makes herself is never flagged back to her.

**Today (spec §5).** Today shows the current day only. The day of the week and her avatar sit on one row, and the title below it names the phase of the day ("This morning", "This afternoon" or "Tonight", each with its icon). The next departure leads with a countdown and a going with list, each person has a row through the day, and one coach card holds the most useful open decision, which is the only thing on Today that may concern another day. The coach card carries the coach's fill, outline and dot, and a Coach Alert can sit at the top of the board (T3). Tonight turns to "Ready tonight" and "Tomorrow starts". At most one MVP Recommends card appears, with a reason line beginning "Because". An Add button floats above the tab bar.

**Capture (spec §7).** Four entry points (the share menu, the forwarding address, the camera and her voice) and one connection (her calendar). Every capture gets a short read-back, at most one question, new items as Suggested, and a source link such as "From the Cedar Grove newsletter · Sunday". The capture bar on the Coach tab has camera, attach and microphone, and the microphone becomes an arrow labeled "Give this to the coach" while the field holds typed text. There is no Send on the capture bar. Sharing, forwarding and photographing are staged in the prototype.

**Her calendar (spec §7).** She connects Google Calendar, Apple Calendar or Outlook on setup screen 0q. MVP reads her calendar and never adds, changes or deletes anything in it. Calendar items come into the plan owned by her with no status, carry the calendar mark on Today, in the game plan and on child pages, and show the source link "From your Google Calendar". They cannot be dragged in the game plan, which says "Change this in Google Calendar." instead. A new or moved calendar event that runs into the plan gets the Conflict mark and becomes the coach card, as in C-06b. The connection and the permission screen are staged in the prototype.

**Game plan (spec §8).** The whole week, including routine items, with "This week's changes" at the top. Routine items are quieter unless they carry a status or a mark. She can drag an item to another time or day, add a note, or put someone's name against it to send a request.

**Requests (spec §9).** A request reaches someone as a card in their own MVP, as a text message with a link to a single web page for someone without MVP, or as text handed to another app. Each item on a request is answered on its own with "I've got it" or "I can't do this", and the person can add a note and change an answer later. A note never edits her plan: a "can't" reopens the item and the coach offers options, and a note on a "yes" shows under the item with the Changed mark. Every answer and changed answer reaches her as a notification and a status. There are no read receipts. Every handoff to another app leaves a task on her list until she ticks it off.

**Team (spec §10).** The inner circle, the village and village groups, with "On MVP" after anyone who has it. Posts are text only, and the coach never reads them.

**Kids (spec §11).** A page for each child and a card for each school. Cards are kept current from what she captures, mark what changed and keep the earlier version.

**MVP Recommends (spec §12).** Short articles by MVP staff, never generated, with a staff byline. No tab, no library and no sharing in this build.

**Demo controls (spec §15).** The household switcher jumps between households and moments, shows a moment from the recipient's side with View as, switches the phone frame and resets. The debug menu holds the live-model toggle. Charlotte's moments are C-00 to C-08, including C-05b and C-06b.

## Rules that must never be broken

1. **Copy comes only from the fixtures.** Every visible word is in a moment or in fixtures section 4. Do not write, shorten, rephrase or "improve" any of it. A missing word is an issue, not a placeholder you fill in.
2. **No dates.** The prototype shows days of the week only. The seed holds demo times as a week relative to the demo week, a weekday and a time, and never a calendar date, a month name or a year. Never read the device clock. The demo time drives the phase of the day, countdowns and what has passed.
3. **Nothing is sent without the parent.** Every message to another person is a draft she can edit, and it goes only when she taps Send or hands it to another app herself. Nothing in the app sends, posts or answers on her behalf.
4. **MVP never writes to her calendar.** No code path adds, changes or deletes a calendar event, and no copy suggests that MVP does.
5. **Nothing is shown as settled.** No string, label or state calls a plan set, covered, sorted, done or final. An accepted item can still change.
6. **People see only what she sends them.** Recipients see their requests and nothing else of her plan, her calendar or her coach conversations.
7. **The coach never reads village groups.** No code path passes a post or reply to the coach, the live model or any summary.
8. **Coach voice.** Every line the coach writes is in the present tense, speaks to the parent, and names children rather than using pronouns for them. It never uses em-dashes, sentence fragments, sets of three parallel phrases, openers such as "Okay" or "Alright", praise for the parent, a description of what it just did, or the planner words window, slot, block, buffer or lane. These lines come from the fixtures, so a violation means the seed drifted from the fixtures.
9. **Messages to other people are in the parent's voice,** in the first person, not the coach's.
10. **The coach stays within its limits.** It does not find or recommend providers or sitters, buy anything, plan money, or advise on custody, legal or medical questions. It names the right person from her inner circle when a question needs one.
11. **No photographs of people, no stock and no generated images.** Children appear as monograms, except in plan rows, where they appear as name chips (`ChildChip`). Illustration appears only inside articles.
12. **No pure white and no pure black,** and the wordmark always reads "Most Valuable Parent" as a unit.
13. **Status marks never rely on color alone.** Each has its own shape and label, and so does the calendar mark.
14. **The live model is never on in a presented demo,** and it never writes as another person.

## Decisions that are still open

Build around these rather than settling them in code. Each is a row in `docs/issues.csv`.

- **Read-only calendar (A6).** The spec assumes MVP reads her calendar and never writes to it. Writing back is parked as F18.
- **The switcher and debug menu triggers (X1).** The spec proposes a long press on the parent's avatar or a keyboard shortcut.
- **The school screen's heading (O11).** It reads "Who's on your calendar?" until Greg decides.
- **Tab names (C21), the onboarding order (O3) and the calendar's positioning (C22)** need Heather's sign-off, and the copy may change.
- **The invented email domains (C19)** must be checked or replaced before the seed is written.

## How to work

- Take the next line in `docs/backlog.md`, read the spec section and wireframes it names, and build that and nothing else.
- Build at phone size first, then extend to tablet and desktop in the same change.
- One backlog line per commit. Say in the commit message which spec section or issue ID it delivers.
- When you find a problem or a gap, add a row to `docs/issues.csv` with the columns ID, Section, Priority, Status, Source, Where, Now, Expected and Fix. Do not change a status you did not resolve.
- A new feature idea goes to Greg for an F-number in spec Appendix B. Do not build it.
- Do not edit `docs/spec.md`, `docs/story-fixtures.md` or `docs/brief.md` unless Greg requests or authorizes those changes.
- Keep README accurate when you change how the prototype is run or presented.