# Wireframe pass 12: fixtures 3.14 and 3.15

*For Claude Design. Paste everything below the line. Attach story fixtures 3.14 with fixtures-3.15-pass.md applied (or 3.13 with both passes) and spec 0.15.*

## Why this pass grew

Pass 12 was written for fixtures 3.14 and had not run when fixtures 3.15 arrived, so it now carries both. The 3.14 section on the countdown (6b) was withdrawn after the first run, because the boarding pass in section 8a replaces it. Sections 1 to 7 are the 3.14 corrections, unchanged apart from the times 3.15 corrects. They change how existing screens look and add none. Sections 8 to 14 carry 3.15, which works out every state of Now, adds the Leave sheet and the coach's backups, and adds screens for C-03b and for boards drawn for the wireframes only. Those sections add screens, so the walkthrough manifest and the Next and Previous order change where section 14 says.

---

Update the MVP wireframes to match story fixtures 3.15. Correct the existing screens in place, keeping every existing screen's ID. Add the new screens named in sections 9 to 13, in the places section 14 gives, and update the walkthrough manifest and the Next and Previous order to include them. If an ID this prompt gives is already in use, take the next free letter and list the change in your notes. Keep the wireframes grayscale. Every word on screen comes from the fixtures, and where this prompt quotes a line, use it exactly.

## 1. The coach speaks in sans in the app

The coach card on Today sets the coach's line in the sans face at the larger body size, the same size as the rows in Later today. It is no longer set in the serif. Change it on every Today screen that shows a coach card: 01, 02, 02b, 2c, 2d, 0i and 5c. The coach card's label stays in the monospace face.

Keep the serif for onboarding and setup headlines, the coach's lines in onboarding (onboarding-01 to onboarding-19), screen titles, article titles and the large departure time under Now. The Coach tab conversation is already in sans and does not change.

Why: Fraunces read as a display face sitting inside a sans-serif interface. It is kept for onboarding, titles and large headlines.

## 2. The capture bar replaces "Send to coach" on Today

Remove the floating "Send to coach" button from every Today screen: 01, 01b, 02, 02b, 2c, 03 and 0i in its first two states. In its place, dock the capture bar between the page and the tab bar, full width inside the side margins. It is the same bar that sits at the foot of the Coach tab (04b), drawn as a field rather than a button:

- A small filled dot for the coach at the start.
- The placeholder "Type, talk or add an image".
- Three icons at the end, in this order: attach, camera, microphone.

The bar does not float over the page. The page scrolls above it, so it never covers the last row of Later today.

Hide the bar whenever the coach card is asking for a capture. On 0i's skipped state, the coach card reads:

> Your coach
>
> Today is empty so far. Send me a school email, a handout or a few words about your week, and I'll start the plan.

and holds three buttons, "Take a photo", "Attach a file" and "Talk or type", with no capture bar on that screen.

On 04b, change the Coach tab placeholder to "Type, talk or add an image" after the coach's dot, and order the icons attach, camera, microphone.

On onboarding-19, remove the "Send to coach" sheet. The failure and waiting states on that screen stay.

Update the callouts on these screens. A callout that described "Send to coach" now says: "The capture bar is the same as the Coach tab's. Tapping the text opens Coach with the keyboard up, and each icon goes straight to its capture. It hides while the coach card asks for a capture."

Why: the floating button looked like every other button and could appear beside a coach card asking for the same thing. A field with the coach's dot says where things go without the word Send.

## 3. A person's answer is an initial and an icon

Wherever a status names a person, replace the words with the person's outlined initial followed by an icon:

| Status | On screen | Accessible label, written in the callout |
| ----- | ----- | ----- |
| Asked | Initial and an hourglass | Asked Edward |
| Yes | Initial and a thumbs up | Edward: yes |
| Can't | Initial and a thumbs down | Edward can't |

"Suggested" stays as a dashed label with the word, because it names no person. Changed and "Conflicts with" stay as they are.

Change it on the game plan screens (06, 06b, 5d), in "This week's changes", on the Team request cards that show an answer, and on the person pages (section 4). Notifications, the coach's lines and the recipient's own screens keep the words, because there is room for a sentence there. For example, the notification still reads "Edward: yes to both pickups on Thursday."

Add one callout on 06: "A person's answer is their initial and an icon. The words are in the accessible label, in notifications and in the coach's lines."

Why: "Edward: yes" broke across lines in a row, and longer names would be worse.

## 4. Person pages list the week as lanes

On 10c and the other person pages, redraw "This week" as lanes, the same row Later today uses on Today:

- The time column holds the day, abbreviated to three letters, such as "Thu".
- Then the child chip, when the item has one, and the item.
- The answer icon sits at the right edge, without the initial, because the page already belongs to that person.

Edward's page:

| Day | Chip | Item | Right |
| ----- | ----- | ----- | ----- |
| Thu | Alexis | Pick up at Cedar Grove, 1:30 pm | thumbs up |
| Thu | Mallory | Pick up at Westview, 2:30 pm | thumbs down |
| Sat | | Library run, 10:00 am | thumbs up |

Min-jung's page:

| Day | Chip | Item | Right |
| ----- | ----- | ----- | ----- |
| Mon | Alexis | Carpool to Cedar Grove, 7:40 am | |
| Thu | Mallory | Pick up at Westview, 2:30 pm | thumbs up |

Dr. Ortiz's page:

| Day | Chip | Item | Right |
| ----- | ----- | ----- | ----- |
| Fri | Mallory | Checkup, Northside Pediatrics, 3:30 pm | calendar mark |

The empty state line ("Nothing in this week's plan with Claire.") does not change.

## 5. Chat bubbles

On 10f and 10g, square one corner of each chat bubble, as the library's ChatBubble now does: the top right corner of her own messages and the bottom left corner of everyone else's. The other three corners keep their radius.

## 6a. Today's two surfaces

On every Today screen (01, 01b, 02, 02b, 2c, 2d, 03, 0i, 5c, and the new Today screens in sections 9 to 13), split the page into two surfaces. The header and Now sit on the lighter grey at the top. Below them, the coach card, Later today and MVP Recommends sit on a slightly darker sheet whose top corners are rounded, running down into the capture bar and the tab bar. On 03, Ready tonight sits on the lighter surface and Tomorrow starts on the sheet. On 0i's skipped state, only the header sits above the sheet, and the coach card sits on it. The surfaces are not cards, so draw no border or shadow on either.

Add one callout on 01: "Now sits on paper and the rest of the day on the canvas sheet below it, so Now reads first. The surfaces are not cards, and the coach card is still the only card."

Why: Now is what she acts on next, and the rest of the day can wait.

## 6. Two stale callouts (W6)

- On 01, callout 1 still says the dateline shows "Monday" and that there is never a calendar date. Replace it with: "The dateline shows the day and the date, such as Monday, Oct. 12, worked out from the demo calendar."
- On the 0q page, replace the "Fixtures v3.10" stamp with "Fixtures v3.15".

## 7. Version stamps

Change every "Fixtures v3.13" and "Fixtures v3.14" stamp to "Fixtures v3.15".

## 8. Now on the existing Today screens (fixtures 3.15)

Every leaving time now follows one rule, and Now shows one leg of her run at a time with the next station beneath it. Change these screens.

**02 (C-06, Wednesday 11:45 am) and 02b (C-06b, Wednesday 1:15 pm).** Now reads:

> Home → Westview ›
> Then Cedar Grove, 2:45
>
> 2:15 pm, with the pill "in 2 hr 30 min" *(on 02b: "in 1 hr")*
>
> Drive 10 min · Arrive 2:25 · Pickup 2:30
>
> [perforation]
>
> Alexis
> Dance bag
>
> Before you leave
> Call Brightwater
> Send Westview the pickup note *(02b only)*
>
> [Remind me] [Directions]

Lay it out as section 8a describes. The chevron after the route marks it as tappable.

**01 (C-03, Monday 7:25 am).** Now becomes a pass: "Home → Cedar Grove ›", 7:40 am with the pill "in 15 min", the fields "With The Parks" and "Starts 8:00", the perforation, Alexis's group with Lunch, "Library book, due today" and Water bottle, and [Remind me]. In Later today, the first row reads "8:30 am · [Mallory] To Westview · B day". Change the callout that describes 7:40 to: "At 7:40 the Parks collect Alexis, and Mallory's leg moves up: Home → Westview, 8:15 am, in 35 min, Drive 10 min · Arrive 8:25 · Starts 8:30, with Directions."

**2c and 2d, and any other screen showing the C-06 Now.** Use the same Now as 02.

Add one callout on 02: "Now shows one leg of her run at a time, laid out like a boarding pass. The line under the route names the next station. Tapping the time or the route opens the Leave sheet."

Why: the afternoon pickups left at 2:20, which gave no margin for a ten-minute drive to a 2:30 pickup. One rule now sets every leaving time.

## 8a. Now as a boarding pass, and grouped checklists (fixtures 3.15, "Now reads like a boarding pass" and 4a)

Every Now that holds a leg is laid out like a boarding pass, top to bottom:

- **The route.** "Home → Westview" in the bold body size, with a small chevron at the right end of the line, and "Then Cedar Grove, 2:45" in the small size beneath it.
- **The time and a status pill on one line.** The large serif time at the left, and at the right a small rounded pill holding the countdown, such as "in 2 hr 30 min". From the leaving time the pill reads "Time to leave" and is filled dark.
- **Three fields in a row.** Each is a small label over a bold value: Drive, Arrive, and Pickup or Starts. When Arrive falls after the stop's time, draw its value with a small clock icon beside it.
- **A perforation.** A dashed line running the full width of Now, edge to edge.
- **The grouped checklist.** Each child's first name as a bold heading, with that child's items beneath it, and "Before you leave" as a heading over her own tasks. Each row is a circle at the left and the item, with every item starting at the same left edge. A ticked row has a filled circle and dimmed text. No chips, no counts.
- **The actions** at the foot.

Ready tonight on 03 and the checklist under each row of Tomorrow starts use the same grouped list, with no pass above them. The old drive line, such as "10 min drive", is gone everywhere.

Why: Now's lines stacked at one weight with nothing grouped, and the checklist's box, chip and item fought for one row. A pass puts each fact in a fixed place, and grouping by child gives every item the same left edge.

## 9. C-03b, the afternoon run (fixtures 3.15, C-03b)

Screen 01b becomes the first Today screen of C-03b. Redraw it at 2:05 pm from the fixtures, and add five screens after it.

- **01b, Today at 2:05 pm.** The header "Monday, Oct. 12" over "This afternoon". Now as a pass: "Home → Westview ›" and "Then Cedar Grove, 2:45", 2:15 pm with "in 10 min", Drive 10 min · Arrive 2:25 · Pickup 2:30, the perforation, Mallory's group with "A book for the waiting room at Brightwater", and Remind me and Directions. Later today with "2 done this morning" and three rows, and the MVP Recommends card. No coach card.
- **1f, the reminder at 2:00 pm.** A lock screen with the notification "Leave in 15 min for Westview, then Brightwater", the body "Take Mallory's book for the waiting room at Brightwater." and Directions and Snooze 5 min. Place it before 01b in the walkthrough, because the moment opens on it.
- **1g, the Leave sheet.** A tall sheet over 01b, with the grabber and a Close icon at the top right, the heading "When to leave" and the line "This afternoon · 3 stops". Draw the stations on a thin vertical rail with a dot at each stop: Home, "Leave at 2:15 pm"; Westview, "2:30 pm · [Mallory] Pick up at Westview", "Leave at 2:30 pm"; Cedar Grove, "2:45 pm · [Alexis] Pick up at Cedar Grove", "Leave at 3:05 pm"; Brightwater, "3:30 pm · [Both] Therapy" with the calendar mark, "Leave at 4:15 pm"; Home, "Back about 4:35 pm". Each "Leave at" time is drawn as a link. Save sits at the foot, inactive. Add a second state of the sheet beside it, with the Home leaving time open in a time picker set to 2:25, the line "You reach Westview at 2:35, five minutes after pickup." under Home, and Save active.
- **1h, Now at 2:31 pm.** "Westview → Cedar Grove ›" and "Then Brightwater, 3:30", 2:30 pm with the filled pill "Time to leave", Drive 12 min · Arrive 2:42 · Pickup 2:45, the perforation, and Directions only. Later today shows "3 done today".
- **1i, Now at 2:46 pm.** "Cedar Grove → Brightwater ›" and "Then home, about 4:35", 3:05 pm with "in 19 min", Drive 20 min · Arrive 3:25 · Starts 3:30, the perforation, Mallory's group with the book, and Remind me and Directions. Later today shows "4 done today".
- **1j, running late at 2:21 pm, for the wireframes only.** "Home → Westview ›" and "Then Cedar Grove, 2:45", 2:15 pm with the filled pill "Time to leave", Drive 10 min · Arrive 2:31 with the clock icon · Pickup 2:30, the perforation, Mallory's group with the book, and Directions only. Stamp it "Wireframe only".

Add one callout on 1g: "The run is a line of stops, and home is just a station. She can change when she leaves any stop, and the result shows under that stop as she turns the time. The rail appears inside this sheet only."

Why: a parent's afternoon is a chain of stops that does not always pass home, and the line shows it the way a subway map does.

## 10. Every sheet has a way out (fixtures 3.15, "Sheets")

On every sheet in the wireframes, including the reminder sheet, the answer sheet on 0i and the sheets in this pass, draw a grabber at the top centre and a small Close icon at the top right. Where a sheet has a second action, such as "Remove reminder", draw it as a link under the primary button.

Add one callout on the reminder sheet: "Every sheet has a grabber and Close, and closing changes nothing. After she acts, the sheet closes and the screen shows the result."

## 11. Other options opens the backups (fixtures 3.15, C-06, C-06b, If Min-jung says no)

"Other options" on the coach card now opens the Leave sheet on Today, scrolled to the coach's backups, instead of the Coach tab. Add these screens after the screens they follow.

- **2e, Thursday's Leave sheet, after 02.** A tall sheet headed "When to leave" with "Thursday afternoon". At the top, a short line: Home, "Leave at 2:00 pm"; Willow, "2:15 pm · Yoga" with "Conflicts with Mallory's pickup", "Leave at 3:15 pm"; Home, "Back about 3:25 pm". Below it, the heading "Other ways this could go", then two rows, each a line and one button:
  - "Plan B · Min-jung collects Hana at Westview at 2:30 and lives two streets from you, so she can bring Mallory home by 2:45. You keep the 2:15 class." with [Ask Min-jung].
  - "Plan C · Collect Mallory yourself and skip yoga this week. Thursday runs like an ordinary Thursday, and Mallory rides with you to ballet as usual." with [Skip yoga this week].
  - The link "Why" at the foot.
- **2f, the card after Plan B, after the Min-jung draft.** The coach card "Your coach · for Thursday" with "Mallory goes home with Min-jung once Min-jung says yes. Westview only releases Mallory to people on the pickup list, so Westview needs a note from you by 11:00 on Thursday.", the button [Note to Westview] with the line "Opens an email for you to send to Westview", and the meta line "Game plan updated". No Undo.
- **2g, Friday's Leave sheet, after 02b.** Headed "When to leave" with "Friday afternoon". The line: Home, "Leave at 2:25 pm"; Cedar Grove, "2:45 pm · [Alexis] Pick up at Cedar Grove", "Leave at 2:45 pm"; Home; Northside, "3:30 pm · [Mallory] Checkup" with the calendar mark and "Conflicts with tutoring", reached by "Leave at 3:10 pm" from home. Then "Other ways this could go", one row, "Plan B · Call Northside for a time after 3:45 or on another day, and Friday stays as it is." with [Call Northside], then the coach's line "I don't see another way that keeps both on Friday." and "Why".
- **2h, the sheet when Min-jung says no.** The same sheet as 2e with one row, "Plan B · Collect Mallory yourself and skip yoga this week. Thursday runs like an ordinary Thursday, and Mallory rides with you to ballet as usual." with [Skip yoga this week], then "I don't see another way for Thursday."

Change the callout on 02 that says Other options opens the Coach tab to: "Other options opens the Leave sheet on Today, scrolled to Plan B and Plan C. Why opens the coach's full message on the Coach tab."

Why: when a plan breaks, she needs the backups where she is, not on another tab.

## 12. Reminders (fixtures 3.15, C-06 and "Now: reminders and directions")

- **The C-06 reminder sheet** reads "For 2:15 pm · Westview", with "At 2:00 · 15 min before", "At 1:45 · 30 min before" and "When it's time to leave · at 2:15, with traffic checked".
- **The reminder once set** reads "Reminder at 2:00" in its button, and nothing else on the pass repeats it.
- **The notification** on the lock screen reads "Leave in 15 min for Westview, then Cedar Grove" at 2:00. The body and actions do not change.
- **2i, the reminder sheet in its set state.** "15 min before" selected, the button [Update reminder] and the link "Remove reminder".
- **2j, the reminder sheet with notifications off, for the wireframes only.** Above the choices, the line "Notifications are off, so this reminder can't reach you." Draw a second state beside it with the link "Open settings" under that line, for a parent who said no before.

## 13. Tonight, the game plan and the boards for the wireframes only

- **03 (C-07).** Ready tonight is grouped: Alexis with "Violin, by the door" and "Orchestra folder, by the door", Mallory with "Ballet bag packed for 3:55 pm", and Both with Lunches. In Tomorrow starts, the first row reads "6:55 am · You take Alexis to orchestra", and the checklist under each row is grouped the same way. Add one callout: "Each row opens the Leave sheet for that leg."
- **06 and 06b.** Mallory's Westview rows read 8:30 am, and orchestra reads 7:15 am, because the game plan shows when the thing starts.

Add these boards, each stamped "Wireframe only".

- **2k, Wednesday at 5:10 pm.** "Wednesday, Oct. 14" over "This afternoon". Now with 6:30 pm, "in 1 hr 20 min", "Dinner with Claire" and [Remind me] only, with no drive line. Later today shows its heading and "5 done today" with no rows. The MVP Recommends card follows. Beside it, the reminder sheet headed "Remind me", "For 6:30 pm · Dinner with Claire", "At 6:15 · 15 min before" and "At 6:00 · 30 min before", with [Set reminder].
- **3b, Sunday at 10:30 am.** "Sunday, Oct. 18" over "This morning". Now with the Meta line "Nothing to drive to today.", the task "Fix the washing machine" in the bold sans title size, the steps "Check the drain filter" and "Run an empty rinse cycle" as a checklist, and [Remind me] [Ask someone]. Below it, the coach card "Your coach · for Monday" with "Violin is back at Lakeside Strings on Monday at 4:00, and Alexis has therapy at Brightwater at 3:30, so the two overlap every Monday. I'd ask Lakeside for 4:45 or later, so Alexis can go straight from therapy.", [Text Lakeside] with "Opens a text for you to send to Lakeside Strings", and "Other options". No Later today and no Recommends card.
- **3c, the task's reminder sheet.** "Remind me", "Fix the washing machine", "At 11:30 am · in an hour", "At 2:00 pm · this afternoon", "At 6:00 pm · this evening", [Set reminder].
- **3d, Ask someone and its draft.** The sheet "Ask someone", "Fix the washing machine", with Edward, Claire, Ms. Reyes, Min-jung Park and Jenna Okafor as choices and [Next]. Beside it, the draft page with Back: "To Edward", "Can you take a look at the washing machine today? It's leaking again.", "Edward answers with", "Sunday · Fix the washing machine · [I've got it] [I can't do this]", "You send this. MVP never sends anything for you." and [Send].
- **3e, the Lakeside draft.** "To Lakeside Strings", "Hi, could Alexis move to 4:45 or later on Mondays? Alexis has an appointment at 3:30 that runs until 4:15. Thank you, Charlotte", the send line and [Send from Messages].
- **3f, Monday's Leave sheet at its backups.** "Other ways this could go", "Plan B · Skip violin this Monday. Alexis keeps therapy at Brightwater, and you can settle violin's time once Lakeside answers." with [Skip violin on Monday] and "Opens a text for you to send to Lakeside Strings", then "I don't see another way that keeps both on Monday." and "Why".
- **3g, Sunday at 11:15 am.** Now holds the single line "Nothing else today." The coach card for Monday stays below it, and Later today shows its heading and "1 done today" with no rows.

## 14. Where the new screens go

| After | Add, in order |
| ----- | ----- |
| 01 | 1f, 01b, 1g, 1h, 1i, 1j |
| 02 | 2e, then the Min-jung draft, 2f, 2h |
| 02b | 2g |
| The reminder sheet screens | 2i, 2j |
| 03 | 2k, 3b, 3c, 3d, 3e, 3f, 3g |

## Check before you finish

- No screen shows "Send to coach".
- No coach card sets the coach's line in the serif.
- No status in a row spells out a person's name.
- Every person page's This week uses three-letter days.
- Every Today screen shows Now above a sheet with rounded top corners.
- No Today screen shows 2:20, 2:05, 7:00 for orchestra, or "22 min drive, 2 stops".
- Every Now with a leg is a pass with a perforation, and no checklist row carries a chip or a count.
- Every sheet has a grabber and a Close icon.
- No "Other options" leads to the Coach tab.
- Every new screen sits where section 14 places it, and the manifest and the Next and Previous order include it.

Export as before: numbered images and the onboarding flow map.
