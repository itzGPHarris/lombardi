# Most Valuable Parent (Lombardi): backlog

*Build order only. Updated as builds land, with no version ritual and no changelog.*

This file holds IDs and sequence. Nothing else.

- Every line references an existing ID in `docs/issues.csv`, a numbered section of `docs/spec.md` (§), or Appendix B of the spec (F). Nothing enters here without one of those first.
- Issue prefixes follow the spec's sections: **C** cleanup and documents, **O** onboarding (§3), **T** Today (§5), **K** Coach (§6), **A** capture (§7), **G** game plan and the plan model (§4, §8), **S** requests (§9), **M** Team (§10), **L** Kids and school cards (§11), **R** MVP Recommends (§12), **U** Settings (§13), **V** coach voice (§14), **W** wireframes, **X** demo controls (§15), **D** data and seed files (§16). Coach uses K and Team uses M so neither collides with C or T. An **F** always means the roadmap.
- A § line means building that section of the spec for the first time. Once the prototype exists, new work enters as an issue or an F-number instead.
- No status. Status lives in `docs/issues.csv`. When a row goes FIXED or CLOSED, delete its line here.
- No descriptions. If a line needs explaining, the explanation belongs in the issues.csv Fix column, the spec section or the Appendix B row.
- Order inside **Next** and each review build is meaningful. Order inside the other buckets is not.
- The build is Charlotte's household end to end. The other three households enter a review build only when C17 lands for each of them.

---

## Next
*Before review build 1. The game plan session has run, so prototyping can resume once the documents and the library are in.*

1. T38, G38, G41: the folded checklist boards, the C-06b board with one coach card, and the removed lines on the older boards, drafted with line 2 once Greg publishes the library of October 18
2. T51, T47, T48, T49, T50: Greg's Now redesign and prototype scrub 3. The documents are written in fixtures 3.20 and spec 0.20, so Claude makes the library changes, Greg publishes, and the Today and game plan boards follow, with the T50 board drafted for Greg
3. T43, T44, T45, T46: prototype scrub 2. Claude adds the title line to NowBlock, the urgency stages to StatusPill, the new headings to ChecklistGroup, and the line, the drawn controls and the hidden Save to the Leave sheet, which are published and accepted, so the Today boards are swapped and the C-03b sheets wired to the picker state
4. G40, A12: the landing state on the C-04 and C-06b game plan boards, then the C-03a boards, drafted after the scrub fixes and wired once Greg approves them
5. G42, G43, G41, F35: the documents are written in fixtures 3.20 and spec 0.20, so Claude builds Notice and Add them all in the library, then drafts the changed C-00, C-01 and C-06b boards, the Ada boards, the Settings card, the notice board and C-09 for Greg
6. G27, G33, G35, A10: Greg accepts the library update in `mvp-lombardi`, and the draft components are deleted once the boards use the library's
7. G37: the C-00 first board takes "Add the start time", and the Leave sheet boards and components follow
8. T36: Greg plays C-06 in presentation mode, then the other Today boards and their sheet boards are restructured the same way, the screen map's notes follow, and prototype pass 1 is re-wired on them, with the game plan boards wired from the C-04 and C-06b frames
9. C39, M8, L4, K6, R14, O20: Greg confirms fixtures Appendix B items 60 and 62, then the tab list, page, conversation, composer and onboarding boards are restructured to their layout types, with one reference board per type, and the flows are re-wired on them
10. W7, W8, W6, W9: wireframe pass 12, then `wireframe-pass12a-prompt.md` in the same chat
11. Greg's review: check the boards on "Design - lombardi" against `docs/screen-map.md`, and mark each one Ready for dev in Figma
12. O17, C33, O18: the plan screen's words, the Voice style, the October photo and the 0p mark
13. C30: swap the onboarding boards' older button, progress and input components for the library's web components
14. Copy the document set into the repository and run `review-build-1-prompt.md`

## Review build 1
*The next build run. Ordered, one commit per line, and the run is not done until every line is. Correct the existing repository rather than recreating it. Every screen is built at 440 px first, from the frame or fallback named in `docs/screen-map.md`, then extended to tablet and desktop in the same commit. The aim is a prototype Greg can walk through from the splash to every tab.*

1. C24: adopt `docs/screen-map.md` and AGENTS.md "Who decides what", and check the existing C-03 screen against them
2. X3, §15: open on C-00, with C-03 and the other moments as jumps in the switcher, and every date worked out from `meta.demoWeekStart`
3. §3, O9, T8: C-00 onboarding from the splash (0s) to the coach's introduction (0j), including the staged photo, read-back, draft, account, the staged plan screen, calendar connection and setup screens, and her first board in its three states and the skipped-capture state
4. D1, §16: runs in the seed, with stops, due times and leaving times, and the leaving time rule checked against them
5. §5, T19, T23, T26, T36: Today for C-03, C-03b, C-05, C-06, C-06b and C-07, with the dateline, Now stepping down the run, the next station, the coach card, the answer sheet and the capture bar
6. T17, T22, T32, T33: the Leave sheet with its line and backups, Other options opening it, and the reminder sheet in its set and notifications-off states
7. §2: all five tabs reachable from every Today state, as a tab bar on the phone and a sidebar from tablet width, with Today kept as a phone column at wider sizes
8. §6: the Coach tab at C-01, showing the conversation
9. §8, G11, G12, G31, G33: the Game plan tab at C-04 and C-06b, showing the week strip, the review card, the days and the item page
10. §10: the Team tab, showing her chats, groups, inner circle and village, with person pages and the group page
11. §11: the Kids tab, showing both girls' pages and both school cards
12. §12: the MVP Recommends card on Today and the article view behind it
13. Fidelity: compare every screen with its frame at 440 px, then check 390, 768, 1440 and 1920, and log what is left in `docs/issues.csv`

## Review build 2
*Ordered. What she does on those screens.*

1. §7: capture, including the staged share sequence, her calendar's conflicts and the C-06b steps
2. §6: the Coach tab's read-backs and options for C-01 and C-05b
3. §9, S5: requests, for C-02, C-04b, C-06 and C-06b, including View as
4. §8, G8, G15, G16, G17, G18: working the game plan, for C-04 and C-06b, with Add to the plan, Move to another day or time, Ask someone to take this, the backups on the item page and the read-back strip
5. §10: the village post from C-05, the chats in C-05c and C-06c, adding someone and creating a group
6. §6: the C-08 and C-08b answers, once K1 is answered
7. T20, T24, T25, C34: the boards for Wednesday at 5:10 pm and Sunday, if Greg wants them built
8. §13, U3: the Settings page, with its controls staged
9. §5, T38: the checklist roll-up
10. §5, A12: capture on Today in C-03a, with the read-back on the coach card
11. §5, §8, F35: the Sunday look-ahead and C-09 on the game plan

## Blocked
*Waiting on an answer or on other work, not on a build slot.*

- K1, K2: a read of Charlotte's coach lines and the C-08 and C-08b answers
- C22: approval of the two lines that describe the calendar connection
- C21: sign-off on the tab names
- O3: acceptance of the onboarding order, for the brief
- C17: the other three households' rewrites, each in its own town, once Charlotte's build has been reviewed
- R10: a staff writer for six articles, once C17 gives each household its week
- C45: the repository-root AGENTS.md, which needs the repository root connected or pasted

## Parked
*Everything else with an ID. Unordered. Not scheduled.*

F1, F3, F4, F5, F6, F7, F8, F9, F10, F12, F13, F14, F15, F16, F17, F18, F19, F20, F27, F29, F31, F32, F33, F34
A1, A7, A8, G5, K3, L1, L2, M2, M4, O15, R4, R5, R6, R7, R9, R11

## Standing, not scheduled
*Recorded so they aren't mistaken for backlog items.*

- C2: closes when C17 closes
