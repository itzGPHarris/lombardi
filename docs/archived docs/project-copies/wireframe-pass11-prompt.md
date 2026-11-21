# Prompt: wireframe pass 11, walkthrough navigation, Team and every remaining gap

*Paste everything below the line into Claude Design, with the current wireframe set and story fixtures version 3.13 attached. Fixtures 3.13 decides every word. This pass adds a way to click through the whole set, corrects the screens the readiness scrub found, draws the screens no wireframe has yet, and draws Team as a working tab.*

---

## What this pass is

This is a correction and completion pass on the grayscale wireframes for Most Valuable Parent (MVP). When it is done, the set should let a reviewer start at the index, press Next, and walk through Charlotte's whole week in order, from onboarding to Thursday night. The reviewer should also be able to reach every tab's own screens, including the Team screens that fixtures 3.13 adds.

The pass has six parts, which are set out in the sections below.

1. A Previous and Next mechanism on every page, driven by one ordered list.
2. A check that pass 10 landed everywhere, with its changes applied where it didn't.
3. Corrections to existing screens.
4. Screens the fixtures write that no wireframe shows yet.
5. Team as a working tab, with chats, person pages, the group page, both composers, adding someone and creating a group.
6. The recipient's side of every request.

Keep everything not listed below exactly as it is. Every word on screen comes from fixtures 3.13, and you should copy it exactly. If a screen needs words the fixtures don't have, use a short bracketed placeholder and list it in NOTES.md under "Copy needed". Don't invent copy to fill a gap.

Draw at phone width (440 px) in grayscale, as before. Don't draw wide versions of Today, Coach, Team or Kids, because those tabs keep the phone layout at wider sizes in the first build. The game plan's existing wide layout on 06 stays.

---

## 1. Walkthrough navigation on every page

The onboarding screens already have Previous and Next. Extend the same mechanism to every page in the set, so the whole set can be clicked through in one sequence.

**One ordered list drives everything.** Keep the order in a single list, in one file that every page reads, such as a walkthrough manifest. Each entry holds the screen number, its name, the moment ID where it has one, and the section it belongs to. The index page and the onboarding flow map read the same list. Reordering the walkthrough should mean editing that one list and nothing else.

**The bar.** Each page carries a walkthrough bar outside the phone frame. It is part of the wireframe set, not part of the product, so draw it so it can't be mistaken for product UI: put it above the frames, give it a thin dashed outline, and label it "Wireframe navigation" in small type. The bar holds the following:

- "← Previous" on the left, with the previous screen's number and name beneath it in small type.
- In the middle, the current screen's number and name, its moment ID and demo time where it has one, and its position, such as "40 of 63 · C-06 · Wednesday, Oct. 14, 11:45 am".
- "Next →" on the right, with the next screen's number and name beneath it.
- A "Jump to" menu listing the sections and the screens in each, and an "Index" link.

**Behavior.**

- The left and right arrow keys move to the previous and next screen, and Escape returns to the index.
- On the first screen, Previous is disabled. On the last screen, Next reads "Back to index".
- Next moves from page to page. A page that holds several panels, such as 0i's three states, stays one page with its panels side by side.
- Replace the onboarding screens' own Previous and Next with the shared bar, keeping their current look if it works, so there is one mechanism in the set.
- The bar is hidden when a page is printed or exported as an image, and a "Hide navigation" toggle on the bar does the same on screen. The images copied into the repository must show only the wireframe.

**The order.** Use this sequence. The section names become the groups in "Jump to". Where a number below doesn't match a screen in the current set, use the screen that shows that content and note the difference in NOTES.md. Screens marked "new" are drawn in this pass.

| # | Section | Screen | Content |
| ----- | ----- | ----- | ----- |
| 1 | Start | Index | The index and the onboarding flow map |
| 2 to 19 | Onboarding, C-00 | 0s, 0w, 0k, 0a, 0v, 0r, 0b, 0t, 0c, 0e, 0q, the permission sheet, 0f, 0g, 0h, 0p, 0j, 0i | Charlotte's first night, in the existing onboarding order, with 0i's three states and the skipped-capture state on the 0i page |
| 20 | Onboarding, C-00 | onboarding-19 | Failure and waiting states, and the Send to coach sheet |
| 21 | Her first week | 0d (onboarding-18) | Taught when useful, including the new panels in sections 4 and 5 of this pass |
| 22 | Monday, C-01 | 1a | The newsletter read-back |
| 23 | Monday, C-01 | 1c | Sharing Jenna's message from WhatsApp |
| 24 | Monday, C-01 | 4 | The voice note and the three options |
| 25 | Monday, C-01 | 4b | The capture bar |
| 26 | Monday, C-01 | 6b | The game plan with the conflict |
| 27 | Monday, C-02 | 5 | The request to Edward |
| 28 | Monday, C-02 | 5b | Edward's phone receiving the request |
| 29 | Monday, C-02 | 5c | Edward answering, and Charlotte's notification |
| 30 | Monday, C-03 | 1 | Getting the girls out the door |
| 31 | Monday, C-03 | 1e | The reply handed to WhatsApp |
| 32 | Monday afternoon | 1b | The afternoon board, which is not a moment |
| 33 | Monday, C-04 | 6 | Working the game plan, phone and wide |
| 34 | Monday, C-04 | 6c, new | "Change this in Google Calendar." |
| 35 | Tuesday, C-04b | 5d, new | Edward says yes to the library run with a note |
| 36 | Tuesday, C-05 | 7 | The coach card, the village post and the replies |
| 37 | Tuesday, C-05b | 1d | Forwarding the Westview email |
| 38 | Tuesday, C-05b | 12d | The Westview card after the change |
| 39 | Tuesday, C-05c | 10f, new | Asking Edward and Claire |
| 40 | Wednesday, C-06 | 2 | The Wednesday board and the coach card |
| 41 | Wednesday, C-06 | 5e, new | Edward changing his answer |
| 42 | Wednesday, C-06 | 4c, new | The full message behind Other options |
| 43 | Wednesday, C-06 | 5f, new | Min-jung's request card and her answer |
| 44 | Wednesday, C-06 | 2d, new | The card after "Move yoga to 12:15", and the card if Min-jung says no |
| 45 | Wednesday, C-06 | 2c, new | The reminder sheet, the set state and the notification |
| 46 | Wednesday, C-06b | 2b | The checkup on Friday, the text to Ms. Reyes and her web page |
| 47 | Wednesday, C-06b | 4d, new | The full message behind Other options |
| 48 | Wednesday, C-06c | 10g, new | A message to Claire |
| 49 | Wednesday, C-07 | 3 | Tonight |
| 50 | Thursday, C-08 | 8 | The picture day question and the answer |
| 51 | Thursday, C-08 | 9 | The article |
| 52 | Thursday, C-08b | 8b, new | The question about Mallory's cough |
| 53 | Team | 10a, redrawn | The Team tab on Monday, before any chat |
| 54 | Team | 10b, new | The Team tab on Wednesday at 5:00 pm |
| 55 | Team | 10c, new | Person pages: Edward, Claire, Dr. Ortiz and Min-jung |
| 56 | Team | 10d, new | Cedar Grove parents, the group page and its members |
| 57 | Team | 10e, new | The composer, for the inner circle and for the village |
| 58 | Team | 10h, new | Add someone and New village group |
| 59 | Kids | 12a | The Kids tab |
| 60 | Kids | 12b | Mallory's page |
| 61 | Kids | 12f, new | Alexis's page |
| 62 | Kids | 12c | The Westview card |
| 63 | Kids | 12e | The Cedar Grove card |

Update the index so it lists every screen in this order under the same section headings, each linked.

---

## 2. Confirm pass 10, and apply it where it didn't land

The last export showed pass 10 only on the standalone 0i page. Check each item below on the current screens. Where a screen still shows the old version, make the change.

- **Datelines.** Every Today screen shows the day and the date above the phase title: 0i "Monday, Oct. 5"; 01, 01b, and Edward's Today on 5, 5b and 5c "Monday, Oct. 12"; the Tuesday panel on 7 "Tuesday, Oct. 13"; 02, 02b and 03 "Wednesday, Oct. 14". The Send to coach sheet on onboarding-19 sits over a current header, with the dateline above "Tonight" rather than the day to its right.
- **C-00 headers.** No screen or the flow map says "Two weeks earlier". Every C-00 label reads "Monday, Oct. 5".
- **0v.** The photo note says the photo is headed "Westview Kindergarten" with "October 2026" beneath it.
- **0b.** The read-back's first sentence reads "This is Westview Kindergarten's calendar for October, with a six-day letter rotation."
- **0c.** "Oct. 6 to 9" sits beneath "Mallory's plan for this week", with the coach's line and the five rows from fixtures C-00.
- **0d.** The newsletter exchange is on Wednesday of her first week, at 4:20 pm.
- **Flow map.** 0i shows its three states in order.
- **12c.** The Calendar section reads "Picture day, Friday · Harvest fair, Friday, Oct. 23, 3:00 pm · Fir Hollow Farm field trip, Thursday, Oct. 29", and the Documents section reads "photo, last week".
- **0i-b.** The status bar reads 8:41.

---

## 3. Corrections to existing screens

- **0b, 0c, 0t and the flow map say "Mallory's plan", never "Mallory's week".** The buttons and labels read "Make Mallory's plan", "Making Mallory's plan…" and "Keep Mallory's plan". The hand-off reads "I can make a plan for Mallory's week from here, with library and sneaker days on Mallory's checklists and back-to-school night on Thursday." The account callout says "01 of 05".
- **The coach in the Coach tab conversation is set in sans.** On 1a, 1d, 4, 8, 12d step 1, 0d and every new Coach screen, the coach's messages use Body, the sans face. Fraunces stays for the coach only on the Today coach card and in onboarding. Correct the callouts on 4 and 8 that say otherwise.
- **The coach card label is set in the mono face,** as the Label style, on every coach card. Section names on Today, such as "Later today", use Title.
- **No uppercase labels.** On 8 and 9 the label reads "MVP Recommends · 4 min read". The article title on 9 uses the Voice style at semibold, in the serif face.
- **06 and 06b.**
  - Add "6:30 pm · [Family] Dinner with Claire" to Wednesday, on the phone and wide layouts.
  - The wide layout on 06 draws children as chips, with no "Mallory ·" dot.
  - On 06b, Thursday's ballet sits at 4:15 pm with the calendar mark.
  - Callout 1 on 06b says Jenna's message was shared at 6:16.
  - Callout 3 on 06b no longer says this is the only screen with a conflict mark.
  - Friday's free dress day shows "Nobody yet" with Suggested before C-01, and "You" with no status after Charlotte adds it.
- **1e.** The game plan row carries Alexis's chip, with the dot dropped.
- **02.** "Move yoga to 12:15" carries no icon, with "Updates your game plan" under it.
- **2b.** Move the floating "Send to coach" button, or the card, so "Opens a text for you to send to Ms. Reyes" and "Other options" read in full.
- **5 and 5c.**
  - The coach card on Today in 5c reads "Edward can't get Mallory at 2:30 on Thursday. I'd move your yoga to the 12:15 class, so you can collect Mallory yourself." The quote of Edward's note belongs on the Coach tab (4c).
  - Delete the callouts that say nobody in Charlotte's week uses the web page. Ms. Reyes uses it in C-06b.
  - Replace "Coach card (signal not decided)" with the coach's dot beside "Your coach · for Thursday".
- **7, the village composer.** The heading reads "New message", not "New post". Add the reply notification "Jenna Okafor replied to your post in Cedar Grove parents." as a small panel, and show "1 new" on the group's row.
- **Small callouts.**
  - On 0a, the callout no longer says the app asks for one thing before who she is. Skip leads to 0e.
  - On 0e, Continue with Apple leads to 0q.
  - On 0t, the MVP mark is the mark, not a spot illustration.
- **0d.** The panel holding "Read-back of her first forwarded newsletter, not written" is marked "Illustrative, not written in the fixtures" in its label, and listed in NOTES.md.

---

## 4. Screens the fixtures write that no wireframe shows yet

Draw each of these from fixtures 3.13, copying its words exactly.

- **2c, the reminder (C-06).** Draw three panels.
  - The sheet "Remind me to leave" over Wednesday's board, with "For 2:20 pm · Westview and Cedar Grove", the three choices with the first preselected, and "Set reminder".
  - Now after it is set, with the button reading "Reminder at 2:05" in its active state and the line "15 min before you leave · 22 min drive, 2 stops".
  - The notification "Leave in 15 min for Westview and Cedar Grove" with its body and the Directions and "Snooze 5 min" actions.
- **2d, two coach card states (C-06).**
  - The card after "Move yoga to 12:15", reading "Yoga is at 12:15 on Thursday now, and you collect Mallory at 2:30. Book the class with Willow so your spot is held.", with "Book at Willow" and its external-link icon, the link Undo, and the Meta line "Game plan updated". Add a callout saying Undo puts yoga back at 2:15 and Mallory's pickup back to "Edward can't".
  - The card from "If Min-jung says no", labeled "Your coach · for Thursday".
- **4c, the C-06 full message on the Coach tab.** It shows the quote of Edward's answer, the paragraph after it, the three options with "Take the 12:15 class at Willow." marked Recommended, Charlotte choosing the second option, the coach's follow-up, and the buttons "Ask Min-jung" and "Note to Westview".
- **4d, the C-06b full message on the Coach tab.** It shows the opening paragraph and the two options with "Skip tutoring this Friday." marked Recommended.
- **6c, dragging a calendar item.** Show Thursday's ballet with the calendar mark being dragged, and the message "Change this in Google Calendar."
- **12f, Alexis's page.** Follow 12b, with the content from fixtures "Kids, as shown: Alexis". Dance on Wednesday and therapy on Monday carry the calendar mark.
- **0d, the calendar teaching line.** Add a panel for a parent who tapped Not now on 0q. It shows the coach's line "Appointments like this one are probably on your calendar already…" with "Connect your calendar" and "Not now". Label it "Shown only to a parent who skipped the calendar". Charlotte never sees it.
- **8b, the question about Mallory's cough (C-08b).**
  - Charlotte's question.
  - The coach's answer in sans.
  - The button "Call Northside", the link "Add the cough to Friday's checkup", and "Based on" with its line.
  - A second panel after she taps the link, with the line "The note is on Friday's checkup."
  - A callout saying no article is attached, because a medical question gets a person.

---

## 5. Team as a working tab

Fixtures 3.13 makes Team a working tab: section 2 "Talking with her people", section 3 "The Team tab", moments C-05c and C-06c, and section 4 "Team". Draw every Team screen from those sections. Adults are outlined initials, children are name chips, and nothing on Team uses color to carry meaning.

- **10a, the Team tab on Monday, Oct. 12.** "New message" sits at the top. The sections run in this order: Chats, with the empty line "No chats yet. Start one with anyone in your inner circle who's on MVP."; Village groups; Inner circle; Village. "Add someone" and "New village group" sit below the lists. This replaces the current screen 10.
- **10b, the Team tab on Wednesday at 5:00 pm.** Claire's chat is unread, so its row shows "1 new" and the Team tab in the tab bar carries a dot. Draw the dot as a shape, with a callout giving the accessible label "Team, 1 new".
- **10c, four person pages,** for Edward, Claire, Dr. Ortiz and Min-jung, as written. Each page shows Back in place of the monogram.
  - Add a callout on Claire's page saying Dinner with Claire is not listed, because Claire is a guest.
  - Add a callout on Dr. Ortiz's page saying a person without MVP gets no "sees only what you send" line.
  - Add a callout on Min-jung's page saying village members have no Message button in this version.
- **10d, Cedar Grove parents.** Draw two panels. The first is the group page on Tuesday at 5:00 pm, with "8 members · See members", New post, the C-05 post and replies, and "You created this group last week." at the end. The second is the members list, with You and the seven village members.
- **10e, the composer.** Draw it with Inner circle chosen, showing "Everyone on MVP", Edward and Claire selectable, the three members without MVP marked "Not on MVP" and greyed, the line under them, the field "Write a message", the note naming the people chosen, and Send. Then draw it with Village chosen, showing Cedar Grove parents, the group note and Post.
- **10f, C-05c.** Draw two panels. The first is the composer with Edward and Claire ticked, which ticks "Everyone on MVP", and Charlotte's message. The second is the chat at 8:42 pm, headed "Edward and Claire", with the privacy line, the four messages oldest first, and the Message field with Send. Add a small panel with Claire's notification.
- **10g, C-06c.** Draw three panels. The first is the composer opened from Claire's page with "To: Claire" and "Still on for 6:30 tonight?". The second is the notification "Claire: Yes, see you at 6:30. I'll bring dessert." over Today. The third is the chat headed "Claire".
- **10h, adding people.** Add someone shows Min-jung's details with Village chosen, followed by "Min-jung Park is on MVP." and Done. The second outcome is for Ms. Reyes, with "Ms. Reyes isn't on MVP yet. Requests reach them by text message, and you can invite them to MVP." and "Invite by text" and "Not now". The invitation text appears in a messages-app panel labeled "Staged in the prototype". New village group shows "Cedar Grove parents" and the seven village members ticked.

Add a callout on 10f and 10g saying the coach never reads chats, and that nothing said in a chat changes the plan.

---

## 6. The recipient's side of every request

Draw these as the recipient's own phone. Head each with the recipient's name in the panel label, such as "Edward's phone".

- **5c, Edward answering (C-02).** Add a panel for his card after he answers, with "I've got it · Change" on each item and the line "Charlotte can see your answers. If anything changes, change your answer here."
- **5d, the library run (C-04b).** Draw three panels.
  - Edward's card "Request from Charlotte · Monday, 8:52 pm", with "Can you do the library run Saturday morning?" and the item.
  - His answer with the note "I'll take Mallory too, she wants new books."
  - Charlotte's game plan row reading "Library run, 10:00 am · Edward: yes · Changed", with the note beneath it. Add a callout saying the note never edits the plan, so Mallory is not added to the item.
- **5e, Edward changing his answer (C-06).** Draw his card with Alexis's item showing "I've got it · Change", Mallory's item reopened with both buttons, the note "Got pulled into a 2:00 Thursday, can't get Mallory at 2:30. I can still do Alexis at 1:30.", and "Send answer". Add Charlotte's notification "Edward changed his answer for Thursday."
- **5f, Min-jung (C-06).** Draw her request card "Request from Charlotte · 11:50 am" with Charlotte's text and the single item, then her card after she answers at 12:30 pm.
- **2b, Ms. Reyes (C-06b).** Add the text message "Charlotte sent you a request through MVP. You can answer here: mvp.example/r/k7m2" before the existing web page, and the web page after she answers, with her answer, a Change link and "Charlotte can see your answer. If anything changes, change your answer here."

---

## Index and notes

Update the index and the onboarding flow map from the walkthrough list. In NOTES.md, record the following:

- What changed in this pass, by section.
- Every screen number that differs from the order table, and why.
- Any placeholder that remains, under "Copy needed".

Don't change the fixtures.

## Why each change

- **The walkthrough bar** lets a reviewer, and later a tester, step through Charlotte's week in the order the demo tells it and reach every tab's screens. Today alone used to be the only path through the set. One ordered list keeps the index, the flow map and the bar from disagreeing.
- **Hiding the bar on export** keeps the images in the repository clean, because Codex builds from those images and must not build the bar.
- **The pass 10 check** is here because the last export showed pass 10 only on 0i (issue W3).
- **The corrections in section 3** come from the readiness scrub (W3). The coach is set in sans in the Coach tab because the fixtures and the design library agree on it. The yoga button loses its icon because the move never touches her calendar (T11). The composer heading changes because one composer now serves both chats and village posts (fixtures 3.13).
- **The screens in section 4** are written in the fixtures and had no wireframe (W4). The reminder sheet and the two card states are needed before the Today boards in Figma can be finished.
- **Team in section 5** follows Greg's decision that she can message one person in her inner circle or several at once, choosing them when she starts the chat (issue M4, fixtures 3.13, spec 0.13 §10). Without these screens, Team could not be tested end to end (W5).
- **The recipient screens in section 6** give View as something to show for every request in Charlotte's week (issues S1 and S5).
