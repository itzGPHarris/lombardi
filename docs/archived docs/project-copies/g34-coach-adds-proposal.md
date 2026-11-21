# Proposal: what the coach adds for her (G34, G26 and F35)

*MVP (Lombardi) · October 17, 2026 · For Greg's approval before fixtures 3.20 and spec 0.20*

## Summary

The game plan currently asks her to approve everything the coach finds, and every gap or change can turn into something that needs her. In a busy week that makes the plan a queue of decisions, which is the burden you want to avoid. This proposal changes one rule. The coach adds to her plan what she has already committed to somewhere else, such as an event on her own calendar or an early dismissal at her daughter's school, and it asks her only about proposals from other people and about choices that involve another person or a conflict. She agrees to this once at setup, controls it from Settings, and can take anything out from its page. The review card becomes small and rare, the disclaimer under it goes, and a new conflict reaches her as a short notice in the app as soon as the coach finds it.

The rule partly reverses G30 from October 16, which stopped calendar events from joining the plan by themselves. G30 was a response to clutter, and the clutter came from invitations, birthdays, holidays and events for other people. This proposal keeps all of those out, so what the coach adds is only what she would have added herself.

## 1. What the coach adds and what it asks about

| What the coach finds | What it does | In Charlotte's week |
| ----- | ----- | ----- |
| An event on her own calendar that takes a child somewhere, or her own appointment that decides when she can drive | Adds it to the plan as hers, with the calendar mark | Therapy, dance and ballet at setup, and Mallory's checkup in C-06b |
| A change to the school day for one of her children, such as an early dismissal, a closure, a dress day or picture day | Adds it, or changes the item it affects | Thursday's early dismissal and Friday's free dress day in C-01 |
| Something she types or says about her own week | Adds it as hers, as now | Yoga in C-01 and Hana's ride in C-03a |
| A trip to or from an event in her plan that she is free to take | Adds it with her as owner, and keeps asking someone else as a backup | The trips around Ada's party on the wireframe-only boards |
| A proposal from someone else, or a school event a parent chooses to go to | Puts it on the review card for her to add or turn down | Ms. Reyes's second session in C-04, back-to-school night in C-00 and the harvest fair in C-09 |
| Anything that needs another person's yes, or a conflict that needs a choice | Brings it to the coach card on Today, one decision at a time | Edward's "can't" in C-06 and the checkup's overlap with tutoring in C-06b |
| Events with no time, events for other grades, and invitations she hasn't accepted | Leaves them out, as now | The fifth-grade trip in the Cedar Grove newsletter |

The line between the second row and the fifth is whether the event changes her child's school day or invites her to attend. An early dismissal happens whether she plans for it or not, while a fair or a back-to-school night is a choice.

The coach still never sends anything to another person. Everything the coach adds stays in her own plan, so the locked decision about sending is untouched.

## 2. How she knows what the coach added

The coach says what is now in the plan where she is, in one read-back. It states the plan rather than describing what it did, as the voice rules already require. On the game plan, the read-back strip reads, for example, "Mallory's checkup on Friday at 3:30 is in your plan, from your Google Calendar." When several things arrive together, it reads "Three things from your Google Calendar are in your plan this week." with the link "Show what's new", which opens a sheet listing them, each with "Take this out".

Added items carry no mark on their rows, because a mark on every new item would bring back the clutter this change removes. Each item's page names where it came from, such as "From your Google Calendar", and offers "Take this out of the plan". Taking something out is never flagged back to her, and an event she takes out is not added again unless it changes on her calendar.

Today announces nothing the coach added unless it needs an answer from her. A plan that quietly stays current is the point of the change.

## 3. The review card

The review card holds only proposals from other people and school events she would choose to attend, so in most weeks it holds one thing or nothing. Its heading stays a full sentence, such as "One new thing is waiting to go in your plan.", and the line beneath it goes. Each item keeps "Add to the plan" and "I don't need this". When the card holds two or more items, "Add them all" at its foot saves her from tapping each one.

## 4. Items already in the plan that come to need her

This was the original G34 question, and under the new rule the list of what can need her gets much shorter.

- A trip nobody has taken becomes hers when she is free, so "Nobody yet" appears only when she can't take it herself, which is a real decision.
- A "can't" from someone she asked, and a conflict that needs a choice, come to the coach card on Today one at a time, as Edward's answer does in C-06.
- An unopened Changed mark is information rather than a decision, so it stays on its row and no longer puts a dot in the week strip.
- A day holding something that needs a decision opens expanded, and the week strip's dot marks it, so she never has to scroll to find it.

Nothing from inside the plan gathers on the review card, so the card keeps one meaning.

## 5. Her control over what the coach adds

She agrees once, at setup, and can change it whenever she likes.

- On 0j, beside the reminder line she already sees, a second ticked line reads "Add events from my Google Calendar to my plan". Tapping Next with it ticked is her agreement. If she unticks it, calendar events go to the review card as they do now.
- Settings gains a card, "What the coach adds for you", with the line "The coach adds these to your plan, and you can take anything out." and three switches: Events from your Google Calendar, School-day changes for Alexis and Mallory, and Trips you can take yourself. Turning one off sends that kind to the review card instead.

I recommend the ticked line on 0j over asking later in her first week. She has just watched the coach read her calendar on 0p, and the choice sits beside one she already makes on that screen. Asking after a few approvals would add a question in the middle of her week, which is the kind of interruption this proposal exists to remove.

## 6. A new conflict (G26)

- The mark appears as soon as the coach finds the conflict, on both items and as the dot in the week strip, as the boards already show.
- When she is in the app, a notice rises above the tab bar for about four seconds. It holds one line and a link that names where it goes, such as "Violin and therapy overlap every Monday from next week." with "Show me Monday", which opens the game plan at Monday. Each conflict gets one notice. When VoiceOver is on, the notice stays until she dismisses it.
- A conflict today or tomorrow goes to the coach card on Today instead, because it needs a choice soon.
- A conflict more than a day away sends no phone notification. The Sunday look-ahead raises it on the coach card when nothing more pressing is waiting.

A sheet is the wrong shape for this, because a sheet holds a decision, and opening one she didn't ask for would force a decision on her. A popover anchored to a row only works when the row is on screen, which a newly found conflict usually isn't. The library gains a Notice component for the toast.

In Charlotte's story the coach finds the Monday clash during her first week, when she gives it the girls' schedules. The demo therefore shows the mark and the Sunday card, and the notice is drawn on a wireframe-only board.

## 7. Disclaimer text

The review card's line, "Nothing goes in your plan until you add it.", goes everywhere it appears, along with its version in the coach's recap on 0j. The table lists the other reassurance lines on screen and what the 3.20 pass does with each unless you say otherwise.

| Line | Where | What the pass does |
| ----- | ----- | ----- |
| You send this. MVP never sends anything for you. | Above Send on every draft | Removes it. She taps Send herself, so the screen already shows who sends, and the rule lives in the product. |
| Edward sees only what you send. | Under This week on person pages | Removes it. The Privacy card in Settings says it once. |
| Only Edward and Claire see this chat. The coach doesn't read it. | Composers and the top of each chat, and the note on a village group | Keeps it at the top of a chat and a group page, where it describes the room she is in, and removes it from composers. |
| MVP reads your calendar and never changes it. | The calendar screen in setup | Keeps it. It answers the permission she is about to grant, and it is the line C22 asks Heather to approve. |
| Charlotte can see your answers. If anything changes, change your answer here. | The recipient's card and web page | Keeps it, because it tells the recipient how to act. |
| You don't need MVP to answer. | Ms. Reyes's web page | Keeps it, for the same reason. |

## 8. What changes in the demo

- **C-00.** The recap on 0j says that therapy, dance and ballet from her Google Calendar are in her plan, and the ticked line joins the reminder. Back-to-school night stays a suggestion, and the coach card on her first board names it as the one thing waiting.
- **C-01.** The newsletter read-back says that the early dismissal and the free dress day are in Alexis's plan, so its Add to the plan button goes. The review card still holds Ms. Reyes's second session.
- **C-04.** Nothing changes, because the second session is a proposal from someone else.
- **C-06b.** The checkup joins the plan from her calendar, and the coach card goes straight to recommending that she skip tutoring this Friday. The "Add the checkup" card and the checkup on the review card both go, so the moment loses a step and G38's two boards become one.
- **Ada's party, wireframe-only.** The party joins from her calendar, and the trips join as hers because Saturday afternoon is clear, with asking Edward as the backup. The pickup's end time is still the coach's one question.
- **C-09.** The harvest fair is the one item on the review card, and it runs into Friday's tutoring. She adds it from the Sunday look-ahead, and the coach card offers the way through.
- **Settings and the notice.** Settings gains the new card, and the notice gets a wireframe-only board.

Requests, the coach card's rules, the Leave sheet and Today's one edit stay exactly as they are.

## 9. F35 for spec Appendix B

| F | Feature | What it is | Status |
| ----- | ----- | ----- | ----- |
| F35 | The coach adds what she has already committed to | The coach adds her own calendar events that involve a child or her driving, changes to her children's school day, and trips she is free to take, and asks only about proposals from other people and choices that involve another person or a conflict. She agrees on 0j, controls each kind from Settings and takes anything out from its page. | Proposed for the prototype (G42) |
