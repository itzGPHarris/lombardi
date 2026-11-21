# Kickoff: the weekend Charlotte is away, the missing frames, and the first wide views

*Written November 20, 2026, at the end of the session that set up the alpha build. Paste everything below the line into a new chat in the "MVP - Lombardi" project.*

---

This chat covers three pieces of design work on the Figma boards, done in order: redrawing starting point C (the weekend Charlotte is away), drawing the frames that are still missing for the demo week, and drawing a first small set of tablet and desktop views. No code is written in this chat. The aim is that every board the alpha needs exists on "Design - lombardi · post-review", matches the current fixtures, and is ready for Greg to mark Ready for dev.

## Before you start

Ask me to connect the lombardi-poc folder (`~/Library/Mobile Documents/com~apple~CloudDocs/Documents/lombardi-poc`) and work from the documents in its `docs/` folder rather than the project copies, which are out of date for the fixtures, spec, issues file and screen map. Then read, in this order:

1. `docs/story-fixtures.md` section 2 (the product rules and "Type"), section 3's "The weekend Charlotte is away" and moments C-10 to C-15, "Boards for the wireframes only", section 4, and Appendix B items 129 to 149.
2. `docs/spec.md` §2 "Layout and scrolling" and "At wider screens", §5 "At wider screens", §19 (including the three sizes), and §20 in full.
3. `docs/screen-map.md` in full, especially "Starting point C" and "Screens with no frame".
4. `docs/backlog.md`, "Before the alpha", steps 3 and 5, and "Alongside, not blocking the alpha".
5. The rows named below in `docs/issues.csv`.

The Figma files are `mvp-lombardi` (`RK2JTfwao4mV4JgUA193M1`), with the build page "Design - lombardi · post-review" (`2853:11893`), and the master library `mvp-design-library` (`A3SHbWiO5cyRDtIZ9sNNz7`). Load the figma-use skill before any `use_figma` call. Build from the library's published components, bind every value to a Hearth variable or text style, and draw new boards on a separate drafts page. A board moves to the post-review page only when I ask, because that page is what the build reads. When a new or changed library component is needed, say so, because I have to publish the library before the boards can use it.

## What changed today

These changes are already in the documents, so don't redo them:

- **Fixtures 3.48 and spec 0.47.** Fraunces sets titles and headlines only, never a paragraph or other running text. The coach is set in Inter everywhere, including onboarding, in the Voice style, which the library already sets in Inter. The departure time on the pass stays in Fraunces as Display. I checked the post-review page, and no body text there is set in Fraunces.
- **`src/tokens.css` matches the library** (C59 fixed). The cerulean tint is #E1EEFC and Body strong is weight 700. C33 is open only for the title style's 20px size, which needs a `type/size/20` variable.
- **The build-agent files were restructured.** `CLAUDE.md` imports `AGENTS.md` and points to a `lombardi-docs` skill for document work. `AGENTS.md` makes `npm run check` the gate before every commit and adds rules for evidence and confirmation (C63).
- **`docs/stage-prompts.md` is new.** It holds one prompt per alpha stage, which matters here because Stage 7 and alpha 2 compare every screen with the frames this chat draws.

## Part 1: Starting point C (Y19, Y17, then Y5)

Fixtures 3.47 rewrote the weekend journey after Heather's fourth review. The airport rides are gone because Charlotte drives herself, C-14 is retired, the playbook runs day by day from when she leaves and child by child under each day in both views, Edward can take every part with "I'll take all of it", "If plans change" offers Call Ruth, Call Claire and Text Charlotte, both girls go to Sophie's party with Ruth, and every phone number carries its area code. The frames under "Starting point C" predate all of this.

1. Compare every frame the screen map lists under "Starting point C" with fixtures 3.48 and spec §20, and give me a list of what each frame needs before you change anything. Some frames are redrawn, some are corrected in place, and some are retired.
2. Move the frames that no longer belong to "Archive - not for build": the C-14 frames (the flight alert, Edward's Sunday Today states, the Leave sheet, Text Ruth instead and "If Ruth doesn't answer"), and the Sunday airport pickup's page with its backups (`3094:12997`). Where something in Y15 (the backup choice) no longer has a place now that the airport rides are gone, say so rather than redrawing it somewhere else.
3. Redraw or correct the rest on a drafts page, including Edward's view after he answers (Y17, `3105:14975`) in the new layout with day labels in ink. Use the fixtures' words exactly.
4. Once I approve the drafts, move them to the post-review page under "Starting point C", rewire the Figma prototype for the journey, and rewrite the screen map's "Starting point C" section with the new frame IDs. Then list the components the drafts reuse, so they can go into the library under Y5.

When Part 1 lands, I replay the journey for Y14 and Y15, and alpha 2 is unblocked once Y5 is in the library.

## Part 2: The missing demo-week frames (backlog steps 3 and 5)

The backlog puts the missing words before the frames, because the fixtures decide the words and a frame drawn before its words gets drawn twice. Work in two passes.

**The words, as one fixtures pass (step 3).** Write one pass file for fixtures 3.49 covering P4 (the Day 0 tabs), T72 (what Today shows at the moments that open on another tab), T63 and O21 (C-09 and the wireframe-only Today boards leading with a pass, and the 0b confirmation), A12 (C-03a, capture on Today), K2 (the coach's options wherever a problem still lacks them) and R13 (the conference article's screen). Bring me the pass to approve, then apply it to the full fixtures in the same session, update the spec and the followers wherever they're affected, and archive the pass file and version 3.48.

**The frames (step 5), in the backlog's order.** These are the frames for P4, T72, T63 and O21, R13, G46 and C62 (the frames still showing words that fixtures 3.46 changed, and every phone number with its area code), O22 and O24 (the combined 0g screen from draft `3088:12922` with a four-step StepCounter, and 0h retired), T61 (the anytime task's item page), P3 and P11 (For You as an overlay on 0c, and the Cedar Grove card and Settings as 956 px pages), and P8, P12 and P13 (the presenter's jump screen, Skip for now off 0w, and the stranded frames archived). Also cover the screens the screen map lists under "Screens with no frame". Draw on a drafts page and bring them to me in batches, so I can review each batch before the next one starts. As each frame lands on the post-review page, add it to the screen map with its frame ID and layout type, and update its issue row.

Heather's wording batch (step 4) runs alongside and isn't part of this chat. Where a frame shows words that are waiting on her (C21, O3, C22, K1, O17), draw the fixtures' current words and note the frame in its issue row.

## Part 3: A first set of tablet and desktop views

None of the boards show a wider screen yet, so the build agent has only the spec's description of the sidebar and the seven-column game plan to work from. Draw a few representative views, enough to settle the patterns rather than every screen:

1. Today at 768 × 1024 and at 1440 × 900, with the sidebar headed by the wordmark, Settings at its foot, and Today in its phone layout in a centered column.
2. The game plan at 768 and at 1440, with the review card across the top, the week in seven columns under the week strip, and next week beneath it.
3. The weekend playbook from Part 1 at 1440.
4. One page opened inside a tab, such as the Cedar Grove Elementary school card, at 1440.

The layout rules come from spec §2 "At wider screens", §5 "At wider screens" and §19's three sizes, with content width stopping at 1200. A wide Today is parked as F20, so Today stays in its column. Where the spec doesn't say how something behaves at a wider size, such as how a sheet presents at 1440 or how the playbook's days lay out beside the sidebar, don't invent an answer. Bring me the question, and record it as a row in the issues file under its spec section until I decide. Once I approve the views, add them to the screen map so Stage 7 can check the build against them.

## How to work

- Give me the summary first, then the detail.
- Make correction passes on what's in hand rather than regenerating.
- Keep every document current in the same session: the fixtures, the spec, the screen map, the issues file, the backlog and the followers (`AGENTS.md`, `CLAUDE.md`, the `lombardi-docs` skill and `README.md`).
- When a row goes FIXED or CLOSED, remove its line from the backlog.
- Put passes, earlier versions and handoffs in `docs/archived docs/`.
- Don't commit to git unless I ask.
- End the chat with a short handoff in `docs/archived docs/` saying what landed, what's waiting on me, and what's next.
