# Prototype pass 1: the Today moments

*For Claude with the Figma connector, in a new session. Paste everything below the line. Point it to `screen-map.md`, `fixtures-3.15-pass.md` and `spec-v0.15.md` in the MVP - Lombardi project.*

## Why a new session, and why this scope

The Today frames for fixtures 3.15 are now on "Design - lombardi", and the screen map lists every one by frame ID. Wiring them is a separate job from drawing them, and a fresh session starts it with the screen map as its only source for frame IDs instead of a long history of frames that have since moved or been archived. This first pass covers Today only, because those are the moments investors see first and the frames were all drawn in the same pass. Onboarding, Coach, Team and Kids come in a second pass.

---

You are wiring a clickable prototype in the MVP (Most Valuable Parent) Figma file so Greg and Heather can present the Today moments. Before you write anything, load the `figma-use` skill and read the files named at the top. The screen map is the only source for frame IDs. The fixtures decide what each tap leads to. The spec decides behavior.

## Files

| File | Key | What it holds |
| ----- | ----- | ----- |
| `mvp-lombardi` | `RK2JTfwao4mV4JgUA193M1` | The boards. Wire the frames on "Design - lombardi" (`2177:1136`). |
| `mvp-design-library` | `A3SHbWiO5cyRDtIZ9sNNz7` | The master library. Touch it only for step 3 below. |

## Where the wiring goes

Wire the frames on "Design - lombardi" directly. Prototype connections change nothing visual, so the build reads the frames exactly as before, and wiring copies on another page would drift from the frames the build uses. Don't move, rename or redraw any frame. If a connection needs a frame that doesn't exist, leave that tap unwired and list it in your report.

## Before you wire

1. Confirm with Greg that he has published the master library and accepted the update in `mvp-lombardi`, because the softer borders and the coach card's Show line property arrive with that update.
2. On the card after Plan B (`2556:4299`), turn on Show line and set it to "Opens an email for you to send to Westview".
3. Optional, if Greg agrees: make ChecklistItem interactive in the library, so tapping an Open row changes it to Ticked and tapping a Ticked row changes it back. This needs another publish, so ask Greg before you start it.

## Rules for every connection

- Taps that move between full screens use Smart Animate at 300 ms with ease out, so the Now pass animates between the Today boards. Use Dissolve where layers don't match and Smart Animate jumps.
- A sheet board is a Today board with the scrim and the sheet drawn on it. The tap that opens a sheet goes to its sheet board, and the sheet's Close icon, and the scrim, go back to the board it rose from.
- On every tall board, keep the capture bar and the tab bar fixed at the bottom and let the rest scroll vertically.
- Every interactive area must be at least 44 px, which the library components already are. Wire the component instance, not the text inside it.
- Give each moment a flow starting point, named by its ID and a few plain words, such as "C-03b · The afternoon run".

## The flows

Take the frame IDs from the screen map's Today section.

**C-03 · Getting the girls out the door.** Starts on C-03 Today 7:25 am. There is no 3.15 Leave sheet frame for Monday morning, so the route and time stay unwired, and you list them in your report.

**C-03b · The afternoon run.** Starts on the C-03b notification. Tapping the notification goes to Today at 2:05 pm. The time or the route on that board opens the Leave sheet, and tapping Home's "Leave at" time there goes to the board with the picker open at 2:25. Close returns to Today at 2:05 from either sheet. Add a timed step after 3 seconds on Today 2:05 to Today 2:31, and another after 3 seconds on 2:31 to Today 2:46, so the presenter can show Now stepping down the line without tapping. Leave Directions unwired.

**C-06 · Edward can't collect Mallory.** Starts on C-06 Today 11:45 am.
- "Other options" on the coach card opens Thursday's Leave sheet at the backups.
- Ask Min-jung there goes to the card after Plan B. The draft to Min-jung has no 3.15 frame, so this is a shortcut, and the report should say so.
- Remind me on Today 11:45 opens the reminder sheet, and Set reminder goes to the reminder once set.
- "Reminder at 2:00" there opens the reminder sheet in its set state, and Update reminder and Remove reminder both return to the reminder once set.
- Wire the board after Min-jung says no and the two notifications-off boards as their own flows, named "C-06 · If Min-jung says no", "C-06 · Notifications off" and "C-06 · Notifications off, declined before", because the moment doesn't reach them from Today.

**C-06b · The checkup runs into tutoring.** Starts on C-06b Today 1:15 pm. "Other options" on the coach card opens Friday's Leave sheet at its backup, and Close returns.

**C-07 · Tonight.** Starts on C-07. There is no Tomorrow starts Leave sheet frame, so the rows stay unwired, and you list them in your report.

## Report

List every flow with its starting frame. List every connection with its source layer, trigger, destination frame and transition. List every tap left unwired and the frame it would need. Then take one screenshot of each starting frame to show the flow marker.

## Check before you finish

- Every connection points to a frame listed in the screen map.
- No frame on "Design - lombardi" moved, changed size or changed name.
- Every sheet board can be closed back to the board it rose from.
- Each flow can be played from its starting point to its last frame without a dead end, except the taps listed as unwired.
