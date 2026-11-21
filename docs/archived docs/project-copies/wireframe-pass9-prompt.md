# Prompt: wireframe pass 9, closing the gaps (fixtures v3.9)

*Paste everything below the line into the design tool, with story fixtures v3.9 and the current wireframe set attached. This pass fills the placeholders and draws the missing states that pass 8 reported. It adds no new feature.*

---

## What this pass is

This is a correction pass on the grayscale wireframes for Most Valuable Parent (MVP), built from story fixtures version 3.9. Version 3.9 writes in the words that earlier passes marked "copy needed", and it settles the four decisions pass 7 drew from: requests are answered item by item with an optional note, there are no read receipts, the capture bar has no Send, and the handoff to Edward is shown on two phones side by side. Keep everything not listed below exactly as it is.

Every word on screen comes from fixtures v3.9, from the moments or from section 4. Copy it exactly. If anything still needs words the fixtures do not have, use a short bracketed placeholder and list it in NOTES.md under "Copy needed".

## Placeholders to replace

| Screen | Placeholder | Replace with | Where it is in the fixtures |
| ----- | ----- | ----- | ----- |
| 0d | [Pasted WhatsApp message] | Min-jung Park: I can drive Monday mornings this term if anyone wants to share. 7:40 from our house. Then the coach's read-back and the teaching line, both from "Taught when useful". Set the status bar to 12:40 for this exchange and 4:20 for the newsletter one. | Taught when useful |
| 0f, state 3 | [Child] | Leave the Child name field empty, showing only its label, because Charlotte has no child who is not in school yet and this state is illustrative. | Section 4, Onboarding |
| 1d | [copy needed: email subject] | Changes to pickup requests start this week | Appendix A |
| 1d | [copy needed: Charlotte's forwarding address] | charlotte-k7m@forward.mvp.example | Appendix A |
| 1e | [copy needed: WhatsApp group name] | To Cedar Grove 4th Grade Parents | C-03, section 4 |
| 4b | [copy needed: example of typed text] | Picture day is Friday, and the green dress is in the laundry room. | Section 4, Coach |
| 4b | [copy needed: submit label] | Give this to the coach | Section 4, Coach |
| 5, 5c | [copy needed: add a note] | Add a note for Charlotte | Section 4, Requests |
| 5b, 5c | [copy needed: confirmation after answering] | Charlotte can see your answers. If anything changes, change your answer here. | C-02, section 4 |
| 5b, 5c | [copy needed: change my answer] | Change, as a link on each answered item | Section 4, Requests |
| 5b | [copy needed: notification text] | Charlotte asked you about Thursday's pickups. | C-02 |
| 5b | [copy needed: how Charlotte learns Edward answered] | A notification reading "Edward: yes to both pickups on Thursday.", with both pickups showing "Edward: yes" in her game plan | C-02 |
| 0q, permission sheet | [calendar provider] | Google Calendar, in plain text with no logo | Section 4, Onboarding |

## Changes to existing screens

- **1c, sharing from WhatsApp.** Redraw panel 1 the way WhatsApp works on an iPhone. The long-press menu shows Forward highlighted, not Share. Add a panel after it showing selection mode, with Jenna's message checked and the share button highlighted at the bottom right. The share sheet and "Sent to the coach" follow as before. Add a callout giving the Android route, which is a long press, the three-dot menu, and Share. This follows issue A5.
- **1e, the reply handed to WhatsApp.** After the reply is sent, show the task "Reply to the parents' group" on her list in the game plan, owned by You, the same way screen 5 shows the task left by the Mail handoff. Add a callout saying that every handoff leaves a task, because MVP cannot see whether it was sent.
- **5, 5b and 5c, requests.** Each request card lists its items with their own buttons, as in C-02: "Thursday · Alexis · Pick up at Cedar Grove, 1:30 pm" and "Thursday · Mallory · Pick up at Westview, 2:30 pm", each with "I've got it" and "I can't do this". Charlotte's draft preview reads "Edward answers each item with". If any panel still shows a Seen mark or a time on "Asked Edward", remove it, because there are no read receipts.
- **5c, Wednesday's change.** Show Charlotte's side as well: the notification "Edward changed his answer for Thursday.", followed by the coach card on screen 2.
- **06, the game plan.** Thursday's ballet moves to 4:15 pm at both sizes, because an item shows the time the thing starts. Add a callout saying that Today's departure shows the 3:55 pm leaving time.
- **12b, Mallory's page.** Ballet under "Every week" reads "Ballet, Studio Ten, Thursday 4:15 pm" and carries the calendar mark.

## New states

- **02b, the text to Ms. Reyes.** Add the web page Ms. Reyes opens from the text message, drawn like the web page on 5c, in two states. Before she answers, it shows "Request from Charlotte · 1:20 pm", Charlotte's text, the single item "Friday · Mallory · Tutoring with Ms. Reyes, Westview library, 3:00 pm" with its two buttons, the note field and "You don't need MVP to answer." After she answers, it shows the line from section 4 with her answer and a Change link. Then add Charlotte's notification, "Ms. Reyes: yes to Friday."
- **02b, Friday before she chooses.** Add a small panel of Friday in the game plan between the coach card and Charlotte's choice. It shows the checkup at 3:30 pm and tutoring at 3:00 pm, each with "Conflicts with" and the other item, and the checkup with the calendar mark. Friday after she answers stays as already drawn.

## Index and notes

Add the new panels to their existing screens rather than giving them new numbers. Update NOTES.md with what changed in this pass, mark every pass 7 and pass 8 placeholder as resolved with the fixtures section it came from, and list any placeholder that remains. Do not change the fixtures.

## Why each change

- **The placeholders** all have words in fixtures v3.9, so the wireframes can be read without gaps (issue W1).
- **1c** shows the real WhatsApp route, because investors who use WhatsApp would notice a Share item that isn't there (issue A5).
- **The task on 1e** follows the rule that every handoff leaves a task, which keeps the plan honest when MVP cannot see whether a message went.
- **The item-by-item cards and Charlotte's notifications** draw the answer side of a request, which was the gap in issue S5.
- **Ballet at 4:15 pm** settles the clash between screens 06 and 12b with one rule: an item shows when the thing starts, and a departure shows when to leave.
- **The Ms. Reyes web page and the Friday conflict** complete C-06b, which pass 8 drew only in part.
