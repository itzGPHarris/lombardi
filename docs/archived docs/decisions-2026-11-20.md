# Decisions before the alpha (Nov. 20, 2026)

This is step 2 of the readiness plan. There are 18 open issues here, grouped into eleven decisions, and each has my recommendation first. You can answer each one with "agree", a different choice, or a note. Once you've answered, I write every answer into the fixtures, the spec, the issues file and the backlog in one pass, and step 3 can start.

Three of these items aren't decisions but things for you to do: Y14 and Y15 need you to play starting point C, and P3 needs a click in Figma. I've put those at the end so they don't slow down the sitting.

---

## 1. What to keep of the October code (C61)

**The situation.** The repository holds the October 8 to 18 build, which is one C-03 slice. It has a shell, a Today tab, a few shared components (ChildChip, AdultAvatar, PlanItem and Icon), a seed for Charlotte, one article, a schema with a validator, the voice check, five test files and the Vite, ESLint, Vitest and Netlify setup. The seed and the screens were written against fixtures 3.1x, before the Now redesign, the trip pass, the evening, the circle vocabulary and the playbook.

**My recommendation.** Keep the tooling: `package.json`, the lint, test and build scripts, `voicecheck.mjs`, `validate-schema.mjs`, the tests that check the voice and the schema, `netlify.toml` and the Icon component. Retire the seed, the article, the schema, the shell, the screens and the other components, and rebuild them in stage 1 on the eight layout shells from fixtures 3.45. Retired files go to an `archive/` folder outside `src/` rather than being deleted, so the engineer can see what came before.

**Why.** The tooling is still right and saves a day of setup. The screens and the seed encode a product that has changed in almost every part, and correcting them line by line would cost more than writing them fresh against the current spec. AGENTS.md says to correct the existing code rather than recreate it, so it gains one sentence naming this decision as the exception.

**The other choice** is to keep everything and correct it in place, which the current AGENTS.md assumes.

## 2. The weekend playbook's two loose ends (Y2, Y3)

**Y2: Is Charlotte listed on Edward's call list for an emergency?** I recommend no. Where Charlotte is already gives the lodge's front desk with a Call button, which reaches her for something serious without inviting Edward to call about small things, and that matches what she asked for. If you want her named, the line would read "Charlotte, for an emergency" at the foot of Who to call.

**Y3: Is the offsite a company offsite or a board weekend?** I recommend keeping the board weekend for the Brightpath Reading Foundation. The fixtures say Charlotte is home full time, and changing her job would ripple through her whole week. The board offsite gives the same story without touching anything else.

## 3. Question marks in sheet titles (Y16)

**I recommend that every title that asks a question ends with a question mark,** so "Who should help while you are away?" and "Who can Edward call for help?" match "Who will take Alexis to the party?". Section 4 already asks for full sentences in headings, and a question without its mark reads as a typo. Heather sees the titles in her review either way.

## 4. A child who comes along to a sibling's activity (G45)

**I recommend dropping the group chip there too,** so a row for Alexis's dance carries only Alexis's chip and its words say who rides along, such as "Studio Ten Dance, with Mallory along". That is the same reasoning you used for the airport pickup: a group chip says the item is for both children. Keeping the old rule leaves two rules that look alike and read differently.

**What changes:** fixtures section 2, the Brightwater Family Therapy and Studio Ten Dance rows on C-06b, and the C-14 Leave sheet.

## 5. Orchestra and the first board's Tuesday (T58, T53)

**T58: When does orchestra start?** Alexis has orchestra on Tuesdays and Thursdays at 7:15am, but the first board recommends taking both girls at 7:40am on Tuesday, Oct. 6. I recommend one invented fact: orchestra starts on Tuesday, Oct. 13, the demo week. That keeps every approved first-board frame as drawn.

**T53: Is 0i-h its own moment?** I recommend it stays a single board inside C-00, called "the next morning", with no moment ID. Its empty sheet then shows Later today with Tuesday's afternoon items, taken from the week's routine, so the board isn't blank. Giving it an ID would mean writing a whole extra day for a board the presenter only passes through.

## 6. Today's scrolling (P2)

**The situation.** Now on the first board is taller than the phone, because the reminders sit inside the trip pass. So 0i-a, 0i-c, 0i-f and C-07 now scroll as one page, which departs from the rule that Now stays in place while the sheet rises over it.

**My recommendation.** Keep the rule, with one exception written into it: when Now is taller than the space left above the capture bar, the whole page scrolls as one. This is what the four frames already do. Every daytime board, where Now is short, keeps the rising sheet, which is the behavior you designed Today around.

**The other choice** is to make one scrolling page the rule for every Today board. That is simpler to build but loses Now staying in view.

## 7. The presenter's switcher and the stranded frames in Figma (P8, P13)

**My recommendation.** Approve the jump screen (`2904:12590`). Open it with the M key on every frame for a presenter with a keyboard, and with a row at the foot of Settings for touch. Figma has no long press, and the code build keeps the long press on the monogram that spec §15 already decided, so this choice affects the Figma prototype only.

**P13: The five frames nothing reaches.** I recommend moving three to "Archive - not for build": the 3.14 C-06 notification, the C-05 coach card fragment and the old Investor demo start. The two wireframe-only party boards stay on the page, unwired, because they are still build references if the backlog asks for them.

## 8. Onboarding leftovers (P12, O22, O24, O11)

- **P12: Skip for now on 0w.** I recommend removing it. The welcome screen asks for a first name and a zip code, and both are needed for the first draft.
- **O22 and O24: one screen for 0g and 0h.** I recommend combining them, as your Oct. 27 comment asked. Setup becomes four steps, 01 of 04 to 04 of 04, "Who else helps?" becomes a subheading under "Your household", and the button reads Done. The combined screen scrolls with the button pinned, and StepCounter gets a four-step variant. Heather's wording for 0g already supports this.
- **O11: the school screen's heading.** I recommend "Where do they go to school?" in place of "Who's on your calendar?". The screen comes straight after "Connect your calendar", so the current heading reads as the same question asked twice.

## 9. Two lines on the first board and tasks (O23, T61)

- **O23: The 0i-d coach card.** I recommend "Your week is empty so far." in place of "Today is empty so far.". The pass above the card already shows tomorrow's departure, so "today" contradicts it.
- **T61: Where an anytime task's reminder lives.** I recommend the task's item page, which the game plan already opens and which already has Ask for help. The reminder sits beside it. This needs one frame, which goes into step 5.

## 10. Renaming the code identifiers (C50)

**I recommend renaming them in the alpha:** `villageGroups` becomes `groups`, and the group values `inner` and `village` become `circle` and `people`. Stage 2 writes the seed again from scratch anyway, so the rename costs nothing now and spares the engineer two vocabularies. Spec §16 and the component inventory change with it.

## 11. The stale open rows (C60)

**I recommend that I check each of the 38 rows** in "Confirm and close" against the post-review page and the November 19 library, and bring you one list: the rows to close with the evidence for each, and the few that still describe real work, rewritten. Then your decision is one approval instead of 38 checks.

---

## For you to do, outside the sitting

- **Y14 and Y15.** Play starting point C again after the November 19 redraw. If it reads right, both close.
- **P3.** Move For You out of 0c's scroll frame onto the page, and set its overlay position to Bottom center. Figma only allows this by hand.
