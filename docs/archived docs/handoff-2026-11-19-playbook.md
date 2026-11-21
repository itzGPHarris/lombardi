# Handoff: the weekend Charlotte is away (Nov. 19, 2026)

This session turned Greg's auto pilot idea into a documented journey and a set of Figma drafts. Charlotte goes to a weekend offsite and hands the weekend to Edward in a playbook. The documents now stand at fixtures 3.33 and spec 0.32. Heather has not seen any of it, by Greg's choice, until the pass is complete.

## What Greg decided

- The journey sits in the week after the demo week, as moments C-10 to C-15 and a starting point of its own, C, "The weekend Charlotte is away".
- On screen it is a **Playbook**, a view in the game plan. "Auto pilot" stays a nickname.
- **Edward gets the MVP Coach,** because the Family plan includes it.
- **While Charlotte is away,** anything new for those days goes to Edward, because she ticks one line on the playbook. Nothing reaches her.
- **Her first morning back** opens with a weekend summary covering what came in, what Edward did, his notes, and what the coach thinks is worth a look.
- **Edward's view is shorter** and built to answer questions fast: who to call first, then the weekend, then the girls' routines, then what to do if something changes.
- **Edward never marks a "can't".** The playbook carries backups, and on Sunday he turns to Ruth, a neighbor in Charlotte's circle.
- **Sunday's flight is two hours late.**
- **Pushing against locked decisions is allowed** for this journey, which is likely the last in V1.
- **Process:**
  - The frames went straight to Figma as drafts, with no wireframe pass.
  - They stay off the existing flows until Greg approves them.
  - F37 is registered and moved into the prototype.

## What I decided and flagged

- **The board offsite.** The fixtures say Charlotte is home full time, so the "company offsite" became the weekend offsite of a children's literacy nonprofit's board she volunteers on (issue Y3, fixtures item 121).
- **Ruth Delgado** is the new circle member who makes the backup possible. Charlotte adds her in C-11, when the coach asks its one question, so Ruth appears on no demo-week screen.
- **Emergency contact.** Charlotte is left off Edward's Who to call, because she asked not to be bothered. Whether she belongs there for an emergency is Greg's call (issue Y2).
- **Invented facts:** Bayview Regional Airport, 35 minutes from home; Larkspur Air; the Brightpath Reading Foundation; Harlow Lake Lodge; Sophie Park's birthday party on Saturday; bedtimes; Edward's notes; and the next Cedar Grove Elementary newsletter. All of them are in fixtures Appendix A.

## Documents

- **Fixtures 3.33.**
  - The pass is `archived docs/fixtures-3.33-pass.md`, and version 3.32 is archived.
  - Section 3 gains "The weekend Charlotte is away" with all six moments, and Ruth is added to the circle table.
  - New terms, a Playbook copy table in section 4, Appendix A facts, Appendix B items 117 to 124, and an Appendix C entry.
- **Spec 0.32.**
  - A new §20, The playbook, with fields, both views, the request, the playbook days, the weekend summary, six standing decisions, three open conditions and what's out of scope.
  - §15 gains C-10 to C-15, §18 is fenced, and F37 has moved into the prototype. F38 is next free.
- **issues.csv:** Y1 to Y6, a new prefix for §20.
- **Backlog:** Y1, Y2, Y3, Y5 and Y6 lead Next, Y4 waits in Blocked for Heather, and review build 2 gains §20.
- **Screen map:** a section listing the drafts by frame ID.

## Figma

There are 14 frames on "Drafts - playbook" (`3094:12955`), in moment order, none of them wired.

- **Built new:**
  - Her playbook as the coach drafts it, with the coach's question.
  - Her playbook after she adds Ruth.
  - Edward's view.
  - The weekend summary.
- **Adapted from existing boards:**
  - C-10's Today with the coach card.
  - The Sunday pickup's page at its backups.
  - The draft to Edward.
  - Edward's request and his answer.
  - Edward's Friday Today with the harvest fair trip pass.
  - Edward's Sunday Today with the late-flight coach card.
  - The Leave sheet at Plan C.
  - The text to Ruth.
  - Charlotte's Monday Today with the summary card.
- **Draft component:** a local `Draft · ContactRow` with a Call button. The library is untouched until Greg approves the drafts (issue Y5).
- **Drawing for review:** tall frames are drawn full length so they can be read in one go, and in the build they scroll.

## Still open

1. Greg reviews the 14 drafts.
2. Greg decides Y2 (Charlotte as an emergency contact) and Y3 (the board offsite).
3. After approval, the library takes what survives (Y5), the frames move to the post-review page, and starting point C is wired (Y6).
4. Heather reviews the journey's words, the name Playbook, and how Edward is drawn (Y4).
5. Known draft limits:
   - Edward's view and his request frames still show Charlotte's tab bar state from the boards they were copied from.
   - C-11's first frame shows the strip over content that scrolls.

## Update after Greg's review, November 19, 2026

Greg reviewed the 14 drafts and decided three things: the handover is acknowledged with "Got it", Edward's view is called "Your playbook", and calling first applies only on the playbook days (issue Y8 parks the wider question). Fixtures 3.34 and spec 0.33 carry the corrected wording, and the pass file is `fixtures-3.34-pass.md` in this folder.

The page "Drafts - playbook" now holds 19 frames in one row in moment order. Five are new: Edward's playbook as the coach drafts it (`3100:14368`), the sheet "Who can Edward call?" (`3100:14559`), Edward's Today after the call (`3100:14756`), after Ruth can stay (`3100:14832`) and the 7:30pm card when Ruth hasn't answered (`3100:14931`). The message to Edward no longer has Yes and No and ends with Ruth's number, the C-14 card tells Edward to call Ruth with a 7:30pm deadline, and texting Ruth hands off to his messages app. The C-14 thread card is detached from CoachCard, as on 0i-c, because the library card's after-answer state has no slot for a follow-up line of this length; this belongs with Y5 if the drafts survive review. The screen map lists every frame, and Y1 and Y7 stay open until Greg approves the redraw.

## Update: Charlotte's flight on Edward's Today, November 19, 2026

Greg asked that Edward's Today show Charlotte's flight and alert him when it is delayed. Fixtures 3.35 and spec 0.34 carry it, with F38 registered for the playbook only and issue Y9 open until Greg approves the frames. MVP now follows the flight itself from her itinerary, so C-11 no longer asks Charlotte to set her email to forward Larkspur Air's messages. On the day she flies home, a line under "Your playbook" reads "Charlotte's flight · Larkspur Air 482 ·" and its status, and the alert goes to Edward's phone only when a change moves his leaving time. The four C-14 Today frames carry the line, and a new frame (`3103:14972`) shows the alert at 4:15pm, cloned from the C-03b notification board, whose large clock still reads 9:41.

## Update: where Charlotte is staying, November 19, 2026

Greg asked that the playbook give the place Charlotte is staying, its number, and a note when its time zone differs by three hours or more. Fixtures 3.36 and spec 0.35 carry it, and issue Y10 is open until Greg approves the frames. Harlow Lake Lodge is on Eastern time, and its front desk is 555-0190. Her view gains Where you're staying, from her itinerary, and his view gains Where Charlotte is between If plans change and Who to call, with a Call button and the line "Charlotte is on Eastern time, three hours ahead of you, so 8:00pm here is 11:00pm there." Putting the lodge in the East broke the timing of Sunday's delay, because a nonstop flight landing at 6:40pm Pacific time would already be in the air at 4:15pm, so her flight home now has a change, and Larkspur Air 482 is the last leg, from Crestfield International Airport at 4:25pm. The lodge's front desk partly answers Y2, because it reaches Charlotte for something serious without listing her, and Greg still decides whether she is listed by name.

## Update: a draft she edits and he accepts, November 19, 2026

Greg saw that the coach's draft read as agreements, could overburden Edward, and reached him out of the blue. Fixtures 3.37 and spec 0.36 make the playbook a draft of suggestions: every item reads "Suggested for Edward", the coach suggests only what is already Charlotte's on those days, she edits (in C-11 she takes out the violin note, so it holds six things) and can save for later, and she sends it with "Send to Edward to look over". Edward's card reads "Charlotte asked you to look over this weekend." with "Look over the weekend", his view shows each item as Suggested with "Accept the weekend" and "Ask Charlotte for a change", and he accepts at 6:31am. Asking for a change before he accepts is not a can't, and once he accepts the no-can't rule and the backups apply. The Got it handover from fixtures 3.34 is superseded (Appendix B item 120). The change path is drawn for the boards: Charlotte's coach card quotes Edward and opens the playbook. Item 133, what happens if he hasn't accepted when she leaves, is open. Issue Y11 tracks it. New frames: Your playbook after he accepts (`3105:14975`) and Charlotte's change card (`3105:15105`); `3098:14423` is now the review state.

## Update: Edward answers each part, and Ruth's list fills the gaps, November 19, 2026

Greg pointed out that Edward may only take the simple things and keep a standing commitment such as a bike ride or a tee time, so Charlotte may need to coordinate with Ruth before she leaves and give Ruth a backup list. Fixtures 3.38 and spec 0.37 replace the whole-weekend accept with answers on each part, using the words every request in MVP uses, Yes, I can and No, I can't, and Send your answers to Charlotte. In C-12 Edward can't take Sophie's party, because Saturday at 12:30pm is his standing tee time. A new moment, C-12b, has the coach recommend Ruth, Charlotte send the text, and Ruth say yes on Ruth's list, a single web page with the party and "If Edward calls". C-15 credits Ruth with the party. Item 133 is decided: anything without a yes stays Charlotte's as Needs an owner, and her coach card warns her on Thursday evening. The rule that Edward never marks a can't now applies on the day, after he has said yes. Issue Y12 tracks it. New frames: the text to Ruth (`3106:15279`), Ruth's text (`3106:15312`) and Ruth's list (`3106:15317`); `3105:15105` is now Charlotte's C-12b card and `3105:14975` his playbook after Ruth's yes.

## Update: the weekend playbook, November 19, 2026

Greg saw that Edward's review screen read as settled, that a name on it confused whose it was before he agreed, that Ruth would really be lined up before Edward sees the list, and that letting Edward refuse parts would set the two of them against each other. Fixtures 3.39 and spec 0.38 title both views Weekend playbook. In C-11 Charlotte gives Sophie's party to Ruth and records Ruth's yes, because she talked to Ruth that afternoon, and the message tells Edward Ruth is taking it. In C-12 each part suggested for Edward has I'll take this, Suggest a change and Ask someone else, of equal weight, with no No, I can't, and If plans change appears only after he answers. He takes all three of his parts. C-12b is retired, and the boards gain "If Edward suggests a change", "If Edward asks someone else" and "If Charlotte hasn't talked to Ruth". This is a rule for playbooks only, which Heather should see. Issue Y13 tracks it. New frames: Edward's note to Charlotte (`3107:15500`) and the sheet Who can take this? (`3107:15533`); `3105:15105` is now Charlotte's coach card for a suggested change.

## Update: approved and moved, November 19, 2026

Greg approved the drafts. All 27 frames and the two draft components, Draft · ContactRow and Draft · ChooseRow, moved from "Drafts - playbook" to the post-review page (`2853:11893`), in one row starting at y 14600 under the label "Starting point C · The weekend Charlotte is away". Frame IDs are unchanged, and five stale frame names were corrected to the Weekend playbook wording. Y1, Y7, Y9, Y10 and Y13 are fixed, and Y11 and Y12 are closed as superseded. What remains for the journey is Y5 (the library takes ContactRow, ChooseRow, the flight line, the Updated mark and the three-choice row), Y6 (wiring starting point C), Y2 and Y3 (Greg's calls) and Y4 (Heather's review). "Drafts - playbook" now holds only its page note and can be deleted.

## Update: wired, November 19, 2026

Starting point C is a flow on the post-review page, "C · The weekend Charlotte is away", opening on C-10. Reactions copied from the boards the frames were cloned from were cleared first. Every button that leads somewhere is linked, the arrow keys step through the main path (C-10 to C-15, with the alert before Edward's Sunday Today), each side board's left arrow returns to its board, and the jump screen gains C-10 to C-15. Y6 is fixed.

## Update: Greg's notes from playing it, November 19, 2026

Greg played starting point C and found four problems, which fixtures 3.40 and spec 0.39 fix and the frames now carry (issue Y14). Charlotte now chooses who has the weekend on the sheet "Who will have the weekend?" (`3113:16078`), where she adds Ruth to her circle, so the coach's question strip about who can stay with the girls is retired. Her playbook shows the coach's suggestions under a box in its tint, every part has a Change link, and the party goes to Ruth through two new sheets, "Sophie's birthday party at the Parks'" (`3113:16279`) and "Who will take Sophie's party?" (`3113:16483`), which also reach the Ruth's list path through Send Ruth a text. Ruth heads both call lists. Edward's Today card is gone: the two card frames are in "Archive - not for build", and a notification (`3113:16768`) opens the playbook in his game plan, which now opens with Charlotte's request and message and puts How the girls' days go after the weekend. The flow and the jump screen are rewired, and the row is re-laid in moment order. The three new sheets have no Close link, because the sheet copy's Close icon was not found, so the left arrow does that job.

## Update: Greg's layout for Edward's view, November 19, 2026

Greg redrew Edward's view before he answers on "Drafts - gameplan" (`3112:22131`), with a card for each day and each part's three choices stacked, because the wrapped row of three buttons looked random. He also moved the line saying why Edward is being asked above Charlotte's message, reworded it to say she needs his help, added the heading "Offsite plans for weekend" and changed "Sent" to "Received". I fixed two typos on the frame ("Let Charlotte know" and "Received"), moved it into the row in place of `3098:14423`, which is now on "Archive - not for build", and rewired it: the notification, the arrow keys, Back on Edward's note and Ask Claire lead to it, Suggest a change and Ask someone else lead to their boards, and Send your answers to Charlotte leads to his view after he answers. I'll take this is not wired, as before. Fixtures 3.41 and spec 0.40 carry the wording, with Appendix B item 137. On Charlotte's three builder frames the Change link ran over the item text in the prototype, so each row now gives the text a column of fixed width and the link its own column at the top. Edward's view after he answers (`3105:14975`) still has the older layout. The day labels on the cards are set in cerulean, which in Hearth means something she can tap, so they read as links.

## Update: backups on her playbook are a choice, November 19, 2026

Greg saw that Call Ruth and Take both girls on Charlotte's page for the Sunday pickup (`3094:12997`) read as if tapping them would call Ruth on Monday evening, while she is still planning. On her playbook the backups now ask "If the flight is late, which should Edward try first?", with Plan B and Plan C as radio rows, Plan B chosen with Ruth's number beneath it, the line "The other plan stays ready if the first one doesn't work." and the link "Change the backup plans". There is no main button, because the choice saves with the playbook. Greg first suggested a button such as "Have Edward call Ruth", and we agreed against it, because it reads as a message sent now, and the radios choose an order rather than one plan, because Plan C is the backup that needs nobody else's yes. The owner reads "Suggested for Edward" and Ask for help is gone. The radio is a new local component, `Draft · RadioRow` (`3126:15741`), beside ContactRow and ChooseRow, and it joins Y5. Fixtures 3.42 and spec 0.41 carry it, with Appendix B item 138 and issue Y15. Spec 0.41 also corrects two stale paragraphs in §20: his view no longer mentions "From Charlotte ·", "Your weekend" or the handover card, and her view no longer has the coach's question through the read-back strip. Edward's Sunday screens keep their real Call Ruth and Take both girls buttons. Tapping Plan C on the board does not switch the radio, because the prototype only needs to show the choice.

## Update: no chip on the airport pickup, November 19, 2026

Greg pointed out that "Both" on the Sunday pickup was wrong, because a group chip means the item is for the children, and taking them along to pick up their mother is like taking them to the grocery store. The chip is hidden on eleven frames: the pickup row in Charlotte's three builder frames and the four sheets drawn over them, the pickup's page (`3094:12997`), Edward's view before and after he answers, and the "Who can take this?" sheet. Fixtures 3.43 and spec 0.42 add the rule that an errand that is not for the children carries no chip even when they ride along. The older rule that a child who comes along to a sibling's activity gets the group chip, as at Studio Ten Dance, now sits awkwardly beside it, so issue G45 asks Greg to decide it. The harvest fair rows keep their chips, because the pickups and the fair are for the girls.

## Update: Greg's sheets and round 4 of the wording review, November 19, 2026

Greg rebuilt the playbook's sheets on the library's sheet component and retitled four of them. Two slips were corrected on the frames: the party sheet read "Who will take Sophie to the party?", where Sophie is the birthday girl, so it now reads "Who will take Alexis to the party?", and "how" in the Ask for backup line now reads "who". Fixtures 3.44 and spec 0.43 carry the titles, with Appendix B item 140, and issue Y16 asks whether question titles carry a question mark.

The wording review page ("MVP Wording Review", https://claude.ai/artifact/9pauQQEUSAQki37ZqywSWE) now opens on round 4, "The weekend Charlotte is away" (#weekend). It holds fourteen screens in story order, four side paths, four decisions (wd_name, wd_answers, wd_received and wd_heading) and one card of lines left from earlier work (T62 and T69). Answers save to the rounds collection as wk_* verdicts and wd_* picks. Rounds 1 to 3 moved under "Earlier rounds", with their tabs hidden and their answers kept, and the Decided tab gains d6, "Second-pass wording changes". The decision card on the heading over Charlotte's message recommends "Offsite plans for the weekend", with Greg's "Offsite plans for weekend" as the first option. The Screens tab still shows the text from before Heather's first pass, which d6 says. The board offsite (Y3) is not in the round until Greg decides it.

## Update: the plan's state, November 19, 2026

Greg renamed "Edward's weekend" to "Edward's weekend plan" and asked that the plan show whether it is proposed or accepted, including when Edward can't take something. Both views now carry a pill beside that heading, from a new local component, `Draft · PlanStatus` (`3134:15701`), with four states: Not sent yet, Proposed, Accepted and Change suggested. Change suggested is the "can't" case, because a playbook has no No, I can't. Greg's "Rides needed for the kids" became "Your airport rides", because the two rides under it are Charlotte's own. The banner Greg gave the request on Edward's view keeps its place and size, but its text is now ink, because amber belongs to the coach. Fixtures 3.45 and spec 0.44 carry it, with Appendix B item 141. The Change link still overlapped in the prototype after the earlier fix, because the prototype drew the library row's stored text width, so the 18 rows beside Change are now detached copies of LaterTodayRow with a fixed text width. Round 4 of the wording review shows the new headings.
