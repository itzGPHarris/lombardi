# C-03 validation record

The final slice was checked locally in Chrome on October 8, 2026. These dates are
engineering records only; runtime data uses fixture-relative weekdays and times.

## Project checks

- `npm run check`: passed lint, voicecheck, 44 tests across five files, and the production build.
- `npm run voicecheck -- --require-content`: passed; three content files, 387 strings, no violations.
- Tests cover fixture text, IDs and references, schema rejection, independent checklists,
  scripted departures, editable drafts, handoff ownership, manual reply-task completion,
  dismissal, and reset of all session data and navigation.

## Browser checks

`browser-flow.mjs` exercises the loaded app with network access disabled. It checks
checkboxes, fixture time advancement, the edited reply and staged send, Wednesday's
manual task, reset, article/byline and Back, dismissal, the disabled capture choices,
Settings and Back, opening C-03, phone/responsive switching, visible keyboard focus,
Escape, and the long-press presenter trigger. It passed with no page errors or
external requests. Reducer tests additionally verify reset restores unowned carpool
state, original draft, and the complete initial fixture snapshot.

`browser-visual.mjs` captures the requested viewports and checks for page overflow
and visible enabled button/checkbox-label targets smaller than 44 × 44. All four
passed. Screenshots were inspected for clipping, readable text, labels and layout;
the timeline label backing was corrected so transit rules do not cross text.
The tablet timeline scrolls horizontally inside its keyboard-focusable region.
The application content scrolls vertically; screenshots capture the viewport,
not a stitched image of the entire scroll container.

| Viewport | Screenshot | Page overflow | Targets under 44 × 44 | Page errors |
| --- | --- | --- | --- | --- |
| 390 × 844 | [Today](today-390.png) | None | None | None |
| 768 × 1024 | [Today](today-768.png) | None | None | None |
| 1440 × 900 | [Today](today-1440.png) | None | None | None |
| 1920 × 1080 | [Today](today-1920.png) | None | None | None |

Additional evidence: [phone lower content](today-390-bottom.png),
[editable reply](draft-390.png), [Wednesday task](wednesday-390.png),
[article](article-390.png), and [phone frame on desktop](phone-frame-1440.png).

## Repeat the browser checks

Run the Vite preview first. The scripts use existing Playwright/Chrome tooling;
Playwright is not an application dependency. Set `PLAYWRIGHT_MODULE` to the local
Playwright module path and `CHROME_PATH` to a Chrome executable if Playwright's
bundled browser is unavailable. Optionally set `MVP_PREVIEW_URL` (default
`http://127.0.0.1:5173`). Then run:

```sh
node docs/design/validation/browser-visual.mjs
node docs/design/validation/browser-flow.mjs
```

The scripts overwrite their screenshot evidence. The flow prints its result;
visual metrics are written to `visual-results.json`. This is focused slice
validation, not a full accessibility audit or cross-browser certification.
Offline operation after loading passed; offline reload/PWA support is not built.

## Review boundaries

Coach, Team and Kids tabs and the three capture choices are visibly disabled.
Wednesday is a read-only dependency screen, not the complete week editor.
Presenter trigger X1 and coach signal T3 still await design sign-off. Other
moments, household data, school contact decisions and broader plan interactions
remain in the backlog and issue register. No publication or deployment occurred.
