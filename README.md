# Most Valuable Parent

The first working investor-prototype slice opens directly to **C-03**, Charlotte's
Monday morning at **7:25 am**. It is entirely scripted, with state held in memory.
No accounts, backend, live AI, messaging services or calendar integrations run.

## Run and review

Use Node 22.13.1 (`nvm use`, if installed) and npm:

```sh
npm ci
npm run dev -- --host 127.0.0.1
```

Open the local URL printed by Vite. To start in the phone frame, append
`?frame=phone`. Otherwise the app uses its responsive layout.

Try this sequence:

1. Tick Alexis's library book and water bottle. Each going-with item is independent.
2. Open presenter controls with **Ctrl+Shift+D**, or hold Charlotte's **C** monogram
   for about two-thirds of a second. A short click opens Settings.
3. Choose **7:40 am**, then **Back**. Alexis's departure leaves and Mallory's moves
   up with **in 35 min**. Time advances only through this scripted control.
4. Choose **See reply**, edit the draft if desired, and choose **Send from WhatsApp**.
   A generic, entirely local WhatsApp stage opens. Wednesday's carpool now belongs
   to **You**, with no status or Changed mark, and an unchecked reply task exists.
5. Tap **Send** in the staged screen, then **Game plan**. Tick **Reply to the parents'
   group** yourself. The simulated send never marks the task automatically.
6. Return to **Today** and open the conference article. The full staff-written
   article and byline come directly from the fixtures. **Back** returns to Today.
7. Presenter **Reset** or **C-03** restores the initial data, draft, checks, clock,
   open screen and scroll position. The chosen phone/responsive presentation mode
   remains a presenter preference in memory. Reload restores all defaults.

**Not this week** dismisses the coach card without taking the carpool. Its owner
remains Nobody yet. Reset brings the decision back. The Wednesday link opens the
same small Wednesday plan screen before or after the handoff.

No interaction opens a real messaging app or sends anything externally. The
WhatsApp stage is a simulation for presenting the decision and its consequences.

## Scope boundary

This slice includes Today C-03, shared navigation and plan pieces, Wednesday's
read-only plan items, the editable carpool reply and staged handoff, the conference
article, a Settings heading list, and presenter time/reset/layout controls.

Coach, Team and Kids tabs are visibly disabled. Add opens the fixture-defined
sheet, whose three capture choices are visibly disabled. Their full flows, plan
editing, other days and moments, View as, onboarding, live AI and deployment are
not implemented. Nothing claims a real message has reached another person.
The seed omits school contact/email data, so C19 remains open before that work.

Presenter trigger X1 and coach-signal decision T3 remain open for design sign-off.
The provisional trigger is documented above. The coach card uses the current
library's role token plus its icon and day heading, so changing the signal is local.

## Sources and design

Read root `AGENTS.md` first. Fixtures v3.9 own exact content; current spec v0.10
owns behavior; the current wireframes own structure; the master Figma library
owns visual values. `docs/brief.md` provides intent. Do not rewrite those source
documents without authorization. Status lives in `docs/issues.csv`; the backlog
retains work still required beyond C-03.

[Design mapping](docs/design/token-mapping.md) documents the inspected Figma nodes,
all variable aliases/values, icon mappings, reference PNGs, and implementation
layout constraints. The current palette and coach typography are verified, not
assumed from an earlier conflict report. Runtime assets and fonts are all local.

The tablet/desktop board has a full-day timeline, horizontally scrollable at
narrow tablet widths. The scroll region is keyboard-focusable. Phone rows retain
all four named periods. Visible names, monograms, stop shapes and labels preserve
meaning without relying on color. Interactive targets are at least 44px.

## Structure

- `src/tokens.css`: verified Figma export plus documented platform geometry.
- `src/components/Today/`: departures, checklists, rows, timeline and coach card.
- `src/components/shared/`: semantic Icon, monograms, owners, statuses and PlanItem.
- `src/shell/`: bottom tabs/sidebar, header, Add sheet and presenter dialog.
- `src/screens/`: the adjacent screens required for C-03.
- `src/demo/`: pure session reducer, context, time helpers and presenter-only labels.
- `src/data/households/charlotte.json`: C-03 snapshot and Monday/Wednesday dependencies.
- `src/data/articles/teacher-conference.json`: fixture-written article.
- `src/data/schema/`: slice schemas derived from spec §16.
- `src/copy/interface.json`: fixture-owned interface strings.
- `tests/`: content, reference, schema, reducer, lint and voicecheck regressions.

The stack remains React/Vite, JavaScript/JSX, CSS modules, reducer/context,
Material Symbols Outlined via SVGR, Lucide fallback marks, and the three local
@fontsource families. No router, state library or UI component library was added.

## Validation

```sh
npm run check                          # lint, voicecheck, tests, production build
npm run voicecheck -- --require-content # also requires nonempty content folders
npm run test:watch
npm run preview -- --host 127.0.0.1      # serves dist after npm run build
```

The schema checker implements only the JSON Schema keywords used here and fails
on unsupported keywords. No additional schema-validation package was added.
Tests cover fixture text, reference integrity, invalid data, departure advancement,
handoff ownership, manual task completion, dismissal, draft editing and reset.

Browser validation uses the already available Playwright/Chrome tooling, without
adding it as an application dependency. Visual evidence and the test record are in
`docs/design/validation/`. The C-03 flow was exercised offline after initial load.
Offline reload/PWA installation is outside this slice; there is no service worker.

## Sharing later

The intended GitHub owner is `itzGPHarris`. No remote was created or connected,
and nothing was published or deployed. When authorized, push the project and
lockfile to the personal repository and import it into the personal Netlify
account. `netlify.toml` builds with `npm run build` and publishes `dist` using
Node 22.13.1. No environment variables or secrets are required for this slice.
