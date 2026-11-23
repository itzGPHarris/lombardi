# Handoff, November 23, 2026: the Figma pass, the Alpha 1 follow-ups and the move to the other households

*Written at the end of the November 23 session so the next claude.ai session and the next Claude Code session start from the same picture.*

## Where things stand

Alpha 1, Charlotte's demo week (C-00 to C-09), is built, merged to main and live on Netlify, because main deploys. The Alpha 1 follow-ups merged in pull requests #23 and #24: the splash's tagline (O26), the thinking dots that pulse (O27), StopMarker and the redesigned RouteStation on the Leave sheet and the trip timetable (T91, T75), the play and radio glyphs drawn through Icon (K10), and Button's disabled state (C83). C81 is closed after Greg checked the deploy on his phone from the Home Screen.

Main is the only branch, locally and on GitHub, once docs-y14-accepted is merged. That branch holds Greg's acceptance of starting point C (Y14 closed, Y20 added), the backlog's move of C17 into its own section, a tidy of the backlog that drops every line whose rows are fixed and folds Alpha 1's finished stages into one line, and this handoff.

## What the Figma pass changed

The pass ran on November 23 from claude/kickoff-figma-pass.md, and claude/figma-pass-2026-11-23-results.md in the project lists every frame and component it touched. In short, the playbook's draft components are in mvp-design-library (ContactRow, ChooseRow, PlanStatus, RadioRow, PlaybookDayCard, PlaybookBanner, BrandHeader), the library gained the disabled fill and the eleven layout variables (src/tokens.css now matches all 112 variables), the onboarding, Today, Coach, game plan, item page, request, Team, Kids and Settings frames were brought into line with the build, and six new frames were drawn: the four C-01 share screens (A13) and the two in-app notifications (A14). The screen map lists them.

Greg then redrew RouteStation, and Claude fixed StopMarker's variants: Home, School and Other, each Ahead, Current and Behind. Every Leave sheet frame marks home Current and every stop Ahead, with any place that is neither home nor a school drawn as a dot. Spec 0.54 §5 and standing decision 26 say so.

## What is open, and whose it is

| Item | Owner | What it needs |
| ----- | ----- | ----- |
| Alpha 2 | Claude Code | Ready to run from its prompt in docs/stage-prompts.md. Edward's view after he answers is built from frame 3160:16646 as drawn (Y20). |
| C17 | Claude, in claude.ai | The other three households rewritten in the fixtures, each in its own invented town. Greg moved this forward on November 23. Fixtures 2.2 is the starting point. |
| C60 | Claude, then Greg | Check the 38 rows under "Confirm and close" in the backlog against the post-review page and bring Greg one list to approve. Most of the open "must" rows in the issues file are on that list. |
| T92 | Greg | The open Stop station's label wraps to four lines beside RouteStation's fixed 270 px picker. |
| A14 | Greg | Whether the in-app notification slides or fades, which decides whether it gets a Motion row. |
| S10 | Greg | The wording differences on the recipient frames. |
| Y20 | Greg, later | Edward's view after he answers keeps its older layout. |
| C58 | Greg | Copy the wireframes into docs/wireframes/. |

Smaller leftovers from the Figma pass, none of them blocking: values the library has no variable for (PlaybookBanner's 67 px top padding, ChooseRow's 6 px box radius, a 2 px gap and a 3 px padding in the playbook rows, a 6 px gap in ThinkingDots), Alexis's page and the five drafts still on canvas, the item pages' and playbook frames' 89 px Back bars, and Settings wrapping the email value.

## How the two sessions start

In Claude Code, start a fresh session, paste the Alpha 2 prompt from docs/stage-prompts.md, and review its plan before it changes code. In claude.ai, start with C17: choose which household the demo shows second, and Claude drafts its week against the current rules before the others.
