# Figma pass: fixtures 3.15 and spec 0.15

*For Claude with the Figma connector. Start a new session and paste everything below the line. Attach or point it to `fixtures-3.15-pass.md`, `spec-v0.15.md`, `wireframe-pass12-prompt.md` and `wireframe-pass12a-prompt.md` in the MVP - Lombardi project.*

## Why this pass, and why in two parts

Fixtures 3.15 changes how Now looks and adds the Leave sheet, the coach's backups and one pattern for every sheet. The library has no components for any of it, so the library comes first. A component added to the library can't be placed on the boards until Greg publishes the library and accepts the update in `mvp-lombardi`. The pass therefore stops between the two parts, and Part 2 starts only when Greg says the library is published.

---

You are updating the MVP (Most Valuable Parent) Figma files to match story fixtures 3.15 and spec 0.15. Work in two parts. Do Part 1, report, and stop. Start Part 2 only after Greg confirms that he has published the library.

Before you write anything, load the `figma-use` skill and, for Part 1, the `figma-generate-library` skill. Read the files named at the top. The fixtures decide every word and fact. The spec decides behavior. The two wireframe prompts list the words and values screen by screen, and pass 12a supersedes pass 12 wherever they differ about Now. Never invent a word. If a word you need is not in those files, leave a placeholder in brackets and list it in your report.

## Files

| File | Key | What it holds |
| ----- | ----- | ----- |
| `mvp-design-library` | `A3SHbWiO5cyRDtIZ9sNNz7` | The master library. Foundations `0:1`, Icons `147:163`, Components `150:183`. The Hearth variables and the text styles live here. NowBlock is `218:369`. |
| `mvp-lombardi` | `RK2JTfwao4mV4JgUA193M1` | The boards. "Design - lombardi" (`2177:1136`) is what the build reads. Do not edit that page in this pass. |

## Rules for everything you draw

- Build from the library's components, and bind every fill, stroke, space, radius and text to a Hearth variable or a text style. Write no raw values. If a value you need has no variable, use the nearest one and list it in your report.
- Use the nine text styles as the spec's §19 assigns them: `display` for the leaving time, `body-strong` for the route, the field values and the checklist group headings, `meta` for field labels, the next station and small lines, `title` for a task leading Now, and `body-large` for checklist rows.
- Children's names in checklist group headings use `kid`. "Before you leave" uses `ink/primary`. A late Arrive value uses the status warning color, with a clock icon from the Icons page.
- No uppercase, no letter-spacing, no pure white or pure black, and no shadows on Now. Now is not a card.
- Every tap target is at least 44 px.
- Before you build anything, inspect what already exists: the NowBlock component, ChecklistRow, any Sheet or ReminderSheet component, and the icons. Extend and correct what exists rather than making parallel copies.
- Take a screenshot of each component and board when you finish it, and compare it with wireframe pass 12a's description.

## Part 1: the library

### 1. NowBlock becomes a pass

Rebuild NowBlock (`218:369`) with a `Kind` property:

- **Leg** is the boarding pass. From top to bottom:
  - The route, such as "Home → Westview", with a chevron at the right edge. The next station sits beneath it, such as "Then Cedar Grove, 2:45", and its line can be hidden.
  - The time at the left and a StatusPill at the right, on one line.
  - PassFields.
  - A Perforation.
  - A slot for ChecklistGroup instances.
  - The actions: Remind me and Directions as outlined buttons, each of which can be hidden.
- **AtHome** keeps the plain layout for a timed thing at home: the time, the countdown, the item such as "Dinner with Claire", and Remind me.
- **Task** holds the Meta line "Nothing to drive to today.", the task in `title`, its steps as checklist rows, and Remind me and Ask someone.
- **Quiet** holds the single line "Nothing else today."

Give Leg a `Stage` property with the values Upcoming, TimeToLeave and Late, which switch the pill and the Arrive field. Retire the drive line and the old countdown line under the time.

Why: a pass puts each fact in a fixed place with a small label, so she learns where to look once. Stages as variants let the boards show 2:05, 2:21 and 2:31 from one component.

### 2. The parts of the pass

- **StatusPill**, with the values Upcoming and TimeToLeave. Upcoming is outlined and reads "in 10 min". TimeToLeave is filled with `ink/primary` and its text uses `ink/on-accent`. Both use the `pill` radius.
- **PassFields** has three fields at equal widths, each a `meta` label over a `body-strong` value. Its labels can be set to Drive, Arrive and Pickup, or to Drive, Arrive and Starts, or to With and Starts. Add a `Late` boolean that colors the Arrive value with the warning color and puts the clock icon before it.
- **Perforation** is a dashed line across the full width, using `border/hairline`.

### 3. Checklists are grouped

Build **ChecklistGroup** from a heading and a stack of **ChecklistItem** rows.

- The heading has a `Who` property. Child sets it in `kid`, for the name, "Both" or "All three". You sets it in `ink/primary`, for "Before you leave".
- ChecklistItem has the states Open and Ticked. Open is an empty circle in a fixed left column followed by the item, which wraps under itself. Ticked fills the circle with a check and dims the text to `ink/muted`. The whole row is the target.
- There are no chips and no counts.

Mark the old ChecklistRow, the one with a box and a chip, as deprecated in its description, but don't delete it while boards still use it. Chips stay on the rows in Later today, the game plan and requests.

Why: grouping does the job a chip does in a mixed list, and every item starts at the same left edge, so long items no longer break badly.

### 4. Every sheet is one pattern

Build **Sheet** from these parts:

- **SheetHeader** holds a grabber, a Close icon at the top right with the accessible name "Close", the heading, and an optional `meta` line.
- **SheetOption** is a radio row with the states Default and Selected.
- **ActionRow** is a line of text with one button.
- **SheetFooter** holds the primary button and an optional link beneath it, such as "Remove reminder".

Give Sheet a `Height` property with the values Compact and Tall. Then make the sheets on Today as instances or variants of it:

- **ReminderSheet**, in the states Default, Set (with "Update reminder" and "Remove reminder"), NotificationsOff (with the line "Notifications are off, so this reminder can't reach you.") and NotificationsOffDeclined (the same line with the link "Open settings").
- **AnswerSheet**.
- **AskSomeoneSheet**.

Why: every sheet needs the same way out, and closing never changes anything.

### 5. The Leave sheet

- **RouteStation** has the variants Start, Stop and End. A stop shows the dot on the rail, the place, the item row with its chips and start time, and "Leave at" with the time drawn as a link. End reads "Back about" and the time. Add an `Editing` state that shows a time picker in place and a `meta` result line under the station, such as "You reach Westview at 2:35, five minutes after pickup."
- **RouteLine** is a vertical stack of stations on a thin rail using `border/strong`. This rail and the perforation are the only lines drawn on Today.
- **BackupRow** is the label "Plan B ·" or "Plan C ·", the coach's line in `body`, and one button.
- **LeaveSheet** is a Tall Sheet headed "When to leave", with a line naming the part of the day and the number of stops, then a RouteLine. Below that come an optional section headed "Other ways this could go" with up to two BackupRows, an optional coach line for when there is no other backup, the link "Why", and Save in the footer.

Why: the run is a line of stops, home is just one station, and the backups wait one tap away on Today.

### 6. Icons

Check the Icons page for close, chevron, clock, bell, navigation, check and calendar-mark. Add any that are missing, following the page's order of sources: Material Symbols, then Lucide, then a custom drawing. Name each one by meaning and record its source in the variant description.

### Report for Part 1, then stop

List every component you added or changed, with its node ID and properties. List every value that had no variable and every placeholder. Then tell Greg that the library needs publishing, and that the update must be accepted in `mvp-lombardi` before Part 2. Stop there.

## Part 2: the boards

Make a page in `mvp-lombardi` named "Drafts - 3.15". Work only on that page. Greg moves boards to "Design - lombardi" himself, because that page is what the build reads.

Each board is 440 px wide, follows the two surfaces of the C-06 frame (`2520:1083`), and is named by fixtures ID and time, such as "C-03b · Today 2:05 pm". For a corrected board, duplicate the current frame onto the drafts page, swap in the new components and keep everything else. Take the words from pass 12a's table and from fixtures 3.15.

| Board | Start from | What changes |
| ----- | ----- | ----- |
| C-03 · Today 7:25 am | `2519:912` | A pass with With The Parks and Starts 8:00, and Alexis's group |
| C-03b · Notification 2:00 pm | `2520:1661` | "Leave in 15 min for Westview, then Brightwater" |
| C-03b · Today 2:05 pm | `2520:1083` | New board: a pass at Upcoming, Mallory's group, Later today with "2 done this morning", and MVP Recommends. No coach card. |
| C-03b · Leave sheet | New | Home, Westview, Cedar Grove, Brightwater, then back home about 4:35, plus a second board with Home's leaving time open at 2:25 |
| C-03b · Today 2:31 pm | C-03b 2:05 | A pass at TimeToLeave, Westview → Cedar Grove, Directions only, and "3 done today" |
| C-03b · Today 2:46 pm | C-03b 2:05 | Cedar Grove → Brightwater, Starts 3:30, and "4 done today" |
| C-06 · Today 11:45 am | `2520:1083` | A pass at 2:15 pm, Alexis's group, Before you leave |
| C-06 · Leave sheet, backups | New | Thursday with Plan B (Ask Min-jung) and Plan C (Skip yoga this week) |
| C-06 · Card after Plan B | `2520:1083` | The card from wireframe 2f, with no Undo |
| C-06 · Leave sheet, Min-jung says no | New | One backup and the line "I don't see another way for Thursday." |
| C-06 · Reminder sheet | `2520:1271` | The Sheet pattern, "For 2:15 pm · Westview", and the 2:00 and 1:45 times |
| C-06 · Reminder set | `2520:1478` | The button "Reminder at 2:00" and the set sheet beside it |
| C-06 · Notifications off | New | Both NotificationsOff states |
| C-06b · Today 1:15 pm | `2520:1678` | A pass with "in 1 hr" and "Send Westview the pickup note" |
| C-06b · Leave sheet, backups | New | Friday with Plan B (Call Northside) and "I don't see another way that keeps both on Friday." |
| C-07 · Tonight | `2520:1866` | Ready tonight grouped, Tomorrow starts at 6:55 am, and grouped checklists |

Don't draw the running-late board, Wednesday at 5:10 pm or the Sunday boards. Those are for the wireframes only, and the Late, AtHome, Task and Quiet variants already carry their layouts.

### Report for Part 2

List each board with its frame ID, the frame it replaces, and any difference from the fixtures you could not resolve. The frame IDs go into `docs/screen-map.md` once Greg moves the boards to "Design - lombardi".

## Check before you finish

- No board shows a countdown line under the time, a line beginning "You leave for", or a drive line.
- No checklist row carries a chip, a square box or a count.
- Every sheet has a grabber and a Close icon.
- Every value is bound to a variable or a text style.
- Nothing on "Design - lombardi" changed.
