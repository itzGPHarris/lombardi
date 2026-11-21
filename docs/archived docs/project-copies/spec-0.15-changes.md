# Spec 0.14 to 0.15: section changes

*MVP (Lombardi) · October 15, 2026 · Follows fixtures-3.15-pass.md*

## Why this is a change file

The spec is normally edited directly. This version changes eight sections and both appendices, and rewriting the whole spec to carry them would risk drift in the sections it does not touch. Each change below quotes where it goes and gives the replacement, so it can be applied in place. Once it is applied, `docs/spec.md` is version 0.15 and this file can be retired.

---

## Version line and summary

Replace the version line with:

> *Investor prototype · Version 0.15 · October 15, 2026*

Replace the first paragraph of "Summary of this version" with this paragraph, and move the current 0.14 paragraph down to sit after it as the description of the previous version:

> Version 0.15 follows story fixtures 3.15, which works out every state of Now on Today. Now follows one rule for what leads it, and a departure becomes a leg on a run drawn as a line of stops that need not start or end at home (§5). Today gains one way to change a time, the Leave sheet, and the coach keeps a Plan B and a Plan C at its foot, which "Other options" now opens on Today instead of the Coach tab (§5, §6). Now reads like a boarding pass, and checklists are grouped under each child's name without chips (§4, §5). Sheets become one pattern with a way out and a set state, and the reminder sheet gains a state for notifications that are off (§5, §17). Every leaving time follows one rule, and the seed holds runs with a due time and a leaving time at every stop (§4, §16). C-03b replaces the Monday afternoon board as a built moment (§15). Plan B and Plan C are F26, and a note to whoever is waiting when she runs late is parked as F27.

## §4, "Plan item"

Replace the Day and time row with:

> | Day and time | demo time | When the thing itself starts, as a day of the week and a time, or "All day" (§16). Ballet is at 4:15 pm, and Mallory's school run is at 8:30 am, when Westview starts. When she leaves belongs to the run on Today (§5, §16), such as 3:55 pm for ballet. |

Add this row after the Going with row:

> | Task kind | enum | Tasks only. For this trip, which joins the checklist of the run it names, or Anytime, which shows "Anytime" in Later today (§5). |
> | Steps | strings | Tasks only, optional. Steps the parent wrote herself, shown as a checklist when the task leads Now. |

## §4, "Marks"

Add this paragraph after "An item that collides with two or more items…":

> A recurring item that collides with another every week, such as violin and therapy on Mondays, carries the Conflict mark on every week it applies, and the coach raises it once, before the first week it applies, rather than every week.

## §5, "Parts"

Replace the Now row with:

> | Now | The next thing today that needs her at a set time: usually the current leg, laid out as a boarding pass: the route and the next station, the leaving time in Display with a status pill, the Drive, Arrive and Pickup or Starts fields, a perforation, then the grouped checklist, Remind me and Directions. When nothing timed is left, her leading task. When there is no task, a quiet line. | Each moment, and fixtures section 2, "Now, from one moment to the next" |

## §5, "Now"

Replace the field table with:

| Field | Type | Description |
| ----- | ----- | ----- |
| Time | demo time | When she leaves on the current leg, in Display, such as "2:15 pm", or the time of a timed thing at home, such as "6:30 pm". |
| Route | string | Where she leaves from and where she is going, such as "Home → Westview", in Body strong, with a chevron. The arrow's accessible name is "to". Tapping the route or the time opens the Leave sheet. For a timed thing at home, the item instead, such as "Dinner with Claire". |
| Status pill | derived | Beside the time, at the right: "in 15 min", or "in 2 hr 30 min" for anything an hour or more away, and from the leaving time "Time to leave", filled. The only part of the pass that changes through a leg's stages. |
| Fields | derived | Three fields under the time, each a label in Meta over a value in Body strong: Drive, Arrive, and Pickup or Starts. Arrive is worked out from the leaving time, and from the leaving time onward from now, and is set in the warning ink with a clock icon when it falls after the stop's time. For a child leaving with someone else: With and Starts. |
| Perforation | | A dashed line across Now under the fields, separating the trip from the checklist and actions. |
| Checklist | groups | Items grouped under each child's first name in Body strong in `kid`, or "Both" or "All three", and her tasks marked for this trip under "Before you leave" in ink. Rows carry no chips and no counts. The check is a circle in a fixed left column, the whole row is the target, and a ticked row stays in place, dimmed. |
| Actions | buttons | Remind me, with a bell, and Directions, with a navigation arrow, both outlined. Directions appears only on a leg she drives. Remind me goes away from the leaving time. A task leading Now has Remind me and Ask someone. |
| Next station | derived | Under the route, in Meta: "Then Cedar Grove, 2:45", naming the next stop on her run, or "Then at 8:15, you leave for Westview" when a separate run leaves within 30 minutes. Absent when nothing follows soon. |

The drive line of version 0.14 is retired. Drive and Arrive carry what it said, and a set reminder shows only in its button.

Add these subsections after the field table:

> ### **What leads Now**
>
> Now shows the next thing today that needs her at a set time. A leg she drives leads it, and so does a child leaving home with someone else, because the checklist is hers. Her own trips, such as yoga, lead it too. A timed thing at home, such as dinner with Claire, leads it when no leg comes first. When no timed thing is left, her leading task takes Now: a Meta line, "Nothing to drive to today." or "Nothing else to drive to today.", the task in Title, its steps, and a line saying what depends on it when the coach knows. When there is no task either, Now shows "Nothing else today."
>
> Three kinds of item never lead her Now. Someone else's trip that does not start from her home stays in Later today with that person's initial and answer. An item that is Asked or owned by Nobody yet stays in Later today, and if an Asked item is still unanswered at the time she would have to leave, the coach card asks her to decide. An item with no known time stays in Later today with "Start time needed", and the coach card asks for the time.
>
> When several tasks are left, the one with the earliest deadline leads, then the one something else depends on, then the one she added first. A task leading Now counts as done when she ticks it. Tasks on a leg's checklist do not count.
>
> ### **A leg from start to finish**
>
> | Stage | When | What changes |
> | ----- | ----- | ----- |
> | Coming up | Before the leaving time | The countdown reads "in 15 min". |
> | Time to leave | From the leaving time until five minutes after it | The countdown reads "Time to leave", and Remind me goes away. |
> | Running late | From five minutes after the leaving time until the destination is due | Arrive shows the real arrival, such as 2:31 against a 2:30 pickup, in the warning ink with a clock icon. |
> | Passed | The destination is due | The leg leaves Now, adds to the done count, and the next leg on her run takes over from that stop. |
>
> MVP follows the run and never asks her to tap that she has left or arrived. Directions routes from wherever she actually is.
>
> ### **The Leave sheet**
>
> The Leave sheet is the one place Today changes a time. It opens from the time or the leg line under Now, from a Tomorrow starts row at Tonight, and from "Other options" on a coach card, which opens it scrolled to the backups. It is a tall sheet headed "When to leave", with a line naming the part of the day and the number of stops.
>
> The body draws her run as a line of stations on a rail: the place, the item with its chips and start time, and "Leave at" with the time she leaves that stop. Home appears only where the run starts or ends there, and the last station reads "Back about" and the time. Tapping a "Leave at" time opens a time picker in place, and a line under that station gives the result as she turns it, such as "You reach Westview at 2:25, five minutes before pickup." Later stations follow. A late choice is stated and never blocked. Save keeps the change, and Close leaves everything as it was.
>
> | Case | What happens |
> | ----- | ----- |
> | She changes when she leaves | The leaving time changes on that leg. The change carries no Changed mark, and a reminder she has set keeps its offset and moves with it. If the reminder's new time has already passed, the reminder is removed and the button reads Remind me again. |
> | She changes the start time of her own item | "Change the start time" edits the item, the time's source becomes "From you", and the original source link stays. |
> | A calendar item | Its start time reads "Change this in Google Calendar." Its leaving time can still change, because the leaving time belongs to MVP. |
> | An item someone else owns or has answered | Nothing on Today changes it. It is changed in the game plan (§8). |
> | A change that runs into another item | Both items carry "Conflicts with", and the coach card appears. |
>
> ### **Plan B and Plan C**
>
> For a run the coach has worked out, the Leave sheet ends with "Other ways this could go": up to two backups, "Plan B ·" and "Plan C ·", each the coach's line and one button named for what it does, and a Why link that opens the coach's full message on the Coach tab.
>
> - **A backup that involves a person is an ask.** Choosing it closes the sheet and opens a draft in her voice, and the item shows the person's initial and an hourglass once it is sent.
> - **At least one backup depends on nobody else saying yes,** wherever one exists, and when there are two it is Plan C.
> - **Backups respect the rules on the school card,** so a plan that needs a pickup note after the school's deadline is never offered.
> - **When there is no second honest backup, the sheet says so** in the coach's words, such as "I don't see another way that keeps both on Friday."
> - **When nobody in her plan can help,** the sheet offers Ask my village, because the coach does not find or recommend providers.
> - **Choosing a backup that changes only her own plan works like accepting from the card:** no Changed mark, and Undo on the card until she leaves Today. A backup that sends a request has no Undo, because the request has gone.
>
> In the prototype, backups are written only for the runs the demo shows (fixtures Appendix B item 56). Every other Leave sheet shows no backups.
>
> ### **Sheets**
>
> A sheet holds a short decision about something already on screen and returns her to the same place. Anything she reads or works in is a page with Back. After she acts, the sheet closes and the screen shows the result. A sheet never opens another sheet.
>
> | Part | Rule |
> | ----- | ----- |
> | Top | A grabber, and a Close icon at the top right with the accessible label "Close". Closing never changes anything. |
> | Header | The heading, and an optional line in Meta naming what the sheet is about. |
> | Body | One of four kinds: choices (radio rows), a single field, a line of stations, or a list of actions, each a line with one button. |
> | Footer | The primary button, and an optional link for a second action, such as "Remove reminder". |
> | Height | Compact, fitting its content, or tall and scrolling, which only the Leave sheet uses. |
> | Set state | Reopened on something already chosen, the choice is selected and the button says so, such as "Update reminder". |
>
> The sheets on Today are the reminder sheet, the answer sheet, the Leave sheet, the reminder sheets for a timed thing at home and for a task, and Ask someone.

## §4, "How people are shown"

Replace the bullet "**Chips lead each row,**" with:

> * **Chips lead each row in a list of items,** such as Later today, the game plan and requests, and the chip replaces the child's name in the row's text, so a row reads "[Mallory] Pick up at Westview". Checklists are grouped instead, under the child's first name in `kid`, and their rows carry no chips.

## §5, "Reminders and directions"

Replace the first bullet with:

> * **A reminder never sets itself.** Tapping Remind me opens a sheet headed "Remind me to leave", with the leaving time and the next stop beneath it and three choices: 15 minutes before, which is preselected, 30 minutes before, and when it's time to leave. Once she sets it, the button reads "Reminder at" and the time in its active state until it goes off, and tapping it reopens the sheet in its set state, with "Update reminder" and "Remove reminder". A timed thing at home offers 15 and 30 minutes before, and a task offers times of day, because it has no time of its own.

Add this bullet after "The reminder arrives as a notification":

> * **Reminders need notifications on.** When notifications are off, the reminder sheet says so above the choices. If she has never been asked, Set reminder brings up the phone's own request. If she has said no before, the line carries an "Open settings" link, because the phone will not ask again. The reminder is kept either way and goes off once notifications are on. In the prototype both cases are staged, and Charlotte's path has notifications on.

Replace "with Directions and a five-minute snooze" in the notification bullet with:

> naming the first stop and the last stop before home, such as "Leave in 15 min for Westview, then Brightwater", with Directions and a five-minute snooze

## §5, "The coach card"

Replace the bullet beginning "**"Other options" opens the coach's full message on the Coach tab**" with:

> * **"Other options" opens the Leave sheet on Today,** scrolled to the coach's Plan B and Plan C, so she can choose another way without leaving Today. The Why link in the sheet opens the full message on the Coach tab. A card with only one way forward names the alternative instead, such as "Not this week" or "Remind me Monday".

Add to the bullet "**Its label names the day it concerns,**":

> A card about today reads "Your coach · for today".

## §5, "Later today"

Replace the first two bullets with:

> * **Each row has its time in Meta, its chips and the item,** such as "2:30 pm · [Mallory] Pick up at Westview", and the times line up in a column. The time is when the thing starts, so a school run reads 8:30 am, and the leaving time belongs to Now. An anytime task reads "Anytime" in the time column.
> * **What is done drops off the list,** and a count beside the heading says how much, "2 done this morning" before noon and "3 done today" from noon. When nothing is left, the heading stays with its count and no rows. When nothing was planned, Later today is hidden.

## §5, "Tonight"

Add this sentence to the end of the paragraph:

> Each Tomorrow starts row opens the Leave sheet for that leg, so she can change tomorrow's leaving time the night before.

## §5, standing decisions

Add these:

> 7. **Today changes one kind of thing: when she leaves.** The Leave sheet is the only edit on Today, and it changes start times only on her own items. Notes, owners and moving an item to another day stay in the game plan, so Today stays quiet and never turns into busy work. Tapping a time never switches tabs.
> 8. **A run is a line, and home is just a station.** Now shows one leg at a time and steps down the line as each stop comes due.
> 9. **The coach keeps backups ready.** Plan B and Plan C are worked out before anything goes wrong and wait one tap away, and at least one depends on nobody else, wherever one exists.
> 10. **Leave and Remind me are separate sheets.** Leave changes the plan and can raise a conflict, and Remind me changes nothing anyone else sees, so neither hides behind the other's label.
> 11. **Two lines are drawn on Today, and no others.** The rail inside the Leave sheet and the perforation inside Now are the only lines. Today's surfaces keep no other rail, borders or divider lines, and Now has no border, so it is not a card.
> 12. **Now reads like a boarding pass when it holds a leg.** Each fact has a fixed place and a small label, so she learns where to look once. A timed thing at home, a task and the quiet line keep the plain layout.
> 13. **Checklists are grouped under each child's name, without chips.** Grouping does the job a chip does in a mixed list, so chips stay on rows in lists of items and leave checklists.

## §5, open conditions

Add these:

> 4. **Whether parents find the Leave sheet without a separate Change link** goes to user testing (fixtures Appendix B item 53).
> 5. **The notification title names two stops** for a run with more, which needs checking on a lock screen (fixtures Appendix B item 54).
> 6. **The real product works out backups,** and the prototype carries only the ones the fixtures write (fixtures Appendix B item 56).
> 7. **Legs between places need the places' addresses** in the real product, because the zip code covers only legs from home (issue D2).

## §6, behavior notes

Replace the bullet "**The full message behind a coach card**" with:

> * **The full message behind a coach card** quotes what changed, such as Edward's answer in C-06, and sets out every option the coach considered, with the recommended one first. It opens from the Why link in the Leave sheet. On Today, the same options appear as the recommendation on the card and Plan B and Plan C in the sheet.

## §8, "Working the plan directly"

Add this row to the table:

> | Change the time of an item someone has answered | Tap the item and change its time | The item's answer stays until she sends the change. Sending it returns the item to Asked, and until she sends it the coach card says the person has not seen the new time. |

Add this bullet to the behavior notes:

> * **School runs show the time school starts,** such as 8:30 am, because every item shows when the thing starts. The leaving time belongs to the run on Today.

## §15, "Charlotte's moments"

Add this row after C-03:

> | C-03b | Monday, Oct. 12, 2:00 pm | The afternoon run as a line: the reminder, two pickups and therapy, and the Leave sheet | Lock screen, the reminder, then Today | Core |

Replace the sentence "The Monday afternoon board on wireframe 01b is not a moment and is not built as one." with:

> The boards for running late, Wednesday at 5:10 pm and Sunday are not moments and are not built in review build 1.

## §16, "Plan items, captures and requests"

Replace the paragraph with:

> Plan items follow §4, including the children each concerns, which the screen draws as chips, and for tasks the task kind and any steps. Captures follow §7. Requests follow §9. Each references people, places and sources by id.

Add this subsection after it:

> ## **Runs**
>
> | Object | Field | Type | Description |
> | ----- | ----- | ----- | ----- |
> | Run | id, day | | One run per stretch she drives before she is home again. |
> | | stops | array | In order. Each stop has a place, the plan item there if any, the children who get on or off, `dueAt` (when she must be there) and `leaveAt` (when she leaves it). Home is a stop only where the run starts or ends there. |
> | | backups | array | Optional. Each backup has a label (B or C), the coach's line, a button with its action, whether it depends on someone else, and its result. |
> | | noMoreBackups | string | Optional. The coach's line when there is no second honest backup. |
>
> Every `leaveAt` follows the rule in fixtures "Dates, times and places": the next stop's `dueAt`, minus the drive, minus five minutes, rounded down to five minutes, but never before the stop it leaves is due, so a leg from a pickup leaves no earlier than the pickup. The seed holds the computed values, and the rule is what they must agree with.

In "Travel", replace the Travel row with:

> | Travel | from, to, minutes | | Fixed in the seed, never calculated, for legs from home and between places. |

In "Conversation, coach cards and reminders", replace the Reminder rows with:

> | Reminder | target | reference | The run leg, timed thing or task it belongs to. |
> | | minutesBefore | integer or null | 15 or 30, or null for "when it's time to leave". For a task, `at` holds a time instead. |
> | | set | boolean | Whether she has set it. Charlotte sets one in C-03b, for 2:00 pm. |

Add to "Meta":

> | notifications | enum | `on`, `off-never-asked` or `off-declined`. Charlotte's is `on`. |

## §17, "Component inventory"

Replace the Today line with:

> * `components/Today/`: TodayTab, PhaseHeader, Now, NowPass, StatusPill, PassFields, NowTask, NowQuiet, NextStation, ChecklistGroup, LaterToday, ReadyTonight, TomorrowStarts, CoachCard, CaptureBar (shared with Coach), and the sheets ReminderSheet, AnswerSheet, LeaveSheet, RouteLine, BackupList and AskSomeoneSheet

Add to the shared line:

> Sheet, with its parts SheetHeader, SheetOption, ActionRow and SheetFooter

## §18, out of scope

Add these:

> * Editing notes, owners or days from Today, and changing the time of an item someone else owns or has answered from Today
> * Working out backups at run time, which the prototype takes from the seed
> * A note to whoever is waiting when she runs late (F27)
> * Real notification permission, which the prototype stages

## Appendix A, a new entry at the top

> ## **v0.15, October 15, 2026**
>
> Follows story fixtures 3.15, the session on the states of Now. Closes nothing yet. The rows it carries are T16 to T33, D1, D2, G8 and C34, which close when the fixtures and this spec are applied.
>
> | # | Section | Change |
> | ----- | ----- | ----- |
> | 1 | §5 | Now follows one rule for what leads it: the next timed thing that needs her, then her leading task, then a quiet line. Asked, Nobody yet and untimed items, and other people's trips, stay in Later today. |
> | 2 | §5, §16 | A departure is a leg on a run, drawn as a line of stops. Now steps down the line, names the next station, and passes through four stages. The seed gains runs with `dueAt` and `leaveAt` at every stop. |
> | 3 | §5 | The Leave sheet is the one edit on Today. It changes leaving times, and start times only on her own items. |
> | 4 | §5, §6 | Plan B and Plan C sit at the foot of the Leave sheet, and Other options opens it on Today. The Coach tab's full message is reached through Why. F26. |
> | 5 | §5, §17 | Sheets become one pattern with a Close icon, four bodies, two heights and a set state. The reminder sheet gains the notifications-off state, and the seed gains `meta.notifications`. |
> | 6 | §4, §8, §16 | Every leaving time follows one rule. School runs show the time school starts. Tasks gain a kind and steps. A recurring conflict is raised once. Changing an answered item's time returns it to Asked. |
> | 7 | §15 | C-03b is a moment. The Monday afternoon board is retired, and three boards are wireframe-only. |
> | 8 | §18, Appendix B | Editing beyond leaving times on Today, run-time backups and real notification permission are out of scope. F26 and F27 are added. |
> | 9 | §4, §5, §17 | Now reads like a boarding pass: route, leaving time with a status pill, Drive, Arrive and Pickup or Starts, and a perforation. The drive line is retired. Checklists are grouped under each child's name in `kid` and "Before you leave", without chips or counts. Today keeps two drawn lines, the rail and the perforation. |

## Appendix B

Add these rows:

> | F26 | Plan B and Plan C | **Moved into the prototype in v0.15** for the runs the demo shows. The real product works out backups for every run. | §5, fixtures Appendix B item 56 |
> | F27 | A note to whoever is waiting when she runs late | Late to a pickup, the coach could draft a note to the school or the person waiting. No moment needs it. | §5, fixtures Appendix B item 57 |

Replace "**F26 is next free.**" with:

> **F28 is next free.**
