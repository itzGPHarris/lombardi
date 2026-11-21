# Correction pass: calendar dates and Charlotte's first board

*MVP (Lombardi) · October 14, 2026 · Story fixtures 3.10 to 3.11 · Spec 0.11 to 0.12*

## Summary

This pass makes two changes. The first reverses the rule that the prototype shows no calendar dates: Today's dateline now shows the day and the date, such as "Monday, Oct. 12", and the demo runs on a fixed calendar in October 2026. The second rebuilds Charlotte's first board on Today (0i) so that it pays off the onboarding she has just finished. The board now shows both girls, has something real for her to do tonight, fills in when she answers the coach's question, and then shows her the rest of the week.

The date change moves C-00 from two weeks before the demo week to one week before, because the fixtures say one Westview rotation sheet covers both C-00 and the demo week, and a September C-00 would have broken that. The demo week runs from Monday, Oct. 12 to Sunday, Oct. 18, 2026, and C-00 is Monday, Oct. 5, 2026. Moving C-00 has knock-on effects on the rotation letters in her first week, the Westview event dates and the first-week teaching lines, and each is written out below.

Every replacement passage is written to paste. Section 9 lists the issue rows, and section 10 lists what this pass deliberately leaves alone.

## The decisions and why

**The dateline shows the date.** Greg's call. Real parents read dates, the Ready for dev frames already draw "Monday, Oct. 12", and a date makes the board read as a real week to investors. The rule that the real product shows full dates now applies to the prototype as well, so the spec no longer needs two separate rules.

**The cost, and how the seed limits it.** Issue C7 removed dates in the first place because a fixed demo week goes stale: an investor who sees "Monday, Oct. 12" in December knows the demo is canned. The seed therefore keeps its demo times as a week offset, a weekday and a time, and gains a single anchor, `meta.demoWeekStart`, set to `2026-10-12`. Every on-screen date is worked out from that anchor. Moving the whole demo to a later week means changing that one value, plus the month in the rotation photo and in one coach line if the month changes. This is recorded as issue C26 so the trade-off stays visible.

**Only two places show a date.** Today's dateline shows the day and the date, and the draft on 0c shows the dates it covers, which Greg's Ready for dev frame already draws. Everything else, including the game plan, coach card labels, request items and the coach's own lines, keeps naming the day of the week, because a day name is what a parent uses inside a week and adding dates to every row would crowd the quiet layout. A month may now appear where a real document would carry one, such as the header of the rotation calendar.

**The device clock is still ignored.** The prototype always runs on the demo calendar, whatever day it is presented, so it behaves the same way in every rehearsal and every pitch.

**C-00 moves to Monday, Oct. 5.** Greg chose this from three options. It keeps Oct. 12 as the demo week's Monday, which the Figma frames already show, and keeps one October rotation sheet for both C-00 and the demo week. The cost is that her first week now runs straight into the demo week.

**Her first board shows the household, not one child (recommendation 2).** The board previously showed Mallory and a question. It now shows a "Ready tonight" item and both girls under "Tomorrow starts", with "Start time needed" where MVP does not yet know a time. Moving C-00 a week earlier also turns tomorrow into a D day, which is a motor skills day, so the rotation she just photographed already puts sneakers on tonight's list. That is the first thing on the board she can act on.

**Answering the question completes the board (recommendation 3).** The coach card still asks for Mallory's start time. When she answers 8:30 am, Mallory's row fills in with a leaving time of 8:15 am in the same moment, and the card turns into the plan for the rest of the week. Previously she answered on the Tuesday of her first week, off screen, and nothing on the board changed.

**Her zip code is enough for leaving times.** Greg's call. The welcome screen already says the zip code helps the coach work out travel times, so MVP estimates each drive from her zip code and adds five minutes, which makes any error land early rather than late. A zip code covers a few miles, so the estimate can be off by a few minutes either way, and the five minutes absorb most of that. A home address would add precision without changing what the parent does, and it is a bigger thing to ask for. Directions opens her maps app, which routes from where she actually is, so the address never matters for the drive itself. With Westview ten minutes from her zip code, 8:30 am becomes a leaving time of 8:15 am, which is the same time the fixtures already give for Mallory's routine run to Westview.

**The rest of the week arrives through the coach card (recommendation 4).** Today shows today only, and the coach card is the one thing allowed to concern another day. After she answers, the card shows how the week stands now, with a button that opens the game plan, which follows the existing rule for a card after a move: it says how the plan stands and stays until she leaves Today. No new exception to the Today rules is needed.

**No article on her first board.** The earlier wireframe carried the conference article, but on Oct. 5 MVP has not yet seen the Cedar Grove newsletter that announces the conferences, so the article would have no reason it could truthfully give.

## 1. Story fixtures, version 3.11

Replace the version line at the top with:

> *MVP (Lombardi) · Version 3.11 · October 14, 2026 · Charlotte and Edward only*

### Section 2, "Today shows today", paragraph headed "The title names the phase of the day"

Replace the second sentence and the one after it, which currently read "The top of Today reads … so the demo works in any week.", with:

> The top of Today reads "This morning", "This afternoon" or "Tonight", each with an icon, and the day and date sit above it as a dateline, such as "Monday, Oct. 12". Tonight shows the day it is, not tomorrow.

### Section 2, "Today shows today", paragraph headed "In the evening the title changes to Tonight"

Add at the end of the paragraph:

> On her first night, Today also shows a child whose times MVP does not know yet, with "Start time needed" in place of the time, so the whole household is on the board from the start.

### Section 2, "Onboarding", paragraph headed "Her first board is never empty"

Replace the paragraph with:

> **Her first board is never empty.** If she captured something, Today shows tonight's preparation from it and every child under "Tomorrow starts", with "Start time needed" where a time is not known yet, and the coach card asks for the one time that matters most tomorrow. When she answers, the board fills in at once and the card turns to the rest of the week. If she skipped the capture, the coach card asks for one thing to start with.

### Section 2, "Dates, times and places"

Replace the first two paragraphs with:

> The demo runs on a fixed calendar. The demo week is Monday, Oct. 12 to Sunday, Oct. 18, 2026, and Charlotte's first night, C-00, is Monday, Oct. 5, 2026, the week before. Today's dateline shows the day and the date, such as "Monday, Oct. 12", and the draft on 0c shows the dates it covers. Everything else on screen names the day of the week, such as "Thursday", and anything further away can be described either way, such as "Friday, Oct. 23" or "the Friday after this week". Months are abbreviated as in the Ready for dev frames: Jan., Feb., Aug., Sept., Oct., Nov. and Dec., with March, April, May, June and July written in full.
>
> The seed files keep every time as a demo time, which is a number of weeks before or after the demo week, a day of the week and a time, and the seed holds one anchor date for the demo week's Monday. Every date on screen is worked out from that anchor, so the whole demo can move to another week by changing one value. The prototype never reads the device clock and always runs on the demo calendar.
>
> The same calendar applies to documents in the story. The Westview rotation calendar is the October sheet, headed "Westview Kindergarten" with "October 2026" beneath it, and it starts with an A day on Thursday, Oct. 1.

### Section 3, "Where Charlotte starts"

Replace the first sentence with:

> Charlotte started using MVP the week before the demo week, on Monday, Oct. 5, and C-00 shows how.

Replace the sentence beginning "She also photographed Westview's family contact list" with:

> She also photographed Westview's family contact list, which now sits on the Westview school card, and on the Wednesday of that week she forwarded the Cedar Grove newsletter that had come the Sunday before she started, which led her to set her email to forward the newsletter to MVP automatically.

### Section 3, "What the schools send", Westview rotation calendar

Replace the first sentence with:

> **Westview rotation calendar.** A one-page calendar for October, headed "Westview Kindergarten" with "October 2026" beneath it, with each school day marked by a letter from A to F, starting with A on Thursday, Oct. 1.

Add this table after the existing demo-week table:

| Day of C-00's week | Westview letter | What it means for Mallory |
| ----- | ----- | ----- |
| Monday, Oct. 5 | C | Science |
| Tuesday, Oct. 6 | D | Motor skills, so sneakers |
| Wednesday, Oct. 7 | E | Art and music |
| Thursday, Oct. 8 | F | Science and motor skills, so sneakers |
| Friday, Oct. 9 | A | Library, so the library book goes back |

### Section 3, "The Kids tab", the Westview card

Replace the Calendar row with:

> | Calendar | Picture day, Friday · Harvest fair, Friday, Oct. 23, 3:00 pm · Fir Hollow Farm field trip, Thursday, Oct. 29 |

Replace the Documents row with:

> | Documents | Rotation calendar, photo, last week · Family contact list, photo, last week |

### Section 3, "Messages that arrive this week", first row

Leave the row as it is. The demo-week newsletter still arrives by automatic forwarding, which she set up in her first week.

### Section 3, "The moments" table, C-00 row

Replace "Two weeks earlier, Monday, 8:30 to 8:40 pm" with "Monday, Oct. 5, the week before, 8:30 to 8:42 pm", and add "answers the coach's question on her first board" before "and meets the coach" so the row reads in order: "…finishes setup, meets the coach and answers the coach's question on her first board."

### C-00 heading and introduction

Replace the heading with:

> ## C-00 · Monday, Oct. 5, 8:30 pm · Charlotte's first night

In the italic introduction, replace the last sentence with:

> *She then creates the account and connects her Google Calendar, the coach brings in what is already there, and she answers its first question on Today. The times below follow the screens in order and add up to about twelve minutes.*

### C-00, "show me one thing", the italic note

Replace with:

> *She taps Take a photo and photographs the calendar, which is headed "Westview Kindergarten" with "October 2026" beneath it.*

### C-00, the read-back

Replace the first sentence of the read-back with:

> This is Westview Kindergarten's calendar for October, with a six-day letter rotation.

### C-00, the draft week

Replace the coach's line with:

> Mallory's plan for this week
>
> Oct. 6 to 9
>
> Here is the rest of this week for Mallory. Sneakers go with Mallory on Tuesday and Thursday, and the library book goes back on Friday. Back-to-school night is on Thursday evening as a suggestion. None of it is saved yet.

Replace the table of example rows with:

| Shows | Example rows |
| ----- | ----- |
| Each remaining school day with its letter and what it means | Wednesday · E · Art and music |
| Sneaker days, with "Sneakers" on that morning's checklist | Tuesday · D · Motor skills · Sneakers |
| The week's school event, marked Suggested | Thursday · Back-to-school night · Suggested |
| Sneaker days, continued | Thursday · F · Science and motor skills · Sneakers |
| Library days, with "Library book" on that morning's checklist | Friday · A · Library · Library book |

### C-00, nice to meet you

Leave the coach's recap as it is. It still matches the board that follows.

### C-00, her first board, replacing everything from "Today, as shown: her first board · 8:40 pm" to the skipped-capture card

> **Today, as shown: her first board · 8:40 pm**
>
> > Monday, Oct. 5
> >
> > [moon icon] Tonight
>
> **Today, as shown: ready tonight**
>
> | Chips | Ready tonight |
> | ----- | ----- |
> | Mallory | Sneakers by the door |
>
> **Today, as shown: tomorrow starts**
>
> | Time | Chips | Item |
> | ----- | ----- | ----- |
> | Start time needed | Mallory | Westview · D day |
> | Start time needed | Alexis | Cedar Grove |
>
> **Today, as shown: the coach card**
>
> > Your coach · for Tuesday
> >
> > Tomorrow is a D day at Westview. What time does Mallory need to be at school in the morning?
> >
> > [Answer]
>
> *The board is short on purpose, and nothing on it is invented. The sneakers come from the rotation she photographed, both girls come from the children screen, and the two gaps are the next things the coach needs. There is no MVP Recommends card, because MVP has seen nothing yet that would give an article a reason.*
>
> *She taps Answer, and a sheet opens over Today.*
>
> **Today, as shown: the answer sheet · 8:41 pm**
>
> > Mallory's start time at Westview
> >
> > [time picker, set to 8:30 am]
> >
> > [Save]
>
> *She sets 8:30 am and taps Save. The sheet closes, and the board changes in one step: Mallory's row fills in, and the coach card turns to the rest of the week. Her answer goes onto the Westview card with the source "From you".*
>
> **Today, as shown: her first board after she answers · 8:41 pm**
>
> | Time | Chips | Item |
> | ----- | ----- | ----- |
> | 8:15 am | Mallory | To Westview · D day |
> | Start time needed | Alexis | Cedar Grove |
>
> > Your coach
> >
> > The rest of this week is in your game plan. Sneakers go with Mallory on Tuesday and Thursday, and the library book goes back on Friday. Back-to-school night at Westview is on Thursday evening as a suggestion. From your Google Calendar, Alexis has dance at Studio Ten on Wednesday at 3:45, and Mallory has ballet there on Thursday at 4:15.
> >
> > [Open the game plan]
> >
> > Change the start time
> >
> > Westview card updated
>
> *The time is when to leave, worked out from her zip code: ten minutes to Westview plus five, before 8:30 am. The row names no driver, because nobody has said who takes Mallory yet. The card stays until she leaves Today, by the same rule as a card after a move. "Change the start time" reopens the sheet. Alexis's start time is the coach's next question, and it is asked on Tuesday, outside the demo.*
>
> *If she skipped the capture, her first board has no departures, and the coach card asks for one thing to start with.*
>
> > Your coach
> >
> > Today is empty so far. Send me a school email, a handout or a few words about your week, and I'll start the plan.
> >
> > [Send to coach]

### "Taught when useful"

Replace the italic line before the newsletter offer with:

> *On Wednesday of her first week, at 4:20 pm, she forwards the Cedar Grove newsletter from the Sunday before she started to her MVP address. After the read-back, the coach offers automatic forwarding, and she sets it up, so the demo-week newsletter arrives by itself.*

### Every Today header in the moments

Replace the day-only datelines as follows, and change nothing else in those headers.

| Moment | Dateline |
| ----- | ----- |
| C-00, her first board | Monday, Oct. 5 |
| C-02, Edward's screen | Monday, Oct. 12 |
| C-03 | Monday, Oct. 12 |
| Monday afternoon, for the wireframes only | Monday, Oct. 12 |
| C-05, if drawn | Tuesday, Oct. 13 |
| C-06 | Wednesday, Oct. 14 |
| C-06b | Wednesday, Oct. 14 |
| C-07 | Wednesday, Oct. 14 |

### Section 4, Today

Replace the Dateline row with:

> | Dateline | Above the title: the day of the week and the date, such as "Monday, Oct. 12", with the month abbreviated as in "Dates, times and places". Tonight shows the day it is. |

Add these rows after "Coach card with nothing captured yet":

> | Time not known yet, in Tomorrow starts | Start time needed, in the time column, in Meta |
> | Answer sheet for a start time | Heading: the child's name, "start time at" and the school, such as "Mallory's start time at Westview" · A time picker · Button: Save |
> | Coach card after she answers a question | The coach's line saying how the plan stands now · A button for what comes next, such as "Open the game plan" · A link to change the answer, such as "Change the start time" · Meta line: what was updated, such as "Westview card updated" |

### Section 4, Onboarding

Replace the "Heading of the draft" row with:

> | Heading of the draft | The child's name, "plan" and what the draft covers, such as "Mallory's plan for this week", with the dates beneath it in Meta, such as "Oct. 6 to 9" |

### Appendix A, rows to replace

| Gap | What we decided | Why |
| ----- | ----- | ----- |
| The demo calendar | The demo week is Monday, Oct. 12 to Sunday, Oct. 18, 2026. C-00 is Monday, Oct. 5, 2026. The seed anchors the demo week at `2026-10-12`. | Matches the date the Ready for dev frames already show, and keeps C-00 and the demo week on one October rotation sheet. |
| The calendar header | The rotation calendar is headed "Westview Kindergarten" with "October 2026" beneath it. | Gives the coach a grade to match, so it can preselect Mallory, and a month a real school sheet would carry. |
| The rotation calendar's month | The October sheet starts with A on Thursday, Oct. 1, so C-00's week runs C, D, E, F, A and the demo week runs B to F. | Lets one photo serve both C-00 and the demo week, and puts a sneaker day on the morning after C-00. |
| Westview events | Back-to-school night on Thursday, Oct. 8. The harvest fair at 3:00 pm on Friday, Oct. 23. The Fir Hollow Farm field trip on Thursday, Oct. 29. | Puts back-to-school night in C-00's own week, so the first draft adds one event, and puts the other two in later weeks, so the hand-off can say the coach is keeping them on the Westview card. The field trip moves from the week before the demo week, which is now C-00's week. |
| Westview hours | Charlotte gives the start time on her first board at 8:41 pm on Monday, Oct. 5, answering the coach card, and the end time later that week. The card shows both as "From you". | Makes the answer the moment the first board completes, and gives the hours a source. |
| The onboarding times | As before up to the introduction at 8:39 pm, then Today at 8:40 pm and her answer at 8:41 pm | Adds the answer to the sequence. |
| Her first board | She lands on Today at 8:40 pm with sneakers on tonight's list and both girls under "Tomorrow starts". The coach card asks for Mallory's start time, and when she answers, the board fills in and the card turns to the rest of the week. | Shows the household she just set up, gives her one thing to do tonight, and makes her first answer change the board in front of her. |
| First capture | On Monday, Oct. 5, the week before the demo week, at 8:30 pm, Charlotte photographs Westview's rotation calendar before creating an account. | Shows value before the account, and explains how MVP knows Mallory's sneaker days in C-03. |
| Westview rotation | A six-day letter rotation, A to F. The demo week runs B to F from Monday to Friday, which puts the Tuesday after C-00 on a D day. | B, D and F are motor skills days, which is where Mallory's sneakers come from. |
| How Charlotte shares | She forwarded her first Cedar Grove newsletter on the Wednesday of her first week and set up automatic forwarding from the coach's offer. She shares WhatsApp messages through the share menu, which she learned on the Tuesday of that week. | Her first week now has only one Sunday, which is the demo-week newsletter, so the first forward is an older newsletter. |

### Appendix B

Replace item 9 with:

> 9. **The prototype runs on a fixed calendar.** The demo week is Oct. 12 to 18, 2026, and the dateline shows the date. The device clock is still never read. A demo presented weeks later will show dates in the past, and the single anchor in the seed is how it moves (issue C26).

Replace item 26 with:

> 26. **The real product and the prototype now follow one rule on dates.** Both show the day and the date on Today's dateline. Whether the game plan's day headings should also show dates is open, and the prototype leaves them as day names.

Add:

> 42. **Travel times come from her zip code, not a home address.** MVP estimates each drive from her zip code and adds five minutes, so an estimate errs early. Directions routes from wherever she is, through her maps app. The fixtures' travel table, written from Linden Avenue, stands as the estimate from zip code 00123. Whether the real product ever asks for an address, for example to tell two homes apart in a two-home household, is open (issue O15).
>
> 43. **Alexis's start time at Cedar Grove is the coach's next question after her first board.** The line is not written, because it falls on Tuesday, Oct. 6, outside the demo.

### Appendix C, a new entry at the top

> ## Version 3.11, October 14, 2026
>
> Puts dates back on Today and rebuilds Charlotte's first board, at Greg's direction.
>
> | # | Change |
> | ----- | ----- |
> | 1 | The demo runs on a fixed calendar, with the demo week from Monday, Oct. 12 to Sunday, Oct. 18, 2026. Today's dateline shows the day and the date, such as "Monday, Oct. 12", and the draft on 0c shows the dates it covers. Everything else keeps naming the day of the week. The seed keeps demo times and gains one anchor date. This reverses version 3.6. |
> | 2 | C-00 moves to Monday, Oct. 5, the week before the demo week, so one October rotation sheet covers both. Her first week's letters become C, D, E, F and A, the draft's rows and line change to match, the field trip moves to Thursday, Oct. 29, the harvest fair is Friday, Oct. 23, and her first newsletter forward moves to the Wednesday of her first week. |
> | 3 | The rotation calendar is headed "Westview Kindergarten" with "October 2026", and the read-back calls it "calendar for October". |
> | 4 | Her first board shows "Ready tonight" with Mallory's sneakers, both girls under "Tomorrow starts" with "Start time needed", and the coach card asking for Mallory's start time. Answering opens a sheet, fills in Mallory's row with a leaving time of 8:15 am, worked out from her zip code, and turns the card to the rest of the week with "Open the game plan". The board has no article. |
> | 5 | Section 4 gains the answer sheet, "Start time needed", the coach card after an answer, and the draft's date line. Appendix A gains the demo calendar, and Appendix B gains items 42 and 43. |

## 2. Spec, version 0.12

Replace the version line with:

> *Investor prototype · Version 0.12 · October 14, 2026*

Add at the start of "Summary of this version":

> Version 0.12 puts the date back on Today's dateline, following story fixtures version 3.11. The prototype runs on a fixed demo calendar, with the demo week from Monday, Oct. 12, 2026, and C-00 on Monday, Oct. 5. The seed keeps its demo times and gains one anchor date, and the device clock is still never read. Charlotte's first board after onboarding shows the whole household and fills in when she answers the coach's first question.

### §1, standing decision 2

Replace with:

> 2. **The prototype runs on a fixed calendar.** The demo week is Monday, Oct. 12 to Sunday, Oct. 18, 2026, and C-00 is Monday, Oct. 5. Today's dateline shows the day and the date, and the draft on 0c shows the dates it covers. Everything else names the day of the week. The prototype never reads the device clock, so it behaves the same way whenever it is presented. The real product follows the same rule on the dateline.

### §3, first paragraph

Replace "as moment C-00, two weeks before the demo week" with "as moment C-00, on Monday, Oct. 5, the week before the demo week".

### §3, behavior note "Her first board is never empty"

Replace with:

> * **Her first board is never empty.** If she captured something, Today shows tonight's preparation from it, every child under "Tomorrow starts" with "Start time needed" where a time is not known, and a coach card asking for the time that matters most tomorrow. Answering opens a sheet, fills in that child's row at once, and turns the card to the rest of the week, with a button that opens the game plan. If she skipped the capture, the coach card asks for one thing to start with, with Send to coach.

### §5, behavior note "Her first board"

Replace with:

> * **Her first board** after onboarding is Tonight. It shows "Ready tonight" with Mallory's sneakers, both girls under "Tomorrow starts", and a coach card asking for Mallory's start time. Her answer goes onto the Westview card with the source "From you", and the card then shows how the rest of the week stands until she leaves Today, by the same rule as a card after a move. Her answer becomes a leaving time worked out from her zip code (open condition 3).

### §5, standing decision 4

Replace with:

> 4. **The dateline shows the day and the date,** such as "Monday, Oct. 12", above the title, as in the Ready for dev frames. The date comes from the demo calendar, never the device clock.

### §5, open conditions

Add:

> 3. **Travel times come from her zip code.** The real product estimates each drive from the zip code she gives on 0w and adds five minutes, so an estimate errs early. The prototype uses the fixed travel times in the seed. Whether a two-home household needs an address for each home is open (issue O15).

### §14, standing decision 2

Replace with:

> 2. **`voicecheck` also checks dates.** It fails on any calendar date or four-digit year written into a coach line or an interface string, because on-screen dates are worked out from the demo calendar and never typed in. Month names are allowed only in the prepared documents, such as the rotation calendar.

### §15, Charlotte's moments, C-00 row

Replace the demo time with "Monday, Oct. 5, 8:30 pm, the week before" and "What happens" with "Onboarding, from the splash to her first board and her first answer".

### §15, behavior notes

Replace the first note with:

> * **The demo calendar drives everything time-based,** including the dateline, the phase of the day, countdowns and what has passed. The device clock is never read.

### §16, Demo time

Replace the sentence "The seed holds no calendar dates. Every time is a demo time:" with:

> Every time in the seed is a demo time, and the seed holds one calendar date, the demo week's Monday, in `meta.demoWeekStart`. On-screen dates are worked out from it.

In the table, replace the description of `week` with:

> Weeks relative to the demo week. 0 is the demo week, -1 is the week before, which holds C-00, and 1 is the week after.

Add to the Meta table:

> | demoWeekStart | ISO date | The demo week's Monday, `2026-10-12`. The only calendar date in the seed. Changing it moves the whole demo to another week. |

### §16, standing decision 1

Replace with:

> 1. **One calendar date in the seed.** Every time is a demo time, and `meta.demoWeekStart` is the only calendar date. Nothing else in the seed, the articles or the copy holds a date.

### §17, component inventory

Add `AnswerSheet` to `components/Today/`.

### §18, out of scope

Remove "Calendar dates on screen or in the seed files". Keep "Reading the device clock".

### Appendix A, a new entry at the top

> ## **v0.12, October 14, 2026**
>
> Follows story fixtures version 3.11.
>
> | # | Where | Change |
> | ----- | ----- | ----- |
> | 1 | §1, §5, §14, §15, §16, §18 | The prototype runs on a fixed demo calendar from Monday, Oct. 12, 2026. The dateline shows the day and the date. The seed keeps demo times and gains `meta.demoWeekStart`. `voicecheck` fails on typed dates rather than on every date. This reverses v0.7 row 2. |
> | 2 | §3, §15 | C-00 moves to Monday, Oct. 5, the week before the demo week. |
> | 3 | §3, §5, §17 | Her first board shows the whole household, fills in when she answers the coach's question, and turns the coach card to the rest of the week. `AnswerSheet` is added. |

## 3. AGENTS.md

Replace the versions line with:

> *Current versions: story fixtures 3.11, spec 0.12. Last updated October 14, 2026.*

In "Commands", replace the description of `npm run voicecheck` with:

> Checks every coach string for banned words and punctuation, checks articles for em-dashes, and fails on any calendar date or year typed into a seed, article or copy file outside `meta.demoWeekStart`. Must pass before any commit that touches `src/data/` or `src/copy/`.

In "The product in brief", Today paragraph, replace "with the day of the week above it as a dateline and never a date" with:

> with the day and the date above it as a dateline, such as "Monday, Oct. 12", worked out from the demo calendar

Replace rule 2 in "Rules that must never be broken" with:

> 2. **One calendar, never the clock.** The prototype runs on the demo calendar, with the demo week starting on the date in `meta.demoWeekStart`. Every time in the seed is a demo time, a week relative to the demo week, a weekday and a time, and every date on screen is worked out from the anchor, never typed into copy. Never read the device clock. The demo calendar drives the dateline, the phase of the day, countdowns and what has passed.

## 4. README

Replace the paragraph beginning "The demo shows days of the week only" with:

> The demo runs on a fixed calendar, with the demo week starting on Monday, Oct. 12, 2026, and Today's dateline shows the date. The prototype never reads the device clock, so it behaves the same way whenever it is presented. The demo week's Monday is held in one place, `meta.demoWeekStart` in each seed file, and changing it moves the whole demo to another week.

Replace "Charlotte and Edward's household is built from fixtures version 3.6." with "Charlotte and Edward's household is built from fixtures version 3.11."

Replace the second sentence of the paragraph under "Running it" with:

> The voice check reads every coach line in the seed files for the house voice rules, and fails on any calendar date typed into the seed, the articles or the interface copy, because dates on screen are worked out from the demo calendar.

## 5. Creative brief

In section 5, replace "Two weeks before the demo week, she photographs the rotation calendar on her fridge" with:

> On the Monday before the demo week, she photographs the rotation calendar on her fridge

and add after "sees her younger daughter's week come back.":

> Her first board on Today already shows both girls and what Mallory needs tomorrow, and when she tells the coach Mallory's start time, the board fills in and the rest of the week is waiting in the game plan.

## 6. Screen map

Replace the version line with:

> *Last updated October 14, 2026 · Fixtures 3.11 · Spec 0.12 · Figma file `mvp-lombardi` (`RK2JTfwao4mV4JgUA193M1`)*

Onboarding, step 9, replace the note with:

> The frame shows "Oct. 5 - 9" and "Mallory's week". Keep a date line, and use the fixtures' heading "Mallory's plan for this week" with "Oct. 6 to 9" beneath it, and the fixtures' rows. "Create acount" is a typo for "Create account".

Onboarding, step 17, replace the note with:

> No Ready for dev frame exists. Build it from the Today frames below and the Claude Design wireframes for 0i, in three states: the board on arrival, the answer sheet, and the board after she answers. The dateline reads "Monday, Oct. 5".

In "Two parts of the Today frames need these readings", replace the first bullet with:

> - **The dateline shows the day and the date,** such as "Monday, Oct. 12", as drawn. The date comes from the demo calendar, so it changes with each moment's day.

## 7. Project instructions

In "How the build works", replace the paragraph beginning "The prototype has no calendar dates." with:

> The prototype runs on a fixed calendar. The demo week is Monday, Oct. 12 to Sunday, Oct. 18, 2026, Charlotte's first night is Monday, Oct. 5, and Today's dateline shows the day and the date, such as "Monday, Oct. 12". Everything else names the day of the week. The seed files keep times relative to the demo week and hold one anchor date for its Monday, so the whole demo moves to another week by changing one value. The prototype ignores the device clock.

In "Navigation", replace "and the day of the week sits on the same row" with:

> and the day and date sit above it as a dateline

I can't edit the project settings myself, so this text needs pasting into them.

## 8. Memory

The project memory line saying the demo must not rely on a fixed date is updated to the new rule in this pass.

## 9. Issue rows for docs/issues.csv

```csv
C7,Cleanup,must,REOPENED,Greg,"spec §1, §5, §14, §16, docs/story-fixtures.md","Fixtures 3.6 removed every calendar date so the demo could run in any week. Greg wants the date on Today's dateline.","The dateline shows the day and the date, and the demo stays easy to move to another week.","Superseded 14 October 2026 by fixtures 3.11 and spec 0.12. Tracked as C26."
C26,Cleanup,must,OPEN,Greg,"docs/story-fixtures.md ""Dates, times and places"", spec §16","The demo now runs on a fixed calendar from Monday, Oct. 12, 2026. A demo presented weeks later will show dates in the past, which is the problem C7 solved.","The demo week moves to the presentation week before each pitch, with one change.","Fixed in fixtures 3.11 and spec 0.12 by keeping demo times in the seed and adding one anchor, meta.demoWeekStart. Close when the presenter checklist includes setting it before each pitch."
O9,Onboarding,must,OPEN,Greg,"Prepared calendar photo","The photo shows ""SEPTEMBER 2026"", and the no-dates rule asked for no month at all.","A prepared photo headed ""Westview Kindergarten"" with ""October 2026"" beneath it, starting with A on Thursday, Oct. 1.","Fixtures 3.11 ""What the schools send"". Replace the photo before the build."
T6,Today,must,FIXED,Greg,Ready for dev frames 2355:3630 and 2355:3744,"The frames show ""Monday, Oct. 12"", and spec 0.11 removed the date.","The dateline as drawn, with the date.","Fixed 14 October 2026. The date is back, worked out from the demo calendar. Spec 0.12 §5 standing decision 4."
T8,Today,must,OPEN,Greg,"Onboarding 0i, wireframe and fixtures C-00","Her first board showed one child, one school and a question, and answering changed nothing on screen. The conference article had no reason it could give on Oct. 5.","A board that shows the household, gives her one thing to do tonight, fills in when she answers, and then shows the rest of the week.","Fixtures 3.11 C-00 and spec 0.12 §3 and §5. Wireframes 0i-a, 0i-b and 0i-c in Claude Design. Needs a Ready for dev frame (T5)."
O15,Onboarding,could,OPEN,Greg,"Fixtures Appendix B 42, spec §5 open condition 3","Travel times come from her zip code, with five minutes added so estimates err early. A two-home household has two starting points and one zip code field.","A decision on whether a two-home household gives a zip code for each home.","Decided 14 October 2026 that a zip code is enough and no home address is asked for. Not needed for Charlotte, who has one home."
O4,Onboarding,should,OPEN,Greg,"Figma welcome frame 2355:3955","The zip code's purpose is settled as travel times and the local school calendar, but the frame's helper still says ""Helps the coach find activities near you"" and shows 95403.","The helper from fixtures section 4, ""Helps the coach work out travel times and your local school calendar."", and zip code 00123.","Greg corrects the frame. MVP is not a directory of activities, so the frame's line promises something the product does not do."
```

## 10. What this pass leaves alone

- **Game plan day headings stay as day names.** Adding a date to each day would be consistent, but nobody has asked for it, and it is recorded as Appendix B item 26.
- **The coach's lines keep naming days,** such as "for Tuesday" and "on Thursday", except where a real document has a month, as in the read-back.
- **Coach card labels, request items and notifications keep day names.**
- **The 0j recap is unchanged.** It still matches the board that follows.
- **Recommendations 1 and 5 from the review are not in this pass.** Staging her first night before her fullest day is partly achieved anyway, because moving C-00 makes tomorrow a sneaker day. The shorter read-back on 0j is parked.
- **The other three households** still have no dates, because their sections are not yet rewritten.
