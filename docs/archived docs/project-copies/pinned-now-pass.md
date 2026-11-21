# Addition to fixtures 3.15 and spec 0.15: Now stays in place while the day scrolls over it

*MVP (Lombardi) · October 15, 2026 · Greg's decision after wiring the Today prototype*

**Applied October 15, 2026** to `fixtures-3.15-pass.md`, `spec-v0.15.md`, `project-instructions-v3.15.md`, `issues.csv` and `backlog.md`. This file is kept for the reasoning behind each choice, and nothing in it needs pasting again.

**Revised the same day.** After playing C-06, Greg decided the sheet scrolls over the header as well as Now. The applied documents carry that change. Where this file says the header stays fixed or the sheet stops below it, that choice is superseded: the monogram is covered while the sheet is up, and Settings and the household switcher come back when she scrolls to the top.

## Summary

Today already has two surfaces: the header and Now on paper, and the coach card, Later today and MVP Recommends on a canvas sheet with rounded top corners. Until now the whole screen scrolled as one flat page, so the rounded corners promised a layer that never moved. This addition makes Today behave the way it looks. Now stays in place, and when she scrolls, the canvas sheet rises over the pass and covers it. The header stays above everything, so the dateline, the phase of the day and the monogram are always in view.

Three rules make it work on every phone.

- **The header never moves.** The sheet rises until it meets the bottom of the header and stops there. The monogram stays reachable, which matters because it opens Settings and, with a long press, the demo's household switcher (§15).
- **A tall Now pins its foot, not its head.** When the header and Now together are taller than the space above the capture bar and tab bar, Now first scrolls up under the header until its actions clear the capture bar, and only then holds still. Nothing in Now, such as the last checklist item or Remind me, can be trapped beneath the bars on a small phone.
- **Nothing on Now changes when the sheet covers it.** Scrolling back to the top shows Now exactly as she left it, with the same ticks and the same countdown.

The idea becomes F28 on the roadmap, moved into the prototype in v0.15. A compact strip that keeps the route and leaving time showing above the sheet once it covers Now is parked as F29, to be built only if user testing shows parents losing track of the time. Issue T36 carries the change to the Figma boards and the build, and C36 records the two coach cards that missed the library update.

Every passage below is written to paste into the 3.15 and 0.15 documents before they are applied.

---

## Part 1: fixtures 3.15

### 1. Section 2, "Today shows today": a new subsection after "Now reads like a boarding pass"

*Added after Greg's review of the wired Today prototype on October 15, 2026.*

Add this subsection:

> ### Now stays in place
>
> Today has two surfaces, and they move differently. The header and Now sit on paper and stay in place. The coach card, Later today and MVP Recommends sit on the canvas sheet, and when she scrolls, the sheet rises over Now and covers it. Scrolling back down uncovers Now exactly as she left it. Now is what she acts on next, so it keeps its place on the screen, and the rest of the day comes up over it only when she reaches for it.
>
> **The header stays above the sheet.** The sheet rises until it meets the bottom of the header and stops, so the dateline, the phase of the day and the monogram are always in view.
>
> **A tall Now scrolls before it stops.** When Now is taller than the space between the header and the capture bar, it first scrolls up under the header until Remind me and Directions sit just above the capture bar, and then it holds still while the sheet rises over it. Every part of Now can always be reached.
>
> **In the evening the same rule applies.** Ready tonight stays in place on paper, and Tomorrow starts rises over it.
>
> **Sheets are unchanged.** The reminder sheet, the Leave sheet and every other sheet still rise over the whole screen, with the scrim behind them.

### 2. Appendix B, new items at the end

> 58. **Whether the edge of the sheet reads clearly as it covers Now** is worth checking on a real phone. The canvas sheet and the paper behind it are close in tone, and the rounded corners carry the edge with no line or shadow, because Today allows only two drawn lines. If the edge is too faint, the fix is a token in the library, not a new line.
>
> 59. **A compact strip with the route and leaving time could stay above the sheet once it covers Now.** It is parked as F29 on the spec's roadmap, and user testing will show whether parents lose track of the time while they read the rest of the day.

### 3. Appendix C, a new row in the version 3.15 table

> | 11 | Now stays in place on Today. The canvas sheet rises over it when she scrolls and stops below the header, and a Now taller than the screen scrolls until its actions clear the capture bar before it holds still. Ready tonight behaves the same way at night. |

---

## Part 2: spec 0.15

### 1. §5 Today, the paragraph headed "Today has two surfaces."

Add these sentences to the end of the paragraph:

> The two surfaces also move differently. The header and Now stay in place, and the sheet scrolls up over Now until it meets the bottom of the header, so the dateline, the phase and the monogram stay in view. When Now is taller than the space between the header and the capture bar, it scrolls up under the header until its actions sit just above the capture bar, and then holds still. In the evening, Ready tonight stays in place and Tomorrow starts rises over it.

### 2. §5 Today, a new subsection after "Later today"

> ## **Scrolling**
>
> | Layer | How it moves |
> | ----- | ----- |
> | Header | Stays at the top of the screen, above everything that scrolls. |
> | Now, or Ready tonight | Stays in place below the header. When it is taller than the space between the header and the capture bar, it scrolls up under the header until its foot sits just above the capture bar, and then stays. |
> | The canvas sheet | Scrolls over Now, and passes under the header. |
> | Capture bar and tab bar | Stay at the bottom of the screen. |
> | Sheets | Rise over everything, with the scrim behind them, as before. |
>
> * **Nothing on Now changes when the sheet covers it.** Her ticks, the countdown and a set reminder are exactly as she left them when she scrolls back.
> * **Now keeps its place in the reading order.** A screen reader reads the header, Now, then the sheet, whatever is covered. When a control in a covered Now receives keyboard focus, the page scrolls back to the top so the control can be seen.
> * **The build uses sticky positioning, not a scroll container inside the page.** The header is sticky at the top and stacked above the sheet. Now is sticky with its top set to the smaller of the header's height and the space above the capture bar minus Now's own height, and stacked below the sheet. The sheet stays in normal flow. Both offsets are worked out from the rendered heights, so the rule holds on every phone and when Now's height changes between moments.
> * **The page itself scrolls,** so the browser's own scrolling, the address bar's behavior on a phone and the scroll position on returning from a sheet all work as they do on any web page.

### 3. §5 Today, a new standing decision after 13

> 14. **Now stays in place, and the day rises over it.** The rounded top of the canvas sheet says it is a layer, so it moves like one. Now keeps its place because it is the next thing she acts on, the header never moves because the monogram leads to Settings and the demo controls, and a tall Now pins its foot rather than its head so nothing in it is ever out of reach.

### 4. §5 Today, new open conditions after 7

> 8. **Whether the sheet's edge reads clearly over Now** needs checking on a phone, because canvas and paper are close in tone and Today allows no new line (fixtures Appendix B item 58).
> 9. **Whether parents lose track of the leaving time** once the sheet covers Now goes to user testing. A compact strip with the route and time is parked as F29.

### 5. §18 Out of scope

Add this line after "A note to whoever is waiting when she runs late (F27)":

> * A compact route-and-time strip above the sheet once it covers Now (F29)

### 6. Appendix A, a new row in the v0.15 table

> | 11 | §5, Appendix B | Now stays in place, and the canvas sheet scrolls over it, stopping below the header. A Now taller than the screen scrolls until its actions clear the capture bar, then holds. The build uses sticky positioning on the header and Now. F28 is moved into the prototype, and the compact strip is parked as F29. Issue T36. |

### 7. Appendix B, new rows

> | F28 | Now stays in place while the day scrolls over it | **Moved into the prototype in v0.15.** The canvas sheet already looked like a layer, and now it moves like one. | §5, issue T36 |
> | F29 | A compact strip with the route and leaving time above the sheet | Once the sheet covers Now, the leaving time is out of sight until she scrolls back. Building the strip now would add a third state to Now before anyone has shown it is needed. | §5, fixtures Appendix B item 59 |

Replace "**F28 is next free.**" with:

> **F30 is next free.**

---

## Part 3: issues

Append these rows to `docs/issues.csv`.

```csv
T36,Today,must,OPEN,Greg,"spec §5 Scrolling, fixtures ""Now stays in place"", Today boards on Design - lombardi","Today scrolls as one flat page, so the canvas sheet's rounded top promises a layer that never moves, and Now scrolls away with everything else.","Now stays in place below a fixed header, and the canvas sheet scrolls up over it, stopping at the header. A Now taller than the space above the capture bar scrolls until its actions clear the bar, then holds. Ready tonight and Tomorrow starts behave the same way.","Decided 15 October 2026 by Greg as F28, after wiring the Today prototype. Written in pinned-now-pass.md. In the build it is sticky positioning on the header and Now (spec §5, Scrolling). In Figma, fixed layers always draw above scrolling ones, so each Today board needs restructuring: the board becomes 956 px tall, the header and the paper stay as they are, and Body - Next moves into a frame with vertical scrolling that sits above the paper and starts at Now's foot. Restructure C-06 (2556:4267) first and review it in presentation mode, then the other Today boards, and update the screen map's frame heights. Close when the fixtures, the spec and the boards are applied."
C36,Cleanup,should,OPEN,Prototype pass 1,"mvp-lombardi, coach cards 2556:4288 on C-06 and 2556:4601 on C-06b","Accepting the October 15 library update did not reach these two coach cards. They still use the CoachCard version without Show line, although their component key matches the published one.","Every coach card on Design - lombardi uses the published CoachCard.","Found 15 October 2026 while wiring prototype pass 1. The card after Plan B (2556:4320) was swapped to the published AfterMove variant by hand, kept its words and gained Show line, which made its board 2556:4299 34 px taller, 1545 rather than 1511. Swap these two the same way, checking their words against the fixtures afterwards."
```

## Part 4: backlog

In **Next**, insert this line after item 6, "Greg's review", and renumber the items after it:

> 7. T36: restructure C-06 so the day scrolls over a pinned Now, review it in presentation mode, then the other Today boards, and re-wire prototype pass 1 on the restructured boards

Add C36 to the existing item 4, so it reads:

> 4. T34, T35, T32, T27, T17, T22, C36: NowBlock as a pass and the grouped checklist, the Sheet component's variants and NowBlock's new states in the library, the two coach cards that missed the update, then the corrected and new Today boards on the drafts page

---

## Why these choices

**The header stays fixed and the sheet stops beneath it.** Greg's idea covered Now. Letting the sheet carry on over the header would hide the monogram, which is the only way to Settings on a phone and the only way into the household switcher during a demo. Stopping the sheet under the header also keeps the day and the phase in view while she reads the rest of the day, and it costs nothing, because the header is no taller than a plain title.

**A tall Now pins its foot rather than its head.** On C-06b, Now is 692 px tall. On the 440 × 956 board that leaves room above the bars, but on the 390 × 844 phone the spec also checks, a Now pinned by its top would put Remind me and Directions under the capture bar with no way to scroll to them, because the part that would need to move is the part that holds still. Letting a tall Now scroll until its foot clears the bar, then hold, is the one rule that works at every size and on every moment.

**No shadow and no line on the sheet's edge.** Spec §5 standing decision 11 allows two lines on Today, the rail and the perforation, and Now is not a card. The rounded corners and the change from paper to canvas carry the edge. If that proves too faint on a phone, it is a token decision, which is why it is an open condition rather than a new line.

**Sticky positioning in the build, not a nested scroll container.** A nested scroller would break the browser's own scrolling, the phone's address bar behavior and returning to the same scroll position after a sheet. Sticky elements leave the page scrolling normally and need two offsets worked out from the rendered heights.

**The compact strip is parked rather than built.** Covering Now hides the leaving time, but she has scrolled on purpose and the time is one flick away. A strip would add a third layout to Now before anyone has shown it is needed, so it waits for user testing as F29.

**This rides with 3.15 and 0.15 rather than starting new versions.** Neither has been applied yet, and the boarding pass was added the same way earlier today. One application of each document carries everything decided on October 15.
