# Prototype scrub 1: dead ends in the investor demo

*MVP (Lombardi) · October 16, 2026 · Figma file `mvp-lombardi`, page "Design - lombardi"*

Greg raised three gaps after playing the investor demo from C-03. Before he reviews further, Claude walked every board the demo can reach (50 boards) and listed each control that looks tappable but goes nowhere. This file sorts them by what they need, so Greg's own review can concentrate on what only he can judge. Controls covered by a sheet's scrim, and the tab a board is already on, are left out, because a tap on them correctly does nothing.

## Greg's three findings

1. **Ticking the last checklist item gives nothing back.** This is issue T38, parked as F30 on October 15 with a proposal that was never decided: a child's group folds to one line, such as "Alexis · 3 packed", when its last item is ticked, and the whole checklist folds to "Everything is packed for 7:40" with a check that draws in once. It needs Greg's choice and fixtures words before the library's ChecklistGroup and the boards can change.
2. **The monogram opens nothing.** No Settings board has ever been drawn. Spec §13 says Settings is not drawn for the demo and the build shows a placeholder page with six headings and Back, and spec §15 gives the monogram a long press for the household switcher. The prototype therefore needs a placeholder Settings page (issue U3), which is small. A designed Settings page is review build 2.
3. **Game plan days don't open and close.** The boards draw each day in one state, open or collapsed, and nothing switches between them. The fix is an interactive component rather than more boards: DayHeading built in the library with Open and Collapsed variants and a tap that changes one into the other, so every day on every board works once it is placed (issue G39, which depends on G32 and G36 and on a library publish).

## Dead ends, sorted by what they need

### Can be wired now from boards that exist

| Board | Control | Goes to |
| ----- | ----- | ----- |
| Every game plan board | The capture bar | The board where she types on the game plan, with the keyboard up |
| C-03b's two Leave sheets | Save | Today at 2:05 pm |
| Game plan tab bars | Today | Already the matching moment. Tab bars on the older boards still send Today to C-03, which a per-moment link would fix |

### Need a board that does not exist yet

| Area | Missing boards |
| ----- | ----- |
| Settings | The placeholder page behind the monogram (U3) |
| Today | The reminder sheet for C-03, C-03b and C-06b (only C-06 has one); the card after "Move yoga to 12:15", with Undo; the WhatsApp reply draft behind "See reply" on C-03; the email to Westview behind "Note to Westview"; the draft to Ms. Reyes behind "Skip tutoring this Friday"; the C-06b card in its 3.17 form (G38); Thursday's sheet after "Skip yoga this week" |
| Game plan | Item pages for every row other than the Friday checkup; the result of "I don't need this"; the week strip jumping to a day; days opening and closing (G39) |
| Checklists | The completed group and the completed checklist (T38) |
| Requests, View as | Edward's answers on the C-04b and C-06 cards; Ms. Reyes's "I can't do this" and Change |
| Team | Pages for the village members without one (Karen, Ms. Reyes, Jenna and the five other group members); Message on Edward's page; Add someone and New village group from the Wednesday board; choosing people in the composers |
| Kids | Add a school; Add to this card on both school cards |

### Staged by design, and left alone

Directions, Call and Call Northside open another app in the product, and the prototype stages them, so they stay unlinked unless Greg wants a staged screen for each.

## How Greg's review should report

Greg no longer needs to report taps that go nowhere, because this list covers them. His review is most useful for what a script can't find: wrong words, wrong states, layout that reads badly, and moments where the story breaks. Those come in bulk, as one list per sitting, each item naming the board, what he did, what he saw and what he expected. Claude turns each item into an issue row, groups the fixes by board, and makes them in one pass rather than one at a time.
