# Readiness checklist before Ready for dev and review build 1

*MVP (Lombardi) · October 14, 2026 · Checked against story fixtures 3.11 and the October 14 dates and first board pass*

## Summary

There are 64 items left. Nothing is ready to mark Ready for dev yet. The current boards on "Design - lombardi" (`2177:1136`) cover onboarding and Charlotte's first board, plus one Today board for C-06. Every one of those boards still carries copy from before fixtures 3.7, 3.10 or 3.11. None of the Coach, Game plan, Team, Kids, request, capture or article screens has a board.

**Items that block marking boards Ready for dev (28).** These are all 21 items in section 1 and seven decisions in section 4. The section 1 items are the library fixes (text styles, deprecated variables, web components and accepting library updates), the copy and layout fixes on the twenty-one current boards, and the missing boards for review build 1. The seven decisions are the three assumptions in fixtures Appendix B item 32, the type scale, JetBrains Mono, the coach card's signal, the icon on "Move yoga to 12:15", the getting ready screen's words, and wide Today.

**Items that block the Codex build (15).** These are the eight document fixes in section 3, the five items in section 5, and two decisions: whether Today has a wide layout in review build 1, and whether "Send to coach" appears beyond Today. The documents Codex reads all still teach the no-dates rule and the pre-3.10 Today. The screen map points every Today screen at the old frames on the "Ready for dev " page, and it tells Codex not to use the page the current boards live on.

The 11 wireframe fixes in section 2 sit between the two. The Today boards can't be finished without the three missing wireframes, and the rest keep the wireframes trustworthy as the fallback the screen map names.

**What I checked, and what I could not.** I read every project document named in the request, all 29 top-level frames on "Design - lombardi" (text, styles, variable bindings, instances and fonts, through read-only scripts), and the design library's variables, text styles, components and icons. I also read all 44 wireframe images in the export, and rendered and read the standalone 0i HTML. Three things limit the result:

- **The wireframe images in the zip predate wireframe pass 10.** Only the standalone 0i HTML shows pass 10's changes. Every other image still says "Two weeks earlier" and shows datelines without dates. I can't tell whether Claude Design already has pass 10 on the other screens and the export is stale, or whether pass 10 reached only 0i. The pass 10 items below are marked "confirm on a fresh export". Everything else in the wireframe section is independent of pass 10, so it holds either way.
- **I could not look at the board screenshots.** The Figma screenshot service is blocked from this session, so the judgments about the boards come from their text, structure and bindings, not from how they look. Spacing and visual hierarchy still need your eye.
- **The Figma API does not expose a frame's dev status or a library's publish date.** I confirmed that the published variable set matches the library, which has 70 published variables. I could not confirm when text styles and components were last published.

---

## 1. Design work to finish in Figma before Ready for dev

### Library fixes (file `A3SHbWiO5cyRDtIZ9sNNz7`)

- [ ] **Bring the text styles into line with the fixtures' "Type" section, or change the section.** The fixtures name five styles plus header, headline and wordmark. The library has fourteen. The mismatches are listed below.
  - The fixtures' Title is Inter 17 semibold, which is the library's `subtitle`. The library's `title` is Inter Extra Bold 20, and its font size is bound to no variable, because there is no `type/size/20`. The two styles also share one description.
  - `body-large` (17), `body-small` (11) and `body-strong` (Inter Extra Bold 15) are not in the fixtures.
  - `meta-strong` is set in JetBrains Mono Extra Bold. The fixtures set chips in the Meta size in a heavier Inter weight.
  
  This matters because the fixtures tell the engineer to take type values from the library, so Codex will meet two answers for Title. Done means one style per role in the fixtures, every size bound to a `type/size` variable, and the Type section and the library agreeing. This waits on the decision in section 4 (C28).
- [ ] **Rebind and retire the deprecated variables.** The deprecated variables are listed below.
  - `semantic/coach-card/signal` aliases `semantic/coach`.
  - The ten `semantic/lane/*` variables alias `kid` and `kid-bg`.
  
  They are still published. `coach-card/signal` is bound eight times on each of seven current boards: `2195:6097`, `2195:6171`, `2192:5064`, `2195:6273`, `2211:752`, `2195:6058` and `2179:3692`, with six bindings on `2195:6058`. Once nothing uses them, delete them, and delete the indigo, berry, teal and plum primitives if nothing else uses them either. Done means the export carries no deprecated names (C29).
- [ ] **Build the web components the boards need.** The library's Components page holds only `Tab item`, `Tab Bar`, `ChildChip` and `AdultAvatar`. The boards are built from archived iOS components, which are `button`, `progress`, `large input`, `tag choice`, `back arrow`, `arrow`, `microphone`, `Group 1` and `splash`. They also use detached copies: 26 detached `tag item` frames on 0k (`2195:6171`) and a detached `chatinput` on 0b and all four Today boards. The components missing for review build 1 are listed below.
  - Primary and secondary buttons, the outlined Remind me and Directions buttons, and the floating "Send to coach" button.
  - The step counter, text input, grade choice and household choice.
  - The coach card in its states (recommendation, question, after a move with Undo, after an answer), the Now block, the checklist row, the Later today row and the MVP Recommends card.
  - The status and mark chips (Suggested, Asked, yes, can't, Changed, Conflicts with, Nobody yet), the capture bar in two states, and the sheet.
  
  Without these, Codex reads iOS components that the spec rules out. Done means every board instance comes from a component on the Components page (C30).
- [ ] **Clean up `ChildChip` and the tab bar.** `ChildChip` has a stray variant property named "Property" with the values "needed" and "newVal". The `Tab Bar` variant and the tab label both read "Game Plan", but the fixtures say "Game plan". Done means the variant names say what they mean and the label matches fixtures section 4.
- [ ] **Retire `icon/kids` (Material `child_care`, Lucide `baby`).** `icon/kids-heights` is the Kids tab icon the fixtures call for, and two Kids icons invite Codex to pick the wrong one.
- [ ] **Add the icons the fixtures name that the library lacks.** The library has no external-link icon for "Book at Willow" (fixtures section 4, coach card after a move). It also has no icons for the Changed, Conflicts with and Nobody yet marks, which the boards and wireframes draw. Each needs a Material, Lucide or Custom source like the other 32 sets.
- [ ] **Decide what happens to JetBrains Mono, then remove what goes with it.** It survives in the `meta-strong` style and the `type/family/mono` variable. On the boards it appears in the JetBrains Mono Extra Bold label on every Today board and in `type/family/mono` bindings on 0b (`2194:5182`) and 0j (`2179:3594`). The decision is in section 4 (fixtures Appendix B item 39).
- [ ] **Publish the library and accept the update in `mvp-lombardi`.** The boards still show variable names the library has since renamed, such as `semantic/accent/default`, `semantic/bg/elevated`, `semantic/photo/royal` and `primitives/photo/royal`. They also use text styles that are no longer in the library, such as `deprecated/coach/body`, `deprecated/body/sm`, `deprecated/body/lg`, `deprecated/label`, `type/title-md-bold` and `type/coach-voice`. Several boards also bind primitives directly, which consuming files are not meant to do: `cream-200`, `ink-500`, `paper`, `ink-100`, `cream-50` and `ink-700`. Done means a fresh audit of the boards finds no stale names and no primitive bindings (C31).

### Board fixes (page "Design - lombardi", `2177:1136`)

These are the boards that exist. Each needs the fixtures' words, library styles in place of the stale ones above, and its gaps and radii bound to `dimension` variables. Today, almost every gap and radius on every board is unbound.

- [ ] **Confirm the three assumptions in fixtures Appendix B item 32 before you finish any Today board.** These are the coach card directly under Now, children as filled gray chips with Family and adults outlined, and chips leading each row. All four Today boards are built on those assumptions, so a change means rework (decision in section 4).
- [ ] **Rebuild the C-06 board, "day 2 - Today: Morning" (`2486:1078`), to fixtures C-06.** The differences are listed below.
  - The dateline reads "Tuesday, Oct. 13". It should be "Wednesday, Oct. 14".
  - A "Coach Alert: Conflict found with Edward" line sits above the header. The fixtures have no such line.
  - The countdown separator is "•". It should be "·".
  - The checklist reads "Dance bag, for Studio Ten at 3:45 pm" and "Mallory · Snacks". It should be "[Alexis] Dance bag" and "Call Brightwater before you leave".
  - The drive line "22 min drive, 2 stops" is missing.
  - The card label reads "Coach • for Thursday". It should be "Your coach · for Thursday".
  - The button reads "Move Yoga to 12:15". It should be "Move yoga to 12:15", with "Updates your game plan" under it.
  - The secondary action reads "More options". It should be "Other options".
  - "2 done this morning" is missing.
  - The rows read "Pickup at". They should read "Pick up at".
  - There is a stray "Evening" heading, and the fixtures have no column headings.
  - The row reads "Dinner with Nanna". It should be "Dinner with Claire".
  - The Recommends line reads "MVP Recommends • 2 min read". It should be "MVP Recommends · 3 min read".
  - Today carries a detached capture bar ("Type, talk or add an image") where the "Send to coach" button belongs.
  - The tab reads "Game Plan".
  - One fill is pure black and one is pure white.
  
  Rename the frame to its moment, because "day 2 - Today: Morning" also names `2355:3744` on the "Ready for dev " page (T9).
- [ ] **Rebuild the three 0i boards to fixtures 3.11.** The boards are `2500:2141` (on arrival), `2509:1609` (answer sheet, named "Frame 204974023") and `2509:1629` (after she answers). All three are 3.10 content on 3.11 structure. The differences are listed below.
  - The dateline reads "Monday, Oct. 12". It should be "Monday, Oct. 5".
  - The heading reads "Get ready tonight". It should be "Ready tonight".
  - The item reads "Alexis · New shoes and backpack". It should be "[Mallory] Sneakers by the door".
  - "start time needed" is lower case.
  - The row reads "Westview • E-Day". It should be "Westview · D day".
  - The card reads "Coach • for tomorrow" and "an E day". It should be "Your coach · for Tuesday" and "a D day".
  - The after state reads "8:30 am · Pickup at Westview". It should be "8:15 am · [Mallory] To Westview · D day".
  - The after card's text is "Backpack goes with Mallory…". It should be the 3.11 text, which begins "The rest of this week is in your game plan".
  - The link reads "Change start time". It should be "Change the start time".
  - The board shows "Edit Westview card". It should show the meta line "Westview card updated".
  - All three show an MVP Recommends card, which the first board must not have.
  - All three show the capture bar in place of "Send to coach".
  
  Two of the boards share the name "day 1 - Today: Morning" although they show Tonight, so rename all three to 0i-a, 0i-b and 0i-c (T9).
- [ ] **Bring 0b, 0c and 0e to the fixtures.** These three boards carry the most errors.
  - **0b** (`2194:5182`) repeats the hand-off at the top and has no read-back paragraph. It asks "Who is this calendar for?" as a question after the highlights, where the fixtures use the "This calendar is for" control first. It drops "just" from Charlotte's reply. It says "I can make Mallory's week" where the fixtures say "I can make a plan for Mallory's week", and "Something is not right" where they say "Something's not right". It uses "Type, talk or add an image" as the placeholder (O10).
  - **0c** (`2195:6058`) is headed "Mallory's week" over "Oct. 5 - 9". It should be "Mallory's plan for this week" over "Oct. 6 to 9". It shows Monday to Friday rows with the wrong letters, and the harvest fair and farm trip as suggestions. It reads "Keep Mallory's plan?" with a question mark, and the button reads "Create acount".
  - **0e** (`2198:6482`) reads "1 of 5", "Create account", "What's a good email?", "Use your school or camp email…" and "Sign up with Apple". It should read "01 of 05", "Create your account", Email and "Continue with Apple". It also carries a "Sign up with Google" button that the fixtures don't have, set in Roboto Bold with four hard-coded Google brand colors (O16).
- [ ] **Correct the rest of the onboarding boards' copy.** This extends issues O7 and O12 to the current board IDs. The corrections are listed below.
  - **0w** (`2195:6097`) shows zip code 95403 and "Helps the coach find activities near you". It should show 00123 and the 3.11 helper. The helpers lack full stops, and "Skip for now" is missing (O4).
  - **0k** (`2195:6171`) heading lacks ", Charlotte". It carries the extra "Help the MVP coach get to know…" line. The grade chip reads "Not in school" where the fixtures say "Not in school yet". The range is written "9-12" where it should be "9–12", and there is an extra "College" chip. The link reads "+ add another child" in lower case, and "Skip for now" is missing.
  - **0a** (`2192:5064`) reads "Share a file". It should read "Attach a file".
  - **0t** (`2211:752`) is missing the ellipsis in "Making Mallory's plan…".
  - **0q** (`2505:1057`) reads "2 of 5" and "Connect Apple Calendar / Connect Google Calendar / Connect Outlook". It should read "02 of 05" and "Google Calendar / Apple Calendar / Outlook", in that order.
  - **0f** (`2198:6640`) reads "3 of 5", "4th Grade" and "+ add another child". It should read "03 of 05" and "Fourth grade".
  - **0g** (`2199:6728`) uses drop-downs with "Married (default)" and "Your parent status · Stay at home parent", and "English (default" is missing its parenthesis. It should use the four household choices and Language at home.
  - **0h** (`2199:6812`) reads "Who else helps at home?" and is missing the intro's second sentence. It adds "Gerry · Nana", reads "+ add someone" in lower case, and has twelve unstyled text layers.
  - **0j** (`2179:3594`) reads "MVP coach · just now" and "Nice to meet you Charlotte!". It should read "your coach · just now" and "Nice to meet you, Charlotte.".
- [ ] **Resolve 0p (`2179:4169`) one way or the other.** The board shows "79 %", "Getting everything ready for you" and four step labels of its own. It also has eight hard-coded `#1E1E1E` fills, and it binds `primitives/photo/royal` fourteen times. The fixtures have no percentage, and spec §3 standing decision 7 forbids one. Done means either your labels are written into fixtures section 4 (issue O6) or the board takes the fixtures' five steps, and either way the percentage goes.
- [ ] **Move the leftovers off the boards page.** The leftover frames are listed below.
  - `settings - 001` (`2179:3785`) and `settings - 2` (`2179:3808`).
  - `home - parent` (`2179:3829`) and `home - nannyview` (`2179:3960`).
  - `one last thing` (`2179:4036`) and `choose a plan` (`2179:4119`).
  - The old iOS Today board named `Onboarding - 9` (`2179:3704`), which shares its name with the permission sheet `2505:1122`.
  
  These carry Heisman copy, pricing and a percentage, and the screen map can only protect Codex from frames it lists. Done means the page holds only frames that are meant to be built (O14 extended).
- [ ] **Rename every board by its fixtures ID.** Use names such as "0w Welcome" and "C-06 Today", because the "Onboarding - n" numbers don't follow the fixtures' order, and the same names exist on four other pages. Done means a frame's name alone tells Codex which screen it is.

### Missing boards for review build 1

- [ ] **Draw the onboarding boards that don't exist.** These are the 0q connected state ("Connected · Google Calendar" and Continue), the skipped-capture 0i, the three failure states and the "Send to coach" sheet. The wireframes for all of these exist (onboarding-11, the 0i HTML and onboarding-19).
- [ ] **Draw the Today boards for C-03, C-05, C-06b and C-07, and the reminder sheet.** The reminder sheet needs its set state ("Reminder at 2:05" and the drive line with the reminder). C-05 needs only its coach card, because fixtures C-05 fixes nothing else. The Monday afternoon board is optional, because it is not a moment (T10).
- [ ] **Draw the first state of each other tab.** These are Coach at C-01 (wireframes 1a and 4), Game plan at C-04 (6), Team (10) and Kids (12a, 12b, a page for Alexis, 12c and 12e). The screen map's fallback lets Codex build these from wireframes. However, the library has no components for them yet, so in practice the fallback means Codex inventing the components. If you'd rather keep the fallback for review build 1, mark the item that way in the screen map (W2).
- [ ] **Draw the article view (wireframe 9).** It is a single screen, review build 1 line 10 needs it, and it settles where the article title's Voice style is used.
- [ ] **Decide whether any wide board is needed for review build 1.** None exists on the boards page. The wireframes have wide layouts only for the game plan (06), because the wide Today layouts were removed in the quiet-layout pass, and fixtures Appendix B item 33 leaves wide Today open. This is a decision rather than a gap (section 4).

---

## 2. Wireframe fixes in Claude Design

The export is the "updated - 10.14.26" set, which matches frame `2266:1394` on the "👀 wireframes" page in Figma. Apart from 0i, it predates pass 10.

- [ ] **Confirm on a fresh export that pass 10 landed on every screen it names, and re-run it if not.** In the export, the screens below still show the pre-pass-10 versions.
  - Every Today dateline shows the day only: 01, 01b, 02, 02b, 03, Edward's screens on 5, 5b and 5c, and the "Send to coach" sheet on onboarding-19.
  - Every C-00 header reads "Two weeks earlier".
  - 0v's photo note says the photo has no month.
  - 0b's read-back says "for this month".
  - 0c shows the old rows, with no "Oct. 6 to 9".
  - 0d puts the newsletter exchange on Sunday rather than Wednesday.
  - The flow map shows 0i as one state.
  - The Westview card (12c) shows "the Friday after this week" for the harvest fair, has no field trip, and lists "photo, two weeks ago".
  
  The standalone 0i HTML is correct in all three states and the skipped state. Its only issue is that the status bar on 0i-b reads 8:40 where it should read 8:41.
- [ ] **Bring 0b, 0c, 0t and the flow map up to fixtures 3.7 as well.** Pass 10 didn't cover these. The export still says "Make Mallory's week", "Making Mallory's week…" and "Keep Mallory's week". It also uses "on her going with lists" in the hand-off, and the account callout still says "01 of 04". Done means "Mallory's plan" everywhere, plus the 3.11 hand-off line "a plan for Mallory's week from here, with library and sneaker days on Mallory's checklists".
- [ ] **Set the coach in the Coach tab conversation in sans.** Fixtures 3.10, as corrected on October 14, set the coach in Fraunces only on the Today card and in onboarding, and in Inter as Body in the Coach tab. Screens 1a, 1d, 4, 5 (the C-06 line), 8, 12d step 1 and 0d still set the coach's messages in serif, and the callouts on 4 and 8 say so.
- [ ] **Remove the remaining uppercase labels.** Screens 8 and 9 read "MVP RECOMMENDS · MORNINGS · 4 MIN READ". They should read "MVP Recommends · 4 min read". The article title on 9 should use the Voice style (Fraunces, semibold), not sans bold.
- [ ] **Fix the game plan screens.** The fixes are listed below.
  - On 06, Wednesday has no "6:30 pm · [Family] Dinner with Claire". The phone and wide layouts both miss it.
  - The wide layout on 06 still writes "Mallory · Picture day" and "Mallory · Pick up at Westview" with a dot rather than a chip.
  - On 06b, Thursday's ballet sits at 3:55 pm without the calendar mark. It should be at 4:15 pm, the time it starts, with the calendar mark.
  - Callout 1 on 06b says Jenna's message was forwarded at 6:10. It was shared at 6:16.
  - Callout 3 on 06b says this is the only screen with a conflict mark, but 02b has one too.
- [ ] **Fix the carpool handoff (1e).** The game plan row reads "Alexis · Carpool to Cedar Grove". It should carry Alexis's chip, with the dot dropped.
- [ ] **Fix the C-06b screen (2b).** The floating "Send to coach" button covers "Opens a text for you to send to Ms. Reyes" and the start of "Other options". Done means the card's line under the button reads in full.
- [ ] **Bring the Edward and recipient screens up to 3.10 and 3.11.** The fixes are listed below.
  - On 5c panel 5, the coach card placeholder quotes Edward on Today, and its callout says the card quotes his note. In 3.10, Today's card says "Edward can't get Mallory at 2:30 on Thursday…", and the quote lives on the Coach tab.
  - The callouts on 5 and 5c say nobody in Charlotte's week uses the web page. Ms. Reyes uses it in C-06b.
  - "Coach card (signal not decided)" on 5c should follow 3.10, where the coach appears as a dot.
- [ ] **Fix the small callout errors.** On 0a, the callout says the app asks for one thing before it asks who she is, and that Skip leads to 0f. Both have changed. On 0e, the callout says Apple sign-in goes to 0f; it goes to 0q. On 0t, the callout calls the MVP mark a "spot illustration", which issue O5 says it must not be. The "Send to coach" sheet on onboarding-19 sits over an old header, with the day to the right of "Tonight".
- [ ] **Draw the screens the fixtures write but no wireframe shows.** These are listed below.
  - The reminder sheet "Remind me to leave", in its preselected and set states, and the reminder notification.
  - The coach card after "Move yoga to 12:15", with Undo, and the card for "If Min-jung says no".
  - The C-06 full message on the Coach tab, which quotes Edward and gives three options, and the C-06b full message, which gives two options.
  - Alexis's child page.
  - The game plan's "Change this in Google Calendar." state.
  - The calendar teaching line for a parent who tapped Not now.
  
  The first three are needed before the Today boards can be finished (W4).
- [ ] **Fill the one copy placeholder.** 0d shows "Read-back of her first forwarded newsletter, not written". Either write the line into fixtures "Taught when useful", or mark the panel as illustrative only.

---

## 3. Document fixes

The project doc `claude/spec-v0.7.md` holds spec **0.11** of October 8. The 0.12 edits written in the dates pass were never applied, and neither were the 3.10 changes that C25 lists. Every document below therefore still teaches rules that 3.10 or 3.11 replaced. C25 named the spec, AGENTS.md, the project instructions, the screen map, the library cleanup prompt and the brief. It missed the README, the backlog, issues.csv, the review build 1 prompt and the 3.11 date changes, because it was written before 3.11.

- [ ] **Spec: apply the dates pass section 2 and the 3.10 changes as version 0.12.** Use the section 4 decisions to settle the open points. The changes are listed below.
  - **§1, §5, §14, §15, §16 and §18:** apply the fixed demo calendar and `meta.demoWeekStart`, as the dates pass writes it.
  - **§2 and §5:** Today becomes the quiet layout, with Now, the coach card, Later today and at most one article. Remove the per-person rows, the four columns (standing decision 5), "Open Thursday in the game plan", "Add" and the Add sheet's name, and "up to two articles" (also §12). Add Remind me, Directions, the drive line, the reminder sheet, the answer sheet, the card after a move or an answer with Undo, and "Send to coach".
  - **§3:** "C-00, two weeks before" becomes Monday, Oct. 5. Close open condition 2, because the zip code's purpose is settled. Replace the first-board behavior note with the three states.
  - **§3 standing decision 8, §6 Layout and §19:** the coach is set in Fraunces as Voice on the Today card and in onboarding, and in Inter in the Coach tab.
  - **§11 and §13 standing decision 2:** children appear as name chips, not monograms. Add "How people are shown", with chips, outlined adults and the coach dot.
  - **§5 and §12:** the Recommends label line is sentence case, not JetBrains Mono capitals. Settle §19's JetBrains Mono line by the decision in section 4.
  - **§5 "At wider screens" and §19:** replace the full-day grid with the decision on wide Today.
  - **§5 open condition 1 and §19 open condition 1:** T3 is partly decided, because the coach is an amber dot and the card is the only card.
  - **§17:** rewrite the component inventory to match: Now, Checklist, LaterToday, CoachCard states, ReminderSheet, AnswerSheet, SendToCoach, ChildChip, AdultAvatar, CoachDot.
  - Rename the project doc to `spec.md`, or to one that carries its version.
- [ ] **AGENTS.md: update the versions line, the Today paragraph and rules 2 and 11.** The versions line still names 3.9 and 0.11. The stack line still sets the coach in Inter. Rule 2 says "No dates" and should take the dates pass wording. Rule 11 says "Children appear as monograms". The Today paragraph still describes the dateline with no date, the going with list, a row per person, "up to two articles" and "Add". "Reading Figma" and the sources table say only the "Ready for dev" page counts, which has to match wherever the boards end up. "Decisions that are still open" lists T3 as saffron.
- [ ] **README: update the dates and the fixtures version.** It still says "days of the week only" and "fixtures version 3.6", and that voicecheck fails on any date. The dates pass section 4 has the replacement text.
- [ ] **Project instructions (settings).** They still name fixtures 3.9 and the no-dates rule, with the day on the title's row. They also set the coach in Inter everywhere, put children in monograms and JetBrains Mono on metadata, describe Today with a going with list and a row per person, and treat saffron as open. The dates pass section 7 covers the dates. The 3.10 rules on Today, people, type and "Send to coach" still need writing in. Issue C1 can close once this is pasted, because the current settings already reflect the Codex rewrite.
- [ ] **Brief: carry the dates and 3.10 into it.** It still says "Two weeks before the demo week", "shows no calendar dates" (§6 and Decision 12), "a row for each person", "a short list of what goes with each child", "Children appear as monograms" and "Inter for … everything the coach says". The dates pass section 5 covers part of this.
- [ ] **issues.csv: add the dates pass rows and correct the stale ones.** Add C26, T8 and O15 from dates pass section 9. Replace C7, T6, O9 and O4 with the dates pass versions. Close R12, because 3.10 has at most one article. Close C1 once the instructions are pasted. Update T3 to "partly decided" and C6's Fix line, which still leans on the no-dates rule. Then add the new rows at the end of this checklist.
- [ ] **Library cleanup prompt: mark it superseded instead of editing it.** It was a one-time prompt, and the library now shows it ran: the collection is named Hearth, and the dimension and type groups exist. Its D2 decision (the coach in Inter) is out of date. A line at the top saying it has run and been superseded by fixtures 3.10 is enough, so nobody pastes it again.
- [ ] **Fixtures 3.11: tidy two small inconsistencies.** The game plan table still gives Friday's free dress day the owner "You" with the status Suggested, which section 2 forbids (issue G6, still open). The terms table says section 2 "lists all six" statuses, but section 2 lists four statuses and two marks. Appendix B item 40 can close, because `kid`, `kid-bg`, `coach`, `coach-ink` and `coach-bg` now exist in the library.

---

## 4. Decisions needed

These decisions change what Codex builds, ordered by how much each one blocks.

- [ ] **Greg: confirm the three assumptions in fixtures Appendix B item 32.** These are the coach card under Now, gray filled chips with outlined adults, and chips leading each row. They block every Today board and the spec rewrite, and C25 waits on them.
- [ ] **Greg: the type scale (C28).** Decide whether Title is Inter 17 semibold (the library's `subtitle`) or Inter Extra Bold 20 (the library's `title`). Decide whether `body-large`, `body-small` and `body-strong` stay, and what the chip style is. This changes `tokens.css` and every board.
- [ ] **Greg: JetBrains Mono (Appendix B item 39).** Removing it takes a font out of `@fontsource`, out of the stack in the spec, AGENTS.md and the instructions, and out of the "no fourth font" rule's three. Keeping it needs a named use.
- [ ] **Greg: wide Today for review build 1 (Appendix B item 33).** Recommendation: build Today phone-only and centered at tablet and desktop widths for review build 1, and log the wide design as an F-number. Otherwise Codex builds spec §5's full-day grid, which no longer exists.
- [ ] **Greg: "Send to coach" beyond Today (Appendix B item 34).** This changes every tab's layout in review build 1.
- [ ] **Greg: whether the coach card carries any signal beyond the amber dot (Appendix B item 6, T3).** The C-06 board fills the card with `semantic/coach`. Decide whether that fill stays, and the coach card component follows.
- [ ] **Greg: the icon on "Move yoga to 12:15".** The C-06 wireframe and board put `icon/update-calendar` ("a calendar with an arrow") on a button that, by the fixtures, never touches her calendar (Appendix B item 41, AGENTS rule 4). Recommendation: no icon, or a plan icon (T11).
- [ ] **Greg: the voice-to-coach-card flow on the boards page.** The frame "wireframes" (`2506:1261`) holds five images: "Thursday night, 8:30 pm", "She talks", "Sent, and the coach listens", "The read-back on the coach card" and "On tonight's list". No fixtures moment describes this flow. It needs an F-number in spec Appendix B, or it needs to leave the boards page (K5).
- [ ] **Greg: the getting ready screen's words (O6).** Decide between your headline and four steps and the fixtures' five, and remove the percentage either way.
- [ ] **Greg: the MVP mark (O5), the school screen heading (O11) and read-only calendar (A6).** All three are assumed by the fixtures. Confirming them closes the issues and stops Codex logging them.
- [ ] **Greg: the switcher trigger (X1) and the email domains (C19).** Both are needed before the seed and the demo controls are written.
- [ ] **Heather: the onboarding order (O3), tab names (C21) and coach tone (K1, K2).** The coach tone review now includes the 3.10 and 3.11 lines on the first board, the coach cards and the full messages. None of these stops review build 1 being built, but each can change copy on built screens. K1 blocks the C-08 answer in review build 2.

---

## 5. Before running Codex

- [ ] **Rewrite the screen map once the boards move.** Update the header to fixtures 3.11 and spec 0.12; it currently names spec 0.10 although the spec it travels with is 0.11. Point every screen at its new board ID. Turn "Frames not to use" around, because it currently lists "Design - lombardi" (`2177:1136`), the page that holds the current boards. Remove the reading that the dateline shows the day only, and the note that 0c has no date line. Remove "MVP Recommends holds up to two articles" and the Today parts table, which lists rows for each person and the Add button. Add 0i-a, 0i-b and 0i-c, the reminder sheet, the "Send to coach" sheet, the skipped-capture board and each Today moment.
- [ ] **Rewrite the review build 1 prompt.** The current one tells Codex to copy spec 0.11 and fixtures 3.9. It says "No calendar dates anywhere, including the dateline and the draft on 0c" and that the dateline shows "Monday". It allows up to two articles, and it uses frames `2355:3744` and `2355:3630`. It says the coach card's saffron border is the token's current value, and it describes an Add button. It should name fixtures 3.11, spec 0.12, the new board IDs, the three-state first board, the reminder and answer sheets, chips, and the decision on wide Today.
- [ ] **Update the backlog.** Change "Next 1" to "C25 and C27: … up to fixtures 3.11". Add the missing-board and library items above to Next. In "Review build 1", line 4 needs the answer sheet, the reminder sheet and "Send to coach", and line 9 needs Alexis's page. Under Blocked, remove O4, which is decided, and reword T3. Close R12.
- [ ] **Export `tokens.css` (C20) after the library fixes, not before.** Export only once the type scale is settled and the deprecated variables are gone, so the export carries no `coach-card` or `lane` names and no duplicate Title. Note that `type/size/20` would have to exist if `title` stays at 20.
- [ ] **Copy the documents into the repository last, as one set:** spec 0.12, fixtures 3.11, AGENTS.md, README, the screen map, issues.csv, the backlog and the 0i HTML wireframe. The old prompt's list predates 3.11 and lacks the wireframe export.

---

## 6. Can wait until after review build 1

- [ ] **Requests from both sides and the web page (wireframes 5, 5b and 5c, and 2b).** These belong to review build 2. Edward's own Today is still unwritten in the fixtures (S1), so View as can show only his request card until it is written.
- [ ] **Capture and handoff screens (1c, 1d, 1e and the Mail handoff on 5).** These are review build 2 line 1. Their wireframes are complete apart from the chip fix on 1e.
- [ ] **The Team composer and replies (7) and the C-08 answer (8).** These are review build 2, and the C-08 answer waits on K1.
- [ ] **Settings placeholder (§13).** This is review build 2.
- [ ] **Wide layouts for the other tabs.** The game plan wide wireframe exists. Coach, Team and Kids have none, and the spec says nothing about them beyond the sidebar.
- [ ] **Appendix B items 10, 26, 36 and 42 (same town, dated game plan headings, addresses for Directions, two-home zip codes),** and issues G4, G5, M2, M4, L1, L2, A1, A7 and A8. None of these changes Charlotte's build.
- [ ] **Remove the unused primitives** (indigo, berry, teal and plum) once the lane variables are gone, if nothing else uses them.

---

## Draft issue rows

Add the dates pass rows (C26, T8 and O15) first. These rows use the next free IDs after them.

```csv
C27,Cleanup,must,OPEN,Readiness scrub,"spec (claude/spec-v0.7.md, holds 0.11), AGENTS.md, README.md, brief.md, project instructions, screen-map.md, backlog.md, codex-review-build-1-prompt.md","C25 covers the 3.10 changes in five documents. Fixtures 3.11 has since put dates on the dateline and rebuilt the first board, the dates pass edits were never applied, and the README, backlog, issues file and review build 1 prompt were not on C25's list. Every document still teaches the no-dates rule, monograms, the coach in Inter everywhere, rows per person, up to two articles and Add.","Every document Codex reads agrees with fixtures 3.11 and spec 0.12.","Apply the dates pass sections 2 to 7 together with C25, after Greg confirms fixtures Appendix B item 32. Readiness checklist section 3 lists each section."
C28,Cleanup,must,NEEDS INFO,Readiness scrub,"mvp-design-library text styles, fixtures section 2 ""Type""","The library has fourteen text styles. The fixtures' Title (Inter 17 semibold) is the library's subtitle, while the library's title is Inter Extra Bold 20 with no bound size. body-large, body-small and body-strong are not in the fixtures, and meta-strong, which the fixtures use for chips, is set in JetBrains Mono.","One style per role in the Type section, every size bound to a type variable, and the fixtures and the library agreeing.","Greg decides the scale and JetBrains Mono (fixtures Appendix B 39). Then the library and the Type section change together, before the tokens export (C20)."
C29,Cleanup,must,OPEN,Readiness scrub,"mvp-design-library variables; boards 2195:6097, 2195:6171, 2192:5064, 2195:6273, 2211:752, 2195:6058, 2179:3692","semantic/coach-card/signal and the ten semantic/lane variables are deprecated but still published, and coach-card/signal is bound on seven current onboarding boards.","No board uses a deprecated variable, and the deprecated variables are deleted before tokens.css is exported.","Rebind coach-card/signal to semantic/coach, delete the deprecated variables, then check whether the indigo, berry, teal and plum primitives are still used."
C30,Cleanup,must,OPEN,Readiness scrub,"mvp-design-library Components page; every current board","The library holds only Tab item, Tab Bar, ChildChip and AdultAvatar. The boards use archived iOS components (button, progress, large input, tag choice, back arrow, arrow, microphone, splash) and detached copies (26 tag items on 0k, a chatinput on 0b and every Today board).","Web components for buttons, the step counter, inputs, choices, the coach card states, Now, checklist and Later today rows, the Recommends card, status and mark chips, the capture bar, sheets and Send to coach, with every board built from them.","Build the components before marking boards Ready for dev, so Codex never reads an iOS component."
C31,Cleanup,should,OPEN,Readiness scrub,"mvp-lombardi, all boards on Design - lombardi (2177:1136)","The boards show variable and style names the library has since renamed or removed (semantic/accent/default, semantic/photo/royal, type/coach-voice, deprecated/coach/body and others), and several bind primitives directly.","The boards use the current published library, through semantic variables and current text styles.","Publish the library, accept the update in mvp-lombardi, rebind primitives to semantic variables, and re-run the audit."
T9,Today,must,OPEN,Readiness scrub,"Boards 2486:1078, 2500:2141, 2509:1609, 2509:1629","The C-06 board and the three first board boards carry 3.10 copy on the 3.11 layout: wrong datelines, E day for D day, Get ready tonight, a Recommends card on the first board, Coach for Your coach, More options, Pickup at, Dinner with Nanna, and a capture bar where Send to coach belongs. Two boards share the name day 1 - Today: Morning and show Tonight.","Each board matches its fixtures moment word for word and is named by its fixtures ID.","Readiness checklist section 1 lists every difference."
T10,Today,must,OPEN,Readiness scrub,Design - lombardi (2177:1136),"No boards exist for C-03, C-05, C-06b and C-07, the reminder sheet, the Send to coach sheet, the skipped-capture board or the 0q connected state.","A board for every Today state and sheet in review build 1.","Draw from wireframes 01, 02b, 03, onboarding-11, onboarding-19 and the 0i HTML. The reminder sheet needs a wireframe first (W4)."
T11,Today,should,NEEDS INFO,Readiness scrub,"Wireframe 02, board 2486:1078, library icon/update-calendar","The Move yoga to 12:15 button carries a calendar-with-arrow icon, although the move never touches her calendar.","An icon that does not suggest a calendar change, or none.","Greg's call. Fixtures Appendix B 41 and AGENTS rule 4."
O16,Onboarding,must,OPEN,Readiness scrub,"Boards 2194:5182 (0b), 2195:6058 (0c), 2198:6482 (0e) and the rest of onboarding","The current onboarding boards carry copy from before fixtures 3.7 to 3.11, as O7 and O12 recorded for the older Ready for dev frames. 0e also carries a Sign up with Google button set in Roboto with Google's colors, and 0p shows a percentage.","Every onboarding board matches fixtures section 4 and C-00.","Readiness checklist section 1. Supersedes the frame IDs in O12, which point at the older page."
W3,Cleanup,must,OPEN,Readiness scrub,"Wireframe export ""updated - 10.14.26"" (Figma 2266:1394)","Apart from 0i, the export predates wireframe pass 10. Separately from the pass, 0b, 0c and 0t still say Mallory's week, the Coach tab sets the coach in serif, screens 8 and 9 use uppercase labels, 06 lacks Dinner with Claire, 06b puts ballet at 3:55 pm, and 1e writes Alexis with a dot instead of a chip.","Wireframes that match fixtures 3.11 on every screen.","Confirm pass 10 on a fresh export, then make one correction pass from readiness checklist section 2."
W4,Cleanup,must,OPEN,Readiness scrub,Claude Design wireframes,"No wireframe shows the reminder sheet and notification, the coach card after a move with Undo, the card when Min-jung says no, the C-06 and C-06b full messages on the Coach tab, Alexis's child page or the drag message for calendar items.","A wireframe for each screen the fixtures write.","The first three are needed before the Today boards can be finished."
K5,Coach,should,NEEDS INFO,Readiness scrub,"Frame wireframes (2506:1261) on Design - lombardi","Five images show Charlotte talking on Thursday night and the read-back landing on the coach card and tonight's list. No fixtures moment describes it.","An F-number in spec Appendix B, or the frame removed from the boards page.","Greg's call. Codex builds whatever sits on the page it reads."
```
