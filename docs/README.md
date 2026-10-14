# Most Valuable Parent: investor prototype

This repository holds the web prototype of Most Valuable Parent (MVP), a planning app and support system for busy parents. It exists to raise a funding round. It is a scripted demonstration rather than a working beta: every coach response, every capture and every reply from another person comes from prepared data, so the demo behaves the same way every time and never waits on a network or a model.

If you are the engineer inheriting this, start with `docs/spec.md`, then `docs/story-fixtures.md`, then `AGENTS.md`, which is what Codex reads before working here.

## What the demo shows

The demo follows each household across a stretch of its week as a series of moments, each with an ID such as C-03 for Charlotte's third. Within a household the moments run in order, so the presenter can show the same plan changing over several days: a newsletter arriving, a request going to Edward, two girls getting out the door, a pickup reopening when Edward's Thursday changes, and a question asked once the house is quiet.

The demo shows days of the week only and no calendar dates, so it can be presented in any week. It never reads the device clock.

Charlotte and Edward's household is built from fixtures version 3.6. Calypso, Alexandra and Ben, and Marcus are added when their fixtures are rewritten.

## Running it

```
npm install
npm run dev
```

Before committing, run `npm run build`, `npm run lint` and `npm run voicecheck`. The voice check reads every coach line in the seed files for the house voice rules, and fails on any calendar date anywhere in the seed, the articles or the interface copy.

The prototype deploys to Netlify from `main`. The debug-only live model needs an API key in the Netlify environment, and the demo never uses it.

## Presenting it

Open the app on a laptop or a 1920 × 1080 display. The hidden household switcher (spec §15) lets you choose a household, jump to any moment by ID, see a moment from the recipient's side with View as, show the app in a phone frame or at full width, and reset a household before the next run. Each moment opens in exactly the state the fixtures describe, whatever was tapped before, so you can jump straight to any of them.

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
| `docs/wireframes/` | Grayscale wireframes, numbered as the spec cites them. |
| `docs/design/` | Frames exported from Figma for the screen being built. |
| `src/tokens.css` | Every design value, exported from Figma. |
| `src/data/households/` | One JSON seed file per household. |
| `src/data/articles/` | The MVP Recommends articles. |
| `src/copy/` | Every interface label, heading and button. |
| `scripts/voicecheck.mjs` | The voice and date check. |
| `netlify/functions/coach.js` | The debug-only live-model proxy. |

## Changing things

Content changes start in the fixtures, then move into the seed files, so the two never drift. Behavior changes start in the spec. A new feature idea gets an F-number in the spec's Appendix B before anything else happens to it, and an observed problem gets a row in `docs/issues.csv`. Status lives only in the issues file, and the backlog holds order only.

## Stack

React and Vite on Netlify, plain CSS modules with every value in `src/tokens.css`, Material Symbols and Lucide icons drawn through one `Icon` component, and Fraunces, Inter and JetBrains Mono self-hosted through `@fontsource`. There is no backend, no database and no persistence: all state lives in the running app and resets on reload. The prototype is built with OpenAI Codex, working from `AGENTS.md`.
