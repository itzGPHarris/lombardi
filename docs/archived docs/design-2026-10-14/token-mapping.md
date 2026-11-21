# Design-to-code mapping

Verified against the Figma master library on October 13, 2026. Fixtures own content,
the spec owns behavior, the grayscale wireframes own structure, and the master library
owns visual values. `src/tokens.css` is generated from the library's Hearth variables
and text styles; `figma-tokens.json` records the same export.

## References

- [Master library / token proof sheet](https://www.figma.com/design/A3SHbWiO5cyRDtIZ9sNNz7/mvp-design-library?node-id=117-160): Hearth Light variables and local text styles.
- [Icons](https://www.figma.com/design/A3SHbWiO5cyRDtIZ9sNNz7/mvp-design-library?node-id=147-163): each variant's description names its package and icon.
- [Components](https://www.figma.com/design/A3SHbWiO5cyRDtIZ9sNNz7/mvp-design-library?node-id=150-183): Tab item, Tab Bar, ChildChip and AdultAvatar.
- [Today redesign, day 2 morning](https://www.figma.com/design/RK2JTfwao4mV4JgUA193M1/mvp-lombardi?node-id=2486-1078): the screen these tokens were reviewed against.
- [01 / C-03 structure](https://www.figma.com/design/RK2JTfwao4mV4JgUA193M1/mvp-lombardi?node-id=2266-1436) and [1e / reply handoff](https://www.figma.com/design/RK2JTfwao4mV4JgUA193M1/mvp-lombardi?node-id=2266-1441): the C-03 build references.

Reference PNGs live alongside this document. They are documentation only, never
runtime backgrounds.

## Current state

- **Type.** The scale is display, title, voice, body-large, body, body-small and meta,
  with a strong option for voice, body and meta. Header, headline and wordmark sit
  outside the scale. Rules: no uppercase labels, no letter-spaced eyebrows, no bold
  inside paragraphs, and times line up in a column with tabular numerals.
- **The coach speaks in Fraunces** (`voice`) on the Today coach card and in onboarding,
  and in Inter in the coach chat. This replaces the October 8 rule that everything the
  coach says is set in Inter.
- **People.** One color per kind of person: kid, adult and coach. Children are filled
  chips, adults are outlined, and the coach is a solid dot, so the three stay distinct
  in grayscale. The per-person lane colors are deprecated.
- **Deprecated tokens still resolve** through their replacements, so existing screens
  keep working, though they now render in the new styles. Nothing has been removed
  from `src/tokens.css`.
- **Checks.** `npm run check` passed on commit `ab33190`: lint, the voice check,
  44 tests and the build.

## Type

| CSS property | Figma text style | Value | Use |
| --- | --- | --- | --- |
| `--type-display` | `display` | Fraunces 600, 44 / 1.0, -0.02em | The one number that matters now |
| `--type-title` | `title` | Inter 600, 17 / 1.35 | Section names and the next item's line |
| `--type-voice` | `voice` | Fraunces 400, 17 / 1.45 | The coach on the Today coach card and in onboarding; the coach chat uses Inter |
| `--type-voice-strong` | `voice-strong` | Fraunces 600, 17 / 1.45 | Article titles |
| `--type-body-large` | `body-large` | Inter 400, 17 / 1.45 | Plan rows, checklist items, button labels |
| `--type-body` | `body` | Inter 400, 15 / 1.45 | Default running text |
| `--type-body-small` | `body-small` | Inter 400, 11 / 1.45 | Fine print, sparingly |
| `--type-body-strong` | `body-strong` | Inter 800, 15 / 1.45 | Button labels, links, row headings; never inside a paragraph |
| `--type-meta` | `meta` | Inter 500, 13 / 1.4 | Times, sources, counts, small labels; `--color-ink-muted` |
| `--type-meta-strong` | `meta-strong` | JetBrains Mono 800, 13 / 1.4 | Card and alert labels |
| `--type-header` | `header` | Fraunces 600, 24 / 32px | Screen headers such as "This morning"; outside the scale |
| `--type-headline` | `headline` | Fraunces 700, 38 / 40px, -0.01em | Onboarding and article-page headlines; outside the scale |
| `--type-wordmark` | `wordmark` | Inter 900, 24 / 24px | "Most Valuable Parent"; outside the scale |

Deprecated type tokens. Their Figma styles were removed on October 13, so these
aliases are kept in the generator until no code uses them.

| Deprecated | Resolves to |
| --- | --- |
| `--type-display-sm` | `--type-header` |
| `--type-display-lg` (and `-tracking`) | `--type-headline` (and `-tracking`) |
| `--type-display-xl` (and `-tracking`), `--type-display-md` | `--type-display` (and `-tracking`) |
| `--type-title-lg`, `--type-title-md`, `--type-title-md-strong` | `--type-title` |
| `--type-body-lg` | `--type-body-large` |
| `--type-body-md`, `--type-body-sm` | `--type-body` |
| `--type-body-lg-strong`, `--type-body-md-strong`, `--type-body-sm-strong` | `--type-body-strong` |
| `--type-label`, `--type-mono-caption` | `--type-meta` |
| `--type-mono-caption-strong` | `--type-meta-strong` |
| `--type-coach-body` | `--type-voice` |
| `--type-label-tracking`, `--type-coach-body-tracking` | `0em` |

## Color

| CSS property | Value | Use |
| --- | --- | --- |
| `--color-kid`, `--color-kid-bg` | pine `#2e7652` on `#ddefe4` | Child chip text and fill; 4.58:1 |
| `--color-adult` | `var(--color-ink-primary)` | Adult avatar outline and initial, on `--color-bg-card` |
| `--color-coach` | amber `#e39a2d` | Coach dot and marks; never text |
| `--color-coach-ink`, `--color-coach-bg` | `#8a5208` on `#fbebd3` | Coach label text and card fill; 5.45:1 |
| `--color-ink-muted` | `#6a655f` | Meta text; changed on October 13 from `#4a4741` |

Kid green is `#2e7652` rather than the brief's `#2f7a55`, so chip text reaches 4.5:1.
Ink, page and action keep their existing names and values: `--color-ink-primary`,
`--color-bg-canvas` and `--color-interactive-default` / `--color-interactive-tint`.
`--color-lane-*` and `--color-coach-card-signal` are deprecated and resolve to the
kid and coach tokens, so Alexis and Mallory now share one green.

## Component mapping

| Library | Implementation |
| --- | --- |
| Tab Bar / Tab item | `shell/Shell.jsx`, `shell.module.css`; labels use `--type-meta` |
| `icon/today`, `icon/coach`, `icon/team` (Lucide source in the Tab Bar) | `lucide-react` `Calendar1`, `Whistle`, `Users` |
| `icon/game-plan`, `icon/kids-heights` (Custom source in the Tab Bar) | `components/shared/icons/game-plan.svg`, `kids-heights.svg` |
| `icon/reminder`, `icon/directions` | `lucide-react` `Bell`, `Navigation` |
| `icon/update-calendar` (Custom) | `components/shared/icons/update-calendar.svg` |
| `icon/phase-morning`, `phase-afternoon`, `phase-tonight` | Material Symbols `wb_twilight`, `light_mode`, `dark_mode` |
| `icon/calendar-mark`, `back`, `add`, `settings`, `check` | Material Symbols `calendar_today`, `arrow_back`, `add`, `settings`, `check` |
| `ChildChip` (name, group, family, small) | `components/shared/ChildChip.jsx`, `.childChip`; group labels from `childGroup` in `src/copy/interface.json` |
| `AdultAvatar` (initial) | `components/shared/AdultAvatar.jsx`, `.adultAvatar` |
| 01 departures, rows, timeline, coach card, Recommends | `components/Today/TodayTab.jsx` |
| 1e draft, handoff, Wednesday | `screens/SliceScreens.jsx` |

All icons are drawn through one `Icon` component, which takes the library name.
`ChildChip` and `AdultAvatar` are not placed on a screen yet; `Monogram` is still in
use. No runtime Figma URL, remote font, photograph, generated illustration or external
messaging link is used.

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

Generated from the library on October 13, 2026: 105 variables in the
Hearth collection, mode Light. Primitives are hidden from publishing.

| Figma variable | CSS property | Value |
| --- | --- | --- |
| `primitives/neutral/cream-50` | `--color-neutral-cream-50` | `#f5f3ef` |
| `primitives/neutral/cream-100` | `--color-neutral-cream-100` | `#f3f0eb` |
| `primitives/neutral/cream-200` | `--color-neutral-cream-200` | `#e9e4dc` |
| `primitives/neutral/ink-900` | `--color-neutral-ink-900` | `#151412` |
| `primitives/neutral/ink-700` | `--color-neutral-ink-700` | `#2b2925` |
| `primitives/neutral/ink-500` | `--color-neutral-ink-500` | `#4a4741` |
| `primitives/neutral/ink-300` | `--color-neutral-ink-300` | `#6e6a62` |
| `primitives/neutral/ink-100` | `--color-neutral-ink-100` | `#c8c3b8` |
| `primitives/neutral/paper` | `--color-neutral-paper` | `#fcfbf8` |
| `primitives/saffron` | `--color-saffron` | `#e8a33c` |
| `primitives/status/success` | `--color-status-success` | `#6b6b6b` |
| `primitives/status/warning` | `--color-status-warning` | `#8a6420` |
| `primitives/status/error` | `--color-status-error` | `#a03a3a` |
| `primitives/status/error-tint` | `--color-status-error-tint` | `#f6e4e4` |
| `primitives/status/warning-tint` | `--color-status-warning-tint` | `#f5ead2` |
| `primitives/status/success-tint` | `--color-status-success-tint` | `#b4cdd4` |
| `primitives/cerulean/100` | `--color-cerulean-100` | `#dce9ef` |
| `primitives/cerulean/600` | `--color-cerulean-600` | `#1b7498` |
| `primitives/cerulean/700` | `--color-cerulean-700` | `#0a5570` |
| `primitives/green/600` | `--color-green-600` | `#46803d` |
| `primitives/green/100` | `--color-green-100` | `#e3eade` |
| `primitives/indigo/600` | `--color-indigo-600` | `#4a55a2` |
| `primitives/indigo/100` | `--color-indigo-100` | `#e3e4ec` |
| `primitives/berry/600` | `--color-berry-600` | `#a2456e` |
| `primitives/berry/100` | `--color-berry-100` | `#efe2e5` |
| `primitives/teal/600` | `--color-teal-600` | `#2f7a6b` |
| `primitives/teal/100` | `--color-teal-100` | `#dfe9e4` |
| `primitives/plum/600` | `--color-plum-600` | `#7a4a7e` |
| `primitives/plum/100` | `--color-plum-100` | `#eae2e7` |
| `primitives/pine/600` | `--color-pine-600` | `#2e7652` |
| `primitives/pine/100` | `--color-pine-100` | `#ddefe4` |
| `primitives/amber/500` | `--color-amber-500` | `#e39a2d` |
| `primitives/amber/800` | `--color-amber-800` | `#8a5208` |
| `primitives/amber/100` | `--color-amber-100` | `#fbebd3` |
| `primitives/neutral/ink-400` | `--color-neutral-ink-400` | `#6a655f` |
| `semantic/bg/canvas` | `--color-bg-canvas` | `var(--color-neutral-cream-100)` |
| `semantic/bg/card` | `--color-bg-card` | `var(--color-neutral-paper)` |
| `semantic/bg/subtle` | `--color-bg-subtle` | `var(--color-neutral-cream-50)` |
| `semantic/ink/primary` | `--color-ink-primary` | `var(--color-neutral-ink-900)` |
| `semantic/ink/secondary` | `--color-ink-secondary` | `var(--color-neutral-ink-700)` |
| `semantic/ink/muted` | `--color-ink-muted` | `var(--color-neutral-ink-400)` |
| `semantic/ink/placeholder` | `--color-ink-placeholder` | `var(--color-neutral-ink-300)` |
| `semantic/ink/on-accent` | `--color-ink-on-accent` | `var(--color-neutral-paper)` |
| `semantic/border/hairline` | `--color-border-hairline` | `var(--color-neutral-ink-100)` |
| `semantic/border/strong` | `--color-border-strong` | `var(--color-neutral-ink-500)` |
| `semantic/interactive/default` | `--color-interactive-default` | `var(--color-cerulean-600)` |
| `semantic/interactive/pressed` | `--color-interactive-pressed` | `var(--color-cerulean-700)` |
| `semantic/interactive/tint` | `--color-interactive-tint` | `var(--color-cerulean-100)` |
| `semantic/focus/ring` | `--color-focus-ring` | `var(--color-cerulean-600)` |
| `semantic/coach-card/signal` | `--color-coach-card-signal` | `var(--color-coach)` (deprecated) |
| `semantic/lane/1/strong` | `--color-lane-1-strong` | `var(--color-kid)` (deprecated) |
| `semantic/lane/1/tint` | `--color-lane-1-tint` | `var(--color-kid-bg)` (deprecated) |
| `semantic/lane/2/strong` | `--color-lane-2-strong` | `var(--color-kid)` (deprecated) |
| `semantic/lane/2/tint` | `--color-lane-2-tint` | `var(--color-kid-bg)` (deprecated) |
| `semantic/lane/3/strong` | `--color-lane-3-strong` | `var(--color-kid)` (deprecated) |
| `semantic/lane/3/tint` | `--color-lane-3-tint` | `var(--color-kid-bg)` (deprecated) |
| `semantic/lane/4/strong` | `--color-lane-4-strong` | `var(--color-kid)` (deprecated) |
| `semantic/lane/4/tint` | `--color-lane-4-tint` | `var(--color-kid-bg)` (deprecated) |
| `semantic/lane/5/strong` | `--color-lane-5-strong` | `var(--color-kid)` (deprecated) |
| `semantic/lane/5/tint` | `--color-lane-5-tint` | `var(--color-kid-bg)` (deprecated) |
| `semantic/kid` | `--color-kid` | `var(--color-pine-600)` |
| `semantic/kid-bg` | `--color-kid-bg` | `var(--color-pine-100)` |
| `semantic/adult` | `--color-adult` | `var(--color-ink-primary)` |
| `semantic/coach` | `--color-coach` | `var(--color-amber-500)` |
| `semantic/coach-ink` | `--color-coach-ink` | `var(--color-amber-800)` |
| `semantic/coach-bg` | `--color-coach-bg` | `var(--color-amber-100)` |
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
| `dimension/space/4` | `--space-4` | `4` |
| `dimension/size/tap-target` | `--size-tap-target` | `44` |
| `dimension/layout/content-max` | `--layout-content-max` | `1200` |
| `dimension/breakpoint/tablet` | `--breakpoint-tablet` | `768` |
| `dimension/breakpoint/desktop` | `--breakpoint-desktop` | `1280` |
| `dimension/size/chip` | `--size-chip` | `26` |
| `dimension/size/chip-small` | `--size-chip-small` | `22` |
| `dimension/space/10` | `--space-10` | `10` |
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
| `type/size/44` | `--text-44` | `44` |
| `type/size/10` | `--text-10` | `10` |

## History

- **October 8, 2026.** First export from the cleaned-up Hearth library for the C-03
  build: semantic colors, space, radius and an 18-style type set. Per-person lane
  colors were added later that day.
- **October 13, 2026.** Today redesign: the type scale, one color per kind of person,
  ChildChip and AdultAvatar, and the new Kids icon. Later the same day the library
  gained body-large, body-small, body-strong and meta-strong, the family chip, the
  custom Game plan icon and three button icons. Deprecated text styles were removed
  from Figma and kept as CSS aliases.
