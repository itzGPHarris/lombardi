# Most Valuable Parent: investor prototype

This repository holds the web prototype of Most Valuable Parent (MVP), a planning app and support system for busy parents. It exists to raise a funding round. It is a scripted demonstration rather than a working beta: every coach response, every capture and every reply from another person comes from prepared data, so the demo behaves the same way every time and never waits on a network or a model.

If you are the engineer inheriting this, start with `docs/spec.md`, then `docs/story-fixtures.md`, then `AGENTS.md`, which is what the build agent reads before working here.

## What the demo shows

The demo follows each household across a stretch of its week as a series of moments, each with an ID such as C-03 for Charlotte's third. Within a household the moments run in order, so the presenter can show the same plan changing over several days. The presenter can show a newsletter arriving, a request going to Edward, and two girls getting out the door. Later in the week a pickup reopens when Edward's Thursday changes, and a question is asked once the house is quiet. A second journey follows the next week, when Charlotte goes away for a weekend and hands it to Edward in a weekend playbook (C-10 to C-13 and C-15).

The demo runs on a fixed calendar, with the demo week starting on Monday, Oct. 12, 2026, and Charlotte's first night on Monday, Oct. 5. Today's dateline shows the date, and everything else names the day of the week. The prototype never reads the device clock, so it behaves the same way whenever it is presented. The demo week's Monday is held in one place, `meta.demoWeekStart` in each seed file, and changing it moves the whole demo to another week. There is no set presentation date, so leave it alone before a pitch: the demo stays in its October week and tells its story in days of the week and times of day. Move it only to take the whole demo to a new season, such as a school break or the spring.

Charlotte and Edward's household is built from fixtures version 3.48 and spec v0.48. Calypso, Alexandra and Ben, and Marcus are added when their fixtures are rewritten.

## Running it

```
npm install
npm run dev
```

During development, `/?shell=today` (or `tab-list`, `page`, `conversation`, `composer`, `onboarding`, `sheet` or `still`) draws each empty layout shell for comparing with its reference board, and `&scrolled=1` shows it scrolled. The gallery is left out of production builds.

Before committing, run `npm run check`, which runs the linter, the voice check, the tests and the build in that order. The voice check reads every coach line in the seed files for the house voice rules. It also fails on any calendar date typed into the seed, the articles or the interface copy, because dates on screen are worked out from the demo calendar. Since Stage 2 the check also fails if the seed, the articles or the copy folder is empty, and the tests include the fixtures test, which fails on any displayed word that is not in `docs/story-fixtures.md`, and the leaving time test.

The prototype deploys to Netlify from `main`. The debug-only live model needs an API key in the Netlify environment, and the demo never uses it.

## Presenting it

Open the app on a laptop or a 1920 × 1080 display. The prototype opens on Charlotte's onboarding at the splash. The hidden household switcher (spec §15) opens from a long press on the parent's monogram. On a screen without one, such as the splash, onboarding, a composer or a chat, long-press the screen or its top bar instead (issue X4). The switcher lets you choose a household, jump to any moment by ID, see a moment from the recipient's side with View as, show the app in a phone frame or at full width, and reset a household before the next run. Each moment opens in exactly the state the fixtures describe, whatever was tapped before, so you can jump straight to any of them.

At full width, Today, Coach, Team and Kids keep their phone layout in a centered column beside the sidebar. The phone frame is the better way to show them.

Never turn on the live model in the debug menu during a presented demo. It needs a network connection and adds wait time.

The presenter script is a separate document. It refers to moments by ID and is written once the prototype runs, so its timings are measured rather than promised.

## Where things live

| Path | What it holds |
| ----- | ----- |
| `docs/spec.md` | What to build and how we know it is done. The source of truth for behavior. |
| `docs/story-fixtures.md` | Every household, every moment and every word on screen. The source of truth for content. |
| `docs/brief.md` | Why, for whom and how it should feel. |
| `docs/issues.csv` | Problems and open decisions, with their status. |
| `docs/backlog.md` | The build order. |
| `docs/wireframes/` | Grayscale wireframes, numbered as the spec cites them. Not in the repository yet (issue C58). |
| `docs/screen-map.md` | Which Figma frame each screen is built from, by frame ID. |
| `docs/archived docs/` | Pass files, earlier versions and session reports. Never read for the build. |
| `src/tokens.css` | Every design value, exported from Figma. |
| `src/data/households/` | One JSON seed file per household. |
| `src/data/articles/` | The MVP Editorial articles. |
| `src/copy/` | Every interface label, heading and button. |
| `scripts/voicecheck.mjs` | The voice and date check. |
| `netlify/functions/coach.js` | The debug-only live-model proxy. |

## Changing things

Content changes start in the fixtures, then move into the seed files, so the two never drift. Behavior changes start in the spec. A new feature idea gets an F-number in the spec's Appendix B before anything else happens to it, and an observed problem gets a row in `docs/issues.csv`. Status lives only in the issues file, and the backlog holds order only.

## Stack

React and Vite on Netlify, plain CSS modules with every value in `src/tokens.css`, Material Symbols and Lucide icons drawn through one `Icon` component, and Fraunces, Inter and JetBrains Mono self-hosted through `@fontsource`. JetBrains Mono sets one thing, the labels the coach owns, such as the coach card's label. There is no backend, no database and no persistence: all state lives in the running app and resets on reload. The alpha is built with Claude Code running Claude Opus 5.5. The documents call whoever writes the code the build agent, and it works from `AGENTS.md`, which Claude Code reads through `CLAUDE.md`.
