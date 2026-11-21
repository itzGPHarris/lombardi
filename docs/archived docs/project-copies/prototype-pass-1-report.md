# Prototype pass 1: report

*MVP (Lombardi) · October 15, 2026 · File `mvp-lombardi` (`RK2JTfwao4mV4JgUA193M1`), page "Design - lombardi" (`2177:1136`)*

*Status, October 15, 2026, evening: this report is a record of the wiring as it was done. Its three items for the issues file are filed (C36, now fixed, and T36), and C-06 (`2556:4267`) has since been restructured so the sheet scrolls over the header and Now, which also changed its height to 956 px. The Today flows are re-wired once the other Today boards are restructured.*

## Summary

The five Today moments are wired on "Design - lombardi" as eight flows, with 32 tap connections, two timed steps and fixed layers on all 19 Today boards. Every connection points to a frame in the screen map, and no frame moved, changed size or changed name during the wiring. One frame did grow before the wiring started: turning on Show line on the coach card after Plan B made "C-06 · Card after Plan B" (`2556:4299`) 34 px taller, from 1511 to 1545, because the card gained its line and the board's auto layout followed it.

Before wiring, three things happened in the library and on the boards.

- ChecklistItem in `mvp-design-library` now changes from Open to Ticked when tapped, and back again, as an instant change. Greg published it and accepted the update.
- The accept did not reach CoachCard in `mvp-lombardi`. Every coach card instance on the Today boards still ran the version without Show line, although its key matched the published one. I swapped the card after Plan B (`2556:4320`) to the published AfterMove variant, kept its fixture words, and turned on Show line, which reads "Opens an email for you to send to Westview". The card has no Undo, as the fixtures require.
- The two Recommendation cards, on C-06 (`2556:4288`) and C-06b (`2556:4601`), are still on the older CoachCard. They look right and carry no Show line, so I left them alone. They should be updated the same way before the build reads them, and this belongs in the issues file.

## How scrolling and sheets behave

Every Today board is taller than the phone, so it scrolls in presentation. On the plain Today boards, the capture bar and tab bar (the "Bottom" frame) are fixed and constrained to the bottom of the screen, so they stay docked while the rest scrolls.

On the sheet boards, Bottom, the scrim and the sheet are all fixed, with Bottom and the sheet constrained to the bottom of the screen. A sheet therefore rises from the bottom of the screen wherever she has scrolled, and the board behind it keeps her scroll position, because every sheet connection preserves it. Friday's Leave sheet (`2560:7209`) is the exception. It is 1020 px tall, which is taller than the 956 px screen, so pinning it would hide its grabber and Close icon. It scrolls with its board instead, and she reaches it by scrolling down from the coach card, where the scroll position already puts her. Thursday's sheet (`2560:6876`) is 960 px, so pinned it loses 4 px of its top padding, which doesn't show.

This assumes the prototype device is set to 440 × 956. If the presentation shows the sheets in the wrong place, check that setting first.

## Flows

| Flow | Starting frame |
| ----- | ----- |
| C-03 · Getting the girls out the door | C-03 · Today 7:25 am (`2556:4129`) |
| C-03b · The afternoon run | C-03b · Notification 2:00 pm (`2556:4160`) |
| C-06 · Edward can't collect Mallory | C-06 · Today 11:45 am (`2556:4267`) |
| C-06 · If Min-jung says no | C-06 · Leave sheet, Min-jung says no (`2560:7024`) |
| C-06 · Notifications off | C-06 · Notifications off (`2556:4471`) |
| C-06 · Notifications off, declined before | C-06 · Notifications off, declined before (`2556:4525`) |
| C-06b · The checkup runs into tutoring | C-06b · Today 1:15 pm (`2556:4579`) |
| C-07 · Tonight | C-07 · Tonight (`2556:4612`) |

The page's existing flow, "heisman 1" on the splash (`2179:3692`), is unchanged.

## Connections

Smart Animate is 300 ms with ease out. Dissolve is 300 ms with ease out. "Keeps scroll" means the destination opens at the same scroll position as the source.

### C-03b · The afternoon run

| Source layer | Trigger | Destination | Transition |
| ----- | ----- | ----- | ----- |
| Notification (`2556:4162`) on the notification board | Tap | C-03b · Today 2:05 pm (`2556:4171`) | Dissolve, from the top |
| Route (`I2559:6041;254:378`) in Now, Today 2:05 | Tap | C-03b · Leave sheet (`2560:6477`) | Smart Animate, keeps scroll |
| Time row (`I2559:6041;254:384`) in Now, Today 2:05 | Tap | C-03b · Leave sheet (`2560:6477`) | Smart Animate, keeps scroll |
| Home's Leave row (`I2560:6498;258:764;258:668;258:603`) in the Leave sheet | Tap | C-03b · Leave sheet, Home at 2:25 (`2560:6743`) | Smart Animate, keeps scroll |
| Close (`I2560:6498;258:753;255:444`) in the Leave sheet | Tap | Today 2:05 (`2556:4171`) | Smart Animate, keeps scroll |
| Scrim (`2560:6497`) on the Leave sheet board | Tap | Today 2:05 (`2556:4171`) | Smart Animate, keeps scroll |
| Close (`I2560:6764;258:753;255:444`) in the sheet at 2:25 | Tap | Today 2:05 (`2556:4171`) | Smart Animate, keeps scroll |
| Scrim (`2560:6763`) on the sheet at 2:25 | Tap | Today 2:05 (`2556:4171`) | Smart Animate, keeps scroll |
| Today 2:05 (`2556:4171`) | After 3 seconds | C-03b · Today 2:31 pm (`2556:4203`) | Smart Animate, from the top |
| Today 2:31 (`2556:4203`) | After 3 seconds | C-03b · Today 2:46 pm (`2556:4235`) | Smart Animate, from the top |

The timed step on Today 2:05 gives the presenter three seconds to tap the time or the route. Closing the sheet returns to 2:05 and starts the three seconds again.

### C-06 · Edward can't collect Mallory

| Source layer | Trigger | Destination | Transition |
| ----- | ----- | ----- | ----- |
| Other options (`I2556:4288;218:269`) on the coach card, Today 11:45 | Tap | C-06 · Leave sheet, backups (`2560:6876`) | Smart Animate, keeps scroll |
| Route (`I2559:6324;254:378`) in Now, Today 11:45 | Tap | C-06 · Leave sheet, backups (`2560:6876`) | Smart Animate, keeps scroll |
| Time row (`I2559:6324;254:384`) in Now, Today 11:45 | Tap | C-06 · Leave sheet, backups (`2560:6876`) | Smart Animate, keeps scroll |
| Remind me (`I2559:6324;254:427`) in Now, Today 11:45 | Tap | C-06 · Reminder sheet (`2556:4331`) | Smart Animate, keeps scroll |
| Close (`I2560:6899;258:753;255:444`) in Thursday's sheet | Tap | Today 11:45 (`2556:4267`) | Smart Animate, keeps scroll |
| Scrim (`2560:6898`) on Thursday's sheet | Tap | Today 11:45 (`2556:4267`) | Smart Animate, keeps scroll |
| Ask Min-jung (`I2560:6899;258:839;258:747`) in Thursday's sheet | Tap | C-06 · Card after Plan B (`2556:4299`) | Smart Animate, keeps scroll |
| Set reminder (`I2559:6901;256:502;255:465`) in the reminder sheet | Tap | C-06 · Reminder set (`2556:4385`) | Smart Animate, keeps scroll |
| Close (`I2559:6901;256:491;255:444`) in the reminder sheet | Tap | Today 11:45 (`2556:4267`) | Smart Animate, keeps scroll |
| Scrim (`2556:4363`) on the reminder sheet | Tap | Today 11:45 (`2556:4267`) | Smart Animate, keeps scroll |
| Reminder at 2:00 (`I2559:6672;254:427`) in Now, Reminder set | Tap | C-06 · Reminder sheet, set (`2556:4417`) | Smart Animate, keeps scroll |
| Update reminder (`I2559:6951;256:530;255:465`) in the set sheet | Tap | Reminder set (`2556:4385`) | Smart Animate, keeps scroll |
| Remove reminder (`I2559:6951;256:530;255:470`) in the set sheet | Tap | Reminder set (`2556:4385`) | Smart Animate, keeps scroll |
| Close (`I2559:6951;256:519;255:444`) in the set sheet | Tap | Reminder set (`2556:4385`) | Smart Animate, keeps scroll |
| Scrim (`2556:4449`) on the set sheet | Tap | Reminder set (`2556:4385`) | Smart Animate, keeps scroll |

Ask Min-jung skips the draft to Min-jung, which has no 3.15 frame. In the product the sheet closes, her draft opens, and the card after Plan B appears once she has sent it.

The route and time on Today 11:45 were not in the prompt. I wired them to Thursday's Leave sheet because the spec says both open the Leave sheet, and leaving them dead would surprise the presenter. Thursday's sheet board shows the whole sheet, backups included, so it serves both entries.

### C-06 · Notifications off, and Notifications off, declined before

| Source layer | Trigger | Destination | Transition |
| ----- | ----- | ----- | ----- |
| Close (`I2559:7004;256:554;255:444`) on Notifications off | Tap | Today 11:45 (`2556:4267`) | Smart Animate, keeps scroll |
| Scrim (`2556:4503`) on Notifications off | Tap | Today 11:45 (`2556:4267`) | Smart Animate, keeps scroll |
| Close (`I2559:7053;256:584;255:444`) on Declined before | Tap | Today 11:45 (`2556:4267`) | Smart Animate, keeps scroll |
| Scrim (`2556:4557`) on Declined before | Tap | Today 11:45 (`2556:4267`) | Smart Animate, keeps scroll |

Both sheets rise from Remind me on Today 11:45 in the product, so closing them returns there and joins the main C-06 flow.

### C-06b · The checkup runs into tutoring

| Source layer | Trigger | Destination | Transition |
| ----- | ----- | ----- | ----- |
| Other options (`I2556:4601;218:269`) on the coach card, Today 1:15 | Tap | C-06b · Leave sheet, backups (`2560:7209`) | Smart Animate, keeps scroll |
| Route (`I2559:6734;254:378`) in Now, Today 1:15 | Tap | C-06b · Leave sheet, backups (`2560:7209`) | Smart Animate, keeps scroll |
| Time row (`I2559:6734;254:384`) in Now, Today 1:15 | Tap | C-06b · Leave sheet, backups (`2560:7209`) | Smart Animate, keeps scroll |
| Close (`I2560:7232;258:753;255:444`) in Friday's sheet | Tap | Today 1:15 (`2556:4579`) | Smart Animate, keeps scroll |
| Scrim (`2560:7231`) on Friday's sheet | Tap | Today 1:15 (`2556:4579`) | Smart Animate, keeps scroll |

The route and time were added for the same reason as on C-06.

### C-03 and C-07

These flows have a starting point and no connections, as the prompt expected. The checklist rows on every board tick and untick through the library interaction.

## Taps left unwired

| Board | Tap | Frame it would need |
| ----- | ----- | ----- |
| C-03 Today 7:25 | Route and time in Now | Monday morning Leave sheet |
| C-03 Today 7:25 | Remind me | Monday morning reminder sheet |
| C-03 Today 7:25 | See reply and Not this week on the coach card | The village reply in Team, which belongs to pass 2 |
| C-03b Today 2:05, 2:31, 2:46 | Directions | None, because it opens her maps app |
| C-03b Today 2:05 and 2:46 | Remind me again | A reminder sheet for the afternoon run |
| C-03b Today 2:31 and 2:46 | Route and time in Now | A Leave sheet drawn from Westview or Cedar Grove |
| C-03b Leave sheets | Save, and the other stations' Leave at times | A sheet with a saved change, and pickers for each station |
| C-06 Today 11:45 | Move yoga to 12:15 on the coach card | The coach card after a move with Undo, which has no frame |
| C-06 Today 11:45 | Directions | None, because it opens her maps app |
| C-06 Thursday's sheet | Skip yoga this week | The coach card after Plan C |
| C-06 Thursday's sheet | Why | The Coach tab's full message for C-06, which belongs to pass 2 |
| C-06 Thursday's sheet | Ask Min-jung, properly | The draft to Min-jung |
| C-06 Card after Plan B | Note to Westview | The email draft to Westview |
| C-06 Reminder set | Other options on the coach card | A Thursday sheet that closes back to the reminder-set board |
| C-06 If Min-jung says no | Close, scrim and Skip yoga this week | The coach card when Min-jung says no, which has no frame |
| C-06 Notifications off | Set reminder | The phone's own permission request |
| C-06 Declined before | Open settings and Set reminder | The phone's settings, staged |
| C-06b Today 1:15 | Skip tutoring this Friday, Remind me and Directions | The card after the move, a Friday reminder sheet, and none for Directions |
| C-06b Friday's sheet | Call Northside and Why | The staged phone app, and the Coach tab message |
| C-07 Tonight | Each Tomorrow starts row | A Leave sheet for tomorrow's first leg |
| Every board | The tabs, the capture bar and the monogram | Pass 2 |

## Checks

- Every connection points to a frame listed in the screen map's Today section.
- No frame on "Design - lombardi" moved, changed size or changed name during the wiring. The one size change, on `2556:4299`, came from turning on Show line and is described in the summary.
- Every sheet board closes back to the board it rose from, except the Min-jung says no sheet, whose source board has no frame.
- Each flow plays from its start to its last frame. The single-board flows for Min-jung says no stop on their only board.
- The flow markers sit on the canvas in Figma and don't appear in node screenshots, so the screenshots in the session show the starting frames themselves.

## For the issues file

1. The coach cards on C-06 (`2556:4288`) and C-06b (`2556:4601`) are still on the older CoachCard after the October 15 accept. They need swapping to the published version, as `2556:4320` was.
2. "C-06 · Card after Plan B" (`2556:4299`) is now 1545 px tall rather than 1511, because Show line is on. The screen map's height notes don't list heights, so nothing else changes.
3. The coach card when Min-jung says no needs a frame, so the "If Min-jung says no" sheet can close to it.
