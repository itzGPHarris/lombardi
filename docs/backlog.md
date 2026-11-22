# Most Valuable Parent (Lombardi): backlog

*Build order only. Updated as builds land, with no version ritual and no changelog.*

This file holds IDs and sequence. Nothing else.

- Every line references an existing ID in `docs/issues.csv`, a numbered section of `docs/spec.md` (§), or Appendix B of the spec (F). Nothing enters here without one of those first.
- Issue prefixes follow the spec's sections: **C** cleanup and documents, **O** onboarding (§3), **T** Today (§5), **K** Coach (§6), **A** capture (§7), **G** game plan and the plan model (§4, §8), **S** requests (§9), **M** Team (§10), **L** Kids and school cards (§11), **R** MVP Editorial (§12), **U** Settings (§13), **V** coach voice (§14), **W** wireframes, **X** demo controls (§15), **D** data and seed files (§16), **Y** the playbook (§20), **P** the Figma prototype's wiring. Coach uses K and Team uses M so neither collides with C or T. An **F** always means the roadmap.
- A § line means building that section of the spec for the first time. Once the prototype exists, new work enters as an issue or an F-number instead.
- No status. Status lives in `docs/issues.csv`. When a row goes FIXED or CLOSED, delete its line here.
- No descriptions. If a line needs explaining, the explanation belongs in the issues.csv Fix column, the spec section or the Appendix B row.
- Order inside each numbered step and each alpha stage is meaningful. Order inside the other buckets is not.
- The build is Charlotte's household end to end. The other three households enter the build only when C17 lands for each of them.

---

## Before the alpha

*Greg set this order on November 20, 2026. Each step's output is the next step's input: decisions come before words so nothing is written twice, and words come before frames because the fixtures win. Step 1, consolidating the documents, is done.*

### Step 2: Greg's decisions, in one sitting

*Greg decided every item on November 20, 2026. What is left:*

1. Y14: Greg plays starting point C again after the redraw
2. C60: Claude checks the stale rows and brings Greg one list to approve

### Step 3: The missing words, in one fixtures pass

1. P4: the Day 0 tabs
2. T72: Today at the moments that open on another tab
3. T63, O21: C-09 and the wireframe-only Today boards leading with a pass, and the 0b confirmation
4. A12: C-03a, capture on Today
5. K2: the coach's options wherever a problem still lacks them
6. R13: the conference article's screen, with its title over placeholder lines

### Step 4: Heather's batch, alongside steps 5 and 6

1. C21, O3, C22: the tab names, the onboarding order and how the calendar connection is described
2. K1: Charlotte's coach lines and the C-08 and C-08b answers
3. O17: the plan screen's words
4. R15: who writes the two approved articles

### Step 5: The missing frames

1. P4: the Day 0 tab frames
2. T72: any Today board the step 3 words call for
3. T63, O21: C-09, the wireframe-only Today boards and the 0b confirmation
4. R13: the conference article frame
5. G46, C62: the frames that still show words fixtures 3.46 changed, and every phone number with its area code
6. O22, O24: the combined 0g screen from draft 3088:12922 with a four-step StepCounter, and 0h retired
7. T61: the anytime task's item page
8. P3, P11: For You as an overlay on 0c set to Bottom center, and the Cedar Grove card as a 956 px page
9. P8, P12, P13: the jump screen opened by the M key and from Settings, Skip for now off 0w, and the three stranded frames archived
10. Greg's review: check the boards on "Design - lombardi · post-review" against `docs/screen-map.md`, and mark each one Ready for dev

### Step 6: Get the repository ready

1. C64: move the repository out of iCloud Drive and make `npm run check` pass
2. C65: commit the current documents and push them to GitHub
3. C58: the wireframes into `docs/wireframes/`, or frames for the screens that have none

## Alongside, not blocking the alpha

*Figma library and prototype work. It makes the Figma file tidy for the engineer and the Figma prototype complete for Heather, and the code build does not wait on it.*

- C51, C55, C30, O18, C33: the library's remaining states and components, the onboarding components, the October photo and the Voice style
- P5, P6, P7, P10: the Figma prototype's remaining substitutions and dead ends
- Y5: the playbook's draft components into the library, which alpha 2 waits on

## Confirm and close

*Rows that look done or replaced by the post-review page and later fixtures. Greg confirms them under C60, and each leaves this list as it is closed or rewritten.*

T32, T36, T37, T38, T39, T40, T43, T44, T45, T46, T47, T48, T49, T50, T51, G27, G33, G35, G37, G38, G40, G41, G42, G43, A10, C31, C39, M8, L4, K6, R14, O19, O20, W1, W6, W7, W8, W9

## Alpha 1: Charlotte's demo week

*C-00 to C-09 on Netlify. It opens on the splash, every tab works at every moment, the scripted steps play in order, and the switcher and View as work. One run per stage, one commit per line, and a review by Greg between stages. Every screen is built at 440 px first from the frame or fallback named in `docs/screen-map.md`, then extended to tablet and desktop in the same commit.*

### Stage 1: Scaffold

1. §17, §19: tokens, fonts, the Icon component and the component folders
2. §2: the eight layout shells, the tab bar and the sidebar, the monogram and Back
3. X3, §15: the demo calendar from `meta.demoWeekStart`, opening on C-00, and the switcher with moments, View as, the phone frame, reset and the debug menu

### Stage 2: The seed

1. §16: Charlotte's household written from fixtures 3.48, one moment at a time
2. D3: the fixtures test covering every string in the seed, the articles and the copy
3. T27: the leaving time rule checked against every run
4. §14: the voice and date check passing on the seed and the articles

### Stage 3: Today

1. §5: the dateline, Now with the single-leg and trip passes, the status pill, the checklist and its folding, the coach card and its after-answer forms, Later today, MVP Editorial, the evening and the capture bar
2. §5, T36: the header and Now holding in place as the sheet rises
3. §5: the Leave sheet with its line and backups, and the reminder sheet

### Stage 4: Onboarding

1. §16: the seed brought up to fixtures 3.49, with Today at the T72 and T73 moments, the new runs for Tuesday, Wednesday and Friday, the checkup run's child (D9), the food drive (A12), C-09 (G47, G48), the first newsletter (K8), the full grade list (O25), the card after Plan C (T89), C-00's other tabs as data for Stage 5 (P4), and the exemption for `src/copy/demo.js` taken out of the fixtures test (C74)
2. §3, O9, T8: C-00 from the splash (0s) to the coach's introduction (0j), and her first board from 0i-a to 0i-h

### Stage 5: The other tabs, at every moment

1. §6: the Coach tab
2. §8, G33: the game plan, with the week strip, the review card, the days and the item page
3. §10: Team, with chats, groups, person pages and the group page
4. §11: Kids, with both girls' pages and both school cards
5. §12: the MVP Editorial article view
6. §13: Settings
7. §2, §3, O30, O29: onboarding follow-ups from Stage 4, with Back on every onboarding and setup screen after 0w, and the steam stars on the `brand-star` token

### Stage 6: What she does

1. §7: capture, including the staged share sequence and her calendar's conflicts
2. §9: requests for C-02, C-04b, C-06 and C-06b, including View as
3. §8: working the game plan, with adding, moving, asking for help, the backups and the read-back strip
4. §10: the group post from C-05 and the chats in C-05c and C-06c
5. §6: the C-08 and C-08b answers
6. §5, A12: capture on Today in C-03a
7. §5, §8, F35: the Sunday look-ahead and C-09

### Stage 7: Fidelity and deploy

1. Compare every screen with its frame at 440 px, then check 390, 768, 1440 and 1920, and log what is left in `docs/issues.csv`
2. Deploy to Netlify, and Greg plays the alpha end to end

## Alpha 2: The weekend Charlotte is away

1. Y5: starting point C's draft components in the library
2. §20, F37: C-10 to C-13 and C-15, with Edward's side through View as

## Blocked

*Waiting on an answer or on other work, not on a build slot.*

- C17: the other three households' rewrites, each in its own town, once Charlotte's build has been reviewed
- R10: a staff writer for six articles, once C17 gives each household its week

## Parked

*Everything else with an ID. Unordered. Not scheduled.*

F1, F3, F4, F5, F6, F7, F8, F9, F10, F12, F13, F14, F15, F16, F17, F18, F19, F20, F27, F29, F31, F32, F33, F34, F36
A1, A7, A8, G5, Y8, Y18, K3, L1, L2, M2, O15, R4, R5, R6, R7, R9, R11

## Standing, not scheduled

*Recorded so they aren't mistaken for backlog items.*

- C2: closes when C17 closes
