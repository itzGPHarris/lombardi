# Session prompt: fixtures 3.20, prototype scrub 3 and finishing the investor demo

*MVP (Lombardi) · Written October 18, 2026 · Paste everything below the line into a new chat in the "MVP - Lombardi" project.*

---

This session brings the documents to fixtures 3.20 and spec 0.20, applies Greg's third round of prototype findings, and finishes the investor demo so it plays end to end. The library is published and accepted in mvp-lombardi, so every board change in this session can be made directly. Keep the documents current as you go, as `CLAUDE.md` describes, and write every document in complete sentences, summary first.

## Where things stand on October 18, 2026

- **Documents.** Fixtures 3.19 and spec 0.19 are in the repository, and the 3.19 project instructions are in the project settings. The issues file and the backlog in the project are current to this morning. Fixtures 3.20 and spec 0.20 have not been written, and several decisions are waiting for them (listed below).
- **Library.** `mvp-design-library` is published, and the update is accepted in `mvp-lombardi`. The publish carried the folded ChecklistGroup, DayGroup with Open and Collapsed states, ReviewCard without its disclaimer line, NowBlock's title and urgency stages, the Leave sheet's instruction line and hidden Save, the new surface ramp with `bg/control` (C44), and the revised indigo and cerulean (C42).
- **Boards.** The game plan boards still use the draft DayHeading rather than DayGroup, and the Today boards have not been swapped to the folded ChecklistGroup. 35 drafts from the completion session sit on the page "Drafts - completion" (`2704:9428`) waiting for Greg's approval. Undo on the draft card after "Move yoga to 12:15" (`2704:10663`) was hidden again by the accepted update (C43).
- **Waiting on Greg.** Approval of `g34-coach-adds-proposal.md` (G42, G43, G41 and F35), approval of the drafts, a phrase for the coach card's Answer (G37), a scenario for the conflict on the boarding pass (T50), and confirmation of fixtures Appendix B items 60 and 62 (C39).

## Read first

Read these project docs before touching anything: `CLAUDE.md`, `issues.csv` (rows C18, C26, C42, C43, C44, G21, G26, G38, G41 to G43, T42 and T47 to T50), `backlog.md`, `g34-coach-adds-proposal.md`, `story-fixtures-v3.19.md`, `spec-v0.19.md`, `screen-map.md` and `prototype-scrub-1.md`. The fixtures run past 256 KB, so read them through `project_search` for the sections you need, and ask Greg to connect the repository's `docs` folder before writing the full 3.20 document, so the whole file can be edited in place. Load the figma-use skill before any Figma call, figma-generate-library before any library change, and figma-generate-design before any board change.

## Where things are

| What | Where |
| ----- | ----- |
| Boards | `mvp-lombardi` (`RK2JTfwao4mV4JgUA193M1`), page "Design - lombardi" (`2177:1136`) |
| Completion drafts | Page "Drafts - completion" (`2704:9428`) |
| Color boards | Page "Drafts - scrub 2" (`2699:9353`): C42 (`2699:9354`), C42b (`2715:9456`), C42c (`2719:9455`) |
| Library | `mvp-design-library` (`A3SHbWiO5cyRDtIZ9sNNz7`), Components page `150:183`. DayGroup `295:1283`, ChecklistGroup `253:431`, ReviewCard `278:886`, CoachCard `218:316` |
| Investor demo | Flow "Investor demo · end to end, from C-03 · Today 7:25 am", starting on `2669:9678` |

## Start of the session: Greg's decisions

Open with one round of questions using the question tool, so the rest of the session runs without stopping:

1. G42: approve `g34-coach-adds-proposal.md` as written, change it, or reject it. If he approves it, ask him to confirm the ticked line on 0j over asking later in her first week.
2. G41: accept the table in section 7 of the proposal for the remaining reassurance lines, or name the lines to keep.
3. T50: choose the conflict scenario (see below), or describe his own.
4. G37: a phrase for the coach card's Answer, with two or three proposals drawn from the fixtures.
5. The drafts on "Drafts - completion": approved as a set, or name the boards to change.

## The work, in order

1. **Fixtures 3.20 pass.** Write `fixtures-3.20-pass.md`, apply it to the full fixtures and save `story-fixtures-v3.20.md`, checking that every quoted passage is found exactly once. It carries:
   - Separate towns for the households (C18), closing Appendix B items 10 and 36.
   - The reminder sheet rule as decided (T42, item 72).
   - Moment C-09, Sunday, Oct. 18, as an Optional moment (G21), written under the G42 rule if it is approved.
   - The recurring conflict mark shown as soon as the coach finds it, and the notice (G26, G43, item 65).
   - No set presentation date, with the demo kept in its October week and the anchor moved only for a new season (C26).
   - The disclaimer lines removed (G41), and the proposal's rule for what the coach adds (G42, F35), if approved.
   - The Hearth values: canvas #F0ECE5, card #F9F7F3, control #FFFEFC, cerulean #007198, pressed #004F6B, tint #DFF2FA, children's indigo #22549A on #DDE5ED (C42, C44).
   - Prototype scrub 3: the done count at the foot of Later today (T47), the calendar mark before the item text (T48), tasks that carry their reason and contact with a one-tap action (T49), and the conflict moment (T50).

   Then make spec 0.20 to match (§2, §4, §5, §7, §8, §13, §19 and Appendices A and B), update AGENTS.md, CLAUDE.md, README.md and the brief's constraints section, and write `project-instructions-v3.20.md` for Greg to paste.
2. **Library.** Make these changes, then ask Greg to publish:
   - LaterTodayRow, PlanRow, ReviewItem and RouteStation put the calendar mark before the item, in ink/muted, with no tap target (T48).
   - SectionHeading loses the count, and a count line sits at the foot of Later today (T47).
   - ChecklistRow gains a task variant with a Meta line for the contact and a trailing action button (T49).
   - NowBlock gains a Conflict state (T50).
   - A Notice component for G43, if G42 is approved.
3. **Boards.** Swap the game plan boards to DayGroup and the Today boards to the folded ChecklistGroup. Show Undo on the yoga card again (C43). Apply T47, T48 and T49 to every Today board and the game plan boards, with the task words from 3.20. Then draft the T50 conflict moment and, if G42 is approved, the changed C-06b board and the notice board, on a drafts page for Greg.
4. **Wiring.** After Greg approves the drafts, move them to Design - lombardi and wire the investor demo:
   - every item left in `prototype-scrub-1.md`;
   - the monogram to Settings on every board;
   - the Today tab to its own moment on every board;
   - the new task actions to their drafts or staged apps.

   Re-run the dead-end audit and write `prototype-pass-4-report.md`. Update the screen map with every new frame ID and its layout type.
5. **Issues and backlog.** Close or update each row as it lands, add a row for anything new, and remove finished lines from the backlog.

## Proposals already written for the scrub 3 findings

The issue rows hold the full proposals. In short:

- **T47, the done count.** It becomes a Meta line under the last row of Later today, reading as it does now, such as "2 done this morning". The heading stands alone.
- **T48, the calendar mark.** On every row the order is time, chip, calendar mark, item. The mark is small, in ink/muted, never cerulean, has no tap target, and carries the accessible label "From your calendar".
- **T49, tasks.** A task has words, a reason and a contact. For example, "Call Brightwater to ask for Dana Whitfield", with "Brightwater Family Therapy · 555-0170" in Meta and a "Call" button. A handoff task reopens its draft, such as "Send from Mail" or "Send from WhatsApp", and a message to someone on MVP opens the composer with them chosen. Tapping the row still ticks it. Every task the coach or a handoff creates names who, why and how to reach them, from what MVP already holds.
- **T50, a conflict on the pass.** With the travel table as it stands, a carpool falling through does not make a conflict by itself, because Westview and Cedar Grove are 12 minutes apart and start 30 minutes apart. The scenario needs one more constraint. Candidate 1: Monday at 7:25 the Parks' car won't start, and Mallory has an 8:00 early start at Westview that week, so Cedar Grove at 8:00 and Westview at 8:00 cannot both be met by one driver. Candidate 2: Thursday at 6:50 Edward is called into the office early, so Mallory can't stay home while Charlotte takes Alexis to orchestra at 7:15. The pass shows "Conflicts with" and the other item under its title, the pill and fields stay as they are, and the coach card beneath holds the recommendation, with Other options opening the Leave sheet's backups. Every invented fact goes into Appendix A.

## Rules

- Every word on screen comes from the fixtures.
- Nothing is shown as settled, nothing is sent without the parent, MVP never writes to her calendar, and a sheet never opens another sheet.
- Headings that tell her something are full sentences, with numbers from one to nine as words. Links say what they do in a phrase, except Back, Close, Send, Save and Undo.
- Greg sends his review findings in bulk, one list per sitting. Turn each finding into an issue row, group the fixes by board, and make them in one pass.
