# Session prompt: completing the investor demo prototype

*MVP (Lombardi) · Written October 16, 2026 · Paste everything below the line into a new chat in the "MVP - Lombardi" project, and attach the screenshot of Settings from the earlier build.*

---

This session finishes the Figma prototype so the investor demo can be played end to end without dead ends. The game plan session on October 16 produced fixtures 3.17, spec 0.17, the game plan boards and a wired investor demo. When Greg played it, he found controls that go nowhere, and Claude's audit of the 50 boards the demo reaches, in `prototype-scrub-1.md`, lists all of them. Work through that list in the order below, and keep the documents current as you go, as `CLAUDE.md` describes.

## Read first

Read these project docs before touching anything: `CLAUDE.md`, `prototype-scrub-1.md`, `prototype-pass-3-report.md`, `story-fixtures-v3.17.md` (sections 2 and 4, and C-03 to C-07), `spec-v0.17.md` (§2, §5, §8, §13 and §15), `screen-map.md`, and the rows T38, U3, G32, G36, G38, G39 and C40 in `issues.csv`. Load the figma-use skill before any Figma call, and figma-generate-library before any library change.

## Where things are

| What | Where |
| ----- | ----- |
| Boards | `mvp-lombardi` (`RK2JTfwao4mV4JgUA193M1`), page "Design - lombardi" (`2177:1136`). Drafts go on a drafts page first and move to Design - lombardi only when Greg approves. |
| Library | `mvp-design-library` (`A3SHbWiO5cyRDtIZ9sNNz7`), Components page `150:183`. A library change reaches the boards only after Greg publishes and accepts the update, so say when a publish is needed. |
| Investor demo | The flow "Investor demo · end to end, from C-03 · Today 7:25 am", starting on "Investor demo · start" (`2669:9678`). The right and left arrow keys move between moments, and the moment list is in `prototype-pass-3-report.md`. |
| Draft DayHeading | DayHeading (draft) `2651:9869` on the page "Drafts - game plan" (`2628:7513`) |

## Decisions already made

- **Checklist roll-up (T38), decided by Greg on October 16.** When a child's last item is ticked, the group folds to one line, such as "Alexis · 3 packed", and reopens on tap. When every group is ticked, the checklist folds to "Everything is packed for 7:40", with a check that draws in once. There is no praise, no coach line and no confetti. F30 moves into the prototype.
- **Settings (U3).** Greg's earlier design, in the attached screenshot, is the reference: a large "Settings" title, then cards that each have a heading, a line saying what the card holds, and label-and-value rows. Keep that structure. The content follows spec §13 and Charlotte's facts: Your account (her email, the Family plan, billing), Your calendar and forwarding address (Google Calendar, connected, and charlotte-k7m@forward.mvp.example), Notifications, Language at home (English) and Privacy. The page shows Back at the top left, because Settings is a page. Drop the screenshot's username, its Spanish and English, and its misspellings. The Coach card, with voice and personality, is a new feature: give it an F-number in spec Appendix B and park it rather than drawing it.
- **Library changes are approved** wherever the prototype needs an interactive component. Greg said so on October 16.
- **No wireframes are needed** for the missing boards. Draft them straight into Figma from library components, with every word taken from the fixtures.

## The work, in order

1. **Fixtures 3.18 pass.** Write `fixtures-3.18-pass.md` with the words every missing board needs: the checklist roll-up, Settings, the reminder sheets for C-03, C-03b and C-06b, the card after "Move yoga to 12:15" with Undo, the drafts behind "See reply", "Note to Westview" and "Skip tutoring this Friday" (the fixtures already write most of these, so quote them), item pages for the game plan rows the demo shows, and the Team and Kids pages that are missing. Apply the pass to the full document and save `story-fixtures-v3.18.md`, checking that every quoted passage is found exactly once. Then make spec 0.18: §5 for the roll-up, §13 for Settings, §8 for interactive days, Appendix A, and Appendix B for the Coach settings F-number. Spec 0.18 also removes Codex as the named build tool in the summary, §1 and §17, using "the build agent", because the dev tool is now undecided. Update AGENTS.md, CLAUDE.md and the backlog in the same way, and rename `codex-review-build-1-prompt.md` to `review-build-1-prompt.md`.
2. **Library.** Build these as interactive components, each bound to Hearth variables and text styles:
   - ChecklistGroup gains the folded group, the folded checklist, and on-tap interactions between them (T38).
   - DayHeading or DayGroup moves to the library with Open and Collapsed variants and a tap that switches them, with the open-day container described in G36 (G39, G32, G36).
   - ReviewCard gets its Line property published.

   Then ask Greg to publish.
3. **Boards.** After the publish, swap the game plan boards to the interactive DayHeading, and swap the Today boards to the new ChecklistGroup. Then draft the missing boards on a drafts page, in demo order:
   - the reminder sheets;
   - the card after the yoga move;
   - the three drafts;
   - the C-06b Today card in its 3.17 form, which asks her to add the checkup first, plus the board after she adds it (G38);
   - Settings;
   - the game plan item pages;
   - Edward's answers on the C-04b and C-06 cards, and Ms. Reyes's "I can't do this" and Change;
   - the missing person pages, Add someone and New village group from Wednesday, and Add a school and Add to this card.
4. **Wiring.** Once Greg approves the drafts, move them to Design - lombardi and wire every item in `prototype-scrub-1.md`:
   - the capture bar on the game plan;
   - Save on the C-03b Leave sheets;
   - the monogram to Settings on every board;
   - the Today tab on every board to the Today of its own moment rather than always C-03.

   Re-run the dead-end audit over every board the demo reaches, and record what is left in a new `prototype-pass-4-report.md`. Update the screen map with every new frame ID and its layout type.
5. **Issues.** Close or update T38, U3, G38, G39 and C40 as each lands, and add a row for anything new.

## Rules

Every word on screen comes from the fixtures. Nothing is shown as settled, nothing is sent without the parent, MVP never writes to her calendar, and a sheet never opens another sheet. Headings that tell her something are full sentences, with numbers from one to nine as words, and links say what they do in a phrase, except Back, Close, Send, Save and Undo. Write every document in complete sentences, summary first.

Greg will review the prototype in depth and send his findings in bulk, one list per sitting, each naming the board, what he did, what he saw and what he expected. Turn each finding into an issue row, group the fixes by board, and make them in one pass.
