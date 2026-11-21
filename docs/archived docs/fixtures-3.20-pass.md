# Fixtures 3.20 pass

*MVP (Lombardi) · October 18, 2026 · Applies to story fixtures 3.19 and produces 3.20*

This pass carries Greg's decisions of October 17 and 18, 2026, and his third round of prototype findings (prototype scrub 3). The largest change is the rule Greg approved in g34-coach-adds-proposal.md: the coach adds to her plan what she has already committed to somewhere else, such as an event on her own calendar or an early dismissal at her daughter's school, and asks her only about proposals from other people and about choices that involve another person or a conflict (G42, spec F35). The lines that read as disclaimers come off the screen (G41). A recurring conflict is marked as soon as the coach finds it, with a notice in the app (G26, G43). C-09 is written for Sunday evening as an Optional moment (G21). The coach card's button for a fact reads "Add the start time" (G37). Prototype scrub 3 moves the done count to the foot of Later today (T47), puts the calendar mark before the item (T48), gives tasks their reason, contact and one-tap action (T49), and draws a conflict on the pass on a wireframe-only board (T50). Each household lives in its own town (C18), the demo stays in its October week (C26), the reminder sheet rule is recorded as decided (T42), and the Hearth values are written into section 2 (C42, C44).

Each change below quotes the text in 3.19 and gives its replacement, with the reason. The pass was applied to the full document by script, in this order, and every quoted passage was found exactly once, except changes marked "every occurrence", whose count is given. A change that spans a long passage quotes the whole of it. There are 100 changes.

## 1. Header

**Why.** The version moves to 3.20.

**Current:**

````
*MVP (Lombardi) · Version 3.19 · October 17, 2026 · Charlotte and Edward only*
````

**Replace with:**

````
*MVP (Lombardi) · Version 3.20 · October 18, 2026 · Charlotte and Edward only*
````

## 2. Section 1, terms: Her calendar

**Why.** The coach now adds what she has already committed to on her calendar (issue G42, spec F35).

**Current:**

````
| Her calendar | The main calendar the parent already keeps, such as Google Calendar, Apple Calendar or Outlook. She connects it once during setup, MVP reads it and offers what it finds on the game plan's review card, and MVP never changes anything in it. |
````

**Replace with:**

````
| Her calendar | The main calendar the parent already keeps, such as Google Calendar, Apple Calendar or Outlook. She connects it once during setup. MVP reads it, adds to her plan the events she has already committed to, offers anything that is hers to choose on the game plan's review card, and never changes anything in it. |
````

## 3. Section 1, terms: Calendar mark

**Why.** The mark sits before the item's text, in a muted ink, and is not a control (issue T48).

**Current:**

````
| Calendar mark | A small calendar icon beside any item that came from her calendar, on Today and in the game plan, so she can tell what MVP read from what MVP made. |
````

**Replace with:**

````
| Calendar mark | A small calendar icon in a muted ink, drawn before the item's text on any item that came from her calendar, on Today and in the game plan, so she can tell what MVP read from what MVP made. It is not a control, so tapping it does nothing. |
````

## 4. Section 1, terms: Review card

**Why.** The review card holds only what is hers to choose (issue G42).

**Current:**

````
| Review card | The card at the top of the game plan that holds what the coach has found and she has not yet added: events on her calendar, things pulled from a capture, and the trips the coach suggests around an event. It takes the coach's tint, and it is gone when nothing is waiting. |
````

**Replace with:**

````
| Review card | The card at the top of the game plan that holds what the coach has found and is hers to choose: proposals from other people, such as a second tutoring session, and school events a parent chooses to attend, such as a fair. In most weeks it holds one thing or nothing. It takes the coach's tint, and it is gone when nothing is waiting. |
````

## 5. Section 1, terms: Notice

**Why.** A new conflict reaches her as a notice in the app (issue G43).

**Current:**

````
| Sheet | A panel that rises over the screen for a short decision about something on it, such as setting a reminder, and returns her to the same place when it closes. |
````

**Replace with:**

````
| Sheet | A panel that rises over the screen for a short decision about something on it, such as setting a reminder, and returns her to the same place when it closes. |
| Notice | A single line that rises above the tab bar for about four seconds when the coach finds a new conflict while she is in the app, with a link that names where it goes. It asks for no decision. |
````

## 6. Section 2, "How things get into MVP": what the coach does with a capture

**Why.** Changes to her children's school day join the plan, and only what is hers to choose waits on the review card (issue G42).

**Current:**

````
Each capture gets a short read-back from the coach that says what it took, and the coach asks at most one question when something is unclear. New items the coach pulls in wait as Suggested on the review card at the top of the game plan until she adds them, and a change to an item already in the plan shows as Changed, so nothing enters the plan without the parent seeing it. Something she types or says about her own week, such as the yoga class she wants in C-01, joins the plan as hers, because she said it.
````

**Replace with:**

````
Each capture gets a short read-back from the coach that says what is now in her plan, and the coach asks at most one question when something is unclear. A change to her children's school day, such as an early dismissal, a closure or a dress day, joins the plan as hers or changes the item it affects, because it happens whether she plans for it or not, and the read-back says so. Something she types or says about her own week, such as the yoga class she wants in C-01, joins the plan as hers, because she said it. A proposal from someone else, such as the second tutoring session Ms. Reyes asks for, and a school event she would choose to attend, such as a fair, wait as Suggested on the review card at the top of the game plan until she adds them. A change to an item already in the plan shows as Changed. "What the coach adds for her" sets out the whole rule.
````

## 7. Section 2, "Her calendar": the coach sorts what it finds

**Why.** Her own events join the plan, and a school event she would choose stays a suggestion (issue G42).

**Current:**

````
**The coach sorts what it finds.** It reads each event and works out whom it concerns. The children's activities, appointments and school events are offered under the child's name chip. Her own appointments are offered as hers, because they decide when she can drive.
````

**Replace with:**

````
**The coach sorts what it finds.** It reads each event and works out whom it concerns. The children's activities and appointments join the plan under the child's name chip. Her own appointments join it as hers, because they decide when she can drive. A school event she would choose to attend, such as back-to-school night, waits on the review card.
````

## 8. Section 2, "Her calendar": what joins the plan

**Why.** Greg approved g34-coach-adds-proposal.md on October 18, 2026, which partly reverses G30 (issue G42, spec F35).

**Current:**

````
**Nothing from her calendar joins the plan until she adds it.** A calendar holds plenty that never needs planning, and a game plan that fills itself with every invitation stops being one she trusts. When the coach finds an event, it puts it on the review card at the top of the game plan, under its day, with anything it runs into, such as "Conflicts with tutoring", and she chooses "Add to the plan" or "I don't need this". An event she adds joins as hers, with "You" as owner, no status, the calendar mark, and the source link "From your Google Calendar", or whichever calendar she uses. An event she turns down is not offered again unless it changes on her calendar.
````

**Replace with:**

````
**The coach adds what she has already committed to.** An event on her own calendar that takes a child somewhere, or her own appointment that decides when she can drive, is something she has already decided, and asking her to approve it a second time would only add a step to her week. The coach adds it to the plan as hers, with "You" as owner, no status, the calendar mark, and the source link "From your Google Calendar", or whichever calendar she uses, and the coach's read-back says what is now in the plan wherever she is. A calendar also holds plenty that never needs planning, and a game plan that filled itself with every invitation would stop being one she trusts, so invitations she hasn't accepted, events with no time and events for other people stay out. She agrees to this once, with the ticked line on 0j, and can turn it off in Settings under "What the coach adds for you", which sends calendar events to the review card as suggestions instead. She can take anything out of the plan from its page, and an event she takes out is not added again unless it changes on her calendar.
````

## 9. Section 2, "Her calendar": trips around an event

**Why.** A trip she is free to take joins as hers, with asking someone else kept as a backup (issue G42).

**Current:**

````
**The coach suggests the trips around an event.** An event is the thing itself, such as ballet or a birthday party, and a trip is how a child gets there and back. Once she adds an event that takes a child somewhere, the coach puts the trips around it on the review card: the drop-off at the event's start and the pickup at its end, each with the coach's suggestion for who takes it on the trip's page.
````

**Replace with:**

````
**The coach adds the trips around an event.** An event is the thing itself, such as ballet or a birthday party, and a trip is how a child gets there and back. Once an event that takes a child somewhere is in the plan, the coach adds the drop-off at the event's start and the pickup at its end. A trip she is free to take joins with her as owner, and asking someone else stays on the trip's page as a backup. A trip she can't take herself shows "Nobody yet", because that is a real decision, and the coach suggests on the trip's page who could take it.
````

## 10. Section 2, "Her calendar": the plan follows her calendar

**Why.** A new event joins the plan and is marked as soon as the coach finds a conflict, so the only question is the choice the conflict needs (issues G42 and G26).

**Current:**

````
**The plan follows her calendar.** When she moves or deletes an event she has added, the plan follows. A change she makes herself is not marked Changed, by the same rule as everywhere else. When a new event runs into the plan, the review card says so beside it, and once she adds it, both items show "Conflicts with" and the coach card offers ways to resolve it, as it does for any conflict. This is how something she books outside MVP still reaches her without her sending it, while she still decides what goes in her plan.
````

**Replace with:**

````
**The plan follows her calendar.** When she moves or deletes an event on her calendar, the plan follows. A change she makes herself is not marked Changed, by the same rule as everywhere else. When a new event runs into the plan, both items show "Conflicts with" as soon as the coach finds it, and the coach card offers a way through, as it does for any conflict. This is how something she books outside MVP still reaches her without her sending it, and the only thing she is asked is the choice the conflict needs.
````

## 11. Section 2, a new part, "What the coach adds for her"

**Why.** Sets out the rule Greg approved on October 18, 2026, the control she has over it, and the notice for a new conflict (issues G42, G43 and G26, spec F35).

**Current:**

````
## Onboarding

Onboarding has three parts.
````

**Replace with:**

````
## What the coach adds for her

A busy week should not turn the game plan into a queue of approvals. The coach therefore adds to her plan what she has already committed to somewhere else, and asks her only about proposals from other people and about choices that involve another person or a conflict. The line between adding and asking is whether something happens whether she plans for it or not. An early dismissal happens either way, while a fair or a back-to-school night is a choice.

| What the coach finds | What it does | In Charlotte's week |
| ----- | ----- | ----- |
| An event on her own calendar that takes a child somewhere, or her own appointment that decides when she can drive | Adds it to the plan as hers, with the calendar mark | Therapy, dance and ballet at setup, and Mallory's checkup in C-06b |
| A change to the school day for one of her children, such as an early dismissal, a closure, a dress day or picture day | Adds it, or changes the item it affects | Thursday's early dismissal and Friday's free dress day, read back in C-01 |
| Something she types or says about her own week | Adds it as hers | Yoga in C-01, Hana's ride in C-03a and the pumpkin in C-09 |
| A trip to or from an event in her plan that she is free to take | Adds it with her as owner, and keeps asking someone else as a backup | The trips around Ada's party on the wireframe-only boards |
| A proposal from someone else, or a school event a parent chooses to go to | Puts it on the review card for her to add or turn down | Ms. Reyes's second session in C-04, back-to-school night in C-00 and the harvest fair in C-09 |
| Anything that needs another person's yes, or a conflict that needs a choice | Brings it to the coach card on Today, one decision at a time | Edward's "can't" in C-06 and the checkup's overlap with tutoring in C-06b |
| Events with no time, events for other grades, and invitations she hasn't accepted | Leaves them out | The fifth-grade trip in the Cedar Grove newsletter |

The coach still never sends anything to another person. Everything it adds stays in her own plan, so the rule that nothing reaches another person unless she sends it is untouched.

**She hears what was added where she is.** The coach says what is now in the plan in one read-back, stating the plan rather than describing what it did, such as "Mallory's checkup on Friday at 3:30 is in your plan, from your Google Calendar." When several things arrive together, the read-back gives the number and the source, such as "Three things from your Google Calendar are in your plan this week.", with the link "Show what's new", which opens a sheet listing them, each with "Take this out". Added items carry no mark on their rows, because a mark on every new item would bring back the clutter this rule removes. Today announces nothing the coach added unless it needs an answer from her, because a plan that quietly stays current is the point.

**She controls it.** She agrees once, with the ticked line "Add events from my Google Calendar to my plan" on 0j, beside the reminder she already chooses there. Settings holds the card "What the coach adds for you", with a switch for each kind: events from her calendar, school-day changes for her children, and trips she can take herself. Turning one off sends that kind to the review card instead. Each added item's page names where it came from and offers "Take this out of the plan", and taking something out is never flagged back to her.

**A new conflict reaches her as a notice.** The Conflict mark appears on both items as soon as the coach finds the conflict, with the dot in the week strip. When she is in the app, a notice rises above the tab bar for about four seconds, holding one line and a link that names where it goes, such as "Violin and therapy overlap every Monday from next week." with "Show me Monday", which opens the game plan at Monday. Each conflict gets one notice, and when VoiceOver is on, the notice stays until she dismisses it. A notice is not a sheet, because a sheet holds a decision, and opening one she didn't ask for would force a decision on her. A conflict today or tomorrow goes to the coach card on Today instead, because it needs a choice soon. A conflict more than a day away sends no phone notification, and the Sunday look-ahead raises it on the coach card when nothing more pressing is waiting. In Charlotte's story the coach finds the Monday clash between violin and therapy in her first week, so the demo shows the marks and the Sunday card, and the notice is drawn on a wireframe-only board.

## Onboarding

Onboarding has three parts.
````

## 12. Section 2, "Onboarding": her calendar at setup

**Why.** Her consent sits on 0j, and the events she has committed to are in her plan from the start (issue G42).

**Current:**

````
What the coach finds on her calendar at setup waits on the game plan's review card, and the coach's introduction says so.
````

**Replace with:**

````
The coach's introduction on 0j says which events from her calendar are in her plan, and a second ticked line beside the reminder, "Add events from my Google Calendar to my plan", is her agreement. If she unticks it, calendar events wait on the game plan's review card instead.
````

## 13. Section 2, "What every family shows", item 1

**Why.** What is on her calendar reaches the plan without a step (issue G42).

**Current:**

````
What is already on her own calendar reaches the game plan's review card without her sending it, and joins the plan when she adds it.
````

**Replace with:**

````
What is already on her own calendar reaches her plan without her sending it.
````

## 14. Section 2, "Today shows today": Later today

**Why.** The done count moves to a line at the foot of the list, and the calendar mark sits before the item's text (issues T47 and T48).

**Current:**

````
**Later today is a list.** Each row has its time in the Meta style, its chips and the item, and the times line up in a column. What is already done drops off the list, and a count beside the heading says how much, such as "2 done this morning". Anything that has changed today carries the Changed mark on its row, and items from her calendar carry the calendar mark.
````

**Replace with:**

````
**Later today is a list.** Each row has its time in the Meta style, its chips, the calendar mark when the item came from her calendar, and the item, and the times line up in a column. The calendar mark is small, in a muted ink and never cerulean, because cerulean means something she can tap, and the mark is not a control. Its accessible label is "From your calendar". What is already done drops off the list, and a line in Meta at the foot of the list says how much, such as "2 done this morning", so the heading stands alone. Anything that has changed today carries the Changed mark on its row.
````

## 15. Section 2, "Today shows today": an empty Later today

**Why.** The count line stays under the heading when no rows are left (issue T47).

**Current:**

````
When nothing is left later today, the heading stays with its count, such as "5 done today", and no rows.
````

**Replace with:**

````
When nothing is left later today, the heading stays with the count line beneath it, such as "5 done today", and no rows.
````

## 16. Section 2, "Now, from one moment to the next": the done count

**Why.** The count sits at the foot of Later today (issue T47).

**Current:**

````
When the leg's destination is due, the leg leaves Now, adds to the done count beside Later today,
````

**Replace with:**

````
When the leg's destination is due, the leg leaves Now, adds to the done count at the foot of Later today,
````

## 17. Section 2, "Now, from one moment to the next": marks on the leg

**Why.** A conflict on the pass sits under its title, and the pill and fields keep their meaning (issue T50).

**Current:**

````
**Marks on the leg.** A leg whose item has changed carries the Changed mark beside its route until she opens the Leave sheet. A leg in conflict carries "Conflicts with" and the other item, and the coach card holds the fix, labeled "Your coach · for today" when the conflict is today's.
````

**Replace with:**

````
**Marks on the leg.** A leg whose item has changed carries the Changed mark beside its route until she opens the Leave sheet. A leg in conflict carries "Conflicts with" and the other item on a line in Meta under the title, such as "Conflicts with Alexis's carpool". The pill, the time and the fields stay as they are, because the leg still leaves when it leaves, and the coach card beneath Now holds the recommendation, labeled "Your coach · for today" when the conflict is today's, with Other options opening the Leave sheet's backups. "A conflict on the pass", among the boards for the wireframes only, shows it.
````

## 18. Section 2, "Now, from one moment to the next": tasks

**Why.** A task carries what to do, why, who to reach and one button that does it (issue T49).

**Current:**

````
**Tasks.** A task joins a leg's checklist, under "Before you leave", when the seed marks it for that trip, as "Call Brightwater" does on Wednesday.
````

**Replace with:**

````
**Tasks.** A task joins a leg's checklist, under "Before you leave", when the seed marks it for that trip, as "Call Brightwater to ask for Dana Whitfield" does on Wednesday. A task's words say what to do and why. Beneath them a line in Meta names who to reach, such as "Brightwater Family Therapy · 555-0170", and a button at the end of the row does it in one tap, such as "Call". A task left by a handoff reopens its draft, with "Send from Mail" or the app that applies, and a task to message someone on MVP opens the composer with them chosen. Tapping the row anywhere but the button still ticks it. Every task the coach or a handoff creates names who, why and how to reach them, from what MVP already holds, and a task she writes herself, such as fixing the washing machine, carries only her words.
````

## 19. Section 2, "The game plan holds the week": the review card

**Why.** The review card holds only what is hers to choose, loses its disclaimer line and gains Add them all (issues G42 and G41).

**Current:**

````
**A review card sits at the top when anything is waiting.** It holds what the coach has found and she has not yet added: events on her calendar, things pulled from a capture, such as the second tutoring session Ms. Reyes asked for, and the trips the coach suggests around an event. Its heading says in a full sentence what is waiting, such as "Three new things are waiting to go in your plan.", with "Nothing goes in your plan until you add it." beneath it. The items are grouped by day. Each day is outlined in the coach's amber, with the day set in the Label style, because the coach found what is in it. Each item shows its chip, the item with its start time, the calendar mark when it came from her calendar, any mark, such as "Conflicts with tutoring", and two choices, "I don't need this" and "Add to the plan".
````

**Replace with:**

````
**A review card sits at the top when anything is hers to choose.** It holds proposals from other people, such as the second tutoring session Ms. Reyes asked for, and school events a parent chooses to attend, such as Westview's harvest fair, so in most weeks it holds one thing or nothing. What she has already committed to elsewhere is added by the coach and never waits here ("What the coach adds for her"). Its heading says in a full sentence what is waiting, such as "One new thing is waiting to go in your plan.", and nothing sits beneath it. The items are grouped by day. Each day is outlined in the coach's amber, with the day set in the Label style, because the coach found what is in it. Each item shows its chip, the calendar mark when it came from her calendar, the item with its start time, any mark, such as "Conflicts with tutoring", and two choices, "I don't need this" and "Add to the plan". When the card holds two or more items, "Add them all" sits at its foot.
````

## 20. Section 2, "The game plan holds the week": items already in the plan

**Why.** Settles Appendix B item 66 under the approved proposal: nothing from inside the plan gathers on the review card (issues G42 and G34).

**Current:**

````
**Items already in the plan show what they need where they are.** An item owned by Nobody yet, an answer of "can't", a conflict and an unopened Changed mark stay on the item's row in the agenda, and the week strip's dot marks their day. Whether they should also gather on the review card is open (Appendix B item 66).
````

**Replace with:**

````
**Items already in the plan show what they need where they are.** A trip nobody has taken becomes hers when she is free, so "Nobody yet" appears only when she can't take it herself. A "can't" from someone she asked and a conflict that needs a choice come to the coach card on Today one at a time, as Edward's answer does in C-06, and stay marked on their rows. An unopened Changed mark is information rather than a decision, so it stays on its row and puts no dot in the week strip. A day holding something that needs a decision opens expanded, and the week strip's dot marks it, so she never has to scroll to find it. Nothing from inside the plan gathers on the review card, so the card keeps one meaning.
````

## 21. Section 2, "The game plan holds the week": the item page

**Why.** An item the coach added says where it came from and can be taken out (issue G42).

**Current:**

````
A suggested item shows "Add to the plan" and "I don't need this" under its title.
````

**Replace with:**

````
A suggested item shows "Add to the plan" and "I don't need this" under its title. An item the coach added names where it came from, such as "From your Google Calendar", and offers "Take this out of the plan" at its foot.
````

## 22. Section 2, "The game plan holds the week": the read-back strip

**Why.** Trips around something she says join the plan as hers when she is free (issue G42).

**Current:**

````
Something she says about her own week, such as a party Alexis is going to, joins the plan as hers, and the coach suggests the trips around it.
````

**Replace with:**

````
Something she says about her own week, such as a party Alexis is going to, joins the plan as hers, and the coach adds the trips around it, with her as owner when she is free. When nothing is unresolved, the strip says what is in the plan and has no button.
````

## 23. Section 2, "Dates, times and places": the demo week and the anchor

**Why.** There is no set presentation date, so the demo stays in its October week, and the anchor moves only for a new season (issue C26).

**Current:**

````
Every date on screen is worked out from that anchor, so the whole demo can move to another week by changing one value. The prototype never reads the device clock and always runs on the demo calendar.
````

**Replace with:**

````
Every date on screen is worked out from that anchor, so the whole demo can move to another week by changing one value. The prototype never reads the device clock and always runs on the demo calendar.

There is no set presentation date, and meetings happen as they come up, so the demo stays in its October week whenever it is shown. The story is told in days of the week and times of day, and the dateline keeps its October date. The anchor is there so the whole demo can move once to a new season, such as a school break or the spring, when parents start looking for camps, and it is not moved before each presentation.
````

## 24. Section 2, "Dates, times and places": each household's town

**Why.** Greg decided on October 17, 2026 that each household lives in its own town, which closes Appendix B items 10 and 36 (issue C18).

**Current:**

````
Every person, place and organization is invented.
````

**Replace with:**

````
Every person, place and organization is invented. Each household lives in its own invented town, with its own schools and places, so each week's driving is simple to follow and each seed file stands on its own, and no place name carries over from one household to another.
````

## 25. Section 2, a new part after "Type": color

**Why.** Records the Hearth values Greg set on October 17, 2026, so the fixtures carry the colors the boards use (issues C42 and C44).

**Current:**

````
The coach is marked by its dot, its tint and, on the review card, an amber outline around each day, and by nothing else.

# 3. Charlotte and Edward
````

**Replace with:**

````
The coach is marked by its dot, its tint and, on the review card, an amber outline around each day, and by nothing else.

## Color

The design library and src/tokens.css hold every value. These are the ones the demo screens lean on most, as Greg set them on October 17, 2026, and no color in the product is pure white or pure black.

| Color | Value | What it is for |
| ----- | ----- | ----- |
| Canvas | #F0ECE5 | The canvas sheet on Today and the page behind the tabs |
| Card | #F9F7F3 | Paper: the header and Now on Today, every card, and each day inside the review card |
| Control | #FFFEFC | The lightest surface, behind a control drawn on paper, such as a "Leave at" time |
| Cerulean | #007198 | Anything she taps, links and the active tab |
| Cerulean, pressed | #004F6B | A cerulean control while it is pressed |
| Cerulean tint | #DFF2FA | The light fill that goes with cerulean |
| Children's indigo | #22549A on #DDE5ED | Name chips and the checklist headings that name a child |

# 3. Charlotte and Edward
````

## 26. Section 3, "The Team tab": Edward's page

**Why.** The line under This week reads as a disclaimer, and the Privacy card in Settings says it once (issue G41).

**Current:**

````
| Under This week | Edward sees only what you send. |
````

**Replace with:** nothing, so the text is removed.

## 27. Section 3, "The Team tab": Claire's page

**Why.** The line under This week reads as a disclaimer, and the Privacy card in Settings says it once (issue G41).

**Current:**

````
| Under This week | Claire sees only what you send. |
````

**Replace with:** nothing, so the text is removed.

## 28. Section 3, "The Team tab": Min-jung's page

**Why.** The line under This week reads as a disclaimer, and the Privacy card in Settings says it once (issue G41).

**Current:**

````
| Under This week | Min-jung sees only what you send. |
````

**Replace with:** nothing, so the text is removed.

## 29. Section 3, "The Team tab": Jenna's page

**Why.** The line under This week reads as a disclaimer, and the Privacy card in Settings says it once (issue G41).

**Current:**

````
| Under This week | Jenna sees only what you send. |
````

**Replace with:** nothing, so the text is removed.

## 30. Section 3, "The Team tab": Tom's page

**Why.** The line under This week reads as a disclaimer, and the Privacy card in Settings says it once (issue G41).

**Current:**

````
| Under This week | Tom sees only what you send. |
````

**Replace with:** nothing, so the text is removed.

## 31. Section 3, "The Team tab": Message on Edward's page

**Why.** The privacy line leaves composers and stays at the top of a chat, where it describes the room she is in (issue G41).

**Current:**

````
> Write a message
>
> Only Edward sees this chat. The coach doesn't read it.
>
> [Send]
````

**Replace with:**

````
> Write a message
>
> [Send]
````

## 32. Section 3, "The Team tab": the composer for the inner circle

**Why.** The note above Send leaves the composer (issue G41).

**Current:**

````
| Note above the button | "Only" and the people chosen, "see this chat. The coach doesn't read it.", such as "Only Edward and Claire see this chat. The coach doesn't read it." |
````

**Replace with:** nothing, so the text is removed.

## 33. Section 3, "The Team tab": the composer for the village

**Why.** The note above Post leaves the composer, and the group page keeps its own line (issue G41).

**Current:**

````
| Note above the button | Only the people in this group see this. The coach doesn't read it. |
````

**Replace with:** nothing, so the text is removed.

## 34. Section 3, "Settings": a new card

**Why.** Her control over what the coach adds lives in Settings (issue G42).

**Current:**

````
| Notifications | MVP can tell you these things on your phone. |
````

**Replace with:**

````
| What the coach adds for you | The coach adds these to your plan, and you can take anything out. | Events from your Google Calendar · On<br>School-day changes for Alexis and Mallory · On<br>Trips you can take yourself · On |
| Notifications | MVP can tell you these things on your phone. |
````

## 35. Section 3, "Settings": what is staged

**Why.** The new switches are staged too.

**Current:**

````
In the prototype, Manage billing, Disconnect Google Calendar, Copy the address and the two switches are staged and change nothing, because none of them is part of a moment.
````

**Replace with:**

````
The three switches under What the coach adds for you read On because she left the calendar line ticked on 0j. In the prototype, Manage billing, Disconnect Google Calendar, Copy the address and every switch are staged and change nothing, because none of them is part of a moment.
````

## 36. Section 3, "The week in the game plan": Friday's free dress day

**Why.** A dress day changes Alexis's school day, so the coach adds it when the newsletter arrives (issue G42).

**Current:**

````
| Friday | All day | Alexis · Free dress day, Cedar Grove | Nobody yet | This week | Suggested | Pulled from the Cedar Grove newsletter. Charlotte adds it in C-01, and it then shows You as owner and no status. |
````

**Replace with:**

````
| Friday | All day | Alexis · Free dress day, Cedar Grove | You | This week | | Added by the coach from the Cedar Grove newsletter on Sunday, because it changes Alexis's school day. The read-back that opens C-01 says so. |
````

## 37. Section 3, "The week in the game plan": Friday's checkup

**Why.** The checkup joins the plan from her calendar, because she booked it herself (issue G42).

**Current:**

````
Found on her Google Calendar in C-06b, where it waits on the review card marked "Conflicts with tutoring" and joins the plan when Charlotte adds it.
````

**Replace with:**

````
Added from her Google Calendar in C-06b, because she booked it herself, with "Conflicts with tutoring".
````

## 38. Section 3, "The week in the game plan": the tasks

**Why.** Tasks carry who, why and how to reach them (issue T49).

**Current:**

````
Two tasks are added to the game plan during the demo, each owned by Charlotte with no status: "Call Brightwater and ask for Dana Whitfield" on Wednesday, added in C-05, and "Send Westview the pickup note" on Wednesday, added in C-06. On Wednesday's Today, the first task appears on the checklist as "Call Brightwater", under "Before you leave".
````

**Replace with:**

````
Two tasks are added to the game plan during the demo, each owned by Charlotte with no status: "Call Brightwater to ask for Dana Whitfield" on Wednesday, added in C-05, with "Brightwater Family Therapy · 555-0170" beneath it and a Call button, and "Send Westview the pickup note" on Wednesday, added in C-06, with "pickups@westviewk.org" beneath it and a Send from Mail button that reopens the note. On Wednesday's Today, both appear on the checklist under "Before you leave".
````

## 39. Section 3, "Messages that arrive this week": the newsletter

**Why.** The dress day joins Alexis's plan (issue G42).

**Current:**

````
Marks Thursday's 1:30 pm pickup as changed and suggests Friday's free dress day for Alexis.
````

**Replace with:**

````
Marks Thursday's 1:30 pm pickup as changed and adds Friday's free dress day to Alexis's plan.
````

## 40. Section 3, "Messages that arrive this week": Northside's portal

**Why.** The checkup joins the plan from her calendar (issue G42).

**Current:**

````
MVP finds it there in C-06b and puts it on the review card.
````

**Replace with:**

````
MVP finds it there in C-06b and adds it to Friday, where it runs into tutoring.
````

## 41. Section 3, "The moments": C-06b

**Why.** C-06b loses its approval step (issue G42).

**Current:**

````
| C-06b | Wednesday, Oct. 14, 1:15 pm | Charlotte books Mallory's checkup outside MVP, it reaches the game plan's review card through her Google Calendar, and once she adds it, it runs into Friday's tutoring. | Her calendar keeping the plan current, with her deciding what goes in | Core |
````

**Replace with:**

````
| C-06b | Wednesday, Oct. 14, 1:15 pm | Charlotte books Mallory's checkup outside MVP, it joins her plan through her Google Calendar, and it runs into Friday's tutoring. | Her calendar keeping the plan current, with her asked only for the choice the conflict needs | Core |
````

## 42. Section 3, "The moments": C-09

**Why.** A new Optional moment for Sunday evening (issue G21).

**Current:**

````
| C-08b | Thursday, Oct. 15, 9:05 pm | Charlotte asks whether Mallory's cough should keep her home, and the coach names Dr. Ortiz. | The coach naming the right person from her inner circle | Core |
````

**Replace with:**

````
| C-08b | Thursday, Oct. 15, 9:05 pm | Charlotte asks whether Mallory's cough should keep her home, and the coach names Dr. Ortiz. | The coach naming the right person from her inner circle | Core |
| C-09 | Sunday, Oct. 18, 7:30 pm | The Sunday look-ahead names next week's harvest fair, Charlotte adds it, the coach offers a way through its overlap with Friday's tutoring, and she tells the coach one new thing from the game plan. | The Sunday look-ahead, adding something that was hers to choose, and capture on the game plan | Optional |
````

## 43. C-00, the coach's introduction: the recap

**Why.** The repeating events from her calendar are in her plan from the start, and the line that read as a disclaimer goes (issues G42 and G41).

**Current:**

````
Three repeating events from your Google Calendar, Alexis's therapy and dance and Mallory's ballet, are waiting in your game plan, and none of them goes in your plan until you add it.
````

**Replace with:**

````
Alexis's therapy and dance and Mallory's ballet repeat every week on your Google Calendar, and they are in your plan.
````

## 44. C-00, the coach's introduction: the ticked line

**Why.** Her agreement to what the coach adds sits beside the reminder she already chooses (issue G42, approved with the ticked line on 0j).

**Current:**

````
> [✓] Remind me the night before a library day
>
> [Next]
````

**Replace with:**

````
> [✓] Remind me the night before a library day
> [✓] Add events from my Google Calendar to my plan
>
> [Next]
````

## 45. C-00, the note under the introduction

**Why.** Says what the second line does.

**Current:**

````
*The reminder is ticked already. Tapping Next with it ticked brings up the phone's request to allow notifications, which is the first moment notifications are useful to her.
````

**Replace with:**

````
*Both lines are ticked already. Tapping Next with the reminder ticked brings up the phone's request to allow notifications, which is the first moment notifications are useful to her. Tapping Next with the calendar line ticked is her agreement that the coach adds what she has committed to on her calendar, and if she unticks it, calendar events wait on the game plan's review card.
````

## 46. C-00, her first board: the coach card's button

**Why.** "Answer" said nothing about what happens. Greg chose "Add the start time" on October 18, 2026, which pairs with "Change the start time" after she answers (issue G37).

**Current:**

````
> Tomorrow is a D day at Westview. What time does Mallory need to be at school in the morning?
>
> [Answer]
````

**Replace with:**

````
> Tomorrow is a D day at Westview. What time does Mallory need to be at school in the morning?
>
> [Add the start time]
````

## 47. C-00, her first board: the note before the answer sheet

**Why.** Follows the new button (issue G37).

**Current:**

````
*She taps Answer, and a sheet opens over Today.*
````

**Replace with:**

````
*She taps Add the start time, and a sheet opens over Today.*
````

## 48. C-00, her first board after she answers

**Why.** Only back-to-school night is waiting, because the calendar events are already in her plan (issue G42).

**Current:**

````
Back-to-school night at Westview on Thursday evening and three events from your Google Calendar are waiting there for you to add.
````

**Replace with:**

````
Back-to-school night at Westview on Thursday evening is the one thing waiting there for you to add.
````

## 49. C-01, the newsletter read-back

**Why.** The early dismissal and the dress day change Alexis's school day, so they are in her plan already, and the Add to the plan button goes (issue G42).

**Current:**

````
> From the Cedar Grove newsletter, two things are for Alexis. Thursday is an early dismissal at 1:30 for conferences, with no after-school care, so Thursday's pickup has moved. Friday is a free dress day. The fifth-grade trip and the rest of the newsletter are not for Alexis.
>
> From the Cedar Grove newsletter · Sunday
>
> [Add to the plan] [Show the newsletter]
````

**Replace with:**

````
> From the Cedar Grove newsletter, two things are in Alexis's plan. Thursday is an early dismissal at 1:30 for conferences, with no after-school care, so Thursday's pickup is at 1:30 now. Friday is a free dress day. The fifth-grade trip and the rest of the newsletter are not for Alexis.
>
> From the Cedar Grove newsletter · Sunday
>
> [Show the newsletter]
````

## 50. C-01, after the read-back

**Why.** There is nothing to add.

**Current:**

````
*She taps Add to the plan, and the free dress day moves from Suggested into Friday. Then she opens WhatsApp,
````

**Replace with:**

````
*She opens WhatsApp,
````

## 51. C-01, the review card

**Why.** The disclaimer line goes everywhere (issue G41).

**Current:**

````
**Game plan, as shown: the review card, after the voice note and before she chooses**

> One new thing is waiting to go in your plan.
> Nothing goes in your plan until you add it.
````

**Replace with:**

````
**Game plan, as shown: the review card, after the voice note and before she chooses**

> One new thing is waiting to go in your plan.
````

## 52. C-01, the week strip

**Why.** An unopened Changed mark no longer puts a dot in the week strip (issue G42).

**Current:**

````
*The week strip carries a dot under Tuesday for violin's Changed mark, under Wednesday for the carpool nobody has yet, under Thursday, and under Saturday for the library run nobody has yet.*
````

**Replace with:**

````
*The week strip carries a dot under Wednesday for the carpool nobody has yet, under Thursday, and under Saturday for the library run nobody has yet. Violin's Changed mark on Tuesday is information rather than a decision, so it puts no dot in the strip.*
````

## 53. C-04, the review card

**Why.** The disclaimer line goes everywhere (issue G41).

**Current:**

````
**Game plan, as shown: when she opens it**

> One new thing is waiting to go in your plan.
> Nothing goes in your plan until you add it.
````

**Replace with:**

````
**Game plan, as shown: when she opens it**

> One new thing is waiting to go in your plan.
````

## 54. C-05, the new post

**Why.** The privacy line leaves the composer (issue G41).

**Current:**

````
> Only the people in this group see this. The coach doesn't read it.
>
> [Post]
````

**Replace with:**

````
> [Post]
````

## 55. C-05, the task Charlotte adds

**Why.** The task carries why in its words (issue T49).

**Current:**

````
then adds "Call Brightwater and ask for Dana Whitfield" to Wednesday in the game plan.
````

**Replace with:**

````
then adds "Call Brightwater to ask for Dana Whitfield" to Wednesday in the game plan.
````

## 56. C-05c, the composer

**Why.** The privacy line leaves the composer and stays at the top of the chat (issue G41).

**Current:**

````
> Only Edward and Claire see this chat. The coach doesn't read it.
>
> [Send]
````

**Replace with:**

````
> [Send]
````

## 57. Every draft: the line above Send

**Why.** She taps Send herself, so the screen already shows who sends, and the rule lives in the product rather than in a line on every draft (issue G41). The line is removed from all eight drafts in C-02, C-03, C-04, C-06, C-06b and the Sunday board.

**Every occurrence (8) of:**

````
> You send this. MVP never sends anything for you.
>
````

**Replace with:** nothing, so the text is removed.

## 58. Add someone and New village group: the group line

**Why.** The second sentence reads as a disclaimer. The first stays, because it tells her why only people on MVP are listed (issue G41).

**Every occurrence (3) of:**

````
Everyone in a group needs MVP to see its posts. Only members see what's posted, and the coach doesn't read it.
````

**Replace with:**

````
Everyone in a group needs MVP to see its posts.
````

## 59. C-06c, the composer

**Why.** The privacy line leaves the composer and stays at the top of the chat (issue G41).

**Current:**

````
> Still on for 6:30 tonight?
>
> Only Claire sees this chat. The coach doesn't read it.
>
> [Send]
````

**Replace with:**

````
> Still on for 6:30 tonight?
>
> [Send]
````

## 60. C-06b, Now: the tasks

**Why.** A task carries why, who and a one-tap action, and the folded group follows the heading (issues T49 and T44).

**Current:**

````
> Before you leave
> Call Brightwater
> Send Westview the pickup note
>
> [Remind me] [Directions]

*If she taps Remind me, the sheet is the one in C-06, because the leaving time and the stop are the same and both choices are still ahead. Once set, the button reads "Reminder at 2:00". When she ticks the dance bag, Alexis's group folds to "Alexis · 1 packed",
````

**Replace with:**

````
> Before you leave
> Call Brightwater to ask for Dana Whitfield
> Brightwater Family Therapy · 555-0170 · [Call]
> Send Westview the pickup note
> pickups@westviewk.org · [Send from Mail]
>
> [Remind me] [Directions]

*Call opens her phone app with Brightwater's number, staged in the prototype. Send from Mail reopens the note to Westview from C-06 in her email app. Tapping either row anywhere but its button ticks it. If she taps Remind me, the sheet is the one in C-06, because the leaving time and the stop are the same and both choices are still ahead. Once set, the button reads "Reminder at 2:00". When she ticks the dance bag, Alexis's group folds to "Alexis needs · 1 packed",
````

## 61. C-06, Now: the task

**Why.** A task carries why, who and a one-tap action (issue T49).

**Current:**

````
> Before you leave
> Call Brightwater
>
> [Remind me] [Directions]
````

**Replace with:**

````
> Before you leave
> Call Brightwater to ask for Dana Whitfield
> Brightwater Family Therapy · 555-0170 · [Call]
>
> [Remind me] [Directions]
````

## 62. C-06b, the opening note

**Why.** The checkup joins her plan from her calendar, and she is asked only for the choice the conflict needs (issue G42).

**Current:**

````
MVP reads the new event from her calendar and sees that it runs into Mallory's tutoring. Nothing from her calendar joins the plan until she adds it, so the coach card turns to Friday and asks her to add the checkup before it offers a way through. This is the moment that shows her calendar keeping the plan current while she still decides what goes in it.*
````

**Replace with:**

````
MVP reads the new event from her calendar, adds it to Friday as hers, because she booked it herself, and sees that it runs into Mallory's tutoring. The conflict is two days away, so the coach card turns to Friday with a way through. This is the moment that shows her calendar keeping the plan current, with her asked only for the choice the conflict needs.*
````

## 63. C-06b, the coach card and the game plan

**Why.** The "Add the checkup" card and the checkup on the review card both go, so the moment loses a step, and G38's two boards become one (issues G42 and G38).

**Current:**

````
**Today, as shown: the coach card**

> Your coach · for Friday
>
> Mallory's checkup at Northside Pediatrics at 3:30 is new on your Google Calendar, and it overlaps tutoring with Ms. Reyes. Add the checkup to your plan, and I'll help you sort out Friday.
>
> [Add the checkup]
> Updates your game plan
>
> I don't need this

*The same checkup waits on the game plan's review card, as shown below, and adding it from either place does the same thing. She taps Add the checkup on the card. The checkup joins Friday as hers, with the calendar mark and "Conflicts with tutoring", and the card turns to the way through.*

> Your coach · for Friday
>
> Mallory's checkup on Friday at 3:30 overlaps tutoring with Ms. Reyes. I'd skip tutoring this Friday, because Mallory's new Tuesday session with Ms. Reyes starts next week.
>
> [Skip tutoring this Friday]
> Opens a text for you to send to Ms. Reyes
>
> Other options

**Game plan, as shown: the checkup waits for review**

> One new thing is waiting to go in your plan.
> Nothing goes in your plan until you add it.
>
> Friday
> [Mallory] Checkup, Northside Pediatrics, 3:30 pm · [calendar mark] · Conflicts with tutoring
> I don't need this · [Add to the plan]

*Beneath the card, Monday and Tuesday are folded to "Monday and Tuesday · 11 done". Today, Wednesday, is open with "2 done" and the rest of the afternoon, and Thursday is open beneath it, with Edward's initial and a thumbs up on Alexis's pickup and Min-jung's on Mallory's. Friday, Saturday and Sunday are collapsed.*

*After she adds the checkup, the card is gone and Friday reads "8 items". Opened, Friday shows the checkup at 3:30 pm with the calendar mark and "Conflicts with tutoring", and tutoring at 3:00 pm with "Conflicts with the checkup" above Charlotte's note.*
````

**Replace with:**

````
**Today, as shown: the coach card**

> Your coach · for Friday
>
> Mallory's checkup at Northside Pediatrics on Friday at 3:30 is in your plan, from your Google Calendar, and it overlaps tutoring with Ms. Reyes. I'd skip tutoring this Friday, because Mallory's new Tuesday session with Ms. Reyes starts next week.
>
> [Skip tutoring this Friday]
> Opens a text for you to send to Ms. Reyes
>
> Other options

**Game plan, as shown: Friday, with the checkup in the plan**

*There is no review card, because nothing is waiting for her to choose. Monday and Tuesday are folded to "Monday and Tuesday · 11 done". Today, Wednesday, is open with "2 done" and the rest of the afternoon, and Thursday is open beneath it, with Edward's initial and a thumbs up on Alexis's pickup and Min-jung's on Mallory's. Friday holds a decision, so it opens expanded with the week strip's dot, and reads "8 items": the checkup at 3:30 pm with the calendar mark before it and "Conflicts with tutoring", and tutoring at 3:00 pm with "Conflicts with the checkup" above Charlotte's note. The checkup carries no mark for being new. Saturday and Sunday are collapsed.*

*If she is on the game plan when the coach adds the checkup, the read-back strip rises above the capture bar instead.*

> Your coach · for Friday
>
> Mallory's checkup on Friday at 3:30 is in your plan, from your Google Calendar. It overlaps tutoring with Ms. Reyes, so I'd skip tutoring this Friday.
>
> [Skip tutoring this Friday]
> Opens a text for you to send to Ms. Reyes
>
> Other options
````

## 64. C-06b, the checkup's page

**Why.** An item the coach added can be taken out (issue G42).

**Current:**

````
> See the coach's reasons
>
> Change this in Google Calendar.

**Coach, as shown: the full message**
````

**Replace with:**

````
> See the coach's reasons
>
> Change this in Google Calendar.
>
> Take this out of the plan

**Coach, as shown: the full message**
````

## 65. The wireframe-only boards for adding to the game plan

**Why.** The party she types and the party on her calendar both join the plan as hers, the trips join with her as owner because Saturday afternoon is clear, and asking Edward becomes the backup. The pickup's end time stays the coach's one question (issue G42).

**Current:**

````
*She taps the arrow. The party joins Saturday as hers, because she said it, and the coach's read-back rises above the bar while Saturday stays in view.*

> Your coach · for Saturday
>
> Ada's birthday party is on Saturday at 2:00. Nobody is taking Alexis yet, so I'd ask Edward, who is already out for the library run that morning.
>
> [Ask Edward]
> Opens a request for you to send to Edward
>
> Other options

*Other options opens the drop-off's page at "Other ways this could go". In the second board, the party is on her Google Calendar instead, and it waits on the review card.*

> One new thing is waiting to go in your plan.
> Nothing goes in your plan until you add it.
>
> Saturday
> [Alexis] Ada's birthday party, the Okafors', 2:00 pm · [calendar mark]
> I don't need this · [Add to the plan]

*She adds it. The party joins Saturday as hers, and the coach puts the trips around it on the review card.*

> Two new things are waiting to go in your plan.
> Nothing goes in your plan until you add it.
>
> Saturday
> [Alexis] To the Okafors', 2:00 pm
> I don't need this · [Add to the plan]
> [Alexis] Pick up at the Okafors', time needed
> I don't need this · [Add to the plan]

*Tapping the drop-off opens its page.*

> Back
>
> [Alexis] To the Okafors'
> Saturday · 2:00 pm · the Okafors'
> Suggested
> [Add to the plan] I don't need this
>
> Owner
> Nobody yet
>
> Suggested for Ada's birthday party, from your Google Calendar
>
> Other ways this could go
> I'd ask Edward, who is already out for the library run that morning.
> [Ask Edward]
>
> Plan B · Take Alexis yourself. Saturday afternoon is clear for you.
> [I'll take Alexis]
>
> Plan C · Ask someone else in your inner circle.
> [Ask someone]
>
> Move to another day or time
````

**Replace with:**

````
*She taps the arrow. The party joins Saturday as hers, because she said it. Saturday afternoon is clear, so the coach adds the drop-off and the pickup with her as owner, and the read-back rises above the bar while Saturday stays in view. The end time is the one thing the coach doesn't know, so it asks.*

> Your coach · for Saturday
>
> Ada's birthday party at the Okafors' is in your plan for Saturday at 2:00, and you take Alexis, because Saturday afternoon is clear. When does the party end?
>
> [Add the end time]
>
> Other options

*Add the end time opens a sheet headed "When Ada's party ends" with a time picker and Save, and the pickup takes that time. Other options opens the drop-off's page at "Other ways this could go". In the second board, the party is on her Google Calendar instead, and the coach adds it in the same way.*

> Your coach · for Saturday
>
> Ada's birthday party on Saturday at 2:00 is in your plan, from your Google Calendar, and you take Alexis, because Saturday afternoon is clear. When does the party end?
>
> [Add the end time]
>
> Other options

*There is no review card on either board. Saturday shows the party with the calendar mark on the second board, "[Alexis] To the Okafors'" at 2:00 pm and "[Alexis] Pick up at the Okafors', time needed", both owned by You. Tapping the drop-off opens its page.*

> Back
>
> [Alexis] To the Okafors'
> Saturday · 2:00 pm · the Okafors'
>
> Owner
> You · Ask someone to take this
>
> Note
> Add a note
>
> Added for Ada's birthday party, from your Google Calendar
>
> Other ways this could go
> Plan B · Ask Edward, who is already out for the library run that morning.
> [Ask Edward]
>
> Plan C · Ask someone else in your inner circle.
> [Ask someone]
>
> Move to another day or time
>
> Take this out of the plan
````

## 66. A new wireframe-only board: a conflict on the pass

**Why.** Greg chose the Monday scenario on October 18, 2026. With the travel table as it stands, a carpool falling through makes no conflict by itself, so this board adds an 8:00 early start at Westview, which one driver can't meet beside Cedar Grove's 8:00 start (issue T50).

**Current:**

````
### Wednesday, Oct. 14, 5:30 pm · She adds to the game plan
````

**Replace with:**

````
### Monday, Oct. 12, 7:25 am · A conflict on the pass

*This board is not part of the moment. It shows Now when the leg she is about to drive conflicts with another item, in a Monday that goes differently from C-03. At 7:20 am Min-jung texts that the Parks' car won't start, and Charlotte shares the text to MVP. In this version of the morning, Westview starts at 8:00 for the kindergarten's fall assembly. Cedar Grove also starts at 8:00, and the two schools are 12 minutes apart, so one driver can't reach both by 8:00. Alexis's carpool now has nobody, so it stays in Later today, and Mallory's run leads Now with the conflict under its title. Edward works from home on Mondays.*

> Monday, Oct. 12
>
> [sunrise icon] This morning

> [Mallory] To Westview · B day
> Conflicts with Alexis's carpool
>
> Home → Westview
>
> 7:45 am
> in 20 min
>
> Drive 10 min · Arrive 7:55 · Starts 8:00
>
> [perforation]
>
> Mallory needs
> Lunch
> Sneakers, it's a motor skills day
> Reading folder, signed
>
> [Remind me] [Directions]

*The pill, the time and the fields are unchanged, because the leg still leaves at 7:45. The conflict line is set in Meta under the title.*

> Your coach · for today
>
> The Parks' car won't start, so Alexis needs a ride to Cedar Grove for 8:00, the same time as Mallory's assembly at Westview. Edward is home this morning, so I'd ask Edward to take Mallory to Westview at 7:45 while you take Alexis.
>
> [Ask Edward]
> Opens a request for you to send to Edward
>
> Other options

*Later today shows "7:40 am · [Alexis] Carpool to Cedar Grove" with Nobody yet and "Conflicts with Mallory's run". Other options opens the Leave sheet at its backups.*

> Other ways this could go
>
> Plan B · Take Mallory to Westview first, leaving at 7:45, and then Alexis. Alexis reaches Cedar Grove about 8:12, after the bell.
> [Take both girls yourself]
>
> I don't see another way that gets both girls there by 8:00.
>
> See the coach's reasons

*Ask Edward opens the draft below. Once she sends it, Mallory's run shows Edward's initial and an hourglass, and Alexis's carpool becomes hers, leaving at 7:40. Plan B depends on nobody.*

> To Edward
>
> Can you take Mallory to Westview this morning? It's the early start for the assembly, so leave at 7:45. The Parks' car won't start, so I'm taking Alexis.
>
> Edward answers with
> Monday · Mallory · To Westview, 8:00 am · [I've got it] [I can't do this]
>
> [Send]

### Thursday, Oct. 8, the week before · A notice for a new conflict

*This board is not part of a moment. On Thursday of her first week, Charlotte gives the coach Alexis's weekly schedule while she is on the game plan. The coach finds that violin at Lakeside Strings on Mondays at 4:00 runs into therapy at Brightwater at 3:30, marks both items on every Monday from next week, puts the dot under Monday in the week strip, and shows the notice below above the tab bar for about four seconds.*

> Violin and therapy overlap every Monday from next week.
> Show me Monday

*Show me Monday opens the game plan at next week's Monday. The notice asks for no decision, and the clash is more than a day away, so no phone notification is sent. On Sunday evening, Lakeside's text moves the demo week's lesson to Tuesday, which clears the clash for one week, and the Sunday board raises it again for the Monday after.*

### Wednesday, Oct. 14, 5:30 pm · She adds to the game plan
````

## 67. Section 3, a new moment, C-09

**Why.** Greg confirmed C-09 on October 17, 2026, written under the rule he approved on October 18 (issues G21 and G42). It is marked Optional for the script.

**Current:**

````
## The day in full: Thursday
````

**Replace with:**

````
## C-09 · Sunday, Oct. 18, 7:30 pm · Looking ahead to next week

*The house is quiet on Sunday evening, and Today turns to next week. This moment shows the Sunday look-ahead, something that was hers to choose joining the plan, and capture on the game plan. Earlier on Sunday Charlotte texted Lakeside Strings from the coach card on the 10:30 am board, and Lakeside moved Alexis's Monday lesson to 4:45, so violin on Monday carries the Changed mark and no conflict. Westview's harvest fair has been on the Westview card since C-00, and with its week arriving it is the one thing on the review card, because a fair is a choice. It runs into Mallory's Friday tutoring.*

**Today, as shown: the header**

> Sunday, Oct. 18
>
> [moon icon] Tonight

**Today, as shown: ready tonight**

> Ready tonight
>
> Alexis needs
> Library book
>
> Mallory needs
> Library book, it's an A day
>
> Both girls need
> Lunches

**Today, as shown: tomorrow starts**

| Time | Departure | Checklist |
| ----- | ----- | ----- |
| 7:40 am | Alexis leaves with the Parks | [Alexis] Library book · [Alexis] Lunch |
| 8:15 am | You take Mallory to Westview · A day | [Mallory] Library book · [Mallory] Lunch |

**Today, as shown: the coach card**

> Your coach · for next week
>
> Westview's harvest fair is on Friday from 3:00 to 5:00, and Mallory has tutoring with Ms. Reyes at 3:00 that day. Do you want the fair in your plan?
>
> [Add the fair]
> Updates your game plan
>
> I don't need this

*She taps Add the fair. The fair joins Friday as hers, both it and tutoring show "Conflicts with" the other, and the card turns to the way through.*

> Your coach · for next week
>
> The harvest fair on Friday at 3:00 overlaps Mallory's tutoring with Ms. Reyes. I'd skip tutoring on Friday, because Mallory sees Ms. Reyes on Tuesday at 3:00 this week.
>
> [Skip tutoring on Friday]
> Opens a text for you to send to Ms. Reyes
>
> Other options

*Other options opens next Friday's Leave sheet at its backups. The fair and tutoring are both at Westview, so Plan B keeps both and depends on nobody.*

> Other ways this could go
>
> Plan B · Mallory goes to tutoring at 3:00, and you meet Mallory at the fair at 3:45. Both are at Westview, and the fair runs until 5:00.
> [Keep both on Friday]
>
> See the coach's reasons

*Charlotte taps Skip tutoring on Friday, and the coach drafts the text. Ms. Reyes answers on her web page, as in C-06b, and Friday's tutoring leaves the plan when she does.*

> To Ms. Reyes
>
> Hi Ms. Reyes, Westview's harvest fair is on Friday at 3:00, so Mallory will skip tutoring that day. We'll see you Tuesday at 3:00. Thank you, Charlotte
>
> Ms. Reyes answers with
> [I've got it] [I can't do this]
>
> [Send]

*Back on Today, the card says how next week stands.*

> Your coach · for next week
>
> Mallory goes to the harvest fair on Friday once Ms. Reyes says yes, and Mallory's first Tuesday session with Ms. Reyes is at 3:00.
>
> [Open the game plan]
>
> Game plan updated

**Game plan, as shown: next week, opened from the card**

*The agenda opens at next week, because this week is over. There is no review card, because nothing is waiting. Monday shows violin at 4:45 pm with the Changed mark and therapy at 3:30 pm with no conflict. Tuesday shows Mallory's new session at 3:00 pm, "[Mallory] Second tutoring session, Westview library". Friday shows the harvest fair at 3:00 pm and tutoring at 3:00 pm with Ms. Reyes's initial and an hourglass.*

*She remembers something for the fair and types it into the capture bar.*

> Mallory needs a small pumpkin to paint at the fair

*She taps the arrow, and the read-back rises above the bar.*

> Your coach · for Friday
>
> A small pumpkin is on Mallory's list for the harvest fair on Friday.

*Nothing is unresolved, so the strip has no button, and it goes when she scrolls. The pumpkin is hers, because she said it, and it joins Friday morning's checklist under "Mallory needs".*

## The day in full: Thursday
````

## 68. Section 4, Today: the coach card button

**Why.** Greg chose "Add the start time" on October 18, 2026, so a button that asks for a fact says what she adds (issue G37).

**Current:**

````
When the coach asks for a fact, the button reads "Answer". |
````

**Replace with:**

````
When the coach asks for a fact, the button says what she adds, such as "Add the start time" or "Add the end time". |
````

## 69. Section 4, Today: the coach card for a new calendar event

**Why.** The event is in her plan already, so the card goes straight to the way through (issue G42).

**Current:**

````
| Coach card for a new calendar event | The label, then the event, "is new on your Google Calendar", or the calendar she connected, what it runs into, and an ask to add it, such as "Mallory's checkup at Northside Pediatrics at 3:30 is new on your Google Calendar, and it overlaps tutoring with Ms. Reyes. Add the checkup to your plan, and I'll help you sort out Friday." · Button: "Add" and the event, such as "Add the checkup" · Line: Updates your game plan · Link: I don't need this |
````

**Replace with:**

````
| Coach card for a new calendar event that runs into the plan | The label, then the event, "is in your plan, from your Google Calendar", or the calendar she connected, what it runs into, and the coach's recommendation, such as "Mallory's checkup at Northside Pediatrics on Friday at 3:30 is in your plan, from your Google Calendar, and it overlaps tutoring with Ms. Reyes. I'd skip tutoring this Friday, because Mallory's new Tuesday session with Ms. Reyes starts next week." · One button for the recommendation · Other options |
| Coach card for a school event she would choose | The label, then the event, what it runs into, and a question, such as "Westview's harvest fair is on Friday from 3:00 to 5:00, and Mallory has tutoring with Ms. Reyes at 3:00 that day. Do you want the fair in your plan?" · Button: "Add" and the event, such as "Add the fair" · Line: Updates your game plan · Link: I don't need this |
````

## 70. Section 4, Today: the done count

**Why.** The count moves to the foot of Later today, so the heading stands alone (issue T47).

**Current:**

````
| Beside "Later today" | The number done so far, shown once anything is done: before noon, such as "2 done this morning", and from noon, such as "3 done today" |
| Rows in Later today | The time, the chips and the item, such as "2:30 pm · [Mallory] Pick up at Westview" |
````

**Replace with:**

````
| At the foot of Later today | A line in Meta with the number done so far, shown once anything is done: before noon, such as "2 done this morning", and from noon, such as "3 done today" |
| Rows in Later today | The time, the chips, the calendar mark when the item came from her calendar, and the item, such as "2:30 pm · [Mallory] Pick up at Westview" or "3:30 pm · [Both] [calendar mark] Brightwater" |
| Calendar mark | A small calendar icon in ink/muted, never cerulean, drawn before the item's text on every row that carries it, with no tap target · Accessible label: From your calendar |
````

## 71. Section 4, Today: tasks and the conflict on the pass

**Why.** The words for a task's contact and action, and for a conflict under the pass's title (issues T49 and T50).

**Current:**

````
| Anytime task in Later today | Anytime, in the time column |
````

**Replace with:**

````
| Anytime task in Later today | Anytime, in the time column |
| A task on a checklist | The task's words, saying what to do and why, such as "Call Brightwater to ask for Dana Whitfield" · Beneath it in Meta, who to reach, such as "Brightwater Family Therapy · 555-0170" or "pickups@westviewk.org" · A button at the end of the row that does it: Call, for a phone number · "Send from" and the app, such as "Send from Mail", for a handoff, which reopens its draft · Message, for someone on MVP, which opens the composer with them chosen · Tapping the row anywhere but the button ticks it · A task she wrote herself carries only her words |
| A conflict on the pass | Under the title, in Meta: "Conflicts with" and the other item, such as "Conflicts with Alexis's carpool" · The pill, the time and the fields are unchanged |
| Notice for a new conflict | One line saying what overlaps and when, such as "Violin and therapy overlap every Monday from next week." · A link naming where it goes, such as "Show me Monday" · Above the tab bar for about four seconds, once per conflict, and until she dismisses it when VoiceOver is on |
````

## 72. Section 4, Requests: the line above Send

**Why.** Removed from every draft (issue G41).

**Current:**

````
| Line above the send button | You send this. MVP never sends anything for you. |
````

**Replace with:** nothing, so the text is removed.

## 73. Section 4, Game plan: the line under the review card heading

**Why.** Removed everywhere (issue G41).

**Current:**

````
| Line under the review card heading | Nothing goes in your plan until you add it. |
````

**Replace with:**

````
| At the foot of the review card, with two or more items | Add them all |
````

## 74. Section 4, Game plan: each item on the review card

**Why.** The calendar mark sits before the item's text (issue T48).

**Current:**

````
| Each item on the review card | The chips, the item and its start time, such as "[Mallory] Checkup, Northside Pediatrics, 3:30 pm", the calendar mark when it came from her calendar, any mark,
````

**Replace with:**

````
| Each item on the review card | The chips, the calendar mark when it came from her calendar, then the item and its start time, such as "[Mallory] Harvest fair, Westview, 3:00 pm", any mark,
````

## 75. Section 4, Game plan: the item page

**Why.** An item the coach added can be taken out (issue G42).

**Current:**

````
| Item page for a calendar item | Change this in Google Calendar., in place of Move to another day or time |
````

**Replace with:**

````
| Item page for a calendar item | Change this in Google Calendar., in place of Move to another day or time |
| Item page for an item the coach added | The source link names where it came from, such as "From your Google Calendar" or "Added for Ada's birthday party, from your Google Calendar" · At the foot: Take this out of the plan · Taking it out is never flagged back to her |
| Read-back when several things arrive together | The number and the source, such as "Three things from your Google Calendar are in your plan this week." · Link: Show what's new, which opens a sheet listing them, each with Take this out |
````

## 76. Section 4, Team: the line under This week

**Why.** Removed, because the Privacy card in Settings says it once (issue G41).

**Current:**

````
| Line under This week, for someone on MVP | Their name and "sees only what you send.", such as "Edward sees only what you send." |
````

**Replace with:** nothing, so the text is removed.

## 77. Section 4, Team: the notes above the button in a composer

**Why.** Removed from composers, and kept at the top of a chat and on a group page (issue G41).

**Current:**

````
| Note above the button, for a chat | "Only" followed by the people chosen and "see this chat. The coach doesn't read it.", such as "Only Edward and Claire see this chat. The coach doesn't read it." |
| Note above the button, for a group | Only the people in this group see this. The coach doesn't read it. |
````

**Replace with:** nothing, so the text is removed.

## 78. Section 4, Onboarding: the coach's introduction

**Why.** The second ticked line is her agreement (issue G42).

**Current:**

````
· Reminder, ticked: Remind me the night before a library day, or the reminder that fits her capture · Button: Next |
````

**Replace with:**

````
· Reminder, ticked: Remind me the night before a library day, or the reminder that fits her capture · Calendar line, ticked, shown when she connected a calendar: "Add events from my" and the calendar, "to my plan", such as "Add events from my Google Calendar to my plan" · Button: Next |
````

## 79. Section 4, Settings: the new card

**Why.** Her control over what the coach adds (issue G42).

**Current:**

````
| Notifications | Line: MVP can tell you these things on your phone.
````

**Replace with:**

````
| What the coach adds for you | Line: The coach adds these to your plan, and you can take anything out. · Rows, each with a switch: "Events from your" and the calendar, such as "Events from your Google Calendar" · "School-day changes for" and the children, such as "School-day changes for Alexis and Mallory" · Trips you can take yourself · Turning one off sends that kind to the review card instead |
| Notifications | Line: MVP can tell you these things on your phone.
````

## 80. Appendix A: her calendar

**Why.** The three repeating events join her plan at setup (issue G42).

**Current:**

````
The coach finds all three at setup, and she adds them from the game plan's review card in her first week.
````

**Replace with:**

````
The coach adds all three to her plan at setup, because she left the calendar line ticked on 0j.
````

## 81. Appendix A: Wednesday's call

**Why.** The task's words, contact and button (issue T49).

**Current:**

````
| Wednesday's call | "Call Brightwater", under "Before you leave" on Wednesday's checklist, is the task Charlotte added in C-05 to ask for Dana Whitfield. | Shows one of her own tasks sitting on the checklist beside a child's item. |
````

**Replace with:**

````
| Wednesday's call | "Call Brightwater to ask for Dana Whitfield", under "Before you leave" on Wednesday's checklist, with "Brightwater Family Therapy · 555-0170" and a Call button, is the task Charlotte added in C-05. | Shows one of her own tasks sitting on the checklist beside a child's item, carrying why, who and a way to reach them from what MVP already holds (issue T49). |
````

## 82. Appendix A: new facts for 3.20

**Why.** Every fact invented in this pass, with its reason.

**Current:**

````
| The flyer photo | A prepared photo of the flyer, staged like the rotation calendar on 0v. | The prototype reads no live photos. |
````

**Replace with:**

````
| The flyer photo | A prepared photo of the flyer, staged like the rotation calendar on 0v. | The prototype reads no live photos. |
| Her agreement to what the coach adds | Charlotte leaves "Add events from my Google Calendar to my plan" ticked on 0j, and the three switches in Settings read On. | Shows the rule Greg approved on October 18, 2026 working from setup onward, and gives Settings its values (issue G42). |
| The notice in her first week | On Thursday, Oct. 8, while she is on the game plan, Charlotte gives the coach Alexis's weekly schedule, and the coach finds that violin and therapy overlap every Monday. | Gives the notice a moment in Charlotte's story without adding one to the demo, because the clash is found before the demo week (issue G43). |
| The conflict on the pass | On a Monday that goes differently from C-03, Min-jung texts at 7:20 am that the Parks' car won't start, Charlotte shares it to MVP, and Westview starts at 8:00 for the kindergarten's fall assembly. Edward works from home on Mondays. | Greg chose this scenario on October 18, 2026. A carpool falling through makes no conflict on its own, because the schools are 12 minutes apart and start 30 minutes apart, so the board needs both girls due at 8:00 (issue T50). |
| The harvest fair's hours | The fair runs from 3:00 to 5:00 pm on Friday, Oct. 23 at Westview. | Gives C-09's Plan B its reason, because tutoring ends at 3:45 in the same building. |
| Lakeside's answer | On Sunday, Oct. 18, after Charlotte texts from the 10:30 am board, Lakeside moves Alexis's Monday lesson to 4:45 pm from next week. | Clears the Monday clash before C-09, so the Sunday look-ahead can turn to Friday, and shows the coach's recommendation from the Sunday board holding. |
| The pumpkin | Charlotte types "Mallory needs a small pumpkin to paint at the fair" on the game plan in C-09. | Gives C-09 one new thing she says about her own week, which joins the plan as hers with no button (issue G21). |
| Monday, Oct. 19 | An A day at Westview, so Mallory's library book goes back, and Alexis's library book is due as on every Monday. | Follows the October rotation, which runs B to F in the demo week. |
````

## 83. Appendix B, item 9

**Why.** No set presentation date (issue C26).

**Current:**

````
A demo presented weeks later will show dates in the past, and the single anchor in the seed is how it moves (issue C26).
````

**Replace with:**

````
**Decided October 17, 2026.** There is no set presentation date, so the demo stays in its October week whenever it is shown, and the anchor moves only for a new season, such as a school break or the spring (issue C26).
````

## 84. Appendix B, item 10

**Why.** Decided by Greg on October 17, 2026 (issue C18).

**Current:**

````
10. **It is not decided whether the four families live in the same town.** If they do, the place names reused from version 2.2 can stay.
````

**Replace with:**

````
10. **Decided October 17, 2026: each household lives in its own town,** with its own schools and places, so each week's driving is simple to follow and each seed file stands on its own. No place name carries over from Charlotte's week, and the version 2.2 place names stay only where they belong to that household (issue C18).
````

## 85. Appendix B, item 36

**Why.** Item 10 is decided (issue C18).

**Current:**

````
This waits on item 10, whether the four families share a town.
````

**Replace with:**

````
Item 10 is decided, so each household's places get addresses in its own town. Directions is staged in the prototype, so the addresses are a launch dependency (issue D2).
````

## 86. Appendix B, item 64

**Why.** C-09 is written (issue G21).

**Current:**

````
64. **A Sunday moment is proposed and not written.**
````

**Replace with:**

````
64. **Decided October 17, 2026: C-09 is written, as an Optional moment,** under the rule in item 78. The fair is the one item waiting, she adds it from the Sunday look-ahead, and she tells the coach about a pumpkin from the game plan. The proposal follows for the record. **A Sunday moment is proposed and not written.**
````

## 87. Appendix B, item 65

**Why.** Decided by Greg (issues G26 and G43).

**Current:**

````
65. **When a recurring conflict first shows is not decided.**
````

**Replace with:**

````
65. **Decided October 17, 2026: the mark shows as soon as the coach finds the conflict,** on both items and as the dot in the week strip, and a notice tells her in the moment when she is in the app. The coach card raises next week's conflicts in the Sunday look-ahead when nothing more pressing is waiting (issues G26 and G43). The question follows for the record. **When a recurring conflict first shows is not decided.**
````

## 88. Appendix B, item 66

**Why.** Settled by the approved proposal (issues G34 and G42).

**Current:**

````
66. **Where items already in the plan go when they come to need her is not decided.**
````

**Replace with:**

````
66. **Decided October 18, 2026: nothing from inside the plan gathers on the review card.** A "can't" and a conflict that needs a choice come to the coach card one at a time, an unopened Changed mark stays on its row with no dot, and a day holding a decision opens expanded (issues G34 and G42). The question follows for the record. **Where items already in the plan go when they come to need her is not decided.**
````

## 89. Appendix B, item 67

**Why.** Greg chose the phrase (issue G37).

**Current:**

````
"Answer" on the coach card, when the coach asks for a fact, has no phrase yet, and Greg to choose one (issue G37).
````

**Replace with:**

````
"Answer" on the coach card becomes a phrase that says what she adds, such as "Add the start time", which Greg chose on October 18, 2026 (issue G37).
````

## 90. Appendix B, item 72

**Why.** Greg accepted the proposal on October 17, 2026 (issue T42).

**Current:**

````
72. **A reminder sheet offers only the times still ahead.** When fewer than two choices are left, five minutes before joins them, and for a child leaving with someone else the last choice names the family and drops the traffic check, as in C-03. This is Claude's proposal. Greg to confirm (issue T42).
````

**Replace with:**

````
72. **Decided October 17, 2026: a reminder sheet offers only the times still ahead.** When fewer than two choices are left, five minutes before joins them, and for a child leaving with someone else the sheet is headed "Remind me", the last choice names the family and the traffic check is dropped, as in C-03 (issue T42).
````

## 91. Appendix B, item 76

**Why.** The indigo was revised with the surface ramp (issues C42 and C44).

**Current:**

````
Greg chose Indigo from the three blues on the page "Drafts - scrub 2": #3B4F9A text on a #E7E5F6 chip, 7.3:1 on paper and 6.7:1 on canvas, and darker than cerulean in grayscale.
````

**Replace with:**

````
Greg chose Indigo from the three blues on the page "Drafts - scrub 2", first as #3B4F9A text on a #E7E5F6 chip, and then revised it with the new surface ramp to #22549A on #DDE5ED, which is the value in "Color" (issue C44).
````

## 92. Appendix B, new items

**Why.** What this pass leaves open.

**Current:**

````
Whether a child from another family riding along should look different from an adult guest is worth checking in user testing.
````

**Replace with:**

````
Whether a child from another family riding along should look different from an adult guest is worth checking in user testing.
78. **Decided October 18, 2026: the coach adds what she has already committed to.** Greg approved g34-coach-adds-proposal.md as written, with her agreement as a ticked line on 0j rather than a question later in her first week, because she has just watched the coach read her calendar and the choice sits beside the reminder she already makes there. This partly reverses the October 16 rule that nothing from her calendar joins the plan until she adds it, which answered clutter from invitations, birthdays and other people's events, and those stay out. It changes a promise on screen, so Heather should see it before the investor demo (issue G42, spec F35).
79. **Decided October 18, 2026: lines that read as disclaimers come off the screen.** "Nothing goes in your plan until you add it.", "You send this. MVP never sends anything for you." and each person's "sees only what you send." are gone, and the privacy line leaves composers and stays at the top of a chat and on a group page. The calendar screen's promise, the recipient's answer line and "You don't need MVP to answer." stay, because each tells someone what to do or answers a permission (issue G41).
80. **The notice is drawn on a wireframe-only board.** Charlotte's Monday clash is found before the demo week, so no moment shows a notice. Whether a parent notices four seconds of text above the tab bar is worth checking in user testing (issue G43).
81. **C-09 leans on the Sunday 10:30 am board.** Lakeside's answer clears the Monday clash before C-09, so the presenter should either show that board first or say in a line that Lakeside answered. The presenter script settles which.
82. **The conflict on the pass is a wireframe-only board in a different Monday.** It contradicts C-03, where the Parks drive as usual, so it is never shown in the same run of the demo (issue T50).
````

## 93. Appendix C, version 3.20

**Why.** The change log entry for this pass.

**Current:**

````
# Appendix C: change log
````

**Replace with:**

````
# Appendix C: change log

## Version 3.20, October 18, 2026

Carries Greg's decisions of October 17 and 18, 2026 and his third round of prototype findings. The coach now adds to her plan what she has already committed to, and asks only about what is hers to choose. Lines that read as disclaimers come off the screen. C-09 is written for Sunday evening.

| # | Change |
| ----- | ----- |
| 1 | Section 2 gains "What the coach adds for her". Her own calendar events that involve a child or her driving, changes to her children's school day, and trips she is free to take join the plan as hers. Proposals from other people and school events she would choose wait on the review card, which gains Add them all. She agrees on 0j, controls each kind in Settings, and takes anything out from its page. "Her calendar", the capture rules, the game plan, C-00, C-01, C-06b, the wireframe-only boards for adding to the game plan, the week table, the messages table and section 4 follow (issues G42 and G34, spec F35). |
| 2 | A recurring conflict is marked as soon as the coach finds it, and a notice above the tab bar tells her in the moment. A wireframe-only board shows the notice in her first week (issues G26 and G43). |
| 3 | The lines that read as disclaimers come off the screen: the review card's line, the line above Send on every draft, the line under This week on person pages, the privacy note in composers and the second sentence of the group line (issue G41). |
| 4 | C-09, Sunday evening, is a new Optional moment: the Sunday look-ahead names the harvest fair, she adds it, the coach recommends skipping Friday's tutoring with Plan B keeping both, and she tells the coach about a pumpkin from the game plan (issue G21). |
| 5 | The coach card's button for a fact reads "Add the start time" (issue G37). |
| 6 | The done count moves to a line at the foot of Later today (issue T47). |
| 7 | The calendar mark sits before the item's text, in a muted ink, with no tap target and the accessible label "From your calendar" (issue T48). |
| 8 | A task carries why, who and a one-tap action, such as "Call Brightwater to ask for Dana Whitfield" with Brightwater's number and Call (issue T49). |
| 9 | A wireframe-only board shows a conflict on the pass, on a Monday when the Parks' car won't start and Westview starts at 8:00 (issue T50). |
| 10 | Each household lives in its own town (issue C18), the demo stays in its October week with the anchor moved only for a new season (issue C26), the reminder sheet rule is recorded as decided (issue T42), and section 2 gains "Color" with the Hearth values (issues C42 and C44). |
| 11 | Appendix A gains the facts for the notice, the conflict on the pass, C-09 and her agreement on 0j. Appendix B items 9, 10, 36, 64 to 67, 72 and 76 are updated, and items 78 to 82 are added. |
````

## 94. Section 1, terms: Game plan

**Why.** The review card holds only what is hers to choose (issue G42).

**Current:**

````
A review card at the top holds anything new that is waiting to go in her plan,
````

**Replace with:**

````
A review card at the top holds anything that is hers to choose before it goes in her plan,
````

## 95. Section 3, the Westview card: the harvest fair

**Why.** The fair's hours, for C-09 (Appendix A).

**Current:**

````
Harvest fair, Friday, Oct. 23, 3:00 pm
````

**Replace with:**

````
Harvest fair, Friday, Oct. 23, 3:00 to 5:00 pm
````

## 96. C-03b at 2:05 pm, the done count

**Why.** The count sits at the foot of Later today (issue T47).

**Current:**

````
*Beside the heading: 2 done today.*
````

**Replace with:**

````
*At the foot of Later today: 2 done today.*
````

## 97. C-03b at 2:31 pm, the done count

**Why.** The count sits at the foot of Later today (issue T47).

**Current:**

````
*Beside Later today: 3 done today. Remind me has gone,
````

**Replace with:**

````
*At the foot of Later today: 3 done today. Remind me has gone,
````

## 98. C-03b at 2:46 pm, the done count

**Why.** The count sits at the foot of Later today (issue T47).

**Current:**

````
*Beside Later today: 4 done today.
````

**Replace with:**

````
*At the foot of Later today: 4 done today.
````

## 99. C-06, the done count

**Why.** The count sits at the foot of Later today (issue T47).

**Current:**

````
*Beside the heading: 2 done this morning.*
````

**Replace with:**

````
*At the foot of Later today: 2 done this morning.*
````

## 100. C-06b, the done count

**Why.** The count sits at the foot of Later today (issue T47).

**Current:**

````
with "2 done today" beside the heading, because C-06b is after noon.
````

**Replace with:**

````
with "2 done today" at its foot, because C-06b is after noon.
````
