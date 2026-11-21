# Handoff: Heather's second wording pass in Figma (Nov. 19, 2026)

This session applied Heather's second wording review (fixtures 3.30, carried forward in 3.31 and spec 0.31) to the Figma page "Design - lombardi · post-review" (`2853:11893`) in file `RK2JTfwao4mV4JgUA193M1`. Greg approved the change list in one pass. The baseline page "Design - lombardi" (`2177:1136`) was not edited. The documents now stand at fixtures 3.32 and spec 0.31.

## What changed, by frame

**Library (mvp-design-library, published and accepted by Greg).**
- CircleTag (`365:1900`) is new: an outlined Meta label reading "Circle", with the accessible label "In your circle".
- PersonRow (`220:312`) gains a "Circle tag" toggle, and its name and line column now fills the row and wraps.
- RouteStation (`258:666`) gains "5 min earlier" and "5 min later" in Editing=true, and a Late axis that sets the result line in the warning ink, including on a Stop with Editing=false.
- A later fix restores the property links on the three Late=true variants, and Greg published it the same day.

**Heather's second pass.**
- **"Backup plans"** now replaces "Other ways this could go" on 18 frames: 0i-b, the C-06 and C-06b Leave sheets, the C-04, C-04b and C-06b item pages, and three wireframe-only boards.
- **Request headings:** on 11 recipient frames the heading is now the sentence in Body strong with "Sent" and the time in Meta beneath it. The frames are 2853:13508, 13527, 13541, 15922, 13559, 15938, 13578, 13601, 13611, 15954 and 15961.
- **First board coach card:** the fuller version is on 0i-a, 0i-b, 0i-i, 0i-j and 0i-k, and is the muted recommendation on 0i-c, 0i-f and 0i-g.
- **Edward's Thursday request** carries Heather's full wording on C-02 Edward's phone (2853:13519). The page has no C-02 draft frame.
- **Library request:** "Can you take both girls to the library this Saturday morning, around 10:00am?" is on C-04b Edward's phone and C-04 Draft · Library run to Edward.
- **Edward's note:** "We'll get lunch after and be home by 1:00pm." is on four frames: both C-04b phones, the C-04b item page and the C-06b game plan.
- **The text to Ms. Reyes** carries Heather's wording on the C-06b draft and every web page frame, including two hidden older copies.
- **The note to Westview Kindergarten** ends "Please let me know if you need anything else. Thank you, Charlotte".
- **0g** asks "How is your household set up?" (2853:13080), and its two leftover labels are hidden.
- **C-07 reminders** are instructions that say when, on all four rows. "Ballet bag" on Mallory's Kids page is unchanged.
- **Team tab:** on C-01 (2853:13188) and C-06c (2853:13221) the sections read Chats, Groups and Team. Everyone is in one list with the circle first, each circle member carries the Circle tag, and Edward's line reads "Your husband".
- **Settings** (2853:15443, the post-review copy; 2704:11027 is the baseline):
  - The account card has "Your age range · Add your age range".
  - The stray Billing value "MVPdad_GregH" is gone, so the row reads "Billing · Manage billing".
  - The frame is one phone tall, with its cards in "Content, scrolls".
- **C-08 article** (2853:13636):
  - The frame is renamed for the withdrawal, its byline and body are hidden behind placeholder lines, and an annotation records the withdrawal.
  - The MVP Editorial cards on the Today boards carry an annotation and no longer link to it.
  - The presenter's arrow keys and the switcher row still reach the frame, because it is C-08's only board.

**Other items.**
- **S7:** "C-03 · Draft · Say you can't this week" (3088:12855) reads "So sorry, I can't this week.", and the C-03 coach card opens it.
- **C-07:**
  - The page now scrolls as one, in "Page, scrolls as one", with For tomorrow directly under Now.
  - Before this change, the 8:15am and 3:55pm rows sat behind Now and couldn't be reached.
- **T64:** on the two wireframe-only Leave sheets (2955:12152, 2853:13958), every station is now a RouteStation instance. The sheet shell stays detached for its instruction line and Save.
- **O22:** "Draft · C-00 · 0g · Your household and who helps" (3088:12922) is drawn beside 0g and is not wired.
- **C55:**
  - All 64 local StopMarker and ReminderItem instances on the post-review page now use the library's, and so do five on the archived 0i-e board.
  - Every word was kept, and the local section 2926:12097 is deleted.

## Documents

- **Fixtures 3.32:**
  - The pass is `archived docs/fixtures-3.32-pass.md`, and version 3.31 is archived.
  - C-03 gains the decline draft.
  - Appendix B items 91 and 111 close, and items 113 to 116 are new.
- **The spec is unchanged at 0.31.**
- **Screen map:** updated, with a section for Nov. 19 and the two new frames.
- **issues.csv:**
  - S7, S8, M9 and U4 are FIXED.
  - K7, O22, R15, T64, C55, P2, P3, P10, P11 and T63 have updates.
  - P1 to P13 are appended from the v2 prototype session, because they had never reached the file.
  - O24 and C56 are new.
- **Backlog:** updated, and the earlier copies are archived.
- **Followers:** CLAUDE.md, AGENTS.md and README.md are left alone (issue C56). They still name fixtures 3.19 to 3.22 and the old vocabulary, so bumping only their version lines would have claimed they were current.

## Still open

1. Done the same day: Greg republished mvp-design-library, and the late stations and PersonRow's wrapping are confirmed on the boards (T64 fixed).
2. Greg looks at the combined 0g and 0h draft (O22). If he approves:
   - the fixtures take item 113's three decisions;
   - StepCounter gets a four-step variant (O24);
   - the draft is wired and 0h retires.
3. Greg resolves his two Oct. 27 comments on the baseline page by hand, because the session has no tool to resolve comments:
   - "this screen should be removed because we have this from 00f" can close now, because it sits on the old 0i-b answer sheet that the post-review page no longer has;
   - "combine 0G & 0H" closes with item 2.
4. R15 stays open until Heather names who writes the two approved articles.
5. The v2 prototype leftovers:
   - **P2:** whether one scrolling page becomes the rule for every Today board, which C-07 now also follows.
   - **P3:** For You is nested inside 0c's scroll frame, so it has to move to the page before its overlay can be set.
   - **P4:** the Day 0 tab frames.
   - **P8:** how the switcher opens.
   - **P10:** the remaining dead ends.
   - **P11:** the Cedar Grove card and 0h as 956 px pages.
   - **P12:** 0w's "Skip for now".
   - **P13:** the five stranded frames.
6. Decisions Greg owes:
   - T58: orchestra starting Tuesday, Oct. 13.
   - T53: 0i-h's moment ID and its empty sheet.
   - O23: "Your week is empty so far." on 0i-d.
   - T61: where an anytime task's reminder lives.
   - C50: the code identifiers.
7. T62 and T69 stay with Heather for her next wording review.
8. A correction pass on the followers (C56).
