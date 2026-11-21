# Session prompt: every state of Now

*MVP (Lombardi) · October 15, 2026 · Paste everything below the line into a new session attached to the "MVP - Lombardi" project.*

---

This session works out every state of the Now section on Today, then carries the result through the documents and the Figma boards. Nothing should be built or written until we have agreed on the states together, because this change touches the fixtures, the spec, AGENTS.md, CLAUDE.md, the screen map, the issues file, the backlog, the wireframe pass 12 prompt and the boards on "Design - lombardi".

## Where things stand

Read these before anything else, from the project:

- `claude/fixtures-3.14-pass.md`, sections 15 and 16, which put Now on paper above a canvas sheet and moved the countdown under the departure time.
- `claude/spec-v0.14.md`, §5 Today, which defines Now only as the next departure, with its checklist, Remind me, Directions and the drive line.
- `claude/screen-map.md`, which names the Today frames by ID.
- `claude/issues.csv` and `claude/backlog.md`, for the open rows and the build order.
- `claude/CLAUDE.md`, for how documents change in this project.

The Today boards live in the Figma file `mvp-lombardi` (`RK2JTfwao4mV4JgUA193M1`) on the page "Design - lombardi" (`2177:1136`). C-06 (`2520:1083`) is the model board: Now on paper, then the coach card, Later today and MVP Recommends on a canvas sheet with xl top corners. The other Today boards are C-03 (`2519:912`), C-06b (`2520:1678`), the reminder sheet (`2520:1271`) and set state (`2520:1478`), C-07 Tonight (`2520:1866`), and her first board in four states, 0i-a to 0i-d (`2538:4496`, `2538:4666`, `2538:4712`, `2520:2102`). The library is `mvp-design-library` (`A3SHbWiO5cyRDtIZ9sNNz7`), with NowBlock at `218:369`.

Review build 1 is on hold until this is settled. Greg has not yet marked the boards Ready for dev, and the Today boards will change.

## The problem

Now works well as a time-based logistics tool when a departure is coming up. The spec says nothing about what Now shows in any other case, and Today has no way to change a time. Greg raised two cases:

1. **Days with nothing to drive to,** or a day whose departures have all passed. The one thing to do may be a task with no time, such as cleaning the house or fixing the washing machine.
2. **Changing a time from Today.** She may need to move a departure from 7:20 to 7:30 because of a conflict, at any moment, without leaving Today.

## What the last session proposed

These are proposals to test, not decisions.

**Now moves through five states, driven by the demo calendar:**

| State | When | What Now shows |
| ----- | ----- | ----- |
| Coming up | A departure is ahead | The time, "in 15 min", who leaves, the checklist and the actions |
| Time to leave | The leaving time has come | The same block, with the countdown reading "Time to leave" |
| Gone | The thing itself has started | Now moves to the next departure, and the one that passed adds to "2 done this morning" |
| Nothing timed left | No departure remains today | The leading untimed task, or a quiet line alone |
| Tonight | From 7:00 pm | Ready tonight and Tomorrow starts |

The proposed rule is that a departure leaves Now when the thing it is for starts, not when she leaves, because MVP cannot know when she walks out the door and should never ask her to tap "I left".

**Untimed tasks.** When a departure is coming, an untimed task joins Now's checklist, as "Call Brightwater before you leave" already does. When no departure is left, the task becomes Now: a meta line such as "Nothing to drive to today", the task in the `header` style (Fraunces 24) in place of the Display time, its steps as a checklist, Remind me with times of day, a button to ask someone (the request flow), and a line tying it to the next thing that depends on it when the coach knows one. Further untimed tasks sit in Later today with "Anytime" in the time column. The coach can break a task into steps but cannot find or recommend a repair service, so the natural follow-up is "Ask my village".

**Changing a time.** Tapping the big time on Now, or any row in Later today, opens a "Leave at" sheet with a time picker and a consequence line that recalculates as she turns it, such as "At 7:30, Mallory reaches Westview at 8:25, five minutes before it starts". A late choice is stated plainly and never blocked. "Change the start time" edits the item itself, and for a calendar item it reads "Change this in Google Calendar." A change she makes carries no Changed mark, moves a set reminder with it, raises a conflict if it runs into another item, and, when someone else owns the item, offers "Let Edward know" as a draft she sends herself.

## Two decisions Greg left open

1. Whether Today becomes editable, or whether tapping a time opens the item in the game plan instead.
2. Whether "Leave at" is its own sheet or a third choice inside the Remind me sheet. The proposal keeps them apart, because one changes the plan and the other only sets an alarm.

## How to run the session

**Step 1: list every state of Now before designing any.** Work through the combinations below, and add any we have missed. For each, say what triggers it, what Now shows, which actions it offers, and which existing rule decides it.

- A departure coming up, with her driving and with a child leaving with someone else (Directions shown or not).
- Time to leave, and running late past the leaving time.
- Two departures close together, such as two drop-offs twelve minutes apart, and whether the second waits or shows beneath.
- A long gap before the next departure.
- A departure that someone else now owns, such as Edward doing the pickup. Does it lead her Now at all?
- A departure in conflict, a departure that changed, and a departure whose start time is still needed.
- Untimed tasks with a departure ahead, with no departure left, and several at once.
- Nothing at all today, and nothing left this afternoon before Tonight begins.
- A weekend day.
- A reminder set, and what happens to it when the time changes.
- The time being changed: leaving later, the start time moving, a calendar item, an item someone else owns, and a change that causes a conflict.
- Her first board, where Now is empty until she answers the coach.

**Step 2: settle the two open decisions** and any new ones Step 1 turns up. Log each undecided question as an issues.csv row rather than settling it in prose.

**Step 3: decide what the demo shows.** Charlotte's week is full of drives, so name which states appear in an existing moment (C-03 at 7:25 is a natural place to nudge Mallory's 8:15 drive), which need a wireframe-only board like the Monday afternoon board, and which, if any, earn a new moment. Every new fact, such as a washing machine or a Sunday task, goes into Appendix A with its reason.

**Step 4: write the documents, in this order:**

1. A fixtures pass, `fixtures-3.15-pass.md`, that quotes the current text and gives the replacement section by section: "Today shows today", a new section on the states of Now, the moments affected, section 4's Today rows (every new word, including the sheet, the meta lines and the reminder's times of day), Appendix A, Appendix B and an Appendix C entry.
2. Spec 0.15: §5 gains the states of Now, the "Leave at" sheet and editing from Today, with behavior notes, standing decisions, open conditions and out of scope; §16 if the seed needs new fields, such as a leaving-time override or untimed tasks; §17 components; Appendix A rows and any F-numbers in Appendix B.
3. AGENTS.md, CLAUDE.md and the project instructions, wherever they describe Now or Today as read-only.
4. issues.csv rows for every decision made and every one left open, and the backlog.
5. A section added to `wireframe-pass12-prompt.md`, or a pass 13 prompt if pass 12 has already run, for each new state and sheet.

**Step 5: update Figma.** Extend NowBlock in the library with the new states as variants, so the boards use one component rather than detached copies. Draw any new sheet from the library's sheet pattern, as the reminder and answer sheets are drawn. Draft the new boards on a separate drafts page, and move them to "Design - lombardi" only when Greg approves. Then update the screen map with the new frame IDs.

## Rules that still hold

- Every word on screen comes from the fixtures. Write new copy into the fixtures pass first, in plain language for interface text and in the coach's voice for anything the coach says.
- Nothing is shown as settled, nothing is sent without the parent, and MVP never writes to her calendar.
- The coach does not recommend providers, plan money or buy anything.
- Today shows today only, and the coach card is still the one thing that can reach another day.
- Make correction passes on what exists rather than regenerating documents, and write every document in complete sentences, as a person would.
- Summary first, then detail, and don't end a reply with a question unless it is genuinely needed.
