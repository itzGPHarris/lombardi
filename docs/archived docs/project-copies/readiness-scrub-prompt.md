# Prompt: readiness scrub before the next Codex build

*Paste everything below the line into a new chat in the MVP - Lombardi project. That session needs the Figma connector turned on. The scrub only reads, and it changes nothing in Figma, in Claude Design or in the documents.*

---

## What I need from this session

I'm about to stop designing and go back to building with Codex. Before I do, I need a readiness scrub: a careful read of the Figma boards, the design library, the wireframes and the project documents. It should end in one checklist of everything I still have to finish before I mark the boards "Ready for dev" and run the next Codex build.

I haven't moved any boards to Ready for dev yet, and I know a handful of screens are still unfinished. The checklist should name them, along with everything else that would make Codex build the wrong thing.

This session only reads. Do not change anything in Figma, Claude Design or the project documents. Do not change any frame's dev status. Where something needs fixing, put it on the checklist.

## The sources and what each one decides

| Source | Where | What it decides |
| ----- | ----- | ----- |
| Story fixtures 3.11 | Project doc `claude/story-fixtures-v3.11.md` | Every word on screen, every household fact and every moment. When anything disagrees with the fixtures, the fixtures win. |
| The dates and first board pass | Project doc `claude/dates-and-first-board-pass.md` | The October 14 changes behind 3.11: dates on Today's dateline, C-00 moved to Monday, Oct. 5, and Charlotte's first board rebuilt as three states. |
| The spec | Project doc `claude/spec-v0.7.md`, which holds the latest version despite its name | Behavior, scope and the rules that apply across screens. Check which version it says it is. |
| AGENTS.md, README, screen map, backlog, issues | Project docs `claude/AGENTS.md`, `claude/README.md`, `claude/screen-map.md`, `claude/backlog.md` and `claude/issues.csv` | What Codex will read, which frame each screen is built from, the build order, and the open problems and decisions. |
| The creative brief | Project doc `claude/brief.md` | How the product should feel. Read it, but don't hold the boards to it line by line. |
| The Figma boards | File `mvp-lombardi`, key `RK2JTfwao4mV4JgUA193M1`, page "Design - lombardi" (node `2177:1136`): https://www.figma.com/design/RK2JTfwao4mV4JgUA193M1/mvp-lombardi?node-id=2177-1136 | How each screen looks. These are the current boards. The page "Ready for dev " (`2355:2296`) holds older frames from before the Today redesign, and its frames share names with the boards, so always identify a frame by its ID. |
| The design library | File `mvp-design-library`, key `A3SHbWiO5cyRDtIZ9sNNz7`, starting at node `150:183`: https://www.figma.com/design/A3SHbWiO5cyRDtIZ9sNNz7/mvp-design-library?node-id=150-183 | Variables, text styles, components and icons, which export to `src/tokens.css`. |
| The wireframes | Claude Design: https://claude.ai/design/p/6c9498d4-b8d9-41de-b62f-7d1ca39b923c?file=wireframes%2F00i-first-board.dc.html | The grayscale screens built from the fixtures. They should match fixtures 3.11 exactly. If you can't open them from this session, tell me straight away and I'll export them. |

The project instructions in the project settings are part of what you're checking, not an authority. They may still describe rules the fixtures have since changed, such as the no-dates rule, the coach set in Inter everywhere, and children shown as monograms.

## What to check

Work through these in order, and read before you judge. Use the Figma tools in read-only mode. For text, use metadata and design context. For variables and styles, run read-only scripts. Take a screenshot of any frame where the look matters.

1. **The documents agree with fixtures 3.11 and with each other.** Check the version each document names and the rules that changed most recently:
   - dates on Today's dateline and on the 0c draft only;
   - the quiet Today layout, with Now, the coach card, Later today and at most one article;
   - children as name chips, adults as outlined initials, and the coach as an amber dot;
   - "Send to coach" in place of "Add", plus Remind me and Directions;
   - the coach in Fraunces on the Today card and in onboarding, and in Inter in the Coach tab conversation;
   - read-only calendar;
   - the three-state first board.

   Issue C25 lists the documents I already know have fallen behind. Confirm what is still out of date and find anything C25 missed.

2. **The wireframes match fixtures 3.11.** Go screen by screen and check the words, times, dates, chips and states against the moments and section 4. Pay particular attention to these:
   - the datelines from wireframe pass 10;
   - 0i's three states;
   - the Today screens rebuilt for the quiet layout;
   - every screen where a child monogram used to be.

3. **The Figma boards cover every screen the build needs.** List every screen the fixtures and the screen map call for:
   - onboarding 0s to 0j, including 0q and the permission sheet, and 0i in all three states;
   - Today for C-03, C-05, C-06, C-06b and C-07, plus the reminder sheet and the Send to coach sheet;
   - the Coach tab, the game plan, Team and Kids, including the child pages and school cards;
   - requests from Charlotte's side, Edward's side and the web page for someone without MVP;
   - the capture and handoff screens;
   - the article view.

   For each screen, say whether a board exists, give its frame ID, and say whether it is complete. Say whether its words match the fixtures. Then check its build:
   - Does it use library styles and variables, or hard-coded values?
   - Does it use any deprecated style, such as `deprecated/coach/body`?
   - Does it have detached instances?
   - Is there more than one board for the same screen?

   Say which wide layouts exist. The fixtures leave the wide Today layout open, so a missing wide board there is a decision to log, not a gap to fill.

4. **The library is ready to export.** Check each of these:
   - every value the boards use is a variable or style;
   - children's green and coach amber exist as tokens;
   - no board relies on a deprecated variable or style;
   - the text styles match the five styles in the fixtures' "Type" section, plus the header, headline and wordmark styles;
   - icons are named by meaning, with a Material, Lucide or Custom source;
   - the library has been published, so the boards see its current version.

   The fixtures leave JetBrains Mono unused. Report every style that still uses it.

5. **The open decisions that block the build.** Go through `issues.csv` and the fixtures' Appendix B. Separate the decisions that change what Codex builds from the ones that can wait. Name who each one waits on: me, or Heather. That includes the three assumptions from 3.10 that I still need to confirm (Appendix B, item 32).

6. **The path to the build.** Check whether `screen-map.md`, the review build 1 prompt (`claude/codex-review-build-1-prompt.md`) and the "Review build 1" section of the backlog still describe the right build. The screen map currently points Today at the older Ready for dev frames, so it will need new frame IDs once the boards move to Ready for dev. List what those three documents need.

## What to deliver

Write one checklist document, `readiness-checklist.md`. Send it to me as a file and save it to the project. Start with a short summary: how many items are left, which ones block marking boards Ready for dev, and which ones block the Codex build. Then group the items under these headings:

1. **Design work to finish in Figma before Ready for dev:** missing boards, incomplete boards, copy fixes on boards, and library fixes.
2. **Wireframe fixes in Claude Design.**
3. **Document fixes:** which document, which section, and what it should say.
4. **Decisions needed:** each with who decides, and what it changes in the build.
5. **Before running Codex:** the screen map, the review build prompt, the backlog and the tokens export.
6. **Can wait until after review build 1.**

Each item is a checkbox line in complete sentences. Each one says what to do and where, by frame ID, wireframe number, document section or issue ID. It says why it matters to the build, and what "done" looks like. Order the items within each group so the ones that block the most come first. Where a problem deserves an issue row, draft the row at the end of the checklist with the columns ID, Section, Priority, Status, Source, Where, Now, Expected and Fix, using the next free IDs in `issues.csv`. Don't add the rows to `issues.csv` yourself.

## How to work

- Start by telling me in a few lines what you can and can't open, especially the Claude Design wireframes. Then give me your plan for the six checks before going further.
- The Figma file holds several frames with the same name on different pages, so identify frames by ID and say which page each one is on.
- Report only what you actually checked. If something couldn't be checked, say so on the checklist rather than assuming it is fine.
- Follow the project's writing rules: complete sentences, no fragments or slogans, summary first, then detail.
