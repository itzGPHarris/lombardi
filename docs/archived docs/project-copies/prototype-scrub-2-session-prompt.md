# Session prompt: prototype scrub 2

This session takes Greg's findings from playing the investor demo and turns them into fixes in the documents, the library and the boards. It also finishes what the prototype completion session left open. Greg has reviewed one flow so far and will send more findings as he plays the others, so the session sets up a way to take in each list, sort it and fix it in one pass, rather than handling findings one at a time.

## Read first

Read these project docs before touching anything:

- CLAUDE.md
- prototype-completion-session-prompt.md
- prototype-scrub-1.md
- story-fixtures-v3.18.md: section 2, especially "Now reads like a boarding pass", "The checklist is grouped by who it belongs to", "The Leave sheet" and "How people are shown", plus section 4, "Today" and "Game plan"
- spec-v0.18.md: §4, §5, §8, §19 and Appendix B (F21)
- screen-map.md
- issues.csv, the rows C42, G40, T43, T44, T45, T46, A12, R14, T38, T41, T42 and S6

Load the figma-use skill before any Figma call, and figma-generate-library before any library change.

## Where things are

| What | Where |
| ----- | ----- |
| Boards | mvp-lombardi (RK2JTfwao4mV4JgUA193M1), page "Design - lombardi" (2177:1136). Drafts go on a drafts page first and move to Design - lombardi only when Greg approves them. |
| Library | mvp-design-library (A3SHbWiO5cyRDtIZ9sNNz7), Components page 150:183. A library change reaches the boards only after Greg publishes and accepts the update, so say when a publish is needed. |
| Investor demo | The flow "Investor demo · end to end, from C-03 · Today 7:25 am", starting on "Investor demo · start" (2669:9678). The moment list is in prototype-pass-3-report.md. |
| C-03 Today | 2556:4129 |
| C-03b Leave sheet | 2560:6477, and 2560:6743 with Home's leaving time open |

## Where the last session stopped

The completion session wrote fixtures 3.18 and spec 0.18, updated the followers and the issues file, and changed the library without publishing it.

- **ChecklistGroup (253:431)** gained the folded states and the taps between them (T38). It now has 36 variants on three axes: Fold to, Items and State.
- **DayGroup (295:1283)** is new, with Collapsed and Open variants and a tap on the heading (G32, G36, G39).
- **ReviewCard's Line property** was already built locally and needs only the publish.

The steps it did not reach are still owed: swapping the boards to the new components, drafting the missing boards from fixtures 3.18, wiring every item in prototype-scrub-1.md, and writing prototype-pass-4-report.md. They continue in this session, after the scrub 2 fixes reach the library, so Greg publishes once for both. If Greg has already published, swap the boards first and publish the scrub 2 changes separately.

## Greg's findings so far, sorted

Every finding from the first flow is logged in issues.csv on October 17, 2026. They sort into four groups.

**Already logged, needs no new decision**

- **R14.** The article's Back scrolls away. This is fixed when the article frame is restructured as a page.
- **T38.** The checklist's finished state is built in the library and reaches the boards with the publish and the swap.

**Fix is clear, needs fixtures words and a component change**

- **T43.** The boarding pass carries no title. The proposal repeats the destination's item from Later today, with its chip, above the route.
- **T44.** A child's checklist heading is a bare name. The recommendation is "Mallory needs" and "Both girls need", with "Before you leave" unchanged. This also covers the copy sweep.
- **T46.** Nothing on the Leave sheet looks editable, and its inactive Save reads as a button with nothing to save.

**Needs Greg's choice before anything is built**

- **T45.** The status pill should show urgency. The proposal is neutral, then warning tint from 15 minutes before, then a filled "Time to leave", then "Running late".
- **G40.** She can't see where an item lands after Add to the plan. The proposal is a transient highlight on the row, with no Changed mark.
- **C42.** Heather wants blue child chips and ink-gray adult chips. This needs candidate tokens and Heather's choice.

**New scope**

- **A12.** A typed and photo capture on Today that changes a departure. This is F21, parked since spec 0.12, so it moves into the prototype only if Greg says so, and it needs a new moment in the fixtures.

## How to sort what Greg sends next

Greg will send one list per sitting, each item naming the board, what he did, what he saw and what he expected.

1. **Log every item first.** Give each one a row in issues.csv, with "Greg, prototype scrub 2" as the source, before deciding anything. If an existing row already covers it, update that row instead.
2. **Sort each row into one of the four groups above.**
3. **Ask once per sitting.** Put the choices that need Greg into a single AskUserQuestion round, with a recommendation first on each, rather than asking as they come up.
4. **Fix at the component before the board.** Most findings so far land on NowBlock, StatusPill, ChecklistGroup and the Leave sheet, and a component fix reaches every board at once.
5. **Order the fixes.** Start with what investors see first in the demo, which is C-03's Now. Then do anything that touches many boards through one component. New scope comes last.

## The work, in order

1. **Ask Greg the open choices.** Ask in one AskUserQuestion round: T45 thresholds and words, G40 highlight, T44 heading wording, A12 go or park, and the three pending proposals T41, T42 and S6. For C42, prepare two or three candidate blue tokens, plus an ink-gray for adult chips. Check each one for contrast on bg/card and bg/canvas, for distance from cerulean #1B7498, and in grayscale. Lay them out as a small swatch board on the drafts page for Heather to choose from, and leave the tokens unchanged until she does.

2. **Fixtures 3.19 pass.** Write fixtures-3.19-pass.md with the words for T43, T44, T45, T46 and G40, plus A12's moment if Greg approves it, with its invented facts in Appendix A. Apply the pass to the full document and save story-fixtures-v3.19.md, checking that every quoted passage is found exactly once.
   - **The copy sweep (T44).** Begin by writing the rule that separates labels from headings into fixtures section 4. Field labels on the pass, pill text and table labels stay short. A heading or line that tells her something is a full sentence. Then check every screen, card and sheet in section 4 and the moments against that rule.

3. **Spec 0.19.** Make spec 0.19 for the same changes, with Appendix A naming the issues. If A12 goes ahead, move F21 into the prototype in Appendix B, and say in §5 that a change the coach makes from what she captured joins the plan as hers, so the rule that Today changes only leaving times still holds. Update the followers as CLAUDE.md describes.

4. **Library.** Build these, each bound to Hearth variables and text styles:
   - NowBlock gains the title line (T43).
   - StatusPill gains its urgency stages (T45).
   - ChecklistGroup's child heading and folded line take the new wording (T44).
   - The Leave sheet draws "Leave at" as a control, gains its line under the heading, and hides Save until a time changes (T46).
   - If Heather has chosen, the kid and adult tokens change (C42).

   Then ask Greg to publish, covering the unpublished work from the last session as well.

5. **Boards.** After the publish:
   - Swap the Today boards to the new ChecklistGroup and NowBlock.
   - Swap the game plan boards to DayGroup and ReviewCard.
   - Restructure the article frame so Back stays fixed (R14).
   - Draft the missing boards on a drafts page, in the order the completion prompt gives, together with the G40 landing state on the C-04 and C-06b game plan boards, and A12's boards if approved.

6. **Wiring.** Once Greg approves the drafts, move them to Design - lombardi and wire everything in the completion prompt and prototype-scrub-1.md, plus the picker state on both C-03b Leave sheets. Re-run the dead-end audit over every board the demo reaches, record what is left in prototype-pass-4-report.md, and update the screen map with every new frame ID and its layout type.

7. **Issues.** Close or update each row as it lands, including T38, U3, G38, G39, C40, R14 and every row from scrub 2. Keep the backlog in step.

## Rules

- Every word on screen comes from the fixtures.
- Nothing is shown as settled, nothing is sent without the parent, MVP never writes to her calendar, and a sheet never opens another sheet.
- Status never relies on color alone, so the pill's words change with its color.
- The coach never praises her, and nothing celebrates.
- Headings that tell her something are full sentences, with numbers from one to nine as words. Links say what they do in a phrase, except Back, Close, Send, Save and Undo.
- Write every document in complete sentences, summary first.
