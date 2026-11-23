# Most Valuable Parent (Lombardi): stage prompts

*Alpha 1 and alpha 2. Fixtures 3.53, spec 0.54. Written November 20, 2026, with motion added November 21, 2026.*

This file holds one prompt for each stage of the alpha build, ready to paste into a fresh build agent session, together with the review prompt Greg runs before his own review of each stage and the prompt that restarts a stage that has stopped early. The build order lives in `docs/backlog.md`, and these prompts name its lines rather than copying them, so the backlog stays the only list. When a backlog line changes, the prompt that names it does not need to.

The prompts are written for any build agent. Each one relies on the agent having read `AGENTS.md`, which every agent loads first, so a prompt doesn't repeat the standing rules: copy only from the fixtures, every value from `src/tokens.css`, one backlog line per commit, `npm run check` before every commit, and an issue row for every gap. The build agent is Claude Code running Claude Opus 5.5 (issue C57), and the last section says how its features carry the steps below.

## How each stage runs

Every stage follows the same five steps, because Anthropic's guidance for agent builds rests on the same few habits: a fresh context for each piece of work, a plan before code when a change touches many files, a check the agent can run, and evidence rather than claims.

1. **Start a fresh session.** Each stage begins with a cleared session that has read `AGENTS.md` and nothing from the previous stage's conversation. Questions about the product go to the claude.ai project, never into a build session, because they fill the agent's context with things the stage doesn't need.
2. **Paste the stage prompt and review the plan.** Every prompt asks the agent to read what the stage needs and write a plan before it changes code. Greg checks the plan against the frames and the fixtures, which is the cheapest place to catch a misreading.
3. **Let the stage run to the end.** The agent works through every line of the stage, runs `npm run check` before each commit, and compares each screen with its frame.
4. **Run the review prompt in a second fresh session.** A reviewer that sees only the diff and the requirements catches gaps the builder can't see in its own work. Its findings go back to the build session to fix.
5. **Greg reviews from the evidence.** Each stage ends with the commands, their output, screenshots beside their frames and the issue rows added. Greg plays the stage on the dev server and decides whether the next stage starts.

If Greg has corrected the agent more than twice on the same problem, the session is cluttered with failed attempts. The faster route is to end it, start a fresh session with the stage prompt plus one paragraph saying what went wrong, and let it pick up from the last good commit.

## Before Stage 1

The prompts assume the "Before the alpha" steps in the backlog are done. Four of them matter directly to the first stage:

- **C59.** `src/tokens.css` is exported again from the library. Stage 1 builds every component on these values, so an out-of-date export would put the wrong values into every later stage.
- **C61.** Done on November 20, 2026. The October code is in `archive/`, and the tooling stays in place: `package.json` and its scripts, the voice check, the schema validator, the lint and voice check tests, `netlify.toml`, `src/tokens.css` and the Icon component. `src/main.jsx` renders an empty root until Stage 1 replaces it.
- **C58.** The wireframes are in `docs/wireframes/`, because the screen map names them as the fallback for screens with no frame.
- **Step 5's review.** The boards on "Design - lombardi · post-review" are marked Ready for dev.

The October fixtures, schema and session tests checked the retired seed, so they moved to `archive/tests/` with it, and `npm run check` passes with the lint and voice check tests alone. Stage 2 writes the fixtures test (D3) and a schema test against the new seed, and Stage 1 adds tests for the demo calendar it builds.

---

## Stage 1: Scaffold

```text
This session builds Stage 1 of Alpha 1, the scaffold. Its three lines are under "Stage 1: Scaffold" in docs/backlog.md.

Read these before anything else:
- docs/spec.md sections 2 (Navigation), 15 (Demo controls), 17 (Technical stack) and 19 (Design tokens and platform constraints).
- docs/screen-map.md, the opening sections "How boards are named" and "How to read a frame", and the layout type column in each table.
- docs/story-fixtures.md section 2, the parts headed "Type" and "Color", and section 4, the part headed "Navigation".
- src/tokens.css as it stands, and the Icon component that C61 kept.

This stage draws no screen content. It builds the foundation every later stage sits on: the tokens and fonts, the Icon component, the eight layout shells, the tab bar and sidebar, the monogram and Back, the demo calendar and the switcher. The words it shows are the tab names and the switcher's labels, which come from fixtures section 4 and spec section 15.

The Icon component already exists and stays. Correct it to the naming in spec section 17 and the Figma Icons page rather than writing a new one. Never copy from archive/.

The demo calendar and the switcher need a household to read, and the seed is written in Stage 2. Build them against a minimal seed file for Charlotte that holds only the meta block from spec section 16, with meta.demoWeekStart, and the list of moment IDs and labels from spec section 15. Mark it in its first lines as a Stage 1 stub that Stage 2 replaces.

Before you change any code, write a plan and wait for my review of it. The plan should list the files you will create or change, say how each of the eight layout shells decides what stays fixed, what scrolls and what is anchored at the foot, and say how the demo calendar works out the day, the phase of the day and the date from meta.demoWeekStart without reading the device clock.

When each line is done, commit with npm run check && git commit. Render each layout shell at 440 x 956, then at 390 x 844, 768 x 1024, 1440 x 900 and 1920 x 1080, and compare the shells at 440 with the reference boards for each layout type named in the screen map. Fix the differences you can, and add a row to docs/issues.csv for each one you can't.

End the stage with the commands you ran and their output, a screenshot of each shell at each width beside its reference board, and the issue rows you added.
```

**Why this stage is shaped this way.** The layout shells are the decision every later screen inherits, so the plan review is the most valuable one in the whole build. The stub seed is the one place a prompt allows a file that isn't from the fixtures, and it is fenced so that Stage 2 replaces it rather than building on it.

---

## Stage 2: The seed

```text
This session builds Stage 2 of Alpha 1, the seed. Its four lines are under "Stage 2: The seed" in docs/backlog.md.

Read these before anything else:
- docs/spec.md sections 4 (The plan), 14 (Coach voice) and 16 (Data model).
- docs/story-fixtures.md section 2 for the rules the household follows, section 3 for Charlotte and Edward's household, including "Travel times" and every moment from C-00 to C-09, and Appendix A for the facts that were invented and why.
- The rows for D3 and T27 in docs/issues.csv.
- scripts/validate-schema.mjs, scripts/voicecheck.mjs and the tests in tests/.

This stage writes Charlotte's household as data, with no screens. Replace the Stage 1 stub with src/data/households/charlotte.json in the shape spec section 16 sets out, write the MVP Editorial articles her week uses into src/data/articles/, and write every interface string from fixtures section 4 into src/copy/. The October schema was retired under C61, so write the schema again from spec section 16 for the validator to check against, and write tests/schema.test.js to validate the seed and the articles against it.

Work one moment at a time, from C-00 to C-09, and run npm run check after each moment, so an error is found in the moment that caused it. Every word and every value comes from the fixtures word for word. Every time is a demo time relative to the demo week, and every date is worked out from meta.demoWeekStart rather than typed in. Where the fixtures leave a value out, add a row to docs/issues.csv and leave the value out. Never fill it in.

D3 writes a new tests/fixtures.test.js that walks every displayed string in the seed, the articles and the copy, and fails when one doesn't appear word for word in docs/story-fixtures.md. Values worked out from the demo calendar, such as dates, are excluded. T27 checks every run's leaving times against the rule in spec section 5: the next stop's due time, minus the drive, minus five minutes, rounded down to five minutes, and never before the stop it leaves is due. Write T27 as a test too.

Before you write any data, write a plan and wait for my review of it. The plan should show the top level of the seed with one moment filled in as an example, list the articles and copy files you will create, and say how the fixtures test tells a displayed string from an ID or a key.

Never edit a check to make it pass. If a test, the voice check or the schema seems wrong, leave it and add an issue row.

End the stage with the commands you ran and their output, a count of moments, plan items and strings checked against the fixtures, any leaving time that T27 changed or flagged, and the issue rows you added.
```

**Why this stage is shaped this way.** The seed is what every screen reads, so a wrong value here appears on every tab at every moment. Working one moment at a time keeps each error small, and D3 turns "copy only from the fixtures" from an instruction into a check that fails.

---

## Stage 3: Today

```text
This session builds Stage 3 of Alpha 1, Today. Its three lines are under "Stage 3: Today" in docs/backlog.md.

Read these before anything else:
- docs/spec.md section 5 (Today) in full, section 4 (The plan) for how owners, statuses and marks are drawn, and section 19 for which surface Today sits on and, under "Motion", the rows marked for Stage 3.
- docs/screen-map.md, the section "Today", and the frames it names for each moment.
- docs/story-fixtures.md section 2, "Today shows today", the Today part of each moment from C-01 to C-09 in section 3, and section 4, the part headed "Today".
- The rows for T36 and T72 in docs/issues.csv. T72 lists the moments whose Today words are not written yet. Build those states from what the fixtures do give, and log anything missing rather than writing it.

Today is home and the screen investors see most. It shows the current day only. The header and Now sit on paper at the top, and the coach card, Later today and MVP Editorial sit on a canvas sheet that rises over them when she scrolls, built with sticky positioning as spec section 5 "Scrolling" sets out, never by copying the frames' scroll layers. The pass is a tinted surface rather than a card, the coach card is the only card on Today, and every Today state comes from the seed written in Stage 2.

Build every Today state the screen map lists for C-01 to C-09, including the single-leg and trip passes, the status pill at each urgency, the checklist and how it folds, the coach card and its after-answer forms, Later today, MVP Editorial, the evening and the capture bar. Then build the Leave sheet with its line and backups, and the reminder sheet. Today changes one thing, when she leaves, so nothing on it edits a note, an owner or a day.

Before you change any code, write a plan and wait for my review of it. The plan should list the components you will build and which Today states each one appears in, and say how Today decides what Now shows at a given demo time, including the evening and the case where nothing timed is left today. It should also list each Motion row marked for Stage 3 and the component that carries it, and say when the pass swings in.

When each line is done, commit with npm run check && git commit. Render every Today state at 440 x 956 beside its frame, list the differences and fix them, then check 390, 768 and 1440. A difference you can't fix goes in docs/issues.csv with the frame ID.

Build the rows of the Motion table in spec section 19 marked for this stage, using only the motion tokens in src/tokens.css, and nothing that the table does not list. The sheet shell from Stage 1 gains its slide, and its raw 0.2s transition becomes tokens. Replace the blanket reduced-motion rule in src/styles/global.css with the reduced form each row gives, because fades keep their timing under reduced motion.

End the stage with the commands you ran and their output, a screenshot of every Today state beside its frame, a list of each motion this stage built, with the dev link and the tap that shows it in the running app and what it does with reduced motion turned on, and the issue rows you added.
```

**Why this stage is shaped this way.** Today comes before onboarding because onboarding ends on her first board, which is a Today screen, and because Today carries the most components the other tabs reuse. The prompt states the two Today rules agents most often break, the rising sheet and the single thing Today changes, because both come from the spec rather than from anything visible in a single frame.

---

## Stage 4: Onboarding

```text
This session builds Stage 4 of Alpha 1, onboarding. Its two lines are under "Stage 4: Onboarding" in docs/backlog.md.

Read these before anything else:
- docs/spec.md section 3 (Onboarding) in full.
- docs/screen-map.md, the section "Onboarding, C-00", and the wireframe named for failure and waiting states under "Screens with no frame".
- docs/story-fixtures.md section 2, "Onboarding", the moment C-00 in section 3, and section 4, the part headed "Onboarding".
- The rows for O9, T8, O22, O24, T84 and D9 in docs/issues.csv.
- docs/story-fixtures.md Appendix C, version 3.49, for what the first line brings into the seed.

The first line brings the seed up to fixtures 3.49, which wrote the words Stages 2 and 3 found missing. Write each new state from the fixtures word for word, as Stage 2 did, and the fixtures test checks it. Take the exemption for src/copy/demo.js out of tests/fixtures.test.js, because fixtures section 4 now has a Demo controls table. Commit this line before any onboarding code.

Onboarding is C-00, Charlotte's first night, from the splash (0s) to the coach's introduction (0j), and then her first board from 0i-a to 0i-h. Value comes before the account: she gives her first name and her children's names and birth months, makes her first capture, sees her first draft, and only then creates the account, connects her calendar and answers the two setup screens. Every capture result, draft and coach line in onboarding is prepared data from the seed. Nothing calls a network or a model.

The coach's lines in onboarding are set in the Voice style, which is Inter, and Fraunces sets only the headlines. Frames taller than 956 px are tall because their content scrolls, so build each one as a single scrolling screen in its layout type's shell. The combined 0g screen and the retirement of 0h follow O22 and O24.

Before you change any code, write a plan and wait for my review of it. The plan should list the seed changes for the first line, then every onboarding screen in order with its frame ID and layout type, say how each screen moves to the next, and say how the demo returns to C-00 from the switcher with a clean state.

When each line is done, commit with npm run check && git commit. Play C-00 from the splash to her first board, render every screen at 440 beside its frame, list the differences and fix them, then check 390, 768 and 1440. A difference you can't fix goes in docs/issues.csv with the frame ID.

Build the rows of the Motion table in spec section 19 marked for this stage, using only the motion tokens in src/tokens.css, and nothing that the table does not list. The steam stars are one component, because Alpha 2 reuses them on Ruth's web page.

End the stage with the commands you ran and their output, a screenshot of every onboarding screen beside its frame, a list of each motion this stage built, with the dev link and the tap that shows it in the running app and what it does with reduced motion turned on, and the issue rows you added.
```

**Why this stage is shaped this way.** Onboarding is one long, ordered sequence, so the plan asks for the whole order before any code. The type rule is stated outright because onboarding is the screen with the most Fraunces on it, and an agent can easily carry the headlines' serif into the coach's lines below them.

---

## Stage 5: The other tabs, at every moment

```text
This session builds Stage 5 of Alpha 1, the other tabs at every moment. Its seven lines are under "Stage 5: The other tabs, at every moment" in docs/backlog.md.

Read these before anything else, a section at a time as you reach each line rather than all at once:
- docs/spec.md sections 6 (Coach), 8 (Game plan), 10 (Team), 11 (Kids and school cards), 12 (MVP Editorial) and 13 (Settings), with section 2 for each screen's layout type.
- docs/screen-map.md, the sections "Coach", "Game plan", "Team", "Kids and MVP Editorial", "Added October 18, 2026" and "Added November 19, 2026", and the frames each names.
- docs/story-fixtures.md section 2, "Every tab at every moment", "The game plan holds the week" and "The Kids tab and school cards", section 3's "The Kids tab", "The Team tab", "Settings", "The week in the game plan" and "Item pages in the demo", and the matching parts of section 4.
- The rows for G33, P4, D13, O30, O32 and O29 in docs/issues.csv.

C-00 counts as a moment here: fixtures C-00, "The other tabs on her first night", writes Coach, the game plan, Team and Kids as they stand after her first board, and the seed holds them since Stage 4. Friday's carpool is one row in the game plan, "Carpool to Cedar Grove Elementary, then Westview Kindergarten", although the seed holds a stop item for each child for the trip pass (D13). Propose in your plan how the game plan draws it as one row, and don't change the fixtures test to do it without my approval. Line 7 is three small follow-ups from Stage 4: Back on every onboarding and setup screen after 0w, even where the frame draws none; the coach's introduction built from the sentences that apply to her path, as fixtures C-00 "If she skipped a step" writes them; and the steam stars' colour from the new brand-star token in src/tokens.css.

Every tab must show the right state at every moment from C-00 to C-09, because the presenter can jump to any moment from the switcher and open any tab. This stage builds each tab's screens and reads their state from the seed. It doesn't build what she does on them, such as adding or moving an item, sending a request or posting in a group, which is Stage 6.

Work through the lines in order. For each line, read its spec section and screen map entries, build the screens, and play every moment from C-00 to C-09 on that tab before you commit. Keep the components Stage 3 built and reuse them. If a tab needs a variant of one, extend the component rather than writing a second.

Before you change any code, write a plan and wait for my review of it. The plan should list every screen in the stage with its frame ID and layout type, the Stage 3 components each one reuses, and the new components it needs.

When each line is done, commit with npm run check && git commit. Render each screen at 440 beside its frame, list the differences and fix them, then check 390, 768 and 1440. The game plan opens into seven columns at desktop width, and the other tabs keep their phone layout in a centered column. A difference you can't fix goes in docs/issues.csv with the frame ID.

Build the rows of the Motion table in spec section 19 marked for this stage, using only the motion tokens in src/tokens.css, and nothing that the table does not list.

End the stage with the commands you ran and their output, a screenshot of every screen beside its frame, a note of any tab and moment that shows no state in the seed, a list of each motion this stage built, with the dev link and the tap that shows it in the running app and what it does with reduced motion turned on, and the issue rows you added.
```

**Why this stage is shaped this way.** This is the largest stage, with six tabs and ten moments each, so the prompt asks the agent to read one spec section at a time rather than loading all six at the start. If the session slows down or starts losing earlier instructions partway through, Greg can split it into two sessions after line 3, with one review at the end. That departs from "one run per stage" in the backlog, so it is Greg's call when he sees it happen.

---

## Stage 6: What she does

```text
This session builds Stage 6 of Alpha 1, what she does. Its eight lines are under "Stage 6: What she does" in docs/backlog.md.

Read these before anything else, a section at a time as you reach each line:
- docs/spec.md sections 7 (Capture), 9 (Requests), 8 (Game plan), 10 (Team), 6 (Coach) and 5 (Today), and Appendix B for F35.
- docs/screen-map.md, the section "The recipient's side, through View as", and the frames each line's moments name.
- docs/story-fixtures.md section 2, "How things get into MVP", "Her calendar", "What the coach adds for her", "How a request reaches someone" and "Nothing is ever settled", and in section 3 the moments each line names: C-02, C-03a, C-04, C-04b, C-05, C-05c, C-06, C-06b, C-06c, C-08, C-08b and C-09.
- The rows for G52, M12, G51 and A12 in docs/issues.csv.

Line 1 is a small layout change carried over from Stage 5. Between 768 and 1279 the game plan keeps its agenda in the centered column, as Coach, Team and Kids do, and it opens into seven columns from 1280 (G52). Two decisions from the Stage 5 review also bear on this stage. A day in the game plan opens by itself only for a "can't" or a conflict, so a day that gains one during a step opens, and a day that only needs an owner keeps its dot (spec section 8, G51). The composer opened from a person page reads "To:" and that person, as the fixtures write it, rather than the whole list with one person ticked (M12).

This stage makes the demo play. Each scripted step moves the household from one state to the next exactly as the fixtures describe: the staged share sequence and her calendar's conflicts, requests and their answers with the recipient's side through View as, working the game plan, the group post and the chats, the coach's answers, capture on Today, and the Sunday look-ahead. Every result is prepared data. A step that the fixtures don't script is not built, and the fixtures' branches such as "If Min-jung says no" are built only where spec section 15 lists them as moments.

Four rules matter more here than anywhere else. Nothing is sent without her tapping Send or handing a draft to another app herself. MVP never writes to her calendar. Nothing is shown as settled. The coach never reads a chat or a group post.

Before you change any code, write a plan and wait for my review of it. The plan should list each scripted step in order with the moment it starts in, the state it changes, and the moment it leads to, and say how a step that sends a request differs from one that can be undone.

When each line is done, commit with npm run check && git commit. Play every moment the line names from start to finish, render each new state at 440 beside its frame, and fix the differences. A difference you can't fix goes in docs/issues.csv with the frame ID.

Build the rows of the Motion table in spec section 19 marked for this stage, using only the motion tokens in src/tokens.css, and nothing that the table does not list.

End the stage with the commands you ran and their output, a recording or a sequence of screenshots of each scripted step, a list of each motion this stage built, with the dev link and the tap that shows it in the running app and what it does with reduced motion turned on, and the issue rows you added.
```

**Why this stage is shaped this way.** Interactions are where an agent is most tempted to add behavior nobody asked for, so the prompt fences the stage to the steps the fixtures script and restates the four rules that protect trust. The plan is a list of state changes, which Greg can check against the fixtures quickly.

---

## Stage 7: Fidelity and deploy

```text
This session builds Stage 7 of Alpha 1, fidelity and deploy. Its five lines are under "Stage 7: Fidelity and deploy" in docs/backlog.md.

Read these before anything else:
- docs/screen-map.md in full.
- docs/spec.md sections 2 and 19 for the three sizes and the rules that apply across screens.
- AGENTS.md, "Rules that must never be broken".
- The issue rows added during Stages 1 to 6.

This stage changes no behavior. It compares every screen in the alpha with its frame and puts the result on Netlify.

For the first line, render every screen the screen map lists for C-00 to C-09 at 440 x 956 beside its frame and fix the differences. Then check every screen at 390 x 844, 768 x 1024, 1440 x 900 and 1920 x 1080. At each size, check the rules that apply everywhere: no pure white or black, no uppercase labels, no decorative gradients or 2px strokes, every time with am or pm, every phone number with its area code, every place by its full name, and the wordmark as "Most Valuable Parent". Check every row of the Motion table in spec section 19 at 440 x 956, with and without reduced motion, and confirm that nothing else moves. Log what is left in docs/issues.csv with the frame ID and the size.

For the second line, set Settings in the type spec section 13 gives it, with card headings in Subtitle, rows in Body and links in Body strong, rather than the frame's type, because the frame was drawn before the type scale (C78). This is the one place where the spec's type wins over a frame's.

For the third line, add the two notification lines fixtures 3.52 writes, Edward's chat message in C-05c and Min-jung's answer in C-06, to their arrival steps in src/demo/steps.js (A15).

For the fourth line, make MVP open full screen when it is added to a phone's Home Screen, as the Fix column of C81 sets out: a web app manifest with display set to standalone, the Apple web app meta tags, and the tab bar and anchored feet padded with the safe-area insets. The app's name is "Most Valuable Parent", never "MVP" alone. Use only the app icons Greg exports from Figma into public/. If they are not there, build everything else, leave the icon entries out, and say so in the report, because nothing in the product is drawn or generated by the build agent. Check it at 390 x 844 and 440 x 956 with the safe areas simulated.

For the fifth line, prepare the deploy and stop before it goes out. The prototype deploys from main, so pushing to main publishes it. Show me the branch, the commits that will go out and the result of npm run check, and push only when I confirm.

Before you change any code, write a plan and wait for my review of it. The plan should list every screen and size you will check, in the order you will check them.

End the stage with the commands you ran and their output, a table of every screen with its result at each size, the deploy URL once I have confirmed the push, and the issue rows you added.
```

**Why this stage is shaped this way.** The deploy publishes to a shared address, so the prompt makes it the one step that waits for Greg's confirmation rather than one the agent takes itself. The cross-screen rules are listed because they are easy to check at the end and easy to miss screen by screen.

---

## Alpha 2: The weekend Charlotte is away

This prompt doesn't run until Y19 and Y5 land, because the playbook frames are out of date until they are redrawn to fixtures 3.47.

```text
This session builds Alpha 2, the weekend Charlotte is away. Its lines are under "Alpha 2: The weekend Charlotte is away" in docs/backlog.md.

Read these before anything else:
- docs/spec.md section 20 (The playbook) in full, and Appendix B for F37.
- docs/screen-map.md, the section "Starting point C: the weekend Charlotte is away", and the frames it names.
- docs/story-fixtures.md section 3, "The weekend Charlotte is away" and the moments C-10, C-11, C-12, C-13 and C-15, with their branches, and the matching parts of section 4.

The weekend playbook is a view in the game plan. Charlotte hands the weekend to Edward, the coach drafts each day child by child, every part reads as suggested until Edward answers, and Edward answers each part with "I'll take this", "Suggest a change" or "Ask someone else", or takes all of it at once. This journey's rules apply to playbooks only, so nothing built here changes how the demo week behaves. C-14 is retired and is not built.

Add the weekend to the seed first, one moment at a time, with npm run check after each, then build the playbook on Charlotte's side and Edward's side through View as.

Before you change any code, write a plan and wait for my review of it. The plan should list the seed additions by moment, every playbook screen with its frame ID, and the states the plan's pill moves through.

When each line is done, commit with npm run check && git commit. Play C-10 to C-15 from start to finish on both sides, render each screen at 440 beside its frame, and fix the differences. A difference you can't fix goes in docs/issues.csv with the frame ID.

Build the rows of the Motion table in spec section 19 marked for this stage, using only the motion tokens in src/tokens.css, and nothing that the table does not list. The stars on Ruth's web page reuse the component from Stage 4.

End the stage with the commands you ran and their output, screenshots of each moment on both sides, a list of each motion this stage built, with the dev link and the tap that shows it in the running app and what it does with reduced motion turned on, and the issue rows you added.
```

---

## The review prompt

Run this in a new session, separate from the build session, once the stage reports that it is done. Replace the stage name and the first commit of the stage.

```text
Review Stage {N} of Alpha 1, {stage name}, before Greg's review. You did not write this code, and you should judge it only against what it was asked to do.

Read the stage's lines in docs/backlog.md, the spec sections they name, AGENTS.md, and the diff from commit {first commit of the stage} to HEAD.

Report only gaps that affect correctness or the stated requirements:
- a backlog line that isn't fully built;
- behavior that contradicts the spec;
- a word or value on screen that doesn't appear in docs/story-fixtures.md;
- a design value that doesn't come from src/tokens.css;
- a break of any rule in AGENTS.md under "Rules that must never be broken";
- a check, test or script that was changed in a way that weakens it;
- anything built that the spec puts out of scope.

Don't report style preferences, possible refactors or tests for cases that can't happen, because chasing those adds code the prototype doesn't need. For each gap, give the file and line, the requirement it misses, and where that requirement is written. If you find nothing that meets this bar, say so.
```

Greg pastes the reviewer's findings into the build session with one line: "Fix these, run npm run check, and add the evidence to your report." A finding that Greg disagrees with is dropped, not argued.

## When a stage stops early

An agent sometimes ends its turn with a summary and an announcement of what it will do next, without doing it. When that happens with lines still open and nothing blocking them, send this:

```text
Lines {numbers} of this stage are still open. Continue with them. If one is blocked, say what is blocking it and carry on with the others.
```

If two or three nudges in a row don't move the stage forward, the run is stuck rather than paused. End the session, note in the issues file what blocked it, and start fresh from the last good commit with the stage prompt and one paragraph about what went wrong.

## Running the stages in Claude Code

The prompts work with any agent, and Claude Code, the agent chosen under C57, has four features that do the same work more reliably:

- **Plan mode** keeps the agent from changing files while it writes its plan, and lets Greg edit the plan in his text editor before approving it. Start each stage in plan mode, and paste the prompt as it is.
- **A Stop hook** can run `npm run check` at the end of every turn and keep the turn going until it passes. This turns "run the check before every commit" from an instruction into a rule the agent can't skip.
- **A reviewer subagent** runs the review prompt in its own context and hands the findings straight back to the build session, so Greg doesn't copy them between windows.
- **`/clear`** gives the fresh context between stages without opening a new terminal, and `/context` confirms that `CLAUDE.md` and `AGENTS.md` loaded.

The Stop hook isn't set up yet. Running the full check, including the build, at the end of every turn may be slow, so decide after Stage 1 whether to add it, and until then `npm run check` stays an instruction. With another agent, these steps are done by hand: the "wait for my review" line stands in for plan mode, and the review prompt runs in a second session.
