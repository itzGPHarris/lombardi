# Prompt: wireframe pass 10, dates on Today and Charlotte's first board

*Paste everything below the line into Claude Design, with the current wireframe set, story fixtures v3.10 and dates-and-first-board-pass.md attached. Where the two documents disagree, the pass wins, because it is the correction to v3.10. This pass changes dates and rebuilds one screen, and it adds no new feature.*

---

## What this pass is

This is a correction pass on the grayscale wireframes for Most Valuable Parent (MVP). It makes two changes, both set out in dates-and-first-board-pass.md, which describes the move to story fixtures version 3.11.

The first change puts calendar dates back on Today. The demo now runs on a fixed calendar. The demo week is Monday, Oct. 12 to Sunday, Oct. 18, 2026, and Charlotte's first night (C-00) moves to Monday, Oct. 5, the week before. Today's dateline shows the day and the date. The onboarding draft shows the dates it covers. Every other screen keeps naming the day of the week.

The second change rebuilds Charlotte's first board (0i) as three states: the board on arrival, the answer sheet, and the board after she answers.

Keep everything not listed below exactly as it is. Every word on screen comes from the pass or from fixtures v3.10, and you should copy it exactly. If a screen needs words that neither document has, use a short bracketed placeholder and list it in NOTES.md under "Copy needed".

## Datelines on every Today screen

Each Today screen gets the dateline below in place of the day name alone. The dateline sits above the phase title, in the same style and position as now. Change nothing else in these headers. Months are abbreviated as in the Ready for dev frames, so October is written "Oct.".

| Screen | Moment | Dateline |
| ----- | ----- | ----- |
| 0i, all three states | C-00, her first board | Monday, Oct. 5 |
| 01 | C-03 | Monday, Oct. 12 |
| 01b | Monday afternoon | Monday, Oct. 12 |
| 05, 5b, Edward's own Today | C-02 | Monday, Oct. 12 |
| Any Tuesday Today panel | C-05 | Tuesday, Oct. 13 |
| 02 | C-06 | Wednesday, Oct. 14 |
| 02b | C-06b | Wednesday, Oct. 14 |
| 03 | C-07 | Wednesday, Oct. 14 |

At tablet and desktop widths the dateline may use the same text. Do not shorten it to "Mon".

Coach card labels, game plan day headings, request items and notifications keep their day names, such as "Your coach · for Thursday". Do not add dates to them.

## Onboarding changes from moving C-00 to Monday, Oct. 5

- **Every C-00 time label and screen title.** Wherever a screen or the flow map says "Two weeks earlier", it now reads "Monday, Oct. 5". Add 8:41 pm for the answer sheet and the board after she answers.
- **0a and 0v, the calendar photo.** The prepared photo is headed "Westview Kindergarten" with "October 2026" beneath it. The month grid starts with an A day on Thursday, Oct. 1, and runs through C on Monday, Oct. 5, D on Tuesday, Oct. 6, E on Wednesday, F on Thursday and A on Friday, Oct. 9. If the wireframe shows the photo as a placeholder box, add the header and month to its label.
- **0b, the read-back.** The first sentence now reads: "This is Westview Kindergarten's calendar for October, with a six-day letter rotation." The rest of the read-back, the child confirmation, the highlights question, Charlotte's answer and the hand-off stay as they are.
- **0c, the draft.** Put "Oct. 6 to 9" beneath the heading "Mallory's plan for this week", in the Meta style. Replace the coach's line with: "Here is the rest of this week for Mallory. Sneakers go with Mallory on Tuesday and Thursday, and the library book goes back on Friday. Back-to-school night is on Thursday evening as a suggestion. None of it is saved yet." Replace the rows, in this order:
  - Tuesday · D · Motor skills · Sneakers
  - Wednesday · E · Art and music
  - Thursday · F · Science and motor skills · Sneakers
  - Thursday · Back-to-school night · Suggested
  - Friday · A · Library · Library book
- **0j, the coach's introduction.** No change.
- **onboarding-16, taught when useful.** The newsletter exchange moves to Wednesday of her first week, at 4:20 pm. She forwards the Cedar Grove newsletter from the Sunday before she started, and the coach's offer of automatic forwarding follows its read-back. Set the status bar to 4:20 and keep the coach's line as written.

## 0i, her first board, in three states

Rebuild 0i as three panels side by side at phone width. Use the Tonight layout from screen 03 for the header and sections, and draw it at the same quiet weight as the other Today screens. The board has no MVP Recommends card, because on Oct. 5 MVP has seen nothing that would give an article a reason.

**0i-a, on arrival, 8:40 pm**

- Header: "Monday, Oct. 5", then the moon icon and "Tonight", with the monogram C at the top right.
- "Ready tonight", with one row: a checkbox, the Mallory chip and "Sneakers by the door".
- "Tomorrow starts", with two rows. Each row has "Start time needed" in the time column, drawn in Meta inside a dashed outline so it reads as a gap rather than a value. The first row has the Mallory chip and "Westview · D day". The second row has the Alexis chip and "Cedar Grove".
- The coach card, labeled "Your coach · for Tuesday" beside the coach's dot. It reads: "Tomorrow is a D day at Westview. What time does Mallory need to be at school in the morning?" Under the text sits one button, "Answer".
- "Send to coach" above the tab bar, and the tab bar with Today selected.

**0i-b, the answer sheet, 8:41 pm**

- The board from 0i-a, dimmed behind a scrim.
- A sheet from the bottom with a drag handle and the heading "Mallory's start time at Westview". Below the heading is a time picker set to 8:30 am, with hour, minute and am/pm columns and the selected row highlighted. One full-width button reads "Save".

**0i-c, after she answers, 8:41 pm**

- The same header and "Ready tonight" as 0i-a.
- "Tomorrow starts": the first row now has "8:15 am" in the time column, in the normal time style with no dashed outline, then the Mallory chip and "To Westview · D day". The row carries no Changed mark, because the answer is hers. The Alexis row is unchanged and still reads "Start time needed".
- The coach card, labeled "Your coach" with no day. It reads: "The rest of this week is in your game plan. Sneakers go with Mallory on Tuesday and Thursday, and the library book goes back on Friday. Back-to-school night at Westview is on Thursday evening as a suggestion. From your Google Calendar, Alexis has dance at Studio Ten on Wednesday at 3:45, and Mallory has ballet there on Thursday at 4:15." Under the text sits one button, "Open the game plan". Beneath the button, a link "Change the start time" sits on the left, and a Meta line "Westview card updated" sits on the right.

Add callouts for the reasons that a reader of the wireframe can't see:

- On 0i-a, say that the sneakers come from the rotation photo, because Tuesday, Oct. 6 is a D day. Both girls come from the children screen, and the two gaps are the next things the coach needs.
- On 0i-c, say that 8:15 am is the leaving time worked out from her zip code: ten minutes to Westview plus five minutes, before the 8:30 am start. The row names no driver, because nobody has said yet who takes Mallory. The card stays until she leaves Today.
- Between the panels, draw arrows from "Answer" to the sheet, and from "Save" to 0i-c.

Keep the skipped-capture state of 0i as it is, with only its dateline changed to "Monday, Oct. 5".

## Kids, the Westview card (12c and 12d)

- The Calendar section reads: "Picture day, Friday · Harvest fair, Friday, Oct. 23, 3:00 pm · Fir Hollow Farm field trip, Thursday, Oct. 29".
- The Documents section reads: "Rotation calendar, photo, last week · Family contact list, photo, last week". On 12d, after C-05b, the pickup change email still comes first in that list.

## The welcome screen (0w)

If the wireframe still shows the old helper or a real zip code, correct both. The helper under Zip code reads "Helps the coach work out travel times and your local school calendar.", and the field shows 00123. The zip code now drives the travel times on Today, so this helper describes what the product actually does. 95403 is a real zip code in Santa Rosa, and the demo uses 00123, which belongs to no real place.

## Index and notes

Add the new 0i panels to screen 0i rather than giving them new numbers, and update the onboarding flow map so that 0i shows its three states in order. Update NOTES.md with what changed in this pass and list any placeholder that remains. Do not change the fixtures or the pass document.

## Why each change

- **Datelines with dates** follow Greg's decision to show real dates on Today, which the Ready for dev frames already draw (issue T6).
- **C-00 moves to Oct. 5** so that one October rotation sheet covers both C-00 and the demo week. As a result, her first week's letters, the draft and the Westview event dates all move with it (issue C26).
- **The new 0i** pays off onboarding. The board shows the household she just set up and gives her one thing to do tonight. Her first answer changes the board in front of her, and the rest of the week arrives through the coach card without breaking the rule that Today shows today only (issue T8).
- **8:15 am** comes from her zip code, because Greg decided that a zip code is enough for travel times and that MVP never asks for a home address (issue O15).
- **The Westview card and the welcome screen** follow from the new event dates and from the zip code's purpose (issue O4).
