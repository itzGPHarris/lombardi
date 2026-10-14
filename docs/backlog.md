# Most Valuable Parent (Lombardi): backlog

*Build order only. Updated as builds land, with no version ritual and no changelog.*

This file holds IDs and sequence. Nothing else.

- Every line references an existing ID in `docs/issues.csv`, a numbered section of `docs/spec.md` (§), or Appendix B of the spec (F). Nothing enters here without one of those first.
- Issue prefixes follow the spec's sections: **C** cleanup and documents, **O** onboarding (§3), **T** Today (§5), **K** Coach (§6), **A** capture (§7), **G** game plan and the plan model (§4, §8), **S** requests (§9), **M** Team (§10), **L** Kids and school cards (§11), **R** MVP Recommends (§12), **U** Settings (§13), **V** coach voice (§14), **X** demo controls (§15), **D** data and seed files (§16). Coach uses K and Team uses M so neither collides with C or T. An **F** always means the roadmap.
- A § line means building that section of the spec for the first time. Once the prototype exists, new work enters as an issue or an F-number instead.
- No status. Status lives in `docs/issues.csv`. When a row goes FIXED or CLOSED, delete its line here.
- No descriptions. If a line needs explaining, the explanation belongs in the issues.csv Fix column, the spec section or the Appendix B row.
- Order inside **Next** and **Then** is meaningful. Order inside the other buckets is not.
- The build is Charlotte's household end to end. The other three households enter **Then** only when C17 lands for each of them.

---

## Next

1. C19: check or replace the invented email domains
3. X1: confirm the switcher and debug menu triggers
4. A6, O11: read only for her calendar, and the school screen's heading
5. W1, S5, A5: the pass 9 wireframes, before the capture and request builds
6. K5: choose the Inter style for the coach chat

## Then
*Ordered. Each its own commit. Every screen is built at phone size first, then extended to tablet and desktop in the same pass. Scaffolding, data and demo controls come first, so every screen after them can be built and tested against Charlotte's moments.*

1. §17: repository, Vite scaffold, `tokens.css`, README, AGENTS.md, `docs/`
2. §16: Charlotte's seed file and the article library structure, from `docs/story-fixtures.md` v3.9, including her calendar
3. §14: `voicecheck`, including the date check, run against the seed as soon as it exists
4. §15: additional moments, View as, debug menu, and reset across moments
5. §4: plan items, owners, statuses and marks, as shared components
6. §5: Today, for C-06, C-06b and C-07
7. §8: Game plan, for C-01 and C-04
8. §7: capture, including the staged share sequence, her calendar, the calendar mark and the C-06b steps
9. §6: Coach, for C-01 and C-05b
10. §9: requests, for C-02, C-06 and C-06b
11. §10: Team, for C-05
12. §11: Kids and school cards, for C-05b
13. §12: MVP Recommends, with Charlotte's two articles
14. O6, O7, O9, O10: onboarding copy corrections
15. §3: onboarding, C-00
16. §6: the C-08 answer, once K1 is answered
17. §13: the Settings placeholder

## Blocked
*Waiting on an answer, not on a build slot.*

- C17: the other three households' fixtures rewrites
- C18: needs Greg on whether the families share a town
- C6: needs the first presentation date
- C22: needs Heather on how the calendar connection is described
- C8: needs the Coach Input and Trust file, or a decision to discard it
- C9: needs Heather to explain "PAS eater"
- C21: needs Heather's sign-off on the tab names
- O3: needs Heather on the new onboarding order
- O4: needs agreement on the zip code's purpose
- O5: needs Greg to confirm the MVP mark
- T13: needs Greg on what More options opens and when the Coach Alert appears
- K1: needs Heather's review of the support answers
- R10: needs a writer for the other six articles
- S1: needs Edward's own Today written in the fixtures

## Parked
*Everything else with an ID. Unordered. Not scheduled.*

F1, F3, F4, F5, F6, F7, F8, F9, F10, F12, F13, F14, F15, F16, F17, F18, F19
A1, A7, A8, G4, G5, K3, L1, L2, M2, M4, R4, R5, R7, R9, R11

## Standing, not scheduled
*Recorded so they aren't mistaken for backlog items.*

- C2: closes when C17 closes
- K2: closes when Heather has read Charlotte's coach lines

## After C-03 review

- T6
- D1

## Figma fixes before the Today build
*Unordered. Library and frame fixes in Figma.*

- T7: the library Button component
- T8, T9, T10, T11, T12
- C26

## Today redesign
*Ordered. Each its own commit.*

1. C27: visual review of existing screens
2. T7: the Button component in code
3. C28: migrate off the deprecated tokens, then remove the aliases
4. U3: AdultAvatar in the header
5. G7: ChildChip in plan rows
6. T13: the coach card and Coach Alert
7. T14: the rest of the redesign, once the fixtures cover it
