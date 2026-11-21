# Prototype pass 4: report

*MVP (Lombardi) · October 18, 2026 · Figma file `mvp-lombardi`, page "Design - lombardi" · Fixtures 3.20 · Spec 0.20*

## Summary

This pass moved the 35 approved completion drafts onto "Design - lombardi", replaced the draft day headings on every game plan board with the library's DayGroup, showed Undo again on the card after "Move yoga to 12:15" (C43), and wired the investor demo through the items left in prototype-scrub-1.md. The monogram now opens Settings on 46 boards, the Today tab on 33 boards opens that board's own moment, and the game plan's capture bar opens the board where she types. Every new page's Back and Close goes back. The work that needs the library publish of October 18 is not done yet: the scrub 3 changes on the Today and game plan boards (T47, T48 and T49), the conflict on the pass (T50), and the boards that fixtures 3.20 changes or adds under G42 and G43, including C-09. Those follow as soon as Greg publishes `mvp-design-library` and accepts the update.

## What changed on the boards

| Change | Boards | Issues |
| ----- | ----- | ----- |
| 35 drafts moved from "Drafts - completion" to "Design - lombardi", placed to the right of the existing boards and listed in `docs/screen-map.md` | The 35 frames in the screen map's "Added October 18, 2026" table | T38, U3, G38, C40 and the scrub 1 boards |
| Each day drawn with DayGroup in place of the draft DayHeading, with the rows carried over, their text overrides kept, and "Nothing planned" changed to "Nothing is planned." | All seven game plan boards, 41 days in all | G32, G36, G39 |
| Undo shows again on the card after "Move yoga to 12:15", by resetting the overrides the accepted update had left on the instance | `2704:10663` | C43 |
| "Why" in the Leave sheet's backups now reads "See the coach's reasons" | `2560:6876`, `2560:7024`, `2560:7209` | G37 |

## What is wired now

| From | Control | To |
| ----- | ----- | ----- |
| Every board with a monogram (46) | The monogram | Settings, `2704:11027` |
| Every moment board with a tab bar (33) | Today | That moment's Today board. C-04 has no Today board of its own, so its boards open C-03b at 2:46 pm, which is the nearest Monday state. |
| Every game plan board | The capture bar | She types on the game plan, `2652:12260` |
| C-03, C-03b at 2:05 and 2:46 pm, C-06b | Remind me | Their reminder sheets |
| C-03 | See reply | The WhatsApp reply draft |
| C-06 | Move yoga to 12:15 | The card after the move, whose Undo returns to C-06 |
| C-06 Leave sheet | Ask Min-jung | Min-jung's draft, whose Send opens the card after Plan B |
| C-06 card after Plan B | Note to Westview | The note to Westview |
| C-06b | Skip tutoring this Friday | The text to Ms. Reyes, whose Send returns to C-06b |
| C-04 game plan | The second session, violin, Friday tutoring, picture day and the library run | Their item pages |
| C-06b game plan | Thursday's four rows | Their item pages |
| The library run's page | Ask someone to take this, then Next, then Send | The page of people, the draft, and C-04 when she closes the game plan |
| Team on Monday and Wednesday | Every person row and both chat rows | Each person's page and each chat. Grace, Dev, Nina and Rafael open Tom Alvarez's page, which stands for all four. |
| Team on Wednesday | Add someone and New village group | Their empty forms |
| Edward's page | Message | The composer, whose Send opens the chat with Claire as the nearest drawn chat |
| C-05 coach card | Ask my village | The village post composer |
| Kids | Add a school, and Add to this card on the Westview card | Their page and sheet |
| View as | Edward's I've got it on C-04b, Send answer on C-06, and Ms. Reyes's I can't do this and Change | The boards after each answer |

## Dead-end audit

A script walked all 121 boards for buttons, rows, choices and tabs that lead nowhere, leaving out staged controls (Directions, Call, Text, Send from Mail or WhatsApp, Book at Willow, Snooze). Most of what it still finds is correct as it is: controls under a sheet's scrim, the tab a board is already on, and the radio choices and person ticks inside sheets and composers, which change state rather than screens. The dead ends that matter are these.

| Board | Control | Why it is left |
| ----- | ----- | ----- |
| C-03b Leave sheet, Home at 2:25 (`2560:6743`) | Save | The board draws no Save, although the fixtures show Save once she changes a time. It needs Save drawn before it can be wired, which goes on the next board pass. |
| C-01 Coach (`2530:3553`) | Add to the plan, Ask Edward for help | The board predates 3.20. The read-back loses Add to the plan under G42, and Ask Edward needs a C-02 draft board, which does not exist. |
| 0i-b and 0i-c, the first board | Answer, Open the game plan | Answer becomes "Add the start time" once the library publish lands (G37). There is no C-00 game plan board for Open the game plan. |
| Every Leave sheet | See the coach's reasons | The Coach tab's full messages for C-06 and C-06b are built from the wireframes, so there is no board to open. |
| Item pages | Move to another day or time and the owner's link | The picker and the people page are drawn only for the library run. |
| The recipient's phones | I can't do this, and Change after answering | Only the path each moment takes is drawn. |

## Board names

After this pass, every board on "Design - lombardi" was renamed to three parts, moment, screen and state, such as "C-03 · Today · 7:25 am", so a pass that looks for a moment's boards finds all of them, including the first board, which the earlier names hid under "0i". The 120 boards keep their frame IDs, and `docs/screen-map.md` explains the pattern. The text label "Game plan · fixtures 3.17" and the "Investor demo · start" board keep their names.

## Waiting on the library publish

These start as soon as Greg publishes `mvp-design-library` and accepts the update in `mvp-lombardi`.

- **T47.** The done count moves from SectionHeading to LaterTodayCount on every Today board.
- **T48.** The calendar mark moves before the item on every row. This follows from the publish alone, because the change is in the components.
- **T49.** The tasks under "Before you leave" on C-06 and C-06b swap to ChecklistItem's Task kind, with Brightwater's number and Call, and the pickup address and Send from Mail.
- **T50.** The board for a conflict on the pass, drafted from NowBlock's new Conflict line.
- **G42 and G43.** C-00's introduction with the ticked calendar line, the first board's "Add the start time", C-01 without Add to the plan, C-06b with one coach card and no review card, the Ada boards, the Settings card "What the coach adds for you", and the notice board.
- **G21.** C-09's Today, its Leave sheet and its game plan, with the read-back strip for the pumpkin.
- **G41.** The removed lines come off the older boards: the line above Send on the C-02 and Sunday drafts, "sees only what you send." on the person pages, and the privacy note in the composers.

The new and changed boards are drafted on a drafts page for Greg, and moved and wired once he approves them, after which this report gains a second part.
