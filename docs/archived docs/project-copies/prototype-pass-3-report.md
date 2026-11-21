# Prototype pass 3: the game plan and the investor demo

*MVP (Lombardi) · October 16, 2026 · Figma file `mvp-lombardi`, page "Design - lombardi" (`2177:1136`)*

This pass wires the game plan boards drawn for fixtures 3.17, gives every tab bar a working Game plan tab, and adds one prototype that runs the investor demo end to end. Everything stays on "Design - lombardi", so the investor demo, the separate flows and the build all read the same frames, and no board exists twice.

## Why there is no separate prototype page

A Figma prototype can only link frames on the same page. A separate "lombardi-prototype" page would need a copy of every board, and every correction to a board would then have to be made twice. Keeping one page means a fix on a board reaches the demo, the separate flows and the build at once. The only new frame is the start screen for the investor demo.

## The investor demo

The flow "Investor demo · end to end, from C-03 · Today 7:25 am" is first in the list of flows. It opens on a copy of the splash, named "Investor demo · start" (`2669:9678`), which moves on to C-03 after a second and a half.

Inside a moment the presenter taps as she would in the separate flow. Between moments she uses the arrow keys: the right arrow jumps to the start of the next moment, and the left arrow jumps back to the start of the one before. The keys work from every board that belongs to a moment, including its sheets, so the presenter can move on from wherever she is.

| Order | Moment | Starts on | Boards in the moment |
| ----- | ----- | ----- | ----- |
| 1 | C-03, Monday 7:25 am | C-03 · Today 7:25 am | C-03 |
| 2 | C-03b, Monday 2:00 pm | The reminder notification | The notification, Today at 2:05, both Leave sheets, Today at 2:31 and 2:46 |
| 3 | C-04, Monday 8:50 pm | C-04 · Game plan · when she opens it | Both C-04 game plan boards |
| 4 | C-04b, Tuesday 7:05 am | Edward's library run, on his phone | That board |
| 5 | C-05, Tuesday | The composer posting to the village | The composer, the group page and its members |
| 6 | C-05c, Tuesday 8:15 pm | The composer to Edward and Claire | The composer and the chat |
| 7 | C-06, Wednesday 11:40 am | Edward changing his answer, on his phone | Every C-06 board, including the sheets, the reminder states and Min-jung's request |
| 8 | C-06b, Wednesday 1:15 pm | C-06b · Today 1:15 pm | Today, Friday's Leave sheet, the three C-06b game plan boards, and Ms. Reyes's text and web page |
| 9 | C-06c, Wednesday 5:00 pm | Team, Wednesday at 5:00 pm | Team and the chat with Claire |
| 10 | C-07, Wednesday 9:10 pm | C-07 · Tonight | C-07 |

C-00 and C-01 come before 7:25 am on Monday, so they stay outside the demo and keep their own flows. C-08 and C-08b have no boards yet.

## The game plan

The Game plan tab now works on every board with a tab bar. It opens the game plan as it stands at that moment: the C-04 board when she opens it from Monday's boards and from Team, Coach and Kids, the C-04 board after she closes it from C-06, the C-06b review board from C-06b, and the C-06b board after she adds the checkup from C-07.

| Flow | Path |
| ----- | ----- |
| C-04 · Game plan | "Add to the plan" on the second tutoring session leads to the board after she closes the game plan. |
| C-06b · Game plan, the checkup waits for review | "Add to the plan" leads to Friday with the checkup in conflict. Tapping the checkup opens its item page, where Back returns, and "Skip tutoring this Friday" leads to Ms. Reyes's text. |
| Game plan · she types a party (wireframe only) | The arrow on the capture bar leads to the read-back strip, and "Other options" opens the suggested trip's page. |
| Game plan · a party on her calendar (wireframe only) | "Add to the plan" leads to the trips the coach suggests, and tapping the drop-off opens its page. |

The tab bar on the game plan boards links back to Today at the matching moment, and to Coach, Team and Kids. The content of every game plan board and item page now scrolls in the prototype.

## What is left

- **The C-06b Today board still carries the 3.16 coach card** (issue G38). Fixtures 3.17 has the card ask her to add the checkup first, so the demo shows the older card until the board is redrawn.
- **Today on a tab bar always opens C-03,** on the boards wired in earlier passes. In the investor demo, the arrow keys are the way back to the current moment after visiting another tab.
- **The C-05 coach card is not in the demo,** because only the card is drawn (`2520:1064`). C-05 starts on the composer.
- **The arrow keys also work in the separate flows,** because they belong to the boards rather than to one flow. This is harmless, and it lets the presenter switch moments from any flow.
