# Session prompt: the game plan

*MVP (Lombardi) · October 16, 2026 · Paste everything below the line into a new session attached to the "MVP - Lombardi" project.*

---

This session designs the game plan properly, then carries the result through the documents and the Figma boards. Greg considers the game plan as important to get right as Today, and the prototype work is on hold until it is settled. Nothing should be written into the documents or drawn on "Design - lombardi" until we have agreed on the design together, because the change touches the fixtures, the spec, AGENTS.md, CLAUDE.md, the screen map, the issues file, the backlog and the boards.

## How Greg frames it

Today is about the moment and the coming day. The game plan is for the rest of the week, where logistics are more fluid: things are still being worked out, people have been asked and haven't answered, and a change on Wednesday can unsettle Thursday and Friday. Today is quiet and acts on one thing at a time, so the game plan is where she sees the shape of the week and moves it around.

Right now the game plan has very little in it. The boards draw only a short list of "This week's changes", and the week itself has never been designed.

## Where things stand

Read these before anything else, from the project:

- `claude/story-fixtures-v3.16.md`, especially section 2 "The game plan holds the week", "Nothing is ever settled", "How a request reaches someone", "Her calendar" and "What stays in place", section 3 "The week in the game plan" (every item in Charlotte's week, its owner, status and how it changes during the demo), the moments C-01, C-04, C-04b, C-06, C-06b and C-08b, section 4 "Game plan", and Appendix B items 26 and 61.
- `claude/spec-v0.16.md`, §8 Game plan, §4 the plan model, §5 Today (because the two tabs divide the week between them, and because the Leave sheet, runs and Plan B and Plan C were designed there), §9 Requests and §2 "Layout and scrolling".
- `claude/screen-map.md`, for the frame IDs, and `claude/issues.csv` and `claude/backlog.md`, for the open rows and the build order.
- `claude/CLAUDE.md`, for how documents change in this project. Claude keeps the full fixtures current: every fixtures change is written as a pass and then applied to the full document in the same session.

The open rows that bear on this session are G4 (whether Thursday's 1:30 pickup really conflicts with yoga), G5 (dinner and the shopping list, F16), G8 (changing the time of an item someone has answered), G9 (the game plan boards don't follow the tab list layout type), W2 (the week under "This week's changes" has never been drawn), and C39, whose reading that the day headings stick under the title bar is decided in this session. The roadmap holds the month view as F1 and meal planning as F16.

The boards live in the Figma file `mvp-lombardi` (`RK2JTfwao4mV4JgUA193M1`) on the page "Design - lombardi" (`2177:1136`). The game plan has two frames, C-04 when she opens it (`2533:4257`) and when she closes it (`2533:4468`), and both draw only "This week's changes". The grayscale wireframes 06 and 06b in `docs/wireframes/` are the only drawing of the full week. The library is `mvp-design-library` (`A3SHbWiO5cyRDtIZ9sNNz7`). The Today boards, especially C-06 (`2556:4267`) and the Leave sheets (`2560:6477`, `2560:6876`), show the components and patterns already settled for Today.

## What is already decided

These come from the fixtures and the spec, and they hold unless Greg changes them in this session.

- The game plan holds every item in the week, including routine ones, and routine items are quieter unless they carry a status or a mark.
- Every item has an owner, at most one status and two possible marks, Changed and "Conflicts with", and nothing is ever shown as settled.
- She works the game plan without the coach: she drags an item to another time or day, adds a note, or puts someone's name against it to send a request. A change she makes herself is never flagged back to her.
- Calendar items are read from her calendar, carry the calendar mark and can't be dragged.
- Every item shows the time it starts, and leaving times belong to the runs on Today.
- Nothing later in the week appears on Today except through the coach card.
- The game plan is a tab list in the layout rules: a title bar whose controls never move, with the large title fading into a small title as she scrolls.
- At tablet and desktop widths the week opens into seven columns, with next week beneath it.

## Questions to work through

These are open, and none of them has an answer yet.

1. **What jobs does she bring to the game plan?** Sunday-evening planning for the week ahead, a midweek replan when something falls through, checking who has answered, handing things off, and finding when something is. Which of these does the game plan serve first, and which does it leave to Today, the coach or Team?
2. **Where does the week start and end?** Does the game plan start on Monday or on today, does it show today at all, and what happens to days that have passed? How far ahead does it reach, and when does next week appear?
3. **What is the structure?** An agenda of days, a week grid, a day view she pages through, or a combination, and how each one behaves on a phone, where the agenda is likely, and at wider sizes, where seven columns are already decided.
4. **What happens to "This week's changes"?** It could stay a list at the top, become marks inline on the week, become a filter or a count, or split into "needs you" and "waiting on others".
5. **How does fluidity show?** Asked items, items owned by nobody, conflicts, an answer that comes back as "can't", and a change on one day that affects another. Does the week show the runs and the line of stops for later days, as Today does for today?
6. **What does tapping an item open?** A page with Back, following the rule that a sheet never opens another sheet, and what that page holds: the time, owner, status, notes, source link, the request and its answers, and the coach's Plan B and Plan C for that item.
7. **Where does the coach fit?** Whether the coach card appears on the game plan at all, how its backups reach a day later in the week, and whether a weekly review moment, such as Sunday evening, belongs here or on the Coach tab.
8. **Can she filter the week?** By child, by person or by what still needs her, and whether that earns its place in the prototype.
9. **Which states must be drawn?** An empty first week straight after onboarding, a full week, a week with a conflict, a day where someone can't, the weekend, and next week.

## How to run the session

**Step 1: settle the jobs and the states before any design.** Work through the questions above with Greg, and add any we have missed. For each job, say what she is trying to do, which moment in Charlotte's week shows it, and what the game plan must show for her to do it. Log every undecided question as an issues.csv row rather than settling it in prose.

**Step 2: propose two or three directions,** each a different structure for the week, drawn as quick drafts on a separate drafts page in `mvp-lombardi` from the library's components. Each draft shows Charlotte's real week from the fixtures, at C-04 on Monday evening and after C-06 on Wednesday. Greg chooses one, or combines them.

**Step 3: decide what the demo shows.** Name which states appear in existing moments, chiefly C-01, C-04 and C-06, which need a wireframe-only board, and whether a new moment is earned, such as Sunday-evening planning before the demo week. Every new fact goes into fixtures Appendix A with its reason.

**Step 4: write the documents, in this order.**

1. A fixtures pass, `fixtures-3.17-pass.md`, quoting the current text and giving the replacement section by section: "The game plan holds the week", the moments affected, section 4's game plan rows with every new word, Appendix A, Appendix B and an Appendix C entry. Then apply it to the full fixtures as `story-fixtures-v3.17.md`, checking that every quoted passage is found exactly once.
2. Spec 0.17: §8 rewritten for the chosen design, with its layout table, behavior notes, standing decisions, open conditions and out of scope, and §4, §5, §9, §16 and §17 where they follow. Add Appendix A rows and any F-numbers in Appendix B.
3. AGENTS.md, CLAUDE.md, the project instructions and the Codex prompt, wherever they describe the game plan.
4. issues.csv rows for every decision and every open question, closing G9 and W2 when the boards exist, and the backlog.

**Step 5: draw the boards.** Add any new component to the library, such as a day heading, a week strip or an item page, with its variants, and say when Greg needs to publish. Draft the boards on the drafts page, and move them to "Design - lombardi" only when Greg approves. Each board is 440 × 956 and follows the tab list layout type. Then update the screen map with the new frame IDs and the layout type, and wire the game plan flows in the prototype.

## Rules that still hold

- Every word on screen comes from the fixtures. Write new copy into the fixtures pass first, in plain language for interface text and in the coach's voice for anything the coach says.
- Nothing is shown as settled, nothing is sent without the parent, and MVP never writes to her calendar.
- The coach does not recommend providers, plan money or buy anything.
- Today shows today only, and the coach card is still the one thing on Today that can reach another day.
- A sheet never opens another sheet.
- Ideas that don't serve one of the four stories are parked with an F-number rather than built.
- Make correction passes on what exists rather than regenerating documents, and write every document in complete sentences, as a person would.
- Give the summary first, then the detail, and don't end a reply with a question unless it is genuinely needed.
