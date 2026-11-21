# Prompt: the build agent, review build 1

*Before pasting, copy the document set into the repository as one commit. At the root: `AGENTS.md`, `CLAUDE.md` and `README.md`. Into `docs/`: `story-fixtures.md` copied from `story-fixtures-v3.18.md`, `spec.md` copied from `spec-v0.18.md`, `screen-map.md`, `issues.csv`, `backlog.md`, `brief.md`, and the wireframe export from passes 12 and 12a. Copy `tokens.css` to `src/tokens.css`. The Figma MCP server must be connected so the build agent can read the frames, or the engineer exports the frames into the repository. Then paste everything below the line into the build agent, whichever tool Greg chooses.*

*Renamed from `codex-review-build-1-prompt.md` on October 16, 2026, because the development tool is not decided.*

*Why this prompt changed: the earlier version named fixtures 3.14 and spec 0.14, pointed C-03 and C-06 at frames that are now archived, described Now in the 3.14 order, and had no Leave sheet, no backups, no C-03b and no runs in the seed. Fixtures 3.15 changed Today more than any version since 3.10, so this version is rewritten rather than corrected (issue C37).*

---

Read `AGENTS.md` again before starting, because it has changed since your last run. Then read `docs/screen-map.md` in full, spec §5 in full, and the "Review build 1" section of `docs/backlog.md`. The spec is version 0.18 and the fixtures are version 3.18. Read spec §8 in full too, because the game plan was redesigned on October 16. Read spec §2 "Layout and scrolling" in full as well, because every screen is built inside the shell for its layout type.

## What this run delivers

A prototype Greg can walk through from the splash to every tab, with Today working through every moment in Charlotte's week. Work through all thirteen lines of "Review build 1" in order, one commit per line, and do not stop until every line is done or a line is blocked by something you cannot resolve. Keep the existing state management, seed, assets and tests, and correct the code rather than recreating the repository.

## What changed since your last run

These are the changes most likely to collide with code you already wrote.

- **Every screen has a frame on the page "Design - lombardi",** listed by ID in `docs/screen-map.md`. The Today frames were redrawn for fixtures 3.15 on October 15, and the frames they replaced are on "Archive - not for build". Build only from the IDs in the screen map.
- **The demo runs on a fixed calendar.** The demo week is Monday, Oct. 12 to Sunday, Oct. 18, 2026, and C-00 is Monday, Oct. 5. Today's dateline shows the day and the date, such as "Monday, Oct. 12", and the 0c draft shows "Oct. 6 to 9". Everything else names the day of the week. Every date is worked out from `meta.demoWeekStart`, and the device clock is never read.
- **Runs live in the seed.** A run is the stops she drives before she is home again, each with a place, the item there, `dueAt` and `leaveAt` (spec §16, "Runs"). Every leaving time is the next stop's due time, minus the drive, minus five minutes, rounded down to five minutes, and never before the stop it leaves is due. The seed holds the computed values, and the rule is what they must agree with.
- **Now follows one rule and steps down the run.** Now shows the next thing today that needs her at a set time, usually the current leg, then her leading task, then the quiet line "Nothing else today." A leg leaves Now when its stop comes due, and the next leg takes over from that stop. Asked items, items owned by Nobody yet and other people's trips stay in Later today (spec §5, "What leads Now").
- **Now reads like a boarding pass.** The route, such as "Home → Westview", with the next station under it, then the leaving time in Display with a status pill, then the Drive, Arrive and Pickup or Starts fields, a dashed perforation, the grouped checklist, and Remind me and Directions. The drive line is gone. Arrive turns to the warning ink with a clock icon once she is running late.
- **Checklists are grouped by child.** Items sit under each child's first name in `--color-kid`, or under "Both", and her own tasks under "Before you leave". Checklist rows carry no chips and no counts. The whole row is the target, and a ticked row stays in place, dimmed.
- **The Leave sheet is the one edit on Today.** It opens from the time or the route on Now, and from "Other options" on a coach card, which opens it scrolled to the coach's Plan B and Plan C. It draws the run as a line of stations and lets her change when she leaves any stop. Every sheet has a grabber and a Close icon, and the reminder sheet has a set state and a notifications-off state.
- **The header and Now stay in place, and the canvas sheet scrolls over them.** Build this with sticky positioning, as spec §5 "Scrolling" sets out: the header and Now form one sticky block stacked below the sheet, with its top set to the smaller of zero and the space above the capture bar minus the block's height. Only C-06 (`2556:4267`) is drawn this way in Figma. Its scroll frame and top padding exist only for the Figma prototype and are not to be copied (screen map, "How to read a frame"). Build every Today state the same way, whatever its frame's height.
- **Every screen has a layout type,** in the last column of each table in the screen map, and spec §2 "Layout and scrolling" gives each type one rule for what stays fixed, what scrolls and what is anchored. Build one shell per type in `components/Layout/` and every screen inside its shell. Tab lists and pages have a title bar whose controls never move, with a large title that fades into a small title in the bar. The keyboard follows iOS, and chats, composers and a village group's page hide the tab bar. Several frames still layer their title bar inside the scrolling content or put the primary button in the body, and the type wins over the frame (issues M8, L4, G9, K6, R14 and O20).
- **The capture bar sits at the foot of Today, the game plan and the Coach tab.** It starts with the coach's dot and reads "Type, talk or add an image", with attach, camera and microphone, and on Today it hides while the coach card asks for a capture. She types in place, and past one line the text grows up to five lines with the controls on a row beneath.
- **The game plan is an agenda under a week strip, with a review card.** The strip sticks under the title bar. The review card, in the coach's tint, holds anything waiting to go in her plan. Past days fold, today and tomorrow open, and the other days collapse with their counts. Tapping an item opens its page. Nothing from her calendar joins the plan until she adds it (spec §7, §8).
- **The coach is set in Inter in the app.** `--text-body-large` on the Today coach card and `--text-body` in the Coach tab. Fraunces is for onboarding, titles, headlines and the leaving time. Use `--text-voice` for the coach's onboarding lines as exported, and note that issue C33 may change it.
- **A person's answer is an initial and an icon,** with the accessible label "Asked Edward", "Edward: yes" or "Edward can't". Children are name chips, adults are outlined initials, the coach is a solid amber dot, and the parent's monogram is the only monogram.
- **A staged plan screen follows the account,** and **the household switcher opens from a long press on the monogram,** on every tab and at every size.

## Line by line

1. **C24.** Adopt the screen map and AGENTS.md "Who decides what", and check the existing C-03 screen against frame `2556:4129`.
2. **X3, C26, §15.** Open on C-00 at the splash. C-03 and every other moment are jumps in the switcher. Every date comes from `meta.demoWeekStart`.
3. **§3, O9, T8.** Onboarding from 0s to 0j in the screen map's order, including the staged photo, the read-back with the "This calendar is for" control first, the hand-off, the draft with the account prompt, 0e, the staged plan screen 0e-p, 0q with its permission sheet and connected state, 0f, 0g, 0h, 0p with five steps and no percentage, 0j, and her first board in all four states (0i-a to 0i-d).
4. **D1, §16.** Runs in the seed for every moment Today shows, with stops, due times and leaving times. Check every `leaveAt` against the leaving time rule, and add an issue for any that disagrees rather than changing the fixtures' value.
5. **§5, T19, T23, T26, T36.** Today for C-03, C-03b, C-05, C-06, C-06b and C-07: the dateline and phase, Now as a pass stepping down the run with the next station, the grouped checklist, the coach card in its states, the answer sheet, Later today with its done count, MVP Recommends, the capture bar, and the header and Now held in place while the sheet scrolls over them. C-03b steps from 2:05 to 2:31 to 2:46 as scripted steps in the moment. The coach card after a move with Undo, and the card when Min-jung says no, have no frames: build them from the CoachCard component's states with the fixtures' words.
6. **T17, T22, T32, T33.** The Leave sheet for C-03b and for Thursday and Friday, with its line of stations, the time picker and the line under a changed station, Save and Close, and the backups with their buttons and "See the coach's reasons". "Other options" opens it at the backups. The reminder sheet in its set state and both notifications-off states. Sheets with no backups in the fixtures show none (fixtures Appendix B item 56).
7. **§2.** All five tabs reachable from every Today state, as a tab bar on the phone and a sidebar from tablet width. Today, Coach, Team and Kids keep their phone layout in a centered column at wider sizes. Build the layout shells here, before the tabs that use them, and check each one at 390 × 844 with the keyboard open on a field.
8. **§6.** The Coach tab at C-01, showing the conversation.
9. **§8, G11, G12, G31, G33.** The game plan at C-04 in both states, from the frames in the screen map: the week strip, the review card holding the second tutoring session, Monday folded to "Today · 6 done", Tuesday open in its container, the other days collapsed with their counts, Next week, and the capture bar. Then C-06b's two game plan states and the checkup's item page, from their frames. Rows show the time each thing starts. Adding, moving and asking from the item page belong to review build 2, so here the page is reached and read.
10. **§10.** Team: the tab on Monday and on Wednesday at 5:00 pm, the four person pages, the Cedar Grove parents group and its members, both composers, both chats, Add someone in both outcomes, and New village group. These are for review, so screens can be reached and read, and sending, posting and answering belong to review build 2.
11. **§11.** Kids: the tab, both girls' pages and both school cards.
12. **§12.** The MVP Recommends card on Today and the article view behind it, with Back.
13. **Fidelity.** Compare every screen with its frame at 440 × 956, using a screenshot of the running app beside a screenshot of the frame, and fix what differs. Then check 390 × 844, 768 × 1024, 1440 × 900 and 1920 × 1080. At 390 × 844, scroll C-06b, whose Now is the tallest, and confirm that Remind me and Directions can always be reached. Log what is left in `docs/issues.csv`.

View as and the recipient screens in the screen map belong to review build 2. Build them only if every line above is done.

## Rules for this run

- Every word on screen comes from the fixtures. If a screen needs a word the fixtures do not have, add an issue and leave a visible bracketed placeholder rather than writing one. The plan screen's words are recorded in the fixtures as proposed, so use them.
- Every value comes from `src/tokens.css`. Components read semantic tokens, never primitives. If a frame uses a value that is not a token, such as a 45 px padding, use the nearest token and add an issue naming the frame ID.
- Text styles are the `--text-*` tokens. Times in a list use `--text-meta` and line up in a column.
- When you find a conflict the screen map and the spec do not cover, build the frame as drawn, add a row to `docs/issues.csv` with the frame ID and the rule, and carry on.
- Nothing is ever shown as settled, nothing is sent without the parent, MVP never writes to her calendar, and Today edits only leaving times and her own start times. These are AGENTS.md rules 3 to 5a, and a screen that breaks one is wrong whatever its frame shows.
- Do not edit `docs/spec.md`, `docs/story-fixtures.md`, `docs/brief.md` or `docs/screen-map.md`.

## What to report when you finish

- A list of the commits, each with the backlog line it delivers.
- The path through the prototype from the splash to each tab, and through C-03b's steps, so Greg can follow it.
- Every issue you added, with its ID.
- The differences from the frames you could not fix, by screen and frame ID.
- Anything in review build 1 you could not finish, and why.
