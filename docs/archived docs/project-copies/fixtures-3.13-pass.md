# Correction pass: story fixtures 3.12 to 3.13

*MVP (Lombardi) · October 14, 2026 · Team, the inner circle and every tab between moments, at Greg's direction*

## Summary

Fixtures 3.12 built Charlotte's week around Today. The other tabs appear only where a Today moment sends her there, so the Team tab, the inner circle and the other side of each request were never written as screens. This pass fills that gap so the build can be tested end to end, from every tab at every moment.

It does five things.

- **It adds chats with the inner circle, following Greg's decision on issue M4.** Charlotte can message one person in her inner circle directly, or start a group chat with several of them or all of them. She chooses the people when she starts the chat, from "New message" on the Team tab or from Message on a person's page. The same composer posts a question to a village group when she chooses Village.
- **It writes the Team tab as shown.** That covers the tab at the start of the week and on Wednesday evening, a page for each kind of person, the village group page, the composer, a chat, adding someone and creating a group.
- **It adds four moments.** C-04b has Edward answering the library run with a note. C-05c has Charlotte asking Edward and Claire how to tell Alexis about her therapist. C-06c is a direct message with Claire about dinner. C-08b is a question about Mallory's cough, where the coach names Dr. Ortiz from her inner circle and stops short of medical advice.
- **It writes the recipient's side of every request in Charlotte's week.** Those are Edward's answers in C-02 and C-06, Min-jung's card in C-06 and Ms. Reyes's text and web page in C-06b. That closes the words for issue S5 and scopes issue S1.
- **It adds a rule for what each tab shows between moments.** A tester can open any tab at any moment and the fixtures say what should be there. Section 1 of this pass is the inventory that proves every flow is accounted for.

Some of this is invented, and every invented fact is listed in the Appendix A rows below. The spec needs a matching pass on §9 and §10 before Codex builds Team (new issue M6), and the wireframes need the new screens (new issue W5). Both are listed at the end of this pass.

Every replacement below is written to paste into `docs/story-fixtures.md` at version 3.12. Where a passage is replaced, the current text is quoted so it can be found exactly.

---

## 1. Flow inventory

This table lists every flow a tester can reach in Charlotte's household and says where its words are written. "This pass" means the flow is new or completed here. Settings is the one flow left as a placeholder, because nothing in the four stories depends on it.

| Tab | Flow | Where the words are | State after this pass |
| ----- | ----- | ----- | ----- |
| Onboarding | Splash to her first board, including skips and failures | C-00, section 4 "Onboarding" | Complete |
| Today | Morning, afternoon and Tonight boards | C-00, C-03, the Monday afternoon board, C-05, C-06, C-06b, C-07 | Complete |
| Today | Coach card: accept, answer, other options, undo, after states | C-00, C-03, C-05, C-06, C-06b, "If Min-jung says no" | Complete |
| Today | Remind me, the reminder sheet and the notification | "Now: reminders and directions", C-06 | Complete |
| Today | Directions and the drive line | "Now: reminders and directions", C-03, C-06 | Complete, with the maps app staged |
| Today | Send to coach and its sheet | "Today shows today", section 4 | Complete |
| Today | MVP Recommends card and the article | C-03, C-06, "MVP Recommends for Charlotte" | Complete |
| Coach | Read-backs of a newsletter, a share and an email | C-01, C-05b | Complete |
| Coach | Voice note, options and a recommendation | C-01 | Complete |
| Coach | Full message behind "Other options" | C-06, C-06b | Complete |
| Coach | A parenting question with an article | C-08 | Complete |
| Coach | A question that needs a professional | C-08b | This pass |
| Coach | The conversation when the tab is opened between moments | "Every tab at every moment" | This pass |
| Game plan | The week, This week's changes and Next week | "The week in the game plan", C-01, C-04 | Complete, with Next week's rule added in this pass |
| Game plan | Drag, note, putting a name against an item, opening a changed item | C-04 | Complete |
| Game plan | Dragging a calendar item | Section 2 "Her calendar", section 4 | Complete |
| Requests | Drafting and sending a request in MVP | C-02, C-04, C-06 | Complete |
| Requests | The recipient answering, adding a note and changing an answer | C-02, C-04b, C-06 | This pass |
| Requests | A request by text and the web page | C-06b | This pass |
| Requests | A handoff to WhatsApp or email, and its task | C-03, C-06 | Complete |
| Team | The tab, before and after chats | "The Team tab" | This pass |
| Team | A person's page, for each kind of person | "The Team tab" | This pass |
| Team | New message to one, several or all of the inner circle | Section 2 "Talking with her people", C-05c, C-06c | This pass |
| Team | A chat, its replies and the unread mark | C-05c, C-06c | This pass |
| Team | A post to a village group and its replies | C-05 | Complete, with the composer heading changed in this pass |
| Team | The village group page and its members | "The Team tab" | This pass |
| Team | Adding someone, on MVP or not, and inviting by text | "Taught when useful", section 4 | This pass |
| Team | Creating a village group | "Taught when useful", section 4 | This pass |
| Kids | Child pages, school cards, a card update and its history | "The Kids tab", C-05b | Complete |
| Settings | The monogram and the Settings page | Section 4 "Navigation" | Placeholder by decision, spec §13 |
| Demo controls | Switcher, View as and reset | Spec §15 | Complete. View as is scoped in this pass. |

---

## 2. Version line

Replace the version line at the top with:

> *MVP (Lombardi) · Version 3.13 · October 14, 2026 · Charlotte and Edward only*

## 3. Section 1, "Terms used in this document"

Replace the Team row with:

> | Team | The tab that holds the adults around the parent, meaning her inner circle and her village, together with her chats and her village groups. Versions 3.1 and 3.2 called it Your people. |

Add these rows after the Village group row:

> | Chat | A private conversation between the parent and one or more people in her inner circle who have MVP. A chat with one person is a direct message, and a chat with several is a group chat. The coach never reads chats. |
> | Person page | The page for one adult on the Team tab, with how to reach them, what in this week's plan involves them, and the chats or groups she shares with them. |

## 4. Section 2, "The people around a parent"

Add this text at the end of the section, after the paragraph ending "but it never reads her village groups.":

> ### Talking with her people
>
> **She talks with her inner circle in chats.** A chat is a private conversation between the parent and one or more people in her inner circle. She starts one with "New message" at the top of the Team tab, or with Message on a person's page, and she chooses who it is for. She can choose one person, several, or "Everyone on MVP", which chooses all of them at once and is how she asks her whole circle something. A chat with one person is a direct message, and a chat with several is a group chat. If she chooses exactly the people of a chat she already has, her message goes into that chat rather than starting a second one.
>
> **Only people with MVP can be in a chat.** People in her inner circle who don't have MVP, such as a pediatrician or a tutor, appear in the composer marked "Not on MVP" and can't be chosen. Their page offers Call, and Text when MVP has a mobile number for them, and parts of the plan still reach them as a request by text message, as in C-06b.
>
> **Questions for the village go to a village group.** The same composer, with Village chosen, posts to one of her village groups, as in C-05. Messaging one member of her village directly is not part of this version (Appendix B, spec F22).
>
> **Chats are as private as groups.** Only the people in a chat see it. The coach never reads chats, and nothing said in a chat changes the plan. A request is still how part of the plan goes to someone, because a request carries the items and the answer buttons and a chat does not.
>
> **She hears about new messages.** Each new message in a chat and each reply to her post in a group arrives as a notification. The chat or group row shows "1 new" until she opens it, and the Team tab carries a dot.
>
> **Adding people is part of Team.** "Add someone" asks for a name, a mobile number, who they are to her and whether they belong in her inner circle or her village. MVP checks the number, and if the person has MVP the row says so. If they don't, MVP offers an invitation by text that she sends herself, and she can always skip it. An invitation leaves no task on her list, unlike a handoff of a message about the plan, because it is not part of the plan. Calling someone opens her phone app and leaves no task either.
>
> **She creates village groups.** "New village group" asks for a name and the people from her village to add. Everyone in a group needs MVP to see its posts, so only people with MVP can be chosen.

## 5. Section 2, a new section after "The game plan holds the week"

> ## Every tab at every moment
>
> The household switcher jumps to a moment, and the tester can then open any tab. Every tab shows its state at that moment, worked out from the moments before it, so nothing is blank and nothing from later in the week shows early.
>
> - **Coach** shows the conversation up to the moment, oldest at the top, with a heading for each day. The current day's heading is "Today" and earlier days are named, such as "Monday". Before C-01 the conversation starts with the coach's introduction from C-00 and the lines in "Taught when useful".
> - **Game plan** shows the week as the table in "The week in the game plan" stands at that moment, using its "Changes during the demo" column. "Next week" shows next week's routine items and anything moved there, such as Mallory's second tutoring session after C-04.
> - **Team** shows the chats, posts and replies that exist by that moment, with "1 new" on anything that arrived since she last opened it, following "The Team tab".
> - **Kids** shows each card as it stands at that moment, so the Westview card carries its change from C-05b onward.
>
> View as, in the household switcher, shows a moment from the recipient's side. It shows the recipient's Today with the requests she has sent them, and the screens they use to answer. The recipient's other tabs are not part of the demo.

## 6. Section 2, "What every family shows"

In the table below the list, replace Charlotte and Edward's row with:

> | Charlotte and Edward | Onboarding, the Today board, how much of the week the coach can build from what she photographs, forwards and says and from her own calendar, and how she works with her inner circle and her village | Written in this version |

---

## 7. Section 3, "Her people"

Replace the table and the paragraph beneath it with:

> The second-to-last column is the line shown under each person's name on the Team tab. The last column is the number MVP holds for them, which every number takes from the 555-01 range reserved for fiction.
>
> | Person | Group | Who they are, for the team | Has MVP | On screen | Number |
> | ----- | ----- | ----- | ----- | ----- | ----- |
> | Edward | Inner circle | Her husband | Yes | Your husband | Mobile 555-0101 |
> | Claire | Inner circle | Charlotte's sister, who lives an hour away. Too far for pickups, and they talk most days. | Yes | Your sister | Mobile 555-0102 |
> | Dr. Lena Ortiz | Inner circle | The girls' pediatrician at Northside Pediatrics | No | Pediatrician, Northside Pediatrics | Northside Pediatrics 555-0160 |
> | Karen Moss | Inner circle | Alexis's therapist at Brightwater Family Therapy for the past year, with sessions on Monday at 3:30 pm | No | Alexis's therapist, Brightwater | Brightwater Family Therapy 555-0170 |
> | Ms. Reyes | Inner circle | Mallory's reading tutor, with sessions on Friday at 3:00 pm in the Westview library | No | Mallory's reading tutor | Mobile 555-0103 |
> | Min-jung Park | Village | A Cedar Grove parent. Her daughter Sophie is in Alexis's class and her daughter Hana is in Mallory's class at Westview. The Parks drive the Monday carpool and live two streets from Linden Avenue. | Yes | Sophie and Hana's mom · Monday carpool | Mobile 555-0104 |
> | Jenna Okafor | Village | A Cedar Grove parent. Her daughter Ada is in Alexis's class, and the Okafors drive the Wednesday carpool. | Yes | Ada's mom · Wednesday carpool | Mobile 555-0105 |
> | Tom Alvarez | Village | A Cedar Grove parent in the village group | Yes | Cedar Grove parent | Mobile 555-0106 |
> | Grace Liu | Village | A Cedar Grove parent in the village group | Yes | Cedar Grove parent | Mobile 555-0107 |
> | Dev Raman | Village | A Cedar Grove parent in the village group | Yes | Cedar Grove parent | Mobile 555-0108 |
> | Nina Brooks | Village | A Cedar Grove parent in the village group | Yes | Cedar Grove parent | Mobile 555-0109 |
> | Rafael Costa | Village | A Cedar Grove parent in the village group | Yes | Cedar Grove parent | Mobile 555-0110 |
>
> Charlotte has one village group, **Cedar Grove parents**, which she created on Thursday of her first week. It has eight members: Charlotte, Min-jung, Jenna, Tom, Grace, Dev, Nina and Rafael. The fourth-grade parents' WhatsApp group is separate and stays in WhatsApp. She forwards messages from it into MVP when she wants the coach to see them.
>
> At the start of the demo week Charlotte has no chats. Her first, with Edward and Claire, starts in C-05c.

## 8. Section 3, a new section after "The Kids tab"

> ## The Team tab
>
> These are Charlotte's Team screens. Rows for adults lead with the person's outlined initial, following "How people are shown".
>
> **Team, as shown: Monday, Oct. 12, 6:00 am, before C-01**
>
> | Part | Content |
> | ----- | ----- |
> | Header | Team · [New message] |
> | Chats | No chats yet. Start one with anyone in your inner circle who's on MVP. |
> | Village groups | Cedar Grove parents · 8 members · You created this group last week. |
> | Inner circle | Edward · Your husband · On MVP<br>Claire · Your sister · On MVP<br>Dr. Lena Ortiz · Pediatrician, Northside Pediatrics<br>Karen Moss · Alexis's therapist, Brightwater<br>Ms. Reyes · Mallory's reading tutor |
> | Village | Min-jung Park · Sophie and Hana's mom · Monday carpool · On MVP<br>Jenna Okafor · Ada's mom · Wednesday carpool · On MVP<br>Tom Alvarez · Cedar Grove parent · On MVP<br>Grace Liu · Cedar Grove parent · On MVP<br>Dev Raman · Cedar Grove parent · On MVP<br>Nina Brooks · Cedar Grove parent · On MVP<br>Rafael Costa · Cedar Grove parent · On MVP |
> | Below the lists | [Add someone] [New village group] |
>
> **Team, as shown: Wednesday, Oct. 14, 5:00 pm, after C-06c**
>
> Claire's reply has arrived and Charlotte has not opened it, so the Team tab carries a dot.
>
> | Part | Content |
> | ----- | ----- |
> | Chats | Claire · Claire: Yes, see you at 6:30. I'll bring dessert. · 4:58 pm · 1 new<br>Edward and Claire · You: Sunday night it is. · Tuesday |
> | Village groups | Cedar Grove parents · 8 members · Min-jung Park: Sophie sees Dana Whitfield there and really likes her. · Tuesday |
> | Inner circle and Village | As on Monday |
>
> A row's latest message is cut to one line. Chats and groups are ordered by their latest message, newest first.
>
> **Team, as shown: Edward's page, on Wednesday after C-06**
>
> | Part | Content |
> | ----- | ----- |
> | Header | Back · Edward |
> | Line | Your husband · On MVP |
> | Actions | [Message] [Call] |
> | Contact | Mobile · 555-0101 |
> | This week | Thursday · [Alexis] Pick up at Cedar Grove, 1:30 pm · Edward: yes<br>Thursday · [Mallory] Pick up at Westview, 2:30 pm · Edward can't<br>Saturday · Library run, 10:00 am · Edward: yes |
> | Under This week | Edward sees only what you send. |
> | Chats | Edward and Claire |
>
> **Team, as shown: Claire's page, on Wednesday after C-06c**
>
> | Part | Content |
> | ----- | ----- |
> | Header | Back · Claire |
> | Line | Your sister · On MVP |
> | Actions | [Message] [Call] |
> | Contact | Mobile · 555-0102 |
> | This week | Nothing in this week's plan with Claire. |
> | Under This week | Claire sees only what you send. |
> | Chats | Claire · Edward and Claire |
>
> Dinner with Claire does not appear on Claire's page, because Claire is named as a guest and is neither its owner nor asked about it.
>
> **Team, as shown: Dr. Ortiz's page, on Wednesday after C-06b**
>
> | Part | Content |
> | ----- | ----- |
> | Header | Back · Dr. Lena Ortiz |
> | Line | Pediatrician, Northside Pediatrics · Not on MVP |
> | Actions | [Call] |
> | Contact | Northside Pediatrics · 555-0160 |
> | This week | Friday · [Mallory] Checkup, Northside Pediatrics, 3:30 pm, with the calendar mark |
>
> A person who doesn't have MVP sees nothing in MVP, so the page has no line about what they see. The checkup is listed because the coach links it to Northside, which is Dr. Ortiz's practice.
>
> **Team, as shown: Min-jung's page, on Wednesday after C-06**
>
> | Part | Content |
> | ----- | ----- |
> | Header | Back · Min-jung Park |
> | Line | Sophie and Hana's mom · Monday carpool · On MVP |
> | Actions | [Call] |
> | Contact | Mobile · 555-0104 |
> | This week | Monday · [Alexis] Carpool to Cedar Grove, 7:40 am<br>Thursday · [Mallory] Pick up at Westview, 2:30 pm · Min-jung: yes |
> | Under This week | Min-jung sees only what you send. |
> | Groups | Cedar Grove parents |
>
> Village members have no Message button, because messaging one village member directly is not part of this version.
>
> The other person pages follow the same pattern. Karen Moss's page offers Call with Brightwater's number and lists Alexis's Monday therapy. Ms. Reyes's page offers Call and Text with her mobile, and lists Friday's tutoring with "Ms. Reyes: yes" after C-06b, because the page records the request even after the item leaves the plan. The five other village members' pages list nothing this week and show Cedar Grove parents under Groups.
>
> **Team, as shown: Cedar Grove parents, on Tuesday at 5:00 pm**
>
> | Part | Content |
> | ----- | ----- |
> | Header | Back · Cedar Grove parents |
> | Line | 8 members · See members |
> | Action | [New post] |
> | Posts | The post and replies from C-05, as shown there |
> | At the end of the list | You created this group last week. |
> | Note above the reply field | Only the people in this group see this. The coach doesn't read it. |
>
> "See members" lists You and the seven village members, each with their line, and "On MVP" is left off because every member has it. Before C-05 the group page shows only "You created this group last week." beneath New post.
>
> **Team, as shown: the composer for the inner circle**
>
> | Part | Content |
> | ----- | ----- |
> | Header | Back · New message |
> | Audience | **Inner circle** \| Village |
> | To | Everyone on MVP<br>Edward · Your husband<br>Claire · Your sister |
> | Not selectable | Dr. Lena Ortiz · Not on MVP<br>Karen Moss · Not on MVP<br>Ms. Reyes · Not on MVP |
> | Line under the list | People who aren't on MVP can't be in a chat. Call or text them from their page. |
> | Message field | Write a message |
> | Note above the button | "Only" and the people chosen, "see this chat. The coach doesn't read it.", such as "Only Edward and Claire see this chat. The coach doesn't read it." |
> | Button | Send |
>
> Choosing "Everyone on MVP" ticks Edward and Claire. In Charlotte's household that is the same as choosing both by hand, because only two people in her inner circle have MVP.
>
> **Team, as shown: the composer for the village**
>
> | Part | Content |
> | ----- | ----- |
> | Header | Back · New message |
> | Audience | Inner circle \| **Village** |
> | To | Cedar Grove parents · 8 members |
> | Message field | Write a message |
> | Note above the button | Only the people in this group see this. The coach doesn't read it. |
> | Button | Post |

## 9. Section 3, "The week in the game plan"

Replace the Saturday library run row with:

> | Saturday | 10:00 am | Library run | Nobody yet | This week | | In C-04 Charlotte puts Edward's name against it, and it shows Asked Edward. In C-04b Edward answers "I've got it" with a note, and it shows "Edward: yes", the note and the Changed mark until she opens it. |

Replace the Friday checkup row with:

> | Friday | 3:30 pm | Mallory · Checkup, Northside Pediatrics | You | This week | | Arrives from her Google Calendar in C-06b, in conflict with tutoring. In C-08b Charlotte adds the note "Ask Dr. Ortiz about Mallory's cough". |

## 10. Section 3, "The moments"

Add these rows to the moments table, in time order:

> | C-04b | Tuesday, Oct. 13, 7:05 am | Edward says yes to the library run and adds a note. | A note on a yes, from the recipient's side | Optional |
>
> | C-05c | Tuesday, Oct. 13, 8:15 pm | Charlotte asks Edward and Claire together how to tell Alexis about her therapist. | A group chat with the inner circle | Core |
>
> | C-06c | Wednesday, Oct. 14, 4:50 pm | Charlotte messages Claire about dinner, and Claire's reply arrives as a notification. | A direct message and the unread mark | Optional |
>
> | C-08b | Thursday, Oct. 15, 9:05 pm | Charlotte asks whether Mallory's cough should keep her home, and the coach names Dr. Ortiz. | The coach naming the right person from her inner circle | Core |

## 11. C-02, the recipient's side

Replace the paragraph beginning "*Both pickups show \"Asked Edward\" in the game plan." with the text below. The words were already written, and this places them as screens.

> *Both pickups show "Asked Edward" in the game plan. Edward answers at 7:52 am, when he is up, by tapping "I've got it" on each item. He adds no note.*
>
> **Edward's screen, as shown: after he answers · 7:52 am**
>
> > Request from Charlotte · 6:40 am
> >
> > Thursday · Alexis · Pick up at Cedar Grove, 1:30 pm
> > I've got it · Change
> >
> > Thursday · Mallory · Pick up at Westview, 2:30 pm
> > I've got it · Change
> >
> > Charlotte can see your answers. If anything changes, change your answer here.
>
> *Charlotte gets a notification, and both pickups change to "Edward: yes".*

## 12. A new moment after C-04

> ## C-04b · Tuesday, Oct. 13, 7:05 am · Edward takes the library run
>
> *Edward opens the request Charlotte sent from the game plan the night before. He says yes and adds a note, which shows the one path a request can take that no other moment uses: a note with a yes. The note travels with the answer and changes nothing in the plan by itself.*
>
> **Edward's screen, as shown**
>
> > Request from Charlotte · Monday, 8:52 pm
> >
> > Can you do the library run Saturday morning?
> >
> > Saturday · Library run, 10:00 am
> > [I've got it] [I can't do this]
> >
> > Add a note for Charlotte
>
> *Edward taps "I've got it" and writes a note.*
>
> > I'll take Mallory too, she wants new books.
>
> *Charlotte gets the notification "Edward: yes to Saturday." In the game plan the library run shows "Edward: yes" with the note beneath it and the Changed mark, and the mark clears when she opens it. Mallory is not added to the item, because a note never edits the plan. If Charlotte wants Mallory on it, she adds her.*
>
> **Game plan, as shown: the library run after Edward answers**
>
> | Day | Item | Owner | Status or mark |
> | ----- | ----- | ----- | ----- |
> | Saturday | Library run, 10:00 am | Edward | Edward: yes · Changed |
> | | Edward: I'll take Mallory too, she wants new books. | | |

## 13. C-05, the composer heading and the reply notifications

In C-05, replace the block headed **Team, as shown: the new post** with:

> **Team, as shown: the new post**
>
> > New message
> >
> > Inner circle | **Village**
> >
> > To: Cedar Grove parents
> >
> > Alexis's therapist at Brightwater is leaving next month. Has anyone seen someone there they'd recommend for a ten-year-old? She's been going about a year and I'd like to keep her at Brightwater if we can.
> >
> > Only the people in this group see this. The coach doesn't read it.
> >
> > [Post]

Add this paragraph after the italic paragraph beginning "*Two replies arrive that afternoon.":

> *Each reply arrives as a notification, such as "Jenna Okafor replied to your post in Cedar Grove parents." at 1:40 pm, and the group's row on the Team tab shows "1 new" until she opens it.*

## 14. A new moment after C-05b

> ## C-05c · Tuesday, Oct. 13, 8:15 pm · Asking Edward and Claire
>
> *The village gave Charlotte a name for Alexis's next therapist. How to tell Alexis is a different kind of question, and it belongs with the people closest to the family, so she takes it to her inner circle rather than the village or the coach. It is her first chat, and she starts it from Team.*
>
> *She opens Team, taps New message and leaves Inner circle chosen. She ticks Edward and Claire, which is everyone in her inner circle on MVP. Dr. Ortiz, Karen Moss and Ms. Reyes are listed beneath them as "Not on MVP".*
>
> **Team, as shown: the composer**
>
> > New message
> >
> > **Inner circle** | Village
> >
> > To
> > [✓] Everyone on MVP
> > [✓] Edward · Your husband
> > [✓] Claire · Your sister
> >
> > Dr. Lena Ortiz · Not on MVP
> > Karen Moss · Not on MVP
> > Ms. Reyes · Not on MVP
> >
> > People who aren't on MVP can't be in a chat. Call or text them from their page.
> >
> > Karen is leaving Brightwater next month. The Cedar Grove parents say Dana Whitfield is good, so I'm calling tomorrow to ask for her. How should we tell Alexis? I'd like to do it before Monday's session.
> >
> > Only Edward and Claire see this chat. The coach doesn't read it.
> >
> > [Send]
>
> *"Everyone on MVP" shows as ticked once both are chosen, because Edward and Claire are everyone in her inner circle on MVP. She taps Send, and the chat opens.*
>
> **Team, as shown: the chat at 8:42 pm**
>
> > Back · Edward and Claire
> >
> > Only you, Edward and Claire see this chat. The coach doesn't read it.
> >
> > **You** · 8:15 pm
> > Karen is leaving Brightwater next month. The Cedar Grove parents say Dana Whitfield is good, so I'm calling tomorrow to ask for her. How should we tell Alexis? I'd like to do it before Monday's session.
> >
> > **Claire** · 8:31 pm
> > Tell her together, and tell her Karen is helping choose who's next. At ten she'll want to know she has a say.
> >
> > **Edward** · 8:40 pm
> > Agree. Sunday night, not before school. I'll be home.
> >
> > **You** · 8:42 pm
> > Sunday night it is.
> >
> > Message · [Send]
>
> *Messages are listed oldest first, because a chat is read as a conversation, while the group page lists posts newest first. Claire's and Edward's messages each arrive as a notification, such as "Claire: Tell her together, and tell her Karen is helping choose who's next." Nothing in the chat reaches the plan. If Charlotte wants Sunday night on the plan, she adds it herself, and in the demo she doesn't.*

## 15. C-06, the recipient's side

Replace the opening italic paragraph's first two sentences, "*Edward was asked on Monday and said yes, and now his Thursday has changed. At 11:40 am he changes his answer on Mallory's pickup to \"I can't do this\" and adds a note, and keeps \"I've got it\" on Alexis's.", with:

> *Edward was asked on Monday and said yes, and now his Thursday has changed. At 11:40 am he opens the request, taps Change on Mallory's pickup, chooses "I can't do this" and adds a note, and keeps "I've got it" on Alexis's.*

Add this block directly after that italic paragraph:

> **Edward's screen, as shown: changing his answer · 11:40 am**
>
> > Request from Charlotte · Monday, 6:40 am
> >
> > Thursday · Alexis · Pick up at Cedar Grove, 1:30 pm
> > I've got it · Change
> >
> > Thursday · Mallory · Pick up at Westview, 2:30 pm
> > [I've got it] [I can't do this]
> >
> > Add a note for Charlotte
> > Got pulled into a 2:00 Thursday, can't get Mallory at 2:30. I can still do Alexis at 1:30.
> >
> > [Send answer]

After the two drafted messages, add:

> **Min-jung's screen, as shown: the request · 11:50 am**
>
> *Charlotte sends the request to Min-jung at 11:50 am. Min-jung has MVP, so it arrives as a card in her MVP with the notification "Charlotte asked you about Thursday's pickup." She sees this request and nothing else of Charlotte's plan.*
>
> > Request from Charlotte · 11:50 am
> >
> > Hi Min-jung, could you bring Mallory home with Hana on Thursday? Edward got pulled into a meeting and I'm at yoga until 3:15. We're on Linden, right on your way, and Edward will be home to meet her. Happy to return the favor.
> >
> > Thursday · Mallory · Pick up at Westview, 2:30 pm
> > [I've got it] [I can't do this]
> >
> > Add a note for Charlotte
>
> *Min-jung taps "I've got it" at 12:30 pm and adds no note. Her card then shows "I've got it · Change" and the line "Charlotte can see your answers. If anything changes, change your answer here."*

## 16. C-06b, the recipient's side

Replace the italic paragraph beginning "*She sends it at 1:20 pm. Ms. Reyes gets a text with the link," with:

> *She sends it at 1:20 pm, and Friday's tutoring shows "Asked Ms. Reyes". Ms. Reyes gets a text message from MVP with the link.*
>
> **Ms. Reyes's phone, as shown: the text · 1:20 pm**
>
> > Charlotte sent you a request through MVP. You can answer here: mvp.example/r/k7m2
>
> **Ms. Reyes's web page, as shown**
>
> > Request from Charlotte · 1:20 pm
> >
> > Hi Ms. Reyes, Mallory has her checkup on Friday at 3:30, so she'll miss tutoring this week. Tuesdays at 3:00 work for us from next week. Thank you, Charlotte
> >
> > Friday · Mallory · Tutoring with Ms. Reyes, Westview library, 3:00 pm
> > [I've got it] [I can't do this]
> >
> > Add a note for Charlotte
> >
> > You don't need MVP to answer.
>
> *Ms. Reyes answers "I've got it" on the web page at 3:10 pm. The page then shows her answer with a Change link and the line "Charlotte can see your answer. If anything changes, change your answer here." Charlotte gets the notification "Ms. Reyes: yes to Friday." Friday's tutoring and the 3:45 pm pickup leave the plan, Mallory's pickup moves to 2:30 pm, and the checkup stays at 3:30 pm. The same text covers the note Charlotte left on Friday's tutoring in C-04, so that note goes too. MVP changes nothing on her Google Calendar.*

## 17. A new moment after C-06b

> ## C-06c · Wednesday, Oct. 14, 4:50 pm · A message to Claire
>
> *Dinner with Claire is at 6:30 pm. Charlotte checks in with her sister directly, which shows a direct message started from a person's page and a reply arriving while she is elsewhere in the app.*
>
> *She opens Team, taps Claire and taps Message. There is no chat with Claire alone yet, so the composer opens with Inner circle chosen and only Claire ticked.*
>
> > New message
> >
> > To: Claire
> >
> > Still on for 6:30 tonight?
> >
> > Only Claire sees this chat. The coach doesn't read it.
> >
> > [Send]
>
> *At 4:58 pm Claire answers. Charlotte is on Today, so the reply arrives as a notification, the Team tab gains a dot, and the chat's row shows "1 new" until she opens it.*
>
> > Claire: Yes, see you at 6:30. I'll bring dessert.
>
> **Team, as shown: the chat**
>
> > Back · Claire
> >
> > Only you and Claire see this chat. The coach doesn't read it.
> >
> > **You** · 4:50 pm
> > Still on for 6:30 tonight?
> >
> > **Claire** · 4:58 pm
> > Yes, see you at 6:30. I'll bring dessert.
> >
> > Message · [Send]

## 18. A new moment after C-08

> ## C-08b · Thursday, Oct. 15, 9:05 pm · A question for Dr. Ortiz
>
> *A few minutes after the picture day answer, Charlotte asks something the coach must not answer itself. The coach doesn't give medical advice, so it names the person in her inner circle who can, gives her the way to reach that person tonight, and connects the question to the checkup already in her plan. This is the only moment that shows the coach handing a question to a professional.*
>
> > "Mallory's had a cough since Tuesday. Should she skip picture day tomorrow?"
>
> > Whether Mallory is well enough for school tomorrow is a question for Dr. Ortiz, so call Northside Pediatrics tonight. Northside's after-hours nurse line is the same number, 555-0160. Mallory already sees Dr. Ortiz on Friday at 3:30 for the six-year checkup, so the cough can go on the list for that visit as well.
>
> **Coach, as shown under the answer**
>
> > [Call Northside]
> >
> > Add the cough to Friday's checkup
> >
> > Based on
> > Dr. Lena Ortiz, Northside Pediatrics, in your inner circle · Mallory's checkup on Friday at 3:30
>
> *No article is attached, because a medical question gets a person, not reading. Call Northside opens her phone app with the number, and it leaves no task. Charlotte taps "Add the cough to Friday's checkup", and the checkup in the game plan gains the note "Ask Dr. Ortiz about Mallory's cough". The note is her action, so it carries no Changed mark. The coach's line underneath reads as below.*
>
> > The note is on Friday's checkup.

*A note for the reviewer, not for the fixtures: "The note is on Friday's checkup." describes the result rather than what the coach did, which keeps it inside the voice rule against describing its own actions. If Greg reads it as a description of an action, the line can go and the game plan alone shows the note.*

## 19. Section 3, "Taught when useful"

Add at the end of the section:

> *On Tuesday of her first week, Charlotte adds Min-jung Park from the Team tab after the carpool message. The number matches someone on MVP.*
>
> **Team, as shown: add someone**
>
> > Back · Add someone
> >
> > Name: Min-jung Park
> >
> > Mobile number: 555-0104
> >
> > Who they are: Sophie and Hana's mom · Monday carpool
> > Shown under their name on your Team.
> >
> > [Inner circle] **[Village]**
> >
> > [Add]
>
> > Min-jung Park is on MVP.
> >
> > [Done]
>
> *She adds Ms. Reyes the same way, to her inner circle, on Wednesday of her first week. Ms. Reyes's number is not on MVP.*
>
> > Ms. Reyes isn't on MVP yet. Requests reach them by text message, and you can invite them to MVP.
> >
> > [Invite by text] [Not now]
>
> *Charlotte taps Not now. Invite by text would open her messages app with the text below, addressed to the number she entered, for her to send herself.*
>
> > I'm using MVP to plan the girls' week. You can join here: mvp.example/join
>
> *On Thursday of her first week she creates Cedar Grove parents, choosing Min-jung, Jenna, Tom, Grace, Dev, Nina and Rafael, all of whom she had added to her village.*
>
> **Team, as shown: new village group**
>
> > Back · New village group
> >
> > Group name: Cedar Grove parents
> >
> > Add people from your village
> > [✓] Min-jung Park · [✓] Jenna Okafor · [✓] Tom Alvarez · [✓] Grace Liu · [✓] Dev Raman · [✓] Nina Brooks · [✓] Rafael Costa
> >
> > Everyone in a group needs MVP to see its posts. Only members see what's posted, and the coach doesn't read it.
> >
> > [Create group]

---

## 20. Section 4, Team

Replace the whole "Team" table with:

> ## Team
>
> | Where | Text |
> | ----- | ----- |
> | Tab heading | Team |
> | Button at the top of the tab | New message |
> | Section headings, in order | Chats · Village groups · Inner circle · Village |
> | A chat's row | The other people's names, such as "Claire" or "Edward and Claire" · The latest message, with its author's name unless it is hers, when it is "You", cut to one line · Its time today, or its day · "1 new" in Meta when unread |
> | Chats, before she has any | No chats yet. Start one with anyone in your inner circle who's on MVP. |
> | A village group's row | The group's name · The number of members, such as "8 members" · The latest post or reply with its author, cut to one line · "1 new" in Meta when unread |
> | A new group's row, before any post | You created this group last week., or the day that applies |
> | A person's row | Their outlined initial, their name, and the line from "Her people" · "On MVP" after the line when they have it |
> | Buttons below the lists | Add someone · New village group |
> | Team tab with anything unread | A dot on the tab icon, with the accessible label "Team, 1 new" or the number that applies |
> | Person page | Back · Their name · Their line and "On MVP" or "Not on MVP" · Actions: Message, for inner circle members on MVP · Call · Text, for anyone not on MVP with a mobile number · Contact: "Mobile" and the number, or the practice's name and number |
> | Section on a person page | This week, listing each item this week that they own or have been asked about, as it appears in the game plan, with its status |
> | This week, when empty | "Nothing in this week's plan with" followed by their name, such as "Nothing in this week's plan with Claire." |
> | Line under This week, for someone on MVP | Their name and "sees only what you send.", such as "Edward sees only what you send." |
> | Other sections on a person page | Chats, for inner circle members she has chats with · Groups, for village members |
> | Composer heading | New message |
> | Choice of audience in the composer | Inner circle · Village |
> | Inner circle choices | Everyone on MVP · each member on MVP with their line · members without MVP beneath, each marked "Not on MVP" and not selectable |
> | Line under the inner circle choices | People who aren't on MVP can't be in a chat. Call or text them from their page. |
> | Village choice | Each village group with its number of members |
> | Message field placeholder | Write a message |
> | Note above the button, for a chat | "Only" followed by the people chosen and "see this chat. The coach doesn't read it.", such as "Only Edward and Claire see this chat. The coach doesn't read it." |
> | Note above the button, for a group | Only the people in this group see this. The coach doesn't read it. |
> | Button | Send, for a chat · Post, for a group |
> | Chat heading | Back · The other people's names |
> | Line at the top of a chat | "Only you," followed by the other people and "see this chat. The coach doesn't read it.", such as "Only you, Edward and Claire see this chat. The coach doesn't read it." |
> | Author label on her own messages and posts | You |
> | Field at the foot of a chat | Message, with the button Send |
> | Village group page | Back · The group's name · "8 members · See members" · Button: New post · The posts, newest first, each with its replies |
> | Reply field placeholder in a group | Reply |
> | Notification for a chat message | The author's name, a colon and the message, such as "Claire: Yes, see you at 6:30. I'll bring dessert." |
> | Notification for a reply to her post | The author's name and "replied to your post in" followed by the group, such as "Jenna Okafor replied to your post in Cedar Grove parents." |
> | Add someone | Heading: Add someone · Fields: Name · Mobile number · Who they are, with the helper "Shown under their name on your Team." · Choice: Inner circle · Village · Button: Add |
> | After adding someone on MVP | Their name and "is on MVP.", such as "Min-jung Park is on MVP." · Button: Done |
> | After adding someone not on MVP | Their name and "isn't on MVP yet. Requests reach them by text message, and you can invite them to MVP.", such as "Ms. Reyes isn't on MVP yet." · Buttons: Invite by text · Not now |
> | Invitation text | I'm using MVP to plan the girls' week. You can join here: followed by the link. "The girls" follows the household, such as "the kids" for a mixed household. |
> | New village group | Heading: New village group · Field: Group name · Heading: Add people from your village · Each village member on MVP, with a tick · Line: Everyone in a group needs MVP to see its posts. Only members see what's posted, and the coach doesn't read it. · Button: Create group |

## 21. Section 4, Requests

Add these rows to the end of the Requests table:

> | Button when changing an answer with a note | Send answer |
> | After answering, on the web page | Charlotte can see your answer. If anything changes, change your answer here. |
> | Link in the text message | mvp.example/r/ followed by the request's code, such as "mvp.example/r/k7m2" |

## 22. Section 4, Coach

Add these rows to the end of the Coach table:

> | Day headings in the conversation | Today, for the current day · The day of the week, such as "Monday", for earlier days |
> | Button to reach a professional | "Call" followed by the practice's short name, such as "Call Northside" |
> | Link to add a question to an appointment | "Add" followed by what to add and the appointment, such as "Add the cough to Friday's checkup" |
> | Line after that link is used | "The note is on" followed by the appointment, such as "The note is on Friday's checkup." |

---

## 23. Appendix A, rows to add to Charlotte and Edward

> | Phone numbers | Edward 555-0101, Claire 555-0102, Ms. Reyes 555-0103, Min-jung 555-0104, Jenna 555-0105, the five other village members 555-0106 to 555-0110, Northside Pediatrics 555-0160 and Brightwater 555-0170 | Every person page shows a number, and every number is in the 555-01 range reserved for fiction. |
> | The rest of the village group | Tom Alvarez, Grace Liu, Dev Raman, Nina Brooks and Rafael Costa, Cedar Grove parents with MVP | Gives the group the eight members it already claimed. Their initials avoid C, E, A and M, so no outlined initial matches Charlotte's, Edward's or a child's chip. |
> | When the group was created | Thursday of her first week, Oct. 8 | Follows adding Min-jung on Tuesday and Ms. Reyes on Wednesday, and comes before the demo week. |
> | Chats | None before the demo week. The first, with Edward and Claire, starts in C-05c, and a direct message with Claire starts in C-06c. | A two-week-old account with no chats is believable, and it lets the demo show a chat being started. |
> | How to tell Alexis | Claire suggests telling Alexis together and saying Karen is helping choose who's next. Edward suggests Sunday night. | A private family question that belongs with the inner circle rather than the village, which shows why MVP keeps the two apart. |
> | Claire's dessert | Claire answers "Yes, see you at 6:30. I'll bring dessert." | A reply that needs nothing from the plan. |
> | Edward's library note | "I'll take Mallory too, she wants new books." | Uses the one request path no other moment shows, a note with a yes. |
> | Mallory's cough | Mallory has had a cough since Tuesday, and Charlotte asks about it on Thursday night. | Gives the coach a medical question to hand to Dr. Ortiz, next to a checkup already in the plan. |
> | Northside's after-hours line | Northside's after-hours nurse line is the main number, 555-0160. | Lets the coach give her a way to reach Dr. Ortiz's practice that night without giving medical advice. |
> | Request link | mvp.example/r/k7m2, and invitations use mvp.example/join | The .example domain is reserved and can never belong to anyone, like the forwarding address. |
> | Min-jung's request time | Charlotte sends it at 11:50 am, and Min-jung answers at 12:30 pm. | Places the send between the coach's message and Min-jung's answer. |

## 24. Appendix B

Replace item 2 with:

> 2. **Village groups and chats live inside MVP, which is a spec decision.** Only members see a group's posts, only the people in a chat see the chat, and everyone in either needs MVP. Groups that exist elsewhere, such as WhatsApp groups, stay outside, and the parent forwards messages from them. The spec's §10 needs chats, person pages, adding someone, creating a group and the unread mark (issue M6).

Replace item 3's last sentence with:

> This document now writes Edward's, Min-jung's and Ms. Reyes's screens for each request in Charlotte's week. View as shows the recipient's Today and those screens, and the recipient's other tabs are not part of the demo (issue S1).

Add these items at the end:

> 46. **Messaging one village member directly is not part of this version (spec F22).** Chats are for the inner circle, and the village is reached through village groups. Whether village members can be messaged one to one is open. The alternative is a Message button on village members' pages, which would need the same "On MVP" rule as chats.
>
> 47. **The coach doesn't draft chat messages (spec F23).** It drafts requests, village posts and handoffs, but chats are written by the parent alone in this version. Whether the coach should offer to start a chat, such as "Ask Edward and Claire", is open.
>
> 48. **Chats can't be renamed, left or changed in this version (spec F24).** A chat's name is the names of the people in it. Adding someone to a chat, leaving one and muting one belong on the roadmap.
>
> 49. **Invitations and calls leave no task,** unlike a message handed to another app. An invitation is not part of the plan, and a call is not a message she might forget to send. The spec's §9 needs this exception beside the handoff rule.
>
> 50. **Sharing a chat message to the coach is not decided (spec F25).** A chat might hold something the plan needs, such as Edward offering to drive. The share menu would let her send it to the coach as she does from WhatsApp, and nothing in this version does it.

## 25. Appendix C, a new entry at the top

> ## Version 3.13, October 14, 2026
>
> Adds Team as a working tab, chats with the inner circle and the recipient's side of every request, so every tab can be tested at every moment, at Greg's direction.
>
> | # | Change |
> | ----- | ----- |
> | 1 | Section 2 gains "Talking with her people". The parent messages one member of her inner circle directly or several in a group chat, choosing them when she starts it, and "Everyone on MVP" chooses all of them. Only people with MVP can be in a chat, the coach never reads chats, and nothing in a chat changes the plan. The same composer posts to a village group. Adding someone, inviting by text and creating a village group are described. |
> | 2 | Section 2 gains "Every tab at every moment", covering what the Coach, Game plan, Team and Kids tabs show when opened between moments, and what View as shows. |
> | 3 | "Her people" gains a number for each person and the five other members of Cedar Grove parents. Section 3 gains "The Team tab", with the tab before and after chats, four person pages, the group page and both composers. |
> | 4 | Four moments are added. In C-04b Edward says yes to the library run with a note. In C-05c Charlotte asks Edward and Claire how to tell Alexis about her therapist. In C-06c she messages Claire about dinner. In C-08b the coach names Dr. Ortiz for a question about Mallory's cough. |
> | 5 | C-02, C-06 and C-06b gain the recipient's screens: Edward answering and changing his answer, Min-jung's card and Ms. Reyes's text and web page. C-05's composer heading changes from "New post" to "New message", and C-05 gains its reply notifications. |
> | 6 | The game plan's library run and checkup rows gain C-04b and C-08b. Section 4's Team table is rewritten, and the Requests and Coach tables gain rows. Appendix A gains eleven rows, Appendix B items 2 and 3 are updated, and items 46 to 50 are added. |

---

## What follows from this pass

These go into the issues file and the backlog, and the wireframe pass 11 prompt picks up the screens.

- **Issue M4 is decided.** Posting to the inner circle starts a chat with the members she chooses, and "Everyone on MVP" reaches all of them.
- **Issue M6 covered the spec, and spec 0.13 closes it.** §9 carries the exception for invitations and calls, §10 carries chats, person pages, adding someone, creating a group and the unread mark, and §15 carries the scope of View as and the four new moments.
- **New issue W5 covers the wireframes.** The new screens are the Team tab before and after chats, four person pages, the group page and its members list, both composers, the two chats, add someone in both outcomes, new village group, Edward's library card with a note and his change of answer, Min-jung's card, Ms. Reyes's text and web page, and the C-08b answer.
- **Issue S1 is scoped,** because View as now has every screen it shows. **Issue S5 has all its words,** and its screens follow in W5.
