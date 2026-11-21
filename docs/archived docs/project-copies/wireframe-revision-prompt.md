# Prompt: revise the Lombardi wireframes

*Paste everything below the line into the design tool, with story fixtures v3.6 and the current wireframe set attached. Before pasting, check the four decisions in the first section. Each one is my recommendation, logged in issues.csv as Greg's call. Strike or change any you disagree with, and the related screens change with it.*

---

## What this pass is

This is a correction pass on the existing grayscale wireframes for Most Valuable Parent (MVP), built from story fixtures v3.6. Keep everything that is not listed below exactly as it is: the page format, the callout style, the phone frame at 390 × 844 drawn at full scroll length, the wide frame at 1440 × 900, the generic grayscale treatment of other apps, and the screen numbering. These are wireframes for discussion, not visual design, so stay in grayscale and do not add color or brand styling.

The pass has three goals. First, draw the parts of the story that the fixtures describe and no screen shows: an email reaching MVP, a reply handed to WhatsApp, and a request crossing from one parent's phone to the other's. Second, draw how a request is answered, because today the recipient has only two buttons for the whole request and the fixtures already need more than that. Third, fix the small mismatches with the fixtures that the review found.

## Decisions this pass assumes

1. **Requests are answered item by item, with an optional note (issue S3).** A request that covers two pickups shows each pickup with its own "I've got it" and "I can't do this". The recipient can add a short note. A note never edits the parent's plan. It reopens that item, and MVP turns the note into options for her. There is no separate "yes with changes" status, so the four statuses stay Suggested, Asked, yes and can't.
2. **No read receipts (issue S4).** There is no Seen mark. "Asked Edward" can show how long ago she asked.
3. **The capture bar loses its standing Send icon (issue K4).** The bar holds camera, attach and microphone. While she has typed text in the field, the microphone is replaced by a submit arrow, and it returns when the field is empty. This keeps the word and idea of "Send" for requests to other people only.
4. **The device handoff is shown side by side (issue X2).** At presenter width, Charlotte's phone and Edward's phone appear next to each other, so an investor sees the request leave one phone and arrive on the other.

## Rule for words

Every word on screen comes from the fixtures, either from the moment it belongs to or from fixtures section 4. Many of the screens below need words the fixtures do not have yet. Where that happens, write a short bracketed placeholder that says what the words are for, such as "[copy needed: confirmation after answering]", and do not write the copy yourself. List every placeholder in NOTES.md under "Copy needed", with its screen, so the words can be written into the fixtures afterward.

## New screens

**1d · Forwarding an email (C-05b, Tuesday, 3:38 pm).** This is the email counterpart to screen 1c, and it is the most important addition, because email is the largest source of what reaches MVP and no screen shows it arriving. Draw three phones in the same layout as 1c. The first is a generic grayscale mail app, not drawn to any brand, showing Westview's email to families with its subject and first lines from the fixtures ("Starting this week, changes to who picks a child up go to pickups@westviewk.org rather than the main office address, by 11:00 am on the day."), with Forward highlighted. The second is the forward being addressed to Charlotte's private MVP address, shown as "[copy needed: Charlotte's forwarding address]", with Send in the mail app. The third is the Coach tab with the read-back from C-05b at the top, matching step 1 of screen 12d. A callout should say that this is the manual route, and that Sunday's newsletter arrives the same way without her doing anything once automatic forwarding is set up (onboarding-16).

**1e · The carpool reply handed to WhatsApp (C-03, Monday morning).** Screen 01 shows the coach card's See reply button, and nothing shows what happens next. Draw the reply draft in Charlotte's voice, "I can do Wednesday. Same time, 7:40?", addressed to the parents' WhatsApp group, with the line "You send this. MVP never sends anything for you." and the button "Send from WhatsApp". Next to it, draw the generic messaging app with the reply in the group, and then Wednesday's carpool in the game plan showing "You" as owner with no status. Follow the pattern of the Mail handoff on screen 05.

**5b · The handoff to Edward, side by side (C-02, Monday, 6:40 am to 7:52 am).** Draw a wide presenter frame with Charlotte's phone on the left and Edward's phone on the right, labeled with each person's name above the frame. Show three steps across the page, each as a pair of phones. In step 1 at 6:40 am, Charlotte taps Send on her draft, and Edward's phone shows a lock-screen notification, "[copy needed: notification text]". In step 2 at 7:52 am, Edward's own MVP shows the request card at the top of his Today with his monogram E and "This morning", and he answers each pickup (see screen 5c). In step 3, Charlotte's game plan shows both pickups as "Edward: yes", and her phone shows how she learns of it, "[copy needed: how Charlotte learns Edward answered]". Edward's Today below the card holds only the items he owns and the requests Charlotte sends him, and because the fixtures do not list his items, keep that area as a labeled placeholder, as screen 05 does today.

**5c · Answering a request (C-02 and C-06).** Draw the recipient's side of a request in four states, all on Edward's phone.

- **The card before answering.** Charlotte's text appears in full, then each pickup as its own row, "Alexis · Pick up at Cedar Grove, early dismissal, 1:30 pm" and "Mallory · Pick up at Westview, 2:30 pm", each with "I've got it" and "I can't do this". Below the rows is a note field, "[copy needed: add a note]".
- **After answering yes to both at 7:52 am.** Show what Edward sees, "[copy needed: confirmation after answering]", with each row showing his answer and a way to change it, "[copy needed: change my answer]".
- **Changing his answer on Wednesday at 11:40 am (C-06).** Alexis stays "I've got it" and Mallory changes to "I can't do this", with his note: "Got pulled into a 2:00 Thursday, can't get Mallory at 2:30. I can still do Alexis at 1:30."
- **The same answer on the web page for someone without MVP.** Show the per-item buttons and the note, with "You don't need MVP to answer." under the buttons, and the page after answering.

Add a callout explaining that a note never changes Charlotte's plan. It reopens the item, and the coach card on screen 02 turns it into options. That card already quotes Edward's note, so screen 02 needs no change.

**4b · The capture bar in its two states.** Draw the bar on its own at a larger scale. The empty state has camera, attach and microphone, with the placeholder "Talk, type or add a photo". The typed state has some text in the field and the submit arrow in place of the microphone. Label each control with its accessible label: Camera, Attach, Microphone and, for the arrow, "[copy needed: submit label]".

## Changes to existing screens

- **01a, 04 and 12d:** Replace the four-control capture bar with the empty state from 4b. Update callout 7 on screen 04 to describe three controls and the submit arrow.
- **01c:** Change the moment line from "Monday, 6:10 am, just before the voice note" to "Monday, 6:16 am, after the newsletter read-back", and change the status-bar times to 6:16. Fixtures v3.5 moved the share after the read-back.
- **01, 03 and 06 at wide size:** The sidebar is headed "MVP" alone, which the wordmark rule forbids. Change it to "Most Valuable Parent" as one unit.
- **05:** Panel 2, Edward's own MVP, now shows per-item answers, matching the first state on 5c. Point its callout to 5b and 5c. Keep panels 1, 3 and 4 as they are, except that panel 3's web page gains per-item answers to match 5c.
- **06:** In "This week's changes", in both the open and closed versions, change "Library" to "Library run" to match the fixtures and the week below it.
- **07:** On the new post composer, show "Back" at the top right in place of the monogram, because pages opened inside a tab show Back.
- **12d:** In step 1, change the read-back from "instead of the main office address" to "instead of the office address", which is the fixtures' wording.

## Index and notes

Add 1d, 1e, 4b, 5b and 5c to the index in their numbered places, and add a "Capture and handoffs" group that links 1c, 1d, 1e, 5, 5b and 5c in story order, so the whole route of a message into and out of MVP can be followed in one pass. Update NOTES.md with what changed in this pass, the four assumed decisions, and the full "Copy needed" list. Do not change the fixtures.

## Why each change

- **1d** exists because email is the biggest source by volume and the demo depends on it as much as on the share menu, yet no screen shows an email reaching MVP (issue A3).
- **1e** draws the one outbound handoff the fixtures describe without a screen (issue S2).
- **5b** makes the device handoff visible. In a single phone frame, C-02 looks like Charlotte's screen changing rather than Edward receiving something (issue X2).
- **5c** draws the answer side of a request, which was missing entirely. C-06 already needs a per-item answer with a note, which two buttons cannot express (issues S3 and S5).
- **4b** removes a Send icon that suggests something leaves MVP when it only submits text to the coach (issue K4).
- **The small fixes** bring the wireframes back in line with the fixtures (issues A4, T4, G3, M5 and L3).
