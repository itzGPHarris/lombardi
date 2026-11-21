# Correction pass: story fixtures 3.14 to 3.15

*MVP (Lombardi) · October 15, 2026 · Greg's decisions from the session on the states of Now*

## Summary

This pass works out every state of Now on Today, gives Today one narrow way to change a time, and gives the coach ready backups for when a plan goes wrong. It is the largest change to Today since version 3.10, so it changes several moments. Every change below comes from a decision Greg made on October 15, 2026, and the issues file records each one (T16 to T33, D1, D2, G8 and C34).

- **Now follows one rule for what leads it.** Now shows the next thing today that needs her at a set time. When no timed thing is left, it shows her leading task, and when there is no task either, it shows a quiet line. A timed thing at home, such as dinner with Claire, can lead Now.
- **A departure is a leg on a line.** Her afternoon runs are drawn as a subway line of stops, and a stop is not always home. Now shows the current leg, with a line naming the next station, and it steps down the line as each stop comes due. The seed gains runs with a due time and a leaving time at every stop.
- **The Leave sheet is the one place Today changes a time.** It opens from the departure time or the leg line, draws the run as a line, and lets her change when she leaves any stop. Everything else is changed in the game plan.
- **The coach keeps a Plan B and a Plan C.** Backups sit at the foot of the Leave sheet, and the coach card's "Other options" now opens that sheet on Today instead of the Coach tab. At least one backup depends on nobody else saying yes, wherever one exists.
- **Now stays in place, and the day scrolls over it.** The canvas sheet rises over Now and the header when she scrolls, and when the header and Now are taller than the space above the capture bar, they scroll until Now's actions clear the bar before they hold still (issue T36).
- **Now reads like a boarding pass, and checklists are grouped by child.** The route, the time with a status pill, and three labeled fields sit above a perforation, with the grouped checklist and the actions below it. Chips leave checklists, and each child's items sit under the child's name.
- **Sheets become one pattern,** with a way out, a set state and two heights, and the reminder sheet gains a state for notifications that are off.
- **Leaving times follow one rule.** Each leaving time is the due time minus the drive minus five minutes, rounded down to five minutes. Several times in the fixtures broke the rule, and this pass corrects them: the afternoon pickups leave at 2:15, orchestra at 6:55, yoga at 2:00 and the checkup at 3:10.
- **C-03b replaces the Monday afternoon board** as a built moment, because the line is the new idea investors most need to see.
- **Three boards are drawn for the wireframes only:** Monday at 2:21 when she is running late, Wednesday at 5:10 with dinner leading Now, and Sunday morning with a task leading Now and the coach raising a Monday clash between therapy and violin.

The spec takes these changes as version 0.15. Every replacement below is written to paste into `docs/story-fixtures.md`, and the quoted current text is copied from versions 3.11 to 3.14 so each passage can be found.

---

## 1. Version line

> *MVP (Lombardi) · Version 3.15 · October 15, 2026 · Charlotte and Edward only*

## 2. Section 1, "Terms used in this document"

Replace the Departure row with:

> | Departure | A leg she travels, from wherever she is to the next stop, with or without the children. Today shows the leg she leaves on next at the top, under Now, with its leaving time in large type. A child leaving home with someone else, such as Alexis with the Parks, is also a departure, because the checklist is hers. |

Add these rows after the Departure row:

> | Run | The stops she drives in order before she is home again, such as Westview, then Cedar Grove, then Brightwater. Each stop has a time she must be there and a time she leaves. |
> | Leave sheet | The sheet that opens from the departure time on Today. It draws her run as a line of stops, lets her change when she leaves any stop, and holds the coach's Plan B and Plan C at its foot. |
> | Plan B and Plan C | The coach's ready backups for a leg or an item that goes wrong. They sit at the foot of the Leave sheet, each with one button. |
> | Sheet | A panel that rises over the screen for a short decision about something on it, such as setting a reminder, and returns her to the same place when it closes. |

## 3. Section 2, "Nothing is ever settled"

Current sentence, at the end of the paragraph headed **Accepting the coach's recommendation from Today.**:

> The button is a shortcut to the recommended option, and "Other options" opens the coach's full message on the Coach tab with every option it considered, so she can always choose another.

Replace with:

> The button is a shortcut to the recommended option. "Other options" opens the Leave sheet on Today, scrolled to the coach's Plan B and Plan C, so she can choose another without leaving Today. A Why link in the sheet opens the coach's full message on the Coach tab, with every option and its reasoning.

Add this paragraph after it:

> **The coach keeps backups ready.** For any leg or item the coach has worked out, it holds the current plan and up to two ranked backups, Plan B and Plan C, before anything goes wrong. They sit at the foot of the Leave sheet, so she reaches them in one tap from Now when she sees a problem first, and through "Other options" when the coach sees it first. Each backup is one line from the coach and one button. A backup that involves another person is an ask, not a fact: choosing it opens a draft in her voice, and the item shows Asked until the person answers. At least one backup depends on nobody else saying yes, wherever one exists, and when there are two it is Plan C. Backups respect the rules on the school card, so a plan that needs a pickup note after the school's deadline is never offered. When there is no honest backup, the sheet says so rather than padding the list. The coach still never finds or recommends providers, so when nobody in her plan can help, the sheet offers Ask my village.

## 4. Section 2, "Today shows today"

### The list of four parts

Current item 1:

> 1. **Now** shows the next departure, with its time in large type, and beneath it the checklist, two actions and a line with the drive.

Replace with:

> 1. **Now** shows the next thing today that needs her at a set time, usually the next leg she travels, with its time in large type, and beneath it the checklist, the actions and a line with the drive. When nothing timed is left, Now shows her leading task, and when there is no task, a quiet line. "Now, from one moment to the next" sets out every state.

### Later today

Add this sentence to the end of the paragraph headed **Later today is a list.**:

> Each row shows the time the thing itself starts, such as 8:30 am for Mallory at Westview, and the leaving time belongs to Now, Tomorrow starts and the Leave sheet. When nothing is left later today, the heading stays with its count, such as "5 done today", and no rows. When nothing was planned at all, Later today is hidden.

### A new subsection after "Now: reminders and directions"

Add this subsection:

> ### Now, from one moment to the next
>
> Now answers one question: what needs her next. It follows a single order. The next thing today with a set time that needs her leads Now. When no timed thing is left, her leading task leads it. When there is no task either, Now shows a quiet line.
>
> **What leads Now.** A leg she drives leads Now, and so does a child leaving home with someone else, because the checklist is hers to do, as when Alexis leaves with the Parks in C-03. Her own trips lead it too, such as yoga or her conference. A timed thing at home, such as dinner with Claire, leads Now when no leg comes before it, with Remind me as its only action. Three kinds of item never lead her Now. Someone else's trip that does not start from her home, such as Edward's pickup at Cedar Grove, stays in Later today with his initial and answer. An item that is Asked or owned by Nobody yet stays in Later today, and if an Asked item is still unanswered at the time she would have to leave, the coach card asks her to decide. An item with no known time stays in Later today with "Start time needed", and the coach card asks for the time.
>
> **A leg passes through four stages.** Before the leaving time, the countdown reads "in 15 min", or "in 2 hr 30 min" for anything an hour or more away. From the leaving time it reads "Time to leave", and Remind me goes away, because a reminder can no longer help. The five minutes MVP adds to each drive mean she is still on time for five minutes after that. Once those five minutes are used up, the Arrive field shows when she will really arrive, such as 2:31 against a 2:30 pickup, in the warning ink with a clock icon. The pass states the time plainly and never scolds. When the leg's destination is due, the leg leaves Now, adds to the done count beside Later today, and the next leg on her line takes over from that stop. Now never goes back to home unless home is the next stop, and MVP never asks her to tap that she has left or arrived.
>
> **The next station.** Under the route, a line in Meta names the next stop on her run and when she is due there, such as "Then Cedar Grove, 2:45". When the next leg starts a separate run that leaves within 30 minutes, the line names it instead, such as "Then at 8:15, you leave for Westview". When nothing follows soon, there is no line.
>
> **Marks on the leg.** A leg whose item has changed carries the Changed mark beside its route until she opens the Leave sheet. A leg in conflict carries "Conflicts with" and the other item, and the coach card holds the fix, labeled "Your coach · for today" when the conflict is today's.
>
> **Tasks.** A task joins a leg's checklist, under "Before you leave", when the seed marks it for that trip, as "Call Brightwater" does on Wednesday. Every other task is an anytime task, which shows "Anytime" in the time column of Later today. When no timed thing is left, the leading task takes Now. A Meta line comes first, "Nothing to drive to today." or "Nothing else to drive to today.", then the task in the Title style, then its steps as a checklist when she wrote any, and a line saying what depends on it when the coach knows. The actions are Remind me and Ask someone. When several tasks are left, the one with the earliest deadline leads, then the one something else depends on, then the one she added first. Ticking off a task that leads Now counts it as done.
>
> **The quiet line.** When nothing timed and no task is left, Now shows one line, "Nothing else today.", and the coach card and Later today rise beneath it.
>
> **The done count.** Before noon it reads "2 done this morning". From noon it reads "3 done today".
>
> **Tonight has no Now.** Ready tonight takes its place on the paper surface. Each row in Tomorrow starts opens the Leave sheet for that leg, so she can change tomorrow's first leaving time the night before.

### A new subsection after "Now, from one moment to the next": Now as a boarding pass

*Added after Greg's review on October 15, 2026, which found Now's lines stacked at equal weight with no grouping, and the checklist's checkbox, chip and item fighting for one row.*

Add this subsection:

> ### Now reads like a boarding pass
>
> When Now holds a leg she travels, it is laid out like a boarding pass. A pass puts each fact in a fixed place with a small label, so a parent learns where to look once and then reads one field instead of a sentence. Only the values change from one leg to the next.
>
> **The route comes first.** The top line names where she leaves from and where she is going, such as "Home → Westview", in Body strong, with the arrow read aloud as "to". The line in Meta beneath it names the next station, such as "Then Cedar Grove, 2:45". The route carries the chevron, and tapping it or the time opens the Leave sheet. The chevron appears only on a leg she travels herself. A pass for a child leaving with someone else, such as Alexis with the Parks, has no chevron, and its route and time do nothing when tapped, because nothing on the Leave sheet is hers to change on that leg.
>
> **The time and its status share a line.** The leaving time is set in Display. Beside it, at the right, a status pill gives the countdown: "in 10 min", "in 2 hr 30 min", or, from the leaving time, "Time to leave", which is filled so the change does not rely on color. The pill is the only part of the pass that moves through the stages of a leg.
>
> **Three fields hold the facts.** Under the time sit three fields, each a label in Meta over a value in Body strong. Drive gives the minutes for this leg. Arrive gives when she reaches the stop. The third gives the stop's own time, labeled "Pickup" for a pickup and "Starts" for anything else. Before the leaving time, Arrive is worked out from the leaving time, and from the leaving time onward it is worked out from now, so once the five minutes are used up it shows when she will really arrive. When Arrive falls after the stop's time, the value is set in the warning ink with a clock icon, so lateness shows without a sentence and without relying on color. For a child leaving with someone else, the fields are With, such as "The Parks", and Starts, with no Drive or Arrive.
>
> **A perforation separates the trip from what she does before it.** A dashed line runs across Now under the fields, and the grouped checklist and the actions sit below it. The perforation is the one line drawn inside Now, as the rail is the one line drawn inside the Leave sheet, and Now still has no border, so it is not a card.
>
> **The actions sit at the foot.** Remind me and Directions keep their rules. A set reminder shows only in its button, such as "Reminder at 2:00", and the drive line of earlier versions is retired, because Drive and Arrive carry it.
>
> **Only a leg gets the pass.** A timed thing at home, a task leading Now and the quiet line have no route and no fields, so they keep the plain layout set out above.

### A new subsection after "Now reads like a boarding pass": Now stays in place

*Added after Greg's review of the wired Today prototype on October 15, 2026.*

Add this subsection:

> ### Now stays in place
>
> Today has two surfaces, and they move differently. The header and Now sit on paper and stay in place. The coach card, Later today and MVP Recommends sit on the canvas sheet, and when she scrolls, the sheet rises over Now and the header and covers them. Scrolling back down uncovers both exactly as she left them. Now is what she acts on next, so it keeps its place on the screen, and the rest of the day comes up over it only when she reaches for it.
>
> **The sheet covers the header too.** The sheet can rise to the top of the screen, over the dateline, the phase of the day and the monogram. Scrolling back to the top brings all three back, along with Settings and the household switcher, which open from the monogram.
>
> **A tall Now scrolls before it stops.** When the header and Now together are taller than the space above the capture bar, they first scroll up until Remind me and Directions sit just above the capture bar, and then they hold still while the sheet rises over them. Every part of Now can always be reached.
>
> **In the evening the same rule applies.** Ready tonight stays in place on paper, and Tomorrow starts rises over it.
>
> **Sheets are unchanged.** The reminder sheet, the Leave sheet and every other sheet still rise over the whole screen, with the scrim behind them.

## 4a. Section 2, "Today shows today": checklists are grouped by child

*Added the same day, after Greg's review of the checklist.*

Replace the paragraph headed **The checklist sits under Now.** with:

> **The checklist is grouped by who it belongs to.** Under Now's perforation, in Ready tonight and under each departure in Tomorrow starts, the items are grouped. Each child's items sit under the child's first name, set in Body strong in the children's green, and "Both" or "All three" heads the items that go with every child. Her own tasks sit under "Before you leave", set the same way in ink. A row is the item alone, so every item starts at the same left edge and a long item wraps under itself. The check is a circle in a fixed column at the left, and the whole row is the target, so she can tick an item anywhere along it. A ticked item stays in place, dimmed, with its circle filled, so she can see what is packed and undo a slip. A group shows no count, because a group shows its own length.

In section 2, "How people are shown", replace the paragraph headed **Chips lead each row.** with:

> **Chips lead each row in a list of items,** such as Later today, the game plan and requests, as in "[Mallory] Pick up at Westview". Checklists are grouped instead, under the child's first name in the children's green, and their rows carry no chips.

### A new subsection after "Now, from one moment to the next"

Add this subsection:

> ### The Leave sheet
>
> Today changes one kind of thing: when she leaves. The Leave sheet is where she does it. It opens when she taps the large departure time or the leg line under it, which carries a chevron on any leg she travels herself, and from a Tomorrow starts row in the evening. Notes, owners and moving an item to another day stay in the game plan, so Today stays quiet and changing a time never turns into busy work.
>
> **The sheet draws her run as a line.** Each stop is a station on a rail, in order: the place, the item there with its chip and the time it starts, and "Leave at" with the time she leaves that stop. Home is a station only when the run starts or ends there. The last station reads "Back about" and the time she gets home, because that time is an estimate. The rail appears inside this sheet only, and Today's own surface keeps no rail.
>
> **She can change when she leaves any stop.** Tapping a "Leave at" time opens a time picker in place. As she turns it, a line under that station gives the result, such as "You reach Westview at 2:25, five minutes before pickup." or "You reach Studio Ten at 4:20, five minutes after ballet starts." A late choice is stated and never blocked. The change ripples down the line, so later stations show their new times. Save keeps the change, and Close leaves everything as it was. A change she makes carries no Changed mark, a reminder she has set moves with the new leaving time, and a change that runs into another item raises "Conflicts with" on both and brings the coach card.
>
> **The start time changes only on her own items.** A station whose item is hers carries a "Change the start time" link. A calendar item reads "Change this in Google Calendar." instead, and its leaving time can still change, because the leaving time belongs to MVP and never to her calendar. Items someone else owns, and items someone has answered, are changed in the game plan.
>
> **Plan B and Plan C sit at its foot,** under the heading "Other ways this could go", when the coach has written backups for this run. "Other options" on the coach card opens the sheet scrolled to them.

### A new subsection after "The Leave sheet"

Add this subsection:

> ### Sheets
>
> A sheet holds a short decision about something already on the screen, and closing it returns her to the same place. Anything she reads or works in, such as a draft or an article, is a page with Back instead. After she acts, the sheet closes and the screen shows the result, such as the button reading "Reminder at 2:00". A sheet never opens another sheet, and no confirmation follows a sheet.
>
> Every sheet has a grabber and a Close icon at its top right, with the accessible label "Close", so she can always leave without acting. Closing never changes anything. Below them sit the heading and, when it helps, a line in Meta naming what the sheet is about. The body is one of four kinds: choices, which are radio rows; a single field, such as a time picker; a line of stations; or a list of actions, each a line with one button. The footer holds the primary button and, when there is one, a link for a second action, such as "Remove reminder".
>
> A sheet comes in two heights. Most fit their content. The Leave sheet is tall and scrolls. A sheet reopened on something she already chose shows the choice selected, and its button changes to say so, such as "Update reminder".

### "Now: reminders and directions"

Add this paragraph after the paragraph headed **The reminder arrives as a notification,**:

> **Reminders need notifications on.** She allows notifications on 0j when she leaves the reminder ticked. If she did not, Remind me still opens its sheet, with a line above the choices reading "Notifications are off, so this reminder can't reach you." When she has never been asked, Set reminder brings up the phone's own request. When she has said no before, the phone will not ask again, so the line carries an "Open settings" link. The reminder is kept either way and goes off once notifications are on. Once a reminder has gone off, the button reads Remind me again.

Replace the sentence in the paragraph headed **The reminder arrives as a notification,** that begins "It says when to leave and where to" with:

> It says when to leave, naming the first stop and the last stop before home, such as "Leave in 15 min for Westview, then Brightwater", carries the checklist in a sentence, and offers Directions and a five-minute snooze.

Delete the paragraph headed **The line under the actions gives the drive.** Its job passes to the Drive and Arrive fields on the pass ("Now reads like a boarding pass"). The driving time is still worked out from her zip code for a leg from home, and from the travel times between places for a leg from anywhere else.

## 5. Section 2, "Dates, times and places"

Replace the paragraph beginning "Times are written with am and pm" with:

> Times are written with am and pm, in the time zone America/Los_Angeles. Every person, place and organization is invented. Travel times between places are fixed in the seed file rather than calculated, and they stand for the estimates the real product works out from her zip code and from the places' addresses.
>
> **Every leaving time follows one rule.** A leaving time is the time she is due at the next stop, minus the drive, minus five minutes, rounded down to the nearest five minutes. Mallory starts at Westview at 8:30, ten minutes from home, so she leaves at 8:15. Alexis's orchestra starts at 7:15, twelve minutes away, so she leaves at 6:55. A leg never leaves a stop before that stop is due, because a child at a pickup is not ready earlier, so a leg from a pickup leaves at the later of the two times, as when she leaves Westview at 2:30 for Cedar Grove. The line then shows the arrival at the next stop honestly, even when the five minutes do not fit.

## 6. Section 3, "What makes her week hard"

Current text:

> On Tuesday and Thursday mornings Alexis has orchestra at 7:15 am, so Charlotte drives Alexis at 7:00 am and comes back for Mallory at 8:15 am.

Replace with:

> On Tuesday and Thursday mornings Alexis has orchestra at 7:15 am, so Charlotte drives Alexis at 6:55 am and comes back for Mallory at 8:15 am.

## 7. Section 3, "The week in the game plan"

Add this sentence to the end of the paragraph before the table:

> A school run shows the time school starts, such as 8:30 am at Westview, and the seed holds the run with its stops, due times and leaving times, which Today uses.

Change these rows. The other columns are unchanged.

| Day | Was | Now |
| ----- | ----- | ----- |
| Monday to Thursday | 8:15 am · Mallory · To Westview | 8:30 am · Mallory · To Westview |
| Tuesday and Thursday | 7:00 am · Alexis · Orchestra, Cedar Grove | 7:15 am · Alexis · Orchestra, Cedar Grove |

The Monday and Wednesday carpools stay at 7:40 am, because 7:40 is when the carpool collects Alexis from home. Friday's carpool also stays at 7:40 am, and its run, which collects Ada and Sophie, is not written, because no Friday moment shows Today (Appendix B item 55).

## 8. Section 3, "Travel times"

Add these rows to the table:

> | Cedar Grove Elementary, Oak Street gate | Brightwater Family Therapy | 20 |
> | Brightwater Family Therapy | Lakeside Strings | 15 |

Replace the sentence before the table with:

> These are the estimates MVP works out from Charlotte's zip code, 00123, for legs from home, and from the places themselves for legs between them. The seed holds them as fixed values, and each leaving time follows the rule in "Dates, times and places".

## 9. Section 3, "The moments"

Add this row after C-03:

> | C-03b | Monday, Oct. 12, 2:00 pm | Charlotte's reminder goes off, and she collects both girls and takes them to Brightwater, a run that never passes home. | The afternoon as a line, the Leave sheet, and Now stepping from stop to stop | Core |

## 10. C-01

Current text in the first option:

> You leave for yoga at 2:05 and you are back at 3:30 to take Mallory to ballet.

Replace with:

> You leave for yoga at 2:00 and you are back at 3:30 to take Mallory to ballet.

Current text in the coach's line after Charlotte chooses:

> You leave for Willow at 2:05, you are home at 3:30, and you leave with Mallory and the ballet bag at 3:55.

Replace with:

> You leave for Willow at 2:00, you are home at 3:30, and you leave with Mallory and the ballet bag at 3:55.

## 11. C-03

Replace "Today, as shown: now" with:

> > Home → Cedar Grove
> >
> > 7:40 am
> > in 15 min
> >
> > With The Parks · Starts 8:00
> >
> > [perforation]
> >
> > Alexis
> > Lunch
> > Library book, due today
> > Water bottle
> >
> > [Remind me]

Replace the note after it with:

> *Alexis rides with the Parks, so the pass shows With and Starts instead of Drive and Arrive, and Now offers only Remind me.*

In "Today, as shown: later today", replace the first row with:

> | 8:30 am | Mallory | To Westview · B day |

Current text in the note after MVP Recommends:

> At 7:40 am Alexis's departure leaves Now, and Mallory's moves up with its own checklist: [Mallory] Lunch, [Mallory] Sneakers, it's a motor skills day, and [Mallory] Reading folder, signed. Charlotte drives this one, so Now gains Directions and the line "10 min drive, 1 stop". Later today then shows "1 done this morning".

Replace with:

> At 7:40 am the Parks collect Alexis, so Alexis's departure leaves Now, and Mallory's moves up: 8:15 am, "in 35 min", with Mallory's own group under the perforation: Lunch, "Sneakers, it's a motor skills day" and "Reading folder, signed". Charlotte drives this one, so the pass reads "Home → Westview", with Drive 10 min, Arrive 8:25 and Starts 8:30, and Now gains Directions. Later today then shows "1 done this morning". If she taps the departure time, the Leave sheet shows her morning run, home to Westview and back, and she closes it without changing anything, because nothing in Monday morning gives her a reason to leave later.

## 12. "Monday afternoon, for the wireframes only", replaced by C-03b

Delete the section "Monday afternoon, for the wireframes only" and put this moment in its place.

> ## C-03b · Monday, Oct. 12, 2:00 pm · The afternoon run
>
> *This is the afternoon as a line. Charlotte collects Mallory at Westview and Alexis at Cedar Grove, and takes both girls straight to Alexis's therapy at Brightwater, so the run never passes home until it ends. She set a reminder from Now at 1:40 pm, and the moment opens on it. Now shows one leg at a time and steps down the line as each stop comes due.*
>
> **The reminder, as shown · 2:00 pm**
>
> > Leave in 15 min for Westview, then Brightwater
> >
> > Take Mallory's book for the waiting room at Brightwater.
> >
> > [Directions] [Snooze 5 min]
>
> **Today, as shown: the header · 2:05 pm**
>
> > Monday, Oct. 12
> >
> > [sun icon] This afternoon
>
> **Today, as shown: now**
>
> > Home → Westview
> > Then Cedar Grove, 2:45
> >
> > 2:15 pm
> > in 10 min
> >
> > Drive 10 min · Arrive 2:25 · Pickup 2:30
> >
> > [perforation]
> >
> > Mallory
> > A book for the waiting room at Brightwater
> >
> > [Remind me] [Directions]
>
> *The reminder has gone off, so the button reads Remind me again. Directions opens her maps app with Westview, Cedar Grove and Brightwater in order.*
>
> **Today, as shown: later today**
>
> *Beside the heading: 2 done this morning.*
>
> | Time | Chips | Item |
> | ----- | ----- | ----- |
> | 2:30 pm | Mallory | Pick up at Westview |
> | 2:45 pm | Alexis | Pick up at Cedar Grove |
> | 3:30 pm | Both | Brightwater, with the calendar mark |
>
> **Today, as shown: MVP Recommends**
>
> > MVP Recommends · 3 min read
> >
> > Fifteen minutes with the teacher: making a conference count
> >
> > Because Cedar Grove conferences are this week.
>
> *There is no coach card, because the coach needs nothing from her this afternoon. She taps the departure time, and the Leave sheet rises.*
>
> **Today, as shown: the Leave sheet · 2:06 pm**
>
> > When to leave
> >
> > This afternoon · 3 stops
>
> | Station | Item | Leave |
> | ----- | ----- | ----- |
> | Home | | Leave at 2:15 pm |
> | Westview | 2:30 pm · [Mallory] Pick up at Westview | Leave at 2:30 pm |
> | Cedar Grove | 2:45 pm · [Alexis] Pick up at Cedar Grove | Leave at 3:05 pm |
> | Brightwater | 3:30 pm · [Both] Therapy, with the calendar mark | Leave at 4:15 pm |
> | Home | | Back about 4:35 pm |
>
> > [Save]
>
> *Save stays inactive until she changes a time. Brightwater's start time reads "Change this in Google Calendar." because the session comes from her calendar. No backups are written for this run, so the sheet has no Plan B or Plan C. Charlotte closes the sheet without changing anything.*
>
> **Today, as shown: now, at 2:31 pm**
>
> *Westview is due, so the first leg leaves Now and the next leg takes over from Westview.*
>
> > Westview → Cedar Grove
> > Then Brightwater, 3:30
> >
> > 2:30 pm
> > Time to leave
> >
> > Drive 12 min · Arrive 2:42 · Pickup 2:45
> >
> > [perforation]
> >
> > [Directions]
>
> *Beside Later today: 3 done today. Remind me has gone, because the leaving time has come.*
>
> **Today, as shown: now, at 2:46 pm**
>
> > Cedar Grove → Brightwater
> > Then home, about 4:35
> >
> > 3:05 pm
> > in 19 min
> >
> > Drive 20 min · Arrive 3:25 · Starts 3:30
> >
> > [perforation]
> >
> > Mallory
> > A book for the waiting room at Brightwater
> >
> > [Remind me] [Directions]
>
> *Beside Later today: 4 done today. The book stays on the checklist until she ticks it.*
>
> **Today, for the wireframes only: running late · 2:21 pm**
>
> *This board is not part of the moment. It shows the first leg when Charlotte has not left by the end of its five minutes.*
>
> > Home → Westview
> > Then Cedar Grove, 2:45
> >
> > 2:15 pm
> > Time to leave
> >
> > Drive 10 min · Arrive 2:31 · Pickup 2:30
> >
> > [perforation]
> >
> > Mallory
> > A book for the waiting room at Brightwater
> >
> > [Directions]
>
> *Arrive is set in the warning ink with a clock icon, because 2:31 falls after the 2:30 pickup. From 2:15 to 2:20 the board reads the same with Arrive at 2:25 to 2:30 in ordinary ink, because the five minutes MVP added mean she is still on time.*

## 13. C-06

### Now

Replace "Today, as shown: now" with:

> > Home → Westview
> > Then Cedar Grove, 2:45
> >
> > 2:15 pm
> > in 2 hr 30 min
> >
> > Drive 10 min · Arrive 2:25 · Pickup 2:30
> >
> > [perforation]
> >
> > Alexis
> > Dance bag
> >
> > Before you leave
> > Call Brightwater
> >
> > [Remind me] [Directions]

### Other options

Current text:

> *The button on the card is a shortcut to the coach's recommended option, and "Other options" is the full choice. The product offers both routes, and the demo takes the second. Charlotte taps Other options, and the coach's full message opens on the Coach tab, quoting Edward's answer and setting out the three ways Thursday could go.*

Replace with:

> *The button on the card is a shortcut to the coach's recommended option, and "Other options" holds the backups. The product offers both routes, and the demo takes the second. Charlotte taps Other options, and Thursday's Leave sheet rises on Today, scrolled to the coach's backups.*
>
> **Today, as shown: Thursday's Leave sheet, at its foot**
>
> > When to leave
> >
> > Thursday afternoon
> >
> > Other ways this could go
> >
> > Plan B · Min-jung collects Hana at Westview at 2:30 and lives two streets from you, so she can bring Mallory home by 2:45. You keep the 2:15 class.
> > [Ask Min-jung]
> >
> > Plan C · Collect Mallory yourself and skip yoga this week. Thursday runs like an ordinary Thursday, and Mallory rides with you to ballet as usual.
> > [Skip yoga this week]
> >
> > Why
>
> *Above the backups, the sheet draws Charlotte's Thursday afternoon from the week table and the travel times: home, leaving at 2:00 pm, then Willow for yoga at 2:15 pm with "Conflicts with Mallory's pickup", then home, back about 3:25 pm. Plan B is an ask, so choosing it opens the draft below and Mallory's pickup shows Min-jung's initial and an hourglass once it is sent. Plan C depends on nobody. Why opens the coach's full message on the Coach tab, which is unchanged.*

Then replace the text from "*Charlotte picks the second option." to the end of the Westview note, so the coach's line after her choice appears on the card. Current text:

> *Charlotte picks the second option. She knows things the coach does not, in this case that the 12:15 class is not one she likes, and the demo shows that choosing against the recommendation is normal. The coach lays out the new version and points out something only she can do.*
>
> > Mallory goes home with Min-jung once Min-jung says yes. Min-jung collects Mallory with Hana at 2:30 and drops Mallory at the house by 2:45, where Edward and Alexis are. The 2:15 class stays on the plan. Westview only releases Mallory to people on the pickup list, so Westview needs a note from you by 11:00 on Thursday.
> >
> > [Ask Min-jung] [Note to Westview]

Replace with:

> *Charlotte taps Ask Min-jung under Plan B. She knows things the coach does not, in this case that the 12:15 class is not one she likes, and the demo shows that choosing against the recommendation is normal. The sheet closes and Min-jung's draft opens, as below. When she has sent it, she is back on Today, and the coach card says how Thursday stands and what only she can do.*
>
> **Today, as shown: the coach card after Plan B**
>
> > Your coach · for Thursday
> >
> > Mallory goes home with Min-jung once Min-jung says yes. Westview only releases Mallory to people on the pickup list, so Westview needs a note from you by 11:00 on Thursday.
> >
> > [Note to Westview]
> > Opens an email for you to send to Westview
> >
> > Game plan updated
>
> *The card has no Undo, because the request to Min-jung has already gone. The full version of the day, with Min-jung dropping Mallory at the house by 2:45 and the 2:15 class kept, is in the coach's message on the Coach tab.*

Keep the drafts to Min-jung and Westview as they are.

### The reminder sheet, the set state and the notification

Replace the reminder sheet with:

> > Remind me to leave
> >
> > For 2:15 pm · Westview
> >
> > At 2:00 · 15 min before
> > At 1:45 · 30 min before
> > When it's time to leave · at 2:15, with traffic checked
> >
> > [Set reminder]

Current text:

> *Once set, the button reads "Reminder at 2:05" and the line under the actions reads "15 min before you leave · 22 min drive, 2 stops". At 2:05 pm the notification arrives.*
>
> > Leave in 15 min for Westview and Cedar Grove

Replace with:

> *Once set, the button reads "Reminder at 2:00", and the pass carries the reminder nowhere else. Reopening the sheet shows 15 min before selected, the button "Update reminder" and the link "Remove reminder". At 2:00 pm the notification arrives.*
>
> > Leave in 15 min for Westview, then Cedar Grove

The notification's body and actions are unchanged.

## 14. C-06b

Replace "Today, as shown: now" with:

> > Home → Westview
> > Then Cedar Grove, 2:45
> >
> > 2:15 pm
> > in 1 hr
> >
> > Drive 10 min · Arrive 2:25 · Pickup 2:30
> >
> > [perforation]
> >
> > Alexis
> > Dance bag
> >
> > Before you leave
> > Call Brightwater
> > Send Westview the pickup note
> >
> > [Remind me] [Directions]

In the coach's full message, current text:

> You collect Mallory at Westview at 2:30 and Alexis at Cedar Grove at 2:45, and you leave home for Northside at 3:15.

Replace with:

> You collect Mallory at Westview at 2:30 and Alexis at Cedar Grove at 2:45, and you leave home for Northside at 3:10.

Current text:

> *Other options opens the coach's full message on the Coach tab, with both ways Friday could go.*

Replace with:

> *Other options opens Friday's Leave sheet on Today, scrolled to the coach's backups. There is one honest backup, and the sheet says so.*
>
> **Today, as shown: Friday's Leave sheet, at its foot**
>
> > When to leave
> >
> > Friday afternoon
> >
> > Other ways this could go
> >
> > Plan B · Call Northside for a time after 3:45 or on another day, and Friday stays as it is.
> > [Call Northside]
> >
> > I don't see another way that keeps both on Friday.
> >
> > Why
>
> *Above the backup, the sheet draws Friday afternoon as it stands: home, then Cedar Grove for Alexis at 2:45, then home, then Northside for the checkup at 3:30 with "Conflicts with tutoring". Call Northside opens her phone app with Northside's number, staged in the prototype, and a call leaves no task. Why opens the coach's full message on the Coach tab.*

## 15. C-07

Replace "Today, as shown: ready tonight" with:

> > Ready tonight
> >
> > Alexis
> > Violin, by the door
> > Orchestra folder, by the door
> >
> > Mallory
> > Ballet bag packed for 3:55 pm
> >
> > Both
> > Lunches

*The violin and the folder become two items, because each is packed on its own and ticked on its own.*

Replace "Today, as shown: tomorrow starts" with:

> | Time | Departure | Checklist |
> | ----- | ----- | ----- |
> | 6:55 am | You take Alexis to orchestra | [Alexis] Violin · [Alexis] Orchestra folder · [Alexis] Lunch · Early day, out at 1:30 pm |
> | 8:15 am | You take Mallory to Westview · E day | [Mallory] Lunch |

Add after it:

> *Each row opens the Leave sheet for that leg, so she can change tomorrow's leaving time tonight. On screen, the checklist under each departure is grouped by child, as in Now, so the chips in the table above become group headings.*

## 15a. C-00, Ready tonight on her first board

*Added the same day, at Greg's direction. The checklist rule in section 4a names Ready tonight, and C-00's board was the one place still drawn as a table with a chip.*

Current text:

> **Today, as shown: ready tonight**
>
> | Chips | Ready tonight |
> | ----- | ----- |
> | Mallory | Sneakers by the door |

Replace with:

> **Today, as shown: ready tonight**
>
> > Ready tonight
> >
> > Mallory
> > Sneakers by the door

Tomorrow starts on the same board is unchanged, because its rows are a list of items, where chips still lead each row.

## 16. "The day in full: Thursday"

Replace these rows. The others are unchanged.

> | 6:55 am | Charlotte | Leaves with Alexis for orchestra. Mallory stays home with Edward. | |
> | 7:20 am | Charlotte | Home | |
> | 2:00 pm | Charlotte | Leaves for Willow Yoga | |

Delete the row "7:25 am · Charlotte · Home".

## 17. "If Min-jung says no"

Add after the coach card:

> *Other options opens Thursday's Leave sheet with one backup left. The coach's first recommendation is already on the card, and Min-jung has said no, so the sheet holds only the plan that depends on nobody.*
>
> > Plan B · Collect Mallory yourself and skip yoga this week. Thursday runs like an ordinary Thursday, and Mallory rides with you to ballet as usual.
> > [Skip yoga this week]
> >
> > I don't see another way for Thursday.

## 18. New boards for the wireframes only

Add this section after "If Min-jung says no". None of these boards is a moment, and none is built in review build 1.

> ## Boards for the wireframes only
>
> *These boards show states of Now that no moment reaches. Each is drawn so the engineer can build the state, and none is presented.*
>
> ### Wednesday, Oct. 14, 5:10 pm · A timed thing at home
>
> *Dance at Studio Ten ran from 3:45 to 4:45 pm, and Charlotte and both girls are home by 5:00. No leg is left today, and dinner with Claire is the next thing with a time, so it leads Now. Everyone asked about Thursday has answered, so there is no coach card.*
>
> > Wednesday, Oct. 14
> >
> > [sun icon] This afternoon
> >
> > 6:30 pm
> >
> > in 1 hr 20 min
> >
> > Dinner with Claire
> >
> > [Remind me]
>
> *Later today shows its heading and "5 done today", with no rows. MVP Recommends shows the conference article, because its reason holds until Thursday. Remind me opens the sheet below.*
>
> > Remind me
> >
> > For 6:30 pm · Dinner with Claire
> >
> > At 6:15 · 15 min before
> > At 6:00 · 30 min before
> >
> > [Set reminder]
>
> ### Sunday, Oct. 18, 10:30 am · A task leads Now
>
> *Sunday has nothing in the game plan except one task Charlotte added herself on Saturday, with two steps of her own. The washing machine is leaking again. With no timed thing today, the task leads Now. The coach card concerns Monday: violin returns to Lakeside Strings at 4:00, and it runs into Alexis's therapy at Brightwater at 3:30, a clash in Alexis's ordinary week that this week's move to Tuesday hid.*
>
> > Sunday, Oct. 18
> >
> > [sunrise icon] This morning
> >
> > Nothing to drive to today.
> >
> > Fix the washing machine
> >
> > Check the drain filter
> > Run an empty rinse cycle
> >
> > [Remind me] [Ask someone]
>
> > Your coach · for Monday
> >
> > Violin is back at Lakeside Strings on Monday at 4:00, and Alexis has therapy at Brightwater at 3:30, so the two overlap every Monday. I'd ask Lakeside for 4:45 or later, so Alexis can go straight from therapy.
> >
> > [Text Lakeside]
> > Opens a text for you to send to Lakeside Strings
> >
> > Other options
>
> *Later today is hidden, because nothing else was planned and nothing is done yet. There is no MVP Recommends article, because nothing in Sunday gives one a reason. In the game plan, Monday's therapy and violin both show "Conflicts with" the other every Monday from next week.*
>
> *Remind me opens the sheet below. It offers times of day, because the task has none of its own.*
>
> > Remind me
> >
> > Fix the washing machine
> >
> > At 11:30 am · in an hour
> > At 2:00 pm · this afternoon
> > At 6:00 pm · this evening
> >
> > [Set reminder]
>
> *Ask someone opens a sheet listing her people who have a mobile number, inner circle first: Edward, Claire, Ms. Reyes, Min-jung Park and Jenna Okafor. She chooses Edward, taps Next, and the coach drafts the request in her voice.*
>
> > Ask someone
> >
> > Fix the washing machine
> >
> > [Next]
>
> > To Edward
> >
> > Can you take a look at the washing machine today? It's leaking again.
> >
> > Edward answers with
> > Sunday · Fix the washing machine · [I've got it] [I can't do this]
> >
> > You send this. MVP never sends anything for you.
> >
> > [Send]
>
> *Text Lakeside on the coach card opens this draft, handed to her messages app, and sending it leaves the task "Text Lakeside about Mondays".*
>
> > To Lakeside Strings
> >
> > Hi, could Alexis move to 4:45 or later on Mondays? Alexis has an appointment at 3:30 that runs until 4:15. Thank you, Charlotte
> >
> > You send this. MVP never sends anything for you.
> >
> > [Send from Messages]
>
> *Other options opens Monday's Leave sheet, scrolled to its one backup.*
>
> > Plan B · Skip violin this Monday. Alexis keeps therapy at Brightwater, and you can settle violin's time once Lakeside answers.
> > [Skip violin on Monday]
> > Opens a text for you to send to Lakeside Strings
> >
> > I don't see another way that keeps both on Monday.
> >
> > Why
>
> ### Sunday, Oct. 18, 11:15 am · The quiet line
>
> *Charlotte ticks both steps and then the task. The task leaves Now and counts as done.*
>
> > Nothing else today.
>
> *The coach card for Monday stays beneath the line until she answers it, and Later today shows its heading with "1 done today" and no rows.*

## 19. Section 4, Today

Replace these rows:

> | Route, at the top of the pass | Where she leaves from, an arrow read aloud as "to", and where she is going, such as "Home → Westview" or "Cedar Grove → Brightwater", followed by a chevron on a leg she travels herself. A child leaving with someone else gets no chevron. For a timed thing at home, the item instead, such as "Dinner with Claire", with no pass. |
> | Status pill, beside the departure time | in 15 min, or in 2 hr 30 min for anything an hour or more away. From the leaving time: Time to leave, filled. |
> | Fields under the time | Drive, with the minutes, such as "Drive 10 min" · Arrive, with the time, such as "Arrive 2:25", in the warning ink with a clock icon when it falls after the stop's time · Pickup, with the time, for a pickup, or Starts, with the time, for anything else · For a child leaving with someone else: With, such as "With The Parks", and Starts |
> | Checklist group headings | The child's first name, such as "Mallory", or "Both" or "All three", in the children's green · Before you leave, in ink, for her own tasks |
> | Reminder sheet | Heading: Remind me to leave · Line: "For" the leaving time and the next stop, such as "For 2:15 pm · Westview" · Choices, with the first preselected: At 2:00 · 15 min before · At 1:45 · 30 min before · When it's time to leave · at 2:15, with traffic checked · Button: Set reminder · When a reminder is already set: the choice selected, the button Update reminder and the link Remove reminder |
> | Reminder once set | The button reads "Reminder at" and the time, such as "Reminder at 2:00", in its active state, until the reminder goes off |
> | Reminder notification | Title: "Leave in 15 min for", the first stop and, when the run has more, "then" and the last stop before home, such as "Leave in 15 min for Westview, then Brightwater" · Body: the checklist as a sentence, such as "Take Mallory's book for the waiting room at Brightwater." · Actions: Directions · Snooze 5 min |
> | Beside "Later today" | The number done so far, shown once anything is done: before noon, such as "2 done this morning", and from noon, such as "3 done today" |
> | Coach card label | "Your coach · for" and the day it concerns, such as "Your coach · for Thursday", beside the coach's dot. "Your coach · for today" when it concerns today. "Your coach" alone when the card concerns no particular day. |
> | Coach card secondary action | Other options, which opens the Leave sheet on Today scrolled to the coach's backups. A card with only one way forward names the alternative instead, such as "Not this week" or "Remind me Monday". |

Add these rows:

> | The next station, under the route | "Then", the next stop and when she is due there, such as "Then Cedar Grove, 2:45", or "Then home, about 4:35". When a separate run leaves within 30 minutes: "Then at" the time, such as "Then at 8:15, you leave for Westview". |
> | Now with no timed thing left | Line in Meta: Nothing to drive to today. or Nothing else to drive to today. · The task in the Title style · Its steps as a checklist · Actions: Remind me · Ask someone |
> | Now with nothing left | Nothing else today. |
> | Anytime task in Later today | Anytime, in the time column |
> | Leave sheet | Heading: When to leave · Line: the part of the day and the number of stops, such as "This afternoon · 3 stops", or the day, such as "Thursday afternoon" · For each station: the place, the item with its chips and start time, and "Leave at" and the time · Last station: "Back about" and the time · Under a station she is changing: "You reach", the stop and the time, then how that sits against the item, such as "You reach Westview at 2:25, five minutes before pickup." or "You reach Studio Ten at 4:20, five minutes after ballet starts." · Link on her own items: Change the start time · On a calendar item: Change this in Google Calendar. · Button: Save |
> | Backups in the Leave sheet | Heading: Other ways this could go · Each backup: "Plan B ·" or "Plan C ·" and the coach's line, then one button named for what it does · When there is no second honest backup: the coach's line saying so, such as "I don't see another way that keeps both on Friday." · Link: Why |
> | Every sheet | A grabber · A Close icon at the top right, with the accessible label "Close" |
> | Reminder sheet with notifications off | Above the choices: Notifications are off, so this reminder can't reach you. · When she has said no before: the link Open settings |
> | Reminder sheet for a timed thing at home | Heading: Remind me · Line: "For", the time and the item, such as "For 6:30 pm · Dinner with Claire" · Choices: At 6:15 · 15 min before · At 6:00 · 30 min before · Button: Set reminder |
> | Reminder sheet for a task | Heading: Remind me · Line: the task · Choices: "At", a time and how far off it is, such as "At 11:30 am · in an hour", "At 2:00 pm · this afternoon", "At 6:00 pm · this evening" · Button: Set reminder |
> | Ask someone sheet | Heading: Ask someone · Line: the task · Choices: her people with a mobile number, inner circle first · Button: Next |
> | Coach card when an asked item is unanswered at her leaving time | The person's name, "hasn't answered about", the item, and what she can do herself, such as "Min-jung hasn't answered about Mallory's pickup at 2:30. Leave at 2:15 and you can collect Mallory yourself." · Button: I'll collect Mallory · Line: Updates your game plan |

## 20. Appendix A

Add these rows to Charlotte and Edward's table:

> | Leaving times | Every leaving time is the due time minus the drive minus five minutes, rounded down to five minutes. A leg never leaves a stop before that stop is due. This moves the afternoon pickups to 2:15 pm, orchestra to 6:55 am, yoga to 2:00 pm and the checkup to 3:10 pm. | Several times in versions 3.11 to 3.14 broke the five-minute rule. One rule, applied everywhere, lets the engineer compute every time rather than copy it (issues T27, D1). |
> | The Monday afternoon run | Charlotte collects Mallory at Westview at 2:30 pm and Alexis at Cedar Grove at 2:45 pm, and drives straight to Brightwater for Alexis's 3:30 pm session, leaving Cedar Grove at 3:05 pm. Mallory comes along and waits with her. | Gives the demo a run that does not pass home, which is the point of the line. The book for the waiting room was already on Monday's checklist. |
> | Cedar Grove to Brightwater | 20 minutes | Close to the 20 minutes from home, so neither choice changes the leaving time much. |
> | Alexis's therapy | Each session runs from 3:30 to 4:15 pm, and they are home about 4:35 pm. | Gives the line an end, and gives the Monday clash with violin its numbers. |
> | Charlotte's Monday reminder | She sets a reminder from Now at 1:40 pm, 15 minutes before she leaves, and it goes off at 2:00 pm. | C-03b opens on the notification. This replaces the earlier rule that she sets no reminder in the demo. |
> | Wednesday's dance | Dance runs from 3:45 to 4:45 pm, and they are home by 5:00 pm. | Lets the Wednesday 5:10 pm board show dinner with Claire leading Now. |
> | The washing machine | The washing machine leaks, and on Saturday Charlotte adds "Fix the washing machine" to Sunday with two steps of her own, "Check the drain filter" and "Run an empty rinse cycle". | Gives Sunday, which has nothing in the game plan, a task to lead Now. The steps are hers, because the coach does not advise on repairs. |
> | Alexis's ordinary Monday | Violin is usually Monday at 4:00 pm at Lakeside Strings, which runs into therapy at 3:30 pm. This week violin moves to Tuesday, so the demo week has no clash, and the coach raises it on Sunday for the following Monday. | Kept as a conflict for the coach to find, because a parent cannot be expected to catch it, and that is the job MVP does (issue C34). |
> | Brightwater to Lakeside Strings | 15 minutes | Gives the coach's recommendation of 4:45 or later its reason: the session ends at 4:15, and the drive and five minutes make 4:35. |
> | Lakeside's contact | Charlotte has Lakeside's number from its text on Sunday evening. Lakeside is not on MVP, so a message to it is handed to her messages app. | Gives the Sunday coach card somewhere to send the request. |
> | The backups | Plan B and Plan C on Thursday's sheet are the second and third options from C-06, and Friday's Plan B is the second option from C-06b, in the coach's words from those messages. | Shows the backups without inventing new ones, and shows Friday's sheet saying honestly that it has only one. |

## 21. Appendix B

Add these items at the end:

> 53. **Whether parents find the Leave sheet is worth checking in user testing.** It opens from the large departure time and from the leg line with its chevron, and there is no separate Change link, so Today stays quiet.
>
> 54. **The notification title names two stops.** For a run with more than two stops it names the first and the last before home, and drops the stops between them. Whether that is enough to recognize the run on a lock screen is worth checking.
>
> 55. **Friday's carpool run is not written.** It collects Ada and Sophie on the way to Cedar Grove, and their homes have no travel times. No moment shows Friday's Today, so nothing in the demo needs it.
>
> 56. **Backups are written only for the runs the demo shows.** Thursday's and Friday's sheets in C-06 and C-06b, and Monday's in the Sunday board, carry backups. Every other sheet shows no backups in the prototype, which is not the same as the sheet saying there is no honest backup. The real product works them out.
>
> 57. **Running late to a pickup could offer a note to whoever is waiting.** It is parked as F27 on the spec's roadmap.
>
> 58. **Whether the edge of the sheet reads clearly as it covers Now** is worth checking on a real phone. The canvas sheet and the paper behind it are close in tone, and the rounded corners carry the edge with no line or shadow, because Today allows only two drawn lines. If the edge is too faint, the fix is a token in the library, not a new line.
>
> 59. **A compact strip with the route and leaving time could stay above the sheet once it covers Now.** It is parked as F29 on the spec's roadmap, and user testing will show whether parents lose track of the time while they read the rest of the day.

## 22. Appendix C, a new entry at the top

> ## Version 3.15, October 15, 2026
>
> Works out every state of Now, gives Today one way to change a time, and gives the coach ready backups, at Greg's direction.
>
> | # | Change |
> | ----- | ----- |
> | 1 | Now follows one rule: the next thing today that needs her at a set time, then her leading task, then a quiet line. A timed thing at home can lead Now. Asked and Nobody yet items, someone else's trips and items with no time stay in Later today. |
> | 2 | A departure is a leg on a run, and a run is drawn as a line of stops that need not start or end at home. Now shows the current leg, a line naming the next station, and steps down the line as each stop comes due. A leg passes through coming up, time to leave, running late and passed. |
> | 3 | The Leave sheet is the one place Today changes a time. It draws the run as a line, lets her change when she leaves any stop, and changes the start time only on her own items. Tomorrow starts rows open it at night. |
> | 4 | The coach keeps Plan B and Plan C at the foot of the Leave sheet, and Other options opens that sheet on Today. At least one backup depends on nobody else, wherever one exists. |
> | 5 | Sheets become one pattern, with a grabber, a Close icon, four kinds of body, a set state and two heights. The reminder sheet gains a notifications-off state. |
> | 6 | Every leaving time follows one rule, which moves the afternoon pickups to 2:15 pm, orchestra to 6:55 am, yoga to 2:00 pm and the checkup to 3:10 pm. School runs in the game plan show the time school starts. |
> | 7 | C-03b replaces the Monday afternoon board as a built moment. Boards for running late, Wednesday at 5:10 pm and Sunday are added for the wireframes only. The Sunday board raises the Monday clash between therapy and violin. |
> | 8 | The done count reads "today" from noon, the coach card label gains "for today", and section 4 gains the Leave sheet, the backups, every sheet's parts and the new reminder sheets. |
> | 9 | Appendix A gains the leaving time rule, the Monday run, two travel times, the therapy session's length, the Monday reminder, Wednesday's dance, the washing machine, Alexis's ordinary Monday, Lakeside's contact and the source of the backups. Appendix B gains items 53 to 57. |
> | 10 | Now reads like a boarding pass: the route, the leaving time with a status pill, and the Drive, Arrive and Pickup or Starts fields, above a perforation. The drive line is retired. Checklists in Now, Ready tonight and Tomorrow starts are grouped under each child's name in the children's green, and her tasks under "Before you leave", with no chips and no counts. "Call Brightwater before you leave" becomes "Call Brightwater", and Alexis's violin and orchestra folder become two items. |
> | 11 | The header and Now stay in place on Today. The canvas sheet rises over both when she scrolls, and when the header and Now are taller than the screen, they scroll until Now's actions clear the capture bar before they hold still. Ready tonight behaves the same way at night. |
> | 12 | The route's chevron, and the Leave sheet behind it, appear only on a leg she travels herself. A pass for a child leaving with someone else, such as Alexis with the Parks in C-03, has no chevron, and its route and time are not tappable. |
> | 13 | Ready tonight on Charlotte's first board in C-00 is grouped under Mallory's name, as in C-07, so the rule that checklists are grouped by child has no exception. |

---

## Wireframes that need the change

Wireframe pass 12, extended for version 3.15, carries these changes (W7, W8):

- **The pass and the grouped checklist:** every Now with a leg, and Ready tonight and Tomorrow starts.
- **Now on every Today screen:** 2:15 pm for the afternoon pickups, laid out as a pass with its route, status pill, fields and Then line, on 01, 02, 02b, 2c and 2d.
- **C-03b:** 01b becomes C-03b at 2:05 pm, with new screens for the notification, the Leave sheet, Now at 2:31 and at 2:46, and the running-late board.
- **Other options:** new screens for Thursday's and Friday's Leave sheets at their backups, and the C-06 card after Plan B.
- **Reminders:** the C-06 sheet and notification at 2:00, the set state, and the notifications-off state.
- **Tonight:** 03 shows 6:55 am.
- **Boards for the wireframes only:** Wednesday at 5:10 pm, and Sunday with its task, coach card, reminder sheet, Ask someone sheet, the two drafts, Monday's sheet and the quiet line.
- **Game plan:** 06 shows 8:30 am for Westview and 7:15 am for orchestra.
- **Now stays in place:** the wireframes are still images, so nothing in them changes. The Figma boards are restructured under issue T36 so the prototype can show the sheet rising over Now.
