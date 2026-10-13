# C-03 design-to-code mapping

Verified with Figma MCP on October 8, 2026. Current fixtures v3.9 own content,
spec v0.10 owns behavior, current grayscale wireframes own structure, and the
master library owns visual values. No Figma file was edited.

## References

- [Master library / token proof](https://www.figma.com/design/A3SHbWiO5cyRDtIZ9sNNz7/mvp-design-library?node-id=117-160): Hearth Light variables and local text styles.
- [Icons](https://www.figma.com/design/A3SHbWiO5cyRDtIZ9sNNz7/mvp-design-library?node-id=147-163): variant descriptions supply package mappings.
- [01 / C-03 structure](https://www.figma.com/design/RK2JTfwao4mV4JgUA193M1/mvp-lombardi?node-id=2266-1436).
- [1e / reply handoff](https://www.figma.com/design/RK2JTfwao4mV4JgUA193M1/mvp-lombardi?node-id=2266-1441).
- [Current Ready for dev Today reference](https://www.figma.com/design/RK2JTfwao4mV4JgUA193M1/mvp-lombardi?node-id=2355-3630): inspected for card, navigation and typographic treatment. Despite its name, it contains afternoon content, a calendar date, two older articles and no C-03 coach decision. Those are not carried into this build.

Reference PNGs live alongside this document. They are documentation only, never
runtime backgrounds. `figma-tokens.json` records the MCP values and text styles.

## Verification outcome

The existing export now agrees with the current master library: paper is
`#FCFBF8`, canvas `#F3F0EB`, primary ink `#151412`, and interactive cerulean
`#1B7498`. Coach/body is Inter 400 at 15px / 150% with -1% tracking. Fraunces
is reserved for titles. The old pure-white and coach-font conflicts are resolved.
The coach role still aliases saffron; use `--color-coach-card-signal`, not the
primitive directly. T3 remains a design sign-off question, not an implementation blocker.

Children follow library ordering: Alexis uses lane 1, Mallory lane 2. Adults
remain neutral. Names, monograms, stop shapes, labels, dashed riding-along marks
and explicit status wording preserve meaning without color.

## Component mapping

| Reference | Implementation |
| --- | --- |
| Library `icon/today`, `coach`, `game-plan`, `team`, `kids` | `components/shared/Icon.jsx`, Material Symbols Outlined `today`, `sports`, `strategy`, `groups`, `child_care` |
| `phase-morning`, `phase-afternoon`, `phase-tonight` | `wb_twilight`, `light_mode`, `dark_mode` |
| `calendar-mark`, `back`, `add`, `settings` | `calendar_today`, `arrow_back`, `add`, `settings` |
| 01 departures and going-with lists | `components/Today/TodayTab.jsx`: Departure, GoingWithList |
| 01 rows and wide timeline | DayRows, DayGrid, fixture-owned content and times |
| 01 coach / Recommends | CoachCard / article card; coach Inter, article title Fraunces |
| 1e draft / handoff / Wednesday | `screens/SliceScreens.jsx`, in-memory session reducer |
| Library font styles | `--type-*` exports; font weights actually imported from local @fontsource packages |

Icons use the exact named package assets through one Icon component and SVGR.
The unowned/status fallback marks use Lucide shapes with visible labels; the
library has no semantic status variants. No runtime Figma URL, remote font,
photograph, generated illustration or external messaging link is used.

## Layout translation

Layout geometry is centralized in the final, clearly marked block of
`src/tokens.css`. Phone 390×844, tablet 768, desktop 1280, max content 1200,
44px targets, icon 24px and monogram 32px follow the inspected references.
Sidebar width, scrollable-grid minimum, row height and dialog bounds are
implementation layout constraints composed around those tokens, not claimed
as published Figma variables. Media queries repeat breakpoint literals because
CSS custom properties cannot be used in media query conditions.

The tablet grid scrolls horizontally inside a keyboard-focusable region so
its timeline labels remain readable. Phone rows keep all four named periods.
Unknown activity end times are represented as stops, not invented durations.
The presenter advances the fixture clock explicitly; no wall-clock timer drives it.

## Variable mapping

| Figma variable | CSS property | Verified value / alias |
| --- | --- | --- |
| `primitives/neutral/cream-50` | `--color-neutral-cream-50` | `#f5f3ef` |
| `primitives/neutral/cream-100` | `--color-neutral-cream-100` | `#f3f0eb` |
| `primitives/neutral/cream-200` | `--color-neutral-cream-200` | `#e9e4dc` |
| `primitives/neutral/ink-900` | `--color-neutral-ink-900` | `#151412` |
| `primitives/neutral/ink-700` | `--color-neutral-ink-700` | `#2b2925` |
| `primitives/neutral/ink-500` | `--color-neutral-ink-500` | `#4a4741` |
| `primitives/neutral/ink-300` | `--color-neutral-ink-300` | `#6e6a62` |
| `primitives/neutral/paper` | `--color-neutral-paper` | `#fcfbf8` |
| `primitives/saffron` | `--color-saffron` | `#e8a33c` |
| `primitives/status/success` | `--color-status-success` | `#6b6b6b` |
| `primitives/status/warning` | `--color-status-warning` | `#8a6420` |
| `primitives/status/error` | `--color-status-error` | `#a03a3a` |
| `primitives/status/error-tint` | `--color-status-error-tint` | `#f6e4e4` |
| `primitives/status/warning-tint` | `--color-status-warning-tint` | `#f5ead2` |
| `primitives/status/success-tint` | `--color-status-success-tint` | `#b4cdd4` |
| `dimension/space/0` | `--space-0` | `0` |
| `dimension/space/8` | `--space-8` | `8` |
| `dimension/space/12` | `--space-12` | `12` |
| `dimension/space/16` | `--space-16` | `16` |
| `dimension/space/20` | `--space-20` | `20` |
| `dimension/space/24` | `--space-24` | `24` |
| `dimension/space/32` | `--space-32` | `32` |
| `dimension/space/40` | `--space-40` | `40` |
| `dimension/space/56` | `--space-56` | `56` |
| `dimension/radius/none` | `--radius-none` | `0` |
| `dimension/radius/sm` | `--radius-sm` | `4` |
| `dimension/radius/md` | `--radius-md` | `12` |
| `dimension/radius/lg` | `--radius-lg` | `20` |
| `dimension/radius/xl` | `--radius-xl` | `28` |
| `dimension/radius/pill` | `--radius-pill` | `999` |
| `semantic/bg/canvas` | `--color-bg-canvas` | `var(--color-neutral-cream-100)` |
| `semantic/bg/card` | `--color-bg-card` | `var(--color-neutral-paper)` |
| `semantic/bg/subtle` | `--color-bg-subtle` | `var(--color-neutral-cream-50)` |
| `semantic/ink/primary` | `--color-ink-primary` | `var(--color-neutral-ink-900)` |
| `semantic/ink/secondary` | `--color-ink-secondary` | `var(--color-neutral-ink-700)` |
| `semantic/ink/muted` | `--color-ink-muted` | `var(--color-neutral-ink-500)` |
| `semantic/ink/placeholder` | `--color-ink-placeholder` | `var(--color-neutral-ink-300)` |
| `semantic/ink/on-accent` | `--color-ink-on-accent` | `var(--color-neutral-paper)` |
| `semantic/border/hairline` | `--color-border-hairline` | `var(--color-neutral-ink-100)` |
| `semantic/border/strong` | `--color-border-strong` | `var(--color-neutral-ink-500)` |
| `semantic/interactive/default` | `--color-interactive-default` | `var(--color-cerulean-600)` |
| `semantic/interactive/pressed` | `--color-interactive-pressed` | `var(--color-cerulean-700)` |
| `semantic/interactive/tint` | `--color-interactive-tint` | `var(--color-cerulean-100)` |
| `semantic/focus/ring` | `--color-focus-ring` | `var(--color-cerulean-600)` |
| `semantic/coach-card/signal` | `--color-coach-card-signal` | `var(--color-saffron)` |
| `primitives/neutral/ink-100` | `--color-neutral-ink-100` | `#c8c3b8` |
| `primitives/cerulean/100` | `--color-cerulean-100` | `#dce9ef` |
| `primitives/cerulean/600` | `--color-cerulean-600` | `#1b7498` |
| `primitives/cerulean/700` | `--color-cerulean-700` | `#0a5570` |
| `dimension/space/4` | `--space-4` | `4` |
| `dimension/size/tap-target` | `--size-tap-target` | `44` |
| `dimension/layout/content-max` | `--layout-content-max` | `1200` |
| `dimension/breakpoint/tablet` | `--breakpoint-tablet` | `768` |
| `dimension/breakpoint/desktop` | `--breakpoint-desktop` | `1280` |
| `type/family/display` | `--font-display` | `Fraunces` |
| `type/family/body` | `--font-body` | `Inter` |
| `type/family/mono` | `--font-mono` | `JetBrains Mono` |
| `type/size/11` | `--text-11` | `11` |
| `type/size/12` | `--text-12` | `12` |
| `type/size/13` | `--text-13` | `13` |
| `type/size/14` | `--text-14` | `14` |
| `type/size/15` | `--text-15` | `15` |
| `type/size/16` | `--text-16` | `16` |
| `type/size/17` | `--text-17` | `17` |
| `type/size/24` | `--text-24` | `24` |
| `type/size/28` | `--text-28` | `28` |
| `type/size/38` | `--text-38` | `38` |
| `type/size/56` | `--text-56` | `56` |
| `primitives/green/600` | `--color-green-600` | `#46803d` |
| `primitives/green/100` | `--color-green-100` | `#e3eade` |
| `semantic/lane/1/strong` | `--color-lane-1-strong` | `var(--color-green-600)` |
| `semantic/lane/1/tint` | `--color-lane-1-tint` | `var(--color-green-100)` |
| `primitives/indigo/600` | `--color-indigo-600` | `#4a55a2` |
| `primitives/indigo/100` | `--color-indigo-100` | `#e3e4ec` |
| `semantic/lane/2/strong` | `--color-lane-2-strong` | `var(--color-indigo-600)` |
| `semantic/lane/2/tint` | `--color-lane-2-tint` | `var(--color-indigo-100)` |
| `primitives/berry/600` | `--color-berry-600` | `#a2456e` |
| `primitives/berry/100` | `--color-berry-100` | `#efe2e5` |
| `semantic/lane/3/strong` | `--color-lane-3-strong` | `var(--color-berry-600)` |
| `semantic/lane/3/tint` | `--color-lane-3-tint` | `var(--color-berry-100)` |
| `primitives/teal/600` | `--color-teal-600` | `#2f7a6b` |
| `primitives/teal/100` | `--color-teal-100` | `#dfe9e4` |
| `semantic/lane/4/strong` | `--color-lane-4-strong` | `var(--color-teal-600)` |
| `semantic/lane/4/tint` | `--color-lane-4-tint` | `var(--color-teal-100)` |
| `primitives/plum/600` | `--color-plum-600` | `#7a4a7e` |
| `primitives/plum/100` | `--color-plum-100` | `#eae2e7` |
| `semantic/lane/5/strong` | `--color-lane-5-strong` | `var(--color-plum-600)` |
| `semantic/lane/5/tint` | `--color-lane-5-tint` | `var(--color-plum-100)` |
