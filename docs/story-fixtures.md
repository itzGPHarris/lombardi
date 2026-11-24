# Demo fixtures: the MVP families

*MVP (Lombardi) · Version 3.57 · November 24, 2026 · Charlotte and Edward only*

# 1. What this document is for

This document describes the households the investor prototype runs on and fixes everything they show on screen. It has two jobs. The first is agreeing on the shape of the demo, meaning which moments each family shows, in what order, and what each moment is there to prove. The second is fixing the exact words and data that appear in the app, so that the JSON seed files can be written directly from these pages and nothing has to be invented during the build.

The presenter script is a separate document. It will be written once the prototype runs, because its timings have to be measured rather than promised. It refers to the moments in this document by their IDs, such as C-01 for Charlotte's first moment, so the two documents never need to copy each other. A set of grayscale wireframes built from this document sits alongside it, and the two are meant to be read together.

Version 3 is a rewrite rather than a correction pass on version 2. It covers Charlotte and Edward only, because the narrative, the Today board and the way messages reach other people are being settled on one family before they are applied to the other three. Calypso, Alexandra and Ben, and Marcus follow in later versions, and until then version 2.2 remains the reference for their facts.

## How to read it

| What you see | What it is |
| ----- | ----- |
| A moment ID, such as C-01 | A point in a family's week that the household switcher can jump to. The presenter script refers to moments by these IDs. |
| An italic line | A note for the team that explains what the moment shows. It never appears in the app. |
| A blockquote | Words that appear on screen exactly as written, whether the coach says them, a parent sends them or someone posts them in a group. |
| A table headed "as shown" | A screen at that moment. The text in each cell appears on screen exactly as written. |
| Any other table | Structured data that goes into the seed file. |
| Section 4 | Every label, heading and button on the demo screens, in one place. |
| Appendix A | Every fact we invented, with the reason for it. |
| Appendix B | Everything still open, including decisions that belong in the spec. |

## Terms used in this document

Several of these names exist only inside this project so far, and the wireframes show each of them in place.

| Term | What it means |
| ----- | ----- |
| Today | The home tab, and the first of the five tabs: Today, Coach, Game plan, Team and Kids. It shows the logistics for the current day only: who goes where, when, with whom, and what they need to take. |
| Phase of the day | Morning, afternoon or evening, which the dateline names, such as "Monday morning, Oct. 12". The board beneath it changes with the phase, and the tab itself still reads "Today". |
| Dateline | The one line at the top of Today, which shows the day of the week, the phase of the day and the date, such as "Monday morning, Oct. 12". |
| Game plan | The tab that holds this week and next, including routine items, as an agenda of days under a week strip. A review card at the top holds anything that is hers to choose before it goes in her plan, and the game plan is the only place she moves an item to another day, adds a note or asks someone to take it. |
| Coach | The tab where the parent talks to the coach, by voice, by typing or by adding a photo or file. The coach turns what she gives it into the plan and answers her parenting questions. |
| Thinking screen | A short waiting screen with the MVP mark and a line saying what the coach is doing, such as "Reading your photo…". It appears while the coach reads a capture or builds a draft, so a wait never looks like a fault. |
| Capture | Anything the parent gives MVP so the coach can turn it into the plan, such as a photo of a handout, a forwarded email, a message shared from WhatsApp or a voice note. |
| Share menu | The phone's own share sheet. MVP appears in it, so the parent can send a message, email or photo to MVP from any app without copying and pasting. |
| Forwarding address | A private email address each parent gets. Whatever she forwards to it, or sets her email to forward automatically, goes to the coach. |
| Her calendar | The main calendar the parent already keeps, such as Google Calendar, Apple Calendar or Outlook. She connects it, or more than one, during setup (F40). MVP reads it, adds to her plan the events she has already committed to, offers anything that is hers to choose on the game plan's review card, and never changes anything in it. |
| Calendar mark | A small calendar icon in a muted ink, drawn before the item's text on any item that came from her calendar, on Today and in the game plan, so she can tell what MVP read from what MVP made. It is not a control, so tapping it does nothing. |
| Source link | The line on every captured item that says where it came from, such as "From the Cedar Grove Elementary newsletter · yesterday" on a Monday, so the parent can check the original. |
| Capture bar | The field docked above the tab bar on Today and the game plan, and at the foot of the Coach tab. It reads "Type, talk or add an image", with attach, camera and microphone beside it. Whatever she gives it goes to the coach. She types in place, and the coach's read-back lands where she is. |
| Review card | The card at the top of the game plan that holds what the coach has found and is hers to choose: proposals from other people, such as a second tutoring session, and school events a parent chooses to attend, such as a fair. In most weeks it holds one thing or nothing. It takes the coach's tint, and it is gone when nothing is waiting. |
| Read-back strip | The coach's short read-back on the game plan, which rises above the capture bar after she gives the coach something there. It is the one place the coach speaks on the game plan. |
| Week strip | The row of seven days under the game plan's title bar. It marks the day she is reading and puts a dot under any day with something that needs her. |
| Item page | The page that opens when she taps an item in the game plan, with its owner, note, source, the coach's other ways it could go, and the way to move it. |
| Team | The tab that holds the adults around the parent, meaning her circle and her people, together with her chats and her groups. Its sections read "Chats · Groups · Team", and the Team list holds everyone, with a Circle tag on the people in her circle. Versions 3.1 and 3.2 called it Your people. |
| Kids | The tab that holds a page for each child and the cards for the schools in the children's lives. It replaces Settings as the fifth tab. |
| Child page | The page for one child on the Kids tab, with her school, what she does every week and the items that regularly go with her. |
| School card | The page for each school, holding its hours, contacts, rules, calendar, rotation and the original documents it was built from. It lives on the Kids tab and opens from the school's name anywhere in the app. The coach uses it when a message needs to go to the school. |
| Settings | The page for her account, her calendar and forwarding address, notifications, the language at home and privacy. It opens from the parent's monogram at the top right of every tab on a phone, and from the bottom of the sidebar at wider sizes, and it is a page with Back. |
| Circle | The people a parent trusts with her children and her private life, such as her partner, grandparents, close friends, a nanny and the family's doctors, therapists and tutors. |
| People | Everyone else who shares her children's week for a few hours at a time, such as school parents, carpool families, coaches and team parents. |
| Group | A group that the parent creates inside MVP and invites some of her people to, such as "Cedar Grove parents". Only its members see its posts, and the coach never reads them. |
| Chat | A private conversation between the parent and one or more people in her circle who have MVP. A chat with one person is a direct message, and a chat with several is a group chat. The coach never reads chats. |
| Person page | The page for one adult on the Team tab, with how to reach them, what in this week's plan involves them, and the chats or groups she shares with them. |
| Departure | A leg she travels, from wherever she is to the next stop, with or without the children. Today shows the leg she leaves on next at the top, under Now, with its leaving time in large type. A child leaving home with someone else, such as Alexis with the Parks, is also a departure, because the checklist is hers. |
| Run | The stops she drives in order before she is home again, such as Westview Kindergarten, then Cedar Grove Elementary, then Brightwater Family Therapy. Each stop has a time she must be there and a time she leaves. |
| Leave sheet | The sheet that opens from the departure time on Today. It draws her run as a line of stops, lets her change when she leaves any stop, and holds the coach's Plan B and Plan C at its foot. |
| Plan B and Plan C | The coach's ready backups for a leg or an item that goes wrong. They sit at the foot of the Leave sheet and on the item's page in the game plan, each with one button. |
| Sheet | A panel that rises over the screen for a short decision about something on it, such as setting a reminder, and returns her to the same place when it closes. |
| Notice | A single line that rises above the tab bar for about four seconds when the coach finds a new conflict while she is in the app, with a link that names where it goes. It asks for no decision. |
| Checklist | The list under the next departure on Today of everything to do before she leaves. It merges what goes with each child, grouped under each child's name, with her own tasks, and each item sits in its own container with its remove button. Earlier versions called the children's part the going with list, and each child page keeps its "Going with, by day" section. |
| Name chip | A child's first name in a filled pill, which stands for the child wherever the plan names one. "Both", "All three" and "Family" are the group chips. |
| Status | Where a request stands, shown on a plan item as the person's outlined initial and an icon: an hourglass while she waits, a thumbs up for yes and a thumbs down for can't. Section 2 lists the four statuses and the two marks that can sit beside them. |
| Conflict | A mark that appears when the plan asks one adult to be in two places at once, or leaves a child with nobody. |
| Request | Part of the plan that the parent sends to someone else and asks them to take on. The person answers with "Yes, I can" or "No, I can't". |
| Coach card | The only card on Today. It appears when the coach needs an answer from her, and it makes one recommendation with one button to accept it. After she answers, it keeps the recommendation in muted ink and shows what she chose and what comes next. |
| The evening reminders | The evening checklist on Today, headed "Reminders for" and the phase of tomorrow's first departure, such as "Reminders for tomorrow morning". It sits on the pass for that departure and holds only what goes with it, and each later departure keeps its own items under For tomorrow. Versions 3.25 to 3.30 called it Reminders for the morning. |
| Trip pass | The pass on Now for a trip with more than one child and more than one stop, such as dropping Alexis and Mallory at two schools. It shows the trip's stops as a timetable and stays for the whole trip. |
| MVP Editorial | Short articles written by MVP staff. At most one appears on Today when something in the week makes it useful, and another is attached to a coach answer when the parent asks for ideas. |
| Moment | A point in a family's week that the demo shows, identified by an ID such as C-03. |
| Household switcher | A hidden presenter control that jumps between families and between moments. It is not part of any screen. |
| Playbook | The part of her plan for days she will be away, handed to another adult in her circle with everything he needs to run it, set out day by day from the moment she leaves and child by child under each day: each item with its new owner, the routines, meals and things only a parent would know, where she is, and the people to call. She builds it with the coach in the game plan's Playbook view, choosing who he can call, and sends it to him. Everything in it starts as the coach's suggestion, which she edits before she sends it. What he can't take goes to someone else she trusts, such as Ruth, before she leaves. Both of them see it titled Weekend playbook, because until he answers it belongs to neither of them. He answers each part with I'll take this, Suggest a change or Ask someone else, or takes every part at once with I'll take all of it, and never with No, I can't. The team calls this journey auto pilot, and that word never appears on screen. |
| Weekend summary | The look-back that opens her first morning after a playbook: what came in while she was away, what was done, the recipient's notes, and what the coach thinks is worth her attention. |

# 2. How the demo works

## Parents are always on

A parent is responsible for her children every hour of every day, and what changes from hour to hour is the logistics. The demo therefore shows each family across a real stretch of their week, rather than around one problem and its solution. Each family has a set of moments at different days and times, such as getting the children out of the house in the morning, a change that arrives in the middle of the day, an evening spent getting ready for tomorrow, and a question asked once the house is quiet.

The household switcher moves between these moments. Within a family the moments run in order, so the presenter can show the same plan changing over several days.

## How things get into MVP

A busy parent receives the week's logistics in six or seven places at once: school emails, several messaging apps such as WhatsApp, WeChat and Telegram, text messages, paper handouts that come home in a backpack, and her own thoughts while she is driving. If the only way into MVP were opening the app and pasting into the coach, she would still be doing the sorting herself. MVP therefore meets her where each thing already is, and everything she gives it goes to the coach.

| Entry point | What she does | What it is for |
| ----- | ----- | ----- |
| The share menu | She presses and holds a message, email or photo in any app, taps Share and chooses MVP. | Messages from WhatsApp, WeChat, Telegram, Messages and Mail. Those apps do not let other apps read their chats, and MVP would not read them if they did, because nothing reaches the coach unless she sends it. |
| The forwarding address | She forwards an email to her private MVP address, or sets her email to forward a school's newsletters automatically. | School email, which is the largest source by volume. Once forwarding is set up, newsletters reach the coach without her doing anything. |
| The camera | She photographs a handout, a calendar on the fridge or a permission slip. | Paper that comes home from school. |
| Her voice | She taps the microphone and talks. | The stream of thought, such as a voice note in traffic that mixes three days, two children and a correction. |

The capture bar sits at the foot of the Coach tab and is docked above the tab bar on Today and on the game plan, so it is one object she learns once. It is drawn as a field rather than a button: the placeholder, "Type, talk or add an image", says where things go without the word Send, and attach, camera and microphone sit at its end. She types in place on every tab that carries the bar. The keyboard rises over the tab bar and the bar rides on top of it, and the text area grows as she writes, up to five lines, and then scrolls inside. Once the text runs past one line, it takes the full width, and attach, camera, microphone and the arrow sit on a row beneath it. Each icon goes straight to its kind of capture. The coach's read-back lands where she is: on the coach card on Today, in the read-back strip on the game plan, and in the conversation on the Coach tab. MVP never moves her to another tab without warning, so a control that would take her somewhere else says where in its label. A field and a button are different objects, so the bar can't be mistaken for one of the coach card's commands. Her own calendar is a fifth source, connected once rather than used each time, and it has its own section below. Connecting her email account directly is a later feature, because reading a whole inbox asks for much more trust than sharing one email at a time.

**What the coach does with what she gives it.** Whatever arrives falls into one of three kinds, and the coach handles each kind differently.

| Kind | Example | What the coach does |
| ----- | ----- | ----- |
| A one-off event | A school newsletter | Keeps only what applies to her children, using the grades it knows, and leaves out the rest. Most of a newsletter covers other grades, and filtering it is work the parent otherwise does in her head every week. |
| A recurring rule | A rotation calendar, where each letter day means library, science or motor skills | Turns the rule into standing items on the child's checklist, such as "Library book" on library days and "Sneakers" on motor skills days. |
| Reference | A school's contact list | Saves it on the school card and uses it later, for example to address a note to the right office when the plan needs one. |

Each capture gets a short read-back from the coach that says what is now in her plan, and the coach asks at most one question when something is unclear. A change to her children's school day, such as an early dismissal, a closure or a dress day, joins the plan as hers or changes the item it affects, because it happens whether she plans for it or not, and the read-back says so. Something she types or says about her own week, such as the yoga class she wants in C-01, joins the plan as hers, because she said it. A proposal from someone else, such as the second tutoring session Ms. Reyes asks for, and a school event she would choose to attend, such as a fair, wait as Suggested on the review card at the top of the game plan until she adds them. A change to an item already in the plan shows as Updated. "What the coach adds for her" sets out the whole rule. Every item keeps a source link to where it came from, because the one thing a parent cannot forgive is a date the coach made up.

**Entry points are taught when they become useful.** Onboarding asks for only one capture. The first time she pastes a WhatsApp message, the coach tells her she can share from WhatsApp directly next time, and after she forwards her first newsletter, it offers to set up automatic forwarding for that sender.

**The prototype stages these moments.** The prototype is a web app, which cannot fully appear in an iPhone's share menu, and it does not read live photos or email. Sharing, forwarding and photographing are scripted moments with prepared results, and the real capability goes to the engineer through the spec.

## Her calendar

Most parents already keep one main calendar, usually Google Calendar, Apple Calendar or Outlook, and much of the family's week is already in it: the children's activities, appointments, and the invitations that schools and clinics send. If MVP ignored it, she would have to give MVP everything twice. MVP therefore connects to her calendar once, during setup, and from then on the plan and the calendar stay in step. The prototype covers those three calendars.

**MVP reads her calendar and never changes it.** It does not add, move or delete anything there. Her calendar stays hers, and MVP is the place where the week is worked out. Whether MVP should ever write plan items back to her calendar is an open question in Appendix B.

**The coach sorts what it finds.** It reads each event and works out whom it concerns. The children's activities and appointments join the plan under the child's name chip. Her own appointments join it as hers, because they decide when she can drive. A school event she would choose to attend, such as back-to-school night, waits on the review card. Events with no time, such as birthdays and holidays, stay on the calendar and out of the plan. When the coach cannot tell whom an event concerns, it asks, and it still asks at most one question at a time.

**The coach adds what she has already committed to.** An event on her own calendar that takes a child somewhere, or her own appointment that decides when she can drive, is something she has already decided, and asking her to approve it a second time would only add a step to her week. The coach adds it to the plan as hers, with "You" as owner, no status, the calendar mark, and the source link "From your Google Calendar", or whichever calendar she uses, and the coach's read-back says what is now in the plan wherever she is. A calendar also holds plenty that never needs planning, and a game plan that filled itself with every invitation would stop being one she trusts, so invitations she hasn't accepted, events with no time and events for other people stay out. She agrees to this once, with the ticked line on 0j, and can turn it off in Settings under "What the coach adds for you", which sends calendar events to the review card as suggestions instead. She can take anything out of the plan from its page, and an event she takes out is not added again unless it changes on her calendar.

**The coach adds the trips around an event.** An event is the thing itself, such as ballet or a birthday party, and a trip is how a child gets there and back. Once an event that takes a child somewhere is in the plan, the coach adds the drop-off at the event's start and the pickup at its end. A trip she is free to take joins with her as owner, and asking someone else stays on the trip's page as a backup. A trip she can't take herself shows "Needs an owner", because that is a real decision, and the coach suggests on the trip's page who could take it. When the coach does not know when an event ends, the pickup reads "time needed" until she says, and the coach asks for it one question at a time. Each trip links to its event. The same holds for an event she adds through the capture bar.

**The plan follows her calendar.** When she moves or deletes an event on her calendar, the plan follows. A change she makes herself is not marked Updated, by the same rule as everywhere else. When a new event runs into the plan, both items show the Conflict mark as soon as the coach finds it, and the coach card offers a way through, as it does for any conflict. This is how something she books outside MVP still reaches her without her sending it, and the only thing she is asked is the choice the conflict needs.

**Calendar items are moved in her calendar.** Because MVP never writes to her calendar, she moves or deletes a calendar item there, not in the game plan. In MVP she can still add a note to it or ask someone to take it. Its page in the game plan says "Change this in Google Calendar." where other items offer "Move to another date or time", and so does the game plan if she tries to drag it. The same holds when she accepts a move from the coach card: the move changes the plan and nothing on her calendar.

**One thing, one item.** When a capture and a calendar event describe the same thing, the coach keeps one item with both source links.

**Nobody else sees her calendar.** Edward, her circle and her people see only what she sends them, as before.

**The prototype stages it.** The connect screen and the permission screen look real and connect nothing, and Charlotte's calendar is written into the seed. The real product reads Google Calendar and Outlook through their own accounts. Apple Calendar on an iPhone is read by the native app, so like the share menu it is staged in the prototype.

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
| Events with no time, events for other grades, and invitations she hasn't accepted | Leaves them out | The fifth-grade trip in the Cedar Grove Elementary newsletter |

The coach still never sends anything to another person. Everything it adds stays in her own plan, so the rule that nothing reaches another person unless she sends it is untouched.

**She hears what was added where she is.** The coach says what is now in the plan in one read-back, stating the plan rather than describing what it did, such as "Mallory's checkup this Friday at 3:30pm is in your plan, from your Google Calendar." When several things arrive together, the read-back gives the number and the source, such as "Three things from your Google Calendar are in your plan this week.", with the link "Show what's new", which opens a sheet listing them, each with "Take this out". Added items carry no mark on their rows, because a mark on every new item would bring back the clutter this rule removes. Today announces nothing the coach added unless it needs an answer from her, because a plan that quietly stays current is the point.

**She controls it.** She agrees once, with the ticked line "Add events from my calendar to my plan" on 0j, beside the reminder she already chooses there. Settings holds the card "What the coach adds for you", with a switch for each kind: events from her calendar, school-day changes for her children, and trips she can take herself. Turning one off sends that kind to the review card instead. Each added item's page names where it came from and offers "Take this out of the plan", and taking something out is never flagged back to her.

**A new conflict reaches her as a notice.** The Conflict mark appears on both items as soon as the coach finds the conflict, with the dot in the week strip. When she is in the app, a notice rises above the tab bar for about four seconds, holding one line and a link that names where it goes, such as "Violin and therapy overlap every Monday from next week." with "Show me next Monday, Oct. 12", which opens the game plan at Monday. Each conflict gets one notice, and when VoiceOver is on, the notice stays until she dismisses it. A notice is not a sheet, because a sheet holds a decision, and opening one she didn't ask for would force a decision on her. A conflict today or tomorrow goes to the coach card on Today instead, because it needs a choice soon. A conflict more than a day away sends no phone notification, and the Sunday look-ahead raises it on the coach card when nothing more pressing is waiting. In Charlotte's story the coach finds the Monday clash between violin and therapy in her first week, so the demo shows the marks and the Sunday card, and the notice is drawn on a wireframe-only board.

## Onboarding

Onboarding has three parts. In the first part, before any account, the parent tells MVP her first name and who she is planning for, then gives it one thing from this week and sees it come back as a plan. In the second part she creates the account at the end of her draft, chooses a plan, connects her calendar and checks one setup screen. In the third part MVP finishes setting up, the coach introduces itself, and she lands on Today.

| # | Screen | Part | Step counter | Can she skip it? |
| ----- | ----- | ----- | ----- | ----- |
| 0s | Splash | Before the account | None | No |
| 0w | Welcome: her first name and zip code, then each child's first name and birth month and year, with the grade the MVP Coach suggests in a list box she can change, and 0w-b showing a list open | Before the account | None | No, though her name and zip code can be left blank |
| 0a | The capture conversation: the coach asks for one thing, and the photo's preview (0a-b), the reading (0a-c), the question of whose it is (0a-d), the read-back, the coach's one question and the hand-off (0a-e) all happen on this one screen | Before the account | None | Yes, to the account prompt with nothing captured (0c-b) |
| 0t | Thinking, while the coach builds the draft | Before the account | None | No |
| 0c | The draft, headed with the dates it covers, each school day as a card, Keep, Change and Skip on every coach suggestion, and "Tell the MVP Coach what's wrong", then keeping the plan at the end of the page with Continue disabled until she types her email (0c-c), and the draft after she keeps, changes and skips (0c-d). 0c-b is a prompt over 0a when she skipped the capture. | Before the account | None | Not now ends the session |
| 0e-p | Choose a plan: Basic or Family, each with a free trial | Setup | None | No |
| 0q | Connect your calendar: Google Calendar, Apple Calendar or Outlook, with the staged permission as a sheet over the screen (0q-b) and the connected state (0q-d), from which she can connect another calendar or continue | Setup | None | Not now, to 0f |
| 0f | Where do they go to school: the coach's review of what it found, each child's school and start time with where each came from, then her household type, home language and the adults she counts on, and 0f-b when the coach could not find a start time | Setup | None | No |
| 0p | Getting everything ready, while the account is created | Finishing | None | No |
| 0j | Welcome to the team: the coach's introduction and a recap | Finishing | None | No |
| 0i | Her first board on Today: on arrival (0i-a), the other options (0i-b), after she agrees (0i-c), with every reminder ticked (0i-f), after she picks Plan B (0i-g), after she removes a reminder (0i-i), adding a reminder (0i-j), and with nothing captured (0i-d). 0i-h shows the next morning between drop-offs. 0i-e, editing the reminders, was retired on Oct. 28, 2026. | Finishing | None | No |

**Onboarding was shortened on Nov. 24, 2026 (issue O35).** Played on a phone, the flow took eighteen taps across nineteen screens before Today, and half of those screens asked for nothing new. The children and the grades joined the welcome, which retires 0k, 0k-b and 0k-c, and the open list is now 0w-b. Sign-in moved onto the account prompt, which retires 0e. The calendar's connected state (0q-c) gave way to a line at the top of the school screen, and the household joined the school screen, which retires 0g. Charlotte's path was then fourteen screens and thirteen taps. The thinking screens and the getting ready screen stay, because they move on by themselves and cost her no tap. Retired IDs are not reused.

**Onboarding was shortened again on Nov. 24, 2026, after Greg reviewed drafts of the flow (issue O36).** Four screens still only showed her the result of what she had just done instead of letting her carry on where she was. Checking the photo (0v), the reading screen (0r) and the read-back (0b) joined the capture conversation (0a), so the coach's first job feels like the Coach tab she will use later. The account moved from a prompt over the draft to the end of the draft page, and the draft became editable, because nothing the coach proposes is final until she has had the chance to change it. The calendar's permission became a sheet over the calendar screen, which then confirms the connection, because a parent needs to see that her calendar linked before she moves on. The school screen became the coach's review of what it found. Charlotte's path is now ten screens before her first board and about fifteen taps, two more than before, because confirming the child and continuing after the calendar connects are taps she makes on purpose. 0v, 0r and 0b retire.

**Value still comes before the account.** The welcome comes before the first capture so that the coach knows whose week a capture belongs to. Without them, the coach could only guess which child a calendar was for. The welcome asks for no account. Her name and zip code can be left blank, but the children can't, because every later screen depends on knowing them. Nothing in the first part is kept unless she creates an account: her name, zip code, children, photo and draft are held only for that session and discarded if she leaves.

**The coach always confirms which child a capture is for, before it reads anything back.** Once it has read the capture, it says in one line what the capture is, such as "This is Westview Kindergarten's calendar for October.", and asks "Whose calendar is this?", or names the kind of document, with each child's name and grade as a choice and none chosen. Her tap is the confirmation, and the read-back that follows is about the child she chose. The confirmation is a control, not a question, so the coach can still ask its one question. Until Nov. 24, 2026 the question came after the read-back with a child preselected by grade, which Greg found too easy to miss (issue O36).

**She hands the draft to the coach.** The read-back never runs straight into the draft. Once the child is confirmed and the coach's question is answered, the coach says what it will make, names anything it is keeping for later, and waits for her to tap the button that starts the draft. A link beside the button lets her correct something first. The hand-off is the moment she decides to give the coach the job, so the draft never appears as something the coach did on its own.

**The first draft covers the rest of this week.** A week is short enough to be right and long enough to show what MVP does. Anything on a capture that falls in a later week, such as a field trip or a fair, goes onto the school's card and comes into the plan when its week arrives, and the coach says so at the hand-off.

**Grades come from birth months.** The welcome asks for each child's first name and birth month and year, and as soon as she picks a birth month, the grade the MVP Coach works out appears beneath it in a list box she can change. A parent knows a birth month without thinking, while a grade is something she has to say the way a school says it. The list runs Not in school yet, Pre-K, Kindergarten, then First grade through Twelfth grade, with no College. The coach works the grade out against a September 1 cutoff, which is an invented fact (Appendix A). A child marked "Not in school yet" is asked for an age on the setup screen instead of a school, because a five-year-old's Saturday looks nothing like a two-year-old's.

**The zip code is her starting point.** MVP never asks for a home address. It works out each drive from the zip code she gives on the welcome screen and adds five minutes, so an estimate errs early rather than late. A zip code covers a few miles, and the five minutes absorb most of the difference. Directions opens her maps app, which routes from wherever she actually is.

**Waits are shown, never hidden.** While the coach reads a capture, the capture conversation shows a line saying so with the thinking dots beneath it (0a-c), and while it builds the draft, a thinking screen shows the MVP mark and a line saying what the coach is doing (0t). Each moves on by itself. In the prototype, which does not really read photos, each lasts two seconds. In the product, a capture that cannot be read and a wait longer than twenty seconds each have their own state with a way to try again, and the wording for both is in section 4. Creating the account takes thirty to ninety seconds, so 0p shows its steps finishing in turn, five of them when she has connected a calendar, with no percentage, because a number that stalls or jumps looks broken. If account creation fails, 0p says so and keeps everything she entered. If she leaves the app during 0p, MVP opens at 0p or 0j when she returns. In the prototype 0p lasts four seconds.

**Her calendar is connected right after the account.** It comes after the first draft, so she has already seen what MVP does before it asks for her calendar, and before the school screen, so the coach can fill in what the calendar already shows. The coach's introduction on 0j says which events from her calendar are in her plan, and a second ticked line beside the reminder, "Add events from my calendar to my plan", is her agreement. If she unticks it, calendar events wait on the game plan's review card instead. If she taps Not now, connecting stays in Settings, and the coach offers it once, the first time she gives it an appointment. Once a calendar is connected, the screen says so, "Your Google Calendar is connected.", and keeps the other calendars as outlined buttons, so she can connect a second one, such as a work calendar, before she taps Continue (F40).

**A plan screen follows the account.** Right after she creates her account, "Choose a plan" shows MVP's two plans, each with a free trial, so the demo shows how MVP is sold. A free trial means she can cancel before she pays, so the screen asks for nothing she can't take back, and it comes after she has already seen her first draft. In the prototype it is staged: no payment is taken and either plan moves her on to Connect your calendar.

**Onboarding has no step counter.** Once the account moved into the draft and the household joined the school screen, setup is three screens, the plan, the calendar and the school screen, and a counter that runs to three tells her less than the screens themselves do. Versions 3.46 to 3.53 counted from 01 of 04 to 04 of 04.

**She keeps the plan at the end of the draft.** The draft page ends with "Keep Mallory's plan?", one field for the email connected to her school, Continue and Not now, so keeping her plan and creating her account are one step, and she reaches it only after she has read the whole plan. There is no Continue with Apple, because the account has to match how the school reaches her, and MVP uses the address only to recognize the school emails she forwards. If she skipped the capture, a prompt opens over the capture conversation with the heading "Create your account" (0c-b), because there is no draft to keep.

**Headlines are display type.** The large headline on every onboarding and setup screen is set in Fraunces, the display face. Fields, labels, helper lines and buttons are set in Inter, and so are the coach's lines, which use the Voice style described in "Type". This corrects version 3.4, which said the setup screens were set entirely in sans.

**Her first board opens with the coach's first recommendation.** Setup has already given the coach each school's start time on 0f, so on her first board it can recommend how tomorrow morning goes rather than ask for a time. If she captured something, the pass at the top of Today shows the trip the coach recommends, marked "Needs an owner", with the reminders from her capture as its checklist, and the coach card beneath it recommends who drives and when. When she agrees, the card keeps the recommendation and says what comes next, and the same pass becomes hers, with "Tomorrow" in place of "Needs an owner" and Remind me to leave home beneath it. If she skipped the capture, the pass shows tomorrow's first school start, marked "Needs an owner", and the coach card asks for one thing to start with.

A parent who taps Not now on the account prompt, or leaves before creating the account, starts again at the splash the next time she opens the app.

**Back is on every screen after the welcome.** From 0a onward, every onboarding and setup screen carries Back at the top left, before and after the account, so a parent who mistypes a child's name can go back and fix it. The welcome has none, because nothing comes before it except the splash. Some frames draw no Back, and this rule wins over them (issue O30).

## Nothing is ever settled

A family's plan is the best current version of the week, and it changes whenever someone's day does. MVP never presents a plan as final. When something changes, the coach comes back with options rather than a single fix.

Every item in the plan has an owner and may carry a status. The owner is the adult responsible for the item, shown as their name, as "You" for the parent herself, or as "Needs an owner" when nobody is responsible. "Needs an owner" is drawn with its own mark, because an item with no owner is always something the week still needs from her.

A status says where a request or suggestion stands, so it appears only when another person or the coach is involved. The seed file uses the internal names. On screen, a person's answer is their outlined initial and an icon, so every status shows whose it is without spelling out a name that may be long. The words below are what each status says wherever there is room for a sentence: in notifications, in the coach's lines, and in the accessible label every status carries.

| Internal name | On screen | What it means |
| ----- | ----- | ----- |
| Proposed | Suggested, as a dashed label | The coach has suggested it and the parent has not chosen it yet. A suggested item has no owner until she chooses it, and it waits on the review card at the top of the game plan until she adds it. |
| Asked | Edward's initial and an hourglass, labeled "Asked Edward" | The parent has sent it to someone, and that person has not answered. |
| Accepted | Edward's initial and a thumbs up, labeled "Edward: yes" | The person asked has said yes. The item can still change. |
| Declined | Edward's initial and a thumbs down, labeled "Edward can't" | The person asked has said no. The item reopens with options beside it. |

Two marks can sit on any item, whoever owns it, alongside its status.

| Internal name | On screen | What it means |
| ----- | ----- | ----- |
| Changed | Updated | Something about the item moved since the parent last looked, because of a message or another person. The mark stays until she opens the item. A change she makes herself is never flagged back to her. |
| Conflict | Conflict: yoga | The item collides with another one, as described below. |

A conflict is marked separately from these statuses, because it describes two items that collide rather than where one item stands. When the plan asks one adult to be in two places at once, both items show "Conflict:" followed by the other item, such as "Conflict: yoga", until the parent resolves it. An item that collides with two or more items names them together where it can, such as "Conflict: both pickups", and otherwise gives the number, such as "Conflict: 3 items".

The coach never calls a plan set, covered, sorted, done or final, and nothing else on screen does either.

**Accepting the coach's recommendation from Today.** When the coach card recommends a change to the plan, its button carries the change out, and the line under the button says what it changes, such as "Updates your game plan". Tapping the button is her decision, so there is no second confirmation, and because the change is hers it carries no Updated mark, by the rule above. Afterwards the card keeps the recommendation, shows "Agreed" and then what comes next, as "The card keeps the thread after she answers" sets out, with Undo until she leaves Today. Undo puts every item back as it was, including any status the move resolved. The button is a shortcut to the recommended option. "Other options" opens the Leave sheet on Today, scrolled to the coach's Plan B and Plan C, so she can choose another without leaving Today.

**The coach keeps backups ready.** For any leg or item the coach has worked out, it holds the current plan and up to two ranked backups, Plan B and Plan C, before anything goes wrong. They sit at the foot of the Leave sheet, so she reaches them in one tap from Now when she sees a problem first, and through "Other options" when the coach sees it first. The same backups sit on the item's page in the game plan, under "Backup plans". Each backup is one line from the coach and one button. A backup that involves another person is an ask, not a fact: choosing it opens a draft in her voice, and the item shows Asked until the person answers. At least one backup depends on nobody else saying yes, wherever one exists, and when there are two it is Plan C. Backups respect the rules on the school card, so a plan that needs a pickup note after the school's deadline is never offered. When there is no honest backup, the sheet says so rather than padding the list. The coach still never finds or recommends providers, so when nobody in her plan can help, the sheet offers Ask my people.

**Answering the coach's question from Today.** When the coach card asks for a fact, such as a start time, its button opens a sheet where she answers. Her answer changes the board at once, and the card keeps the question, shows her answer beside the check and then the result, with a button for what comes next and Undo, until she leaves Today. Her answer carries no Updated mark, because it is hers.

**MVP changes only its own plan.** A move from the coach card never writes to her calendar, by the rule in "Her calendar", and never books anything. When a move needs a booking, such as a different yoga class, the card hands her a link to the place and the booking stays with her.

## The people around a parent

Parents take their questions and their logistics to two different groups of people, and MVP keeps them apart because they do different jobs. Both live on the Team tab, in one list where the people in her circle carry a Circle tag.

**The circle** is the people a parent trusts with her children and with her private life. It includes her partner, grandparents, close friends, a nanny, and the family's own doctors, therapists and tutors. These are the people she hands parts of the plan to most often, and when the coach says a question needs a doctor, it names the doctor from her circle.

**Her people** are everyone else who shares her children's week for a few hours at a time. It includes school parents, carpool families, coaches and team parents, and the parents she sees at birthday parties and play dates. Her people know the local answers, such as which therapist has openings, where to buy sparring gloves, or who can drive on Wednesday.

Her people are managed inside MVP. The parent creates groups and invites people to them, and only the members of a group see what is posted there. Groups that already exist elsewhere, such as a parents' WhatsApp group, stay where they are. She forwards messages from them into MVP when she wants the coach to see them, and she replies to them from the app they live in.

People see only what the parent sends them. Nobody sees her plans, her coach conversations or anything else she has not sent. The coach knows what she has entered about each person, such as which school their children attend, but it never reads her groups.

### Talking with her circle and her people

**She talks with her circle in chats.** A chat is a private conversation between the parent and one or more people in her circle. She starts one with "New message" at the top of the Team tab, or with Message on a person's page, and she chooses who it is for. She can choose one person, several, or "Everyone on MVP", which chooses all of them at once and is how she asks her whole circle something. A chat with one person is a direct message, and a chat with several is a group chat. If she chooses exactly the people of a chat she already has, her message goes into that chat rather than starting a second one.

**Only people with MVP can be in a chat.** People in her circle who don't have MVP, such as a pediatrician or a tutor, appear in the composer marked "Not on MVP" and can't be chosen. Their page offers Call, and Text when MVP has a mobile number for them, and parts of the plan still reach them as a request by text message, as in C-06b.

**Questions for her people go to a group.** The same composer, with People chosen, posts to one of her groups, as in C-05. Messaging one of her people directly is not part of this version (Appendix B, spec F22).

**Chats are as private as groups.** Only the people in a chat see it. The coach never reads chats, and nothing said in a chat changes the plan. A request is still how part of the plan goes to someone, because a request carries the items and the answer buttons and a chat does not.

**She hears about new messages.** Each new message in a chat and each reply to her post in a group arrives as a notification. The chat or group row shows "1 new" until she opens it, and the Team tab carries a dot.

**Adding people is part of Team.** "Add someone" asks for a name, a mobile number, who they are to her and whether they belong in her circle or among her people. MVP checks the number, and if the person has MVP the row says so. If they don't, MVP offers an invitation by text that she sends herself, and she can always skip it. An invitation leaves no task on her list, unlike a handoff of a message about the plan, because it is not part of the plan. Calling someone opens her phone app and leaves no task either.

**She creates groups.** "New group" asks for a name and, under "Add from your people", who to add. Everyone in a group needs MVP to see its posts, so only people with MVP can be chosen.

## How people are shown

Children, adults and the coach each appear in their own way, so a row can be read at a glance and the three never look alike, even in grayscale. This replaces the per-person colors and the children's monograms of earlier versions.

| Who | Shown as | Color |
| ----- | ----- | ----- |
| A child | A name chip, which is the first name in a filled pill | Children's indigo |
| Every child in a row, without adults | One group chip, reading "Both" or "All three" | Children's indigo |
| The whole household | One chip reading "Family" | Gray outline on paper |
| An adult who owns an item | An outlined initial | Gray outline on paper |
| The parent herself | The word "You" | None |
| The coach | A solid dot | Coach amber |

**Children never appear as initials.** A name chip replaces the monogram everywhere a child appears, because children in one family can share an initial, such as Lily, Laura and Lisa.

**Chips lead each row in a list of items,** such as Later today, the game plan and requests, as in "[Mallory] Pick up at Westview Kindergarten". Checklists are grouped instead, under a heading in the children's indigo that names the child and says what the list is, such as "Mallory", and their rows carry no chips. The title on Now's pass carries no chip either, and it always names the child in words, such as "Pick Mallory up at Westview Kindergarten".

**A row never repeats a name.** The chip replaces the child's name in the row's text, so the row reads "[Mallory] Pick up at Westview Kindergarten" and never "[Mallory] Collect Mallory at Westview Kindergarten".

**A row carries at most two chips.** A row that involves every child uses the group chip instead.

**Guests are named in the row's text.** "Dinner with Claire" carries no avatar for Claire, so Claire's C never sits beside Charlotte's.

**The coach writes names in full.** Chips label items in the plan and never appear inside the coach's sentences.

**"Family" means everyone in the household** set up on 0f. For a household with two homes, it means whoever is on that day's plan.

**There is one color for each kind of person.** The per-person colors of earlier versions, such as green for Alexis, pink for Mallory and indigo for Edward, are retired. All children share one indigo, a darker blue that sits well apart from cerulean, chosen by Greg on October 17, 2026 in place of the green of earlier versions (issue C42), and adults are drawn in a gray a step lighter than the ink of the text, so a person never reads as a line of text. Action blue, which is Hearth's cerulean, is for buttons, links and the active tab, and never for a person.

**Items written "Alexis · Carpool to Cedar Grove Elementary" in this document carry a chip on screen.** In the game plan, the review card and requests, the child's name before the dot is drawn as her name chip and the dot is dropped.

**A child who comes along carries no chip.** A chip says whose item it is, so when Mallory rides along to Alexis's therapy or dance, the row carries only Alexis's chip and its words say who comes along, such as "[Alexis] Studio Ten Dance, with Mallory". The group chip is kept for items that are for every child, such as a shared appointment or a party both girls are invited to (Appendix B items 139 and 142).

**An errand that is not for the children carries no chip, even when they ride along.** A trip to the grocery store or to pick up an adult is an adult's errand, so the row and its page carry no chip, and where the children's coming along matters, the words say so, such as "Leave home with Alexis and Mallory for the grocery store".

**The wireframes stay gray.** They show children as filled gray chips, and Family and adults as outlined.

## How a request reaches someone

Anything sent to another person is written as the parent, in the first person and in her own plain voice, because the person reading it is hearing from her. The coach drafts it and she changes whatever she wants to change. Nothing goes to another person unless she sends it herself.

A message reaches its recipient in one of three ways, depending on who the recipient is.

| Recipient | How it arrives | How the answer comes back |
| ----- | ----- | ----- |
| Someone who has MVP, such as Edward or Min-jung | As a request card in their own MVP, with a notification on their phone. They see only the requests she sends them and nothing else of her plan. | They answer each item on the card with "Yes, I can" or "No, I can't", and each answer appears as a status on her plan. |
| Someone who does not have MVP, such as a tutor | As a text message to the mobile number she entered, with a link to a single web page that shows the request and the answer buttons. No account is needed. | The same buttons on that page update her plan in the same way. |
| A group or organization outside MVP, such as the parents' WhatsApp group or a school office | MVP hands the drafted text to the app she chooses, such as WhatsApp, email or her messages app, and she sends it from there. | Nothing comes back into MVP. Sending it becomes a task on her own list, which she ticks off herself. |

Charlotte's week uses all three: Edward and Min-jung through their own MVP, Ms. Reyes through the web page in C-06b, and the parents' WhatsApp group and the Westview Kindergarten office through another app.

**Each item gets its own answer.** A request that covers more than one item, such as Edward's two pickups, lists each item with its own "Yes, I can" and "No, I can't", so a person can take one and decline the other.

**A person can add a short note.** A note travels with the answer and never changes her plan by itself. A note with "No, I can't" reopens that item, and the coach card turns the note into options, as Edward's note does in C-06. A note with "Yes, I can", such as "I'll be ten minutes late", shows under the item with the Updated mark until she opens it, and nothing reopens.

**A person can change an answer.** After answering, each item shows the answer and a Change link, and a changed answer reaches her the same way as the first one.

**She hears about answers.** Each answer, and each changed answer, arrives as a notification on her phone and as a status on the item. A "can't" also brings the coach card back with options. There are no read receipts, so nobody can see whether the other person has opened a request, and "Asked Edward" carries no time.

**Another app leaves a task.** MVP cannot see whether a message handed to another app was sent, so every handoff leaves a task on her own list, such as "Send Westview Kindergarten the pickup note", until she ticks it off. The plan itself follows her choice in MVP, not the sending.

## Today shows today

Today is the home tab, and it shows the logistics for the current day and nothing else. It is quiet on purpose. A parent glances at it on her way out the door, so it leads with the one thing she needs next and keeps everything else out of the way.

Today has four parts, always in this order.

1. **Now** always holds a pass. It shows the next thing that needs her at a set time, usually the next leg she travels, with its time in large type, and beneath it the checklist, the actions and a line with the drive. When nothing timed is left today, the pass shows her next departure on a later day, so Today always tells her when she next has to leave. "Now, from one moment to the next" sets out every state.
2. **The coach card** appears only when the coach needs an answer from her. It usually makes one recommendation with one button to accept it, and when the coach is asking for a fact, the button says what she adds and opens her answer. It sits directly under Now, so the decision fits on the first screen.
3. **Later today** lists the rest of the day, with the times in a column.
4. **MVP Editorial** shows at most one article, and only when something in the week makes it useful.

**The coach card is the only card.** The coach speaks only in the coach card. Now's pass is a tinted surface for the trip rather than a card, and everything else sits directly on the page, with space between the parts instead of borders, divider lines or a timeline rail.

**The checklist is grouped by who it belongs to.** Under Now's perforation, in the evening reminders and under each departure in For tomorrow, the items are grouped. Each child's items sit under a heading that is the child's name alone, such as "Mallory", set in Body strong in the children's indigo, and "Both" or "All three" heads the items that go with every child, matching the group chips. Since the wording review of Oct. 27, 2026, the heading no longer adds "will need", because the items under it already say what the list holds. Her own tasks sit under "Before you leave home", set the same way in ink, because that heading ties the list to a moment. Drawing the child's heading as a name chip waits on the component library (Appendix B). Each item sits in its own container in the children's tint, so its buttons plainly belong to it: the check is a circle in a fixed column at the left, the item follows, and a remove button sits at the right, with the accessible name "Remove" followed by the item, such as "Remove Lunchbox". Every item starts at the same left edge, and a long item wraps under itself inside its container. The whole row outside the remove button is the target, so she can tick an item anywhere along it. A ticked item stays in place, dimmed, with its circle filled, so she can see what is packed and undo a slip. An open group shows no count, because a group shows its own length. Each child's group ends with the link "Add something else for" and the child's name, such as "Add something else for Mallory". The same rows serve the checklist under Now, the evening reminders and For tomorrow, so she learns them once, and there is no edit mode. A task under "Before you leave home" takes the same container with its own button, such as Call, in place of the remove button, because a task is taken out from its page in the game plan. The moments below list each group's items, and every child's group on screen ends with its add link.

**Removing and adding an item.** Tapping a remove button on an item that repeats, such as a lunchbox or the sneakers on a D day, asks in place on the row whether it is "Just tonight" or "Every night" in the evening, or "Just today" or "Every day" during the day. The first brings the item back the next time it is due, and the second keeps it off until she adds it again. An item that happens once, such as a library book due today, is removed straight away. Either way the row goes, and a notice rises above the capture bar for about four seconds with one line and Undo, such as "Lunchbox is off Mallory's list for tonight." or "Lunchbox is off Mallory's list until you add it back." When VoiceOver is on, the notice stays until she dismisses it. "Add something else for Mallory" opens a new row at the foot of Mallory's group, with the caret, the placeholder "What else does Mallory need?" and the keyboard up. The link hides while she types, the screen scrolls so the row sits above the keyboard, Return adds the item, and tapping elsewhere with the field empty drops the row. What she adds is hers for that departure only, with no source link and no mark. Heather chose the two removal choices in her wording review of Oct. 28, 2026, and Greg drew the per-row remove button, the Undo notice and the add row the same day.

**A finished checklist folds away.** When she ticks a child's last item, that child's group folds into one line, the heading with a check and the count, such as "Alexis · 3 packed". Her own tasks fold the same way under their heading, such as "Before you leave home · 1 done". Tapping a folded line opens the group again with every item still ticked, so she can check it or untick a slip, and the group folds again when the last item is ticked. When every group under Now is ticked, the whole checklist folds into one line, "Everything is packed for" and the leaving time, such as "Everything is packed for 7:40am", with a check that draws in once. Tapping that line opens the groups again. Nothing else happens: there is no praise, no coach line, no sound and no confetti, because the coach never praises her and the fold is only a tidy way to say the list is finished. When the phone asks for reduced motion, the check appears without drawing in. In the evening, the reminders fold the same way on tomorrow's pass. When every group on the pass is ticked, the list folds into "Everything is packed for" and the leaving time while anything under For tomorrow is still open, and into "Everything is ready for" and the same phase as the heading, such as "Everything is ready for tomorrow morning.", once nothing for tomorrow is left to tick, so the line is always true of what she has packed. The pass stays where it is either way. In For tomorrow each group folds, and the departure keeps its row.

**Later today is a list.** Each row has its time in the Meta style, its chips, the calendar mark when the item came from her calendar, and the item, and the times line up in a column. The calendar mark is small, in a muted ink and never cerulean, because cerulean means something she can tap, and the mark is not a control. Its accessible label is "From your calendar". What is already done drops off the list, and a line in Meta at the foot of the list says how much, such as "2 done this morning", so the heading stands alone. Anything that has changed today carries the Updated mark on its row. Each row shows the time the thing itself starts, such as 8:30am for Mallory at Westview Kindergarten, and the leaving time belongs to Now, For tomorrow and the Leave sheet. When nothing is left later today, the heading stays with the count line beneath it, such as "5 done today", and no rows. When nothing was planned at all, Later today is hidden.

**Children appear as name chips,** following "How people are shown", so Today carries no children's monograms.

**The capture bar sits above the tab bar.** Today carries the same capture bar as the Coach tab, docked between the page and the tab bar, in place of the floating "Send to coach" button of version 3.10. The floating button looked like every other button on the screen and could appear beside a coach card that asked for the same thing. The bar hides while the coach card is asking for a capture, so two controls for one action never show together. The game plan carries the same bar, and Team and Kids have none (Appendix B item 34).

**Now sits on paper, and the rest of the day on a sheet below it.** The header and Now are set on the paper color at the top of the screen, and Now's pass sits on its own tint on that paper. The coach card, Later today and MVP Editorial sit below on a canvas sheet whose top corners are rounded, so the eye reads what she does next before the rest of the day. In the evening, tomorrow's pass, with the evening reminders as its checklist, takes the paper surface, and the coach card and For tomorrow take the sheet. The two surfaces are not cards, so the coach card is still the only card on Today.

**In the evening Today turns to the morning ahead.** From the evening phase, the pass on the paper surface shows tomorrow's first departure, and its checklist is headed "Reminders for" and the phase of that departure, such as "Reminders for tomorrow morning" or "Reminders for tomorrow afternoon", set in Subtitle, because most of the work of getting children out the door happens the night before. The checklist holds only what goes with that departure. On the sheet, "For tomorrow" lists her later departures tomorrow that take a child, each with its own items grouped by child, so nothing she packs tonight appears in two places. Tomorrow's full day stays in the game plan. Each reminder carries its own remove button, each child's list ends with "Add something else for" and the child's name, and removing and adding work as in "Removing and adding an item" above. The link "Edit this list" and its edit state of versions 3.25 to 3.30 are gone.

**The dateline names the phase of the day.** The top of Today is one line: the phase icon, then the day, the phase and the date, such as "Monday morning, Oct. 12", "Monday afternoon, Oct. 12" or "Monday evening, Oct. 5", set in Title. The icon is a sunrise in the morning, a sun in the afternoon and a moon in the evening, in primary ink. The separate phase title of earlier versions came off in the wording review of Oct. 27, 2026, and its icon was removed with it by mistake, because Heather asked only for the title to go. Greg put the icon back on Oct. 28, 2026, beside the dateline on the same line, so the header is still a single line and the next departure sits near the top of the screen. The phase tells the parent what the screen is helping with before she reads anything else: getting everyone out the door in the morning, pickups and activities in the afternoon, and getting ready for tomorrow in the evening. The evening shows the day it is, not tomorrow. The prototype follows the demo calendar, never the device clock. Morning runs from midnight to noon, afternoon runs from noon until the screen turns to tomorrow, and evening starts at 7:00pm, or later if an activity is still scheduled after 7:00pm.

**The coach card is the one exception to showing only today.** It holds the single decision the coach most needs from her, and that decision can be about any day. If it were limited to today, a change to Thursday that arrives on Wednesday would stay invisible until Thursday morning, which is too late to act on. The card's label names the day it concerns, such as "MVP Coach · for tomorrow" on Wednesday for a change to Thursday. A card that concerns no particular day, such as the therapist news in C-05, is labeled "MVP Coach", and tapping it opens the full message on the Coach tab. A card that needs no answer from her does not appear, except after she has answered one, when it keeps the thread until she leaves Today, as "The card keeps the thread after she answers" sets out.

**The card keeps the thread after she answers.** Once she answers a coach card, it does not turn into a different card. It keeps its label and the coach's recommendation at the top, now in muted ink, so she can still see what she was asked, and the result follows beneath it. The card takes one of two forms, depending on what she did.

- **When she agrees,** a cerulean check sits beside the word "Agreed", and the coach's follow-up says only what comes next. It never restates the plan, because the recommendation above already says it.
- **When she chooses another option,** such as Plan B from the Leave sheet, the plan she chose appears in full ink beside the check, so she sees the coach's suggestion and her own choice together. The follow-up comes after it.

Muted text is always what the coach suggested, and full ink with a check is always what she chose. The buttons are whatever comes next, such as "Open the game plan" or "Book at Willow Yoga", with Undo, which returns the card to its question and the plan to how it was until she leaves Today. A card that asks for a fact follows the same order: the question, then her answer, then the result. Greg set this rule on Oct. 27, 2026, after the Figma Make trial of the first board showed the card dropping the decision she had just made. A draft that echoed her button as "You ✓ Take both girls at 7:40am" was dropped, because "You" beside the check read wrongly and the echo repeated the plan in other words. 0i-c, 0i-g and both C-06 cards show the two forms.

**On Sunday evening the coach card looks ahead.** In a household with children in school, the card on Sunday evening is labeled "MVP Coach · for next week", names what next week holds that this week didn't, and opens the game plan. Other households get no Sunday card. Its words are written with the Sunday moment (Appendix B item 64).

On every tab, the parent's monogram sits at the top right of the tab's own screen. Pages opened inside a tab, such as a child page, a school card, an article or a draft, show a Back link at the top left instead, and no monogram. Back is always at the top left, on every page and composer, so she always finds the way out in the same place.

The quiet layout is designed for a phone. At tablet and desktop widths, Today keeps the phone layout in a centered column beside the sidebar, and a wide Today is parked on the roadmap (Appendix B).

### Now: reminders and directions

Two actions sit under the next departure, "Remind me" and "Directions". Each is an outlined button with an icon, a bell for the reminder and a navigation arrow for directions.

**A reminder never sets itself.** The coach can suggest one, but she decides. Tapping "Remind me" opens a sheet headed "Remind me to leave home", or the first station when she leaves from somewhere else, with the time and the departure beneath it and three choices: 15 minutes before, which is preselected, 30 minutes before, and when it's time to leave. Once she sets it, the button reads the reminder's time, such as "Reminder at 2:00pm", in its active state, and tapping it again reopens the sheet, where she can change or remove it.

**"Directions" opens her phone's maps app** with every stop in order, such as Westview Kindergarten and then Cedar Grove Elementary. MVP draws no map of its own.

**The reminder arrives as a notification,** only if she allowed notifications on 0j. It says when to leave and where from, naming the first stop and the last stop before home, such as "Leave home in 15 min for Westview Kindergarten, then Brightwater Family Therapy", carries the checklist in a sentence, and offers Directions and a five-minute snooze.

**Reminders need notifications on.** She allows notifications on 0j when she leaves the reminder ticked. If she did not, Remind me still opens its sheet, with a line above the choices reading "Notifications are off, so this reminder can't reach you." When she has never been asked, Set reminder brings up the phone's own request. When she has said no before, the phone will not ask again, so the line carries an "Open settings" link. The reminder is kept either way and goes off once notifications are on. Once a reminder has gone off, the button reads Remind me again.

**Directions appears only when she is driving.** When a child leaves with someone else, such as Alexis with the Parks in C-03, Now offers only "Remind me".

**The prototype stages the traffic check.** It cannot check traffic, so "When it's time to leave" keeps the product's wording and sets its time from the travel times in this document. The maps app is staged like the share menu.

### Now, from one moment to the next

Now answers one question: when does she next have to go, and what needs her before then. It follows a single order, and it always ends in a pass. The next thing today with a set time that needs her leads Now. When no timed thing is left today, her next departure on a later day leads it, and in the evening that is tomorrow's first departure. Greg set this rule on Oct. 27, 2026, after C-07 showed the morning's first departure buried in a list and its checklist repeated in two places. It replaces the task-led Now and the quiet line of version 3.26, and the rule that tomorrow's pass appeared only after the reminders folded.

**What leads Now.** A leg she drives leads Now, and so does a child leaving home with someone else, because the checklist is hers to do, as when Alexis leaves with the Parks in C-03. Her own trips lead it too, such as yoga or her conference. A timed thing at home, such as dinner with Claire, leads Now when no leg comes before it, with Remind me as its only action. Three kinds of item never lead her Now. Someone else's trip that does not start from her home, such as Edward's pickup at Cedar Grove Elementary, stays in Later today with his initial and answer. An item that is Asked or that needs an owner stays in Later today, and if an Asked item is still unanswered at the time she would have to leave, the coach card asks her to decide. An item with no known time stays in Later today with "Start time needed", and the coach card asks for the time.

**A leg passes through five stages.** More than 15 minutes before the leaving time, the countdown reads "in 30 min", or "in 2 hr 30 min" for anything an hour or more away, in a plain pill. From 15 minutes before, the countdown turns to the warning ink while it counts down, such as "in 15 min" and then "in 10 min". From the leaving time it reads "Time to leave", filled, and Remind me goes away, because a reminder can no longer help. The five minutes MVP adds to each drive mean she is still on time for five minutes after that. Once those five minutes are used up, the pill reads "Running late" in the warning fill, and the Arrive field shows when she will really arrive, such as 2:31pm against a 2:30pm pickup, in the warning ink with a clock icon. The pass states the time plainly and never scolds. When the leg's destination is due, the leg leaves Now, adds to the done count at the foot of Later today, and the next leg on her line takes over from that stop. Now never goes back to home unless home is the next stop, and MVP never asks her to tap that she has left or arrived.

**The next station.** Under the route, a line in Meta names the next stop on her run and when she is due there, such as "Then Cedar Grove Elementary, 2:45pm". When the next leg starts a separate run that leaves within 30 minutes, the line names it instead, such as "Then at 8:15am, you leave home for Westview Kindergarten". When nothing follows soon, there is no line.

**Marks on the leg.** A leg whose item has changed carries the Updated mark beside its route until she opens the Leave sheet. A leg in conflict carries "Conflict:" and the other item on a line in Meta under the title, on the pass, such as "Conflict: Alexis's carpool". The pill, the time and the fields stay as they are, because the leg still leaves when it leaves, and the coach card beneath Now holds the recommendation, labeled "MVP Coach · for today" when the conflict is today's, with Other options opening the Leave sheet's backups. "A conflict on the pass", among the boards for the wireframes only, shows it.

**Tasks.** A task joins a leg's checklist, under "Before you leave home", when the seed marks it for that trip, as "Call Brightwater Family Therapy to ask for Dana Whitfield" does on Wednesday. A task's words say what to do and why. Beneath them a line in Meta names who to reach, such as "Brightwater Family Therapy · 707-555-0170", and a button at the end of the row does it in one tap, such as "Call". A task left by a handoff reopens its draft, with "Send from Mail" or the app that applies, and a task to message someone on MVP opens the composer with them chosen. Tapping the row anywhere but the button still ticks it. Every task the coach or a handoff creates names who, why and how to reach them, from what MVP already holds, and a task she writes herself, such as fixing the washing machine, carries only her words. Every other task is an anytime task, which shows "Anytime" in the time column of Later today. An anytime task never leads Now, because Now always holds a departure. When no timed thing is left today, the anytime tasks lead Later today, the one with the earliest deadline first, then the one something else depends on, then the one she added first. Tapping one opens its item page, where she ticks its steps, sets a reminder and asks for help (Appendix B item 95, issue T61).

**When nothing timed is left today.** A line in Meta sits above the pass and says why the pass is for another day: "Nothing to drive to today." when nothing today was timed, "Nothing else to drive to today." once the day's legs are done and tasks are left, and "Nothing else today." when nothing at all is left. The pass beneath it shows her next departure, with its day in the status pill, such as "Tomorrow" or "This Friday", and Remind me as its only action. Its checklist appears from the evening before, as the evening reminders. Only when the plan holds no departure ahead at all does Now show the line alone, and no moment in the demo reaches that state.

**The done count.** Before noon it reads "2 done this morning". From noon it reads "3 done today".

**Tomorrow's pass in the evening.** From the evening phase, the pass shows tomorrow's first departure, laid out as below, with the status pill reading "Tomorrow" in place of a countdown. Its checklist is headed "Reminders for" and the phase of the departure, such as "Reminders for tomorrow morning", and its action is "Remind me to leave home", or Remind me when a child leaves with someone else, because Directions appears only when she is driving. The leg on the pass never appears in For tomorrow, and For tomorrow is hidden when no later departure takes a child. The pass and each row in For tomorrow open the Leave sheet for their leg, so she can change tomorrow's leaving times the night before. This replaces version 3.26's rule that tomorrow's pass appeared only after the reminders folded and only for a leg she owned, which left her first board and every unticked evening without a pass.

**A pass that needs an owner.** When nobody owns tomorrow's first departure yet, as on her first board, the pass still shows it, with "Needs an owner" in the status pill and no action, because a reminder to leave makes sense only once the leg is hers. When the coach recommends a trip, the pass shows that trip, so the pass and the coach card beneath it describe the same morning. When she agrees, the pill turns to "Tomorrow" and Remind me to leave home appears, and when she chooses another option, the pass changes to the plan she chose. When the coach has recommended nothing, as on 0i-d, the pass shows tomorrow's first school start.

### Now reads like a boarding pass

When Now holds a leg she travels, it is laid out like a boarding pass. A pass puts each fact in a fixed place with a small label, so a parent learns where to look once and then reads one field instead of a sentence. Only the values change from one leg to the next.

**What, when and where sit together on the pass.** The top of Now is a tinted panel with large rounded corners, and it holds three things in order: the title, which says what the trip is for; the leaving time with its status pill; and the route with the next station. Grouping them gives Now one place to look first, and the tint sets the trip apart from what she does about it below. The pass takes the children's tint, `kid-bg`, when a child is on the leg, and the subtle canvas tint when the leg is hers alone, such as yoga. The tint says that a child is coming along, never which one, so it is never the only way a child is named.

**A title names what the trip is for.** The title names the item at the stop she is heading to in the words a parent would say aloud, set in Subtitle, without the chip, such as "Pick Mallory up at Westview Kindergarten" or "Alexis takes the Parks' carpool to Cedar Grove Elementary". The route and the time say how and when, and the title says what for, so a parent glancing at Now never has to work out from a place name whether this is the carpool, ballet or a checkup. On a run with several stops the title names the item at the next stop, and it changes as each leg takes over. A leg that ends at home has no item there and no title.

**The title always names the child.** The pass carries no chip, so the title names the child in words on every leg that has one, such as "Pick Alexis up at Cedar Grove Elementary" on C-03b's leg at 2:31pm or "Pick Mallory up at Westview Kindergarten" on Wednesday, even when a group below already names her, as the heading "Mallory" does. This retires the rule of version 3.24 that the title named a child only when no checklist group did. The row in Later today keeps its chip and its shorter wording, because a list of items has no other way to say whose each one is.

**The time and its status share a line.** The leaving time is set in Display. Beside it, at the right, a status pill gives the countdown and grows more urgent as she gets closer: plain while more than 15 minutes are left, with the countdown in the warning ink from 15 minutes before, filled as "Time to leave" from the leaving time, and "Running late" in the warning fill from five minutes after it. While it counts down, the pill sits on the control surface with a hairline, so it stands clear of the tinted pass rather than laying one tint on another. The words change at every stage, so the pill never relies on color alone, and while it counts down the minutes say what the warning ink says. The pill states where she stands and never scolds. It is the only part of the pass that moves through the stages of a leg. A thin rule in the focus color runs under the time and the pill, and separates the when from the where.

**The route comes last on the pass.** Under the rule, the route names where she leaves from and where she is going, such as "Home → Westview Kindergarten", in Body strong, with the arrow read aloud as "to", and the chevron at the right. The line in Meta beneath it names the next station, such as "Then Cedar Grove Elementary, 2:45pm". Tapping the route, its chevron or the time opens the Leave sheet. The chevron appears only on a leg she travels herself. A pass for a child leaving with someone else, such as Alexis with the Parks, has no chevron, and its route and time do nothing when tapped, because nothing on the Leave sheet is hers to change on that leg.

**Three fields hold the facts, under the pass.** Below the pass, on the paper, sit three fields, each a label in Meta over a value in Body strong. Drive gives the minutes for this leg. Arrive gives when she reaches the stop. The third gives the stop's own time, labeled "Pickup" for a pickup and "Starts" for anything else. Before the leaving time, Arrive is worked out from the leaving time, and from the leaving time onward it is worked out from now, so once the five minutes are used up it shows when she will really arrive. When Arrive falls after the stop's time, the value is set in the warning ink with a clock icon, so lateness shows without a sentence and without relying on color. For a child leaving with someone else, the fields are With, such as "The Parks", and Starts, with no Drive or Arrive.

**Two dashed lines hold the list and its actions together.** A dashed line runs under the fields, and the grouped checklist sits below it. A second dashed line runs under the checklist, and Remind me and Directions sit below that, side by side and the same width. The actions belong to the trip and to what she packs for it, and the lines tie them to the list rather than leaving them floating at the foot of Now. A set reminder shows only in its button, such as "Reminder at 2:00pm". When there is no checklist, the second line goes and the actions sit under the first.

**A timed thing at home gets a pass without a route.** A timed thing at home, such as dinner with Claire, has no route and no fields. Its pass keeps the title, which is the item itself, and the time with its status pill, and the line where the route would be reads "At home", with no chevron, because there is no Leave sheet for it. It takes the children's tint when a child is part of it, and its only action is Remind me.

### A trip with more than one stop

**A trip with more than one stop gets a trip pass.** When she leaves with more than one child and makes more than one stop, the pass describes the whole trip rather than its first leg. The coach card that set the trip up, such as "Take both girls at 7:40am", is about the whole trip, and on such a morning the tightest moment is often the second departure, which a single-leg pass hides. The top of the pass keeps its layout. Before the trip starts, the title names the trip and the children, such as "Take Alexis and Mallory to school", the time is the first leaving time, and the route names every stop, such as "Home → Cedar Grove Elementary → Westview Kindergarten", with no next-station line. The title can say "school" because the stops below name each place in full.

**A timetable replaces the three fields.** Under the first dashed line, the Drive, Arrive and Starts fields give way to a short timetable drawn on the Leave sheet's rail, with the time of each row in Body strong at the left. It has one row for each departure and each stop: when she leaves home, when she reaches each stop, with the child's chip, the place and a line in Meta such as "Drop off · Starts 8:00am", when she leaves each stop, and when she is back home. Each row carries an icon for the kind of place where it happens, home or school, so both rows at a school, arriving and leaving, show the school icon. The rail stops above and below each icon rather than running through it. A second dashed line follows, then the actions. Chips appear in the timetable's rows only, so the pass itself still carries none.

**The trip pass stays for the whole trip.** As each stop passes, the top of the pass moves to the next leg, with its own title, leaving time, status pill and route, such as "Drop Mallory off at Westview Kindergarten", 8:10am and "Cedar Grove Elementary → Westview Kindergarten". The timetable marks her progress. Rows behind her turn muted, with muted icons and faded chips, the row she acts on next carries its icon in a solid cerulean circle and bold text, and the rows ahead stay in full ink. On the evening before, the row she acts on next is "Leave home". Nothing asks her to tap that she has arrived or left, so the timetable moves with the clock. Once she is under way, Directions replaces Remind me. A trip with one stop keeps the single-leg pass with its fields. 0i-f shows the trip pass the evening before, and 0i-h shows it between drop-offs.

**Times in the timetable follow the travel times.** Each arrival is the leaving time plus the drive, and each leaving time follows the rule in "Dates, times and places". In the product, arrivals would move with live traffic. The prototype keeps the fixed times in this document, and the pill counts down against the demo clock.

### Now stays in place

Today has two surfaces, and they move differently. The header and Now sit on paper and stay in place. The coach card, Later today and MVP Editorial sit on the canvas sheet, and when she scrolls, the sheet rises over Now and the header and covers them. Scrolling back down uncovers both exactly as she left them. Now is what she acts on next, so it keeps its place on the screen, and the rest of the day comes up over it only when she reaches for it.

**The sheet covers the header too.** The sheet can rise to the top of the screen, over the dateline, the phase of the day and the monogram. Scrolling back to the top brings all three back, along with Settings and the household switcher, which open from the monogram.

**A tall Now makes the page scroll as one.** When the header and Now together are taller than the space above the capture bar, as on the first board with its reminders inside the trip pass and on C-07 in the evening, the whole page scrolls as one, with the sheet directly under Now, so every part of Now can be reached. A Now that fits keeps its place while the sheet rises over it, which is every daytime board in the demo week (Appendix B item 114).

**In the evening the same rule applies.** Tomorrow's pass, with its reminders, stays in place on paper, and the sheet with the coach card and For tomorrow rises over it.

**Sheets are unchanged.** The reminder sheet, the Leave sheet and every other sheet still rise over the whole screen, with the scrim behind them.

### The Leave sheet

Today changes one kind of thing: when she leaves. The Leave sheet is where she does it. It opens when she taps the large departure time or the leg line under it, which carries a chevron on any leg she travels herself, and from tomorrow's pass or a For tomorrow row in the evening. Notes, owners and moving an item to another day stay in the game plan, so Today stays quiet and changing a time never turns into busy work.

**The sheet draws her run as a line.** Each stop is a station on a rail, in order: the place, the item there with its chip and the time it starts, and a line naming the stop and the time she leaves it, such as "Leave Westview Kindergarten at 2:30pm". Home is a station only when the run starts or ends there. The last station reads "Back around" and the time she gets home, because that time is an estimate. The rail appears inside this sheet only, and Today's own surface keeps no rail.

**The sheet says what she can change.** Under the heading and its line, one line in Body reads "Tap a time to leave earlier or later. The stops come from your game plan, and that's where they change." Each leaving time is drawn as a control, cerulean text in a cerulean outline on paper, because it is the one thing on the sheet she taps, and a plain time read as a fact she could only look at. Save appears only after she has changed a time, because an inactive Save read as a button with nothing to save, and Close already leaves without changing anything. Adding or removing a stop stays in the game plan.

**She can change when she leaves any stop.** Tapping a leaving time opens it in place, tinted, with two outlined buttons beneath it, "5 min earlier" and "5 min later". Every leaving time is worked out in five-minute steps, and a change is almost always a step or two, so two buttons are quicker than a wheel and easier to hit while holding a child's hand. With each tap the time moves and a line under that station gives the result, such as "You reach Westview Kindergarten at 2:25pm, five minutes before pickup." or "You reach Studio Ten Dance at 4:20pm, five minutes after ballet starts." A late choice is stated and never blocked, and the line turns to the warning ink when she would arrive after the item starts. The change ripples down the line, so later stations show their new times, and a later stop she would now reach after it is due gets the same line in the warning ink, so a late arrival further down the run is never hidden. A leg never leaves a stop before she has reached it. Save keeps the change, and Close leaves everything as it was. A change she makes carries no Updated mark, a reminder she has set moves with the new leaving time, and a change that runs into another item raises the Conflict mark on both and brings the coach card.

**Start times change in the game plan.** The Leave sheet changes only when she leaves. A start time, even on her own item, is changed from the item's page in the game plan, because changing what is planned is an edit, and edits belong there (issue T88). A calendar item reads "Change this in Google Calendar." under its station, and its leaving time can still change, because the leaving time belongs to MVP and never to her calendar.

**Plan B and Plan C sit at its foot,** under the heading "Backup plans", when the coach has written backups for this run. "Other options" on the coach card opens the sheet scrolled to them.

### Sheets

A sheet holds a short decision about something already on the screen, and closing it returns her to the same place. Anything she reads or works in, such as a draft or an article, is a page with Back instead. After she acts, the sheet closes and the screen shows the result, such as the button reading "Reminder at 2:00pm". A sheet never opens another sheet, and no confirmation follows a sheet. When something in a sheet leads to another screen, the sheet closes first ("What stays in place").

Every sheet has a grabber and a Close icon at its top right, with the accessible label "Close", so she can always leave without acting. Closing never changes anything. Below them sit the heading and, when it helps, a line in Meta naming what the sheet is about. The body is one of four kinds: choices, which are radio rows; a single field, such as a time picker; a line of stations; or a list of actions, each a line with one button. The footer holds the primary button and, when there is one, a link for a second action, such as "Remove reminder".

A sheet comes in two heights. Most fit their content. The Leave sheet is tall and scrolls. A sheet reopened on something she already chose shows the choice selected, and its button changes to say so, such as "Update reminder".

## The game plan holds the week

The game plan is where the parent works out her week, and it is hers. The coach suggests, and she decides here. It shows this week and next, with every item in them, including routine ones such as the daily school runs, and it is the only place she moves an item to another day, adds a note or asks someone to take it.

**A week strip sits under the title bar.** It shows the seven days, marks the day she is reading as she scrolls, and puts a dot under any day with something that needs her, a shape that reads in grayscale. Tapping a day opens it and scrolls to it. Once she scrolls into next week, the strip reads "Next week". The strip stays under the title bar while the agenda scrolls beneath it, and the day headings scroll with the agenda, so there is one layer that sticks rather than two. At tablet and desktop widths the strip becomes the headings of the seven columns.

**The agenda opens at today.** Days already past this week fold into one line, such as "Earlier this week · 11 done" on a Wednesday, which she can open, and once everything today is done, today folds the same way, such as "Today · 6 done". Today and tomorrow open expanded, and the other days open collapsed, each showing its name and how many items it holds, such as "6 items", with the dot when something on it needs her. An open day sits in its own container, filled with the subtle canvas tint and rounded at the corners, so its heading and rows read as one group. The container is not a card, so the coach card is still the only card on Today and the game plan keeps no borders. A day with nothing in it reads "Nothing is planned." Next week follows Sunday under its own heading, collapsed, with its routine items quiet. Tapping a day's heading opens or closes it, and tapping the folded line of past days opens them, so every day she can see she can open. What she opens or closes stays as she left it until she leaves the game plan, so the game plan always opens the same way. Day headings name the day only, as "Today", "Tomorrow" or "Friday", and under the Next week heading "Monday", with no "this", "next" or date, because the agenda's order and the Next week heading already say which week each day is in. The game plan reaches two weeks, and a month view stays on the spec's roadmap.

**Each row reads like a row in Later today.** The time the thing starts sits in a column, then the chips, the item, and the owner or the person's answer at the right, with marks and her note beneath. Routine items are visually quieter than items that happen only this week, so the week stays readable. A routine item that carries a status, a mark or a note is drawn at full weight until it clears. An item from her calendar carries the calendar mark. Runs and leaving times stay on Today, because drawing them on every day would turn the game plan into seven Todays.

**A review card sits at the top when anything is hers to choose.** It holds proposals from other people, such as the second tutoring session Ms. Reyes asked for, and school events a parent chooses to attend, such as Westview Kindergarten's harvest fair, so in most weeks it holds one thing or nothing. What she has already committed to elsewhere is added by the coach and never waits here ("What the coach adds for her"). Its heading says in a full sentence what is waiting, such as "One update is waiting for your review.", and nothing sits beneath it. The items are grouped by day. Each day is outlined in the coach's amber, with the day set in the Label style, because the coach found what is in it. Each item shows its chip, the calendar mark when it came from her calendar, the item with its start time, any mark, such as "Conflict: tutoring", and two choices, "No thanks" and "Add to the game plan". When the card holds two or more items, "Add them all" sits at its foot. The card takes the coach's tint, and each day inside it sits on the card's paper. When nothing is waiting, the card is not shown. It counts this week, and next week's heading carries its own sentence in the same form when anything there is waiting. On Sunday, once this week is over, the card counts next week.

**Items already in the plan show what they need where they are.** A trip nobody has taken becomes hers when she is free, so "Needs an owner" appears only when she can't take it herself. A "can't" from someone she asked and a conflict that needs a choice come to the coach card on Today one at a time, as Edward's answer does in C-06, and stay marked on their rows. An unopened Updated mark is information rather than a decision, so it stays on its row and puts no dot in the week strip. A day holding something that needs a decision opens expanded, and the week strip's dot marks it, so she never has to scroll to find it. Nothing from inside the plan gathers on the review card, so the card keeps one meaning.

**A conflict names the other item** on both rows, and names its day when it is on another day, such as "Conflict: therapy next Monday, Oct. 12".

**Tapping an item opens its page.** The page has Back, and shows the item with its chips, then its day, start time and place, and its marks. Beneath them come the owner, with "Ask for help", which opens the people she can ask and then a draft in her voice; her note, with "Add a note" when there is none; the source link; and "Backup plans", with the coach's dot and tint, when the coach has backups for the item. These are the same backups the Leave sheet holds. At the foot sits "Move to another date or time", which opens a day and time picker in place. A calendar item shows "Change this in Google Calendar." in place of the move. A suggested item shows "Add to the game plan" and "No thanks" under its title. An item the coach added names where it came from, such as "From your Google Calendar", and offers "Take this out of the plan" at its foot. When the item belongs to a run on Today, the page names the run in one line. It is a page rather than a sheet, because asking someone, a draft and the backups all lead somewhere else, and a sheet never opens another screen.

**Moving is a choice on the page, and dragging is a shortcut.** On a phone she moves an item with "Move to another date or time" on its page, because dragging across a week of scrolling is hard, and a screen reader cannot drag at all. At wider sizes, and with a long press on a phone, she can also drag an item to another day or time. Changing the time of an item someone has answered keeps their answer until she sends them the change.

**She sees where an item lands.** When she taps "Add to the game plan" on the review card, the item leaves the card, its day opens if it was collapsed, the agenda scrolls to it, and its row takes the coach's tint for about two seconds before fading back to a plain row. When she moves an item and comes back to the agenda, the same happens on its new day, opening the Next week heading when the day is there. The highlight is a pointer and not a mark. It carries no Updated mark, because a change she makes herself is never flagged back to her, and it leaves nothing behind once it fades. When the phone asks for reduced motion, the tint appears without fading and clears when she scrolls or taps. A screen reader hears where the item went, such as "Added to this Tuesday."

**She adds things through the capture bar.** The game plan carries the same capture bar as Today, docked above the tab bar, and what she gives it goes to the coach. She types in place, and the coach's read-back rises above the bar as a strip with the coach's dot and tint, labeled with the day it concerns, such as "MVP Coach · for this Saturday". The strip says in a line what the coach took and where it put it, with the coach's suggestion when something is unresolved, one button to accept it and "Other options", which opens the item's page at "Backup plans". The strip goes when she scrolls or taps elsewhere. Something she says about her own week, such as a party Alexis is going to, joins the plan as hers, and the coach adds the trips around it, with her as owner when she is free. When nothing is unresolved, the strip says what is in the plan and has no button. Something with no day becomes an Anytime task. There is no Add button on each day, because two controls for one action is what retired the floating button on Today.

**The coach helps build the week.** There is no separate setup mode. When the week is thin, as it is after onboarding, the empty days carry one quiet line inviting her to tell the coach about them, and each thing she tells it comes back as a suggestion with alternatives. When the coach finds a gap, such as nobody taking Alexis on Tuesday mornings, it shows the gap as an item that needs an owner rather than asking another question. A coach answer on the Coach tab that produces something for the plan ends with one action, such as "Add to this Thursday".

**The coach card does not appear on the game plan.** The game plan is where she works without the coach, and the coach card's job is to reach her on Today. The read-back strip is the one exception, because it answers something she has just given the coach.

**Changes she makes are hers.** A change she makes herself is never flagged back to her. A calendar item is moved in her calendar, and in MVP she can still add a note to it or ask someone to take it.

## Every tab at every moment

The household switcher jumps to a moment, and the tester can then open any tab. Every tab shows its state at that moment, worked out from the moments before it, so nothing is blank and nothing from later in the week shows early.

- **Coach** shows the conversation up to the moment, oldest at the top, with a heading for each day. The current day's heading is "Today" and earlier days follow the same words, such as "Yesterday", "This Monday" or, for C-00, "Last Monday". Before C-01 the conversation starts with the coach's introduction from C-00 and the lines in "Taught when useful".
- **Game plan** shows the week as the table in "The week in the game plan" stands at that moment, using its "Changes during the demo" column, opened at the moment's day, with anything still waiting on the review card. "Next week" shows next week's routine items and anything moved there, such as Mallory's second tutoring session after C-04.
- **Team** shows the chats, posts and replies that exist by that moment, with "1 new" on anything that arrived since she last opened it, following "The Team tab".
- **Kids** shows each card as it stands at that moment, so the Westview Kindergarten card carries its change from C-05b onward.

View as, in the household switcher, shows a moment from the recipient's side. It shows the recipient's Today with the requests she has sent them, and the screens they use to answer. The recipient's other tabs are not part of the demo.

## The Kids tab and school cards

The Kids tab holds a page for each child and a card for each school. Settings, which used to be the fifth tab, move behind the parent's monogram, because parents visit settings rarely and look at their children's schools every week.

**The Kids tab's icon is two figures of different heights,** so it fits a toddler and a teenager alike, and it replaces the smile. Team's icon is two people as well, so the difference in height must stay obvious at tab size. The label stays "Kids".

**A child page** shows the child's school, what she does every week and the items that regularly go with her, such as sneakers on motor skills days. It links to her school's card. Siblings at the same school share one card, so an update reaches both.

**A school card** holds what a parent otherwise keeps in a drawer of handouts and a folder of emails. It opens from the Kids tab and from the school's name anywhere it appears, such as "Westview Kindergarten" in "[Mallory] Pick up at Westview Kindergarten" on Today.

| Section | What it holds | How it changes during the year |
| ----- | ----- | ----- |
| Hours | Start and end times, early dismissal days, and before- and after-school care | For conferences, testing weeks and a new term |
| Contacts | Who to contact for what, organized by reason, such as absences, pickup changes, learning support and the counselor | A new teacher or a new office address, usually at the start of a year or term |
| Rules | The pickup list policy, dress days, lunch, and what each letter day means | Occasionally, often announced in a newsletter |
| Calendar | Term dates, holidays, conferences and school-wide events | In pieces all year |
| Rotation | The letter for each school day | A new sheet each month |
| Documents | The original photos, PDFs and emails the card was built from | With every capture |

Every fact on a card links to where it came from, which is the same source link rule as everywhere else. The link appears when she opens a fact, not under every line. A fact she told the coach herself, such as a start time, shows "From you". A fact from a document names who sent it and, for a photo, the kind, such as "From Westview Kindergarten · photo". In Documents, the day a document came reads "today" or "yesterday" when one of them applies, "this" and the day for another day this week, and "last week" for anything earlier (issue L6). Sections with nothing in them are hidden. On the Kids tab, a school's row carries the Updated mark when anything on its card has changed. Keeping the originals also answers one of the most common questions a parent has, which is where a particular handout went.

**Cards are kept current through capture.** There is no separate flow for adding school information, because the four entry points already cover it. When a capture contains reference, the coach files it on the right card and says so in its read-back, while events still go to the game plan and rules still become standing items. A changed fact carries the Updated mark on the card until the parent opens it, and the previous version stays in the card's history. If a new document contradicts an old one in a way the coach cannot resolve, such as two different end times, the coach asks which is right instead of choosing. Each card also has its own "Add to this card" button, which opens capture already addressed to that school.

**The coach asks at predictable moments.** Near the end of each month it asks for the next rotation sheet, after a long break it asks whether the hours have changed, and in late summer it asks for the new year's handouts, keeping the contacts but marking the teacher and grade for a check.

**Cards start from the first capture.** Onboarding has no step for adding schools. The first card is created from whatever the parent captures first, and when the coach does not yet know a child's school, it asks on Today, the same way it asks for other details about each child. The Kids tab also has an Add a school button for parents who would rather type it in.

The prototype covers schools only. Studios, teams and clinics would suit the same card, and that belongs on the roadmap.

## What every family shows

Every family shows the same set of things, so the demo makes the argument that one product handles households that look nothing alike. The order varies with each family's week, and each family shows one or two of these in more depth than the others.

1. The parent gives MVP something messy, such as a voice note, a photo of a handout, a message shared from another app or a forwarded email, and MVP turns it into the plan. What is already on her own calendar reaches her plan without her sending it.
2. When something needs a decision, the coach offers several ways it could go, recommends one and explains why. Sometimes the parent chooses a different one, because she knows things the coach does not.
3. Part of the plan goes to another person as a request, and their answer comes back as a status.
4. Something changes after a person has accepted, and that part of the plan reopens with options beside it.
5. The parent works the game plan directly, without the coach.
6. The parent asks the coach a parenting question, and the coach answers from what it knows about her family, with an MVP Editorial article attached.
7. The parent takes a question to her people or her circle, because it needs people rather than a product.
8. The parent uses Today to get the children out of the house prepared.

| Family | Shown in depth | Status |
| ----- | ----- | ----- |
| Charlotte and Edward | Onboarding, the Today board, how much of the week the coach can build from what she photographs, forwards and says and from her own calendar, and how she works with her circle and her people | Written in this version |
| Calypso | The coach answering a hard parenting question, and her people, who are still coming together | Proposed |
| Alexandra and Ben | The game plan worked directly, and a plan that changes more than once | Proposed |
| Marcus | Sending parts of the plan to several people, and what each person is allowed to see | Proposed |

## What the coach does not do

The coach does not plan money, find or recommend service providers or sitters, buy anything, or give advice on custody, legal or medical questions. It may suggest what to eat, and a place to eat near where the family will be, when the plan puts a meal on the road, as on Friday of the weekend away. Those places are invented in the prototype, and a suggestion is never sponsored or paid for (Appendix B item 145). When the demo needs one of those, the answer comes from the parent's circle, her people, or a professional the family already has.

## Meals

Every family has something to work around at the table, but none of them opens MVP in order to plan dinner. Dinner appears in a plan only when the schedule forces it to move, and the rest of the time it stays out of the way.

## Dates, times and places

The demo runs on a fixed calendar. The demo week is Monday, Oct. 12 to Sunday, Oct. 18, 2026, and Charlotte's first night, C-00, is Monday, Oct. 5, 2026, the week before. Today's dateline shows the day, the phase of the day and the date, such as "Monday morning, Oct. 12", and the draft on 0c shows the dates it covers. Everything else on screen says which week a day falls in, counted from the day of the moment. The day itself is "today", the days on either side are "tomorrow" and "yesterday", any other day in the same Monday to Sunday week is "this" with the day, such as "this Friday" or "this Monday", a day in the week before is "last" with the day, such as "last Sunday", and a day in the following week is "next" with the day and the date, such as "next Tuesday, Oct. 20". A weekday is never named alone on screen. The exceptions are the dateline, the dates on 0c, the week strip's single letters, the short day labels in a person page's "This week" rows, and the game plan's day headings, which read "Today", "Tomorrow" and "Friday", and "Monday" under the Next week heading. A recurring description, such as "every Monday", stays as it is. Months are abbreviated as in the Ready for dev frames: Jan., Feb., Aug., Sept., Oct., Nov. and Dec., with March, April, May, June and July written in full.

The seed files keep every time as a demo time, which is a number of weeks before or after the demo week, a day of the week and a time, and the seed holds one anchor date for the demo week's Monday. Every date on screen is worked out from that anchor, so the whole demo can move to another week by changing one value. The prototype never reads the device clock and always runs on the demo calendar.

There is no set presentation date, and meetings happen as they come up, so the demo stays in its October week whenever it is shown. The story is told in days of the week and times of day, and the dateline keeps its October date. The anchor is there so the whole demo can move once to a new season, such as a school break or the spring, when parents start looking for camps, and it is not moved before each presentation.

The same calendar applies to documents in the story. The Westview Kindergarten rotation calendar is the October sheet, headed "Westview Kindergarten" with "October 2026" beneath it, and it starts with an A day on Thursday, Oct. 1.

Times are written with am and pm, in the time zone America/Los_Angeles. Every person, place and organization is invented. Each household lives in its own invented town, with its own schools and places, so each week's driving is simple to follow and each seed file stands on its own, and no place name carries over from one household to another. Travel times between places are fixed in the seed file rather than calculated, and they stand for the estimates the real product works out from her zip code and from the places' addresses.

**Every phone number carries its area code,** such as "707-555-0111", because a number without one can't be dialed from out of town and reads as unfinished. Charlotte's town uses 707, and Harlow Lake Lodge, in the East, uses 802 (Appendix B item 148).

**Every leaving time follows one rule.** A leaving time is the time she is due at the next stop, minus the drive, minus five minutes, rounded down to the nearest five minutes. Mallory starts at Westview Kindergarten at 8:30am, ten minutes from home, so she leaves at 8:15am. Alexis's orchestra starts at 7:15am, twelve minutes away, so she leaves at 6:55am. A leg never leaves a stop before that stop is due, because a child at a pickup is not ready earlier, so a leg from a pickup leaves at the later of the two times, as when she leaves Westview Kindergarten at 2:30pm for Cedar Grove Elementary. The line then shows the arrival at the next stop honestly, even when the five minutes do not fit.

## What stays in place

Every screen in MVP behaves the same way as other screens of its kind, so a parent learns once where things are and what moves when she scrolls. There are eight kinds, and the spec sets out the rule for each one (spec §2, "Layout and scrolling").

| Kind | Screens | What stays in place | What scrolls |
| ----- | ----- | ----- | ----- |
| Today | Every Today board | The header and Now, with the capture bar and tab bar at the foot | The canvas sheet, which rises over the header and Now ("Now stays in place") |
| Tab list | Game plan, Team and Kids | The title bar, with the tab's actions and the monogram, and the tab bar. On the game plan, also the week strip under the title bar and the capture bar above the tab bar | The large title and everything beneath it |
| Page | A person page, a child page, a school card, an article and a group's members | The title bar, with Back and the page's actions, and the tab bar | The large title and everything beneath it |
| Conversation | The Coach tab, a chat, a group's page and the capture conversation in onboarding (0a) | The title bar, and the capture bar or message field at the foot, or in the capture conversation the buttons its step needs | The messages or posts |
| Composer | New message, a post, a request draft, Add someone and New group | The title bar with Back and the heading, and Send or the screen's button at the foot | The fields and the message |
| Onboarding and setup | 0w to 0j, except the capture conversation | Back at the top, and the main button and skip link at the foot | The content |
| Sheet | Every sheet | The grabber, Close and the heading, and the button at the foot | Only the Leave sheet, which is tall |
| Still | The splash, the thinking screens, getting ready and notifications | Everything | Nothing |

**The title bar works like Apple Music's.** On a tab list or a page, the controls at the top, such as the monogram, Back and New message on Team, stay where they are however far she scrolls. The large title, such as "Team", sits beneath them and scrolls with the page. As it passes under the bar it fades out, and the same words fade in, smaller, at the center of the bar. Scrolling back reverses it. Tapping the small title, or the tab she is already on, takes her back to the top. On the game plan, the week strip holds under the title bar and marks the day she is reading, and the review card and the day headings scroll with the page.

**The keyboard behaves as it does on an iPhone.** It rises over the tab bar, and whatever sits at the foot of the screen, such as the capture bar, a message field, Send or Continue, rises with it. The field she is typing in always stays in view. In a conversation she drags the messages down to lower the keyboard, and elsewhere she taps outside the field. In a form, Return moves to the next field, and in a message it starts a new line.

**Chats and composers hide the tab bar** while they are open, as Messages does, because the keyboard owns the foot of those screens. Back returns her to the tab.

**A sheet never opens another sheet.** When something in a sheet leads somewhere else, such as Ask Min-jung opening a draft, the sheet closes first. The Leave sheet's time picker opens in place under its station for the same reason.

**At tablet and desktop widths** the sidebar takes the tab bar's place, and everything else above holds inside the content column.

## Type

Nine type styles cover everything on the demo screens except the screen headers. Fewer styles keep each screen quiet and make it obvious which line matters most. The engineer takes the values from the design library, and the table records what each style is for and its name in the library.

| Style | Library name | Use | Set in |
| ----- | ----- | ----- | ----- |
| Display | display | The one number that matters now, such as the time of the next departure | Fraunces 44, semibold |
| Title | title | The dateline, and section names on Today, such as "Later today" and "For tomorrow" | Inter 20, extra bold |
| Subtitle | subtitle | Headings inside a page or a card, such as "Hours" on a school card and "Every week" on a child page, the title on the pass, such as "Pick Mallory up at Westview Kindergarten", and the evening reminders heading, such as "Reminders for tomorrow morning" | Inter 17, semibold |
| Voice | voice, voice-strong | The coach's lines in onboarding, and article titles at semibold | Inter 17, regular, for the coach's lines, and Fraunces 17, semibold, for article titles |
| Body large | body-large | The coach's lines on the Today coach card, checklist items under Now and in the evening reminders, and the rows in Later today and For tomorrow | Inter 17, regular |
| Body | body | Everything else, including the coach's messages in the Coach tab conversation | Inter 15, regular |
| Body strong | body-strong | Buttons, links, names in rows, such as a person on Team, field labels, the route and field values on the pass, and checklist headings, such as "Mallory" | Inter 15, bold |
| Meta | meta | Times, sources, counts and small labels | Inter 13, medium, in a muted ink |
| Label | meta-strong | Labels the coach owns: the coach card's label, such as "MVP Coach · for tomorrow", the read-back strip's label on the game plan, and the day labels on the review card | JetBrains Mono 13, extra bold |

There are no uppercase labels, no letter-spaced eyebrows and no bold words inside paragraphs. Times in a list line up in a column and are set in Meta. Large titles on tabs and pages and the onboarding and setup headlines stay in the display serif, outside the nine styles, as do the wordmark and the headlines on article pages. Chips use the Meta size in a heavier Inter weight, so they do not count as a tenth style.

The coach is set in Inter everywhere, from the first screen of onboarding: Voice in onboarding, Body large on the Today coach card and Body in the Coach tab conversation. Fraunces sets titles and headlines only, such as the large titles on tabs and pages, the onboarding and setup headlines, article titles and headlines, and the time of the next departure. It never sets a paragraph or any other running text, so the coach and the body of every screen read as one sans-serif interface. It will also carry marketing and presentations later. JetBrains Mono appears only in the Label style, on the labels the coach owns. The coach is marked by its dot, its tint and, on the review card, an amber outline around each day, and by nothing else.

## Color

The design library and src/tokens.css hold every value. These are the ones the demo screens lean on most, as Greg set them on October 17 and 18, 2026, and no color in the product is pure white or pure black. Today is the one screen drawn on canvas, for its sheet. Every other screen, including the Coach tab, the game plan, Team, Kids, the pages opened inside them, sheets and onboarding, sits on card, and a part of one of those screens that has no fill of its own, such as a field or a row of choices, takes control so it stands clear of the card behind it.

| Color | Value | What it is for |
| ----- | ----- | ----- |
| Canvas | #F0ECE5 | The canvas sheet on Today, which carries the coach card, Later today and MVP Editorial |
| Card | #F9F7F3 | Paper: the header and Now on Today, the background of every other screen, every card, and each day inside the review card |
| Control | #FFFEFC | The lightest surface, behind a control drawn on paper, such as a leaving time on the Leave sheet, and the fill of any part of a card screen that has no fill of its own |
| Cerulean | #007198 | Anything she taps, links and the active tab |
| Cerulean, pressed | #004F6B | A cerulean control while it is pressed |
| Cerulean tint | #E1EEFC | The light fill that goes with cerulean |
| Children's indigo | #22549A on #DDE5ED | Name chips and the checklist headings that name a child |
| Brand star, saffron | #E8A33C | The steam stars on the splash and on Ruth's web page, and nothing else. Amber belongs to the coach, so the brand's one signature motion takes saffron (issue O29). |

# 3. Charlotte and Edward

## The household

| Person | Age | Relationship |
| ----- | ----- | ----- |
| Charlotte | 48 | Charlotte uses MVP. She is home full time and handles the shopping, school, doctors and planning, and every message about the girls arrives on her phone. |
| Edward | 50 | Edward works full time on a hybrid schedule. He commutes 100 miles to the office on Tuesday and Wednesday and works from home the rest of the week. |
| Alexis | 10 | Alexis is in fourth grade at Cedar Grove Elementary. She plays violin in the school orchestra and takes private lessons, dances on Wednesday and sees a therapist once a week. |
| Mallory | 6 | Mallory is in kindergarten at Westview Kindergarten. She takes ballet on Thursday and has reading tutoring on Friday. |

The family lives on Linden Avenue. There is no nanny and no paid help.

## Her circle and her people

The second-to-last column is the line shown under each person's name on the Team tab. The last column is the number MVP holds for them, which every number takes from the 555-01 range reserved for fiction.

| Person | Group | Relationship, for the team | Has MVP | On screen | Number |
| ----- | ----- | ----- | ----- | ----- | ----- |
| Edward | Circle | Her husband | Yes | Your husband | Mobile 707-555-0101 |
| Claire | Circle | Charlotte's sister, who lives an hour away. Too far for pickups, and they talk most days. | Yes | Your sister | Mobile 707-555-0102 |
| Dr. Lena Ortiz | Circle | The girls' pediatrician at Northside Pediatrics | No | Pediatrician, Northside Pediatrics | Northside Pediatrics 707-555-0160 |
| Karen Moss | Circle | Alexis's therapist at Brightwater Family Therapy for the past year, with sessions on Monday at 3:30pm | No | Alexis's therapist, Brightwater Family Therapy | Brightwater Family Therapy 707-555-0170 |
| Ms. Reyes | Circle | Mallory's reading tutor, with sessions on Friday at 3:00pm in the library at Westview Kindergarten | No | Mallory's reading tutor | Mobile 707-555-0103 |
| Ruth Delgado | Circle | Charlotte's next-door neighbor, who has watched the girls before. Charlotte adds Ruth in C-11, the week after the demo week, so Ruth appears on no demo-week screen. | No | Next door, can stay with the girls | Mobile 707-555-0111 |
| Min-jung Park | People | A Cedar Grove Elementary parent. Her daughter Sophie is in Alexis's class and her daughter Hana is in Mallory's class at Westview Kindergarten. The Parks drive the Monday carpool and live two streets from Linden Avenue. | Yes | Sophie and Hana's mom · Monday carpool | Mobile 707-555-0104 |
| Jenna Okafor | People | A Cedar Grove Elementary parent. Her daughter Ada is in Alexis's class, and the Okafors drive the Wednesday carpool. | Yes | Ada's mom · Wednesday carpool | Mobile 707-555-0105 |
| Tom Alvarez | People | A Cedar Grove Elementary parent in the Cedar Grove parents group | Yes | Cedar Grove Elementary parent | Mobile 707-555-0106 |
| Grace Liu | People | A Cedar Grove Elementary parent in the Cedar Grove parents group | Yes | Cedar Grove Elementary parent | Mobile 707-555-0107 |
| Dev Raman | People | A Cedar Grove Elementary parent in the Cedar Grove parents group | Yes | Cedar Grove Elementary parent | Mobile 707-555-0108 |
| Nina Brooks | People | A Cedar Grove Elementary parent in the Cedar Grove parents group | Yes | Cedar Grove Elementary parent | Mobile 707-555-0109 |
| Rafael Costa | People | A Cedar Grove Elementary parent in the Cedar Grove parents group | Yes | Cedar Grove Elementary parent | Mobile 707-555-0110 |

Charlotte has one group, **Cedar Grove parents**, which she created on Thursday of her first week. It has eight members: Charlotte, Min-jung, Jenna, Tom, Grace, Dev, Nina and Rafael. The fourth-grade parents' WhatsApp group is separate and stays in WhatsApp. She forwards messages from it into MVP when she wants the coach to see them.

At the start of the demo week Charlotte has no chats. Her first, with Edward and Claire, starts in C-05c.

## Where Charlotte starts

Charlotte started using MVP the week before the demo week, on Monday, Oct. 5, and C-00 shows how. Her first capture was a photo of Westview Kindergarten's rotation calendar, taken before she had an account. She named both girls during onboarding, and that night she checked both schools and their start times on the setup screen, where the coach had filled them in from the calendar photo and her Google Calendar. During her first week she gave the coach the girls' weekly schedules, Westview Kindergarten's end time, the carpool and the rest of the people above. She also photographed Westview Kindergarten's family contact list, which now sits on the Westview Kindergarten school card, and on the Wednesday of that week she forwarded the Cedar Grove Elementary newsletter that had come the Sunday before she started, which led her to set her email to forward the newsletter to MVP automatically. By the demo week she shares messages from WhatsApp using the share menu rather than pasting them.

## What makes her week hard

The girls go to two schools with different hours, which means two drop-offs and two pickups on most days. On Tuesday and Thursday mornings Alexis has orchestra at 7:15am, so Charlotte drives Alexis at 6:55am and comes back for Mallory at 8:15am. On Tuesdays Edward has already left for the office, so Mallory rides along on the first trip as well. The carpool only runs on Monday, Wednesday and Friday for the same reason. In the afternoon Mallory finishes at 2:30pm and Alexis at 2:45pm, twelve minutes apart, and between them the girls have five activities after school. Every school email, text and message from the parents' group lands on Charlotte's phone.

## What the schools send

These are the invented versions of the handouts and emails the two schools send home. Their structure follows real school material, but every name, address and number is invented. Phone numbers use the 555-01 range, which is reserved for fiction.

**Westview Kindergarten rotation calendar.** A one-page calendar for October, headed "Westview Kindergarten" with "October 2026" beneath it, with each school day marked by a letter from A to F, starting with A on Thursday, Oct. 1. The key at the bottom reads: A, library, return books. B, motor skills. C, science. D, motor skills. E, art and music. F, science and motor skills. It also lists back-to-school night, a field trip to Fir Hollow Farm and the fall harvest fair, and someone has gone over several days with a yellow highlighter.

| Day of C-00's week | Westview Kindergarten letter | What it means for Mallory |
| ----- | ----- | ----- |
| Monday, Oct. 5 | C | Science |
| Tuesday, Oct. 6 | D | Motor skills, so sneakers |
| Wednesday, Oct. 7 | E | Art and music |
| Thursday, Oct. 8 | F | Science and motor skills, so sneakers |
| Friday, Oct. 9 | A | Library, so the library book goes back |

| Day of the demo week | Westview Kindergarten letter | What it means for Mallory |
| ----- | ----- | ----- |
| Monday, Oct. 12 | B | Motor skills, so sneakers |
| Tuesday, Oct. 13 | C | Science |
| Wednesday, Oct. 14 | D | Motor skills, so sneakers |
| Thursday, Oct. 15 | E | Art and music |
| Friday, Oct. 16 | F | Science and motor skills, so sneakers |

**Westview Kindergarten family contact list.** A single printed page headed "Who to contact". General questions go to the front office at 707-555-0140. Absences, late arrivals and early pickup go to office@westviewk.org and to the classroom teacher, Ms. Hollis in Room 3. Changes to who picks a child up go through the family portal, and the office releases children only to people on the pickup list. Questions about learning support go to Dana Lee, and questions for the school counselor go to Priya Nair.

**Cedar Grove Elementary weekly newsletter.** Sent every Sunday afternoon to all Cedar Grove Elementary families and forwarded automatically to Charlotte's MVP address. The demo week's edition has a list of helpful links, followed by upcoming dates: an early dismissal at 1:30pm on Thursday for conferences, with no after-school care; conferences on Thursday afternoon and Friday; a free dress day on Friday for all grades; and a fifth-grade field trip to Point Reyes on Wednesday.

## The Kids tab

These are Charlotte's child pages and school cards as they stand at 6:00am on the Monday of the demo week. The text in each table appears on screen as written.

**Kids, as shown: Alexis**

| Section | Content |
| ----- | ----- |
| Header | Alexis · 10 · Fourth grade |
| School | Cedar Grove Elementary · Ms. Carter's class |
| Every week | Orchestra, Cedar Grove Elementary, Tuesdays and Thursdays 7:15am · Violin, Lakeside Strings Music School, Mondays 4:00pm · Dance, Studio Ten Dance, Wednesdays 3:45pm · Therapy, Brightwater Family Therapy, Mondays 3:30pm |
| Going with, by day | Library book, Mondays · Violin and orchestra folder, Tuesdays and Thursdays · Dance bag, Wednesdays |

**Kids, as shown: Mallory**

| Section | Content |
| ----- | ----- |
| Header | Mallory · 6 · Kindergarten |
| School | Westview Kindergarten · Ms. Hollis, Room 3 |
| Every week | Ballet, Studio Ten Dance, Thursdays 4:15pm, with the calendar mark · Reading tutoring with Ms. Reyes, Westview Kindergarten library, Fridays 3:00pm |
| Going with, by day | Sneakers on B, D and F days · Library book on A days · Ballet bag, Thursdays |

**Kids, as shown: the Westview Kindergarten card**

| Section | Content |
| ----- | ----- |
| Hours | 8:30am to 2:30pm · Pickup at the front entrance |
| Contacts | General questions: front office, 707-555-0140 · Absences, late arrivals and early pickup: office@westviewk.org and Ms. Hollis · Changes to who picks up: through the family portal · Learning support: Dana Lee · Counselor: Priya Nair |
| Rules | Children are released only to people on the pickup list · A, library · B and D, motor skills · C, science · E, art and music · F, science and motor skills |
| Calendar | Picture day, this Friday · Harvest fair, next Friday, Oct. 23, 3:00pm to 5:00pm · Fir Hollow Farm field trip, Thursday, Oct. 29 |
| Rotation | This week: Monday B · Tuesday C · Wednesday D · Thursday E · Friday F |
| Documents | Rotation calendar, photo, last week · Family contact list, photo, last week |

**Kids, as shown: the Cedar Grove Elementary card**

| Section | Content |
| ----- | ----- |
| Hours | 8:00am to 2:45pm · Pickup at the Oak Street gate · Early dismissal this Thursday at 1:30pm, Updated |
| Contacts | General questions: front office, 707-555-0120 · Absences: attendance@cedargrovees.org and the classroom teacher |
| Rules | Orchestra meets at 7:15am on Tuesdays and Thursdays · Free dress days are announced in the newsletter |
| Calendar | Conferences, this Thursday afternoon and this Friday · Free dress day, this Friday |
| Rotation | None |
| Documents | Weekly newsletter, yesterday · Weekly newsletters from earlier weeks |

**Kids, as shown: Add a school**

*Add a school, at the foot of the Kids tab, opens a page for a parent who would rather type a school in than capture one. Charlotte has both schools already, so the demo shows the page empty.*

> Back · Add a school
>
> School name
>
> Who goes here
> [Alexis] [Mallory]
>
> You can add hours, contacts and rules later, or send the MVP Coach a handout and it fills them in.
>
> [Add school]

*Add school stays inactive until she names the school and chooses a child. In the prototype it is staged and adds nothing.*

**Kids, as shown: Add to this card**

*Add to this card on the Westview Kindergarten card opens a sheet of actions addressed to that school. The Cedar Grove Elementary card's sheet reads the same with its own name.*

> Add to the Westview Kindergarten card
>
> Send the MVP Coach a handout, an email or a few words, and it goes on the Westview Kindergarten card.
>
> [Take a photo] [Attach a file] [Talk or type]

*Each action closes the sheet and goes straight to its kind of capture. No moment captures anything for a card from here, so in the prototype each one closes the sheet and changes nothing.*

## The Team tab

These are Charlotte's Team screens. Rows for adults lead with the person's outlined initial, following "How people are shown".

**Team, as shown: Monday, Oct. 12, 6:00am, before C-01**

| Part | Content |
| ----- | ----- |
| Header | Team · [New message] |
| Chats | No chats yet. Start one with anyone in your circle who's on MVP. |
| Groups | Cedar Grove parents · 8 members · You created this group last week. |
| Team | Edward · Your husband · On MVP · [Circle]<br>Claire · Your sister · On MVP · [Circle]<br>Dr. Lena Ortiz · Pediatrician, Northside Pediatrics · [Circle]<br>Karen Moss · Alexis's therapist, Brightwater Family Therapy · [Circle]<br>Ms. Reyes · Mallory's reading tutor · [Circle]<br>Min-jung Park · Sophie and Hana's mom · Monday carpool · On MVP<br>Jenna Okafor · Ada's mom · Wednesday carpool · On MVP<br>Tom Alvarez · Cedar Grove Elementary parent · On MVP<br>Grace Liu · Cedar Grove Elementary parent · On MVP<br>Dev Raman · Cedar Grove Elementary parent · On MVP<br>Nina Brooks · Cedar Grove Elementary parent · On MVP<br>Rafael Costa · Cedar Grove Elementary parent · On MVP |
| Below the lists | [Add someone] [New group] |

**Team, as shown: Wednesday, Oct. 14, 5:00pm, after C-06c**

Claire's reply has arrived and Charlotte has not opened it, so the Team tab carries a dot.

| Part | Content |
| ----- | ----- |
| Chats | Claire · Claire: Yes, see you at 6:30. I'll bring dessert. · 4:58pm · 1 new<br>Edward and Claire · You: Sunday night it is. · Yesterday |
| Groups | Cedar Grove parents · 8 members · Min-jung Park: Sophie sees Dana Whitfield there and really likes her. · Yesterday |
| Team | As on Monday |

A row's latest message is cut to one line. Chats and groups are ordered by their latest message, newest first. The Team list keeps the people in her circle first, each tagged Circle, and everyone else follows untagged. The tag is a small outlined label after the row's line, in Meta, and it reads Circle with the accessible label "In your circle".

**Team, as shown: Edward's page, on Wednesday after C-06**

| Part | Content |
| ----- | ----- |
| Header | Back · Edward |
| Line | Your husband · On MVP |
| Actions | [Message] [Call] |
| Contact | Mobile · 707-555-0101 |
| This week | Thu · [Alexis] Pick up at Cedar Grove Elementary, early dismissal, 1:30pm · thumbs up<br>Thu · [Mallory] Pick up at Westview Kindergarten, 2:30pm · thumbs down<br>Sat · Library run, 10:00am · thumbs up |
| Chats | Edward and Claire |

**Team, as shown: Claire's page, on Wednesday after C-06c**

| Part | Content |
| ----- | ----- |
| Header | Back · Claire |
| Line | Your sister · On MVP |
| Actions | [Message] [Call] |
| Contact | Mobile · 707-555-0102 |
| This week | Nothing in this week's plan with Claire. |
| Chats | Claire · Edward and Claire |

Dinner with Claire does not appear on Claire's page, because Claire is named as a guest and is neither its owner nor asked about it.

**Team, as shown: Dr. Ortiz's page, on Wednesday after C-06b**

| Part | Content |
| ----- | ----- |
| Header | Back · Dr. Lena Ortiz |
| Line | Pediatrician, Northside Pediatrics · Not on MVP |
| Actions | [Call] |
| Contact | Northside Pediatrics · 707-555-0160 |
| This week | Fri · [Mallory] Checkup, Northside Pediatrics, 3:30pm, with the calendar mark |

A person who doesn't have MVP sees nothing in MVP, so the page has no line about what they see. The checkup is listed because the coach links it to Northside Pediatrics, which is Dr. Ortiz's practice.

**Team, as shown: Min-jung's page, on Wednesday after C-06**

| Part | Content |
| ----- | ----- |
| Header | Back · Min-jung Park |
| Line | Sophie and Hana's mom · Monday carpool · On MVP |
| Actions | [Call] |
| Contact | Mobile · 707-555-0104 |
| This week | Mon · [Alexis] Carpool to Cedar Grove Elementary, 7:40am<br>Thu · [Mallory] Pick up at Westview Kindergarten, 2:30pm · thumbs up |
| Groups | Cedar Grove parents |

People without the Circle tag have no Message button, because messaging one of them directly is not part of this version.

"This week" on a person page is laid out as lanes, like Later today on Today: the day in the time column, abbreviated to three letters, then the chip, the item, and the answer icon on the right. The person's initial is left off the icon, because the page already belongs to that person.

The other person pages follow the same pattern, and each is written out below as it stands on Wednesday after C-06c, because the demo reaches Team at 5:00pm that day.

**Team, as shown: Karen Moss's page, on Wednesday**

| Part | Content |
| ----- | ----- |
| Header | Back · Karen Moss |
| Line | Alexis's therapist, Brightwater Family Therapy · Not on MVP |
| Actions | [Call] |
| Contact | Brightwater Family Therapy · 707-555-0170 |
| This week | Mon · [Alexis] Therapy, Brightwater Family Therapy, 3:30pm, with the calendar mark |

The therapy is listed because the coach links it to Brightwater Family Therapy, which is Karen's practice, as it links the checkup to Dr. Ortiz.

**Team, as shown: Ms. Reyes's page, on Wednesday after C-06b**

| Part | Content |
| ----- | ----- |
| Header | Back · Ms. Reyes |
| Line | Mallory's reading tutor · Not on MVP |
| Actions | [Call] [Text] |
| Contact | Mobile · 707-555-0103 |
| This week | Fri · [Mallory] Tutoring with Ms. Reyes, Westview Kindergarten library, 3:00pm · thumbs up |

The page records the request even after the item leaves the plan. Between 1:20pm and 3:10pm on Wednesday the icon is an hourglass.

**Team, as shown: Jenna Okafor's page, on Wednesday**

| Part | Content |
| ----- | ----- |
| Header | Back · Jenna Okafor |
| Line | Ada's mom · Wednesday carpool · On MVP |
| Actions | [Call] |
| Contact | Mobile · 707-555-0105 |
| This week | Nothing in this week's plan with Jenna. |
| Groups | Cedar Grove parents |

Wednesday's carpool left Jenna when she said she couldn't drive, and Charlotte took it in C-03, so nothing this week involves Jenna.

**Team, as shown: Tom Alvarez's page**

| Part | Content |
| ----- | ----- |
| Header | Back · Tom Alvarez |
| Line | Cedar Grove Elementary parent · On MVP |
| Actions | [Call] |
| Contact | Mobile · 707-555-0106 |
| This week | Nothing in this week's plan with Tom. |
| Groups | Cedar Grove parents |

Grace Liu, Dev Raman, Nina Brooks and Rafael Costa have the same page with their own names and numbers: Grace 707-555-0107, Dev 707-555-0108, Nina 707-555-0109 and Rafael 707-555-0110.

**Team, as shown: Message on Edward's page**

*Charlotte has no chat with Edward alone, so Message opens the composer with Circle chosen and only Edward ticked, as Message on Claire's page does in C-06c. No moment sends anything from it.*

> Back · New message
>
> **Circle** | People
>
> To: Edward
>
> Write a message
>
> [Send]

**Team, as shown: Add someone and New group, opened on Wednesday**

*From the Wednesday Team tab, Add someone and New group open empty. They use the words in "Taught when useful", with nothing filled in. Add stays inactive until she gives a name, a mobile number and a group, and Create group stays inactive until she names the group and ticks someone. No moment completes either on Wednesday.*

> Back · Add someone
>
> Name
>
> Mobile number
>
> Relationship
> Shown under their name on your Team.
>
> [Circle] [People]
>
> [Add]

> Back · New group
>
> Group name
>
> Add from your people
> [ ] Min-jung Park · [ ] Jenna Okafor · [ ] Tom Alvarez · [ ] Grace Liu · [ ] Dev Raman · [ ] Nina Brooks · [ ] Rafael Costa
>
> Everyone in a group needs MVP to see its posts.
>
> [Create group]

**Team, as shown: Cedar Grove parents, on Tuesday at 5:00pm**

| Part | Content |
| ----- | ----- |
| Header | Back · Cedar Grove parents |
| Line | 8 members · See members |
| Action | [New post] |
| Posts | The post and replies from C-05, as shown there |
| At the end of the list | You created this group last week. |
| Note above the reply field | Only the people in this group see this. The MVP Coach doesn't read it. |

"See members" lists You and the seven other members, each with their line, and "On MVP" is left off because every member has it. Before C-05 the group page shows only "You created this group last week." beneath New post.

**Team, as shown: the composer for the circle**

| Part | Content |
| ----- | ----- |
| Header | Back · New message |
| Audience | **Circle** \| People |
| To | Everyone on MVP<br>Edward · Your husband<br>Claire · Your sister |
| Not selectable | Dr. Lena Ortiz · Not on MVP<br>Karen Moss · Not on MVP<br>Ms. Reyes · Not on MVP |
| Line under the list | People who aren't on MVP can't be in a chat. Call or text them from their page. |
| Message field | Write a message |
| Button | Send |

Choosing "Everyone on MVP" ticks Edward and Claire. In Charlotte's household that is the same as choosing both by hand, because only two people in her circle have MVP.

**Team, as shown: the composer for her people**

| Part | Content |
| ----- | ----- |
| Header | Back · New message |
| Audience | Circle \| **People** |
| To | Cedar Grove parents · 8 members |
| Message field | Write a message |
| Button | Post |

## Settings

Settings is a page. It opens from the monogram at the top right of every tab, shows Back at the top left, and holds a card for each thing she might come to change, each with a heading, a line saying what the card holds, and its rows. The layout follows Greg's Settings design from the earlier build, and the content follows Charlotte's facts. The card for the coach's voice and personality in that design is a new feature, parked as spec F33, and is not drawn.

**Settings, as shown: Charlotte's, during the demo week**

| Card | Line under the heading | Rows |
| ----- | ----- | ----- |
| Your account | You sign in and pay for MVP with this account. | Name · Charlotte<br>Email · charlotte@mail.example<br>Your age range · Add your age range<br>Plan · Family<br>Billing · Manage billing |
| Your calendar and forwarding address | These are how things reach the MVP Coach without you opening MVP. | Calendar · Google Calendar, connected<br>Disconnect Google Calendar<br>Forwarding address · charlotte-k7m@forward.mvp.example<br>Copy the address<br>Forwarded automatically · The Cedar Grove Elementary newsletter |
| What the coach adds for you | The coach adds these to your plan, and you can take anything out. | Events from your Google Calendar · On<br>School-day changes for Alexis and Mallory · On<br>Trips you can take yourself · On |
| Notifications | MVP can tell you these things on your phone. | Notifications · On<br>Reminder the night before a library day · On |
| Language at home | The MVP Coach writes to you in this language. | Language · English |
| Privacy | Here is who sees what you put in MVP. | Nobody sees your plan, your calendar or your MVP Coach conversations. People see only what you send them.<br>The MVP Coach doesn't read your chats or groups. |

The two switches under Notifications read On because she allowed notifications on 0j and left the library reminder ticked. The three switches under What the coach adds for you read On because she left the calendar line ticked on 0j. Charlotte has not given her age range, which is optional and asked nowhere else, so the row offers the link. In the prototype, Manage billing, Add your age range, Disconnect Google Calendar, Copy the address and every switch are staged and change nothing, because none of them is part of a moment.

## The week in the game plan

Each item shows the time the thing itself starts, such as ballet at 4:15pm, and the departure on Today shows when to leave, such as 3:55pm. This table is every item in the game plan for the demo week, as it stands at 6:00am on Monday before C-01. Routine items repeat every week, and the others happen this week only. The last column records how each item changes during the demo. A school run shows the time school starts, such as 8:30am at Westview Kindergarten, and on screen it carries the day's letter, as section 4 says, although this table leaves the letter out. The seed holds the run with its stops, due times and leaving times, which Today uses.

| Day | Time | On screen | Owner | Kind | Status or mark at start | Changes during the demo |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| Monday | 7:40am | Alexis · Carpool to Cedar Grove Elementary | Min-jung Park | Routine | | |
| Monday | 8:30am | Mallory · To Westview Kindergarten | You | Routine | | In C-03a it reads "Mallory · To Westview Kindergarten with Hana", because Charlotte tells the coach she is taking Hana, and Mallory's list gains two cans for the food drive when she adds them from the coach card. |
| Monday | 2:30pm | Mallory · Pick up at Westview Kindergarten | You | Routine | | |
| Monday | 2:45pm | Alexis · Pick up at Cedar Grove Elementary | You | Routine | | |
| Monday | 3:30pm | Alexis · Therapy, Brightwater Family Therapy | You | Routine | | From her Google Calendar. Mallory comes along. |
| Tuesday | 7:15am | Alexis · Orchestra, Cedar Grove Elementary | You | Routine | | Mallory rides along. |
| Tuesday | 8:30am | Mallory · To Westview Kindergarten | You | Routine | | |
| Tuesday | 2:30pm | Mallory · Pick up at Westview Kindergarten | You | Routine | | |
| Tuesday | 2:45pm | Alexis · Pick up at Cedar Grove Elementary | You | Routine | | |
| Tuesday | 3:00pm | Mallory · Second tutoring session, Westview Kindergarten library | Needs an owner | This week | Suggested | Waits on the review card from Sunday evening. In C-04 Charlotte adds it and moves it to the following Tuesday. |
| Tuesday | 4:00pm | Alexis · Violin, Lakeside Strings Music School | You | This week | Updated | Moved from Monday this week only. |
| Wednesday | 7:40am | Alexis · Carpool to Cedar Grove Elementary | Jenna Okafor | Routine | | Needs an owner from when Charlotte shares Jenna's message at 6:16am. Charlotte takes it in C-03, and it shows You with no status. |
| Wednesday | 8:30am | Mallory · To Westview Kindergarten | You | Routine | | |
| Wednesday | 2:30pm | Mallory · Pick up at Westview Kindergarten | You | Routine | | |
| Wednesday | 2:45pm | Alexis · Pick up at Cedar Grove Elementary | You | Routine | | |
| Wednesday | 3:45pm | Alexis · Dance, Studio Ten Dance | You | Routine | | From her Google Calendar. |
| Wednesday | 6:30pm | Family · Dinner with Claire | You | This week | | |
| Thursday | 7:15am | Alexis · Orchestra, Cedar Grove Elementary | You | Routine | | Mallory stays home with Edward. |
| Thursday | 8:30am | Mallory · To Westview Kindergarten | You | Routine | | |
| Thursday | 1:30pm | Alexis · Pick up at Cedar Grove Elementary, early dismissal | Needs an owner | This week | Updated | No conflict, because Charlotte could collect Alexis and still leave for Willow Yoga at 2:00pm. In C-02 Edward is asked, and he says yes at 7:52am. |
| Thursday | 2:15pm | Yoga at Willow Yoga | You | This week | | Added in C-01 as hers, because she said it, with "Conflict: Mallory's pickup" until Charlotte chooses. In C-06 the coach card recommends moving it to 12:15pm, and Charlotte chooses Min-jung instead, so it stays at 2:15pm. |
| Thursday | 2:30pm | Mallory · Pick up at Westview Kindergarten | You | Routine | | After C-01 it conflicts with yoga. Edward is asked in C-02 and says yes, then can't in C-06. Min-jung is asked in C-06 and says yes at 12:30pm. |
| Thursday | 4:15pm | Mallory · Ballet, Studio Ten Dance | You | Routine | | From her Google Calendar. Charlotte and Mallory leave home at 3:55pm. |
| Friday | 7:40am | Carpool to Cedar Grove Elementary, then Westview Kindergarten | You | Routine | | Charlotte drives Alexis, Ada and Sophie, with Mallory along to Westview Kindergarten. |
| Friday | All day | Mallory · Picture day, Westview Kindergarten | You | This week | | Charlotte adds a note in C-04. |
| Friday | All day | Alexis · Free dress day, Cedar Grove Elementary | You | This week | | Added by the coach from the Cedar Grove Elementary newsletter on Sunday, because it changes Alexis's school day. The read-back that opens C-01 says so. |
| Friday | 9:20am | Your conference, Cedar Grove Elementary | You | This week | | |
| Friday | 2:45pm | Alexis · Pick up at Cedar Grove Elementary | You | Routine | | |
| Friday | 2:30pm | Mallory · Pick up at Westview Kindergarten | You | This week | | Added in C-06b, when tutoring is skipped this week. |
| Friday | 3:00pm | Mallory · Tutoring with Ms. Reyes, Westview Kindergarten library | You | Routine | | Charlotte adds a note in C-04. In C-06b it conflicts with the checkup, Charlotte asks Ms. Reyes to skip this week, and it leaves the plan when Ms. Reyes answers. |
| Friday | 3:30pm | Mallory · Checkup, Northside Pediatrics | You | This week | | Added from her Google Calendar in C-06b, because she booked it herself, with "Conflict: tutoring". In C-08b Charlotte adds the note "Ask Dr. Ortiz about Mallory's cough". |
| Friday | 3:45pm | Mallory · Pick up at Westview Kindergarten | You | Routine | | Leaves the plan in C-06b, with tutoring. |
| Saturday | 10:00am | Library run | Needs an owner | This week | | In C-04 Charlotte asks Edward to take it from its page, and it shows Asked Edward. In C-04b Edward answers "Yes, I can" with a note, and it shows "Edward: yes", the note and the Updated mark until she opens it. |

Two tasks are added to the game plan during the demo, each owned by Charlotte with no status: "Call Brightwater Family Therapy to ask for Dana Whitfield" on Wednesday, added in C-05, with "Brightwater Family Therapy · 707-555-0170" beneath it and a Call button, and "Send Westview Kindergarten the pickup note" on Wednesday, added in C-06, with "pickups@westviewk.org" beneath it and a Send from Mail button that reopens the note. On Wednesday's Today, both appear on the checklist under "Before you leave home".

## Item pages in the demo

Tapping any row in the game plan opens its page ("The game plan holds the week"). These are the pages the demo reaches, as they stand at each moment. A page lists its parts in the order of section 4's Item page row, and leaves out any part that has nothing in it. Where a person has answered, the page shows their outlined initial and icon with the words beside it, because a page has room for them. Every other row's page follows the same pattern from the week table, with "From you" as the source of a routine item she set up herself.

**Game plan, as shown: the second tutoring session's page, from the review card in C-04**

> Back
>
> [Mallory] Second tutoring session, Westview Kindergarten library
> Tomorrow · 3:00pm · Westview Kindergarten library
> Suggested
> [Add to the game plan] No thanks
>
> Owner
> Needs an owner
>
> From Ms. Reyes · text, yesterday
>
> Move to another date or time

*Once she adds it, the page shows "You · Ask for help" under Owner and "Add a note" under Note, and the Suggested line goes. She taps Move to another date or time, and a picker opens in place with the days of this week and next and a time. She chooses the following Tuesday at 3:00pm and taps Save. The page then reads "Next Tuesday, Oct. 20 · 3:00pm · Westview Kindergarten library", and the session sits under Next week. If she had tapped No thanks on the review card instead, the card would go, because nothing else was waiting, and the session would not be offered again.*

**Game plan, as shown: violin's page, in C-04**

> Back
>
> [Alexis] Violin, Lakeside Strings Music School
> Tomorrow · 4:00pm · Lakeside Strings Music School
> Updated
>
> Owner
> You · Ask for help
>
> Note
> Add a note
>
> From Lakeside Strings Music School · text, yesterday
>
> Move to another date or time

*Opening the page clears the Updated mark, so violin's row has no mark when she goes Back.*

**Game plan, as shown: Friday's tutoring page, after her note in C-04**

> Back
>
> [Mallory] Tutoring with Ms. Reyes, Westview Kindergarten library
> This Friday · 3:00pm · Westview Kindergarten library
>
> Owner
> You · Ask for help
>
> Note
> Tell Ms. Reyes Tuesdays at 3:00 work from next week.
>
> From you
>
> Move to another date or time

*In C-06b, once the checkup is in the plan, the page gains "Conflict: the checkup" under the time, and "Backup plans" with the same recommendation, Plan B and link as the checkup's page, because both pages describe one conflict. After she sends the text, the page shows Ms. Reyes's initial and an hourglass with "Asked Ms. Reyes" under Owner.*

**Game plan, as shown: picture day's page, after her note in C-04**

> Back
>
> [Mallory] Picture day, Westview Kindergarten
> This Friday · All day · Westview Kindergarten
>
> Owner
> You · Ask for help
>
> Note
> Green dress, hanging in the laundry room.
>
> From Westview Kindergarten · email, last week
>
> Move to another date or time

**Game plan, as shown: the library run's page, in C-04 and C-04b**

> Back
>
> Library run
> This Saturday · 10:00am
>
> Owner
> Needs an owner · Ask for help
>
> Note
> Add a note
>
> From you
>
> Move to another date or time

*Ask for help opens a page of everyone who can receive a request, circle first, and she chooses one and taps Next. The draft then opens, and Back on it returns to the item.*

> Back · Ask for help
>
> Library run · this Saturday, 10:00am
>
> Circle
> Edward · Your husband · On MVP
> Claire · Your sister · On MVP
> Ms. Reyes · Mallory's reading tutor
>
> People
> Min-jung Park · Sophie and Hana's mom · Monday carpool · On MVP
> Jenna Okafor · Ada's mom · Wednesday carpool · On MVP
> Tom Alvarez · Cedar Grove Elementary parent · On MVP
> Grace Liu · Cedar Grove Elementary parent · On MVP
> Dev Raman · Cedar Grove Elementary parent · On MVP
> Nina Brooks · Cedar Grove Elementary parent · On MVP
> Rafael Costa · Cedar Grove Elementary parent · On MVP
>
> [Next]

*Dr. Ortiz and Karen Moss are not listed, because MVP holds only their practices' numbers, and a request needs MVP or a mobile number. Charlotte chooses Edward.*

> To Edward
>
> Can you take both girls to the library this Saturday morning, around 10:00am?
>
> [Send]

*Once she sends it, the page shows Edward's initial and an hourglass with "Asked Edward" under Owner. After Edward answers in C-04b, Owner reads Edward with his initial, a thumbs up and "Edward: yes", his note sits beneath it as "Edward: We'll get lunch after and be home by 1:00pm.", and the page shows the Updated mark until she goes Back.*

**Game plan, as shown: Thursday's pages, in C-06b**

> Back
>
> [Alexis] Pick up at Cedar Grove Elementary, early dismissal
> Tomorrow · 1:30pm · Cedar Grove Elementary
>
> Owner
> Edward · thumbs up · Edward: yes
>
> Note
> Add a note
>
> From the Cedar Grove Elementary newsletter · last Sunday
>
> Move to another date or time

> Back
>
> [Mallory] Pick up at Westview Kindergarten
> Tomorrow · 2:30pm · Westview Kindergarten
>
> Owner
> Min-jung Park · thumbs up · Min-jung: yes
>
> Note
> Add a note
>
> From you
>
> Move to another date or time

> Back
>
> Yoga at Willow Yoga
> Tomorrow · 2:15pm · Willow Yoga
>
> Owner
> You · Ask for help
>
> Note
> Add a note
>
> From you · voice note, this Monday
>
> Move to another date or time

> Back
>
> [Mallory] Ballet, Studio Ten Dance
> Tomorrow · 4:15pm · Studio Ten Dance
>
> Owner
> You · Ask for help
>
> Note
> Add a note
>
> From your Google Calendar
>
> Change this in Google Calendar.

*Mallory's pickup shows no backups once Min-jung has said yes, because nothing on it needs a way through. Moving either answered pickup keeps the answer until she sends the person the change, as the spec says.*

## Travel times

These are the estimates MVP works out from Charlotte's zip code, 00123, for legs from home, and from the places themselves for legs between them. The seed holds them as fixed values, and each leaving time follows the rule in "Dates, times and places".

| From | To | Minutes |
| ----- | ----- | ----- |
| Home | Cedar Grove Elementary, Oak Street gate | 12 |
| Home | Westview Kindergarten | 10 |
| Westview Kindergarten | Cedar Grove Elementary | 12 |
| Home | Willow Yoga | 10 |
| Home | Studio Ten Dance | 15 |
| Home | Lakeside Strings Music School | 15 |
| Home | Brightwater Family Therapy | 20 |
| Home | Northside Pediatrics | 15 |
| Cedar Grove Elementary, Oak Street gate | Brightwater Family Therapy | 20 |
| Brightwater Family Therapy | Lakeside Strings Music School | 15 |

## Messages that arrive this week

| When | From | What it says | What MVP does with it |
| ----- | ----- | ----- | ----- |
| Sunday, 4:10pm | Cedar Grove Elementary weekly newsletter, forwarded automatically | Thursday is an early dismissal at 1:30pm for conferences, with no after-school care. Conferences run Thursday afternoon and Friday. Friday is a free dress day. The fifth grade goes to Point Reyes on Wednesday. | Marks Thursday's 1:30pm pickup as changed and adds Friday's free dress day to Alexis's plan. It leaves out the fifth-grade trip and the links. Charlotte's conference is already booked for Friday at 9:20am. The read-back opens C-01. |
| Sunday, 6:30pm | Lakeside Strings Music School, text | Alexis's lesson moves to Tuesday at 4:00pm this week only. | Moves violin to Tuesday and marks it as changed. |
| Sunday, 7:15pm | Ms. Reyes, text | "Mallory's doing so well. Could we add a second session each week?" | Puts a second session on Tuesdays at 3:00pm on the review card. Charlotte adds it and moves the start in C-04. |
| Monday, 5:50am, shared by Charlotte from WhatsApp at 6:16am | Parents' WhatsApp group | Jenna Okafor: "Who can do Wednesday morning? I can't this week." | Opens Wednesday's carpool and becomes the coach card in C-03, with Charlotte's reply drafted. |
| Tuesday, 11:50am | Brightwater Family Therapy, voicemail | Karen Moss is leaving the practice in four weeks. Brightwater Family Therapy will assign a new therapist, or the family can request one. | Becomes the coach card in C-05. |
| Tuesday, 3:30pm, forwarded by Charlotte at 3:38pm | Westview Kindergarten, email to families | Starting this week, changes to who picks a child up go to pickups@westviewk.org rather than through the family portal, by 11:00am on the day. | Updates the pickup contact and rule on the Westview Kindergarten card, marks both as changed, and keeps the old version in the card's history. The read-back is C-05b. |
| Wednesday, 9:00am | Northside Pediatrics, portal | Mallory's six-year checkup is due. | Nothing yet. Charlotte books the checkup in the portal at 1:05pm, the portal adds it to her Google Calendar, and MVP finds it there in C-06b and adds it to Friday, where it runs into tutoring. |
| Wednesday, 11:40am | Edward, answering his request in MVP | Edward can't collect Mallory on Thursday, and can still collect Alexis. | Reopens Mallory's pickup in C-06. |

Picture day at Westview Kindergarten on Friday came in an email the week before, so MVP already has it.

## The moments

| ID | When | What happens | What it shows | For the script |
| ----- | ----- | ----- | ----- | ----- |
| C-00 | Monday, Oct. 5, the week before, 8:30pm to 8:41pm | Charlotte names herself and the girls, photographs Westview Kindergarten's rotation calendar, confirms it is Mallory's, hands it to the coach and sees Mallory's plan for the week, then creates her account, connects her Google Calendar, checks the schools and start times the coach found, meets the coach and agrees to its first recommendation on her first board. | Onboarding, from the splash to her first board | Core |
| C-01 | Monday, Oct. 12, 6:15am | Charlotte reads the newsletter read-back, shares Jenna's message from WhatsApp and talks for twenty seconds, and the coach offers three ways Thursday could go. | Capture, a conflict and options | Core |
| C-02 | Monday, Oct. 12, 6:40am | Charlotte asks Edward to take Thursday's pickups, and Edward sees the request in his own MVP. | A request and its status | Core |
| C-03 | Monday, Oct. 12, 7:25am | Charlotte gets both girls out of the house using Today. | The Today board | Core |
| C-03a | Monday, Oct. 12, 7:45am | Min-jung leaves Hana with Charlotte for the run to Westview Kindergarten and hands her a Westview Kindergarten flyer. Charlotte types it into the capture bar on Today and adds a photo of the flyer, and the read-back lands on the coach card. | Capture on Today changing a departure | Core |
| C-03b | Monday, Oct. 12, 2:00pm | Charlotte's reminder goes off, and she collects both girls and takes them to Brightwater Family Therapy, a run that never passes home. | The afternoon as a line, the Leave sheet, and Now stepping from stop to stop | Core |
| C-04 | Monday, Oct. 12, 8:50pm | Charlotte works the game plan without the coach. | The review card, moving an item and asking someone to take one | Optional |
| C-04b | Tuesday, Oct. 13, 7:20am | Edward says yes to the library run and adds a note. | A note on a yes, from the recipient's side | Optional |
| C-05 | Tuesday, Oct. 13, 12:20pm | Alexis's therapist is leaving, and Charlotte asks her group. | Her people | Core |
| C-05b | Tuesday, Oct. 13, 3:40pm | A Westview Kindergarten email changes the pickup rule, and the coach updates the Westview Kindergarten card. | A school card kept current | Optional |
| C-05c | Tuesday, Oct. 13, 8:15pm | Charlotte asks Edward and Claire together how to tell Alexis about her therapist. | A group chat with her circle | Core |
| C-06 | Wednesday, Oct. 14, 11:45am | Edward can't collect Mallory after all, and Charlotte chooses a different option from the one the coach recommends. | A change that reopens the plan | Core |
| C-06b | Wednesday, Oct. 14, 1:15pm | Charlotte books Mallory's checkup outside MVP, it joins her plan through her Google Calendar, and it runs into Friday's tutoring. | Her calendar keeping the plan current, with her asked only for the choice the conflict needs | Core |
| C-06c | Wednesday, Oct. 14, 4:50pm | Charlotte messages Claire about dinner, and Claire's reply arrives as a notification. | A direct message and the unread mark | Optional |
| C-07 | Wednesday, Oct. 14, 9:10pm | The dateline turns to the evening and the board turns to preparation for Thursday. | Tonight | Optional |
| C-08 | Thursday, Oct. 15, 8:40pm | Charlotte asks the coach how to get through picture day morning. | A coach answer with an MVP Editorial article | Core |
| C-08b | Thursday, Oct. 15, 9:05pm | Charlotte asks whether Mallory's cough should keep her home, and the coach names Dr. Ortiz. | The coach naming the right person from her circle | Core |
| C-09 | Sunday, Oct. 18, 7:30pm | The Sunday look-ahead names next week's harvest fair, Charlotte adds it, the coach offers a way through its overlap with Friday's tutoring, and she tells the coach one new thing from the game plan. | The Sunday look-ahead, adding something that was hers to choose, and capture on the game plan | Optional |
| C-10 | Monday, Oct. 19, 8:20pm, the week after | Charlotte forwards her flights to a weekend board offsite, and the coach sees four things that weekend are hers and recommends a playbook for Edward. | The coach recognizing a time away, not a single pickup | Core |
| C-11 | Monday, Oct. 19, 8:22pm | Charlotte chooses Edward from her circle to have the weekend, adding Ruth as she does, builds the weekend playbook with the coach in the game plan, changes the parts that won't work, chooses who Edward can call, gives Ruth Sophie's party, for both girls, because Saturday at 12:30pm is Edward's tee time, ticks the line that sends Edward anything new for those days, and sends it. | The playbook, and where each part of it comes from | Core |
| C-12 | Tuesday, Oct. 20, 6:20am | A notification opens the weekend playbook in Edward's game plan, with Charlotte's request at the top, and he takes the parts suggested for him, with Ruth's part already marked. | The playbook from Edward's side | Core |
| C-13 | Friday, Oct. 23, 2:05pm | Edward's Today runs the afternoon: Alexis's pickup and the harvest fair, where Mallory joins them. | Edward's Today on a playbook day | Core |
| C-15 | Monday, Oct. 26, 6:30am | Charlotte's first morning back opens with one look-back at the weekend. | The weekend summary | Core |

## C-00 · Monday, Oct. 5, 8:30pm · Charlotte's first night

*The girls are in bed and Charlotte has just downloaded MVP. Before any account, MVP asks her first name and who she is planning for, then for one thing from this week. She photographs the Westview Kindergarten rotation calendar on the fridge, confirms it is Mallory's, answers the coach's question, and hands it over, and the coach turns it into a plan for Mallory's week, which she can change, before she has created an account. She then keeps the plan by creating the account at the end of the draft, connects her Google Calendar and checks the schools and start times the coach found, and the coach brings in what is already on her calendar. On Today, the coach makes its first recommendation for tomorrow morning, and she agrees. The times below follow the screens in order and add up to about ten minutes.*

**Onboarding, as shown: the splash · 8:30pm**

> [MVP mark] Most Valuable Parent

**Onboarding, as shown: the welcome · 8:30pm**

> [MVP mark]
>
> Your week has a lot of moving parts, and the MVP Coach helps you keep track of everything.
>
> Just the basics to start us off in the right direction.
>
> Your name: Charlotte
>
> Zip code: 00123
>
> Who are you planning for?
>
> The MVP Coach works out each grade from the birth month. Change any grade that's wrong.
>
> Your kiddo's first name: Alexis
> Birth month and year: October 2016
> Alexis's grade: [Fourth grade ▾]
>
> + Add another child
>
> [Continue]

*The welcome opens with the fields for one child, because Charlotte has typed nothing yet but her name and zip code, and "+ Add another child" sits directly under that child's fields (issue O36). Each child's grade appears under the birth month once she picks it, as a list box with a chevron. Tapping one opens the list over the field below it, as 0w-b shows with Alexis's list open and Fourth grade selected. The full list runs Not in school yet, Pre-K, Kindergarten, then First grade through Twelfth grade, with no College. Charlotte fills in Alexis, then taps "+ Add another child", and Mallory's fields appear under Alexis's, with the link below them (0w-c).*

> Your kiddo's first name: Mallory
> Birth month and year: September 2020
> Mallory's grade: [Kindergarten ▾]
>
> + Add another child

*Continue works once every child has a name and a birth month, and her name and zip code can be left blank, so the screen has no skip link. "Your kiddo's first name" is Heather's wording, which Greg accepted. The helper lines under her name and zip code came off in the wording review of Oct. 27, 2026. Charlotte leaves both grades as they are. With two children the screen is taller than a phone, so it scrolls while Continue stays pinned at the foot.*

**Onboarding, as shown: the capture conversation · 8:31pm**

*From the moment she is asked for one thing until she hands the job to the coach, Charlotte stays on one screen, the capture conversation (0a), which works like the Coach tab: the coach's line at the top, the ways to capture beneath it, and the conversation growing below as she goes (issue O36). Each of the coach's lines in it is labeled "MVP Coach:" and set in Voice. It opens like this.*

> Show me one thing from this week, such as a school handout, an email or a voice note, and I'll turn it into a plan.
>
> [Take a photo] [Attach a file] [Talk or type]
>
> Skip for now

*She taps Take a photo and photographs the calendar, which is headed "Westview Kindergarten", with "October 2026" and "School day begins at 8:30am" beneath it. The photo takes the place of the three buttons as a large preview (0a-b).*

> [the photo, as a large preview]
>
> [Use this photo] [Retake]

*Retake reopens the camera. A file shows its name and kind in the same place, and a voice note shows as its transcript, so neither has a step of its own. She taps Use this photo, the preview moves into the conversation as a thumbnail, her message, and the coach reads it (0a-c).*

> Reading your photo… [the thinking dots]

**Onboarding, as shown: whose calendar it is · 8:32pm**

*The coach says what the photo is and asks whose it is before it reads anything back, so the read-back is about the child she confirms (0a-d, issue O36). Neither child is chosen until she taps one.*

> This is Westview Kindergarten's calendar for October.

> Whose calendar is this?
> [Mallory · K] [Alexis · 4]

*Charlotte taps Mallory · K, and the coach gives its read-back.*

> Westview Kindergarten uses a six-day letter rotation. A days are library, so books go back that day. B and D are motor skills and F is science and motor skills, so those three days need sneakers. C is science and E is art and music. The calendar also lists back-to-school night, the field trip to Fir Hollow Farm and the harvest fair.

*The coach then asks its one question, about the only thing it cannot tell from the page, and Charlotte answers in the capture bar at the foot of the conversation.*

> Several days are highlighted in yellow. Do the highlights mean anything to plan around?

> "No, that's just Mallory with a highlighter."

**Onboarding, as shown: the hand-off · 8:33pm**

> Then the letters are all the rotation needs. I can make a plan for Mallory's week from here, with library and sneaker days on Mallory's checklists and back-to-school night this Thursday. The field trip and the harvest fair are in later weeks, so they stay on the Westview Kindergarten card until then.
>
> [Make Mallory's plan]
>
> Something's not right

*Once the hand-off appears, Make Mallory's plan and "Something's not right" are anchored at the foot of the capture conversation, and the conversation scrolls above them (0a-e). Charlotte taps Make Mallory's plan. "Something's not right" returns her to the input with the read-back still in view, so she can say what to fix and the coach reads it back again.*

**Onboarding, as shown: making the draft · 8:33pm**

> [MVP mark]
>
> Making Mallory's plan…

**Onboarding, as shown: the draft week · 8:33pm**

> Mallory's plan: Oct. 6 to 9

| Shows | Example rows |
| ----- | ----- |
| Each remaining school day as a card, with its date, its letter and what the letter means | Tuesday, Oct. 6 · D · Motor skills |
| A day that carries reminders is a coach suggestion: the card is marked Suggested, lists the reminders and ends with three buttons | Sneakers, then [Keep] [Change] [Skip] |
| A school day with no reminders, shown for reference with no buttons | Wednesday, Oct. 7 · E · Art and music |
| Sneaker days, continued | Thursday, Oct. 8 · F · Science and motor skills, then Sneakers and [Keep] [Change] [Skip] |
| The week's school event, on a card of its own | Thursday, Oct. 8 · Back-to-school night · Suggested · [Keep] [Change] [Skip] |
| Library days | Friday, Oct. 9 · A · Library, then Library book and [Keep] [Change] [Skip] |
| After Keep | The Suggested tag goes, and the buttons give way to "Kept" with a check, in muted ink, and Undo |
| After Change, on a day with reminders | Each reminder gains its remove button, "Add something else for Mallory" appears, and Done closes the card |
| After Skip | The card folds to one line, such as "Thursday, Oct. 8 · Back-to-school night" over "Skipped", with Undo |

> Tell the MVP Coach what's wrong

*Every coach suggestion offers the same three choices, Keep, Change and Skip, so she can accept, adjust or turn down anything the coach proposes (issue O46). On arrival the reminders show without their remove buttons, so the page reads as a plan rather than a form. Change opens whatever that suggestion lets her edit in place. On a day with reminders, each reminder can be removed and one more can be added, and removing one raises the notice Today uses, such as "Library book is off Mallory's list for this Friday." with Undo (0c-d). Back-to-school night has nothing MVP can edit in place, so Change on it opens the capture conversation with that suggestion in view. She doesn't have to answer every card: Continue keeps every card she didn't skip, and a card she left alone enters her plan still marked Suggested, as any suggestion does. "Tell the MVP Coach what's wrong" is for the draft as a whole, such as the wrong child or the wrong calendar. It reopens the capture conversation with the draft still in view, she says what to fix, the coach reads it back, and the corrected draft returns. The coach's opening paragraph came off the draft on November 24, 2026, because the cards say the same thing.*

**Onboarding, as shown: keeping the plan, at the end of the draft**

*Keeping the plan is part of the draft page, under a hairline after the coach link, rather than a prompt over the draft, so Charlotte reads the whole plan before she is asked to keep it (0c-c, issue O36). On arrival the plan fills the screen.*

> Keep Mallory's plan?
>
> Create an account to save this plan and add the rest of your family. Enter the email connected to your school:
>
> Email
> MVP uses it to recognize school emails you forward.
>
> [Continue], disabled until the field holds an email
>
> Not now

*The account takes the address the school writes to, because it has to match how the school reaches her, and that may not be her Apple or Google address. MVP uses it only to recognize the school emails she forwards to her private forwarding address, and it never reads her inbox. There is no Continue with Apple. If she taps Not now, everything she has entered is discarded when she closes the app. Charlotte types her email and taps Continue, and the plan screen follows, then the calendar and the school screen. Her name is already known from the welcome. Back from the plan screen returns to the draft. If she skipped the capture, a prompt opens over the capture conversation headed "Create your account", with the same field and Continue, no line and no Not now, and Back closes it (0c-b).*

**Onboarding, as shown: connect your calendar · 8:35pm**

> Connect your calendar
>
> Connect the calendar you already use, and the MVP Coach brings in what's on it and tells you when something new runs into the plan. MVP reads your calendar and never changes it.
>
> [Google Calendar]
> [Apple Calendar]
> [Outlook]
>
> Not now

*Charlotte taps Google Calendar. The staged permission rises as a sheet over the same screen, drawn generic and grayscale, not to Google's brand, and it reads "Most Valuable Parent wants to see your calendar" with Allow and Cancel (0q-b). She taps Allow, the sheet closes, and the screen confirms the connection before she moves on (0q-d, issue O36).*

> ✓ Your Google Calendar is connected.
>
> [✓ Google Calendar · Connected]
> [Apple Calendar]
> [Outlook]
>
> [Continue]

*Apple Calendar and Outlook stay, as outlined buttons, so she can connect a second calendar, such as one from work, and Continue is the main button at the foot (F40). Charlotte connects only Google Calendar and taps Continue. If she taps Cancel on the sheet, it closes and nothing is connected. If she taps Not now, the next screen follows and connecting stays in Settings. In the prototype the permission is staged and connects nothing, and Apple Calendar and Outlook are not wired once Google Calendar is connected.*

**Onboarding, as shown: where do they go to school · 8:36pm**

*The coach shows what it found and Charlotte checks it, the way the rest of MVP works, rather than filling in a form (issue O36). Mallory's school and start time come from the calendar photo, and Alexis's from the Cedar Grove Elementary family calendar on her Google Calendar (Appendix A).*

> MVP Coach: Here's what I found. Change anything that's wrong.
>
> Alexis · Fourth grade
> Cedar Grove Elementary · 8:00am · From your Google Calendar
>
> Mallory · Kindergarten
> Westview Kindergarten · 8:30am · From your calendar photo
>
> Your household
>
> How is your household set up?
> Two parents
>
> Language at home
> English
>
> Who else helps?
>
> Edward
> Husband
>
> Claire
> Sister
>
> + Add someone
>
> [Done]

*Each row opens to change it. The household row opens the four choices, Two parents, One parent, Two homes and Something else, and shows only its question until she chooses one. "+ Add someone" opens the Name and Relationship fields with the line "Add the adults you count on, such as a partner, grandparents or a nanny. You control what everyone sees in MVP." Charlotte chooses Two parents, leaves English and adds Edward and Claire, and the screen above is how she leaves it. Anything the coach could not find shows as an empty field it asks for. If her calendar held no start time for Cedar Grove Elementary, Alexis's row would show the school alone, and the coach would ask "I couldn't find Alexis's start time. What time does school start at Cedar Grove Elementary?" over an empty "Alexis's start time" field (0f-b). A child marked "Not in school yet" has an Age field in place of the school. Asking for the start time here is what lets her first board open with a recommendation instead of a question. Done stays pinned at the foot. "Your household" and "Who else helps?" have been subheadings on the school screen since version 3.54. Edward and Claire become the first members of her circle. Min-jung, Jenna and the Cedar Grove parents group come later in her first week.*

**Onboarding, as shown: getting everything ready · 8:38pm**

> [MVP mark]
>
> Getting everything ready
>
> Saving your account · done
> Adding Alexis and Mallory · done
> Reading your Google Calendar · done
> Setting up Mallory's plan · working
> Getting Today ready · waiting
>
> This takes about a minute. You can put your phone down, and everything you've entered is safe.

*The screen moves on by itself. Greg's Figma screen has its own headline and step labels, and if they differ from these, his win once they are written into section 4.*

**Onboarding, as shown: welcome to the team · 8:39pm**

> MVP Coach · just now
>
> Welcome to the team, Charlotte.
>
> Here is what I have so far. Alexis is in fourth grade at Cedar Grove Elementary and Mallory is in kindergarten at Westview Kindergarten. Mallory has library on A days and needs sneakers on B, D and F days, so Mallory's checklists carry them every week. Alexis's therapy and dance and Mallory's ballet repeat every week on your Google Calendar, and they are in your plan. Edward and Claire are in your circle.
>
> [✓] Remind me the night before a library day
> [✓] Add events from my calendar to my plan
>
> [Next]

*Both lines are ticked already. Tapping Next with the reminder ticked brings up the phone's request to allow notifications, which is the first moment notifications are useful to her. Tapping Next with the calendar line ticked is her agreement that the coach adds what she has committed to on her calendar, and if she unticks it, calendar events wait on the game plan's review card. The recap covers the week, the standing rules and what the coach found on her calendar, and leaves tomorrow to Today, so the two screens don't repeat each other. The sentence about asking for Mallory's start time on Today is gone, because 0f now collects it. Greg's Figma version showed "Time saved: 20 minutes", which is left out because nothing in the product measures it.*

**If she skipped a step.** The coach's introduction says only what MVP learned on her path, so it never mentions something she skipped (issue O32). The greeting is "Welcome to the team, Charlotte." with her name, or "Welcome to the team." when she left her name blank. The recap is built from these sentences, in this order, each only when it applies:

1. "Alexis is in fourth grade at Cedar Grove Elementary and Mallory is in kindergarten at Westview Kindergarten." This sentence always appears, from the grades and schools she gave.
2. "Mallory has library on A days and needs sneakers on B, D and F days, so Mallory's checklists carry them every week." This appears only when she made a capture that gave the rotation.
3. "Alexis's therapy and dance and Mallory's ballet repeat every week on your Google Calendar, and they are in your plan." This appears only when she connected a calendar, and names the calendar she connected.
4. "Edward and Claire are in your circle." This appears only when she added someone on the school screen.

The recap opens with "Here is what I have so far." whichever sentences follow. The reminder line appears only with a capture, and the calendar line only with a calendar. When neither appears, Next stands alone under the recap.

**Today, as shown: her first board, on arrival (0i-a) · 8:40pm**

> Monday evening, Oct. 5

**Today, as shown: the pass, with the reminders as its checklist**

> Take Alexis and Mallory to school
>
> 7:40am · [Needs an owner]
>
> Home → Cedar Grove Elementary → Westview Kindergarten

| Time | Step |
| ----- | ----- |
| 7:40am | Leave home |
| 7:52am | [Alexis] Cedar Grove Elementary · Drop off · Starts 8:00am |
| 8:10am | Leave Cedar Grove Elementary |
| 8:22am | [Mallory] Westview Kindergarten · Drop off · D day · Starts 8:30am |
| 8:40am | Back home |

> Reminders for tomorrow morning
>
> Mallory
> Sneakers and socks by the door · [✕]
> Lunchbox · [✕]
> Snack bag · [✕]
> Water bottle · [✕]
> Add something else for Mallory

**Today, as shown: the coach card**

> MVP Coach · for tomorrow
>
> Your calendar is clear tomorrow morning, so one trip can take Alexis and Mallory. Leave home with Alexis and Mallory at 7:40am. Alexis gets to Cedar Grove Elementary before 8:00am, and Mallory is at Westview Kindergarten well before 8:30am.
>
> [Take both girls at 7:40am]
> Updates your game plan
>
> Other options

*The board is short on purpose. The pass shows the trip the coach recommends, so the pass and the card describe the same morning, and its pill reads "Needs an owner" because nobody has said yet who drives. It has no action, because a reminder to leave makes sense only once the leg is hers. The timetable sits under the first dashed line and the reminders under the second. For tomorrow is hidden, because both drop-offs are on the pass. The sneakers come from the rotation she photographed, because Tuesday, Oct. 6 is a D day. Mallory's other three items are Heather's list, and Greg's reasoning is that every parent expects them, so they don't count as invented. Both start times come from 0f. The leaving time follows the travel times: 7:40am leaves twelve minutes to Cedar Grove Elementary and five more before the 8:00am start. Tapping the pass opens the Leave sheet, as Other options does. There is no MVP Editorial card, because MVP has seen nothing yet that would give an article a reason.*

**Today, as shown: the other options (0i-b) · 8:40pm**

*She taps Other options, and the Leave sheet opens over the board, scrolled to the backups.*

> Leave home for Cedar Grove Elementary tomorrow
>
> Tap a time to leave earlier or later. The stops come from your game plan, and that's where they change.

| Station | What it shows |
| ----- | ----- |
| Home | Leave home at [7:40am] |
| Cedar Grove Elementary | 8:00am · [Alexis] Drop off · Leave Cedar Grove Elementary at [8:10am] |
| Westview Kindergarten | 8:30am · [Mallory] Drop off · D day · Leave Westview Kindergarten at [8:30am] |
| Home | Back around 8:40am |

> Backup plans
>
> Plan B · Take Alexis to Cedar Grove Elementary at 7:40am, then come home and leave with Mallory for Westview Kindergarten at 8:15am.
>
> [Make two trips]

*There is no Plan C, because Edward commutes on Tuesdays and nobody else in her plan can drive that early. Closing the sheet changes nothing.*

**Today, as shown: after she agrees (0i-c) · 8:41pm**

*She taps Take both girls at 7:40am. The card keeps its label and the recommendation, now in muted ink, and shows what comes next.*

> MVP Coach · for tomorrow
>
> Your calendar is clear tomorrow morning, so one trip can take Alexis and Mallory. Leave home with Alexis and Mallory at 7:40am. Alexis gets to Cedar Grove Elementary before 8:00am, and Mallory is at Westview Kindergarten well before 8:30am.
>
> ✓ Agreed
>
> The rest of this week is in your game plan. Back-to-school night at Westview Kindergarten this Thursday is the one thing waiting there for you to add.
>
> [Open the game plan]
>
> Undo

*On the pass above the card, the pill turns from "Needs an owner" to "Tomorrow", and "Remind me to leave home" appears under a second dashed line beneath the reminders. Nothing else on the pass moves, which is the point of the moment: the trip she just agreed to is the trip she was already looking at. The change is hers, so nothing carries the Updated mark. The follow-up says only what comes next, and the sentence about sneakers and the library book of version 3.25 is gone, because the reminders carry them. Undo returns the card to its recommendation and the pass to "Needs an owner" until she leaves Today.*

**Today, as shown: ready for the morning (0i-f) · 8:45pm**

*She ticks all four reminders, and the list folds inside the pass. Nothing is left under For tomorrow, so the fold line reads "Everything is ready for tomorrow morning.", naming the same part of tomorrow as the heading.*

> Take Alexis and Mallory to school
>
> 7:40am · [Tomorrow]
>
> Home → Cedar Grove Elementary → Westview Kindergarten

| Time | Step |
| ----- | ----- |
| 7:40am | Leave home |
| 7:52am | [Alexis] Cedar Grove Elementary · Drop off · Starts 8:00am |
| 8:10am | Leave Cedar Grove Elementary |
| 8:22am | [Mallory] Westview Kindergarten · Drop off · D day · Starts 8:30am |
| 8:40am | Back home |

> Reminders for tomorrow morning
>
> ✓ Everything is ready for tomorrow morning.
>
> [Remind me to leave home]

*The sheet below holds the coach card exactly as on 0i-c, and For tomorrow is hidden, because the only departure is on the pass. The pass and its timetable rise into view first, and the card is below the fold. Every time follows the travel table: twelve minutes from home to Cedar Grove Elementary, twelve from Cedar Grove Elementary to Westview Kindergarten, and ten home. Tapping the pass opens the Leave sheet, as on 0i-b.*

**Today, as shown: after she picks Plan B (0i-g) · 8:41pm**

*If she taps Make two trips on 0i-b instead, the sheet closes, and the card shows the plan she chose beside the check, so she sees the coach's suggestion and her own choice together.*

> MVP Coach · for tomorrow
>
> Your calendar is clear tomorrow morning, so one trip can take Alexis and Mallory. Leave home with Alexis and Mallory at 7:40am. Alexis gets to Cedar Grove Elementary before 8:00am, and Mallory is at Westview Kindergarten well before 8:30am.
>
> ✓ Take Alexis to Cedar Grove Elementary at 7:40am, then come home and leave with Mallory for Westview Kindergarten at 8:15am.
>
> The rest of this week is in your game plan. Back-to-school night at Westview Kindergarten this Thursday is the one thing waiting there for you to add.
>
> [Open the game plan]
>
> Undo

*The pass above the card changes to the plan she chose. Each trip now has one child and one stop, so the trip pass gives way to the single-leg pass for the 7:40am trip.*

> Take Alexis to Cedar Grove Elementary
>
> 7:40am · [Tomorrow]
>
> Home → Cedar Grove Elementary
> Then at 8:15am, you leave home for Westview Kindergarten
>
> Drive 12 min · Arrive 7:52am · Starts 8:00am
>
> [Remind me to leave home]

*Every reminder is Mallory's, and Mallory leaves on the second trip, so the pass has no checklist and Mallory's four items move to the 8:15am row under For tomorrow.*

| Time | Departure | Checklist |
| ----- | ----- | ----- |
| 8:15am | Leave home at 8:15am to take Mallory to Westview Kindergarten · D day | [Mallory] Sneakers and socks by the door · Lunchbox · Snack bag · Water bottle |

**Today, as shown: after she removes a reminder (0i-i) · 8:42pm**

*On 0i-a she taps the remove button on Lunchbox. The row opens in place to ask "Just tonight" or "Every night", with Lunchbox still showing and its remove button hidden (0i-k). She taps Just tonight, because Mallory has a school lunch on Tuesday. The row goes, the list closes up, and the notice rises above the capture bar. The pass above the list stays as it was.*

> Reminders for tomorrow morning
>
> Mallory
> Sneakers and socks by the door · [✕]
> Snack bag · [✕]
> Water bottle · [✕]
> Add something else for Mallory

> Lunchbox is off Mallory's list for tonight. · Undo

*Undo puts Lunchbox back in its place. The notice goes after about four seconds, or stays until she dismisses it when VoiceOver is on. Lunchbox returns to Mallory's list the next night.*

**Today, as shown: adding a reminder (0i-j) · 8:43pm**

*She taps Add something else for Mallory. A new row opens at the foot of Mallory's list with the caret and the keyboard up, and the screen scrolls so the row sits above the keyboard.*

> Reminders for tomorrow morning
>
> Mallory
> Sneakers and socks by the door · [✕]
> Lunchbox · [✕]
> Snack bag · [✕]
> Water bottle · [✕]
> What else does Mallory need?

*Return adds what she typed as a reminder for tomorrow morning only, with no source link and no mark, and the add link comes back under it. Tapping elsewhere with the field empty drops the row. 0i-e, which showed an edit state behind "Edit this list", was retired on Oct. 28, 2026, because each reminder now carries its own remove button.*

*If she skipped the capture, the coach has no reminders and has recommended no trip, so the pass shows tomorrow's first school start from 0f, marked "Needs an owner", and the coach card asks for one thing to start with (0i-d).*

> Take Alexis to Cedar Grove Elementary
>
> 7:40am · [Needs an owner]
>
> Home → Cedar Grove Elementary
>
> Drive 12 min · Arrive 7:52am · Starts 8:00am

| Time | Chips | Item |
| ----- | ----- | ----- |
| 8:30am | Mallory | Westview Kindergarten · Needs an owner |

*For tomorrow lists Mallory's start, because it is a later departure that takes a child. It shows the start time rather than a leaving time, because nobody owns the leg yet. The pass has no checklist and no action.*

> MVP Coach
>
> Your week is empty so far. Send me a school email, a handout or a few words about your week, and I'll start the plan.
>
> [Take a photo] [Attach a file] [Talk or type]

*The card is the capture here, so the capture bar is hidden. Each button goes straight to its kind of capture.*

**Today, as shown: the next morning, between drop-offs (0i-h) · Tuesday, Oct. 6, 8:05am**

*Charlotte has dropped Alexis off at Cedar Grove Elementary on time, and before she leaves for Westview Kindergarten she checks MVP. Both halves of the pass have moved on with the clock. The board stays inside C-00 as "the next morning", with no moment ID of its own. Its sheet is hidden, so Later today, the coach card and MVP Editorial stay off this board, because that Tuesday falls outside the demo week and nothing about its afternoon adds to the story (Appendix B item 88, issue T84).*

> Tuesday morning, Oct. 6

> Drop Mallory off at Westview Kindergarten
>
> 8:10am · [in 5 min]
>
> Cedar Grove Elementary → Westview Kindergarten

| Time | Step | How it looks |
| ----- | ----- | ----- |
| 7:40am | Leave home | Behind her: muted, with a muted home icon |
| 7:52am | [Alexis] Cedar Grove Elementary · Drop off · Starts 8:00am | Behind her: muted, with a muted school icon and a faded chip |
| 8:10am | Leave Cedar Grove Elementary | Next: the school icon in a solid cerulean circle, and bold text |
| 8:22am | [Mallory] Westview Kindergarten · Drop off · D day · Starts 8:30am | Ahead: the school icon in full ink |
| 8:40am | Back home | Ahead: the home icon in full ink |

> [Directions]

*The pill is in its 15-minute stage, so the countdown is in the warning ink. At 8:10am it reads "Time to leave", and from 8:15am "Running late". The reminders are gone because she has left home, and Directions replaces Remind me because she is on the road. The sheet below the pass is hidden on this board, as set out above.*

### The other tabs on her first night

*These are the four other tabs as they stand at the end of C-00, after she agrees on her first board. The words follow from what onboarding collected and nothing more, and Greg approved them on November 21, 2026 before they are drawn (issue P4).*

**Coach, as shown.** The conversation from onboarding, under the heading "Today", oldest first: her photo of the rotation calendar, the coach's line naming it, "Whose calendar is this?" with her choice, "Mallory · K", the coach's read-back, the coach's question about the highlights, her answer, the hand-off, and "Welcome to the team, Charlotte." with its recap. In the history, the welcome shows without its tick boxes and Next, and the hand-off without its button, Make Mallory's plan, and its link, Something's not right, because those belong to onboarding (issue K12).

**Game plan, as shown.** The agenda opens at today, Monday, Oct. 5.

> One update is waiting for your review.
>
> For this Thursday
> [Mallory] Back-to-school night, Westview Kindergarten, 6:00pm
> No thanks · [Add to the game plan]

| Day | Time | Item | Owner |
| ----- | ----- | ----- | ----- |
| Today | | Today · 1 done | |
| Tomorrow | 8:00am | [Alexis] To Cedar Grove Elementary | You |
| | 8:30am | [Mallory] To Westview Kindergarten · D day | You |
| Wednesday | | 3 items, collapsed | |
| Thursday | | 3 items, collapsed, with the dot | |
| Friday | | 2 items, collapsed | |
| Saturday | | Nothing is planned. · Tell the coach about this day, and it will suggest how it could go. | |
| Sunday | | Nothing is planned. · Tell the coach about this day, and it will suggest how it could go. | |
| Next week | | Collapsed | |

*Today's one done item is Alexis's therapy at 3:30pm, from her Google Calendar. Wednesday holds both school runs and Alexis's dance at 3:45pm, Thursday both school runs and Mallory's ballet at 4:15pm, and Friday both school runs, with the calendar mark on dance and ballet. Pickups are not in the plan yet, because setup asked only for start times. The quiet line on an empty day has its first moment here.*

**Team, as shown.**

| Part | Content |
| ----- | ----- |
| Header | Team · [New message] |
| Chats | No chats yet. Start one with anyone in your circle who's on MVP. |
| Groups | No groups yet. Create one for the parents who share your children's week. |
| Team | Edward · Your husband · [Circle]<br>Claire · Your sister · [Circle] |
| Below the lists | [Add someone] [New group] |

*Setup asked for names and relationships but no mobile numbers, so MVP can't yet tell whether Edward and Claire are on MVP, and neither row says so. Their pages that night show the name and the line only, with no On MVP or Not on MVP, no Message, Call or Text and no contact, and This week reads "Nothing in this week's plan with Edward." or "Nothing in this week's plan with Claire." (issue M11).*

**Kids, as shown: Alexis**

| Section | Content |
| ----- | ----- |
| Header | Alexis · 10 · Fourth grade |
| School | Cedar Grove Elementary |
| Every week | Dance, Studio Ten Dance, Wednesdays 3:45pm, with the calendar mark · Therapy, Brightwater Family Therapy, Mondays 3:30pm, with the calendar mark |
| Going with, by day | Nothing goes with Alexis on a set day yet. |

**Kids, as shown: Mallory**

| Section | Content |
| ----- | ----- |
| Header | Mallory · 6 · Kindergarten |
| School | Westview Kindergarten |
| Every week | Ballet, Studio Ten Dance, Thursdays 4:15pm, with the calendar mark |
| Going with, by day | Sneakers on B, D and F days · Library book on A days |

**Kids, as shown: the Westview Kindergarten card**

| Section | Content |
| ----- | ----- |
| Hours | Starts 8:30am |
| Rules | A, library · B and D, motor skills · C, science · E, art and music · F, science and motor skills |
| Calendar | Back-to-school night, this Thursday, 6:00pm · Harvest fair, Friday, Oct. 23, 3:00pm to 5:00pm · Fir Hollow Farm field trip, Thursday, Oct. 29 |
| Rotation | This week: Monday C · Tuesday D · Wednesday E · Thursday F · Friday A |
| Documents | Rotation calendar, photo, today |

**Kids, as shown: the Cedar Grove Elementary card**

| Section | Content |
| ----- | ----- |
| Hours | Starts 8:00am |
| Line beneath | Send the MVP Coach a handout or an email from Cedar Grove Elementary, and it fills this card in. |

*Contacts, the pickup rule, picture day and the family contact list reach the Westview Kindergarten card later in her first week, and the Cedar Grove Elementary card fills in from the newsletters. Orchestra and violin reach Alexis's page on Thursday of her first week, when she gives the coach Alexis's schedule.*

## Taught when useful

These lines appear during Charlotte's first week. They are not demo moments, but they are the coach's words, so they are fixed here.

*On Tuesday of her first week, at 12:40pm, Charlotte copies a message from the parents' WhatsApp group and pastes it into the coach.*

> Min-jung Park: I can drive Monday mornings this term if anyone wants to share. 7:40 from our house.

*The coach reads it back, then adds the line that teaches the share menu.*

> Min-jung offers to drive Alexis on Monday mornings at 7:40am from the Parks' house, and it's on next Monday, Oct. 12, as a suggestion.
>
> Next time, you can send a message straight from WhatsApp. Press and hold the message, tap Forward, tap the share button, and choose MVP.

*This is how the Parks came to drive the Monday carpool.*

*On Wednesday of her first week, at 4:20pm, she forwards the Cedar Grove Elementary newsletter from the Sunday before she started to her MVP address. The coach reads it back, then offers automatic forwarding, and she sets it up, so the demo-week newsletter arrives by itself.*

> From the Cedar Grove Elementary newsletter, nothing from today on is for Alexis, so the plan stays as it is.

*The read-back names no day, because it stays in the Coach tab's history after the week it was written in (issue K8).*

> This newsletter comes from the same Cedar Grove Elementary address every Sunday. If you set your email to forward that address to MVP, each one reaches the coach without you forwarding it.
>
> [Show me how] [Not now]

*For a parent who tapped Not now on the calendar screen, the first time she gives the coach an appointment. Charlotte connected hers, so she never sees this line.*

> Appointments like this one are probably on your calendar already. If you connect your calendar, they reach the plan without you sending them, and you hear from me when one runs into something.
>
> [Connect your calendar] [Not now]

*On Tuesday of her first week, Charlotte adds Min-jung Park from the Team tab after the carpool message. The number matches someone on MVP.*

**Team, as shown: add someone**

> Back · Add someone
>
> Name: Min-jung Park
>
> Mobile number: 707-555-0104
>
> Relationship: Sophie and Hana's mom · Monday carpool
> Shown under their name on your Team.
>
> [Circle] **[People]**
>
> [Add]

> Min-jung Park is on MVP.
>
> [Done]

*She adds Ms. Reyes the same way, to her circle, on Wednesday of her first week. Ms. Reyes's number is not on MVP.*

> Ms. Reyes isn't on MVP yet. Requests reach them by text message, and you can invite them to MVP.
>
> [Invite by text] [Not now]

*Charlotte taps Not now. Invite by text would open her messages app with the text below, addressed to the number she entered, for her to send herself.*

> I'm using MVP to plan the girls' week. You can join here: mvp.example/join

*On Thursday of her first week she creates Cedar Grove parents, choosing Min-jung, Jenna, Tom, Grace, Dev, Nina and Rafael, all of whom she had added to her people.*

**Team, as shown: new group**

> Back · New group
>
> Group name: Cedar Grove parents
>
> Add from your people
> [✓] Min-jung Park · [✓] Jenna Okafor · [✓] Tom Alvarez · [✓] Grace Liu · [✓] Dev Raman · [✓] Nina Brooks · [✓] Rafael Costa
>
> Everyone in a group needs MVP to see its posts.
>
> [Create group]

## C-01 · Monday, Oct. 12, 6:15am · Charlotte talks to the coach

*The house is quiet and Charlotte opens MVP before anyone is up. The first thing on the Coach tab is the coach's read-back of Sunday's Cedar Grove Elementary newsletter, which reached MVP through automatic forwarding.*

**Coach, as shown: the newsletter read-back**

> From the Cedar Grove Elementary newsletter, two things are in Alexis's plan. This Thursday is an early dismissal at 1:30pm for conferences, with no after-school care, so you pick Alexis up at 1:30pm that day. This Friday is a free dress day. The fifth-grade trip and the rest of the newsletter are not for Alexis.
>
> From the Cedar Grove Elementary newsletter · yesterday
>
> [Show the newsletter]

*She opens WhatsApp, presses and holds Jenna's message, and shares it to MVP. MVP shows "Sent to the coach" and returns her to the Coach tab, where the shared message shows as she shared it, with the author's name, a colon and the words: "Jenna Okafor: Who can do Wednesday morning? I can't this week." She taps the microphone and talks for about twenty seconds, correcting herself partway through, because that is how people actually talk to a phone.*

> "Alexis gets out early Thursday, one thirty, it's conferences. Violin moved to Tuesday at four. Mallory needs something for picture day Friday, I think. Edward's home Thursday. And I really want the Thursday yoga class at two, actually it's two fifteen."

*The coach matches what she said to the messages it already has, handles the rest of the week without comment, and names the one day that needs a decision from her. Yoga joins the plan as hers, because she said it, and it runs into Mallory's pickup at 2:30pm, so the game plan shows "Conflict: yoga" on that pickup and "Conflict: Mallory's pickup" on yoga until she chooses. Alexis's pickup at 1:30pm has nobody yet and carries the Updated mark, and it does not conflict with yoga, because Charlotte could collect Alexis and still leave for Willow Yoga at 2:00pm.*

**Game plan, as shown: the review card, after the voice note and before she chooses**

> One update is waiting for your review.
>
> For tomorrow
> [Mallory] Second tutoring session, Westview Kindergarten library, 3:00pm
> No thanks · [Add to the game plan]

**Game plan, as shown: Thursday, opened from the week strip**

| Time | Item | Owner or answer | Marks |
| ----- | ----- | ----- | ----- |
| 7:15am | Alexis · Orchestra, Cedar Grove Elementary | You | |
| 8:30am | Mallory · To Westview Kindergarten | You | |
| 1:30pm | Alexis · Pick up at Cedar Grove Elementary, early dismissal | Needs an owner | Updated |
| 2:15pm | Yoga at Willow Yoga | You | Conflict: Mallory's pickup |
| 2:30pm | Mallory · Pick up at Westview Kindergarten | You | Conflict: yoga |
| 4:15pm | Mallory · Ballet, Studio Ten Dance | You | |

*The week strip carries a dot under Wednesday for the carpool nobody has yet, under Thursday, and under Saturday for the library run nobody has yet. Violin's Updated mark on Tuesday is information rather than a decision, so it puts no dot in the strip.*

> This Thursday is the day that needs your attention. Alexis has early release at Cedar Grove Elementary at 1:30pm, and nobody is picking Alexis up yet. Mallory is out of Westview Kindergarten at 2:30pm, during your 2:15pm yoga class at Willow Yoga. The rest of the week already fits. Violin is at Lakeside Strings Music School tomorrow at 4:00pm this week, and picture day at Westview Kindergarten is this Friday, so Mallory's outfit goes on the list for this Thursday night.

*The coach offers two ways Thursday could go and recommends one. Each is a real choice that costs her something different. The option of Alexis going home with the Okafors came out in the wording review of Oct. 27, 2026.*

> MVP Coach recommends
> **Edward takes both pickups.**
> Edward is home this Thursday and free from 1:15pm. Edward collects Alexis at the Oak Street gate at 1:30pm and Mallory at Westview Kindergarten at 2:30pm, so Alexis is home by 1:45pm and Mallory by 2:45pm. You leave home for yoga at 2:00pm and you are back at 3:30pm to take Mallory to ballet. I would pick this one, because Edward is already home and nobody outside the house is asked for anything.
>
> **Plan B · You do both pickups and move yoga.**
> Willow Yoga has a class at 8:30am this Saturday. The 9:00am class this Friday runs into your conference at Cedar Grove Elementary at 9:20am, so this Saturday is the one that works.

*Charlotte taps the first option. The coach lays out the day and is plain that none of it holds until Edward answers.*

> Here is this Thursday with Edward on both pickups. Edward is at the Oak Street gate at 1:30pm for Alexis and at Westview Kindergarten at 2:30pm for Mallory. You leave home for Willow Yoga at 2:00pm, you are home at 3:30pm, and you leave home with Mallory and the ballet bag at 3:55pm. Edward has not seen any of this yet, so both pickups stay open until Edward answers.
>
> [Ask Edward]

**Today, as shown**

*Today matches C-03, except that the pill reads "in 1 hr 25 min" in a plain pill, because the Parks come at 7:40am, more than 15 minutes away. Nothing is done yet, so Later today has no count line. There is no coach card at 6:15am, because Jenna's message has not reached MVP. From 6:16am, once Charlotte shares it, the coach card for this Wednesday appears as on C-03. The Thursday choice stays on the Coach tab, where she is already deciding it, so Today never shows two decisions at once (issue T72).*

## C-02 · Monday, Oct. 12, 6:40am · Charlotte asks Edward

*Tapping Ask Edward opens a message the coach has drafted in Charlotte's voice. She reads it, changes anything she wants to change, and sends it herself.*

**Charlotte's screen, as shown**

> To Edward
>
> Hi Edward, can you manage both pickups this Thursday? It's an early day at Cedar Grove Elementary for conferences, so Alexis will be waiting at the Oak Street gate at 1:30pm. Mallory gets out of Westview Kindergarten at 2:30pm as usual. I'm at yoga from 2:15pm and home by 3:30pm, and then I'll take Mallory to ballet. There are snacks in the pantry for both girls. Thank you!
>
> [Send]

*Edward has MVP, so the request arrives as a card in his own MVP with a notification on his phone. He sees this request and nothing else of Charlotte's plan.*

> Charlotte asked you about the pickups this Thursday.

**Edward's screen, as shown**

*Edward's own Today shows his monogram, E, and the dateline "Monday morning, Oct. 12". In the demo week it holds the request cards Charlotte sends him and nothing else (issue S12).*

> Monday morning, Oct. 12
>
> Charlotte is asking you to pick Alexis and Mallory up this Thursday.
> Sent 6:40am
>
> Hi Edward, can you manage both pickups this Thursday? It's an early day at Cedar Grove Elementary for conferences, so Alexis will be waiting at the Oak Street gate at 1:30pm. Mallory gets out of Westview Kindergarten at 2:30pm as usual. I'm at yoga from 2:15pm and home by 3:30pm, and then I'll take Mallory to ballet. There are snacks in the pantry for both girls. Thank you!
>
> This Thursday · Pick Alexis up at Cedar Grove Elementary, 1:30pm
> [Yes, I can] [No, I can't]
>
> This Thursday · Pick Mallory up at Westview Kindergarten, 2:30pm
> [Yes, I can] [No, I can't]
>
> Add a note for Charlotte

*Both pickups show "Asked Edward" in the game plan. Edward answers at 7:52am, when he is up, by tapping "Yes, I can" on each item. He adds no note.*

**Edward's screen, as shown: after he answers · 7:52am**

> Charlotte is asking you to pick Alexis and Mallory up this Thursday.
> Sent 6:40am
>
> This Thursday · Pick Alexis up at Cedar Grove Elementary, 1:30pm
> Yes, I can · Change
>
> This Thursday · Pick Mallory up at Westview Kindergarten, 2:30pm
> Yes, I can · Change
>
> Charlotte can see your answers. If anything changes, change your answer here.

*Charlotte gets a notification, and both pickups change to "Edward: yes".*

> Edward: yes to both pickups this Thursday.

**Today, as shown**

*Today matches C-03, with the coach card for this Wednesday, except that the pill reads "in 1 hr" in a plain pill (issue T72).*

## C-03 · Monday, Oct. 12, 7:25am · Getting the girls out the door

*This is how Charlotte sends two girls to two schools prepared. The next departure leads the screen with its checklist, and the rest of Monday sits beneath it as a list. Today shows Monday and nothing else. The coach card is the only part that can reach beyond today, and here it holds Wednesday's carpool.*

**Today, as shown: the header**

> Monday morning, Oct. 12

**Today, as shown: now**

> Alexis takes the Parks' carpool to Cedar Grove Elementary
>
> Home → Cedar Grove Elementary
>
> 7:40am
> in 15 min, in the warning ink
>
> With The Parks · Starts 8:00am
>
> [perforation]
>
> Alexis
> Lunch and snack
> Library book, due today
> Water bottle, with lots of ice
>
> [Remind me]

*Alexis rides with the Parks, so the pass shows With and Starts instead of Drive and Arrive, and Now offers only Remind me.*

**Today, as shown: the coach card**

> MVP Coach · for this Wednesday
>
> Jenna Okafor can't drive the carpool this Wednesday morning and is asking the group to cover. You're free at 7:40am this Wednesday, so you can take it. A reply to the group chat is ready for you to send.
>
> [See your reply to the carpool group]
>
> Say you can't this week

**Today, as shown: later today**

| Time | Chips | Item |
| ----- | ----- | ----- |
| 8:30am | Mallory | To Westview Kindergarten · B day |
| 2:30pm | Mallory | Pick up at Westview Kindergarten |
| 2:45pm | Alexis | Pick up at Cedar Grove Elementary |
| 3:30pm | Alexis | Brightwater Family Therapy, with Mallory, with the calendar mark |

**Today, as shown: MVP Editorial**

> MVP Editorial · 3 min read
>
> Fifteen minutes with the teacher: making a conference count
>
> Because Cedar Grove Elementary conferences are this week.

*If she taps Remind me before Alexis leaves, the sheet below opens. At 7:25am the times 15 and 30 minutes before 7:40am have already come, so the sheet offers the two times still ahead, with the first preselected, and leaves out traffic, because the Parks are driving.*

**Today, as shown: the reminder sheet in C-03**

> Remind me
>
> For 7:40am · Alexis leaves home with the Parks
>
> At 7:35am · 5 min before
> At 7:40am · when the Parks come
>
> [Set reminder]

*Once set, the button reads "Reminder at 7:35am". Charlotte does not set one in the demo, so the set state exists for the boards.*

*Charlotte ticks the lunch and snack, the library book and the water bottle as Alexis heads out. Alexis's group is the only one under Now, so when the last item is ticked the checklist folds into one line, "Everything is packed for 7:40am", with a check that draws in once, and tapping the line opens it again. At 7:40am the Parks collect Alexis, so Alexis's departure leaves Now, and Mallory's moves up, titled "Drop Mallory off at Westview Kindergarten · B day": 8:15am, "in 35 min" in a plain pill, with Mallory's own group under the dashed line, headed "Mallory": Lunch, "Sneakers, it's a motor skills day" and "Reading folder, signed". Charlotte drives this one, so the pass reads "Home → Westview Kindergarten", with Drive 10 min, Arrive 8:25am and Starts 8:30am, and Now gains Directions. Once Mallory's three items are ticked, the checklist folds to "Everything is packed for 8:15am". Later today then shows "1 done this morning". If she taps the departure time, the Leave sheet shows her morning run, home to Westview Kindergarten and back, and she closes it without changing anything, because nothing in Monday morning gives her a reason to leave later.*

*She taps See your reply to the carpool group on the coach card. The reply is in her voice. The WhatsApp group lives outside MVP, so MVP hands the text to WhatsApp and she sends it from there. Wednesday's carpool shows her as the owner, with no status, as soon as she chooses to take it. Because MVP can't see WhatsApp, the handoff also leaves "Reply to the parents' group" on her list, and she ticks it off when she is back.*

> To Cedar Grove Elementary 4th Grade Parents
>
> I can do this Wednesday. Same time, 7:40am?
>
> [Send from WhatsApp]

*If she taps Say you can't this week instead, the coach drafts the decline in her voice, and MVP hands it to WhatsApp in the same way. Wednesday's carpool stays with Jenna's ask open, and "Reply to the parents' group" still goes on her list. The demo takes the other path, so this draft exists for the boards.*

> To Cedar Grove Elementary 4th Grade Parents
>
> So sorry, I can't this week.
>
> [Send from WhatsApp]

## C-03a · Monday, Oct. 12, 7:45am · A flyer and a passenger

*This is the capture bar on Today doing what it is for. Five minutes after C-03, Min-jung collects Alexis for the carpool and asks whether Hana can ride to Westview Kindergarten with Mallory, because she is going straight to work from Cedar Grove Elementary. She leaves Hana with Charlotte and hands her a Westview Kindergarten flyer. Charlotte tells the coach without leaving Today, and the read-back lands on the coach card, where she is. Nothing about the run's time changes, so Today's one edit, the leaving time, is untouched. What Charlotte says about her own morning joins the plan as hers, and what the coach takes from the flyer, which someone else wrote, waits for her to add it.*

**Today, as shown: now, before she types · 7:45am**

> Drop Mallory off at Westview Kindergarten · B day
>
> Home → Westview Kindergarten
>
> 8:15am
> in 30 min
>
> Drive 10 min · Arrive 8:25am · Starts 8:30am
>
> [perforation]
>
> Mallory
> Lunch
> Sneakers, it's a motor skills day
> Reading folder, signed
>
> [Remind me] [Directions]

*Later today shows "1 done this morning". There is no coach card.*

**What Charlotte gives the coach**

*She taps the capture bar, types, then taps the camera and photographs the flyer. The prototype stages the camera with the prepared photo and "Use this photo", as on 0a-b. The bar holds the photo as a small thumbnail above the text, and she taps the arrow labeled "Give this to the coach".*

> Taking Hana to Westview Kindergarten with Mallory, Min-jung asked.
>
> [Photo: the Westview Kindergarten flyer]

**The flyer, as photographed**

> Westview Kindergarten
>
> Fall food drive
>
> This Monday, please send one canned or boxed food item with your child. Bins are by the front office.

**Today, as shown: the coach card while it reads**

> MVP Coach · for today
>
> Reading your photo…

*The prototype holds this for two seconds, as the capture conversation does while it reads a photo (0a-c).*

**Today, as shown: the coach card with the read-back · 7:46am**

> MVP Coach · for today
>
> Hana rides to Westview Kindergarten with Mallory at 8:15am. Westview Kindergarten's flyer asks each child for a can for the food drive today, so Mallory needs two, one for Hana.
>
> [Add the cans to Mallory's list]
> Updates your game plan
>
> No thanks

*Hana's ride is already in the plan as Charlotte's, because she said it. The title on the pass now reads "Drop Mallory and Hana off at Westview Kindergarten · B day", and the row in the game plan "[Mallory] To Westview Kindergarten with Hana · B day". Hana is a guest, so she is named in the item and carries no chip. The cans came from the flyer, so they wait on the card.*

**Today, as shown: now, after she adds the cans**

> Drop Mallory and Hana off at Westview Kindergarten · B day
>
> Home → Westview Kindergarten
>
> 8:15am
> in 29 min
>
> Drive 10 min · Arrive 8:25am · Starts 8:30am
>
> [perforation]
>
> Mallory
> Lunch
> Sneakers, it's a motor skills day
> Reading folder, signed
> Two cans for the food drive, one for Hana
>
> [Remind me] [Directions]

**Today, as shown: the coach card after she adds them**

> MVP Coach · for today
>
> Mallory and Hana leave home at 8:15am with two cans for the food drive.
>
> Undo
>
> Game plan updated

*The new item carries no Updated mark, because she added it. The flyer is the item's source, "From the Westview Kindergarten flyer · photo", and the coach files the drive on the Westview Kindergarten card. Its Calendar gains "Fall food drive, today · One canned or boxed food item, bins by the front office", and its Documents gain "Fall food drive flyer, photo, today". From Tuesday the drive leaves the Calendar, because it has passed, and the flyer stays in Documents as "Fall food drive flyer, photo, yesterday", then "this Monday" (issue A12). Once she ticks all four items, the checklist folds to "Everything is packed for 8:15am". At 8:30am Westview Kindergarten is due and the leg leaves Now, as in C-03.*

## C-03b · Monday, Oct. 12, 2:00pm · The afternoon run

*This is the afternoon as a line. Charlotte collects Mallory at Westview Kindergarten and Alexis at Cedar Grove Elementary, and takes both girls straight to Alexis's therapy at Brightwater Family Therapy, so the run never passes home until it ends. She set a reminder from Now at 1:40pm, and the moment opens on it. Now shows one leg at a time and steps down the line as each stop comes due.*

**The reminder, as shown · 2:00pm**

> Leave home in 15 min for Westview Kindergarten, then Brightwater Family Therapy
>
> Take something for Mallory to read in the waiting room at Brightwater Family Therapy.
>
> [Directions] [Snooze 5 min]

**Today, as shown: the header · 2:05pm**

> Monday afternoon, Oct. 12

**Today, as shown: now**

> Pick Mallory up at Westview Kindergarten
>
> Home → Westview Kindergarten
> Then Cedar Grove Elementary, 2:45pm
>
> 2:15pm
> in 10 min, in the warning ink
>
> Drive 10 min · Arrive 2:25pm · Pickup 2:30pm
>
> [perforation]
>
> Mallory
> Something to read for the waiting room at Brightwater Family Therapy
>
> [Remind me] [Directions]

*The reminder has gone off, so the button reads Remind me again. Directions opens her maps app with Westview Kindergarten, Cedar Grove Elementary and Brightwater Family Therapy in order.*

*If she taps Remind me again, the sheet opens with the times still ahead. The reminder at 2:00pm has gone off and 1:45pm has passed, so the sheet offers five minutes before and when it's time to leave home, with the first preselected. Once set, the button reads "Reminder at 2:10pm". If she ticks the book, the checklist folds to "Everything is packed for 2:15pm".*

**Today, as shown: the reminder sheet at 2:05pm**

> Remind me to leave home
>
> For 2:15pm · Westview Kindergarten
>
> At 2:10pm · 5 min before
> When it's time to leave home · at 2:15pm, with traffic checked
>
> [Set reminder]

**Today, as shown: later today**

*At the foot of Later today: 2 done today.*

| Time | Chips | Item |
| ----- | ----- | ----- |
| 2:30pm | Mallory | Pick up at Westview Kindergarten |
| 2:45pm | Alexis | Pick up at Cedar Grove Elementary |
| 3:30pm | Alexis | Brightwater Family Therapy, with Mallory, with the calendar mark |

**Today, as shown: MVP Editorial**

> MVP Editorial · 3 min read
>
> Fifteen minutes with the teacher: making a conference count
>
> Because Cedar Grove Elementary conferences are this week.

*There is no coach card, because the coach needs nothing from her this afternoon. She taps the departure time, and the Leave sheet rises.*

**Today, as shown: the Leave sheet · 2:06pm**

> Leave home for Westview Kindergarten
>
> This afternoon · 3 stops
>
> Tap a time to leave earlier or later. The stops come from your game plan, and that's where they change.

| Station | Item | Leave |
| ----- | ----- | ----- |
| Home | | Leave home at 2:15pm |
| Westview Kindergarten | 2:30pm · [Mallory] Pick up at Westview Kindergarten | Leave Westview Kindergarten at 2:30pm |
| Cedar Grove Elementary | 2:45pm · [Alexis] Pick up at Cedar Grove Elementary | Leave Cedar Grove Elementary at 3:05pm |
| Brightwater Family Therapy | 3:30pm · [Alexis] Therapy, with Mallory, with the calendar mark | Leave Brightwater Family Therapy at 4:15pm |
| Home | | Back around 4:35pm |

*Each leaving time is drawn as cerulean text in a cerulean outline, as the control she taps. Save is hidden until she changes a time, and tapping Home's "Leave home at" opens the time picker in place under Home. Brightwater Family Therapy's start time reads "Change this in Google Calendar." because the session comes from her calendar. No backups are written for this run, so the sheet has no Plan B or Plan C. Charlotte closes the sheet without changing anything.*

**For the wireframes only: changing when she leaves home**

*The demo never changes a leaving time, so these three boards show the state for the engineer. Charlotte taps "2:15pm" beside Leave home at, then taps "5 min later" twice. Leaving at 2:25pm puts her at Westview Kindergarten at 2:35pm, so she leaves there at 2:35pm and reaches Cedar Grove Elementary at 2:47pm, two minutes after Alexis's pickup. Cedar Grove Elementary's leaving time stays at 3:05pm, because she is there well before it, so Brightwater Family Therapy and the time home do not move. The prototype goes from 2:15pm to 2:25pm in one tap, because 2:20pm has no board.*

**Today, as shown: the Leave sheet with Home's leaving time open · 2:06pm**

| Station | Shows |
| ----- | ----- |
| Home | Leave home at [2:15pm, tinted] · [5 min earlier] [5 min later] · You reach Westview Kindergarten at 2:25pm, five minutes before pickup. |
| Westview Kindergarten | 2:30pm · [Mallory] Pick up at Westview Kindergarten · Leave Westview Kindergarten at 2:30pm |
| Cedar Grove Elementary | 2:45pm · [Alexis] Pick up at Cedar Grove Elementary · Leave Cedar Grove Elementary at 3:05pm |
| Brightwater Family Therapy | 3:30pm · [Alexis] Therapy, with Mallory, with the calendar mark · Change this in Google Calendar. · Leave Brightwater Family Therapy at 4:15pm |
| Home | Back around 4:35pm |

*Save is still hidden, because nothing has changed yet.*

**Today, as shown: the Leave sheet after two taps on 5 min later · 2:06pm**

| Station | Shows |
| ----- | ----- |
| Home | Leave home at [2:25pm, tinted] · [5 min earlier] [5 min later] · You reach Westview Kindergarten at 2:35pm, five minutes after pickup., in the warning ink |
| Westview Kindergarten | 2:30pm · [Mallory] Pick up at Westview Kindergarten · Leave Westview Kindergarten at 2:35pm |
| Cedar Grove Elementary | 2:45pm · [Alexis] Pick up at Cedar Grove Elementary · You reach Cedar Grove Elementary at 2:47pm, two minutes after pickup., in the warning ink · Leave Cedar Grove Elementary at 3:05pm |
| Brightwater Family Therapy | As before |
| Home | Back around 4:35pm |

> [Save]

*Close here leaves 2:15pm in place. Save closes the sheet.*

**Today, as shown: now, after she saves · 2:06pm**

> Pick Mallory up at Westview Kindergarten
>
> Home → Westview Kindergarten
> Then Cedar Grove Elementary, 2:45pm
>
> 2:25pm
> in 19 min
>
> Drive 10 min · Arrive 2:35pm, in the warning ink · Pickup 2:30pm

*The rest of Today is unchanged. The change is hers, so it carries no Updated mark, no coach card appears and there is no Undo, because opening the sheet again changes it back. The pickups themselves have not moved, so nothing goes to anyone else.*

**Today, as shown: now, at 2:31pm**

*Westview Kindergarten is due, so the first leg leaves Now and the next leg takes over from Westview Kindergarten.*

> Pick Alexis up at Cedar Grove Elementary
>
> Westview Kindergarten → Cedar Grove Elementary
> Then Brightwater Family Therapy, 3:30pm
>
> 2:30pm
> Time to leave
>
> Drive 12 min · Arrive 2:43pm · Pickup 2:45pm
>
> [perforation]
>
> [Directions]

*At the foot of Later today: 3 done today. Remind me has gone, because the leaving time has come.*

**Today, as shown: now, at 2:46pm**

> [calendar mark] Alexis's therapy at Brightwater Family Therapy
>
> Cedar Grove Elementary → Brightwater Family Therapy
> Then home, about 4:35pm
>
> 3:05pm
> in 19 min
>
> Drive 20 min · Arrive 3:25pm · Starts 3:30pm
>
> [perforation]
>
> Mallory
> Something to read for the waiting room at Brightwater Family Therapy
>
> [Remind me] [Directions]

*At the foot of Later today: 4 done today. The book stays on the checklist until she ticks it.*

*If she taps Remind me, the sheet offers 15 minutes before and when it's time to leave Cedar Grove Elementary, because 30 minutes before has passed. Once set, the button reads "Reminder at 2:50pm".*

**Today, as shown: the reminder sheet at 2:46pm**

> Remind me to leave Cedar Grove Elementary
>
> For 3:05pm · Brightwater Family Therapy
>
> At 2:50pm · 15 min before
> When it's time to leave Cedar Grove Elementary · at 3:05pm, with traffic checked
>
> [Set reminder]

**Today, for the wireframes only: running late · 2:21pm**

*This board is not part of the moment. It shows the first leg when Charlotte has not left by the end of its five minutes.*

> Pick Mallory up at Westview Kindergarten
>
> Home → Westview Kindergarten
> Then Cedar Grove Elementary, 2:45pm
>
> 2:15pm
> Running late, in the warning fill
>
> Drive 10 min · Arrive 2:31pm · Pickup 2:30pm
>
> [perforation]
>
> Mallory
> Something to read for the waiting room at Brightwater Family Therapy
>
> [Directions]

*Arrive is set in the warning ink with a clock icon, because 2:31pm falls after the 2:30pm pickup. From 2:15pm to 2:20pm the pill reads "Time to leave", filled, and Arrive shows 2:25pm to 2:30pm in ordinary ink, because the five minutes MVP added mean she is still on time. From 2:20pm the pill reads "Running late".*

## C-04 · Monday, Oct. 12, 8:50pm · Charlotte works the game plan

*Charlotte opens the game plan once the girls are in bed, and everything she does here she does without the coach. The point is that the plan belongs to her. The coach suggests, and the game plan is where she decides. The review card shows her what is waiting to go in, and the agenda shows the rest of the week.*

**Today, as shown: the header**

> Monday evening, Oct. 12

**Today, as shown: tomorrow's pass**

> Take Alexis to orchestra at Cedar Grove Elementary
>
> 6:55am · [Tomorrow]
>
> Home → Cedar Grove Elementary
>
> Drive 12 min · Arrive 7:07am · Starts 7:15am
>
> Reminders for tomorrow morning
>
> Alexis
> Put the violin case and orchestra folder by the front door for the 6:55am start · [✕]
> Pack the lunch and snack tonight to save time in the morning · [✕]
> Add something else for Alexis
>
> [Remind me to leave home]

**Today, as shown: for tomorrow**

| Time | Departure | Checklist |
| ----- | ----- | ----- |
| 8:15am | Leave home at 8:15am to take Mallory to Westview Kindergarten · C day | [Mallory] Pack the lunch and snack tonight to save time in the morning |
| 3:40pm | Leave home at 3:40pm to take Alexis to violin at Lakeside Strings Music School | |

*Mallory rides along to orchestra, so the pass takes the children's tint, but nothing of Mallory's goes with the 6:55am departure, so Mallory has no group on it. A C day needs neither sneakers nor a library book. The violin row has no items, because the violin case is already on the morning's list and comes home with Alexis. The afternoon pickups leave home without a child, so they stay in the game plan, as on C-09. Nothing needs an answer from her, so there is no coach card, and the sheet holds For tomorrow alone (issue T72).*

**Game plan, as shown: when she opens it**

> One update is waiting for your review.
>
> For tomorrow
> [Mallory] Second tutoring session, Westview Kindergarten library, 3:00pm
> No thanks · [Add to the game plan]

*Beneath the card, everything on Monday is done, so today is folded to "Today · 6 done". Tuesday is open, with orchestra at 7:15am, Mallory's run to Westview Kindergarten at 8:30am, both pickups, and violin at 4:00pm with the Updated mark. Wednesday, Thursday, Friday and Saturday are collapsed with their counts, Sunday reads "Nothing is planned.", and Next week is collapsed beneath them.*

Tuesday already has two school runs before 8:30am and violin at 4:00pm, so the second session can't start this week. Charlotte taps Add to the game plan, and the session joins Tuesday as hers. The review card closes, and the session's row on Tuesday takes the coach's tint for about two seconds and fades. She opens it, taps "Move to another date or time", and chooses the following Tuesday at 3:00pm, where it starts next week. When she goes back, the Next week heading opens at Tuesday and the session's row takes the same short tint. She opens Friday and adds a note to the tutoring session, "Tell Ms. Reyes Tuesdays at 3:00 work from next week," so that she can say it in person.

She opens Friday's picture day and adds "Green dress, hanging in the laundry room," so that it is written down rather than remembered.

She opens Saturday's library run and taps "Ask for help". She chooses Edward, and the coach drafts the request in her voice. Edward has MVP, so he receives a request card that reads "Can you take both girls to the library this Saturday morning, around 10:00am?", and the item shows Edward's initial and an hourglass.

She opens violin, which clears its Updated mark.

**Game plan, as shown: when she closes it**

*The review card is gone, because nothing is waiting. Tuesday shows violin with no mark. Friday shows both notes under their items. Saturday shows the library run with Edward's initial and an hourglass, labeled "Asked Edward". Next week holds the second tutoring session on Tuesday at 3:00pm.*

## C-04b · Tuesday, Oct. 13, 7:20am · Edward takes the library run

*Edward opens the request Charlotte sent from the game plan the night before. He says yes and adds a note, which shows the one path a request can take that no other moment uses: a note with a yes. The note travels with the answer and changes nothing in the plan by itself.*

**Edward's screen, as shown**

> Charlotte is asking you to take Alexis and Mallory to the library this Saturday.
> Sent yesterday, 8:52pm
>
> Can you take both girls to the library this Saturday morning, around 10:00am?
>
> This Saturday · Library run, 10:00am
> [Yes, I can] [No, I can't]
>
> Add a note for Charlotte

*Edward taps "Yes, I can" and writes a note.*

> We'll get lunch after and be home by 1:00pm.

**Edward's screen, as shown: after he answers · 7:20am**

> Charlotte is asking you to take Alexis and Mallory to the library this Saturday.
> Sent yesterday, 8:52pm
>
> This Saturday · Library run, 10:00am
> Yes, I can · Change
>
> Your note: We'll get lunch after and be home by 1:00pm.
>
> Charlotte can see your answers. If anything changes, change your answer here.

*Charlotte gets the notification "Edward: yes to this Saturday." In the game plan the library run shows "Edward: yes" with the note beneath it and the Updated mark, and the mark clears when she opens it. The return time is not added to the item, because a note never edits the plan. If Charlotte wants the afternoon to reflect it, she changes it herself.*

**Game plan, as shown: the library run after Edward answers**

| Day | Item | Owner | Status or mark |
| ----- | ----- | ----- | ----- |
| Saturday | Library run, 10:00am | Edward | Edward: yes · Updated |
| | Edward: We'll get lunch after and be home by 1:00pm. | | |

**Today, as shown: Charlotte's Today at 7:20am**

*Orchestra was due at 7:15am, so that leg has left Now, and Mallory's run leads.*

> Drop Mallory off at Westview Kindergarten · C day
>
> Home → Westview Kindergarten
>
> 8:15am
> in 55 min
>
> Drive 10 min · Arrive 8:25am · Starts 8:30am
>
> [perforation]
>
> Mallory
> Lunch
> Add something else for Mallory
>
> [Remind me] [Directions]

**Today, as shown: later today**

*At the foot of Later today: 1 done this morning.*

| Time | Chips | Item |
| ----- | ----- | ----- |
| 8:30am | Mallory | To Westview Kindergarten · C day |
| 2:30pm | Mallory | Pick up at Westview Kindergarten |
| 2:45pm | Alexis | Pick up at Cedar Grove Elementary |
| 4:00pm | Alexis | Lakeside Strings Music School, with Mallory |

*MVP Editorial shows the conference article, as on C-03, and there is no coach card. The moment is at 7:20am rather than 7:05am because at 7:05am Charlotte is on her way to orchestra, and her pass would read "Running late" by the rule, which is true of the rule and wrong for a demo (issue T72).*

## C-05 · Tuesday, Oct. 13, 12:20pm · Asking her people

*Brightwater Family Therapy's voicemail arrived at 11:50am. The coach does not look up therapists or recommend people, so it tells Charlotte who can help with each part of this, and names Karen as the right person for Alexis's side of it. The card concerns no particular day, so its label names none. The dateline reads "Tuesday afternoon, Oct. 13". Now, Later today and MVP Editorial are as shown below the coach card.*

**Today, as shown: the coach card**

> MVP Coach
>
> Karen Moss is leaving Brightwater Family Therapy in four weeks. Brightwater Family Therapy will assign Alexis a new therapist, and you can ask for a particular person instead of taking the first opening. Karen is the right person to help plan how Alexis finishes, so it is worth raising at her session next Monday, Oct. 19. For therapist names, your parent group at Cedar Grove Elementary is the best place to ask.
>
> [Ask my parent group]
>
> Remind me next Monday, Oct. 19

**Today, as shown: now**

> Pick Mallory up at Westview Kindergarten
>
> Home → Westview Kindergarten
> Then Cedar Grove Elementary, 2:45pm
>
> 2:15pm
> in 1 hr 55 min
>
> Drive 10 min · Arrive 2:25pm · Pickup 2:30pm
>
> [Remind me] [Directions]

*Nothing goes with the pickups, so the pass has no checklist, and the actions sit under the first dashed line.*

**Today, as shown: later today**

*At the foot of Later today: 2 done today.*

| Time | Chips | Item |
| ----- | ----- | ----- |
| 2:30pm | Mallory | Pick up at Westview Kindergarten |
| 2:45pm | Alexis | Pick up at Cedar Grove Elementary |
| 4:00pm | Alexis | Lakeside Strings Music School, with Mallory |

*MVP Editorial shows the conference article, as on C-03 (issue T73).*

*She taps Ask my parent group, which opens a new post on the Team tab, drafted in her words and addressed to her group. She can change any of it before it goes.*

**Team, as shown: the new post**

> New message
>
> Circle | **People**
>
> To: Cedar Grove parents
>
> Alexis's therapist at Brightwater Family Therapy is leaving next month. Has anyone seen someone there they'd recommend for a ten-year-old? She's been going about a year and I'd like to keep her at Brightwater Family Therapy if we can.
>
> [Post]

*Two replies arrive that afternoon. The screen below is as Charlotte sees it at 5:00pm on Tuesday, with the newest reply first. The coach does not read them. Charlotte reads them herself, then adds "Call Brightwater Family Therapy to ask for Dana Whitfield" to Wednesday in the game plan.*

*Each reply arrives as a notification, such as "Jenna Okafor replied to your post in Cedar Grove parents." at 1:40pm, and the group's row on the Team tab shows "1 new" until she opens it.*

**Team, as shown: the post at 5:00pm**

> **You** · 12:20pm
> Alexis's therapist at Brightwater Family Therapy is leaving next month. Has anyone seen someone there they'd recommend for a ten-year-old? She's been going about a year and I'd like to keep her at Brightwater Family Therapy if we can.
>
> **Min-jung Park** · 3:05pm
> Sophie sees Dana Whitfield there and really likes her. She had a wait list in the spring, so I'd ask soon.
>
> **Jenna Okafor** · 1:40pm
> Another vote for Dana. Ask for a Monday after school if you can get one, the evening sessions are hard on a school night.
>
> [Reply]

## C-05b · Tuesday, Oct. 13, 3:40pm · The Westview Kindergarten card changes

*Westview Kindergarten emails every family about a new rule for pickup changes, and Charlotte forwards it to her MVP address from home, before she leaves for violin. The email holds no event for the game plan. It changes reference, so the coach files it on the Westview Kindergarten card and says what changed. The next day, in C-06, the pickup note goes to the new address, which shows why the card matters.*

**Coach, as shown: the read-back**

> From the Westview Kindergarten email, one change for the Westview Kindergarten card. Changes to who picks Mallory up now go to pickups@westviewk.org, by 11:00am on the day, instead of through the family portal. The card shows the new rule and keeps the old one in its history.
>
> From Westview Kindergarten · email, today
>
> [Open the Westview Kindergarten card] [Show the email]

*She taps Open the Westview Kindergarten card. The pickup contact and the pickup rule both carry the Updated mark, and both clear once she has seen them.*

**Kids, as shown: the Westview Kindergarten card, contacts and rules after the change**

| Section | Content |
| ----- | ----- |
| Contacts | Changes to who picks up: pickups@westviewk.org, by 11:00am on the day · Updated |
| Rules | Children are released only to people on the pickup list. Changes to who picks up must reach pickups@westviewk.org by 11:00am on the day. · Updated |
| Earlier version | Changes to who picks up: through the family portal · Until today |
| Documents | Pickup change email, today · Fall food drive flyer, photo, yesterday · Rotation calendar, photo, last week · Family contact list, photo, last week |

**Today, as shown: now**

*Both pickups are done, and violin leads Now.*

> Take Alexis to violin at Lakeside Strings Music School
>
> Home → Lakeside Strings Music School
>
> 3:40pm
> Time to leave
>
> Drive 15 min · Arrive 3:55pm · Starts 4:00pm
>
> [Directions]

*Remind me has gone, because a reminder can no longer help at the leaving time. Later today lists "4:00pm · [Alexis] Lakeside Strings Music School, with Mallory", with "4 done today" at its foot, and MVP Editorial shows the conference article. The coach card from C-05 kept its thread only until she left Today, so there is no coach card (issue T72).*

## C-05c · Tuesday, Oct. 13, 8:15pm · Asking Edward and Claire

*Her people gave Charlotte a name for Alexis's next therapist. How to tell Alexis is a different kind of question, and it belongs with the people closest to the family, so she takes it to her circle rather than her group or the coach. It is her first chat, and she starts it from Team.*

*She opens Team, taps New message and leaves Circle chosen. She ticks Edward and Claire, which is everyone in her circle on MVP. Dr. Ortiz, Karen Moss and Ms. Reyes are listed beneath them as "Not on MVP".*

**Team, as shown: the composer**

> New message
>
> **Circle** | People
>
> To
> [✓] Everyone on MVP
> [✓] Edward · Your husband
> [✓] Claire · Your sister
>
> Dr. Lena Ortiz · Not on MVP
> Karen Moss · Not on MVP
> Ms. Reyes · Not on MVP
>
> People who aren't on MVP can't be in a chat. Call or text them from their page.
>
> Karen is leaving Brightwater Family Therapy next month. The Cedar Grove parents say Dana Whitfield is good, so I'm calling tomorrow to ask for her. How should we tell Alexis? I'd like to do it before Monday's session.
>
> [Send]

*"Everyone on MVP" shows as ticked once both are chosen, because Edward and Claire are everyone in her circle on MVP. She taps Send, and the chat opens.*

**Team, as shown: the chat at 8:42pm**

> Back · Edward and Claire
>
> Only you, Edward and Claire see this chat. The MVP Coach doesn't read it.
>
> **You** · 8:15pm
> Karen is leaving Brightwater Family Therapy next month. The Cedar Grove parents say Dana Whitfield is good, so I'm calling tomorrow to ask for her. How should we tell Alexis? I'd like to do it before Monday's session.
>
> **Claire** · 8:31pm
> Tell her together, and tell her Karen is helping choose who's next. At ten she'll want to know she has a say.
>
> **Edward** · 8:40pm
> Agree. Sunday night, not before school. I'll be home.
>
> **You** · 8:42pm
> Sunday night it is.
>
> Message · [Send]

*Messages are listed oldest first, because a chat is read as a conversation, while the group page lists posts newest first. Claire's and Edward's messages each arrive as a notification: "Claire: Tell her together, and tell her Karen is helping choose who's next." and "Edward: Agree. Sunday night, not before school. I'll be home." (issue A15) Nothing in the chat reaches the plan. If Charlotte wants Sunday night on the plan, she adds it herself, and in the demo she doesn't.*

**Today, as shown: the header**

> Tuesday evening, Oct. 13

**Today, as shown: tomorrow's pass**

> Drive Alexis's carpool to Cedar Grove Elementary
>
> 7:40am · [Tomorrow]
>
> Home → Cedar Grove Elementary
>
> Drive 12 min · Arrive 7:52am · Starts 8:00am
>
> Reminders for tomorrow morning
>
> Alexis
> Pack the lunch and snack tonight to save time in the morning · [✕]
> Add something else for Alexis
>
> [Remind me to leave home]

**Today, as shown: for tomorrow**

| Time | Departure | Checklist |
| ----- | ----- | ----- |
| 8:15am | Leave home at 8:15am to take Mallory to Westview Kindergarten · D day | [Mallory] Pack the lunch and snack tonight to save time in the morning · [Mallory] Sneakers, it's a motor skills day |

*Charlotte took Wednesday's carpool in C-03, so it is hers and leads the board. Ada and the other carpool children are not Charlotte's, so the title names Alexis alone. Alexis's dance bag goes with the 2:15pm pickup run, as on C-06, and that run leaves home without a child, so it is not listed. Nothing needs an answer, so there is no coach card (issue T72).*

## C-06 · Wednesday, Oct. 14, 11:45am · Edward can't do Mallory

*Edward was asked on Monday and said yes, and now his Thursday has changed. At 11:40am he opens the request, taps Change on Mallory's pickup, chooses "No, I can't" and adds a note, and keeps "Yes, I can" on Alexis's. Charlotte gets the notification "Edward changed his answer for tomorrow." This is the moment that shows nothing in the plan is ever settled. Today shows Wednesday, and Thursday's reopened pickup reaches Charlotte through the coach card, which says what Edward can't do and recommends one way through. In the game plan, Mallory's pickup now shows "Edward can't" and Alexis's still shows "Edward: yes". This board is the one the design rounds drew as the example of the quiet layout.*

**Edward's screen, as shown: changing his answer · 11:40am**

> Charlotte is asking you to pick Alexis and Mallory up tomorrow.
> Sent this Monday, 6:40am
>
> Tomorrow · Pick Alexis up at Cedar Grove Elementary, 1:30pm
> Yes, I can · Change
>
> Tomorrow · Pick Mallory up at Westview Kindergarten, 2:30pm
> [Yes, I can] [No, I can't]
>
> Add a note for Charlotte
> Got pulled into a 2:00 Thursday, can't get Mallory at 2:30. I can still do Alexis at 1:30.
>
> [Send answer]

**Edward's screen, as shown: after he sends his answer · 11:40am**

> Charlotte is asking you to pick Alexis and Mallory up tomorrow.
> Sent this Monday, 6:40am
>
> Tomorrow · Pick Alexis up at Cedar Grove Elementary, 1:30pm
> Yes, I can · Change
>
> Tomorrow · Pick Mallory up at Westview Kindergarten, 2:30pm
> No, I can't · Change
>
> Your note: Got pulled into a 2:00 Thursday, can't get Mallory at 2:30. I can still do Alexis at 1:30.
>
> Charlotte can see your answers. If anything changes, change your answer here.

**Today, as shown: the header**

> Wednesday morning, Oct. 14

**Today, as shown: now**

> Pick Mallory up at Westview Kindergarten
>
> Home → Westview Kindergarten
> Then Cedar Grove Elementary, 2:45pm
>
> 2:15pm
> in 2 hr 30 min
>
> Drive 10 min · Arrive 2:25pm · Pickup 2:30pm
>
> [perforation]
>
> Alexis
> Dance bag
>
> Before you leave home
> Call Brightwater Family Therapy to ask for Dana Whitfield
> Brightwater Family Therapy · 707-555-0170 · [Call]
>
> [Remind me] [Directions]

**Today, as shown: the coach card**

> MVP Coach · for tomorrow
>
> Edward can't get Mallory at 2:30pm tomorrow. I'd move your yoga to the 12:15pm class, so you can pick Mallory up yourself.
>
> [Move yoga to 12:15pm]
> Updates your game plan
>
> Other options

**Today, as shown: later today**

*At the foot of Later today: 2 done this morning.*

| Time | Chips | Item |
| ----- | ----- | ----- |
| 2:30pm | Mallory | Pick up at Westview Kindergarten |
| 2:45pm | Alexis | Pick up at Cedar Grove Elementary |
| 3:45pm | Alexis | Studio Ten Dance, with Mallory, with the calendar mark |
| 6:30pm | Family | Dinner with Claire |

**Today, as shown: MVP Editorial**

> MVP Editorial · 3 min read
>
> Fifteen minutes with the teacher: making a conference count
>
> Because Cedar Grove Elementary conferences are this week.

*The button on the card is a shortcut to the coach's recommended option, and "Other options" holds the backups. The product offers both routes, and the demo takes the second. Charlotte taps Other options, and Thursday's Leave sheet rises on Today, scrolled to the coach's backups.*

**Today, as shown: Thursday's Leave sheet, at its foot**

> Leave home for Willow Yoga tomorrow
>
> Tap a time to leave earlier or later. The stops come from your game plan, and that's where they change.
>
> Backup plans
>
> Plan B · Min-jung collects Hana at Westview Kindergarten at 2:30pm and lives two streets from you, so she can bring Mallory home by 2:45pm. You keep the 2:15pm class.
> [Ask Min-jung]
>
> Plan C · Pick Mallory up yourself and skip yoga this week. Tomorrow runs like an ordinary Thursday, and Mallory rides with you to ballet as usual.
> [Skip yoga this week]

*Above the backups, the sheet draws Charlotte's Thursday afternoon from the week table and the travel times: home, leaving at 2:00pm, then Willow Yoga for yoga at 2:15pm with "Conflict: Mallory's pickup", then home, back around 3:25pm. Plan B is an ask, so choosing it opens the draft below and Mallory's pickup shows Min-jung's initial and an hourglass once it is sent. Plan C depends on nobody.*

**Coach, as shown: the full message**

> Tomorrow · Edward: "Got pulled into a 2:00 Thursday, can't get Mallory at 2:30. I can still do Alexis at 1:30."
>
> Edward can still pick Alexis up at 1:30pm, but someone needs to pick Mallory up at Westview Kindergarten at 2:30pm. Edward is on a call in the house from 2:00pm, and Alexis is home from 1:45pm.
>
> MVP Coach recommends
> **Take the 12:15pm class at Willow Yoga.**
> Willow Yoga has a 12:15pm class tomorrow that finishes at 1:15pm. You pick Mallory up at 2:30pm yourself, and nobody else is asked for anything. I would pick this one.
>
> **Ask Min-jung to bring Mallory home.**
> Min-jung collects Hana at Westview Kindergarten at 2:30pm and lives two streets from you, so Mallory is home by 2:45pm. You keep the 2:15pm class.
>
> **Pick Mallory up yourself and skip yoga this week.**
> Tomorrow runs like an ordinary Thursday, and Mallory rides with you to ballet as usual.

*Charlotte taps Ask Min-jung under Plan B. She knows things the coach does not, in this case that the 12:15pm class is not one she likes, and the demo shows that choosing against the recommendation is normal. The sheet closes and Min-jung's draft opens, as below. When she has sent it, she is back on Today, and the coach card keeps the thread, showing the plan she chose beside the check, then what only she can do.*

**Today, as shown: the coach card after Plan B**

> MVP Coach · for tomorrow
>
> Edward can't get Mallory at 2:30pm tomorrow. I'd move your yoga to the 12:15pm class, so you can pick Mallory up yourself.
>
> ✓ Min-jung collects Hana at Westview Kindergarten at 2:30pm and lives two streets from you, so she can bring Mallory home by 2:45pm. You keep the 2:15pm class.
>
> Mallory goes home with Min-jung once Min-jung says yes. Westview Kindergarten only releases Mallory to people on the pickup list, so Westview Kindergarten needs a note from you by 11:00am tomorrow.
>
> [Note to Westview Kindergarten]
> Opens an email for you to send to Westview Kindergarten
>
> Game plan updated

*The recommendation is in muted ink and the plan she chose in full ink, so she sees both, and the chosen plan uses the coach's own Plan B line from the Leave sheet. The follow-up keeps its first sentence, because it is the only line on the card that says the plan still depends on Min-jung. The card has no Undo, because the request to Min-jung has already gone. The full version of the day, with Min-jung dropping Mallory at the house by 2:45pm and the 2:15pm class kept, is in the coach's message on the Coach tab.*

**Today, as shown: the coach card after Plan C**

*The demo takes Plan B. If she taps Skip yoga this week instead, the sheet closes, yoga leaves Thursday's plan, Mallory's pickup becomes hers with no status, and both Conflict marks clear. Edward's "can't" stays in the record of his answers. The card keeps the thread.*

> MVP Coach · for tomorrow
>
> Edward can't get Mallory at 2:30pm tomorrow. I'd move your yoga to the 12:15pm class, so you can pick Mallory up yourself.
>
> ✓ Pick Mallory up yourself and skip yoga this week. Tomorrow runs like an ordinary Thursday, and Mallory rides with you to ballet as usual.
>
> Yoga is out of tomorrow's plan. If you booked the 2:15pm class at Willow Yoga, cancel it there.
>
> [Open the game plan]
>
> Undo
>
> Game plan updated

*Plan C sends nothing to anyone, so it keeps Undo until she leaves Today (issue T89).*

*Both messages are drafted in Charlotte's voice, and she sends each one herself. Min-jung has MVP, so her request arrives as a card in her own MVP. The Westview Kindergarten office is outside MVP, so MVP hands the note to Charlotte's email app, addressed to the pickup changes contact on the Westview Kindergarten card, which the Westview Kindergarten email updated in C-05b. Sending it adds "Send Westview Kindergarten the pickup note" to her list, where it stays until she ticks it off.*

> To Min-jung Park
>
> Hi Min-jung, could you bring Mallory home with Hana tomorrow? Edward got pulled into a meeting and I'm at yoga until 3:15pm. We're on Linden, right on your way, and Edward will be home to meet her. Happy to return the favor.
>
> [Send]

> To Westview Kindergarten, pickup changes · pickups@westviewk.org
>
> Min-jung Park will pick Mallory up from Room 3 tomorrow at 2:30pm. Please let me know if you need anything else. Thank you, Charlotte
>
> [Send from Mail]

*Send from Mail hands the note to her email app, staged in the prototype, and returns her to Today with "Send Westview Kindergarten the pickup note" on her list.*

**Min-jung's screen, as shown: the request · 11:50am**

*Charlotte sends the request to Min-jung at 11:50am. Min-jung has MVP, so it arrives as a card in her MVP with the notification "Charlotte asked you about picking Mallory up tomorrow." She sees this request and nothing else of Charlotte's plan.*

> Charlotte is asking you to bring Mallory home with Hana tomorrow.
> Sent 11:50am
>
> Hi Min-jung, could you bring Mallory home with Hana tomorrow? Edward got pulled into a meeting and I'm at yoga until 3:15pm. We're on Linden, right on your way, and Edward will be home to meet her. Happy to return the favor.
>
> Tomorrow · Pick Mallory up at Westview Kindergarten, 2:30pm
> [Yes, I can] [No, I can't]
>
> Add a note for Charlotte

*Min-jung taps "Yes, I can" at 12:30pm and adds no note. Her card then shows "Yes, I can · Change" and the line "Charlotte can see your answers. If anything changes, change your answer here."*

*Min-jung answers at 12:30pm, and Mallory's pickup changes to "Min-jung: yes". Charlotte gets the notification "Min-jung: yes to tomorrow." (issue A15).*

*If she had tapped Move yoga to 12:15pm instead, yoga would move to 12:15pm on Thursday and Mallory's pickup would change from "Edward can't" to "You", with no Updated mark, because the change is hers. Alexis's pickup would stay "Edward: yes". Nothing would change on her Google Calendar, because yoga is not on it, and Willow Yoga would still need booking. The card would then keep the thread, as below, until she leaves Today: the recommendation in muted ink, "Agreed" beside the check, and only what comes next. Undo would put yoga back at 2:15pm and Mallory's pickup back to "Edward can't", and return the card to its first form, with Move yoga to 12:15pm and Other options. Book at Willow Yoga opens willow.example in her browser, staged in the prototype, and Today keeps the card.*

> MVP Coach · for tomorrow
>
> Edward can't get Mallory at 2:30pm tomorrow. I'd move your yoga to the 12:15pm class, so you can pick Mallory up yourself.
>
> ✓ Agreed
>
> Book the 12:15pm class with Willow Yoga so your spot is held.
>
> [Book at Willow Yoga]
>
> Undo
>
> Game plan updated

*If she taps Remind me on Now, the sheet below opens, with the first choice preselected. Charlotte does not set a reminder on Wednesday, so the set state and the notification here exist for the wireframes.*

> Remind me to leave home
>
> For 2:15pm · Westview Kindergarten
>
> At 2:00pm · 15 min before
> At 1:45pm · 30 min before
> When it's time to leave · at 2:15pm, with traffic checked
>
> [Set reminder]

*Once set, the button reads "Reminder at 2:00pm", and the pass carries the reminder nowhere else. Reopening the sheet shows 15 min before selected, the button "Update reminder" and the link "Remove reminder". At 2:00pm the notification arrives.*

> Leave home in 15 min for Westview Kindergarten, then Cedar Grove Elementary
>
> Take Alexis's dance bag, and call Brightwater Family Therapy before you go.
>
> [Directions] [Snooze 5 min]

## C-06b · Wednesday, Oct. 14, 1:15pm · A checkup lands on Friday

*The Northside Pediatrics portal reminded Charlotte at 9:00am that Mallory's six-year checkup is due. At lunch she books it in the portal herself, taking the first opening, Friday at 3:30pm, and the portal adds it to her Google Calendar. She sends MVP nothing. MVP reads the new event from her calendar, adds it to Friday as hers, because she booked it herself, and sees that it runs into Mallory's tutoring. The conflict is two days away, so the coach card turns to Friday with a way through. This is the moment that shows her calendar keeping the plan current, with her asked only for the choice the conflict needs.*

**Today, as shown: the header**

> Wednesday afternoon, Oct. 14

**Today, as shown: now**

> Pick Mallory up at Westview Kindergarten
>
> Home → Westview Kindergarten
> Then Cedar Grove Elementary, 2:45pm
>
> 2:15pm
> in 1 hr
>
> Drive 10 min · Arrive 2:25pm · Pickup 2:30pm
>
> [perforation]
>
> Alexis
> Dance bag
>
> Before you leave home
> Call Brightwater Family Therapy to ask for Dana Whitfield
> Brightwater Family Therapy · 707-555-0170 · [Call]
> Send Westview Kindergarten the pickup note
> pickups@westviewk.org · [Send from Mail]
>
> [Remind me] [Directions]

*Call opens her phone app with Brightwater Family Therapy's number, staged in the prototype. Send from Mail reopens the note to Westview Kindergarten from C-06 in her email app. Tapping either row anywhere but its button ticks it. If she taps Remind me, the sheet is the one in C-06, because the leaving time and the stop are the same and both choices are still ahead. Once set, the button reads "Reminder at 2:00pm". When she ticks the dance bag, Alexis's group folds to "Alexis · 1 packed", and when she ticks both tasks, her tasks fold to "Before you leave home · 2 done". With every group ticked, the checklist folds to "Everything is packed for 2:15pm".*

**Today, as shown: the reminder sheet in C-06b**

> Remind me to leave home
>
> For 2:15pm · Westview Kindergarten
>
> At 2:00pm · 15 min before
> At 1:45pm · 30 min before
> When it's time to leave home · at 2:15pm, with traffic checked
>
> [Set reminder]

**Today, as shown: the coach card**

> MVP Coach · for this Friday
>
> Mallory's checkup at Northside Pediatrics this Friday at 3:30pm is in your plan, from your Google Calendar, and it overlaps tutoring with Ms. Reyes. I'd skip tutoring this Friday, because Mallory's new weekly tutoring with Ms. Reyes starts next Tuesday, Oct. 20.
>
> [Skip tutoring this Friday]
> Opens a text for you to send to Ms. Reyes
>
> Other options

**Game plan, as shown: Friday, with the checkup in the plan**

*There is no review card, because nothing is waiting for her to choose. Monday and Tuesday are folded to "Earlier this week · 11 done". Today, Wednesday, is open with "2 done" and the rest of the afternoon, and Thursday is open beneath it, with Edward's initial and a thumbs up on Alexis's pickup and Min-jung's on Mallory's. Friday holds a decision, so it opens expanded with the week strip's dot, and reads "8 items": the checkup at 3:30pm with the calendar mark before it and "Conflict: tutoring", and tutoring at 3:00pm with "Conflict: the checkup" above Charlotte's note. The checkup carries no mark for being new. Saturday and Sunday are collapsed.*

*If she is on the game plan when the coach adds the checkup, the read-back strip rises above the capture bar instead.*

> MVP Coach · for this Friday
>
> Mallory's checkup this Friday at 3:30pm is in your plan, from your Google Calendar. It overlaps tutoring with Ms. Reyes, so I'd skip tutoring this Friday.
>
> [Skip tutoring this Friday]
> Opens a text for you to send to Ms. Reyes
>
> Other options

**Today, as shown: later today**

Later today is the same as in C-06, with "2 done today" at its foot, because C-06b is after noon.

*Other options opens Friday's Leave sheet on Today, scrolled to the coach's backups. There is one honest backup, and the sheet says so.*

**Today, as shown: Friday's Leave sheet, at its foot**

> Leave home for Northside Pediatrics
>
> This Friday afternoon
>
> Tap a time to leave earlier or later. The stops come from your game plan, and that's where they change.
>
> Backup plans
>
> Plan B · Call Northside Pediatrics for a time after 3:45pm or on another day, and this Friday stays as it is.
> [Call Northside Pediatrics]
>
> I don't see another way that keeps both this Friday.

*Above the backup, the sheet draws the run the backup is for, which is the checkup's: home, leaving at 3:10pm, then Northside Pediatrics for the checkup at 3:30pm with "Conflict: tutoring", leaving at 4:15pm when the checkup ends, then home, back around 4:30pm. The afternoon pickup is a run of its own and stays off this sheet, because a Leave sheet draws one run (issue T87). Call Northside Pediatrics opens her phone app with the number for Northside Pediatrics, staged in the prototype, and a call leaves no task.*

*The same backups are on the checkup's page in the game plan, which she reaches by tapping the checkup there.*

**Game plan, as shown: the checkup's page**

> Back
>
> [Mallory] Checkup, Northside Pediatrics
> This Friday · 3:30pm · Northside Pediatrics
> Conflict: tutoring
>
> Owner
> You · Ask for help
>
> Note
> Add a note
>
> From your Google Calendar
>
> Backup plans
> I'd skip tutoring this Friday, because Mallory's new weekly tutoring with Ms. Reyes starts next Tuesday, Oct. 20.
> [Skip tutoring this Friday]
> Opens a text for you to send to Ms. Reyes
>
> Plan B · Call Northside Pediatrics for a time after 3:45pm or on another day, and this Friday stays as it is.
> [Call Northside Pediatrics]
>
> I don't see another way that keeps both this Friday.
>
> Change this in Google Calendar.
>
> Take this out of the plan

**Coach, as shown: the full message**

> This Friday · Mallory's checkup at Northside Pediatrics at 3:30pm is new on your Google Calendar. Mallory is at tutoring with Ms. Reyes in the library at Westview Kindergarten from 3:00pm to 3:45pm, so the two overlap.
>
> MVP Coach recommends
> **Skip tutoring this Friday.**
> You pick Mallory up at Westview Kindergarten at 2:30pm and Alexis at Cedar Grove Elementary at 2:45pm, and you leave home for Northside Pediatrics at 3:10pm. Ms. Reyes gets a text from you. I would pick this one, because Mallory's new Tuesday session starts next week, so Mallory sees Ms. Reyes again in four days.
>
> **Move the checkup.**
> Call Northside Pediatrics for a time after 3:45pm or on another day, and this Friday stays as it is. The call goes on your list for this afternoon.

*Once the checkup is in the plan, it and the tutoring session both show the Conflict mark naming the other until Charlotte chooses. The checkup carries the calendar mark and the source link "From your Google Calendar". Charlotte taps Skip tutoring this Friday on the card, and the coach drafts the text. Ms. Reyes doesn't have MVP, so the request goes as a text message with a link to the single web page, the route nobody else in Charlotte's week uses.*

> To Ms. Reyes
>
> Ms. Reyes, Mallory has an appointment at 3:30pm this Friday and will miss tutoring this week. Going forward, Tuesdays at 3:00pm will work best for us. Please confirm. Thank you, Charlotte
>
> [Send]

*She sends it at 1:20pm, and Friday's tutoring shows "Asked Ms. Reyes". Ms. Reyes gets a text message from MVP with the link.*

**Ms. Reyes's phone, as shown: the text · 1:20pm**

> Charlotte sent you a request through MVP. You can answer here: mvp.example/r/k7m2

**Ms. Reyes's web page, as shown**

> Charlotte is asking you to skip Mallory's tutoring this Friday.
> Sent 1:20pm
>
> Ms. Reyes, Mallory has an appointment at 3:30pm this Friday and will miss tutoring this week. Going forward, Tuesdays at 3:00pm will work best for us. Please confirm. Thank you, Charlotte
>
> This Friday · Mallory · Tutoring with Ms. Reyes, Westview Kindergarten library, 3:00pm
> [Yes, I can] [No, I can't]
>
> Add a note for Charlotte
>
> You don't need MVP to answer.

*Ms. Reyes answers "Yes, I can" on the web page at 3:10pm. The page then shows her answer with a Change link and the line "Charlotte can see your answer. If anything changes, change your answer here." Charlotte gets the notification "Ms. Reyes: yes to this Friday." Friday's tutoring and the 3:45pm pickup leave the plan, Mallory's pickup moves to 2:30pm, and the checkup stays at 3:30pm. The same text covers the note Charlotte left on Friday's tutoring in C-04, so that note goes too. MVP changes nothing on her Google Calendar.*

## C-06c · Wednesday, Oct. 14, 4:50pm · A message to Claire

*Dinner with Claire is at 6:30pm. Charlotte checks in with her sister directly, which shows a direct message started from a person's page and a reply arriving while she is elsewhere in the app.*

*She opens Team, taps Claire and taps Message. There is no chat with Claire alone yet, so the composer opens with Circle chosen and only Claire ticked.*

> New message
>
> To: Claire
>
> Still on for 6:30 tonight?
>
> [Send]

*At 4:58pm Claire answers. Charlotte is on Today, so the reply arrives as a notification, the Team tab gains a dot, and the chat's row shows "1 new" until she opens it.*

> Claire: Yes, see you at 6:30. I'll bring dessert.

**Team, as shown: the chat**

> Back · Claire
>
> Only you and Claire see this chat. The MVP Coach doesn't read it.
>
> **You** · 4:50pm
> Still on for 6:30 tonight?
>
> **Claire** · 4:58pm
> Yes, see you at 6:30. I'll bring dessert.
>
> Message · [Send]

**Today, as shown**

*Today matches the board "Wednesday, Oct. 14, 5:10pm · A timed thing at home", except that the pill reads "in 1 hr 40 min". Later today shows its heading and "5 done today", with no rows. Ms. Reyes answered at 3:10pm, and the coach card for Friday kept its thread only until Charlotte left Today, so there is no coach card (issue T72).*

## C-07 · Wednesday, Oct. 14, 9:10pm · Tonight

*After dinner the dateline reads "Wednesday evening, Oct. 14" and Today turns to the morning ahead. It shows what has to be ready tonight and how tomorrow starts, and it leaves the rest of Thursday to the game plan. Everyone asked about Thursday has answered, so the coach needs nothing from her and no coach card appears.*

**Today, as shown: the header**

> Wednesday evening, Oct. 14

**Today, as shown: tomorrow's pass**

> Take Alexis to orchestra at Cedar Grove Elementary
>
> 6:55am · [Tomorrow]
>
> Home → Cedar Grove Elementary
>
> Drive 12 min · Arrive 7:07am · Starts 7:15am
>
> Reminders for tomorrow morning
>
> Alexis
> Put the violin case and orchestra folder by the front door for the 6:55am start · [✕]
> Pack the lunch and snack tonight to save time in the morning · [✕]
> Add something else for Alexis
>
> [Remind me to leave home]

**Today, as shown: for tomorrow**

| Time | Departure | Checklist |
| ----- | ----- | ----- |
| 8:15am | Leave home at 8:15am to take Mallory to Westview Kindergarten · E day | [Mallory] Pack the lunch and snack tonight to save time in the morning |
| 3:55pm | Leave home at 3:55pm to take Mallory to ballet at Studio Ten Dance | [Mallory] Pack the ballet bag tonight, because you leave for ballet at 3:55pm tomorrow |

*Tomorrow's first departure is hers, so it leads the board as a single-leg pass: Alexis is the only child on it and it has one stop. Its checklist holds only what goes with Alexis at 6:55am. Mallory's lunch goes with the 8:15am departure and the ballet bag with the 3:55pm one, so each item appears once, and "Both · Lunches" of version 3.26 is gone. For tomorrow lists her later departures tomorrow that take a child, so Edward's pickup at 1:30pm and her own yoga at 2:00pm stay in the game plan. Alexis's early day, out at 1:30pm, is no longer on the checklist, because Edward collects her and there is nothing to pack for it. Each row opens the Leave sheet for that leg, so she can change tomorrow's leaving time tonight, and on screen each row's items are grouped under "Mallory". When she ticks Alexis's items, the pass's list folds to "Everything is packed for 6:55am", because Mallory's items are still open, and once those are ticked too it reads "Everything is ready for tomorrow morning." The board shows her reminders before she has ticked them.*
## C-08 · Thursday, Oct. 15, 8:40pm · A question for the coach

*This is the coach as the second half of the product, answering the kind of question Charlotte would otherwise post on Reddit. The answer starts from the fact that she is struggling, gives her something specific to do tonight, and shows the family details it was based on. The staff article attached below it carries the longer version. Charlotte says "8am" because parents round, but the coach uses the real time.*

> "Mallory fights me every single morning about clothes and tomorrow is picture day. How do I get through 8am without a meltdown?"

> Mornings with Mallory are wearing you down, and picture day raises the stakes. Settle the outfit tonight: put the green dress out next to one other outfit Mallory likes, and let Mallory choose between the two before bed. A six-year-old who has already chosen has much less to fight about at 7:40am, and the choice is real because you are happy with either answer. If Mallory has second thoughts in the morning, the other outfit is ready, and the green dress can go in Mallory's backpack for the photo.

**Coach, as shown under the answer**

> Based on
> Mallory, 6, kindergarten at Westview Kindergarten · Picture day tomorrow · Your note about the green dress · You leave home with Mallory at 7:40am

**Coach, as shown: attached article**

> MVP Editorial · 4 min read
>
> Two outfits, not twenty: getting dressed without the standoff

**Today, as shown: the header**

> Thursday evening, Oct. 15

**Today, as shown: tomorrow's pass**

> Drive Alexis's carpool, then take Mallory to Westview Kindergarten
>
> 7:40am · [Tomorrow]
>
> Home → Cedar Grove Elementary → Westview Kindergarten

| Time | Step |
| ----- | ----- |
| 7:40am | Leave home |
| 7:52am | [Alexis] Cedar Grove Elementary · Drop off · Starts 8:00am |
| 8:10am | Leave Cedar Grove Elementary |
| 8:22am | [Mallory] Westview Kindergarten · Drop off · F day · Starts 8:30am |
| 8:40am | Back home |

> Reminders for tomorrow morning
>
> Alexis
> Pack the lunch and snack tonight to save time in the morning · [✕]
> Add something else for Alexis
>
> Mallory
> Pack the lunch and snack tonight to save time in the morning · [✕]
> The green dress for picture day, hanging in the laundry room · [✕]
> Sneakers, it's a motor skills day · [✕]
> Add something else for Mallory
>
> [Remind me to leave home]

**Today, as shown: for tomorrow**

| Time | Departure | Checklist |
| ----- | ----- | ----- |
| 3:10pm | Leave home at 3:10pm to take Mallory to the checkup at Northside Pediatrics | |

*Friday's carpool has two children and two stops, so it is a trip pass. Ada and Sophie ride along and are not named, because they are not Charlotte's children. The dress comes from Charlotte's note on picture day, and C-01 already put Mallory's outfit on this Thursday night's list. Alexis's free dress day needs nothing packed. The checkup has nothing to pack, so its row shows the departure alone. Charlotte's conference and the afternoon pickups leave home without a child, so they stay in the game plan. Nothing needs an answer, so there is no coach card, and the evening shows no MVP Editorial, as on C-07 (issue T72).*

## C-08b · Thursday, Oct. 15, 9:05pm · A question for Dr. Ortiz

*A few minutes after the picture day answer, Charlotte asks something the coach must not answer itself. The coach doesn't give medical advice, so it names the person in her circle who can, gives her the way to reach that person tonight, and connects the question to the checkup already in her plan. This is the only moment that shows the coach handing a question to a professional.*

> "Mallory's had a cough since Tuesday. Should she skip picture day tomorrow?"

> Whether Mallory is well enough for school tomorrow is a question for Dr. Ortiz, so call Northside Pediatrics tonight. The after-hours nurse line at Northside Pediatrics is the same number, 707-555-0160. Mallory already sees Dr. Ortiz tomorrow at 3:30pm for the six-year checkup, so the cough can go on the list for that visit as well.

**Coach, as shown under the answer**

> [Call Northside Pediatrics]
>
> Add the cough to tomorrow's checkup
>
> Based on
> Dr. Lena Ortiz, Northside Pediatrics, in your circle · Mallory's checkup tomorrow at 3:30pm

*No article is attached, because a medical question gets a person, not reading. Call Northside Pediatrics opens her phone app with the number, and it leaves no task. Charlotte taps "Add the cough to tomorrow's checkup", and the checkup in the game plan gains the note "Ask Dr. Ortiz about Mallory's cough". The note is her action, so it carries no Updated mark. The coach's line underneath reads as below.*

> The note is on tomorrow's checkup.

**Today, as shown**

*Today is the same as in C-08, because the note about the cough goes on the checkup's page and not on Today (issue T72).*

## C-09 · Sunday, Oct. 18, 7:30pm · Looking ahead to next week

*The house is quiet on Sunday evening, and Today turns to next week. This moment shows the Sunday look-ahead, something that was hers to choose joining the plan, and capture on the game plan. Earlier on Sunday Charlotte texted Lakeside Strings Music School from the coach card on the 10:30am board, and Lakeside Strings Music School moved Alexis's Monday lesson to 4:45pm, so violin on Monday carries the Updated mark and no conflict. Westview Kindergarten's harvest fair has been on the Westview Kindergarten card since C-00, and with its week arriving it is the one thing on the review card, because a fair is a choice. It runs into Mallory's Friday tutoring.*

**Today, as shown: the header**

> Sunday evening, Oct. 18

**Today, as shown: tomorrow's pass**

> Alexis takes the Parks' carpool to Cedar Grove Elementary
>
> 7:40am · [Tomorrow]
>
> Home → Cedar Grove Elementary
>
> With The Parks · Starts 8:00am
>
> Reminders for tomorrow morning
>
> Alexis
> Library book · [✕]
> Lunch · [✕]
> Add something else for Alexis
>
> [Remind me]

**Today, as shown: for tomorrow**

| Time | Departure | Checklist |
| ----- | ----- | ----- |
| 8:15am | Leave home at 8:15am to take Mallory to Westview Kindergarten · A day | [Mallory] Library book, it's an A day · [Mallory] Lunch |

*Alexis rides with the Parks, so the pass has no chevron, shows With and Starts, and offers Remind me rather than Remind me to leave home. Each item appears once, under the departure it goes with.*

**Today, as shown: the coach card**

> MVP Coach · for next week
>
> Westview Kindergarten's harvest fair is next Friday, Oct. 23, from 3:00pm to 5:00pm, and Mallory has tutoring with Ms. Reyes at 3:00pm that day. Do you want the fair in your plan?
>
> [Add the fair]
> Updates your game plan
>
> No thanks

*She taps Add the fair. The fair joins Friday as hers, the fair reads "Conflict: tutoring" and tutoring reads "Conflict: the harvest fair", and the card turns to the way through.*

> MVP Coach · for next week
>
> The harvest fair next Friday, Oct. 23, at 3:00pm overlaps Mallory's tutoring with Ms. Reyes. I'd skip tutoring next Friday, because Mallory sees Ms. Reyes next Tuesday, Oct. 20, at 3:00pm.
>
> [Skip tutoring next Friday]
> Opens a text for you to send to Ms. Reyes
>
> Other options

*Other options opens next Friday's Leave sheet at its backups. The fair and tutoring are both at Westview Kindergarten, so Plan B keeps both and depends on nobody.*

**Today, as shown: next Friday's Leave sheet**

> Leave home for Cedar Grove Elementary
>
> Next Friday afternoon, Oct. 23 · 2 stops
>
> Tap a time to leave earlier or later. The stops come from your game plan, and that's where they change.

| Station | Item | Leave |
| ----- | ----- | ----- |
| Home | | Leave home at 2:25pm |
| Cedar Grove Elementary | 2:45pm · [Alexis] Pick up at Cedar Grove Elementary | Leave Cedar Grove Elementary at 2:45pm |
| Westview Kindergarten | 3:00pm · [Mallory] Harvest fair · Conflict: tutoring | Leave Westview Kindergarten at 5:00pm |
| Home | | Back around 5:10pm |

*She can't leave Cedar Grove Elementary before Alexis is due at 2:45pm, so the leg to the fair leaves then and arrives at 2:57pm. Westview Kindergarten keeps kindergartners in class until the fair opens, so Mallory's pickup sits inside the fair rather than being a station of its own (issue G48).*

> Backup plans
>
> Plan B · Mallory goes to tutoring at 3:00pm, and you meet Mallory at the fair at 3:45pm. Both are at Westview Kindergarten, and the fair runs until 5:00pm.
> [Keep both next Friday]

*Charlotte taps Skip tutoring next Friday, and the coach drafts the text. Ms. Reyes answers on her web page, as in C-06b, and Friday's tutoring leaves the plan when she does.*

> To Ms. Reyes
>
> Hi Ms. Reyes, Westview Kindergarten's harvest fair is next Friday, Oct. 23, at 3:00pm, so Mallory will skip tutoring that day. We'll see you next Tuesday, Oct. 20, at 3:00pm. Thank you, Charlotte
>
> [Send]

*Ms. Reyes gets a text message from MVP with the link, as in C-06b.*

**Ms. Reyes's web page, as shown**

> Charlotte is asking you to skip Mallory's tutoring next Friday, Oct. 23.
> Sent 7:31pm
>
> Hi Ms. Reyes, Westview Kindergarten's harvest fair is next Friday, Oct. 23, at 3:00pm, so Mallory will skip tutoring that day. We'll see you next Tuesday, Oct. 20, at 3:00pm. Thank you, Charlotte
>
> Next Friday, Oct. 23 · Mallory · Tutoring with Ms. Reyes, Westview Kindergarten library, 3:00pm
> [Yes, I can] [No, I can't]
>
> Add a note for Charlotte

*Back on Today, the card says how next week stands.*

> MVP Coach · for next week
>
> Mallory goes to the harvest fair next Friday, Oct. 23, once Ms. Reyes says yes, and Mallory's new session with Ms. Reyes starts next Tuesday, Oct. 20, at 3:00pm.
>
> [Open the game plan]
>
> Game plan updated

**Game plan, as shown: next week, opened from the card**

*The agenda opens at next week, because this week is over. There is no review card, because nothing is waiting. Monday shows violin at 4:45pm with the Updated mark and therapy at 3:30pm with no conflict. Tuesday shows Mallory's new session at 3:00pm, "[Mallory] Second tutoring session, Westview Kindergarten library". Friday shows the harvest fair at 3:00pm and tutoring at 3:00pm with Ms. Reyes's initial and an hourglass.*

*She remembers something for the fair and types it into the capture bar.*

> Mallory needs a small pumpkin to paint at the fair

*She taps the arrow, and the read-back rises above the bar.*

> MVP Coach · for next Friday, Oct. 23
>
> A small pumpkin is on Mallory's list for the harvest fair next Friday, Oct. 23.

*Nothing is unresolved, so the strip has no button, and it goes when she scrolls. The pumpkin is hers, because she said it, and it joins next Friday morning's checklist under "Mallory" as "A small pumpkin to paint at the fair", with no source link and no mark (issue G47).*

## The day in full: Thursday

| Time | Who | What | Status |
| ----- | ----- | ----- | ----- |
| 6:55am | Charlotte | Leaves with Alexis for orchestra. Mallory stays home with Edward. | |
| 7:15am | Alexis | Orchestra at Cedar Grove Elementary | |
| 7:20am | Charlotte | Home | |
| 8:15am | Charlotte | Leaves with Mallory | |
| 8:25am | Mallory | At Westview Kindergarten | |
| 1:15pm | Edward | Leaves for Cedar Grove Elementary | Edward: yes |
| 1:30pm | Edward | Collects Alexis at the Oak Street gate | Edward: yes |
| 1:45pm | Edward | Home with Alexis | |
| 2:00pm | Edward | Meeting until 3:00pm, working from home | |
| 2:00pm | Charlotte | Leaves for Willow Yoga | |
| 2:15pm to 3:15pm | Charlotte | Yoga | |
| 2:30pm | Min-jung Park | Collects Mallory with Hana at Westview Kindergarten | Min-jung: yes |
| 2:45pm | Min-jung Park | Drops Mallory at home | Min-jung: yes |
| 3:30pm | Charlotte | Home | |
| 3:55pm | Charlotte | Leaves with Mallory and the ballet bag | |
| 4:15pm to 5:00pm | Mallory | Ballet at Studio Ten Dance | |
| 5:15pm | Charlotte | Home with Mallory | |

## If Min-jung says no

*If Min-jung taps "No, I can't", Mallory's pickup shows "Min-jung can't" in the game plan, and the coach card comes back with the coach's first recommendation. Other options holds the one Charlotte has not tried, skipping yoga this week.*

> MVP Coach · for tomorrow
>
> Min-jung can't bring Mallory home tomorrow. I'd move your yoga to the 12:15pm class, so you can pick Mallory up yourself.
>
> [Move yoga to 12:15pm]
> Updates your game plan
>
> Other options


*Other options opens Thursday's Leave sheet with one backup left. The coach's first recommendation is already on the card, and Min-jung has said no, so the sheet holds only the plan that depends on nobody.*

> Plan B · Pick Mallory up yourself and skip yoga this week. Tomorrow runs like an ordinary Thursday, and Mallory rides with you to ballet as usual.
> [Skip yoga this week]
>
> I don't see another way for tomorrow.

## If Ms. Reyes says no

*If Ms. Reyes taps "No, I can't" on the web page instead, the page shows her answer with a Change link and the same line as after a yes. Charlotte gets the notification "Ms. Reyes can't do this Friday." Friday's tutoring stays in the plan with Ms. Reyes's initial and a thumbs down, both it and the checkup keep the Conflict mark, and the coach card returns for Friday with the one backup left.*

**Ms. Reyes's web page, as shown: after she answers no**

> Charlotte is asking you to skip Mallory's tutoring this Friday.
> Sent 1:20pm
>
> This Friday · Mallory · Tutoring with Ms. Reyes, Westview Kindergarten library, 3:00pm
> No, I can't · Change
>
> Charlotte can see your answer. If anything changes, change your answer here.
>
> You don't need MVP to answer.

**Today, as shown: the coach card after Ms. Reyes says no**

> MVP Coach · for this Friday
>
> Ms. Reyes can't take the change to this Friday's tutoring, so Mallory's checkup still overlaps it. I'd call Northside Pediatrics for a time after 3:45pm or on another day.
>
> [Call Northside Pediatrics]
>
> Not now

*Call Northside Pediatrics opens her phone app, staged in the prototype, and leaves no task. Not now hides the card until she opens Today again. There is no Other options, because the call is the only honest way through, and the item's page says so in the words of C-06b.*

**Ms. Reyes's web page, as shown: changing her answer**

*Change on either answer opens the item's buttons again with the note field and Send answer, as on Edward's card in C-06.*

> Charlotte is asking you to skip Mallory's tutoring this Friday.
> Sent 1:20pm
>
> This Friday · Mallory · Tutoring with Ms. Reyes, Westview Kindergarten library, 3:00pm
> [Yes, I can] [No, I can't]
>
> Add a note for Charlotte
>
> [Send answer]
>
> You don't need MVP to answer.

## The weekend Charlotte is away

*These five moments come the week after the demo week and are a route of their own in the prototype, starting point C, "The weekend Charlotte is away". The nickname in the team is auto pilot, and it never appears on screen. Charlotte is on the board of the Brightpath Reading Foundation, a children's literacy nonprofit, and its board goes away for a weekend offsite at Harlow Lake Lodge from Friday, Oct. 23 to Sunday, Oct. 25. She flies with Larkspur Air from Bayview Regional Airport, 35 minutes from home, and drives herself there and back. While she is away she does not want to hear from MVP unless Edward needs her, so with the coach she builds a playbook, the part of her plan for those days handed to Edward with everything he needs to run it, day by day and child by child, and MVP stays quiet until she is home. C-14, the late flight, was retired on Nov. 20, 2026, when the airport rides left the playbook, and its ID is not reused.*

*The route pushes against three locked decisions, and Greg approved each on Nov. 19, 2026 for this journey only. Edward sees the days of her plan she puts in the playbook, which is more than a single request. While the playbook runs, anything new for those days goes to Edward without Charlotte sending it, because she ticked one line on the playbook that says so. Edward has the MVP Coach for those days, because the family plan includes it, so coach cards appear on his Today as well as hers.*

*Heather's fourth wording review, on Nov. 20, 2026, asked that the playbook spell out what is in a parent's head: each day in order from the moment Charlotte leaves, and under each day what each child needs, down to the bedtime routine, the gift, the cash for the fair and dinner. The coach drafts all of it from what MVP already holds, and Charlotte edits it before Edward sees it.*

## C-10 · Monday, Oct. 19, 8:20pm · The coach sees the weekend

*At 8:05pm Charlotte forwards the Larkspur Air itinerary to her forwarding address. The flights reach the plan as hers, and the coach sees that from 10:00am this Friday, when she leaves home for the airport, until about 7:30pm this Sunday, when she is home again, she can drive nobody. Four things that weekend are hers: picking Alexis up on Friday, the harvest fair with Mallory, and taking both girls to Sophie Park's birthday party on Saturday and bringing them home. This is not one pickup to hand over, so the coach card recommends a playbook rather than a request. The rest of Monday evening's Today is as on any Monday, with tomorrow's 6:55am pass for orchestra.*

**Today, as shown: the coach card**

> MVP Coach · for this Friday to Sunday
>
> You're away from 10:00am this Friday until about 7:30pm this Sunday, and four things that weekend are yours. I'd hand the weekend to Edward in one playbook.
>
> [Build a weekend playbook]
> Opens your game plan
>
> Hand things over one at a time

*The second link opens the game plan at this Friday, where she could ask for help on each item as in C-04. She taps Build a weekend playbook, and the game plan opens with the sheet "Who should help while you are away?".*

## C-11 · Monday, Oct. 19, 8:22pm · Building the weekend playbook

*The game plan opens in its Playbook view, which covers the days she is away. Before the coach drafts anything, Charlotte chooses who the weekend goes to, because the coach's recommendation of Edward is only a suggestion. A sheet lists the adults in her circle who can drive and stay with the girls, with Edward ticked because he is home this weekend. She has talked to Ruth Delgado, the neighbor who has watched the girls before, so she adds Ruth to her circle from the same sheet. She keeps Edward, and Ruth becomes the backup for the evenings. Ruth does not have MVP.*

**Game plan, as shown: the sheet "Who should help while you are away?"**

> Who should help while you are away?
> The MVP Coach suggests Edward, because he is home this weekend. Choose who looks after the girls while you're away.
>
> [✓] Edward · Your husband
> [ ] Claire · Your sister
> [ ] Ruth Delgado · Next door
>
> + Add someone
>
> [Make the playbook for Edward]

*Ruth's row is new, added with + Add someone a moment before. The button names her choice, so it would read "Make the playbook for Claire" if she ticked Claire. The coach then drafts the playbook from what MVP already knows. Her items come from her game plan, the routines from her evening reminders and the girls' pages on the Kids tab, the flights and the stay from her itinerary, and dinner from the coach itself, because the fair ends at dinnertime and the coach suggests what to eat when the plan puts a meal on the road. Everything the coach drafts is a suggestion: it suggests Edward only for what is already hers on those days and adds nothing new for him to own, because a playbook that hands him extra work is not one he can be expected to agree to. A box in the coach's tint at the top says so, and every part has a Change link, so editing is the first thing she sees rather than a line she might miss.*

*The playbook runs one day at a time, in order, starting when she leaves home on Friday. Under each day, what concerns one child sits under that child's name, set as a checklist heading, and what concerns both girls sits under "Both". Each row starts with its time. A part suggested for Edward ends "Suggested for Edward" and a Change link. A line in Meta under a row says what only a parent would know.*

**Game plan, as shown: the playbook, as the coach drafts it**

> Weekend playbook
> This Friday, Oct. 23 to this Sunday, Oct. 25
>
> You leave home at 10:00am this Friday for your 12:10pm flight, and you're home about 7:30pm this Sunday.
>
> [MVP Coach] These are the MVP Coach's suggestions. Change anything that won't work for Edward before you send it.
>
> Edward's weekend plan · [Not sent yet]
> From your game plan, your evening reminders and the girls' pages
>
> This Friday
> 10:00am · You leave home for Bayview Regional Airport
>
> Alexis
> 2:45pm · Pick up at Cedar Grove Elementary · Suggested for Edward · Change
> Alexis comes along to the harvest fair.
> 8:00pm · Reading in bed, lights out at 8:30pm
> Alexis can have a banana or toast before bed.
>
> Mallory
> 3:00pm · Harvest fair at Westview Kindergarten, until 5:00pm · Suggested for Edward · Change
> Mallory stays in class until the fair opens, so there's no 2:30pm pickup. The small pumpkin to paint is on Mallory's list, and the games take cash, so bring about $10.
> 7:00pm · Bath, pajamas and teeth, then two books, lights out at 7:30pm
> The star nightlight stays on.
>
> Both
> 5:15pm · Dinner on the way home from the fair
> Rosie's Pizza on Elm Street is five minutes from Westview Kindergarten, and Mallory can have a plain cheese slice.
>
> This Saturday
>
> Both
> 12:50pm · Sophie's birthday party at the Parks', 1:00pm to 3:00pm · Suggested for Edward · Change
> It's a drop-off party, and Hana's invitation includes Mallory. The gift is wrapped in the hall closet.
> 5:30pm · Tacos at home
> Everything is in the fridge. Mallory has a plain cheese quesadilla.
>
> Alexis
> 8:00pm · Reading in bed, lights out at 8:30pm
>
> Mallory
> 7:00pm · Bath, pajamas and teeth, then two books, lights out at 7:30pm
>
> This Sunday
>
> Both
> 5:30pm · Dinner from Golden Wok on Main Street
> Delivery takes about 30 minutes. Mallory likes plain rice and the chicken.
> About 7:30pm · You're home
>
> Alexis
> 8:00pm · Reading in bed, lights out at 8:30pm
>
> Mallory
> 7:00pm · Bath, pajamas and teeth, then two books, lights out at 7:30pm
> Mallory may want to wait up for you, and bedtime stays 7:30pm.
>
> What Edward should know
> Drafted from your evening reminders and the girls' pages
> Neither girl takes any medicine this weekend.
> Alexis practices violin for 20 minutes before dinner.
> Add something Edward should know
>
> Your flights
> From your itinerary
> This Friday · Larkspur Air 317 · Leaves Bayview Regional Airport at 12:10pm
> This Sunday · Larkspur Air 482 · Lands at Bayview Regional Airport at 6:40pm
>
> Where you're staying
> From your itinerary
> Harlow Lake Lodge · Front desk · 802-555-0190
> harlowlakelodge.example
> Eastern time, three hours ahead of home
>
> Who Edward can call
> You choose who's on this list.
> Choose who Edward can call
>
> [✓] Send Edward anything new for these days
> You won't hear from MVP until you're home.
>
> [Send to Edward to look over]
> Save for later

*The day headings say which week each day is in, because a playbook can begin in the week after it is made. Bedtimes repeat on each day so that Edward can read any one day on its own. She taps Choose who Edward can call, and a sheet opens with the coach's suggestions already ticked, Ruth first.*

**Game plan, as shown: the sheet "Who can Edward call for help?"**

> Who can Edward call for help?
> These are from your circle and the Kids cards. Double check those listed for Edward to call if needed.
>
> [✓] Ruth Delgado · Next door, the backup for the evenings
> [✓] Claire · Your sister
> [✓] Min-jung Park · Sophie's party
> [✓] Northside Pediatrics · After hours too
> [✓] Cedar Grove Elementary · Front office
> [✓] Westview Kindergarten · Front office
> [ ] Karen Moss · Alexis's therapist, Brightwater Family Therapy
> [ ] Ms. Reyes · Mallory's reading tutor
>
> + Add someone
>
> [Save]

*The coach suggests the backup she chose, the people the weekend's items involve, the girls' pediatrician and both schools, and leaves the rest of her circle unticked. When she saves, the list reads:*

> Who Edward can call
> You chose these from your circle and the Kids cards.
> Ruth Delgado · Next door, the backup for the evenings · 707-555-0111
> Claire · Your sister · 707-555-0102
> Min-jung Park · Sophie's party · 707-555-0104
> Northside Pediatrics · After hours too · 707-555-0160
> Cedar Grove Elementary · Front office · 707-555-0120
> Westview Kindergarten · Front office · 707-555-0140
> Change who Edward can call

*Charlotte knows that Saturday at 12:30pm is Edward's standing tee time, and Ruth agreed this afternoon to take both girls to Sophie's party. She taps Change on the party.*

**Game plan, as shown: the sheet for changing a part**

> Sophie's birthday party at the Parks'
> This Saturday, 1:00pm to 3:00pm · Suggested for Edward
>
> Give it to someone else
> Move it to another time
> Take it out of the playbook

*She taps Give it to someone else.*

> Who will take Alexis and Mallory to the party?
>
> [✓] Ruth Delgado · Next door
> [ ] Claire · Your sister
>
> [Ruth already said yes]
> Send Ruth a text

*Ruth already said yes records Ruth's answer, because Charlotte spoke to Ruth herself. If she had not talked to Ruth, Send Ruth a text would open the text and Ruth's list, as under "If Charlotte hasn't talked to Ruth" below. The party leaves Edward's part of the playbook.*

> This Saturday
>
> Both
> 12:50pm · Ruth takes Alexis and Mallory to Sophie's birthday party at the Parks', 1:00pm to 3:00pm · Ruth: yes · Change
> It's a drop-off party, and Hana's invitation includes Mallory. The gift is wrapped in the hall closet. Ruth brings both girls home at 3:05pm.

*Before she sends it, Charlotte takes out the violin note, because violin can wait until Monday, and the line leaves the playbook. Save for later keeps her changes if she wants to finish another evening. She taps Send to Edward to look over at 8:31pm, and the coach drafts the message in her voice. It tells Edward that everything is in MVP and where to find help, because a weekend of someone else's plans should not arrive out of the blue.*

> To Edward
>
> Hi Edward, everything you need for the weekend while I'm away is in MVP, including Ruth taking Alexis and Mallory to Sophie's party. Look over the playbook and answer in MVP with any notes or questions. If you need more help, open Team at the bottom of MVP. Thank you!
>
> This Friday · Two things for you, picking Alexis up and the harvest fair
>
> [Send]

*Every item in the playbook shows "Suggested for Edward" until he takes it. The playbook view keeps "Weekend playbook" at the top of the game plan for those days until the weekend is over.*

## C-12 · Tuesday, Oct. 20, 6:20am · Edward looks over the weekend

*Edward's phone shows a notification from MVP, and tapping it opens the weekend playbook in his game plan. There is no card on his Today for it, because his Today stays the same Today Charlotte has, and the playbook is a plan, so it lives in the game plan. A banner saying why he is being asked heads the playbook, and Charlotte's message follows it. Until he answers, it belongs to neither of them, so it is titled Weekend playbook on his screen as on hers. Each part suggested for him has three choices of equal weight, stacked one under another: I'll take this, Suggest a change, and Ask someone else. There is no No, I can't, because a weekend handed over part by part turns into an argument if each part can simply be refused, so every answer takes the part, reshapes it or passes it to a named person. When two or more parts are suggested for him, "I'll take all of it" at the foot of the weekend takes every one at once, after he has read them. Ruth's part arrives already marked, so Edward sees that the hardest piece is handled before he reads the rest.*

**Edward's phone, as shown: the notification at 6:20am**

> MVP · now
> Charlotte asked you to look over this weekend.
> Two things for you this Friday, picking Alexis up and the harvest fair.

**Edward's screen, as shown: the weekend playbook**

*His view runs the same days in the same order as hers, so what he reads is what she wrote. The banner comes first, then Charlotte's message, then the weekend, with each day on a card of its own and each child's rows under that child's name, then where Charlotte is, then who to call. If plans change appears once he has sent his answers, because until then nothing in the weekend is his. The banner sits above the title on a white card in ink rather than the coach's amber, because Charlotte is asking and the coach is not. It is bigger than anything else on the screen because this ask is bigger than a day's pickups, and it stays until he sends his answers.*

> [Banner] Charlotte will be attending an offsite from 10:00am this Friday until about 7:30pm this Sunday and needs your help. Let Charlotte know what you can take, and suggest a change or ask someone else for anything that won't work.
>
> Weekend playbook
>
> Received yesterday, 8:31pm
> Offsite plans for the weekend
> "Hi Edward, everything you need for the weekend while I'm away is in MVP, including Ruth taking Alexis and Mallory to Sophie's party. Look over the playbook and answer in MVP with any notes or questions. If you need more help, open Team at the bottom of MVP. Thank you!"
>
> Your weekend plan · [Proposed]
>
> This Friday
> 10:00am · Charlotte leaves home for Bayview Regional Airport
> Alexis
> 2:25pm · Leave home to pick Alexis up at Cedar Grove Elementary, 2:45pm · Suggested for you
> [I'll take this]
> [Suggest a change]
> [Ask someone else]
> 8:00pm · Reading in bed, lights out at 8:30pm
> Alexis can have a banana or toast before bed.
> Mallory
> 3:00pm · Harvest fair at Westview Kindergarten with Alexis and Mallory, until 5:00pm · Suggested for you
> [I'll take this]
> [Suggest a change]
> [Ask someone else]
> Mallory stays in class until the fair opens. The small pumpkin is on Mallory's list, and the games take cash, so bring about $10.
> 7:00pm · Bath, pajamas and teeth, then two books, lights out at 7:30pm
> The star nightlight stays on.
> Both
> 5:15pm · Dinner on the way home from the fair
> Rosie's Pizza on Elm Street is five minutes from Westview Kindergarten, and Mallory can have a plain cheese slice.
>
> This Saturday
> Both
> 12:50pm · Ruth takes Alexis and Mallory to Sophie's party at the Parks' · Ruth: yes
> It's a drop-off party. The gift is wrapped in the hall closet. Ruth brings both girls home at 3:05pm.
> 5:30pm · Tacos at home
> Everything is in the fridge. Mallory has a plain cheese quesadilla.
> Alexis
> 8:00pm · Reading in bed, lights out at 8:30pm
> Mallory
> 7:00pm · Bath, pajamas and teeth, then two books, lights out at 7:30pm
>
> This Sunday
> Both
> 5:30pm · Dinner from Golden Wok on Main Street
> Delivery takes about 30 minutes. Mallory likes plain rice and the chicken.
> About 7:30pm · Charlotte is home
> Alexis
> 8:00pm · Reading in bed, lights out at 8:30pm
> Mallory
> 7:00pm · Bath, pajamas and teeth, then two books, lights out at 7:30pm
>
> [I'll take all of it]
>
> Where Charlotte is
> Larkspur Air 317 leaves at 12:10pm this Friday, and Larkspur Air 482 lands at Bayview Regional Airport at 6:40pm this Sunday.
> Harlow Lake Lodge · Front desk · [Call]
> 802-555-0190 · harlowlakelodge.example
> Charlotte is on Eastern time, three hours ahead of you, so 8:00pm here is 11:00pm there.
>
> Who to call
> Ruth Delgado · Next door, the backup for the evenings · [Call]
> Claire · Charlotte's sister · [Call]
> Northside Pediatrics · After hours too · [Call]
> Cedar Grove Elementary · Front office · [Call]
> Westview Kindergarten · Front office · [Call]
> Min-jung Park · Sophie's party · [Call]
>
> Add a note for Charlotte
> [Send your answers to Charlotte]

*Each number shows under its name with its area code, as Where Charlotte is shows the lodge's. Edward reads the weekend, taps I'll take all of it and sends his answers at 6:31am. Charlotte gets the notification "Edward is taking everything suggested for him." The parts become his, the banner gives way to "You have this weekend, from 10:00am this Friday.", and If plans change appears under the weekend:*

> If plans change
>
> Ruth Delgado next door can stay with the girls if you need to go out, and Claire can help if it's urgent. The MVP Coach can help you work out anything new, and you can text Charlotte if you need her.
>
> Text Charlotte

*From then on his Today carries the line "Weekend playbook · until about 7:30pm this Sunday" above Now, which opens the playbook. If plans change is a plain section with no buttons and no coach tint, because the calls live in Who to call, and the guidance is Charlotte's, not the coach's. Each Call in Who to call opens his phone with the number. Text Charlotte opens his own messages app with nothing drafted, because nothing has happened yet. Charlotte asked not to hear from MVP, so MVP never writes to her for him, and texting her is his choice (issue Y19).*

**A playbook shows its state beside its heading.** Both views show the plan's state as a pill beside the heading of the parts suggested for the recipient: "Edward's weekend plan" in Charlotte's view and "Your weekend plan" in Edward's. It reads "Not sent yet" while she builds it, "Proposed" once she sends it and until he answers, "Accepted" when every part has his yes or someone else's, and "Change suggested" when he suggests a change to any part. A part he passes on keeps the plan Proposed until that person answers. The rows say which part, with "Suggested for Edward", "Edward: yes", "Edward suggested a change", "Asked Claire" and "Claire: yes". The pill is a label and never a control.

## If Edward suggests a change

*No moment takes this path, and it is drawn for the boards. Suggest a change opens a composer to Charlotte with the part quoted above it and the placeholder "What would work better?", in his own words. The part shows "Edward suggested a change" with his outlined initial, and Charlotte's coach card quotes him, such as: Edward suggested a change to Friday's harvest fair: "Can we skip the pizza and get burgers at Cooper's Grill on the way home?" Its button is Open the weekend playbook, where she changes the part and sends it back, or keeps it and says why in a note. The part stays Suggested until he takes it.*

## If Edward asks someone else

*No moment takes this path, and it is drawn for the boards. Ask someone else opens a sheet titled "Ask for backup", with the line "These are the people who agreed to help this weekend." and the people on her Who to call list who can drive or stay with the girls, such as Ruth and Claire. Its button names his choice, such as Ask Claire. Edward sends the request himself, in his own voice, through the usual path (§9): a card in Claire's MVP, or a text with a link for Ruth. The part shows "Asked Claire" until Claire answers, and Charlotte sees it on the playbook without a coach card, because nothing needs her yet. If Claire can't, the part comes back to Edward with the same three choices.*

## If Charlotte hasn't talked to Ruth

*No moment takes this path. In C-11, Send Ruth a text drafts a message in Charlotte's voice, with a line above it saying how it reaches Ruth. Ruth's web page carries the brand header with the steam stars, Charlotte's request, her message, and a card with the party, where Ruth chooses Yes, I can or No, I can't and taps Send. Once she has answered, the page thanks her and shows If Edward calls, her answer with Change, and an offer to add the party to her own calendar. Ruth, who is not the recipient of the playbook, keeps the usual answers. Charlotte sends the playbook to Edward once Ruth has answered, or sooner with the party marked Asked Ruth. Greg redrew these screens on November 20, 2026 (issue Y19).*

> To Ruth Delgado
>
> Ruth isn't on MVP, so she gets a text from MVP with a link to answer.
>
> Hi Ruth, I'm away this weekend and Edward has the girls. Could you take Alexis and Mallory to Sophie's birthday party at the Parks' this Saturday at 12:50pm and bring them home after the party ends at 3:00pm? The details are at the link. Edward may also call you in the evenings if he needs someone to stay with the girls. Thank you, Charlotte
>
> [Send]

**Ruth's web page, as shown**

> Charlotte is asking you to help this weekend.
> Sent 8:26pm
>
> Hi Ruth, I'm away this weekend and Edward has the girls. Could you take Alexis and Mallory to Sophie's birthday party at the Parks' this Saturday at 12:50pm and bring them home after the party ends at 3:00pm? The details are at the link. Edward may also call you in the evenings if he needs someone to stay with the girls. Thank you, Charlotte
>
> This Saturday
> Take Alexis and Mallory to Sophie's party at the Parks', 12:50pm, and bring them home at 3:05pm
> ( ) Yes, I can
> ( ) No, I can't
>
> Add a note for Charlotte
>
> [Send]
>
> Charlotte plans her family's week with Most Valuable Parent.

**Ruth's web page, after she sends her answer**

> Charlotte is asking you to help this weekend.
> Sent 8:26pm
>
> Thank you!
>
> If Edward calls
> Edward may call you this Friday to this Sunday if he needs someone to stay with Alexis and Mallory in the evening. Mallory goes to bed at 7:30pm and Alexis at 8:30pm.
> Edward · 707-555-0101
>
> This Saturday
> Take Alexis and Mallory to Sophie's party at the Parks', 12:50pm, and bring them home at 3:05pm
> Yes, I can · Change
>
> Charlotte can see your answer. If anything changes, change your answer here.
>
> Add the party to your calendar?
> [Add to calendar] Not now

*"You don't need MVP to answer." is gone, because the draft's line already tells Charlotte how Ruth answers, and the page itself shows Ruth there is nothing to install. Add to calendar hands Ruth a calendar file that she opens herself, so MVP still writes to nobody's calendar. The frames read "Sent 9:12am", which is corrected to 8:26pm, because Charlotte sends the text during C-11.*

## If Edward doesn't answer

*No moment takes this path. Anything Edward has not said yes to stays Charlotte's and shows "Needs an owner" in her plan. If he has not answered by Thursday evening, her coach card says so, because she leaves on Friday morning. They live in the same house, so the card asks her to talk to him rather than to call him.*

> MVP Coach · for this weekend
>
> Edward hasn't looked over the weekend yet, and two things still need an owner. Ask Edward about it tonight.
>
> [Open the weekend playbook]

*In the playbook she can give a part to Ruth or Claire herself. The playbook runs with whatever has a yes.*

## C-13 · Friday, Oct. 23, 2:05pm · Edward's Friday

*Charlotte left for the airport at 10:00am, and Edward's Today now runs the weekend. It is the same Today Charlotte has, holding the items Edward owns, so on the playbook days it holds a full day. Mallory stays in class at Westview Kindergarten until the fair opens at 3:00pm, so Edward collects Alexis first and meets Mallory at the fair, and the afternoon is one trip with two stops. Now shows a trip pass. The small pumpkin Charlotte told the coach about in C-09 is on Mallory's list, and the cash for the games is a task under "Before you leave home".*

**Edward's Today, as shown: the header and Now**

> Friday afternoon, Oct. 23
>
> Weekend playbook · until about 7:30pm this Sunday
>
> Take Alexis to the harvest fair at Westview Kindergarten
>
> 2:25pm · [in 20 min]
>
> Home → Cedar Grove Elementary
>
> 2:25pm · Leave home
> 2:45pm · Cedar Grove Elementary · Pick up · [Alexis]
> 3:00pm · Westview Kindergarten · Harvest fair with Mallory, until 5:00pm
>
> Mallory
> Small pumpkin to paint at the fair · [✕]
> Add something else for Mallory
>
> Before you leave home
> Bring about $10 in cash, because the fair's games take cash
>
> [Remind me to leave home] [Directions]

*Leaving home at 2:25pm follows the leaving time rule for the 12-minute drive to Cedar Grove Elementary. Edward leaves Cedar Grove Elementary at 2:45pm, when Alexis is out, and reaches Westview Kindergarten at 2:57pm, before the fair opens.*

**Edward's Today, as shown: later today**

| Time | Chips | Item |
| ----- | ----- | ----- |
| 5:15pm | Both | Dinner at Rosie's Pizza on Elm Street |
| 7:30pm | Mallory | Bedtime |
| 8:30pm | Alexis | Bedtime |

*Nothing of Edward's is done yet today, so Later today has no done line. Charlotte's phone shows nothing from MVP all weekend.*

## C-15 · Monday, Oct. 26, 6:30am · Charlotte's first morning back

*Charlotte opens MVP for the first time since Friday. The weekend is gathered into one look-back, so she can pick it up in a single read: what came in, what Edward and Ruth did, Edward's notes, and anything the coach thinks worth her attention. The card concerns days that have passed, which no other coach card does, and it appears once.*

**Today, as shown: the coach card**

> MVP Coach · while you were away
>
> Edward had the weekend, and one thing needs you today. Alexis's violin folder is still at the Parks', and Alexis has violin at 4:45pm.
>
> [See your weekend]
> Opens the weekend playbook

**Game plan, as shown: the playbook after the weekend**

> Your weekend plan · [Accepted]
> Last Friday, Oct. 23 to yesterday
>
> What came in
> Yesterday, 4:10pm · Cedar Grove Elementary newsletter · This Wednesday is a minimum day, out at 12:30pm. The pickup is in your plan.
>
> What Edward and Ruth did
> ✓ Edward picked Alexis up and took both girls to the harvest fair last Friday
> ✓ Ruth took Alexis and Mallory to Sophie's party and brought them home last Saturday
>
> Notes from Edward
> Mallory's pumpkin is on the porch.
> Alexis left her violin folder at the Parks'.
>
> Worth a look
> Alexis has violin at 4:45pm today, and the violin folder is still at the Parks'.
> [Add a task for today]

*The days she was away are last week now, so the summary names them with "last" and "yesterday". The newsletter concerns this week rather than the playbook days, so it waited for Charlotte instead of going to Edward, and the coach added the minimum day's pickup as hers, as it adds any change to the school day. Add a task for today puts "Get Alexis's violin folder from the Parks'" on her list as hers. The playbook view leaves the top of the game plan once she has opened the summary.*

## Boards for the wireframes only

*These boards show states of Now that no moment reaches. Each is drawn so the engineer can build the state, and none is presented. Since version 3.27 every one of them leads with a pass.*

### Wednesday, Oct. 14, 5:10pm · A timed thing at home

*Dance at Studio Ten Dance ran from 3:45pm to 4:45pm, and Charlotte and both girls are home by 5:00pm. No leg is left today, and dinner with Claire is the next thing with a time, so it leads Now as a pass without a route. Everyone asked about Thursday has answered, so there is no coach card.*

> Wednesday afternoon, Oct. 14

> Dinner with Claire
>
> 6:30pm · [in 1 hr 20 min]
>
> At home
>
> [Remind me]

*The pass takes the children's tint, because dinner is a Family item. "At home" stands where the route would be, with no chevron and no fields, because there is nowhere to drive and no Leave sheet.*

*Later today shows its heading and "5 done today", with no rows. MVP Editorial shows the conference article, because its reason holds until Thursday. Remind me opens the sheet below.*

> Remind me
>
> For 6:30pm · Dinner with Claire
>
> At 6:15pm · 15 min before
> At 6:00pm · 30 min before
>
> [Set reminder]

### Sunday, Oct. 18, 10:30am · A task and tomorrow's pass

*Sunday has nothing in the game plan except one task Charlotte added herself on Saturday, with two steps of her own. The washing machine is leaking again. With no timed thing today, the pass shows her next departure, Alexis leaving with the Parks tomorrow morning, and the task leads Later today. The coach card concerns Monday: violin returns to Lakeside Strings Music School at 4:00pm, and it runs into Alexis's therapy at Brightwater Family Therapy at 3:30pm, a clash in Alexis's ordinary week that this week's move to Tuesday hid.*

> Sunday morning, Oct. 18
>
> Nothing to drive to today.

> Alexis takes the Parks' carpool to Cedar Grove Elementary
>
> 7:40am · [Tomorrow]
>
> Home → Cedar Grove Elementary
>
> With The Parks · Starts 8:00am
>
> [Remind me]

*The pass has no checklist, because the evening reminders appear from the evening before. Later today shows the task.*

| Time | Chips | Item |
| ----- | ----- | ----- |
| Anytime | You | Fix the washing machine |

> MVP Coach · for tomorrow
>
> Violin is back at Lakeside Strings Music School tomorrow at 4:00pm, and Alexis has therapy at Brightwater Family Therapy at 3:30pm, so the two overlap every Monday. I'd ask Lakeside Strings Music School for 4:45pm or later, so Alexis can go straight from therapy.
>
> [Text Lakeside Strings Music School]
> Opens a text for you to send to Lakeside Strings Music School
>
> Other options

*Later today holds only the task. There is no MVP Editorial article, because nothing in Sunday gives one a reason. In the game plan, Monday's violin reads "Conflict: therapy" and therapy reads "Conflict: violin", every Monday from next week, until Lakeside Strings Music School moves violin to 4:45pm.*

*Tapping the task opens its item page, which shows her two steps as a checklist. Its reminder opens the sheet below, and it offers times of day, because the task has none of its own. Where the reminder and Ask for help sit on the item page is open (Appendix B item 95, issue T61).*

> Remind me
>
> Fix the washing machine
>
> At 11:30am · in an hour
> At 2:00pm · this afternoon
> At 6:00pm · this evening
>
> [Set reminder]

*Ask for help on the item page opens a sheet listing everyone in her circle and her people who has a mobile number, circle first: Edward, Claire, Ms. Reyes, Min-jung Park and Jenna Okafor. She chooses Edward, taps Next, and the coach drafts the request in her voice.*

> Ask someone
>
> Fix the washing machine
>
> [Next]

> To Edward
>
> Can you take a look at the washing machine today? It's leaking again.
>
> [Send]

*Text Lakeside Strings Music School on the coach card opens this draft, handed to her messages app, and sending it leaves the task "Text Lakeside Strings Music School about Mondays".*

> To Lakeside Strings Music School
>
> Hi, could Alexis move to 4:45pm or later on Mondays? Alexis has an appointment at 3:30pm that runs until 4:15pm. Thank you, Charlotte
>
> [Send from Messages]

*Other options opens Monday's Leave sheet, scrolled to its one backup.*

> Plan B · Skip violin tomorrow. Alexis keeps therapy at Brightwater Family Therapy, and you can settle violin's time once Lakeside Strings Music School answers.
> [Skip violin tomorrow]
> Opens a text for you to send to Lakeside Strings Music School
>
> I don't see another way that keeps both tomorrow.

### Sunday, Oct. 18, 11:15am · Nothing else today

*Charlotte ticks both steps and then the task on its item page. The task leaves Later today and counts as done.*

> Nothing else today.

*The line sits above the same pass as on the 10:30am board, Alexis leaving with the Parks tomorrow at 7:40am. The coach card for Monday stays beneath the pass until she answers it, and Later today shows its heading with "1 done today" and no rows.*

### Monday, Oct. 12, 7:25am · A conflict on the pass

*This board is not part of the moment. It shows Now when the leg she is about to drive conflicts with another item, in a Monday that goes differently from C-03. At 7:20am Min-jung texts that the Parks' car won't start, and Charlotte shares the text to MVP. In this version of the morning, Westview Kindergarten starts at 8:00am for the kindergarten's fall assembly. Cedar Grove Elementary also starts at 8:00am, and the two schools are 12 minutes apart, so one driver can't reach both by 8:00am. Alexis's carpool now has nobody, so it stays in Later today, and Mallory's run leads Now with the conflict under its title. Edward works from home on Mondays.*

> Monday morning, Oct. 12

> Take Mallory to Westview Kindergarten · B day
> Conflict: Alexis's carpool
>
> Home → Westview Kindergarten
>
> 7:45am
> in 20 min
>
> Drive 10 min · Arrive 7:55am · Starts 8:00am
>
> [perforation]
>
> Mallory
> Lunch
> Sneakers, it's a motor skills day
> Reading folder, signed
>
> [Remind me] [Directions]

*The pill, the time and the fields are unchanged, because the leg still leaves at 7:45am. The conflict line is set in Meta under the title.*

> MVP Coach · for today
>
> The Parks' car won't start, so Alexis needs a ride to Cedar Grove Elementary for 8:00am, the same time as Mallory's assembly at Westview Kindergarten. Edward is home this morning, so I'd ask Edward to leave home at 7:45am to take Mallory to Westview Kindergarten while you take Alexis.
>
> [Ask Edward]
> Opens a request for you to send to Edward
>
> Other options

*Later today shows "7:40am · [Alexis] Carpool to Cedar Grove Elementary" with Needs an owner and "Conflict: Mallory's run". Other options opens the Leave sheet at its backups.*

> Backup plans
>
> Plan B · Take Mallory to Westview Kindergarten first, leaving home at 7:45am, and then Alexis. Alexis reaches Cedar Grove Elementary about 8:12am, after the bell.
> [Take both girls yourself]
>
> I don't see another way that gets both girls there by 8:00am.

*Ask Edward opens the draft below. Once she sends it, Mallory's run shows Edward's initial and an hourglass, and Alexis's carpool becomes hers, leaving at 7:40am. Plan B depends on nobody.*

> To Edward
>
> Can you take Mallory to Westview Kindergarten this morning? It's the early start for the assembly, so leave home at 7:45am. The Parks' car won't start, so I'm taking Alexis.
>
> [Send]

### Thursday, Oct. 8, the week before · A notice for a new conflict

*This board is not part of a moment. On Thursday of her first week, Charlotte gives the coach Alexis's weekly schedule while she is on the game plan. The coach finds that violin at Lakeside Strings Music School on Mondays at 4:00pm runs into therapy at Brightwater Family Therapy at 3:30pm, marks both items on every Monday from next week, puts the dot under Monday in the week strip, and shows the notice below above the tab bar for about four seconds.*

> Violin and therapy overlap every Monday from next week.
> Show me next Monday, Oct. 12

*Show me next Monday, Oct. 12 opens the game plan at next week's Monday. The notice asks for no decision, and the clash is more than a day away, so no phone notification is sent. On Sunday evening, Lakeside Strings Music School's text moves the demo week's lesson to Tuesday, which clears the clash for one week, and the Sunday board raises it again for the Monday after.*

### Wednesday, Oct. 14, 5:30pm · She adds to the game plan

*These boards show the two ways a new event reaches the game plan, and neither is a moment. In the first, Charlotte types it into the capture bar. In the second, the same event is found on her Google Calendar. Ada's birthday party is a stand-in written for these boards (Appendix A).*

*She types on the game plan, and the keyboard rises over the tab bar with the capture bar riding on top of it.*

> Alexis has Ada's birthday party at the Okafors' on Saturday at 2

*She taps the arrow. The party joins Saturday as hers, because she said it. Saturday afternoon is clear, so the coach adds the drop-off and the pickup with her as owner, and the read-back rises above the bar while Saturday stays in view. The end time is the one thing the coach doesn't know, so it asks.*

> MVP Coach · for this Saturday
>
> Ada's birthday party at the Okafors' is in your plan for this Saturday at 2:00pm, and you take Alexis, because that afternoon is clear. When does the party end?
>
> [Add the end time]
>
> Other options

*Add the end time opens a sheet headed "When Ada's party ends" with a time picker and Save, and the pickup takes that time. Other options opens the drop-off's page at "Backup plans". In the second board, the party is on her Google Calendar instead, and the coach adds it in the same way.*

> MVP Coach · for this Saturday
>
> Ada's birthday party this Saturday at 2:00pm is in your plan, from your Google Calendar, and you take Alexis, because that afternoon is clear. When does the party end?
>
> [Add the end time]
>
> Other options

*There is no review card on either board. Saturday shows the party with the calendar mark on the second board, "[Alexis] To the Okafors'" at 2:00pm and "[Alexis] Pick up at the Okafors', time needed", both owned by You. Tapping the drop-off opens its page.*

> Back
>
> [Alexis] To the Okafors'
> This Saturday · 2:00pm · the Okafors'
>
> Owner
> You · Ask for help
>
> Note
> Add a note
>
> Added for Ada's birthday party, from your Google Calendar
>
> Backup plans
> Plan B · Ask Edward, who is already out for the library run that morning.
> [Ask Edward]
>
> Plan C · Ask someone else in your circle.
> [Ask someone]
>
> Move to another date or time
>
> Take this out of the plan
## MVP Editorial for Charlotte

Charlotte's week has two places for an article. The text that sat here until version 3.29 was drafted with Claude and carried invented bylines, which claimed a vetting that never happened. Heather reviewed it on Oct. 28, 2026 and rejected it, because MVP Editorial has to be vetted writing that MVP approves. It is withdrawn, and Claude writes no article copy. Each slot waits for an article written or approved by MVP staff and signed off by Heather (issue R15).

| Slot | When it appears | Reason line | Status |
| ----- | ----- | ----- | ----- |
| Today, C-03 to C-06 | From Monday to Thursday, because Cedar Grove Elementary conferences fall on Thursday and Friday | Because Cedar Grove Elementary conferences are this week. | Waiting for an approved article about getting the most from a parent-teacher conference |
| The coach's answer in C-08 | Attached to the answer about picture day morning | None, because an attached article needs no reason | Waiting for an approved article about getting a young child dressed in the morning |

The titles on the boards, "Fifteen minutes with the teacher: making a conference count" and "Two outfits, not twenty: getting dressed without the standoff", are placeholders from the withdrawn drafts, and so are their reading times. They are replaced when the approved articles arrive. Until then the article card and the article view are not shown in a presented demo, and the presenter skips the article in C-08.

# 4. Interface copy

These are the labels, headings, buttons and placeholders on the demo screens that are not written out in the moments above. They are interface text rather than coach speech, so they follow plain language rather than the coach voice rules. The engineer should find every visible word in this section or in the moments.

**Labels and headings follow one rule.** A label names a thing, and it stays short. Field labels on the pass, such as Drive, Arrive and Pickup, the text in a status pill, column and table labels, tab names, section headings that name what a section holds, such as "Later today" or "Backup plans", counts such as "6 items", statuses such as "Suggested", progress steps such as "Saving your account", the short confirmations set in Meta beside an action, such as "Game plan updated", and the helper line under a field or a button, such as "Updates your game plan", are labels. A heading or a line that tells her something, such as how many things are waiting or that nothing is left, is a full sentence, with numbers from one to nine written as words. A section heading names what the section holds. The one exception is a child's checklist group, which since the wording review of Oct. 27, 2026 reads the child's name alone, such as "Mallory", because the items under it already say what it holds. Links say what they do in a phrase, except Back, Close, Send, Save and Undo.

**Six vocabulary rules, from version 3.25.** Greg set these on October 20, 2026, and every screen in the moments and every row below follows them. They apply to everything MVP writes, including drafts it writes in Charlotte's voice. Words a person types or says, such as Charlotte's captures and questions, other parents' posts and texts, and quoted school documents, keep that person's own phrasing.

**Every time says am or pm.** A time carries its qualifier with no space, such as "11:59am" or "2:30pm", and noon is "12:00pm". Both ends of a range carry it, such as "3:00pm to 3:45pm", so a parent reading the second time alone never has to look back. The departure time on the pass, set in Display, shows the number in Display with the qualifier beside it in a smaller size, and the exact size is set in the library. Durations, such as "Drive 10 min" and "in 15 min", are not times.

**Every day says which week it is in.** A day is never named alone. The screen says "today", "tomorrow" or "yesterday" when one of them applies, "this" and the day for any other day in MVP's Monday to Sunday week, such as "this Friday", and "last" and the day for the week before, such as "last Sunday". A day in the following week says "next", the day and the date, such as "next Tuesday, Oct. 20", because "next Friday" is the phrase parents most often read two ways, and the date settles it. Today's dateline, the onboarding draft's dates, the week strip's letters, the short day labels under a person page's "This week" heading, and the game plan's day headings, which read "Today", "Tomorrow" or "Friday" in the current week and "Monday" under the "Next week" heading, are exempt because a heading already names the week.

**Places use their full names.** A place is named in full everywhere, so someone who has never heard of it can tell what kind of place it is: Cedar Grove Elementary, Westview Kindergarten, Brightwater Family Therapy, Northside Pediatrics, Willow Yoga, Studio Ten Dance and Lakeside Strings Music School. Things named after a place follow, such as "the Westview Kindergarten card" and "Call Northside Pediatrics". Only "Home" and a family's home, such as "the Okafors'", are exempt, and the group Charlotte named "Cedar Grove parents" keeps her name for it. A long name wraps to a second line, including the route on the pass, and nothing is shortened to fit.

**Text without a chip says what parents say.** A row led by a chip keeps the chip in place of the child's name, as "How people are shown" sets out, so Later today still reads "[Mallory] Pick up at Westview Kindergarten". Wherever no chip names the child, the words do, the way a parent would say them aloud, such as "Pick Mallory up at Westview Kindergarten" or "Take Alexis to orchestra at Cedar Grove Elementary". That covers headlines, the title on the pass, captions, the coach's lines, notifications, read-backs, drafts and sheet lines. The pass carries no chip, so its title always names the child, and a leg that ends at home still has no title.

**Departures say where she leaves from.** Anything about leaving names the place she leaves from, such as "Leave home for Westview Kindergarten", "Remind me to leave home", "Leave Westview Kindergarten at 2:30pm" and "Leave home at 8:15am to take Mallory to Westview Kindergarten".

**Circle and people.** The Team tab keeps its name. The people Charlotte trusts with her children and her private life are her circle, everyone else who shares her children's week are her people, and a group she creates inside MVP is a group. The tab's sections read Chats, Groups and Team, where everyone is in one list and the people in her circle carry a Circle tag, and the words "inner circle" and "village" no longer appear on screen. Heather chose the one list on Oct. 28, 2026.

**What the sweep of October 17, 2026 changed.** Under this rule, every row below and every screen in the moments was read again. Three kinds of copy changed: the checklist headings, which now say what the list is; "Nothing planned", which becomes "Nothing is planned."; and the five lines on the Settings cards, which were fragments ending in a full stop. Everything else already followed the rule. The short Meta confirmations, such as "Game plan updated" and "Sent to the coach", are kept as labels on purpose (Appendix B item 75).

## Navigation

| Where | Text |
| ----- | ----- |
| The five tabs, in order | Today · Coach · Game plan · Team · Kids |
| Kids tab icon | Two figures of different heights, so it fits a toddler and a teenager alike. The height difference stays obvious at tab size, because Team's icon is also two people. |
| Settings, on a phone | The parent's monogram at the top right of every tab's header, with the accessible label "Settings and account" |
| Settings, from tablet width up | Settings, at the bottom of the sidebar |
| Link out of any page opened inside a tab | Back, at the top left, and the page shows no monogram. This covers child pages, school cards, articles, drafts, person pages, chats and Settings. |
| Title bar on a tab | At the right, the tab's actions, such as New message on Team, then the monogram · At the center, the small title, once the large title has scrolled under the bar |
| Title bar on a page | At the left, Back · At the right, the page's actions, when it has any · At the center, the small title, once the large title has scrolled under the bar |
| Large title | The tab's or page's name beneath the title bar, such as "Team", "Game plan", "Kids", "Edward" or "Westview Kindergarten" |
| Small title | The same words as the large title, with the accessible label of the name followed by ", back to top", such as "Team, back to top" |
| What Settings holds | Five cards: Your account · Your calendar and forwarding address · Notifications · Language at home · Privacy. The words are in the Settings table below and in section 3, "Settings". |

## Today

| Where | Text |
| ----- | ----- |
| Dateline | One line at the top: the day, the phase of the day and the date, such as "Monday morning, Oct. 12", "Monday afternoon, Oct. 12" or "Monday evening, Oct. 5", with the month abbreviated as in "Dates, times and places", set in Title · Before it, the phase icon: a sunrise in the morning, a sun in the afternoon, a moon in the evening, in primary ink, with no accessible label of its own because the dateline names the phase · The evening shows the day it is. There is no separate phase title. |
| Status pill, beside the departure time | More than 15 minutes before the leaving time: in 30 min, or in 2 hr 30 min for anything an hour or more away, plain · From 15 minutes before: the countdown, such as "in 15 min", in the warning ink, on the control surface with a hairline · From the leaving time: Time to leave, filled · From five minutes after the leaving time: Running late, in the warning fill · On a pass for a later day: the day, such as Tomorrow or This Friday, plain · On a departure nobody owns yet: Needs an owner, plain |
| Departure time | The time in the Display style, such as "2:15pm" |
| The pass | A tinted panel with large rounded corners holding, in order, the title, the time row with a rule under it, and the route with the next station · `kid-bg` when a child is on the leg, the subtle canvas tint when the leg is hers alone |
| Title, at the top of the pass | The item at the stop she is heading to, in the words a parent says aloud, always naming the child, such as "Pick Mallory up at Westview Kindergarten" or "Take Alexis to orchestra at Cedar Grove Elementary", in Subtitle. The pass carries no chip, so the title names the child whether or not a group under the pass does. · On a trip pass before the trip starts: the trip and the children, such as "Take Alexis and Mallory to school" · None on a leg that ends at home |
| Route, under the title | Where she leaves from, an arrow read aloud as "to", and where she is going, such as "Home → Westview Kindergarten" or "Cedar Grove Elementary → Brightwater Family Therapy", followed by a chevron on a leg she travels herself. A child leaving with someone else gets no chevron. For a timed thing at home: At home, with no chevron, and the item as the title, such as "Dinner with Claire". |
| The next station, under the route | "Then", the next stop and when she is due there, such as "Then Cedar Grove Elementary, 2:45pm", or "Then home, about 4:35pm". When a separate run leaves within 30 minutes: "Then at" the time and where she leaves from, such as "Then at 8:15am, you leave home for Westview Kindergarten". |
| Checklist group headings | The child's first name alone, such as "Mallory", or Both or All three for items that go with every child, in the children's indigo · Before you leave home, in ink, for her own tasks |
| A folded group | The heading, a check and the count, such as "Alexis · 3 packed" or "Mallory · 1 packed" · For her own tasks: "Before you leave home ·" and the number done, such as "Before you leave home · 1 done" · Tapping it opens the group again |
| A folded checklist under Now | A check that draws in once, then "Everything is packed for" and the leaving time, such as "Everything is packed for 7:40am" · Tapping it opens the groups again |
| Folded evening reminders | On tomorrow's pass, a check that draws in once, then "Everything is packed for" and the leaving time while anything under For tomorrow is open, such as "Everything is packed for 6:55am", and "Everything is ready for" and the phase once nothing for tomorrow is left, such as "Everything is ready for tomorrow morning." · The pass stays |
| Actions under the departure | Remind me, with a bell icon · Directions, with a navigation arrow icon. Both are outlined buttons. Directions appears only when she is driving. |
| Fields under the time | Drive, with the minutes, such as "Drive 10 min" · Arrive, with the time, such as "Arrive 2:25pm", in the warning ink with a clock icon when it falls after the stop's time · Pickup, with the time, for a pickup, or Starts, with the time, for anything else · For a child leaving with someone else: With, such as "With The Parks", and Starts |
| Reminder sheet | Heading: Remind me to leave home, or the first station when she leaves from somewhere else, such as "Remind me to leave Cedar Grove Elementary" · Line: "For" the leaving time and the next stop, such as "For 2:15pm · Westview Kindergarten" · Choices, with the first preselected: At 2:00pm · 15 min before · At 1:45pm · 30 min before · When it's time to leave home · at 2:15pm, with traffic checked · Button: Set reminder · When a reminder is already set: the choice selected, the button Update reminder and the link Remove reminder |
| Reminder once set | The button reads "Reminder at" and the time, such as "Reminder at 2:00pm", in its active state, until the reminder goes off |
| Reminder sheet when choices have passed | Only the choices still ahead are offered, with the first preselected · When fewer than two are left, "At", the time and "5 min before" joins them, such as "At 2:10pm · 5 min before" |
| Reminder sheet for a child leaving with someone else | Heading: Remind me · Line: "For", the time and who leaves with whom, such as "For 7:40am · Alexis leaves with the Parks" · The last choice: "At", the time and "when the Parks come", with the family named as it applies · No traffic check |
| Reminder notification | Title: "Leave", where she leaves from, "in 15 min for", the first stop and, when the run has more, "then" and the last stop before home, such as "Leave home in 15 min for Westview Kindergarten, then Brightwater Family Therapy" · Body: the checklist as a sentence, such as "Take something for Mallory to read in the waiting room at Brightwater Family Therapy." · Actions: Directions · Snooze 5 min |
| Coach card label | "MVP Coach · for" and the day it concerns, said from today, such as "MVP Coach · for tomorrow" on a Wednesday or "MVP Coach · for this Friday", beside the coach's dot. "MVP Coach · for today" when it concerns today. "MVP Coach" alone when the card concerns no particular day. |
| Coach card button | One button for the recommendation, named for what it does, such as "Move yoga to 12:15pm" or "Skip tutoring this Friday". When the coach asks for a fact, the button says what she adds, such as "Add the start time" or "Add the end time". |
| Line under the coach card button | When the button changes the plan or opens a draft, a line saying so, such as "Updates your game plan" or "Opens a text for you to send to Ms. Reyes". A button that only opens something she reads, such as "See your reply to the carpool group", or a sheet for her answer, has no line. |
| Coach card secondary action | Other options, which opens the Leave sheet on Today scrolled to the coach's backups. A card with only one way forward names the alternative instead, such as "Say you can't this week" or "Remind me next Monday, Oct. 19". |
| Coach card after she agrees | The label, unchanged · The coach's recommendation, unchanged, in muted ink · A cerulean check and Agreed · The coach's follow-up, saying what comes next and never restating the plan, such as "The rest of this week is in your game plan. Back-to-school night at Westview Kindergarten this Thursday is the one thing waiting there for you to add." · A button for what comes next, such as "Open the game plan" or "Book at Willow Yoga", with an external-link icon when it opens another site · Link: Undo · Meta line, on a card that has one: Game plan updated |
| Coach card after she chooses another option | The label, unchanged · The coach's recommendation, unchanged, in muted ink · A cerulean check beside the plan she chose, in full ink, in the coach's words from the Leave sheet, such as "Take Alexis to Cedar Grove Elementary at 7:40am, then come home and leave with Mallory for Westview Kindergarten at 8:15am." · The coach's follow-up · A button for what comes next · Link: Undo |
| Coach card after she answers a question | The label, unchanged · The coach's question, in muted ink · A cerulean check beside her answer · The coach's line saying what comes next · A button for what comes next · Link: Undo |
| Answer sheet for a time | Heading: the item and the time the coach asked for, with every place named in full · A time picker · Button: Save · Not drawn in Charlotte's demo since version 3.26, because setup asks for each school's start time |
| Coach card for a new calendar event that runs into the plan | The label, then the event, "is in your plan, from your Google Calendar", or the calendar she connected, what it runs into, and the coach's recommendation, such as "Mallory's checkup at Northside Pediatrics this Friday at 3:30pm is in your plan, from your Google Calendar, and it overlaps tutoring with Ms. Reyes. I'd skip tutoring this Friday, because Mallory's new weekly tutoring with Ms. Reyes starts next Tuesday, Oct. 20." · One button for the recommendation · Other options |
| Coach card for a school event she would choose | The label, then the event, what it runs into, and a question, such as "Westview Kindergarten's harvest fair is next Friday, Oct. 23, from 3:00pm to 5:00pm, and Mallory has tutoring with Ms. Reyes at 3:00pm that day. Do you want the fair in your plan?" · Button: "Add" and the event, such as "Add the fair" · Line: Updates your game plan · Link: No thanks |
| Coach card on Sunday evening | Label: MVP Coach · for next week · The line and the button are written with the Sunday moment (Appendix B item 64) |
| Section heading | Later today |
| At the foot of Later today | A line in Meta with the number done so far, shown once anything is done: before noon, such as "2 done this morning", and from noon, such as "3 done today" |
| Rows in Later today | The time, the chips, the calendar mark when the item came from her calendar, and the item, such as "2:30pm · [Mallory] Pick up at Westview Kindergarten" or "3:30pm · [Alexis] [calendar mark] Brightwater Family Therapy, with Mallory" |
| Calendar mark | A small calendar icon in ink/muted, never cerulean, drawn before the item's text on every row that carries it, with no tap target · Accessible label: From your calendar |
| Letter day | After the school's name, such as "To Westview Kindergarten · B day" in Later today, or "Westview Kindergarten · D day" in For tomorrow, and on every school run in the game plan, such as "[Mallory] To Westview Kindergarten · D day" (issue G49) |
| Time not known yet, in For tomorrow | Start time needed, in the time column, in Meta |
| Coach card with nothing captured yet | MVP Coach · Your week is empty so far. Send me a school email, a handout or a few words about your week, and I'll start the plan. · Buttons: Take a photo · Attach a file · Talk or type |
| Capture bar | The placeholder "Type, talk or add an image" · Icons: Attach · Camera · Microphone, with those accessible labels · No coach's dot, which came off on Oct. 28, 2026 |
| Coach card while the coach reads a capture from Today | The label, then "Reading your photo…", or "Reading your file…" or "Listening…" as the capture applies |
| Coach card with a read-back from Today | The label · The coach's line saying what it took and where it put it · When something came from a document someone else wrote, one button to add it, such as "Add the cans to Mallory's list", with the line Updates your game plan, and the link No thanks · After she adds it: the coach's line, Undo, and Game plan updated |
| When the capture bar shows | Above the tab bar on Today and on the game plan, except on Today while the coach card is asking for a capture |
| Heading of the evening checklist | "Reminders for" and the phase of tomorrow's first departure, such as "Reminders for tomorrow morning" or "Reminders for tomorrow afternoon", in Subtitle, heading the checklist on tomorrow's pass |
| A checklist row | The item in its own container in the children's tint · The check at the left · A remove button at the right, with the accessible name "Remove" followed by the item, such as "Remove Lunchbox" |
| Removing a repeating item | Asks in place on the row: Just tonight · Every night, in the evening, or Just today · Every day, during the day · An item that happens once goes straight away |
| Notice after removing | One line and Undo, above the capture bar for about four seconds, such as "Lunchbox is off Mallory's list for tonight." or "Lunchbox is off Mallory's list until you add it back." · Until she dismisses it when VoiceOver is on |
| Link at the foot of each child's group | "Add something else for" and the child's name, such as "Add something else for Mallory" |
| A new row she types into | Placeholder: "What else does" and the child's name and "need?", such as "What else does Mallory need?" · Return adds it · Tapping elsewhere with it empty drops it |
| Tomorrow's pass, in the evening | Tomorrow's first departure, whoever owns it · Status pill: Tomorrow, or Needs an owner when nobody owns it yet · Checklist heading: "Reminders for" and the phase, such as "Reminders for tomorrow morning" · Action: Remind me to leave home, or Remind me when a child leaves with someone else, and none when nobody owns the leg · No Directions |
| Heading for tomorrow's departures | For tomorrow, listing her later departures tomorrow that take a child, each with its own checklist grouped by child, and hidden when none are left |
| Trip pass | A pass for a trip with more than one child and more than one stop · Route: every stop, such as "Home → Cedar Grove Elementary → Westview Kindergarten", with no next-station line · Under the first dashed line, a timetable in place of the fields |
| Timetable rows on a trip pass | The time in Body strong, then the step: "Leave home" · the child's chip, the place and, beneath it in Meta, "Drop off", any letter day and "Starts" with the time, such as "Drop off · D day · Starts 8:30am" · "Leave" and the stop, such as "Leave Cedar Grove Elementary" · "Back home" · Each row's marker: an icon for its kind of place, home or school, with the rail stopping above and below it · During the trip: rows behind her muted with muted icons, the next row with its icon in a solid cerulean circle and bold text, rows ahead in full ink |
| MVP Editorial line | "MVP Editorial ·" and the reading time, such as "MVP Editorial · 3 min read" |
| Under the article title | A single sentence beginning "Because", such as "Because Cedar Grove Elementary conferences are this week." |
| Line above the pass when nothing timed is left today | In Meta: Nothing to drive to today. when nothing today was timed · Nothing else to drive to today. once the day's legs are done and tasks are left · Nothing else today. when nothing is left |
| Pass for a later day | Her next departure, with its day in the status pill, such as Tomorrow · Its checklist only from the evening before, as the evening reminders · Action: Remind me |
| Pass for a timed thing at home | Title: the item, such as Dinner with Claire · The time and its status pill · In place of the route: At home, with no chevron · No fields · Action: Remind me |
| Anytime task in Later today | Anytime, in the time column |
| A task on a checklist | The task's words, saying what to do and why, such as "Call Brightwater Family Therapy to ask for Dana Whitfield" · Beneath it in Meta, who to reach, such as "Brightwater Family Therapy · 707-555-0170" or "pickups@westviewk.org" · In the same container as other rows, with a button at the end of the row that does it in place of the remove button: Call, for a phone number · "Send from" and the app, such as "Send from Mail", for a handoff, which reopens its draft · Message, for someone on MVP, which opens the composer with them chosen · Tapping the row anywhere but the button ticks it · A task she wrote herself carries only her words |
| A conflict on the pass | Under the title, in Meta: "Conflict:" and the other item, such as "Conflict: Alexis's carpool" · The pill, the time and the fields are unchanged |
| Notice for a new conflict | One line saying what overlaps and when, such as "Violin and therapy overlap every Monday from next week." · A link naming where it goes, such as "Show me next Monday, Oct. 12" · Above the tab bar for about four seconds, once per conflict, and until she dismisses it when VoiceOver is on |
| Leave sheet | Heading: "Leave", where she leaves from, "for" and the first stop, with the day when it isn't today, such as "Leave home for Westview Kindergarten" or "Leave home for Willow Yoga tomorrow" · Line, when the heading does not already name the day: the part of the day and the number of stops, such as "This afternoon · 3 stops", or the day, such as "This Friday afternoon" · Under it, in Body: Tap a time to leave earlier or later. The stops come from your game plan, and that's where they change. · Each leaving time drawn as a control, cerulean text in a cerulean outline on paper · For each station: the place, the item with its chips and start time, and "Leave", the station and the time, such as "Leave home at 2:15pm" or "Leave Westview Kindergarten at 2:30pm" · Last station: "Back around" and the time · Under a station she is changing: "You reach", the stop and the time, then how that sits against the item, such as "You reach Westview Kindergarten at 2:25pm, five minutes before pickup." or "You reach Studio Ten Dance at 4:20pm, five minutes after ballet starts.", in the warning ink when she arrives after the item starts · Under a leaving time she has opened: the time, tinted, and two outlined buttons, 5 min earlier and 5 min later · Under a later stop she would now reach late: the same "You reach" line, in the warning ink · On a calendar item: Change this in Google Calendar. · Button: Save, shown only after she changes a time |
| Backups in the Leave sheet | Heading: Backup plans · Each backup: "Plan B ·" or "Plan C ·" and the coach's line, then one button named for what it does · When there is no second honest backup: the coach's line saying so, such as "I don't see another way that keeps both this Friday." |
| Every sheet | A grabber · A Close icon at the top right, with the accessible label "Close" |
| Reminder sheet with notifications off | Above the choices: Notifications are off, so this reminder can't reach you. · When she has said no before: the link Open settings |
| Reminder sheet for a timed thing at home | Heading: Remind me · Line: "For", the time and the item, such as "For 6:30pm · Dinner with Claire" · Choices: At 6:15pm · 15 min before · At 6:00pm · 30 min before · Button: Set reminder |
| Reminder sheet for a task | Heading: Remind me · Line: the task · Choices: "At", a time and how far off it is, such as "At 11:30am · in an hour", "At 2:00pm · this afternoon", "At 6:00pm · this evening" · Button: Set reminder |
| Ask someone sheet, from a task's Ask for help | Heading: Ask someone · Line: the task · Choices: everyone in her circle and her people with a mobile number, circle first · Button: Next |
| Coach card when an asked item is unanswered at her leaving time | The person's name, "hasn't answered about", the item, and what she can do herself, such as "Min-jung hasn't answered about picking Mallory up at 2:30pm. Leave home at 2:15pm and you can pick Mallory up yourself." · Button: I'll pick Mallory up · Line: Updates your game plan |

## People

| Where | Text |
| ----- | ----- |
| A child | The child's first name in a name chip, such as "Mallory" |
| Every child in a row | Both, for two children · All three, for three |
| The whole household | Family |
| The parent | You |

## Coach

| Where | Text |
| ----- | ----- |
| Input placeholder | Type, talk or add an image |
| Controls on the capture bar | Attach · Camera · Microphone, as icons with these accessible labels. While the field holds typed text, an arrow with the accessible label "Give this to the coach" joins them, and the microphone stays. Once the text runs past one line, the text takes the full width and grows up to five lines, and the four controls sit on a row beneath it. There is no Send on the capture bar, because Send on its own means sending something to another person. |
| Action on a coach answer that produces something for the plan | "Add to" and the day, such as "Add to this Thursday" |
| Example of typed text, for the wireframes only | Picture day is Friday, and the green dress is in the laundry room. |
| A capture that can't be read | I couldn't read this photo clearly. Try again with the whole page in the frame and good light. · Buttons: Retake photo, Choose another |
| A wait longer than twenty seconds | This is taking longer than it should. Your photo is safe, and you can try again. · Button: Try again |
| Source link under a captured item | "From" followed by the source and the day, said from today, such as "From the Cedar Grove Elementary newsletter · yesterday" on a Monday or "· last Sunday" later in the week |
| Buttons on a read-back | Add to the game plan · Show the newsletter, with the source named as it applies |
| Confirmation after sharing from another app | Sent to the coach |
| Label on a voice note | Voice note · 0:20, with the recording's length |
| Tag on the recommended option | MVP Coach recommends |
| Heading of the details under an answer | Based on |
| Day headings in the conversation | Today, for the current day · Yesterday · "This" and the day for earlier days this week, such as "This Monday" · "Last" and the day for the week before, such as "Last Sunday" |
| Button to reach a professional | "Call" followed by the practice's full name, such as "Call Northside Pediatrics" |
| Link to add a question to an appointment | "Add" followed by what to add and the appointment, such as "Add the cough to tomorrow's checkup" |
| Line after that link is used | "The note is on" followed by the appointment, such as "The note is on tomorrow's checkup." |

## Requests

| Where | Text |
| ----- | ----- |
| Address line on a draft | "To" followed by the name, such as "To Edward" |
| Each item on a request | The day and the item as it appears in the plan, said from the day it is sent, such as "This Thursday · Pick Mallory up at Westview Kindergarten, 2:30pm", each with its own two buttons |
| Note field on a request | "Add a note for" followed by the parent's name, such as "Add a note for Charlotte" |
| After answering | Charlotte can see your answers. If anything changes, change your answer here. · Each item shows the answer given and a Change link |
| The recipient's own note, after answering | "Your note:" followed by the note, such as "Your note: We'll get lunch after and be home by 1:00pm." |
| Notification when someone says no | The person's name, "can't do" and the day, such as "Ms. Reyes can't do this Friday." |
| Notification when a request arrives | The parent's name, "asked you about" and the day's items, such as "Charlotte asked you about the pickups this Thursday." |
| Notification when someone answers | The person's name and the answer, such as "Edward: yes to both pickups this Thursday." or "Ms. Reyes: yes to this Friday." |
| Notification when someone changes an answer | The person's name and the day, such as "Edward changed his answer for tomorrow." |
| Task left by a handoff | What was sent and where, such as "Send Westview Kindergarten the pickup note" or "Reply to the parents' group" |
| Address line for a WhatsApp group | "To" followed by the group's name, such as "To Cedar Grove Elementary 4th Grade Parents" |
| Send button | Send |
| Send button when MVP hands the text to another app | Send from WhatsApp, or the app that applies, such as "Send from Mail" |
| Heading on a request received in MVP | A sentence saying what the parent is asking, in the words a parent would use, such as "Charlotte is asking you to pick Alexis and Mallory up this Thursday." · Beneath it in Meta, "Sent" and the time, such as "Sent 6:40am" |
| Web page for someone without MVP | Heading: the same sentence and "Sent" line as in MVP · Line under the buttons: You don't need MVP to answer. |
| Text message to someone without MVP | "Charlotte sent you a request through MVP. You can answer here:" followed by the link |
| The recipient's buttons | Yes, I can · No, I can't, on each item |
| Button when changing an answer with a note | Send answer |
| After answering, on the web page | Charlotte can see your answer. If anything changes, change your answer here. |
| Link in the text message | mvp.example/r/ followed by the request's code, such as "mvp.example/r/k7m2" |

## Game plan

| Where | Text |
| ----- | ----- |
| Week strip | The first letter of each day, M T W T F S S, with the day she is reading marked, and a dot under any day with something that needs her · Once she scrolls into next week: Next week |
| Review card heading | A sentence saying how many updates are waiting, with numbers from one to nine written as words, such as "One update is waiting for your review." or "Three updates are waiting for your review." |
| At the foot of the review card, with two or more items | Add them all |
| Day on the review card | "For" and the day, said from today, such as "For tomorrow" or "For this Friday", or "For next Friday, Oct. 23" for the following week, in the Label style |
| Each item on the review card | The chips, the calendar mark when it came from her calendar, then the item and its start time, such as "[Mallory] Harvest fair, Westview Kindergarten, 3:00pm", any mark, such as "Conflict: tutoring", and the choices No thanks · Add to the game plan |
| A suggested pickup with no known end time | "Pick up at" and the place, then "time needed", after the chip, such as "[Alexis] Pick up at the Okafors', time needed" |
| Days already past, folded | The days and what was done, such as "Earlier this week · 11 done" on a Wednesday, or "Today · 6 done" once everything today is done |
| A collapsed day | The day's heading, such as "Friday", the number of items, such as "6 items" or "1 item", and the dot when something on it needs her |
| Tapping a day's heading | Opens a collapsed day or closes an open one · Accessible label: the day, its count and its state, such as "Friday, 8 items, collapsed" |
| Ask for help, the page of people | Back · Heading: Ask for help · Line: the item and its day, such as "Library run · this Saturday, 10:00am" · Circle, then People, listing the people who have MVP or a mobile number, each with their line and "On MVP" when they have it · Button: Next |
| Move picker | The days of this week and next, and a time · Button: Save |
| After she adds or moves an item | No words on screen: the row takes the coach's tint for about two seconds and fades · For a screen reader: "Added to" or "Moved to" and the day, such as "Added to this Tuesday." |
| A day with nothing in it | Nothing is planned. |
| Heading of the following week | Next week, with a sentence in the review card's form beneath it when anything there is waiting for her |
| Quiet line on an empty day in a thin week, first seen on her first night (C-00) | Tell the coach about this day, and it will suggest how it could go. |
| Owner on the parent's own items | You |
| Conflict mark | "Conflict:" followed by the other item, such as "Conflict: yoga", or the items together, such as "Conflict: both pickups", or a number, such as "Conflict: 3 items". When the other item is on another day, its day follows it, such as "Conflict: therapy next Monday, Oct. 12". |
| Owner with nobody responsible | Needs an owner |
| Source link on a calendar item | From your Google Calendar, or the calendar she connected |
| Item page | Back · The chips and the item · The day, start time and place, such as "This Friday · 3:30pm · Northside Pediatrics" · The marks · Owner, with the owner and the link Ask for help · Note, with her note or the placeholder Add a note · The source link · Backup plans, with the coach's dot, the coach's recommendation and its button, then "Plan B ·" and "Plan C ·" with their buttons · Move to another date or time |
| Item page for a calendar item | Change this in Google Calendar., in place of Move to another date or time |
| Item page for an item the coach added | The source link names where it came from, such as "From your Google Calendar" or "Added for Ada's birthday party, from your Google Calendar" · At the foot: Take this out of the plan · Taking it out is never flagged back to her |
| Read-back when several things arrive together | The number and the source, such as "Three things from your Google Calendar are in your plan this week." · Link: Show what's new, which opens a sheet listing them, each with Take this out |
| Item page for a suggested item | Suggested, then Add to the game plan · No thanks, under the title · For a trip, the source line "Suggested for" and the event, such as "Suggested for Ada's birthday party, from your Google Calendar" |
| Move to another date or time | Opens a day and time picker in place · Button: Save |
| Trying to drag a calendar item | Change this in Google Calendar. |
| Read-back strip | Label: "MVP Coach · for" and the day, such as "MVP Coach · for this Saturday" · The coach's line, such as "Ada's birthday party is this Saturday at 2:00pm. Nobody is taking Alexis yet, so I'd ask Edward, who is already out for the library run that morning." · One button named for what it does, such as "Ask Edward", with the line under it, such as "Opens a request for you to send to Edward" · Other options |
| A person's answer on an item | The person's outlined initial and an icon: an hourglass for asked, a thumbs up for yes, a thumbs down for can't. The accessible label says "Asked Edward", "Edward: yes" or "Edward can't". |

## Team

| Where | Text |
| ----- | ----- |
| Tab heading | Team |
| Button at the top of the tab | New message |
| Section headings, in order | Chats · Groups · Team |
| Circle tag | Circle, as a small outlined label after the person's line, with the accessible label "In your circle" |
| A chat's row | The other people's names, such as "Claire" or "Edward and Claire" · The latest message, with its author's name unless it is hers, when it is "You", cut to one line · Its time today, or its day said from today, such as "Yesterday" or "Last Sunday" · "1 new" in Meta when unread |
| Chats, before she has any | No chats yet. Start one with anyone in your circle who's on MVP. |
| A group's row | The group's name · The number of members, such as "8 members" · The latest post or reply with its author, cut to one line · "1 new" in Meta when unread |
| A new group's row, before any post | You created this group last week., or the day that applies |
| A person's row | Their outlined initial, their name, and the line from "Her circle and her people" · "On MVP" after the line when they have it · The Circle tag for people in her circle |
| Buttons below the lists | Add someone · New group |
| Team tab with anything unread | A dot on the tab icon, with the accessible label "Team, 1 new" or the number that applies |
| Person page | Back · Their name · Their line and "On MVP" or "Not on MVP" · Actions: Message, for circle members on MVP · Call · Text, for anyone not on MVP with a mobile number · Contact: "Mobile" and the number, or the practice's name and number |
| Section on a person page | This week, as lanes: the day abbreviated to three letters, such as "Thu", the chip, the item and the answer icon, for each item this week that they own or have been asked about |
| This week, when empty | "Nothing in this week's plan with" followed by their name, such as "Nothing in this week's plan with Claire." |
| Other sections on a person page | Chats, for circle members she has chats with · Groups, for her people |
| Composer heading | New message |
| Choice of audience in the composer | Circle · People |
| Circle choices | Everyone on MVP · each member on MVP with their line · members without MVP beneath, each marked "Not on MVP" and not selectable |
| Line under the circle choices | People who aren't on MVP can't be in a chat. Call or text them from their page. |
| People choice | Each group with its number of members |
| Message field placeholder | Write a message |
| Button | Send, for a chat · Post, for a group |
| Chat heading | Back · The other people's names |
| Line at the top of a chat | "Only you," followed by the other people and "see this chat. The MVP Coach doesn't read it.", such as "Only you, Edward and Claire see this chat. The MVP Coach doesn't read it." |
| Author label on her own messages and posts | You |
| Field at the foot of a chat | Message, with the button Send |
| Group page | Back · The group's name · "8 members · See members" · Button: New post · The posts, newest first, each with its replies |
| Reply field placeholder in a group | Reply |
| Notification for a chat message | The author's name, a colon and the message, such as "Claire: Yes, see you at 6:30. I'll bring dessert." |
| Notification for a reply to her post | The author's name and "replied to your post in" followed by the group, such as "Jenna Okafor replied to your post in Cedar Grove parents." |
| Add someone | Heading: Add someone · Fields: Name · Mobile number · Relationship, with the helper "Shown under their name on your Team." · Choice: Circle · People · Button: Add |
| After adding someone on MVP | Their name and "is on MVP.", such as "Min-jung Park is on MVP." · Button: Done |
| After adding someone not on MVP | Their name and "isn't on MVP yet. Requests reach them by text message, and you can invite them to MVP.", such as "Ms. Reyes isn't on MVP yet." · Buttons: Invite by text · Not now |
| Invitation text | I'm using MVP to plan the girls' week. You can join here: followed by the link. "The girls" follows the household, such as "the kids" for a mixed household. |
| New group | Heading: New group · Field: Group name · Heading: Add from your people · Each of her people on MVP, with a tick · Line: Everyone in a group needs MVP to see its posts. · Button: Create group |

## Onboarding

| Where | Text |
| ----- | ----- |
| Splash | The MVP mark with "Most Valuable Parent" beneath it, and beneath that the tagline "Master the parental logistics of life for every season. Build community. Solve for the win. Be the MVP." (issue O26) |
| Welcome screen | Headline: Your week has a lot of moving parts, and the MVP Coach helps you keep track of everything. · Line: Just the basics to start us off in the right direction. · Fields: Your name · Zip code, with no helper lines · Subheading: Who are you planning for? · Line: The MVP Coach works out each grade from the birth month. Change any grade that's wrong. · For each child: Your kiddo's first name · Birth month and year, such as "October 2016" · the name and "grade", such as "Alexis's grade", over a list box with a chevron, shown once the birth month is filled in · The list: Not in school yet · Pre-K · Kindergarten · First grade · Second grade · Third grade · Fourth grade · Fifth grade · Sixth grade · Seventh grade · Eighth grade · Ninth grade · Tenth grade · Eleventh grade · Twelfth grade · Link: + Add another child, directly under the last child's fields · Button: Continue · No skip link · The screen opens with the fields for one child, and each tap on the link adds another child's fields above it |
| Capture conversation | Each coach line labeled MVP Coach: and set in Voice · The coach's line in C-00 · Buttons: Take a photo · Attach a file · Talk or type · Link: Skip for now |
| The photo in the capture conversation | The photo as a large preview in place of the three buttons · Buttons: Use this photo · Retake · Once she uses it, the photo moves into the conversation as a thumbnail, her message |
| Reading, in the capture conversation | "Reading your photo…", or "Reading your file…" or "Listening…" as the capture applies, with the thinking dots beneath it |
| Confirmation before a read-back | The coach's line naming the capture, such as "This is Westview Kindergarten's calendar for October." · Question: Whose calendar is this?, with the kind of document named, such as "Whose newsletter is this?" · Choices: each child's name and grade, such as "Mallory · K", none chosen |
| Hand-off | The coach's line, saying what the draft will hold and what it keeps for later · Button: "Make" followed by the draft's name, such as "Make Mallory's plan" · Link: Something's not right · Both anchored at the foot of the capture conversation once the hand-off appears |
| Thinking screen for the draft | "Making" followed by the draft's name, such as "Making Mallory's plan…" |
| Heading of the draft | The child's name, "plan", a colon and the dates the draft covers, such as "Mallory's plan: Oct. 6 to 9" |
| Editing the draft | Each school day as a card with its date, letter and meaning, such as "Tuesday, Oct. 6 · D" over "Motor skills" · A day with reminders, and the week's school event, marked Suggested, with the buttons Keep · Change · Skip · After Keep: Kept, with a check, and Undo · After Skip: the card folded to its title over Skipped, with Undo · After Change on a day with reminders: each reminder with Remove, the link "Add something else for" and the child, such as "Add something else for Mallory", and the button Done · Link under the cards: Tell the MVP Coach what's wrong · Notice after removing a reminder: the item and "is off" the child's "list for" the day, such as "Library book is off Mallory's list for this Friday.", with Undo |
| Keeping the plan, at the end of the draft | Heading: "Keep" followed by the draft's subject, as a question, such as "Keep Mallory's plan?" · Line, which also labels the field: Create an account to save this plan and add the rest of your family. Enter the email connected to your school: · Field: the placeholder Email and the helper line "MVP uses it to recognize school emails you forward." · Button: Continue, disabled until the field holds an email · Link: Not now |
| Account prompt with nothing captured | Heading: Create your account · Field: The email your school writes to, with the placeholder Email and the helper line "MVP uses it to recognize school emails you forward." · Button: Continue, with no line and no Not now |
| Plan screen, proposed | Headline: Pick a plan and start your free trial today! · Toggle: monthly · annual · Plan: Basic · $8.99 / month · 7-day free trial · Monthly membership · AI coach · Team feedback · Button: Buy · Plan: Family · $13.99 / month · 7-day free trial · Monthly membership · AI Coach · Up to six users · Team feedback · Button: Buy · Line: Purchases will open Stripe in a new tab. |
| Calendar screen | Heading: Connect your calendar · Line: Connect the calendar you already use, and the MVP Coach brings in what's on it and tells you when something new runs into the plan. MVP reads your calendar and never changes it. · Buttons: Google Calendar · Apple Calendar · Outlook · Link: Not now |
| Calendar permission, staged | A sheet over the calendar screen · At the top, the calendar's name in plain text, such as "Google Calendar", with no logo · Most Valuable Parent wants to see your calendar · Buttons: Allow · Cancel. Drawn generic and grayscale, not to any calendar's brand. |
| Calendar screen, connected | Line with a check under the screen's line: "Your", the calendar's name and "is connected.", such as "Your Google Calendar is connected." · The calendar's button becomes its name, a middle dot and Connected, with a check, such as "Google Calendar · Connected" · The other calendars stay as outlined buttons · Button: Continue |
| School screen | The coach's line, labeled MVP Coach: · Here's what I found. Change anything that's wrong. · For each child, a row: the name, a middle dot and the grade written out, such as "Alexis · Fourth grade", over the school and start time and where they came from, such as "Cedar Grove Elementary · 8:00am · From your Google Calendar" or "Westview Kindergarten · 8:30am · From your calendar photo" · When the coach found no start time: the school alone on the row, then the coach asking "I couldn't find" the child's "start time. What time does school start at" the school, such as "I couldn't find Alexis's start time. What time does school start at Cedar Grove Elementary?", over an empty field labeled with the child's name and "start time", such as "Alexis's start time" · For a child not in school yet: an Age field in place of the school · Subheading: Your household · Row: How is your household set up?, showing her choice, which opens the choices Two parents, One parent, Two homes, Something else · Row: Language at home, showing English · Subheading: Who else helps? · A row for each adult, with the name over the relationship, such as "Edward" over "Husband" · Link: + Add someone, which opens the line "Add the adults you count on, such as a partner, grandparents or a nanny. You control what everyone sees in MVP." and the fields Name, Relationship · Button: Done |
| Getting ready screen | Headline: Getting everything ready · Steps: Saving your account · Adding the children by name, such as "Adding Alexis and Mallory" · Reading the connected calendar by name, such as "Reading your Google Calendar", shown only when she connected one · Setting up the draft by name, shown only when she made one, such as "Setting up Mallory's plan" · Getting Today ready · Each step shows done, working or waiting · Line: This takes about a minute. You can put your phone down, and everything you've entered is safe. |
| Getting ready, when account creation fails | Your account wasn't saved. Everything you entered is still here. · Button: Try again |
| Coach introduction | Byline: MVP Coach · just now · Greeting: "Welcome to the team," followed by her name, or "Welcome to the team." when she left her name blank · The recap, as in C-00, built from the sentences that apply to her path (C-00, "If she skipped a step") · Reminder, ticked, shown only when she made a capture: Remind me the night before a library day, or the reminder that fits her capture · Calendar line, ticked, shown when she connected a calendar: "Add events from my" and the calendar, "to my plan", such as "Add events from my calendar to my plan" · Button: Next |

## Kids

| Where | Text |
| ----- | ----- |
| Tab heading | Kids |
| Section headings on the tab | Kids · Schools |
| A child's row on the tab | The name, with the grade and school beneath it, such as "Alexis" over "Fourth grade · Cedar Grove Elementary" |
| A school's row on the tab | The school's full name, with the children who attend it beneath it, such as "Westview Kindergarten" over "Mallory", and the Updated mark when anything on its card has changed |
| Source link on a fact the parent told the coach | From you |
| Button for adding a school | Add a school |
| Header on a child page | The child's name, age and grade, such as "Mallory · 6 · Kindergarten" |
| Section headings on a child page | School · Every week · Going with, by day |
| Heading on a school card | The school's name, such as "Westview Kindergarten" |
| Section headings on a school card | Hours · Contacts · Rules · Calendar · Rotation · Documents |
| Button on a school card | Add to this card |
| Add a school | Back · Heading: Add a school · Field: School name · Choice: Who goes here, with each child's name chip · Line: You can add hours, contacts and rules later, or send the MVP Coach a handout and it fills them in. · Button: Add school |
| Add to this card | A sheet · Heading: "Add to the" and the card, such as "Add to the Westview Kindergarten card" · Line: "Send the MVP Coach a handout, an email or a few words, and it goes on the" and the card, such as "Send the MVP Coach a handout, an email or a few words, and it goes on the Westview Kindergarten card." · Actions: Take a photo · Attach a file · Talk or type |
| Heading of a card's history | Earlier version |
| Source link on a card fact | "From" followed by the document, such as "From the family contact list · photo" |
| Buttons on a card read-back | Open the Westview Kindergarten card · Show the email, with the school and source named as they apply |

## MVP Editorial article

| Where | Text |
| ----- | ----- |
| Link back out of an article | Back |
| Byline | "By" followed by the writer's name and "MVP staff". The names come with the approved articles (issue R15). |

## Settings

| Where | Text |
| ----- | ----- |
| Title bar | Back, at the left |
| Large title | Settings |
| Each card | A heading in Subtitle, a line in Meta saying what it holds, then label-and-value rows in Body |
| Your account | Line: You sign in and pay for MVP with this account. · Rows: Name · Email · Your age range, with the link Add your age range, which offers Under 25 · 25 to 34 · 35 to 44 · 45 to 54 · 55 and over, or the range she chose · Plan · Billing, with the link Manage billing |
| Your calendar and forwarding address | Line: These are how things reach the MVP Coach without you opening MVP. · Rows: Calendar, with the calendar's name and "connected", such as "Google Calendar, connected", and the link "Disconnect" and the calendar's name · Forwarding address, with the link Copy the address · Forwarded automatically, with each sender she set up, such as "The Cedar Grove Elementary newsletter" · When no calendar is connected: Calendar · Not connected, with the link Connect your calendar |
| What the coach adds for you | Line: The coach adds these to your plan, and you can take anything out. · Rows, each with a switch: "Events from your" and the calendar, such as "Events from your Google Calendar" · "School-day changes for" and the children, such as "School-day changes for Alexis and Mallory" · Trips you can take yourself · Turning one off sends that kind to the review card instead |
| Notifications | Line: MVP can tell you these things on your phone. · Rows, each with a switch: Notifications · the reminder she chose on 0j, such as "Reminder the night before a library day" |
| Language at home | Line: The MVP Coach writes to you in this language. · Row: Language, with the language, such as "English" |
| Privacy | Line: Here is who sees what you put in MVP. · Nobody sees your plan, your calendar or your MVP Coach conversations. People see only what you send them. · The MVP Coach doesn't read your chats or groups. |

## Demo controls

These words are for presenters only and never appear in a presented demo (issue C74). Heather reviews the alpha from the switcher, so each moment reads as its day, time and title, the way a parent would describe that part of the week, rather than as its ID, which belongs to the fixtures, the frames and the screen map (issue X6). Play the next step plays the moment's next step that has no tap of Charlotte's, such as a reply arriving or the share from WhatsApp in C-01, so the presenter sets the pace (issue C80).

| Where | Text |
| ----- | ----- |
| Switcher heading | Household switcher |
| Sections | Moments · View as |
| Moment groups | Charlotte's week · The weekend Charlotte is away |
| Day headings | The day and date, such as "Monday, Oct. 12" |
| Moment rows | The moment's time, such as "6:15am", then its title from its heading in "The moments", such as "Charlotte talks to the coach" |
| A moment that isn't built yet | The row stays in its place in muted ink and can't be tapped, with "Coming soon" beneath its title |
| Layout choices | Phone frame · Full desktop layout |
| Buttons | Play the next step · Reset · Close |
| Debug menu heading | Debug menu |
| Debug menu rows | Current moment, shown by its ID, such as "C-03" · Demo time |
| Coach responses choice | Scripted responses · A live model |

## Playbook

| Element | Copy |
| ----- | ----- |
| Coach card that recommends a playbook | "You're away from" the time she leaves home "until" about the time she is home, the number of her items in words, and "I'd hand the weekend to" the person "in one playbook" · Button: Build a weekend playbook · Meta: Opens your game plan · Link: Hand things over one at a time |
| Her view's title | Weekend playbook, and beneath it the days it covers |
| Her view's sections | Each day in order, such as This Friday, opening with when she leaves home on the first day and ending with when she is home on the last, and under each day a checklist heading for each child and "Both", each with its rows in time order · What Edward should know, ending with Add something Edward should know · Your flights · Where you're staying · Who Edward can call |
| A row in a playbook day | The time · the item, such as "Pick up at Cedar Grove Elementary" · for a part suggested for the recipient, "Suggested for Edward" and a Change link · under it, a Meta line with what only a parent would know, such as "The gift is wrapped in the hall closet." |
| A meal the coach suggests | The time and what it is, such as "5:15pm · Dinner on the way home from the fair" · a Meta line with the place and how far it is, and what Mallory eats, such as "Rosie's Pizza on Elm Street is five minutes from Westview Kindergarten, and Mallory can have a plain cheese slice." |
| Your flights | Meta: From your itinerary · each flight with its day, airline and number, and when it leaves or lands, such as "This Friday · Larkspur Air 317 · Leaves Bayview Regional Airport at 12:10pm" |
| Where she is staying | Her view: Where you're staying · Meta: From your itinerary · the place, "Front desk" and its number with its area code, and its website · the time zone and how far it is from home, such as "Eastern time, three hours ahead of home". His view: Where Charlotte is · a line with her flights, such as "Larkspur Air 317 leaves at 12:10pm this Friday, and Larkspur Air 482 lands at Bayview Regional Airport at 6:40pm this Sunday." · the place and "Front desk" with a Call button · the number and the website · a line giving the difference in his own hours, such as "Charlotte is on Eastern time, three hours ahead of you, so 8:00pm here is 11:00pm there." The time line appears only when her time zone differs from home. |
| The line that lets new things through | Send Edward anything new for these days, ticked · Meta: You won't hear from MVP until you're home. |
| Her view's button | Send to Edward to look over · Link: Save for later |
| His answers | Line at the top: Charlotte will be attending an offsite from the time she leaves until the time she is back and needs your help. Let Charlotte know what you can take, and suggest a change or ask someone else for anything that won't work. · Each part: Suggested for you, then I'll take this, Suggest a change and Ask someone else, of equal weight and stacked one under another · When two or more parts are suggested, a button at the foot of the weekend: I'll take all of it · Link: Add a note for Charlotte · Button: Send your answers to Charlotte · Notification to her, such as: Edward is taking everything suggested for him. |
| A change he suggests | Composer to Charlotte, the part quoted, placeholder "What would work better?" · The part: Edward suggested a change · Her coach card: "Edward suggested a change to" the part, then his words · Button: Open the weekend playbook |
| The plan's state | A pill beside the heading of the recipient's parts: Not sent yet · Proposed · Accepted · Change suggested |
| Asking someone else | Sheet title: Ask for backup · Line: These are the people who agreed to help this weekend. · Button names his choice, such as Ask Claire · The part: Asked Claire |
| Her choice for Ruth | On an item's page: Ask someone else, then the person, then Ruth already said yes or Send Ruth a text |
| Ruth's list | Heading: Charlotte is asking you to help this weekend. · Sent and the time · her message · the day and each part asked of her, with Yes, I can and No, I can't as radio rows · Add a note for Charlotte · Button: Send · Footer: Charlotte plans her family's week with Most Valuable Parent. · After she answers: Thank you! · If Edward calls, with when he may call, the bedtimes and Edward's name and number · her answer with Change · Charlotte can see your answer. If anything changes, change your answer here. · Add the party to your calendar?, with Add to calendar and Not now |
| Draft to someone not on MVP | Line above the message: the person's first name and "isn't on MVP, so she gets a text from MVP with a link to answer.", such as "Ruth isn't on MVP, so she gets a text from MVP with a link to answer." |
| Her view's suggestions | A box in the coach's tint under the dates: These are the MVP Coach's suggestions. Change anything that won't work for Edward before you send it. · Each item ends "Suggested for Edward" and a Change link |
| Choosing who has the weekend | Sheet title: Who should help while you are away? · Line: The MVP Coach suggests Edward, because he is home this weekend. Choose who looks after the girls while you're away. · Rows from her circle, with + Add someone · Button names the choice, such as Make the playbook for Edward |
| Changing a part | Sheet title: the item · Line: the day, the time and its status · Give it to someone else · Move it to another time · Take it out of the playbook · Then: "Who will take" and the item, such as "Who will take Sophie's party?" · Ruth already said yes · Send Ruth a text |
| The notification to him | Title: Charlotte asked you to look over this weekend. · Body: the summary row, such as "Two things for you this Friday, picking Alexis up and the harvest fair." · Opens the weekend playbook in his game plan. There is no card on his Today. |
| His view's top | The line at the top (His answers) · Received and the time · Heading: Offsite plans for the weekend · her message in quotation marks · then the weekend, with each day on a card of its own. After he answers: You have this weekend, from 10:00am this Friday. |
| The summary row | The days, and the number of items in words with what they are, such as "This Friday · Two things for you, picking Alexis up and the harvest fair" |
| His view's title | Weekend playbook, and beneath it the days, then the line under the dates (His answers). After he answers, that line becomes "You have this weekend, from" the time she leaves. |
| His view's sections | Charlotte's request · The weekend, with each day on a card and each child's rows under the child's name · Where Charlotte is · Who to call, with If plans change under the weekend once he has answered |
| If plans change | Heading: If plans change · Line: "Ruth Delgado next door can stay with the girls if you need to go out, and Claire can help if it's urgent. The MVP Coach can help you work out anything new, and you can text Charlotte if you need her." · Link: Text Charlotte · No buttons and no coach tint, because the calls live in Who to call |
| Her view's source lines | From your game plan, your evening reminders and the girls' pages · Drafted from your evening reminders and the girls' pages · From your itinerary · You choose who's on this list, then You chose these from your circle and the Kids cards · Links: Choose who Edward can call, Change who Edward can call |
| The sheet for who he can call | Title: Who can Edward call for help? · Line: These are from your circle and the Kids cards. Double check those listed for Edward to call if needed. · + Add someone · Save |
| The line on his Today | Weekend playbook · until the time she is back, such as "until about 7:30pm this Sunday" |
| The weekend summary card | Label: MVP Coach · while you were away · Button: See your weekend · Meta: Opens the weekend playbook |
| The weekend summary | Title: Your weekend · Sections: What came in · What Edward and Ruth did · Notes from Edward · Worth a look |
| If Edward hasn't answered by the evening before | Coach card: "Edward hasn't looked over the weekend yet, and" the number of parts in words "still need an owner. Ask Edward about it tonight." · Button: Open the weekend playbook |

# Appendix A: the facts we invented

The user stories left gaps, and everything in this table is a fact we invented to close one of them. Each fact goes into the seed file's metadata, so that the engineer can tell a story fact from a demo choice and so that any of these decisions can be overruled later.

## Charlotte and Edward

| Gap | What we decided | Why |
| ----- | ----- | ----- |
| The demo calendar | The demo week is Monday, Oct. 12 to Sunday, Oct. 18, 2026. C-00 is Monday, Oct. 5, 2026. The seed anchors the demo week at `2026-10-12`. | Matches the date the Ready for dev frames already show, and keeps C-00 and the demo week on one October rotation sheet. |
| Ages | Charlotte 48, Edward 50, Alexis 10 in fourth grade, Mallory 6 in kindergarten | The girls' ages and grades come from the September 25 notes. The adult ages are new. |
| Schools | Alexis at Cedar Grove Elementary, 8:00am to 2:45pm, collected at the Oak Street gate. Mallory at Westview Kindergarten, 8:30am to 2:30pm, Room 3. | The girls attend different schools, and the different hours make both the morning and the afternoon real. |
| Home | Linden Avenue, 12 minutes from Cedar Grove Elementary and 10 from Westview Kindergarten | Gives the Parks a reason to be the easy option, since they live two streets away. MVP never asks for the address. It works out travel times from her zip code, and the seed's travel table stands for those estimates. |
| Travel times | Worked out from her zip code, with five minutes added to each leaving time | A zip code is enough for a parent's planning, and a home address would add precision without changing what she does. Directions routes from wherever she is. |
| Hard mornings | Orchestra at 7:15am on Tuesday and Thursday means two trips, at 6:55am and 8:15am. On Tuesday Mallory rides along on both because Edward has left for the office. Orchestra starts on Tuesday, Oct. 13, the first week of the term's schedule, so Tuesday, Oct. 6 is still a single trip at 7:40am. | Explains why Tuesday and Thursday mornings are the hardest, and why the carpool only runs on the other three days. |
| Carpool | Mornings only. The Parks drive Monday, the Okafors Wednesday and Charlotte Friday, with Mallory riding along on Friday to Westview Kindergarten. | The WhatsApp message comes from Jenna Okafor, and Friday explains why Mallory leaves at 7:40am that day. |
| Edward's week | At the office Tuesday and Wednesday. Home Thursday, free from 1:15pm until a 2:00pm meeting is added on Wednesday. | Thursday has to be a day Edward is home so he can be asked, and the new meeting shows an accepted item reopening. |
| Who has MVP | Edward, Claire, Min-jung Park and Jenna Okafor have MVP. Dr. Ortiz, Karen Moss and Ms. Reyes do not. | Her people need MVP to take part in a group, and Edward and Min-jung receive requests inside MVP. |
| Group | Cedar Grove parents, created by Charlotte in her first week, with eight members including Min-jung and Jenna | Gives C-05 a group inside MVP to post to, separate from the WhatsApp group. |
| Alexis's week | Therapy Monday 3:30pm at Brightwater Family Therapy, violin usually Monday at Lakeside Strings Music School and this week Tuesday at 4:00pm, dance Wednesday 3:45pm at Studio Ten Dance, orchestra Tuesday and Thursday 7:15am | Violin follows the teacher's text. |
| Mallory's week | Ballet Thursday 4:15pm at Studio Ten Dance, reading tutoring Friday 3:00pm with Ms. Reyes in the library at Westview Kindergarten | Keeps Thursday afternoon real without crowding it. |
| The tutor's request | Ms. Reyes texts on Sunday evening asking for a second weekly session. The coach suggests Tuesdays at 3:00pm and Charlotte moves the start to the following week. | Arriving on Sunday lets the suggestion appear on Monday morning, and it gives Charlotte something to overrule in the game plan without the coach. |
| Charlotte's time | Yoga Thursday 2:15pm to 3:15pm at Willow Yoga. Willow Yoga also has a Thursday class at 12:15pm and a Saturday class at 8:30am. | She names the class herself. The other two classes make the coach's options real. |
| Conferences | Cedar Grove Elementary conferences on Thursday afternoon and Friday. Charlotte's is Friday at 9:20am. | Explains the early dismissal, rules out the Friday yoga class and gives the Today article its reason. |
| The therapist | Karen Moss is leaving Brightwater Family Therapy in four weeks. Her people recommend Dana Whitfield. | Replaces a plain reschedule with a question that needs other parents, which is what her people are for. |
| Min-jung Park | Sophie is in Alexis's class, Hana is in Mallory's class at Westview Kindergarten, and the Parks live two streets away. Charlotte entered these details when she added the Parks to her people. | Gives her people a practical role in the plan. The coach knows these details because Charlotte entered them, not because it reads her groups. |
| Westview Kindergarten pickup list | Westview Kindergarten releases children only to people on the pickup list, so a note from the parent is needed. | A rule parents will recognize. It keeps the coach from contacting the school on her behalf and shows the third way a message leaves MVP. |
| Picture day | Friday at Westview Kindergarten. The green dress is hanging in the laundry room. | Carries through the voice note, the game plan and the coach question. |
| Pediatrician | Dr. Lena Ortiz at Northside Pediatrics. Mallory's six-year checkup is due, and Charlotte books it in the Northside Pediatrics portal on Wednesday at 1:05pm for Friday at 3:30pm. | Gives the coach a named doctor for any medical question. |
| Charlotte's sister | Claire, an hour away | A circle member who gives advice but cannot do pickups. |
| Library run | Saturday at 10:00am, with nobody on it until Charlotte asks Edward | Gives Charlotte an item to hand to someone directly from the game plan. |
| Navigation | Today, Coach, Game plan, Team and Kids, with settings behind the parent's monogram | Adults are on Team and the children and their organizations are under Kids, so a parent can guess where anything lives. Kids replaces Settings because parents look at their children's schools every week and at settings rarely. |
| Class teachers | Alexis is in Ms. Carter's class at Cedar Grove Elementary. Mallory is in Ms. Hollis's class, Room 3, at Westview Kindergarten. | Gives each child page and school card a named teacher. |
| Cedar Grove Elementary contacts | Front office 707-555-0120, attendance@cedargrovees.org | Fills the Cedar Grove Elementary card. The phone number is in the reserved 555-01 range, and the invented domain stays, by the same decision. |
| Westview Kindergarten pickup email | On Tuesday at 3:30pm Westview Kindergarten moves pickup changes to pickups@westviewk.org, due by 11:00am on the day. | Gives the demo one card update, and the new address is used the next day in C-06. |
| Charlotte's setup answers | Zip code 00123. Alexis born October 2016 and in fourth grade at Cedar Grove Elementary, starting at 8:00am. Mallory born September 2020 and in kindergarten at Westview Kindergarten, starting at 8:30am. Two parents at home, English as the home language, and Edward and Claire as the adults who help, with the relationships Husband and Sister. | Her household as the rest of the document describes it. ZIP codes beginning 001 are not assigned to any real place. Min-jung and Jenna join her people in her first week. Alexis was first set to March 2016, which lands in fifth grade under a September 1 cutoff, so she was moved to October 2016. |
| Grade cutoff | The MVP Coach works out a grade from the birth month against a September 1 cutoff. | Lets 0w suggest a grade from a birth month. A real cutoff varies by state and district, so the grade stays a suggestion she can change. |
| The calendar header | The rotation calendar is headed "Westview Kindergarten" with "October 2026" beneath it. | Gives the coach a grade to match, so it can preselect Mallory, and a month a real school sheet would carry. |
| Westview Kindergarten events | Back-to-school night on Thursday, Oct. 8. The harvest fair at 3:00pm on Friday, Oct. 23. The Fir Hollow Farm field trip on Thursday, Oct. 29. | Puts back-to-school night in C-00's own week, so the first draft adds one event, and puts the other two in later weeks, so the hand-off can say the coach is keeping them on the Westview Kindergarten card. Keeps the harvest fair clear of Friday tutoring in the demo week. |
| Westview Kindergarten hours | Charlotte gives both schools' start times on 0f at 8:36pm on Monday, Oct. 5, and Westview Kindergarten's end time later that week. The card shows both as "From you". | Gives the hours a source, and lets her first board open with a recommendation instead of a question. |
| The onboarding times | The splash and welcome at 8:30pm, the children and grades screens and the capture at 8:31pm, the read-back at 8:32pm, the hand-off and the draft at 8:33pm, the account at 8:34pm, the calendar at 8:35pm, the school and household screens at 8:36pm, the helpers at 8:37pm, getting ready at 8:38pm, the introduction at 8:39pm, Today at 8:40pm, the other options at 8:40pm, her answer at 8:41pm, the edit state at 8:42pm and the folded reminders at 8:45pm | Gives each screen a time for the wireframes and keeps the whole of onboarding to about twelve minutes. |
| Her first board | She lands on Today at 8:40pm with the trip the coach recommends on the pass, marked "Needs an owner", and four reminders under Mallory's name as its checklist. The coach card recommends taking both girls at 7:40am, and when she agrees, the card keeps the thread and the pass turns to "Tomorrow" with Remind me to leave home. | Shows the household she just set up and makes the coach's first recommendation change the board in front of her. Mallory's four reminders are Heather's list, which Greg treats as items every parent expects rather than invented facts. |
| Westview Kindergarten contact details | The front office is 707-555-0140, and before the change in C-05b, changes to who picks up go through the family portal. Cedar Grove Elementary's front office is 707-555-0120. | Matches the post-review Figma cards from the wording review of Oct. 27, 2026. |
| First capture | On Monday, Oct. 5, the week before the demo week, at 8:30pm, Charlotte photographs Westview Kindergarten's rotation calendar before creating an account. | Shows value before the account, and explains how MVP knows Mallory's sneaker days in C-03. |
| The highlights | The yellow highlighting on the calendar is Mallory's, and means nothing. | Gives the coach one honest question to ask, and lets Charlotte's answer tell it the child's name. |
| Westview Kindergarten rotation | A six-day letter rotation, A to F. The demo week runs B to F from Monday to Friday, which puts the Tuesday after C-00 on a D day. | B, D and F are motor skills days, which is where Mallory's sneakers come from. |
| Westview Kindergarten contacts | Front office 707-555-0140, the family portal for changes to who picks up, office@westviewk.org, Ms. Hollis in Room 3, Dana Lee for learning support and Priya Nair as counselor | Gives the Westview Kindergarten note in C-06 a real address to go to, taken from the school card. The phone number is in the reserved 555-01 range. Greg chose to keep the invented domains on October 14, 2026. |
| Cedar Grove Elementary newsletter | Sent every Sunday afternoon and forwarded to MVP automatically, with a free dress day and a fifth-grade trip alongside the early dismissal | Gives the coach something to filter out, since most of a newsletter never applies to one child. |
| How Charlotte shares | She forwarded her first Cedar Grove Elementary newsletter on the Wednesday of her first week and set up automatic forwarding from the coach's offer. She shares WhatsApp messages through the share menu, which she learned on the Tuesday of that week. | Her first week has only one Sunday, which brings the demo-week newsletter, so the first forward is an older newsletter. |
| The source material | The handouts and newsletter are modeled on real school material that Greg supplied, with every name, number and address replaced | The real material carries a real school's staff names and contact details, which must never appear in the demo. |
| Forwarding address | Charlotte's private MVP address is charlotte-k7m@forward.mvp.example. | The .example domain is reserved and can never belong to anyone. It is replaced when MVP has its own domain. |
| The parents' WhatsApp group | Named "Cedar Grove Elementary 4th Grade Parents" | Gives the C-03 reply an address line. |
| Westview Kindergarten's email subject | "Changes to pickup requests start this week" | Gives the forwarded email in C-05b a subject line. |
| The rotation calendar's month | The October sheet starts with A on Thursday, Oct. 1, so C-00's week runs C, D, E, F, A and the demo week runs B to F. | Lets one photo serve both C-00 and the demo week, and puts a sneaker day on the morning after C-00. |
| Her calendar | Charlotte uses Google Calendar and connects it during setup in C-00. It holds Alexis's therapy at Brightwater Family Therapy on Mondays at 3:30pm, Alexis's dance at Studio Ten Dance on Wednesdays at 3:45pm and Mallory's ballet at Studio Ten Dance on Thursdays at 4:15pm, each as a repeating event. The coach adds all three to her plan at setup, because she left the calendar line ticked on 0j. | Gives the coach something real to find at setup, and explains why those three items carry the calendar mark through the week. Google Calendar is the most common calendar to connect and the simplest to stage. |
| The calendar photo's start time | The October rotation sheet prints "School day begins at 8:30am" under its title, so the coach fills in Westview Kindergarten's start time from the photo on the school screen. | Option C of the school screen fills each school and start time from what the coach already has, so Mallory's needs a source on the sheet she photographed (issue O36). Greg's October placeholder, added to Figma on November 24, 2026, is the September sheet with only the month changed, so it does not print this line, and where Mallory's start time comes from is open (issue O18). |
| Cedar Grove Elementary on her calendar | Charlotte's Google Calendar also holds the Cedar Grove Elementary family calendar, which she subscribed to in August. Its entry for the first day of school gives the start of the school day as 8:00am, and that is where the coach finds Alexis's school and start time. Nothing else from the school's calendar joins her plan in the demo, because the school's dates reach MVP through the Sunday newsletter. | Gives Alexis's row on the school screen a real source, "From your Google Calendar", without adding an event the coach would turn into a trip (issue O36). |
| The checkup booking | Charlotte books Mallory's checkup in the Northside Pediatrics portal for Friday at 3:30pm, the first opening, and the portal adds it to her Google Calendar. | Shows something booked outside MVP reaching the plan without her sending it, and gives the calendar a conflict to find. |
| Northside Pediatrics travel | Northside Pediatrics is 15 minutes from home. | Lets the coach give a leaving time for the checkup. |
| Ms. Reyes's answer | Ms. Reyes answers "Yes, I can" on the web page at 3:10pm on Wednesday. | Uses the text-message route for someone without MVP, which no other moment shows. |
| Dinner with Claire | Wednesday at 6:30pm, owned by Charlotte, shown with the Family chip | Gives the Family chip a real use on Wednesday's Today and shows a guest named in a row's text. Dinner appears because it is an event in the week, not a meal to plan. |
| Wednesday's drive | 22 minutes with two stops: 10 minutes from home to Westview Kindergarten and 12 from Westview Kindergarten to Cedar Grove Elementary. Monday morning's drive to Westview Kindergarten alone is 10 minutes with one stop. | Taken from the travel times. The design rounds drew 12 minutes, which is the second leg only. |
| Reminder times | The reminder sheet preselects 15 minutes before leaving and offers 30 minutes. "When it's time to leave" uses the fixed travel times in the prototype. | The times follow the design rounds, and the prototype cannot check traffic. |
| Willow Yoga's booking link | willow.example | The .example domain is reserved and can never belong to anyone, like the forwarding address. It is staged in the prototype. |
| Wednesday's call | "Call Brightwater Family Therapy to ask for Dana Whitfield", under "Before you leave home" on Wednesday's checklist, with "Brightwater Family Therapy · 707-555-0170" and a Call button, is the task Charlotte added in C-05. | Shows one of her own tasks sitting on the checklist beside a child's item, carrying why, who and a way to reach them from what MVP already holds (issue T49). |
| Meals | Mostly vegetarian, with a plain version set aside for Mallory, who is a picky eater | Kept in the seed for accuracy. Dinner does not move this week, so it does not appear in the demo. |
| Phone numbers | Edward 707-555-0101, Claire 707-555-0102, Ms. Reyes 707-555-0103, Min-jung 707-555-0104, Jenna 707-555-0105, the five other people in her group 707-555-0106 to 707-555-0110, Northside Pediatrics 707-555-0160 and Brightwater Family Therapy 707-555-0170 | Every person page shows a number, and every number is in the 555-01 range reserved for fiction. |
| The rest of the group | Tom Alvarez, Grace Liu, Dev Raman, Nina Brooks and Rafael Costa, Cedar Grove parents with MVP | Gives the group the eight members it already claimed. Their initials avoid C, E, A and M, so no outlined initial matches Charlotte's, Edward's or a child's chip. |
| When the group was created | Thursday of her first week, Oct. 8 | Follows adding Min-jung on Tuesday and Ms. Reyes on Wednesday, and comes before the demo week. |
| Chats | None before the demo week. The first, with Edward and Claire, starts in C-05c, and a direct message with Claire starts in C-06c. | A two-week-old account with no chats is believable, and it lets the demo show a chat being started. |
| How to tell Alexis | Claire suggests telling Alexis together and saying Karen is helping choose who's next. Edward suggests Sunday night. | A private family question that belongs with her circle rather than her people, which shows why MVP keeps the two apart. |
| Claire's dessert | Claire answers "Yes, see you at 6:30. I'll bring dessert." | A reply that needs nothing from the plan. |
| Edward's library note | "We'll get lunch after and be home by 1:00pm." | Uses the one request path no other moment shows, a note with a yes. Version 3.30 replaced "I'll take Mallory too, she wants new books.", because Heather's wording for the request already asks Edward to take both girls. |
| Mallory's cough | Mallory has had a cough since Tuesday, and Charlotte asks about it on Thursday night. | Gives the coach a medical question to hand to Dr. Ortiz, next to a checkup already in the plan. |
| Northside Pediatrics's after-hours line | Northside Pediatrics's after-hours nurse line is the main number, 707-555-0160. | Lets the coach give her a way to reach Dr. Ortiz's practice that night without giving medical advice. |
| Request link | mvp.example/r/k7m2, and invitations use mvp.example/join | The .example domain is reserved and can never belong to anyone, like the forwarding address. |
| Min-jung's request time | Charlotte sends it at 11:50am, and Min-jung answers at 12:30pm. | Places the send between the coach's message and Min-jung's answer. |
| Leaving times | Every leaving time is the due time minus the drive minus five minutes, rounded down to five minutes. A leg never leaves a stop before that stop is due. This moves the afternoon pickups to 2:15pm, orchestra to 6:55am, yoga to 2:00pm and the checkup to 3:10pm. | Several times in versions 3.11 to 3.14 broke the five-minute rule. One rule, applied everywhere, lets the engineer compute every time rather than copy it (issues T27, D1). |
| The Monday afternoon run | Charlotte collects Mallory at Westview Kindergarten at 2:30pm and Alexis at Cedar Grove Elementary at 2:45pm, and drives straight to Brightwater Family Therapy for Alexis's 3:30pm session, leaving Cedar Grove Elementary at 3:05pm. Mallory comes along and waits with her. | Gives the demo a run that does not pass home, which is the point of the line. The book for the waiting room was already on Monday's checklist. |
| Cedar Grove Elementary to Brightwater Family Therapy | 20 minutes | Close to the 20 minutes from home, so neither choice changes the leaving time much. |
| Alexis's therapy | Each session runs from 3:30pm to 4:15pm, and they are home about 4:35pm. | Gives the line an end, and gives the Monday clash with violin its numbers. |
| Charlotte's Monday reminder | She sets a reminder from Now at 1:40pm, 15 minutes before she leaves, and it goes off at 2:00pm. | C-03b opens on the notification. This replaces the earlier rule that she sets no reminder in the demo. |
| Wednesday's dance | Dance runs from 3:45pm to 4:45pm, and they are home by 5:00pm. | Lets the Wednesday 5:10pm board show dinner with Claire leading Now. |
| The washing machine | The washing machine leaks, and on Saturday Charlotte adds "Fix the washing machine" to Sunday with two steps of her own, "Check the drain filter" and "Run an empty rinse cycle". | Gives Sunday, which has nothing in the game plan, a task to lead Now. The steps are hers, because the coach does not advise on repairs. |
| Alexis's ordinary Monday | Violin is usually Monday at 4:00pm at Lakeside Strings Music School, which runs into therapy at 3:30pm. This week violin moves to Tuesday, so the demo week has no clash, and the coach raises it on Sunday for the following Monday. | Kept as a conflict for the coach to find, because a parent cannot be expected to catch it, and that is the job MVP does (issue C34). |
| Brightwater Family Therapy to Lakeside Strings Music School | 15 minutes | Gives the coach's recommendation of 4:45pm or later its reason: the session ends at 4:15pm, and the drive and five minutes make 4:35pm. |
| Lakeside Strings Music School's contact | Charlotte has Lakeside Strings Music School's number from its text on Sunday evening. Lakeside Strings Music School is not on MVP, so a message to it is handed to her messages app. | Gives the Sunday coach card somewhere to send the request. |
| The backups | Plan B and Plan C on Thursday's sheet are the second and third options from C-06, and Friday's Plan B is the second option from C-06b, in the coach's words from those messages. | Shows the backups without inventing new ones, and shows Friday's sheet saying honestly that it has only one. |
| Ada's birthday party | Saturday, Oct. 17 at 2:00pm at the Okafors', with no end time known. It appears only on the wireframe-only boards for adding to the game plan, and in no moment. | Gives those boards an event with a child, a place and a missing end time, so they can show the trips the coach suggests and a pickup that reads "time needed". The Okafors live five minutes from Charlotte, as C-01 says. |
| The game plan's counts | On Monday at 8:50pm today reads "Today · 6 done": the carpool, Mallory's run to Westview Kindergarten, both pickups, therapy and the reply to the parents' group. On Wednesday afternoon Monday and Tuesday read "Earlier this week · 11 done". | Taken from the drawn boards, so the counts match what the engineer sees. |
| Charlotte's email | charlotte@mail.example | Settings shows the address she signed up with, and no fixture gave one. The .example domain is reserved and can never belong to anyone. |
| Charlotte's plan | Family, chosen on 0e-p | Greg's direction for the Settings page. The plan names stay proposed until O17 is settled. |
| Charlotte's notifications | On, with the reminder the night before a library day left on from 0j | Follows C-00, where she taps Next with the reminder ticked and allows notifications. |
| Her automatic forwarding | The Cedar Grove Elementary newsletter is the one sender she forwards automatically. | Follows "Taught when useful", where she sets it up on the Wednesday of her first week. |
| Ms. Reyes says no | On the boards only, Ms. Reyes taps "No, I can't", and the coach card returns with the call to Northside Pediatrics. | Gives her web page's second button somewhere to go, the way "If Min-jung says no" does for Min-jung. No moment takes it. |
| The C-03 reminder | The choices at 7:25am are 7:35am and 7:40am, and Charlotte sets neither. | The ordinary choices had both passed, and the demo does not need a reminder on Monday morning. |
| Hana's ride on Monday | Min-jung goes straight to work from Cedar Grove Elementary this Monday, so when she collects Alexis at 7:40am she leaves Hana with Charlotte for the run to Westview Kindergarten. Hana is in Mallory's class, and the Parks live two streets away. | Gives C-03a a change Charlotte hears in person and tells the coach in her own words, which no message in her week could carry. The run's stops and times stay the same, so no leaving time changes. |
| Westview Kindergarten's fall food drive | A flyer headed "Westview Kindergarten" and "Fall food drive", asking each child to bring one canned or boxed food item this Monday, with bins by the front office. Min-jung hands it to Charlotte at the door. | Gives the capture a document someone else wrote, so its item waits for her to add it, beside Hana's ride, which joins as hers because she said it. The drive also goes on the Westview Kindergarten card's calendar. |
| Charlotte's typed words in C-03a | Taking Hana to Westview Kindergarten with Mallory, Min-jung asked. | Written the way a parent types with a child at the door, as one plain sentence. |
| The flyer photo | A prepared photo of the flyer, staged like the rotation calendar on 0a-b. | The prototype reads no live photos. |
| Her agreement to what the coach adds | Charlotte leaves "Add events from my calendar to my plan" ticked on 0j, and the three switches in Settings read On. | Shows the rule Greg approved on October 18, 2026 working from setup onward, and gives Settings its values (issue G42). |
| The notice in her first week | On Thursday, Oct. 8, while she is on the game plan, Charlotte gives the coach Alexis's weekly schedule, and the coach finds that violin and therapy overlap every Monday. | Gives the notice a moment in Charlotte's story without adding one to the demo, because the clash is found before the demo week (issue G43). |
| The conflict on the pass | On a Monday that goes differently from C-03, Min-jung texts at 7:20am that the Parks' car won't start, Charlotte shares it to MVP, and Westview Kindergarten starts at 8:00am for the kindergarten's fall assembly. Edward works from home on Mondays. | Greg chose this scenario on October 18, 2026. A carpool falling through makes no conflict on its own, because the schools are 12 minutes apart and start 30 minutes apart, so the board needs both girls due at 8:00am (issue T50). |
| The harvest fair's hours | The fair runs from 3:00pm to 5:00pm on Friday, Oct. 23 at Westview Kindergarten. | Gives C-09's Plan B its reason, because tutoring ends at 3:45pm in the same building. |
| Lakeside Strings Music School's answer | On Sunday, Oct. 18, after Charlotte texts from the 10:30am board, Lakeside Strings Music School moves Alexis's Monday lesson to 4:45pm from next week. | Clears the Monday clash before C-09, so the Sunday look-ahead can turn to Friday, and shows the coach's recommendation from the Sunday board holding. |
| The pumpkin | Charlotte types "Mallory needs a small pumpkin to paint at the fair" on the game plan in C-09. | Gives C-09 one new thing she says about her own week, which joins the plan as hers with no button (issue G21). |
| Monday, Oct. 19 | An A day at Westview Kindergarten, so Mallory's library book goes back, and Alexis's library book is due as on every Monday. | Follows the October rotation, which runs B to F in the demo week. |
| Charlotte's weekend away | Charlotte is on the board of the Brightpath Reading Foundation, a children's literacy nonprofit, and its board offsite runs at Harlow Lake Lodge from Friday, Oct. 23 to Sunday, Oct. 25. The lodge is on Eastern time, three hours ahead of home, its front desk is 802-555-0190, and its website is harlowlakelodge.example. | Greg asked for a company offsite. Charlotte is home full time, so the offsite belongs to a board she volunteers on, which keeps the household as written. Greg can swap it for a job if Charlotte's work changes. |
| Her flights | Larkspur Air 317 from Bayview Regional Airport, leaving at 12:10pm on Friday. She flies home on Sunday with one change, and the last leg is Larkspur Air 482 from Crestfield International Airport, leaving at 4:25pm and landing at Bayview Regional Airport at 6:40pm. Every time is Pacific time, as home is. | Gives the playbook her flights, and Edward the times she leaves and lands. |
| Bayview Regional Airport | 35 minutes from home. Charlotte drives herself and parks there. She leaves home at 10:00am on Friday to be there by 10:40am, and after landing at 6:40pm on Sunday she is home about 7:30pm. | Heather's fourth review: a parent would get herself to the airport. |
| Her itinerary | She forwards the Larkspur Air itinerary on Monday, Oct. 19 at 8:05pm. | Gives C-10 its capture. |
| Sophie's birthday party | Saturday, Oct. 24, 1:00pm to 3:00pm at the Parks'. It is a drop-off party. Alexis is invited, and because Sophie's sister Hana is in Mallory's class, Hana's invitation includes Mallory. The gift is wrapped in the hall closet. | Gives Saturday something to hand over, with notes only Charlotte would know, and answers Heather's questions about the sister and the drop-off. Mallory going too means nobody needs to watch Mallory during Edward's tee time. |
| The Parks' house | Two streets from Linden Avenue, five minutes by car. Ruth leaves at 12:50pm and 2:50pm, and brings the girls home at 3:05pm. | Follows "The Parks live two streets away" and the leaving time rule. |
| Ruth Delgado | Charlotte's next-door neighbor, who has watched the girls before. Charlotte adds Ruth to her circle in C-11 and marks her as the backup for the evenings. Ruth does not have MVP. Mobile 707-555-0111. | Gives Edward a person in her circle who can stay with the girls, so a backup in the playbook can depend on someone nearby. |
| Bedtimes and routines | Mallory has a bath, pajamas and teeth from 7:00pm, then two books, with lights out at 7:30pm and the star nightlight on. Alexis reads in bed from 8:00pm, with lights out at 8:30pm, and can have a banana or toast before bed. Neither girl takes any medicine. Alexis practices violin for 20 minutes before dinner. | Gives the playbook what a parent would write down, as Heather asked. The plain dinner for Mallory follows "Meals". |
| Edward's coach | The Family plan gives Edward the MVP Coach. In the prototype it speaks only on the playbook days. | Greg's decision of Nov. 19, 2026. |
| Edward's answers | Edward looks over the weekend on Tuesday, Oct. 20 from 6:20am and sends his answers at 6:31am, before he leaves for the office, taking both parts suggested for him with I'll take all of it. | Tuesday is an office day, so he opens it early. |
| Edward's tee time | Edward plays nine holes with a standing group every Saturday at 12:30pm and is home by 3:00pm. | Greg's example of something Edward won't give up, and the reason Saturday afternoon goes to Ruth. |
| Ruth's Saturday | Charlotte talks to Ruth on the afternoon of Monday, Oct. 19, before she builds the playbook, and Ruth agrees to take Alexis and Mallory to the Parks' at 12:50pm and bring them home at 3:05pm. Charlotte records Ruth's yes in C-11. | Charlotte knows Edward's tee time and expects him to balk at the whole list, so the hardest part is placed before he sees it. |
| Edward's notes | "Mallory's pumpkin is on the porch." and "Alexis left her violin folder at the Parks'." | Gives the weekend summary notes, and one that matters on Monday, when violin is at 4:45pm. |
| The harvest fair's afternoon | Westview Kindergarten keeps kindergartners in class until the fair opens at 3:00pm, so there is no 2:30pm pickup that day. The fair's games take cash, and about $10 covers both girls. | Lets Edward collect Alexis first and meet Mallory at the fair, as Heather asked, and gives the checklist the cash. |
| The weekend's meals | Friday: Rosie's Pizza on Elm Street, five minutes from Westview Kindergarten, where Mallory has a plain cheese slice. Saturday: tacos at home, with a plain cheese quesadilla for Mallory. Sunday: delivery from Golden Wok on Main Street, about 30 minutes, with plain rice and the chicken for Mallory. In the alternate path, Edward suggests Cooper's Grill. | The coach suggests what to eat when the plan puts a meal on the road, and Heather asked for dinner near the fair. Every place is invented. |
| Area codes | Charlotte's town uses the area code 707, so every number in her household reads 707-555-01 and two digits. Harlow Lake Lodge uses 802. | Heather asked that every number carry its area code. 555-01 numbers are reserved for fiction. |
| The next Cedar Grove Elementary newsletter | Arrives Sunday, Oct. 25 at 4:10pm. Wednesday, Oct. 28 is a minimum day, out at 12:30pm. | Gives the summary something that came in about the week ahead, which waits for Charlotte rather than going to Edward. |
| Back-to-school night | Westview Kindergarten's back-to-school night is Thursday, Oct. 8, at 6:00pm. | The first night's review card needs a time, and an evening event suits a school night. |
| The library run's answer | Edward answers at 7:20am on Tuesday, Oct. 13, not 7:05am. | At 7:05am Charlotte is driving Alexis to orchestra, and her pass would read Running late. |
| The checkup's end | Mallory's checkup at Northside Pediatrics runs from 3:30pm to 4:15pm. | Friday's Leave sheet needs a time to leave Northside Pediatrics and a time home. |
| Ruth's request | Charlotte sends it at 8:26pm on Monday, Oct. 19, during C-11. | The redrawn frames read 9:12am, which falls before C-11 begins. |
| The violin case | Alexis's violin case goes to orchestra on Tuesday morning and comes home with Alexis, so nothing is packed for Tuesday's violin lesson. | Keeps Tuesday's violin departure free of a second reminder for the same case. |

# Appendix B: what is still open

1. **The navigation changes to Today, Coach, Game plan, Team and Kids, which is a spec decision.** Team holds the adults. Since version 3.30 its sections are Chats, Groups and Team, with everyone in one list and a Circle tag on the people in her circle. Kids replaces Settings as the fifth tab, and settings move behind the parent's monogram. The plain fallback, if the sports naming is judged too much for this tab, is Kids and People. The tab names face customers, so they also need a brand sign-off. Version 3.25 renames Team's sections "Chats · Groups · Circle · People", so People now names a section inside Team, and the fallback would need another word for the tab.
2. **Groups and chats live inside MVP, which is a spec decision.** Only members see a group's posts, only the people in a chat see the chat, and everyone in either needs MVP. Groups that exist elsewhere, such as WhatsApp groups, stay outside, and the parent forwards messages from them. The spec's §10 needs chats, person pages, adding someone, creating a group and the unread mark (issue M6). Version 3.25 names them groups on every screen, with no other word in front.
3. **The three ways a request reaches someone need to go into the spec.** This includes what someone else's MVP shows them. This document now writes Edward's, Min-jung's and Ms. Reyes's screens for each request in Charlotte's week. View as shows the recipient's Today and those screens, and the recipient's other tabs are not part of the demo (issue S1).
4. **The rules for Today need to go into the spec.** They cover showing only today, the quiet layout and its four parts, the coach card as the one exception, the phase of the day, the dateline above the title, and what a card with no day opens. A later version could follow the family rather than the clock, ending the morning when the last child is dropped off, and that idea belongs on the roadmap.
5. **The game plan rules are written in section 2 and go into spec 0.17.** They cover the week strip, the review card, collapsible days, the item page, the read-back strip, and how a conflict reads across days. How conflicts are detected in the real product stays open in the spec.
6. **How the coach card is visually marked is partly decided.** The coach now appears as a solid dot in coach amber beside "MVP Coach", and the coach card is the only card on Today, so it no longer needs color alone to stand out. Whether the card carries any other signal is still open.
7. **The single-Thursday premise is gone, and it still appears in the project instructions and the spec.** The spec's definition of checkpoints needs to match the moment IDs here.
8. **The status model has changed and the spec needs to match it.** Version 3.5 separates the owner, including "Needs an owner", from the four statuses, and treats Updated and Conflict as marks that can sit on any item.
9. **The prototype runs on a fixed calendar.** The demo week is Oct. 12 to 18, 2026, and the dateline shows the date. The device clock is still never read. **Decided October 17, 2026.** There is no set presentation date, so the demo stays in its October week whenever it is shown, and the anchor moves only for a new season, such as a school break or the spring (issue C26).
10. **Decided October 17, 2026: each household lives in its own town,** with its own schools and places, so each week's driving is simple to follow and each seed file stands on its own. No place name carries over from Charlotte's week, and the version 2.2 place names stay only where they belong to that household (issue C18).
11. **The MVP Editorial bylines are placeholders,** and it is not decided who writes the six articles still needed.
12. **Nobody has explained what "PAS eater" means.** It stays out of the demo until someone can.
13. **A fifth household has been suggested.** This stays parked.
14. **Marcus gets no personal time in his week.** This carries into his rewrite.
15. **The four entry points need to go into the spec,** including the platform limit on the share menu for a web app.
16. **Everything given before the account needs a storage rule in the spec.** This document assumes her name, zip code, children, photo and draft are held only for the session and discarded if no account is created.
17. **The source link needs to go into the spec,** along with "From you" for facts the parent tells the coach and the rule that new captured items arrive as Suggested.
18. **The Kids tab, child pages and school cards need spec sections.** The spec still needs to define how long a card's history is kept, and how the coach decides that a captured fact is reference for a card rather than an event for the game plan. Cards for studios, teams and clinics belong on the roadmap.
19. **Onboarding now asks two things before the first capture, which changes the wording of a locked decision.** "Value before account" still holds, because the account still comes after she has seen her draft. What changes is the line "It asks for one thing before it asks who she is", because the welcome and the children screen now come first. Greg made this decision in the design session so the coach knows whose capture it is. Heather needs to see it, and the creative brief and spec need the new order.
20. **The zip code's purpose is settled, and the board is corrected.** The welcome board shows 00123 and the helper from section 4.
21. **The small cup is the MVP mark.** Greg confirmed it on October 14, 2026, so it is the mark rather than an illustration, and Hearth's rule on illustration does not apply to it.
22. **The getting ready screen uses the wording in section 4.** Greg's Figma screen takes the section 4 headline and steps, and it loses its percentage, because a number that stalls or jumps looks broken (issue O6).
23. **"Time saved" is left out of the coach's introduction.** A number would need a rule for how it is worked out, and nothing in the product measures it.
24. **The Figma onboarding copy needs these changes before it is reused.**
   - The welcome headline is rewritten from two short sentences into one, keeping Greg's image.
   - The body line no longer says "MVP Coach".
   - The location helper no longer promises activities.
   - "Ages tell the coach a lot" moves to the age field for a child not yet in school, and loses its em-dash.
   - "your kids busy day" is no longer used.
   - The step counter now runs to five, because connecting her calendar is a setup step, so Greg's five-step counter is right again.
   - "Welcome to the team, Charlotte." ends with a full stop, as the earlier "Nice to meet you, Charlotte." did, because the coach is warm without exclaiming.
   - The draft's date line "Oct. 5 - 9" becomes "Oct. 6 to 9", because the draft covers the rest of the week from Tuesday.
25. **The coach's line asking for next month's rotation sheet is not written,** because it falls outside the demo week.
26. **Decided October 16, 2026.** The real product and the prototype follow one rule on dates. Both show the day and the date on Today's dateline, and the game plan's day headings name the day only (issue G12). Version 3.25 refines the headings: they read "Today", "Tomorrow", "This Friday" and so on, and under the Next week heading "Next Monday" with no date, while everywhere else on screen a weekday says which week it is in, with the date added for the following week. Version 3.28 drops "This" and "Next" from the headings, so they read "Today", "Tomorrow", "Wednesday" and on to "Sunday", then "Monday" and so on under the Next week heading, because the list's order and that heading already say which week each day is in.
27. **MVP never writes to her calendar.** Greg confirmed it on October 14, 2026: MVP reads her calendar and builds the game plan from it, and nothing is ever written back. Writing to her calendar stays parked as F18 for the real product.
28. **Apple Calendar needs the native app.** A web app cannot read an iPhone's calendar, so Apple Calendar is staged in the prototype, the same as the share menu.
29. **How quickly the plan follows her calendar needs a number in the spec,** along with what happens when she deletes an event that someone has already been asked about.
30. **Decided November 20, 2026: the school screen is headed "Where do they go to school?"** It was headed "Who's on your calendar?". It now follows a screen about connecting her calendar, so the two may read as the same thing. A heading such as "Where do they go to school?" would avoid it, and the choice is Greg's.
31. **Edward's own calendar is out of scope.** Edward has MVP and could connect his own calendar, which would let the coach see his Thursday meeting without being told. The prototype does not show it.
32. **Decided October 14, 2026.** Greg confirmed the three assumptions from the design rounds. The coach card sits directly under Now, so the decision fits on the first screen. The wireframes show children as filled gray chips, and Family and adults as outlined. Chips lead each row, before the item.
33. **Today is phone-width only in review build 1.** At tablet and desktop widths, Today keeps the phone layout in a centered column beside the sidebar. A wide Today is parked as F20 on the spec's roadmap, and the wide Today screens from before the redesign are not used.
34. **The capture bar sits on Today, Coach and the game plan.** Today's floating "Send to coach" button was retired in version 3.14. Greg decided on October 16, 2026 that the game plan carries the bar, because it is where she builds her week (issue G18). Team and Kids have none.
35. **Child photos are not adopted.** The Kids page offered optional photos, with the name chip as the fallback, and they would need a privacy rule first.
36. **The places need addresses for Directions.** Westview Kindergarten, Cedar Grove Elementary and Studio Ten Dance have no addresses yet, and the maps app is staged in the prototype. Item 10 is decided, so each household's places get addresses in its own town. Directions is staged in the prototype, so the addresses are a launch dependency (issue D2).
37. **Directions is assumed to appear only when she is driving.** A child who leaves with another family gets "Remind me" only, as in C-03.
38. **The coach card loses its game plan link.** The quiet card has one button and "Other options", and the day it concerns is in its label. "Open Thursday in the game plan" is no longer on Today, and the full message on the Coach tab is the way to the day.
39. **JetBrains Mono stays, for the Label style only.** It sets the coach card's label and nothing else (see "Type").
40. **Decided.** The children's color, indigo since 3.19, and the coach amber are tokens in the design library, as `kid`, `kid-bg`, `coach`, `coach-ink` and `coach-bg`.
41. **Coach moves never touch her calendar while item 27 is open.** The change list proposed that "Move yoga to 12:15pm" also move the event on her calendar. Yoga is not on Charlotte's calendar, because she added it by voice in C-01, so her week never needs it, and writing to her calendar stays the open question in item 27. The "Move yoga to 12:15pm" button carries no icon, because a calendar icon would suggest that the move changes her calendar (issue T11).
42. **A two-home household has two starting points and one zip code field.** Travel times come from the zip code she gives on the welcome screen. Whether a household with two homes gives a zip code for each is open (issue O15). Charlotte has one home, so her week does not need it.
43. **Closed in version 3.26.** Setup now asks for both schools' start times on 0f, so her first board needs no question about either, and the coach's line asking for Alexis's start time is no longer needed.
44. **Decided October 14, 2026.** Body large and Body strong join the scale with the uses in "Type", Subtitle's role is confirmed, and `body-small` is removed from the design library (issue C28).
45. **Decided October 17, 2026: capture on Today moves into the prototype as C-03a.** Greg moved spec F21 into the prototype so the capture bar on Today does something in the investor demo. The earlier note follows for the record. **A talk-to-the-coach flow on the Figma boards page is parked.** The frame named "wireframes" on the "Design - lombardi" page (`2506:1261`) shows Charlotte talking to the coach from Today on a Thursday night, with the read-back landing on the coach card and on tonight's list. No moment in this document describes it, so it is parked as F21 on the spec's roadmap and is not built (issue K5).
46. **Messaging one of her people directly is not part of this version (spec F22).** Chats are for her circle, and her people are reached through groups. Whether her people can be messaged one to one is open. The alternative is a Message button on the pages of her people, which would need the same "On MVP" rule as chats.
47. **The coach doesn't draft chat messages (spec F23).** It drafts requests, group posts and handoffs, but chats are written by the parent alone in this version. Whether the coach should offer to start a chat, such as "Ask Edward and Claire", is open.
48. **Chats can't be renamed, left or changed in this version (spec F24).** A chat's name is the names of the people in it. Adding someone to a chat, leaving one and muting one belong on the roadmap.
49. **Invitations and calls leave no task,** unlike a message handed to another app. An invitation is not part of the plan, and a call is not a message she might forget to send. The spec's §9 needs this exception beside the handoff rule.
50. **Sharing a chat message to the coach is not decided (spec F25).** A chat might hold something the plan needs, such as Edward offering to drive. The share menu would let her send it to the coach as she does from WhatsApp, and nothing in this version does it.
51. **Person statuses are icons with an initial.** Greg chose icons over names on October 14, 2026, because names made rows too long. The words survive in notifications, coach lines and accessible labels. Whether a parent recognizes an hourglass as "asked" without the word is worth checking in user testing.
52. **Decided November 20, 2026: Fraunces sets titles and headlines only.** The coach speaks in Inter from the first screen, so onboarding's coach lines move to Inter in the Voice style, which the design library already sets in Inter (issue C33). No paragraph or other running text is set in Fraunces anywhere in the product.
53. **Whether parents find the Leave sheet is worth checking in user testing.** It opens from the large departure time and from the leg line with its chevron, and there is no separate Change link, so Today stays quiet.
54. **The notification title names two stops.** For a run with more than two stops it names the first and the last before home, and drops the stops between them. Whether that is enough to recognize the run on a lock screen is worth checking. Version 3.25 also opens the title with where she leaves from, such as "Leave home in 15 min for Westview Kindergarten, then Brightwater Family Therapy", which makes it longer and adds to the same check.
55. **Friday's carpool run is not written.** It collects Ada and Sophie on the way to Cedar Grove Elementary, and their homes have no travel times. No moment shows Friday's Today, so nothing in the demo needs it.
56. **Backups are written only for the runs the demo shows.** Thursday's and Friday's sheets in C-06 and C-06b, and Monday's in the Sunday board, carry backups. Every other sheet shows no backups in the prototype, which is not the same as the sheet saying there is no honest backup. The real product works them out.
57. **Running late to a pickup could offer a note to whoever is waiting.** It is parked as F27 on the spec's roadmap.
58. **Whether the edge of the sheet reads clearly as it covers Now** is worth checking on a real phone. The canvas sheet and the paper behind it are close in tone, and the rounded corners carry the edge with no line or shadow, because Today allows only two drawn lines. If the edge is too faint, the fix is a token in the library, not a new line.
59. **A compact strip with the route and leaving time could stay above the sheet once it covers Now.** It is parked as F29 on the spec's roadmap, and user testing will show whether parents lose track of the time while they read the rest of the day.
60. **The Coach tab is read as a conversation.** It keeps a fixed title bar reading "Coach", with the monogram, rather than a large title that fades, because its messages open at the newest and are read upward. Greg to confirm (issue C39).
61. **Decided October 16, 2026.** The week strip sticks under the game plan's title bar and marks the day she is reading, and the day headings scroll with the agenda, because two layers that stick would say the same thing (issue G22).
62. **Chats, composers and a group's page hide the tab bar,** following iOS, because their foot is a message field or Send. Greg to confirm (issue C39).
63. **New message stays a labeled button in Team's title bar.** An icon would take less room but needs a new icon in the library. Whether to change it is open.
64. **Decided October 17, 2026: C-09 is written, as an Optional moment,** under the rule in item 78. The fair is the one item waiting, she adds it from the Sunday look-ahead, and she tells the coach about a pumpkin from the game plan. The proposal follows for the record. **A Sunday moment is proposed and not written.** No moment shows Charlotte planning next week or adding to the game plan through the coach. The proposal is C-09 on Sunday, Oct. 18 in the evening: she opens the game plan from the Sunday coach card and finds the harvest fair at Westview Kindergarten on Friday, Oct. 23 at 3:00pm running into Mallory's Friday tutoring, the Monday clash between violin and therapy, and the first Tuesday tutoring session. She adds the fair, the coach suggests a way through with alternatives, and she says one new thing into the capture bar. Greg to confirm (issue G21).
65. **Decided October 17, 2026: the mark shows as soon as the coach finds the conflict,** on both items and as the dot in the week strip, and a notice tells her in the moment when she is in the app. The coach card raises next week's conflicts in the Sunday look-ahead when nothing more pressing is waiting (issues G26 and G43). The question follows for the record. **When a recurring conflict first shows is not decided.** The Monday clash between violin and therapy carries its mark on next week's items from Monday of the demo week, but the coach raises it only on Sunday, so it sits in the game plan for six days before the coach mentions it. The boards show the mark from Monday. The other choice is that next week's routine items carry no marks until the Sunday check. Greg to choose (issue G26).
66. **Decided October 18, 2026: nothing from inside the plan gathers on the review card.** A "can't" and a conflict that needs a choice come to the coach card one at a time, an unopened Updated mark stays on its row with no dot, and a day holding a decision opens expanded (issues G34 and G42). The question follows for the record. **Where items already in the plan go when they come to need her is not decided.** The review card holds new things. An answer of "can't", an unopened Updated mark and a new conflict between two items she already has stay on their rows, with the dot in the week strip. The recommendation is that the review card holds them too, under their day, with one choice, "See options", which opens the item's page at "Other ways this could go". Greg to choose (issue G34).
67. **Two single-word actions are left as they are.** "Directions" stays, because it is the word every maps app uses. "Answer" on the coach card becomes a phrase that says what she adds, such as "Add the start time", which Greg chose on October 18, 2026 (issue G37).
68. **The capture bar grows to five lines and then scrolls inside.** Greg decided that the text area grows as she types, and the limit of five lines is Claude's proposal (issue A10).
69. **The coach's question for an event's end time is not written.** A pickup with no known end time reads "time needed", and the coach asks for it one question at a time. No moment needs the line (issue G28).
70. **Settings is drawn for the demo,** from Greg's earlier design and Charlotte's facts, as five cards (issue U3). Manage billing, Disconnect Google Calendar, Copy the address and the switches are staged and change nothing. The card for the coach's voice and personality in that design is a new feature, parked as spec F33.
71. **Decided October 17, 2026: Greg accepted both lines.** The folded group now reads "Alexis needs · 3 packed", following the heading (issue T44). The note below is kept for the record. **Two lines of the checklist roll-up were Claude's proposals.** Greg decided the folded group, such as "Alexis · 3 packed", and the folded checklist, "Everything is packed for 7:40am" (issue T38). Her own tasks fold to "Before you leave · 1 done", because a call is not packed, and Reminders for the morning folds to "Everything is ready for the morning." Under Now the line still reads "packed" when her tasks are on the list, as in C-06b, and "Everything is ready for 2:15pm" is the alternative. Greg to confirm (issue T41).
72. **Decided October 17, 2026: a reminder sheet offers only the times still ahead.** When fewer than two choices are left, five minutes before joins them, and for a child leaving with someone else the sheet is headed "Remind me", the last choice names the family and the traffic check is dropped, as in C-03 (issue T42).
73. **Decided October 17, 2026.** **The recipient's own note shows as "Your note:" on their card** after they answer, as on Edward's cards in C-04b and C-06. This is Claude's proposal (issue S6).
74. **Decided October 17, 2026.** **The coach card after Ms. Reyes says no has "Not now" as its second action,** because the call is the only way through and a card with one way forward names an alternative. This is Claude's proposal (issue S6).
75. **Short confirmations in Meta stay labels.** "Game plan updated", "Westview Kindergarten card updated" and "Sent to the coach" sit beside the action they confirm, like the text in a status pill, so the rule in section 4 keeps them short. Writing them as sentences, such as "Your game plan is updated.", is the alternative. Greg to confirm.
76. **Decided October 17, 2026: the children's color is indigo (issue C42).** Heather did not like the green, and Greg chose Indigo from the three blues on the page "Drafts - scrub 2", first as #3B4F9A text on a #E7E5F6 chip, and then revised it with the new surface ramp to #22549A on #DDE5ED, which is the value in "Color" (issue C44). Adults take ink-500, #4A4741, 8.9:1 on paper. The green also measured almost the same gray as cerulean, which was a second reason to change it.
77. **Hana carries no chip in C-03a.** She is a guest, so she is named in the item, as Claire is in "Dinner with Claire". Whether a child from another family riding along should look different from an adult guest is worth checking in user testing.
78. **Decided October 18, 2026: the coach adds what she has already committed to.** Greg approved g34-coach-adds-proposal.md as written, with her agreement as a ticked line on 0j rather than a question later in her first week, because she has just watched the coach read her calendar and the choice sits beside the reminder she already makes there. This partly reverses the October 16 rule that nothing from her calendar joins the plan until she adds it, which answered clutter from invitations, birthdays and other people's events, and those stay out. It changes a promise on screen, so Heather should see it before the investor demo (issue G42, spec F35).
79. **Decided October 18, 2026: lines that read as disclaimers come off the screen.** "Nothing goes in your plan until you add it.", "You send this. MVP never sends anything for you." and each person's "sees only what you send." are gone, and the privacy line leaves composers and stays at the top of a chat and on a group page. The calendar screen's promise, the recipient's answer line and "You don't need MVP to answer." stay, because each tells someone what to do or answers a permission (issue G41).
80. **The notice is drawn on a wireframe-only board.** Charlotte's Monday clash is found before the demo week, so no moment shows a notice. Whether a parent notices four seconds of text above the tab bar is worth checking in user testing (issue G43).
81. **C-09 leans on the Sunday 10:30am board.** Lakeside Strings Music School's answer clears the Monday clash before C-09, so the presenter should either show that board first or say in a line that Lakeside Strings Music School answered. The presenter script settles which.
82. **The conflict on the pass is a wireframe-only board in a different Monday.** It contradicts C-03, where the Parks drive as usual, so it is never shown in the same run of the demo (issue T50).
83. **Decided October 18, 2026: Greg's redesign of Now.** What, when and where sit on a tinted pass, the fields sit under it, and two dashed lines tie the list and the actions together. The pass is a surface for the trip and not a card, so the coach card is still the only card the coach speaks in, and Today now draws a rule under the time and two dashed lines inside Now. The chip leaves the pass, and a child the list does not name is named in the title. Checklist headings read "Mallory will need" (issue T51). Version 3.25 settles the title further: it always names the child, in the words a parent says aloud, such as "Pick Mallory up at Westview Kindergarten", whether or not the list names her.
84. **Whether the tint alone tells a parent that a child is on the leg** is worth checking in user testing, along with whether the subtle tint on her own trips reads as a pass at all.

85. **Closed in version 3.30.** Heather decided that removing a reminder asks "Just tonight" or "Every night", and that she can add her own item.
86. **The checklist heading should be a name chip.** Each child's group is headed by the name alone in indigo text, and drawing it as the child's name chip waits on the component library, because changing ChecklistGroup would also change the baseline Figma page.
87. **Decided November 20, 2026: orchestra starts on Tuesday, Oct. 13 (issue T58).** The text that follows is kept for its history. The first board's Tuesday morning ignored orchestra. Appendix A says Alexis has orchestra at 7:15am on Tuesdays and Thursdays, which makes those mornings two trips, at 6:55am and 8:15am. Oct. 6 is a Tuesday, yet 0i-a recommends taking both girls at 7:40am, and 0i-h shows Alexis dropped off for an 8:00am start. The coach doesn't know about orchestra on her first night, because it is on neither her calendar nor the rotation she photographed, but the real Tuesday would still start at 6:55am. Claude recommends one new invented fact, that orchestra starts on Tuesday, Oct. 13, the first week of the term's schedule, which keeps every approved frame as it is. Greg to decide.
88. **Decided November 20, 2026: 0i-h stays a single board inside C-00, and its sheet holds Tuesday's afternoon routine in Later today (issue T53).** The text that follows is kept for its history. 0i-h needed a moment ID and a sheet. It shows Tuesday, Oct. 6 at 8:05am, which falls between C-00 and the demo week, so it may deserve its own moment rather than sitting under C-00. The canvas sheet beneath its pass is empty, because nothing in this document says what else is on Charlotte's Tuesday. Revised November 21, 2026: the sheet on 0i-h is hidden rather than filled with Tuesday's afternoon, because that Tuesday is outside the demo week (issue T84).
89. **Five changes wait on the component library,** because changing a library component also changes the baseline Figma page. CoachCard needs two after-answer states, one for agreeing and one for choosing another option. NowBlock needs a trip variant whose timetable replaces the fields, with Past, Current and Ahead states for each row, a "Tomorrow" stage and a "Needs an owner" stage for its status pill, a checklist headed "Reminders for the morning", an "At home" line in place of the route, and a way to show no checklist. ChecklistGroup needs a four-item variant. ChecklistItem no longer needs a remove variant, because every checklist row is now the local ReminderItem (item 111). LaterTodayRow sets its time in JetBrains Mono, which breaks the rule that mono sets only the coach's labels, and its item text starts wherever its chip ends, so rows with different names don't line up. Until then the post-review frames use detached copies.
90. **Closed in version 3.27.** C-07 repeated the violin case and orchestra folder in Reminders for the morning and under the 6:55am departure. The reminders now sit on tomorrow's pass and hold only what goes with that departure, so each item appears once.
91. **Closed in version 3.32.** The decline draft is drawn as "C-03 · Draft · Say you can't this week" and written into C-03.
92. **The read-back's confirmation reads "Who's calendar is this?" in Figma.** This document writes "Whose calendar is this?", and the Figma frame needs the same correction.
93. **Decided November 20, 2026: 0g and 0h are one screen (item 113).** The text that follows is kept for its history. 0g and 0h might become one screen. Heather's wording for 0g arrived on Oct. 28, 2026, "How is your household set up?", so combining the two screens is no longer blocked. Greg draws the combined screen.
94. **Live arrival times are a product feature (spec F36).** In the product, the arrivals in a trip pass's timetable would move with live traffic. The prototype keeps the fixed travel times and counts the pill down against the demo clock.
95. **Decided November 20, 2026: an anytime task's reminder and Ask for help live on its item page (issue T61).** The item page still needs a frame. The text that follows is kept for its history. Since version 3.27 a task never leads Now, so the Remind me and Ask someone buttons of the task-led Now have nowhere to sit on Today. Claude recommends the task's item page, which the game plan already opens and which already has Ask for help, with a reminder added beside it. The item page for a task has no frame yet.
96. **Three lines from version 3.27 need Heather's wording review:** "Needs an owner" as a status pill on a pass, "At home" in place of the route, and "Everything is packed for 6:55am" as the evening fold line while later departures still have items open.
97. **Decided November 20, 2026: 0i-d's card reads "Your week is empty so far." (issue O23).** It used to say "Today is empty so far." The pass is tomorrow's first school start from setup, so the card's line is still true of the plan, but the two read oddly together, and the card may want to say "Your week is empty so far." instead. Greg to decide (issue O23).
103. **Heather's second wording review, Oct. 28, 2026, is written in.** She chose the fuller versions for the first board's coach card, the evening reminders and Edward's request, and the lean version for the C-08 answer, which is unchanged. Greg agreed with every decision. The fuller versions give reasons that the decision of Oct. 22 kept out, so the reasons now stay where Heather chose them, and the other coach cards keep the lean form until she reviews them.
104. **The evening reminders in C-07 are written as instructions.** The other evening lists, such as Mallory's four items on her first board, are Heather's own list and keep their short form until she says otherwise.
105. **Requests open with a sentence saying what is asked,** such as "Charlotte is asking you to pick Alexis and Mallory up this Thursday.", with the time sent beneath it in Meta. The message under it stays in her own voice.
106. **The Team list keeps her circle first.** Heather chose one list with a Circle tag, and this document puts the tagged people first so the people she trusts most stay at the top. Greg can change the order.
107. **MVP Editorial is withdrawn until approved articles arrive** (issue R15). Charlotte's two articles were drafted with Claude and carried invented bylines, and Heather rejected them as unvetted.

108. **Decided October 28, 2026: Greg's update to Now.** The phase icon is back beside the dateline, which is set in Title. The trip timetable marks each row with an icon for its kind of place. The evening reminders heading names the phase of tomorrow's first departure and is set in Subtitle, and its folded line names the same phase. Every checklist row sits in its own container with a remove button, "Edit this list" and 0i-e are gone, removing shows a notice with Undo, and each child's group ends with "Add something else for" and the child's name. The coach's dot comes off the capture bar.
109. **Lines for Heather's next wording review:** "Reminders for tomorrow morning", "Everything is ready for tomorrow morning.", "Add something else for" and the child's name, the placeholder "What else does Mallory need?", the two notices, and "Just today" and "Every day", which this document adds for removing a repeating item during the day, because Heather chose "Just tonight" and "Every night" for the evening only. The phase icon is not on the list, because her review asked only for the phase title to go.
110. **Closed in version 3.31.** 0i-k draws the row asking Just tonight or Every night, and 0i-i's notice reads "Lunchbox is off Mallory's list for tonight."
111. **Closed in version 3.32.** StopMarker and ReminderItem are built in the library, Greg published it, and on Nov. 19, 2026 the frames swapped from the local components to the library ones and the local section was deleted. The note that follows is kept for its history: ReminderItem gains a Choosing state for Just tonight and Every night. The CaptureBar component no longer draws the coach's dot. The school icon still has no confirmed Material Symbols or Lucide name.
112. **The Now pass is detached on 22 frames,** so its checklist can use ReminderItem rows. NowBlock's checklist slot needs to take ReminderItem rows before those frames return to instances (item 89).
113. **Decided November 20, 2026: 0g and 0h are one screen (issues O22 and O24).** Greg approved the draft, and the onboarding sections and section 4 now follow it. The text that follows is kept for its history. The draft puts "Who else helps?" under "Your household" on one setup screen, with the line, Edward and Claire, "+ Add someone" and the button Done. Combining it forces three wording decisions that this document has not yet taken: the setup counter becomes four steps, so 0e, 0q, 0f and the combined screen read 01 of 04 to 04 of 04; "Who else helps?" becomes a subheading rather than a screen title; and the button reads Done. The combined screen also scrolls, because it is taller than the phone, while the button stays pinned. The StepCounter component in the library still draws five segments and needs a four-step variant. Once Greg approves, the onboarding sections and the screen map are rewritten and 0h retires.
114. **Decided November 20, 2026: a Now taller than the space above the capture bar makes the page scroll as one (issue P2).** "Now stays in place" in section 2 now carries the rule, and the boards that already scroll as one page follow it. The text that follows is kept for its history. C-07 scrolled as one page. With tomorrow's pass and Alexis's reminders filling the phone, For tomorrow sat behind Now and could not be reached. C-07 now scrolls as one page with For tomorrow directly under Now, as 0i-a, 0i-c and 0i-f already do. This departs from "Now stays in place" in section 2, and the decision whether one scrolling page becomes the rule for every Today board is still Greg's (issue P2).
115. **The withdrawn article is drawn as placeholder lines.** The C-08 article frame keeps its label and title as placeholders and shows gray lines in place of the byline and body, and the MVP Editorial cards on the Today boards no longer link to it. Nothing about the slots or their reason lines changes (issue R15).
116. **Each request's heading is set in Body strong, with "Sent" and the time beneath it in Meta.** Section 4's Requests row names the sentence and the Meta line but not the sentence's style, and the frames now draw it this way.
117. **Decided November 19, 2026: the weekend Charlotte is away is a route of its own.** Greg asked for a journey where Charlotte hands the plan to Edward for a weekend, nicknamed auto pilot, and chose the week after the demo week, the moments C-10 to C-15, the name Playbook and a view inside the game plan. It is likely the last journey in V1 (spec F37).
118. **The route pushes against three locked decisions, for this journey only.** Edward sees the days of her plan she puts in the playbook. Anything new for those days goes to Edward without her sending it, because she ticked the line that says so. Edward has the MVP Coach on those days, because the Family plan includes it. Greg approved all three on Nov. 19, 2026.
119. **Charlotte hears nothing while she is away.** No notification, coach card or answer reaches her from Friday at 10:00am until she opens MVP again, which is why she built the playbook. Edward's answers and notes wait for the weekend summary.
120. **Superseded November 19, 2026 by item 132.** The playbook was first a handover that Edward acknowledged with Got it. Greg replaced it the same day with a draft she edits and he looks over and accepts. What stays is that once he accepts, he never marks a can't, and when something breaks he turns to the backups in the playbook, such as Ruth.
121. **Decided November 20, 2026: the offsite stays the Brightpath Reading Foundation's board weekend (issue Y3).** Charlotte's offsite is a nonprofit board's, not a company's. Greg asked for a company offsite, and this document says Charlotte is home full time, so the trip belongs to a board she volunteers on. Greg can change Charlotte's work instead.
122. **Decided November 20, 2026: Charlotte is not listed on Who to call (issue Y2).** Where Charlotte is gives the lodge's front desk with a Call button, which reaches her for something serious. The text that follows is kept for its history. The question was whether Edward's view should list Charlotte for emergencies. She asked not to be bothered, and the playbook leaves her off Who to call. A real parent would want to be reachable if a child is hurt, so Greg should decide whether a line such as "Charlotte, for an emergency" belongs at the foot of the list.
123. **The weekend summary is the first coach card about days that have passed.** It brings part of F34, the coach asking how something went, into the prototype, and it appears once, on her first morning back.
124. **The playbook is drafted in Figma before it is wired.** Its frames sit on the page "Drafts - playbook" until Greg approves them, and Heather sees the journey only after the pass is complete. Every line in C-10 to C-15 is new and needs her wording review then.
125. **Decided November 19, 2026: on the playbook days, help needed the same day leads with a call.** A message can sit unread while the time runs out, so the coach card's button calls the person, a text goes from his own messages app, MVP sends nothing, and he tells the coach what they said. Every request card keeps a deadline after which the coach turns to the backup that depends on nobody, so he is never left waiting (issue Y7).
126. **Call first is for the playbook only, for now.** The demo week's requests stay as they are, including Min-jung's pickup in C-06, which is two and a half hours away. Whether help needed within a few hours should lead with a call everywhere is parked as issue Y8.
127. **Decided November 19, 2026: the playbook shows where each part came from.** Her items come from the game plan, the notes are drafted from her evening reminders and the girls' pages, and she chooses who Edward can call from her circle and the Kids cards, with the coach's suggestions ticked. Greg asked who decided the list, and the answer on screen is Charlotte.
128. **On Edward's screen the playbook is Your playbook.** Charlotte's side keeps Edward's playbook. Greg chose the name on Nov. 19, 2026.
129. **Retired November 20, 2026, with C-14 (item 143).** With no airport pickup, a late flight moves nothing of Edward's, so the flight's line and the alert left his Today. Her flights stay in Where Charlotte is. The text that follows is kept for its history. Decided November 19, 2026: Edward's Today shows Charlotte's flight. Greg asked for it because Edward has her flight in MVP through the playbook. On the day she flies home, a line under "Your playbook" gives the flight's status, the pickup's pass shows the landing time, and his phone alerts him when a change moves his leaving time. MVP follows the flight itself, so the delay no longer depends on Charlotte setting her email to forward the airline's messages, which C-11 asked of her until version 3.35. A change that does not move his leaving time updates the line quietly, because an alert he cannot act on is noise (F38, issue Y9).
130. **Flight status is for the playbook only, for now.** Whether Charlotte's own Today follows a flight when she picks someone up, such as Claire visiting, is parked with F38.
131. **Decided November 19, 2026: Edward's playbook says where Charlotte is staying.** Greg asked for the place, its phone number and a note when the time zone differs, and set the lodge at least three hours from home. The lodge is on Eastern time, so a flight home that lands at 6:40pm Pacific time leaves the East in the early afternoon. That is why her flight home has a change: the delay at 4:15pm Pacific time can only arrive before the last leg leaves if the last leg leaves late in the afternoon. The section sits after If plans change and before Who to call, and the time line puts the difference in Edward's own hours, because "three hours ahead" is easy to misread at night. The number is the lodge's front desk rather than Charlotte's phone, which reaches her for something serious without MVP ever contacting her, and so it partly answers item 122.
132. **Decided November 19, 2026: the playbook is a draft she edits and he accepts.** Greg saw that the coach's draft read as settled and could overburden Edward, and that a weekend of someone else's plans should not arrive out of the blue. Everything the coach drafts is a suggestion marked "Suggested for Edward", the coach suggests only what is already hers on those days, she edits and can save for later, and she sends it for him to look over. He answers each part, and nothing is his until he says yes to it (item 134). In C-11 she takes out the violin note to show an edit, so the playbook holds six things.
133. **Decided November 19, 2026: what has no yes stays hers.** Anything Edward has not said yes to stays Charlotte's with "Needs an owner", her coach card warns her on Thursday evening if he hasn't answered, and the playbook runs with whatever has a yes.
134. **Superseded November 19, 2026 by item 135.** Edward answering each part with Yes, I can or No, I can't, and Ruth being asked after he said no, was the first version of this decision.
135. **Decided November 19, 2026: the weekend playbook belongs to no one until he answers, and he never says No, I can't.** Greg saw that the review screen read as settled and that a list he could refuse part by part would set Charlotte and Edward against each other. Both views are titled Weekend playbook, because a name on it confuses whose it is before he agrees. Charlotte lines up Ruth before she sends it, so Ruth's part arrives marked Ruth: yes, and she can record a yes she got in person, as Edward does in C-14. Each part suggested for Edward has three choices of equal weight: I'll take this, Suggest a change, which writes to Charlotte, and Ask someone else, which sends a request from Edward to a person she chose. In the story he takes all three of his parts. This is a rule for playbooks only, and every other request keeps Yes, I can and No, I can't. Once he has taken a part, he never marks a can't on the day and turns to the backups.
136. **Decided November 19, 2026: Charlotte chooses who has the weekend, editing is visible, and Edward's request lives in the game plan.** Greg saw in the prototype that Charlotte never chose between Edward, Claire and Ruth, that the line telling her she could edit was easy to miss, that Ruth was missing from one state of the call list, that the card on Edward's Today broke the design of Today, and that the girls' care notes sat under the contacts. C-11 now opens with the sheet "Who will have the weekend?", where she adds Ruth to her circle. The coach's suggestions sit under a box in its tint, every part has a Change link, and changing a part opens a sheet to give it to someone else, move it or take it out. The coach's question about who can stay with the girls is gone, because Ruth is chosen first. Edward gets a notification that opens the playbook in his game plan, with Charlotte's request and message at its top, and How the girls' days go follows the weekend.

137. **Decided November 19, 2026: Edward's view takes Greg's day-by-day layout.** Greg redrew Edward's view before he answers. Each day of the weekend sits on a card of its own, and the three choices on each part are stacked one under another, because three buttons of different widths wrapping in a row looked random. The line saying why Edward is being asked moved above Charlotte's message and now says she needs his help, the message gains the heading "Offsite plans for weekend", and "Sent" becomes "Received", because Edward is the one receiving it. Every other request still reads "Sent" under Heather's second wording review, so Heather should see this difference (issue Y4). Edward's view after he answers has not yet taken the same layout.

138. **Decided November 19, 2026: on her playbook, backups are a choice for later, not buttons.** Greg saw that Call Ruth and Take both girls on Charlotte's page for the Sunday pickup read as if tapping them would call Ruth on Monday evening. On her playbook the backups are what Edward does if something goes wrong on Sunday, so she chooses with radio buttons which one he tries first, and the other stays ready, because removing Plan C would leave Edward with nothing if Ruth doesn't answer. There is no main button, because nothing is sent from the page, and the choice saves with the playbook. Edward's Leave sheet and his coach card on Sunday keep their real Call Ruth and Take both girls buttons. The page reads "Suggested for Edward" and loses Ask for help, because Change on the playbook gives a part to someone else.

139. **Decided November 19, 2026: the airport pickup carries no chip.** Greg saw the "Both" chip on the Sunday pickup's page and said a group chip means the item is for the children, such as their appointment, and taking them along to pick up their mother is no different from taking them to the grocery store. The chip comes off the pickup in Charlotte's playbook, on its page, in Edward's view and on the sheets drawn over them. This sits awkwardly with the older rule that a child who comes along to a sibling's activity gets the group chip, as at Brightwater Family Therapy and Studio Ten Dance, so issue G45 asks Greg whether that rule changes too.

140. **Decided November 19, 2026: Greg's sheet titles.** Greg rebuilt the playbook's sheets on the library's sheet component and retitled four of them: "Who should help while you are away" for choosing who has the weekend, "Who can Edward call for help" for the call list, "Who will take Alexis to the party?" for giving away Sophie's party, and "Ask for backup", with the line "These are the people who agreed to help this weekend.", for Edward asking someone else. Two slips on the frames were corrected: the party sheet named Sophie, who is the birthday girl, where it means Alexis, and "how" stood for "who". The first two titles asked a question without a question mark. Greg decided on November 20, 2026 that every title that asks a question ends with one (issue Y16).

141. **Decided November 19, 2026: the plan's heading names whose plan it is, and a pill shows its state.** Greg found "Edward's weekend" read as written by AI and renamed it "Edward's weekend plan", with "Your weekend plan" on Edward's side, and asked that the plan say whether it is proposed or accepted, including when Edward can't take something. Because a playbook has no No, I can't, a part that doesn't work for Edward shows as "Change suggested". Greg's "Rides needed for the kids" became "Your airport rides", because the two rides under it are Charlotte's own trips to and from the airport. Greg also gave the line saying why Edward is being asked a banner of its own above the title, and it is set in ink because amber belongs to the coach.
142. **Decided November 20, 2026: a child who comes along carries no chip (issue G45).** The reasoning that took the chip off the airport pickup in item 139 now covers a sibling's activity too, so the Brightwater Family Therapy and Studio Ten Dance rows carry only Alexis's chip and say "with Mallory". Section 2 carries the rule, and the C-03, C-03b and C-06 rows and the C-03b Leave sheet follow it.
143. **Decided November 20, 2026: the airport rides leave the playbook, and C-14 is retired.** Heather's fourth review said a parent would get herself to the airport by car, car service or rideshare, so Charlotte drives herself. With no Sunday pickup, the late flight, the call to Ruth and the backups page for the pickup have nothing to do, so C-14 and "If Ruth doesn't answer" are retired and the ID C-14 is not reused. Whether a later version needs a moment where something goes wrong on a playbook day is open.
144. **Decided November 20, 2026: the playbook runs day by day and child by child.** Heather asked that it start when Charlotte leaves home and spell out, for each day and each child, what a parent carries in her head: the bedtime routine, a snack, medicine, the nightlight, the gift, whether a party is a drop-off and whether a sibling is invited, cash for the fair, and dinner. Both views follow the same days in the same order, with each child's rows under the child's name, and "How the girls' days go" folds into the days.
145. **Decided November 20, 2026: the coach suggests what to eat.** Greg said this was part of the original plan. When the plan puts a meal on the road, the coach suggests what to eat and a place near where the family will be. Places are invented in the prototype, and a suggestion is never sponsored or paid for.
146. **Decided November 20, 2026: Edward can text Charlotte.** If plans change offers Call Ruth, Call Claire and Text Charlotte, last. Charlotte stays off Who to call, and MVP never writes to her for him, so texting her is his choice. This revises the decision on issue Y2 made earlier the same day. Revised November 20, 2026, after the redraw: If plans change is a plain section with its line and a Text Charlotte link, and the calls live only in Who to call, so each call appears once (issue Y19).
147. **Decided November 20, 2026: Edward can take every part at once.** When two or more parts are suggested for him, I'll take all of it sits at the foot of the weekend, after he has read it.
148. **Decided November 20, 2026: every phone number carries its area code.** Charlotte's town uses 707, and the lodge 802.
149. **Heather wants to play the sequence for giving Sophie's party to Ruth before she judges it.** She could not judge the two sheets from their words alone. Nothing changes until she has played it in the redrawn starting point C, and the review is parked for after alpha 2 (issue Y18).
150. **Decided November 21, 2026: Today is written for every moment that opens on another tab.** C-01, C-02, C-04, C-04b, C-05, C-05b, C-05c, C-06c, C-08 and C-08b each say what Today shows, so the household switcher never lands on a Today the fixtures don't describe (issues T72 and T73).
151. **Decided November 21, 2026: a Leave sheet draws one run.** Where the backup belongs to one run of an afternoon, as Friday's checkup does in C-06b, the sheet draws that run and leaves the others in the game plan (issue T87).
152. **Decided November 21, 2026: start times change only in the game plan.** The Leave sheet's "Change the start time" link is gone, because changing what is planned is an edit, and Today changes one thing, when she leaves (issue T88).
153. **Decided November 21, 2026: the Friday carpool's titles.** Wednesday's single-leg pass reads "Drive Alexis's carpool to Cedar Grove Elementary", and Friday's trip pass reads "Drive Alexis's carpool, then take Mallory to Westview Kindergarten". Carpool children who are not Charlotte's are not named.
154. **Decided November 21, 2026: the other tabs on her first night are written (issue P4).** They need frames before the build draws them from Figma, and until then the build works from these words.
155. **Decided November 24, 2026: onboarding is shorter (issue O35).** Greg played the alpha on his phone and found too many steps. The children and grades join the welcome, sign-in moves onto the account prompt, the calendar's connected state becomes a line on the school screen, and the household joins the school screen. The plan screen stays in the flow, and the household questions stay as Heather wrote them. Three pieces of wording are new and need Heather's review: the subheading "Who are you planning for?" on the welcome, which replaces the children screen's heading with her name, the grade line "The MVP Coach works out each grade from the birth month. Change any grade that's wrong.", which replaces the grades screen's heading and line, and "Your Google Calendar is connected." on the school screen. The welcome loses its skip link, because her name and zip code can be left blank. The frames for 0w, 0w-b, 0c and 0f are redrawn in place, and 0c-b is a new frame.
156. **Decided November 24, 2026: onboarding is ten screens (issue O36).** Greg reviewed drafts of the flow on the Figma page "Drafts - onboarding, November 24" and accepted them. The welcome opens with one child and "+ Add another child" under that child's fields. The capture conversation (0a) takes in 0v, 0r and 0b, and the coach confirms whose calendar it is before the read-back, with no child preselected. The draft is editable, and keeping the plan sits at the end of the draft page, with one field for the email the school writes to and no Continue with Apple. The calendar's permission is a sheet over the calendar screen, which then confirms the connection with "Your Google Calendar is connected.", moved from the school screen, and lets her connect a second calendar (F40). The school screen is the coach's review of what it found, as option C of the drafts, and 0f-b shows it when the coach could not find a start time. New wording for Heather's review: "Add to the plan" and "Not this time" on the draft's suggested event, "Tell the MVP Coach what's wrong", "The email your school writes to", "MVP uses it to recognize school emails you forward.", "Library book is off Mallory's list for this Friday.", "Google Calendar · Connected", "Here's what I found. Change anything that's wrong.", "From your Google Calendar", "I couldn't find Alexis's start time. What time does school start at Cedar Grove Elementary?", "Alexis's start time", and the read-back's first sentence, split into "This is Westview Kindergarten's calendar for October." and "Westview Kindergarten uses a six-day letter rotation." The calendar's error states are still to be written (issue O37).

157. **Decided November 24, 2026: every coach suggestion offers Keep, Change and Skip (issue O46).** Greg redrew the draft as a card for each school day and asked that she be able to keep, change or remove any coach recommendation or suggestion, with one treatment everywhere. Each suggestion card is marked Suggested and ends with Keep, Change and Skip. Continue keeps every card she didn't skip, and a card she left alone enters the plan still Suggested. The draft is headed "Mallory's plan: Oct. 6 to 9" without the coach's opening paragraph, and the account section asks "Keep Mallory's plan?", labels its field with the line "Enter the email connected to your school:", and keeps Continue disabled until she types an email. New wording for Heather's review: Keep, Change, Skip, Kept, Skipped, "Mallory's plan: Oct. 6 to 9", "Keep Mallory's plan?" and "Enter the email connected to your school:". Whether the same three choices replace the choices on suggestions elsewhere, such as the review card in the game plan and the coach card on Today, is not decided yet.

# Appendix C: change log

## Version 3.57, November 24, 2026

Greg's redraw of the draft (issue O46). Version 3.56 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | The draft is headed "Mallory's plan: Oct. 6 to 9", shows each school day as a card, and loses the coach's opening paragraph. |
| 2 | Every coach suggestion on the draft, the days with reminders and back-to-school night, ends with Keep, Change and Skip, replacing the remove buttons on arrival and the event's Add to the plan and Not this time. Continue keeps every card she didn't skip. |
| 3 | Keeping the plan asks "Keep Mallory's plan?", its line ends "Enter the email connected to your school:" and labels the field, and Continue is disabled until she types an email. 0c-b keeps its labeled field. |
| 4 | Appendix B item 157 records the decision and the wording for Heather's review. |

## Version 3.56, November 24, 2026

Greg's review of the onboarding drafts (issue O36). Version 3.55 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | The welcome opens with the fields for one child, with "+ Add another child" directly under them, and 0w-c shows Mallory added. |
| 2 | The capture conversation (0a) takes in checking the photo, the reading screen and the read-back, so 0v, 0r and 0b retire, and its states are 0a-b to 0a-e. |
| 3 | The coach names the capture and asks whose it is before the read-back, with no child preselected, and the read-back's first sentence is split to allow it. |
| 4 | The draft can be changed: each reminder has Remove, each day with reminders ends with "Add something else for Mallory", the suggested event has Add to the plan and Not this time, and "Tell the MVP Coach what's wrong" sits under the rows. 0c-d shows the draft after an edit. |
| 5 | Keeping the plan moves from a prompt over the draft to the end of the draft page (0c-c), with one field for the email the school writes to and no Continue with Apple. 0c-b loses Continue with Apple too. |
| 6 | The calendar's permission is a sheet over the calendar screen, and the connected state (0q-d) confirms the connection with "Your Google Calendar is connected.", which leaves the school screen. She can connect a second calendar (F40). |
| 7 | The school screen is the coach's review of what it found, with the source of each school and start time, and 0f-b shows a start time the coach could not find. Appendix A gains the calendar photo's start time and the Cedar Grove Elementary family calendar. |
| 8 | Charlotte's path is ten screens before her first board. Appendix B item 156 records the decision and the wording for Heather's review. |

## Version 3.55, November 24, 2026

Greg's change request before Heather reviews Alpha 1 (issue X6). Version 3.54 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | The household switcher groups its moments under Charlotte's week and the weekend she is away, then under each day, and each row reads as its time and its title from "The moments", such as "6:15am" and "Charlotte talks to the coach". The ID moves to the debug menu's Current moment row. |
| 2 | A moment that isn't built yet stays in its row in muted ink, can't be tapped, and reads "Coming soon" beneath its title. |

## Version 3.54, November 24, 2026

Greg's decision to shorten onboarding after playing the alpha on his phone (issue O35). Version 3.53 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | The welcome (0w) holds her name and zip code, then each child's first name, birth month and year and suggested grade, so 0k, 0k-b and 0k-c retire and the open list is 0w-b. The welcome has no skip link. |
| 2 | Sign-in moves onto the account prompt over the draft, so 0e retires. With nothing captured, the same prompt opens over 0a headed "Create your account" (0c-b). |
| 3 | Allowing the calendar goes straight to the school screen, which opens with "Your Google Calendar is connected.", so 0q-c retires. |
| 4 | The household type, home language and the adults who help join the school screen (0f) under the subheadings "Your household" and "Who else helps?", so 0g retires, and Done is the school screen's button. |
| 5 | Onboarding has no step counter. Charlotte's path is fourteen screens and thirteen taps, down from nineteen and eighteen, and C-00 takes about ten minutes. |
| 6 | Appendix B item 155 records the decision and the three new lines for Heather's review. |

## Version 3.53, November 23, 2026

Greg's decisions on QA-003 and on the onboarding frames. Version 3.52 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | A request draft shows the address line, the message and its send button, as the draft to Ruth does. The preview of the recipient's Yes, I can and No, I can't buttons, and the line above it, come off every draft (S14). |
| 2 | The splash keeps the tagline from its frame, for now (O26). |

## Version 3.52, November 22, 2026

Greg's decisions on the Stage 6 report. Version 3.51 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | Edward's chat message in C-05c and Min-jung's answer in C-06 each arrive with a notification (A15). |
| 2 | In the demo week, the recipient's Today holds the request cards only (S12). |

## Version 3.51, November 22, 2026

Greg's decisions on the Stage 5 report. Version 3.50 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | Every school run in the game plan carries its letter day, as C-00 writes it (G49). |
| 2 | Alexis's early pickup page names Cedar Grove Elementary without the gate, which stays on the school card (G55). |
| 3 | Edward's page writes the early pickup with its title from the plan, "Pick up at Cedar Grove Elementary, early dismissal, 1:30pm" (M10). |
| 4 | Edward's and Claire's pages on her first night show the name and the line only (M11). |
| 5 | In the Coach history the hand-off loses its button and link, and the message she shared from WhatsApp shows the author's name, a colon and the words (K12). |
| 6 | A fact's source names the document's sender, and Documents dates a document from today, yesterday, this week or last week (L6). |
| 7 | The household switcher gains Play the next step, which plays arrivals and C-01's share when the presenter chooses (C80). |

## Version 3.50, November 22, 2026

Corrections from Stage 4 and Greg's decisions on its report. Version 3.49 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | C-04b's pass reads "Drop Mallory off at Westview Kindergarten · C day", like every other morning drop-off (D10). |
| 2 | C-05b's Westview Kindergarten card lists the food drive flyer in Documents (D11). |
| 3 | Ms. Reyes's page in C-09 reads "Sent 7:31pm", matching the step (D12). |
| 4 | The coach's introduction is built from the sentences that apply to her path, with no name in the greeting when she skipped the welcome (O32). |
| 5 | Back is on every onboarding and setup screen after the welcome (O30). |
| 6 | The steam stars take the brand-star colour, saffron, because amber belongs to the coach (O29). |

## Version 3.49, November 21, 2026

The words the build still lacked, the playbook wording from Greg's redraw, and Greg's decisions on the Stage 3 report. Version 3.48 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | Today is written for C-01, C-02, C-04, C-04b, C-05, C-05b, C-05c, C-06c, C-08 and C-08b (issues T72 and T73, item 150). |
| 2 | C-04b moves to 7:20am, and C-05b happens at home before violin rather than in the car line. |
| 3 | C-00 gains the other four tabs on her first night (issue P4, item 154), and back-to-school night is at 6:00pm. |
| 4 | The food drive is filed on the Westview Kindergarten card (A12). C-09 gains its Conflict marks, the pumpkin's row, Ms. Reyes's web page and next Friday's Leave sheet (G47, G48). The first newsletter gets a read-back (K8). |
| 5 | The grade list is written out in full (O25), her own tasks are headed "Before you leave home" everywhere (T74), and section 4 gains Demo controls (C74). |
| 6 | If plans change is a plain section with a Text Charlotte link, and Ruth's draft and web page follow the redrawn frames (Y19, item 146). |
| 7 | From the Stage 3 report: Arrive at 2:31pm reads 2:43pm (T76), 0i-h's sheet is hidden (T84), Friday's Leave sheet draws the checkup's run (T87, item 151), "Change the start time" is gone (T88, item 152), and C-06 gains the card after Plan C (T89). |

## Version 3.48, November 20, 2026

Greg's decision on Fraunces. Version 3.47 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | Fraunces sets titles and headlines only, and never a paragraph or other running text. The coach's lines in onboarding move to Inter in the Voice style, so the coach is set in Inter from the first screen (Appendix B item 52, issue C33). Article titles stay in Fraunces at semibold. |

## Version 3.47, November 20, 2026

Greg's decisions on Heather's fourth wording review. Version 3.46 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | The airport rides leave the playbook, Charlotte drives herself, and C-14 and "If Ruth doesn't answer" are retired, with the flight's line and alert on Edward's Today (Appendix B items 129 and 143). |
| 2 | The playbook runs day by day from when she leaves, and child by child under each day, with routines, meals and notes only a parent would know, in both views (item 144). |
| 3 | The coach suggests what to eat, and section 2 says so (item 145). |
| 4 | If plans change offers Call Ruth, Call Claire and Text Charlotte (item 146). Edward can take every part with I'll take all of it (item 147). |
| 5 | Every phone number carries its area code, 707 at home and 802 at the lodge (item 148). |
| 6 | C-13 collects Alexis first and meets Mallory at the fair, with the cash as a task. Both girls go to Sophie's party with Ruth, and Edward's tee time ends by 3:00pm. Charlotte's message to Edward is Heather's, the heading reads "Offsite plans for the weekend", the call list's line reads "Double check those listed for Edward to call if needed.", and the If Edward doesn't answer card asks her to talk to him. |
| 7 | The Terms row for Playbook, section 2's errand rule, the moments table, section 4's Playbook rows and Appendix A follow, and item 149 parks Heather's look at the party sequence. |

## Version 3.46, November 20, 2026

Greg's decisions before the alpha. Version 3.45 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | 0g and 0h are one setup screen, "Your household", with "Who else helps?" as a subheading and Done as its button, and the counter runs from 01 of 04 to 04 of 04 (issues O22 and O24, Appendix B item 113). |
| 2 | The school screen is headed "Where do they go to school?" (issue O11, item 30). |
| 3 | 0i-d's coach card reads "Your week is empty so far." (issue O23, item 97). |
| 4 | Orchestra starts on Tuesday, Oct. 13, in Appendix A (issue T58, item 87). |
| 5 | 0i-h stays a single board in C-00, and its sheet holds Tuesday's afternoon routine (issue T53, item 88). |
| 6 | A Now taller than the space above the capture bar makes Today's page scroll as one, and every other Now keeps its place while the sheet rises (issue P2, item 114). |
| 7 | A child who comes along carries no chip, and the therapy and dance rows read "[Alexis] ..., with Mallory" (issue G45, new item 142). The C-14 note that still put a chip on the airport pickup is corrected. |
| 8 | The two playbook sheet titles that ask a question end with a question mark (issue Y16, item 140). |
| 9 | Charlotte stays off Who to call (issue Y2, item 122), and the offsite stays the board weekend (issue Y3, item 121). An anytime task's reminder lives on its item page (issue T61, item 95). |

## Version 3.45, November 19, 2026

Greg's headings, the plan's state and the banner on Edward's view. Version 3.44 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | C-11: "Edward's weekend" becomes "Edward's weekend plan" with the pill "Not sent yet", and "Rides for you" becomes "Your airport rides". |
| 2 | C-12: the line saying why Edward is being asked moves into a banner above the title, "The weekend" becomes "Your weekend plan" with "Proposed", and after he answers it reads "Accepted". A new paragraph sets out the four states. The copy table gains "The plan's state", and Appendix B gains item 141. |

## Version 3.44, November 19, 2026

Greg's sheet titles on the playbook. Version 3.43 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | C-11 and "If Edward asks someone else": four sheet titles and one line follow Greg's frames, and Appendix B gains item 140. Issue Y16 asks about the missing question marks. |

## Version 3.43, November 19, 2026

Greg's note on the "Both" chip on the airport pickup. Version 3.42 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | C-11: the Sunday ride to pick Charlotte up loses its "Both" chip. Section 2 gains the rule that an errand that is not for the children carries no chip, even when they ride along. Appendix B gains item 139, and issue G45 asks whether the rule for a child who comes along to a sibling's activity changes too. |

## Version 3.42, November 19, 2026

Greg's note on the Sunday pickup's page in Charlotte's playbook. Version 3.41 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | C-11: on the Sunday pickup's page, the backups become a choice of which Edward tries first, with radio buttons and no Call Ruth or Take both girls, the owner reads "Suggested for Edward", and Ask for help comes off the page. |
| 2 | The copy table gains "Backups on her playbook", and Appendix B gains item 138. |

## Version 3.41, November 19, 2026

Greg redrew Edward's view of the weekend playbook before he answers. Version 3.40 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | C-12: the line saying why Edward is being asked now heads his view and says Charlotte needs his help, followed by "Received yesterday, 8:31pm", the heading "Offsite plans for weekend" and her message. The line "Charlotte asked you to look over this weekend." and the dates under the title leave his view, because the notification already says both. |
| 2 | C-12: each day of the weekend sits on a card of its own, and each part's three choices are stacked. |
| 3 | The copy table follows, and Appendix B gains item 137. |

## Version 3.40, November 19, 2026

Greg's notes from playing starting point C. Version 3.39 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | C-11 opens with the sheet "Who will have the weekend?", where Charlotte keeps Edward and adds Ruth to her circle. The coach's question about who can stay with the girls is retired. |
| 2 | Her view gains a box in the coach's tint and a Change link on every part, and Sophie's party is given to Ruth through the sheet for changing a part. Ruth heads the call-list sheet. |
| 3 | C-12 drops the card on Edward's Today. A notification opens the playbook in his game plan, with Charlotte's request and message at its top, and How the girls' days go follows the weekend. |
| 4 | The moments table and the copy table follow, and Appendix B gains item 136. |

## Version 3.39, November 19, 2026

Greg asked that the review screen not read as settled, that it carry no one's name before Edward answers, that Ruth be lined up before Edward sees it, and that Edward never simply refuse a part. Version 3.38 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | Both views are titled Weekend playbook, and the C-10 button, his Today line, the links and the copy table follow. |
| 2 | C-11 gains Ruth's part: Charlotte gives Sophie's party to Ruth and records Ruth's yes before sending, and the message tells Edward Ruth is taking it. |
| 3 | C-12 gives each part suggested for Edward I'll take this, Suggest a change and Ask someone else, shows If plans change only after he answers, and has him take all three parts. C-12b is retired, and the boards gain "If Edward suggests a change", "If Edward asks someone else" and "If Charlotte hasn't talked to Ruth". |
| 4 | The moments table, Appendix A and the copy table follow, and Appendix B supersedes item 134 with item 135. |

## Version 3.38, November 19, 2026

Greg pointed out that Edward may only take the simple things, and that Charlotte may need a backup list for Ruth before she leaves. Version 3.37 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | C-12 replaces Accept the weekend with Yes, I can and No, I can't on each part of his weekend and Send your answers to Charlotte. Edward can't take Sophie's party because of his Saturday tee time. |
| 2 | A new moment, C-12b: the coach recommends Ruth, Charlotte sends the text, and Ruth says yes on Ruth's list. "If Edward asks for a change" becomes "If Edward doesn't answer". |
| 3 | C-15 credits Ruth with the party. The moments table, the Playbook copy table and Appendix A follow, and Appendix B decides item 133 and gains item 134. |

## Version 3.37, November 19, 2026

Greg asked that the playbook be a draft of suggestions Charlotte edits and Edward looks over before accepting. Version 3.36 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | C-11 marks every item "Suggested for Edward", says the coach suggests only what is already hers, shows her taking out the violin note, adds Save for later, and sends it with Send to Edward to look over and a message asking him to look it over. |
| 2 | C-12 replaces Got it with Look over the weekend, his review line and Accept the weekend, and "If Edward asks for a change" is added for the boards. |
| 3 | The Playbook term, the moments table, the Playbook copy table and Appendix A follow. Appendix B supersedes item 120 and gains items 132 and 133. |

## Version 3.36, November 19, 2026

Greg asked that Edward's playbook say where Charlotte is staying, with its number and a note on the time zone. Version 3.35 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | C-11 gains Where you're staying in her view, and C-12 gains Where Charlotte is in his, between If plans change and Who to call. |
| 2 | The Playbook copy table gains the section's rows and Her view's sections list it. |
| 3 | Appendix A puts Harlow Lake Lodge on Eastern time with a front desk number, and gives her flight home a change at Crestfield International Airport, so the 4:15pm delay arrives before the last leg leaves. Appendix B gains item 131. |

## Version 3.35, November 19, 2026

Greg asked that Edward's Today show Charlotte's flight and alert him when it is delayed. Version 3.34 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | C-14 gains the alert on Edward's phone at 4:15pm and his Today's header and Now, with the flight's line under "Your playbook", and its opening says MVP follows the flight itself. |
| 2 | C-11 drops the email forwarding rule for Larkspur Air, because MVP follows both flights from the itinerary. |
| 3 | The Playbook copy table gains the flight's line and the flight alert, Appendix A names the flights and replaces the forwarding row with flight status, the moments table's C-14 row follows, and Appendix B gains items 129 and 130. |

## Version 3.34, November 19, 2026

Greg's review of the playbook drafts, the same day. Version 3.33 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | C-11 shows where each part of the playbook came from, adds the sheet "Who can Edward call?", where Charlotte chooses the list, and puts Ruth's number at the end of the message to Edward, which has no Yes or No. |
| 2 | C-12 becomes a handover: "Charlotte handed you this weekend." with Got it, and Edward's view is titled Your playbook, with the weekend first and the call list after what to do if plans change. |
| 3 | C-14 leads with Call Ruth, offers Text Ruth instead from his own messages app, asks after the call whether Ruth can stay, and carries a 7:30pm deadline. "If Ruth doesn't answer" is added for the boards. |
| 4 | The terms, the Playbook copy table, Appendix A and the moments table follow, and Appendix B gains items 125 to 128 and rewrites item 120. |

## Version 3.33, November 19, 2026

Greg asked for a second journey for Charlotte's household, the weekend she is away, and settled its decisions on Nov. 19, 2026. Version 3.32 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | Section 3 gains "The weekend Charlotte is away", with the moments C-10 to C-15, and the moments table gains their rows. |
| 2 | Section 1's terms gain Playbook and Weekend summary. |
| 3 | Section 4 gains a Playbook table for the new copy. |
| 4 | Appendix A gains the weekend's invented facts, including Ruth Delgado, who joins Charlotte's circle in C-11. |
| 5 | Appendix B gains items 117 to 124: the decision, the three locked decisions this journey pushes against, the quiet weekend, Edward's answer, the board offsite, Charlotte as an emergency contact, the weekend summary and the drafts. |

## Version 3.32, November 19, 2026

Heather's second wording review, written in at version 3.30, was applied to the post-review Figma page on Nov. 19, 2026, after Greg approved the change list. Her words are unchanged. This version records what the frames settled. Version 3.31 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | C-03 gains the decline draft, "So sorry, I can't this week.", sent from WhatsApp like the reply. Appendix B item 91 closes (issue S7). |
| 2 | Appendix B item 113 records the combined 0g and 0h draft and the three wording decisions it would need (issue O22). |
| 3 | Appendix B item 114 records that C-07 scrolls as one page (issue P2). |
| 4 | Appendix B item 115 records how the withdrawn article is drawn (issue R15). |
| 5 | Appendix B item 116 records the style of a request's heading (issue S8). |
| 6 | Appendix B item 111 closes, because the frames now use the library's StopMarker and ReminderItem (issue C55). |

## Version 3.31, October 28, 2026

Greg's update to Now of Oct. 28, 2026, drawn on the post-review page, written into this document with Heather's removal choices from version 3.30. Version 3.30 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | The phase icon sits before the dateline, a sunrise, a sun or a moon in primary ink, and the dateline is set in Title. |
| 2 | The trip timetable marks each row with an icon for home or school in place of large and small dots. The next row's icon sits in a solid cerulean circle, and the rail stops at each icon. |
| 3 | The evening reminders are headed "Reminders for" and the phase of tomorrow's first departure, such as "Reminders for tomorrow morning", in Subtitle, and the folded line reads "Everything is ready for tomorrow morning." |
| 4 | Every checklist row on Today sits in its own container with a remove button, and each child's group ends with "Add something else for" and the child's name. "Edit this list" and 0i-e are retired. |
| 5 | Removing a repeating item asks "Just tonight" or "Every night", or "Just today" or "Every day" during the day, and raises a notice with Undo. Adding opens a new row typed in place. 0i-i and 0i-j are written. |
| 6 | Tasks take the same container with their own button in place of the remove button. |
| 7 | The coach's dot comes off the capture bar. |
| 8 | Appendix B items 108 to 112. |
| 9 | Later the same day, 0i-k is drawn for the removal choice, 0i-i's notice reads "for tonight", and the library gains StopMarker and ReminderItem and loses the capture bar's dot. Items 110 and 111 follow. |

## Version 3.30, October 28, 2026

Heather finished her second wording review in the review tool on Oct. 28, 2026, and Greg agreed with every decision and chose "Backup plans" for the backups' heading. Version 3.29 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | The backups' heading reads "Backup plans" in place of "Other ways this could go", on the Leave sheet and on the item page. |
| 2 | The first board's coach card takes the fuller version: "Your calendar is clear tomorrow morning, so one trip can take Alexis and Mallory." and the arrival at each school. |
| 3 | Edward's Thursday request takes the fuller version, opening with Heather's "Hi Edward, can you manage both pickups this Thursday?" |
| 4 | Every request received in MVP or on the web page opens with a sentence saying what Charlotte is asking, with the time sent beneath it. |
| 5 | The library run request reads "Can you take both girls to the library this Saturday morning, around 10:00am?", and Edward's note becomes "We'll get lunch after and be home by 1:00pm.", because the old note offered what the request now asks. |
| 6 | The text to Ms. Reyes and the note to Westview Kindergarten take Heather's wording. |
| 7 | The household question on 0g reads "How is your household set up?", which unblocks combining 0g and 0h. |
| 8 | C-07's reminders are written as instructions that say when, such as "Put the violin case and orchestra folder by the front door for the 6:55am start". |
| 9 | Removing a reminder asks "Just tonight" or "Every night", and she can add her own item to the evening list. |
| 10 | Team's sections are Chats, Groups and Team, with everyone in one list and a Circle tag on the people in her circle. |
| 11 | Settings gains an optional age range in the account card, asked nowhere else. |
| 12 | MVP Editorial's drafted articles and their invented bylines are withdrawn, and each slot waits for an approved article (issue R15). |

## Version 3.29, October 28, 2026

Greg asked for the screens that show her changing a leaving time. Version 3.28 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | Tapping a leaving time on the Leave sheet opens it in place with two outlined buttons, "5 min earlier" and "5 min later", in place of a time picker she turns. Leaving times are worked out in five-minute steps, so a change is a tap or two (issue T64). |
| 2 | The "You reach" line turns to the warning ink when she would arrive after the item starts, and a later stop she would now reach late gets the same line, so a late arrival further down the run is never hidden. |
| 3 | C-03b gains three boards for the wireframes only: the sheet with Home's leaving time open at 2:15pm, the sheet after she moves it to 2:25pm, and Today after she saves. Section 4's Leave sheet row gains the buttons and the late lines. |

## Version 3.28, October 28, 2026

Greg found the game plan's day headings reading "This Wednesday" to "This Sunday" after "Today" and "Tomorrow", which read oddly in a list whose order already names the week. Version 3.27 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | The game plan's day headings drop "this" and "next". The current week reads Today, Tomorrow, then the plain day names to Sunday, and the days under the Next week heading read Monday to Sunday with no date. The collapsed day, its accessible label and the C-04 "as shown" table follow. The headings were already exempt from naming the week, and version 3.27 still spelled them with "This" and "Next". |
| 2 | Nothing else changes. "This" and the day stay everywhere a day appears without a heading to anchor it: the coach's lines, the review card's "For this Friday", the read-back strip's label, a pass's status pill, the Leave sheet's line, request cards, notifications, the screen reader's "Added to this Tuesday." and the Coach tab's conversation headings, where "This Monday" has to stand apart from "Last Monday" in the same list. |

## Version 3.27, October 27, 2026

Greg set one rule after reviewing C-07: Today always has a pass at the top. The pass shows her next departure, today or on a later day, and the evening is no longer a separate layout, only the time of day when her next departure falls tomorrow. Version 3.26 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | Now always holds a pass. When nothing timed is left today, the pass shows her next departure on a later day, with its day in the status pill, and a line in Meta above it says why. This replaces the task-led Now and the quiet line, and an anytime task now leads Later today instead (Appendix B item 95, issue T61). |
| 2 | In the evening, Reminders for the morning is the checklist on tomorrow's pass and holds only what goes with that departure. For tomorrow lists her later departures tomorrow that take a child, each with its own items, so nothing appears twice. The pass's list folds to "Everything is packed for" and the leaving time while For tomorrow still has items open, and to "Everything is ready for the morning." once nothing is left. Version 3.26's rule that tomorrow's pass appeared only after the reminders folded is retired. |
| 3 | When nobody owns tomorrow's first departure, the pass still shows it, with "Needs an owner" in the pill and no action. On her first board it shows the trip the coach recommends, so the pass and the card describe the same morning, and agreeing turns the pill to "Tomorrow" and adds Remind me to leave home (0i-a, 0i-c). Plan B changes the pass to the single-leg pass for 7:40am and moves Mallory's reminders to the 8:15am row (0i-g). 0i-d shows tomorrow's first school start. |
| 4 | A timed thing at home gets a pass whose route line reads "At home", with no chevron and no fields. |
| 5 | C-07 leads with the 6:55am pass for Alexis, with the violin case and orchestra folder and Alexis's lunch as its reminders. Mallory's lunch moves to the 8:15am row and the ballet bag to a new 3:55pm row under For tomorrow, and "Both · Lunches" and "Early day, out at 1:30pm" are gone. C-09 leads with the 7:40am pass for Alexis with the Parks. Appendix B item 90 is closed. |
| 6 | The boards for the wireframes only lead with a pass: dinner with Claire at home on Wednesday, and Monday's 7:40am carpool on both Sunday boards. The 11:15am board is renamed "Nothing else today". |
| 7 | Section 4 gains rows for a pass for a later day and a pass for a timed thing at home, and rewrites the status pill, the route, the fold line, tomorrow's pass and For tomorrow. Appendix B item 89 adds the new pass states to the library list, and items 95 to 97 are new. |

## Version 3.26, October 27, 2026

Writes in everything applied on the Figma page "Design - lombardi · post-review" on Oct. 27, 2026: Heather's first wording pass and Greg's decisions on it, the onboarding changes, and the two fixes Greg found in the Figma Make trial of the first board, with the trip pass that followed them. The wording comes from a line-by-line comparison of the post-review page against the baseline page. Version 3.25 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | Today's dateline carries the phase of the day, such as "Monday morning, Oct. 12", and the separate phase title and its icon are removed. |
| 2 | "Ready tonight" becomes "Reminders for the morning", with an "Edit this list" link and an edit state (0i-e), and its folded line reads "Everything is ready for the morning." "Tomorrow starts" becomes "For tomorrow". |
| 3 | "Tonight has no Now" is replaced by tomorrow's pass after the reminders fold. The pass appears only for a leg she owns, with a "Tomorrow" pill and "Remind me to leave home" as its only action, and its leg leaves For tomorrow (0i-f, C-07). |
| 4 | A trip with more than one child and more than one stop gets a trip pass, with a timetable of its stops in place of the fields. The pass stays for the whole trip, its top moves to the next leg, and the timetable marks her progress (0i-f, 0i-h). The 8:22am arrival at Westview Kindergarten follows the existing 12-minute drive between the schools. |
| 5 | The coach card keeps the thread after she answers. The recommendation stays in muted ink, and the card shows either "Agreed" or the plan she chose beside a check, then only what comes next (0i-c, 0i-g, both C-06 cards). |
| 6 | The first board opens with the coach's first recommendation, "Take both girls at 7:40am", with Other options (0i-b) and the two answers (0i-c, 0i-g). The start-time question, its answer sheet and note 43 are retired, because 0f now asks for each school's start time. |
| 7 | Onboarding: 0w has a new headline and line and no helper lines. 0k asks for each child's first name and birth month and year, and 0k-b and 0k-c show the grades the MVP Coach suggests in list boxes. 0k has no skip. 0c loses "as a suggestion" and "None of it is saved yet." 0f asks for start times. 0h has a new line and "Relationship". 0j reads "Welcome to the team" and loses the start-time sentence. |
| 8 | Checklist groups are headed by the child's name alone, such as "Mallory", or "Both", with no "will need". Mallory's first-board reminders are Heather's list, and C-07's violin and folder are one item. C-03's checklist reads "Lunch and snack" and "Water bottle, with lots of ice", and C-03b's reads "Something to read for the waiting room at Brightwater Family Therapy". |
| 9 | "MVP Coach" replaces "Your coach" in every label and "the coach" in third-person copy on screen. Articles are labeled "MVP Editorial". |
| 10 | Labels: "Conflict:" replaces "Conflicts with", "Needs an owner" replaces "Nobody yet", "Updated" replaces the Changed mark on screen, "Back around" replaces "Back about", "Ask for help" replaces "Ask someone to take this", and "Move to another date or time" replaces "Move to another day or time". Edward's and every recipient's buttons read "Yes, I can" and "No, I can't". |
| 11 | The review card reads "One update is waiting for your review.", with "No thanks" and "Add to the game plan", and its day label reads "For tomorrow". |
| 12 | Each Leave sheet heading names where she leaves from and where she is going, such as "Leave home for Willow Yoga tomorrow". "See the coach's reasons" is removed everywhere. |
| 13 | Coach cards: C-01 loses the Okafors option and tags the recommendation "MVP Coach recommends", C-03 and C-05 have Greg's approved rewrites and buttons, and C-06b's line names next Tuesday, Oct. 20. |
| 14 | Westview Kindergarten's front office is 707-555-0140 and Cedar Grove Elementary's is 707-555-0120, and changes to who picks up go through Westview Kindergarten's family portal until C-05b moves them to email. Appendix A adds the birth months and the September 1 grade cutoff. |
| 15 | Appendix B closes item 43 and adds items 85 to 94, including the orchestra conflict on Tuesday, Oct. 6 (item 87), the open moment ID for 0i-h, and the library changes still to come. |

## Version 3.25, October 20, 2026

Applies six vocabulary rules Greg set on October 20, 2026, after reviewing the Figma frames, to every screen in Charlotte and Edward's week. The rules are written into section 4, and every moment, board, item page, person page and interface row was swept. Version 3.24 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | Every time carries am or pm with no space, such as "2:30pm", and both ends of a range carry it. The large departure time on the pass sets the qualifier beside the number in a smaller size. |
| 2 | Every day carries "today", "tomorrow", "yesterday", "this", "last" or "next", and a day in the following week also carries its date, such as "next Tuesday, Oct. 20". "Dates, times and places" is rewritten to match, and the past days folded on the game plan read "Earlier this week". |
| 3 | Places are named in full: Cedar Grove Elementary, Westview Kindergarten, Brightwater Family Therapy, Northside Pediatrics, Willow Yoga, Studio Ten Dance and Lakeside Strings Music School. The Westview library becomes the library at Westview Kindergarten. A long name wraps to a second line. |
| 4 | Wherever no chip names the child, the words do, as parents say them, such as "Pick Mallory up at Westview Kindergarten". The chip rule is unchanged. The pass title now always names the child, which retires the 3.21 rule that it did so only when no checklist group did. |
| 5 | Anything about leaving names where she leaves from, such as "When to leave home" and "Remind me to leave home". |
| 6 | Inner circle becomes circle, the village becomes her people, and a village group becomes a group. The Team tab keeps its name, and its sections read Chats, Groups, Circle and People. |

## Version 3.24, October 18, 2026

Settles where Back sits.

| # | Change |
| ----- | ----- |
| 1 | Back sits at the top left of every page opened inside a tab, and the page shows no monogram. "In place of the monogram" is removed, because it led 29 boards to draw Back at the top right (issue C49). |

## Version 3.23, October 18, 2026

Records Greg's changes to the design library and the boards on the evening of October 18, 2026.

| # | Change |
| ----- | ----- |
| 1 | The cerulean tint is #E1EEFC, replacing #DFF2FA, which did not hold up against canvas and card (issue C46). |
| 2 | Body strong is Inter 15, bold, replacing extra bold (issue C47). |
| 3 | Every screen except Today sits on card, and a part of one of those screens with no fill of its own takes control. Canvas is kept for the sheet on Today (issue C48). |

## Version 3.22, October 18, 2026

Carries Greg's change to the status pill after the Now redesign (issue T52).

| # | Change |
| ----- | ----- |
| 1 | While the pill counts down, it sits on the control surface with a hairline, and from 15 minutes before the countdown turns to the warning ink rather than the pill taking the warning tint, because a tint on the tinted pass did not read. "Time to leave" and "Running late" keep their fills. |

## Version 3.21, October 18, 2026

Carries Greg's redesign of the Now block from the board "draft - now UX" (2729:66462) and his decisions of October 18, 2026 (issue T51).

| # | Change |
| ----- | ----- |
| 1 | "Now reads like a boarding pass" is rewritten. The title, the time with its pill, and the route with the next station sit on a tinted pass, with a rule under the time. The fields sit under the pass, a dashed line runs under them, and a second dashed line ties the actions to the checklist. |
| 2 | The chip leaves the pass. The list names the child, and when no list does, the title names her in words, as on C-03b at 2:31 pm, C-03b at 2:46 pm, C-06 and C-06b. |
| 3 | Checklist headings read "Mallory will need", "Both girls will need" and "All three will need", and the folded group follows, such as "Alexis will need · 3 packed". |
| 4 | The coach card is the only card the coach speaks in, and the pass is a surface for the trip. Appendix B gains items 83 and 84. |

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

## Version 3.19, October 17, 2026

Carries Greg's findings from playing the investor demo from C-03 (prototype scrub 2) and his decisions of October 17, 2026.

| # | Change |
| ----- | ----- |
| 1 | The pass on Now gains a title, the item at the stop she is heading to as it reads in Later today, with its chip, set in Subtitle (issue T43). |
| 2 | A child's checklist is headed "Mallory needs", with "Both girls need" and "All three need" for the group, and the folded line follows, such as "Alexis needs · 3 packed" (issue T44). |
| 3 | Section 4 opens with the rule that separates labels from headings, and the sweep under it changes "Nothing planned" to "Nothing is planned." and the five lines on the Settings cards (issue T44). |
| 4 | The status pill grows more urgent: plain, then the warning tint from 15 minutes before, then "Time to leave", filled, then "Running late" in the warning fill from five minutes after the leaving time. A leg now has five stages (issue T45). |
| 5 | The Leave sheet gains a line saying what she can change, draws each "Leave at" time as a control, and shows Save only after a change (issue T46). |
| 6 | After she adds or moves an item in the game plan, its day opens, the agenda scrolls to it and the row takes the coach's tint for about two seconds, with no Changed mark (issue G40). |
| 7 | A new moment, C-03a, has Charlotte type into the capture bar on Today and photograph a Westview flyer, with the read-back on the coach card. F21 moves into the prototype (issue A12). |
| 8 | Greg accepted the proposals in items 71, 73 and 74 (issues T41 and S6). Item 72 stays open (issue T42). |
| 9 | The Title row of "Type" no longer names the departure line retired in 3.15. |
| 10 | Appendix A gains Hana's ride, the food drive, Charlotte's typed words and the flyer photo. Appendix B gains items 75 to 77. |
| 11 | Children are drawn in indigo rather than green, and adults and the Family chip in a gray outline, at Greg's choice on October 17, 2026 (issue C42, Appendix B item 76). |

## Version 3.18, October 16, 2026

Writes the words for every board the investor demo reaches that had none, so the Figma prototype can be played from C-03 to C-07 without a dead end. It follows prototype-scrub-1.md and Greg's decisions of October 16, 2026 on the checklist roll-up and Settings.

| # | Change |
| ----- | ----- |
| 1 | A finished checklist folds away. A child's group folds to one line, such as "Alexis · 3 packed", and the whole checklist under Now folds to "Everything is packed for" and the leaving time, with a check that draws in once and no praise. Tapping either opens it again. C-03, C-03b and C-06b show it, and section 4 gains the rows (issue T38, F30). |
| 2 | Settings is written as a page with five cards and Charlotte's values, and section 4 gains a Settings table. The coach's voice and personality card is parked as spec F33 (issue U3). |
| 3 | Tapping a day's heading in the game plan opens or closes it (issue G39). |
| 4 | The reminder sheets for C-03, C-03b at 2:05 pm and 2:46 pm, and C-06b are written, with a rule for choices that have passed. |
| 5 | The card after "Move yoga to 12:15" says where Undo and Book at Willow go. Min-jung's draft and the note to Westview gain the line above the button and the button. |
| 6 | Section 3 gains "Item pages in the demo": the second tutoring session, violin, Friday's tutoring, picture day, the library run with the page of people and Edward's draft, and Thursday's pickups, yoga and ballet. |
| 7 | Edward's cards after he answers in C-04b and C-06 are written, and "If Ms. Reyes says no" gives her web page's second button and its Change somewhere to go. |
| 8 | Team gains written pages for Karen Moss, Ms. Reyes, Jenna Okafor and the five other village members, Message on Edward's page, and Add someone and New village group opened empty on Wednesday. |
| 9 | Kids gains Add a school and Add to this card. |
| 10 | Appendix A gains Charlotte's email, her plan, her notifications, her automatic forwarding, Ms. Reyes's no and the C-03 reminder. Appendix B gains items 70 to 74. |

## Version 3.17, October 16, 2026

Records Greg's decisions from the game plan session on October 16, 2026. The game plan becomes an agenda under a week strip, with a review card at the top, days that open and close, and a page for each item. Nothing from her calendar joins the plan until she adds it. The capture bar comes to the game plan.

| # | Change |
| ----- | ----- |
| 1 | "The game plan holds the week" is rewritten. A week strip sticks under the title bar, the agenda opens at today with past days folded, today and tomorrow open and the other days collapsed with their counts, an open day sits in a container on the subtle tint, and next week follows Sunday. "This week's changes" is retired (issues G11, G12, G22, G31, G36). |
| 2 | A review card at the top of the game plan holds events found on her calendar, things pulled from a capture and the trips the coach suggests, each with "I don't need this" and "Add to the plan". Its heading is a full sentence with the count in words, and it is gone when nothing is waiting (issues G29, G33, G35). |
| 3 | Nothing from her calendar joins the plan until she adds it, which reverses the rule that calendar items come in owned by her. Once she adds an event, the coach suggests the trips around it. C-00's introduction and first board, C-06b, the week table, the messages table and Appendix A follow (issues G28, G30). |
| 4 | Tapping an item opens its page, with "Ask someone to take this", her note, the source link, "Other ways this could go" with the coach's backups, and "Move to another day or time", which is the main way to move on a phone. Dragging stays as a shortcut (issues G15, G16, G17). |
| 5 | The capture bar sits on the game plan. She types in place on every tab with the bar, the text area grows, the microphone stays beside the arrow, and the coach's read-back lands where she is, as a read-back strip on the game plan. The line that tapping the bar on Today opened the Coach tab is removed (issues A10, A11, G18, G19). |
| 6 | Links that were one word now say what they do: "See the coach's reasons" replaces Why, "Move to another day or time" replaces Move, and "Ask someone to take this" replaces Change (issue G37). |
| 7 | C-01: Alexis's 1:30 pickup shows Nobody yet and Changed with no conflict, yoga shows "Conflicts with Mallory's pickup", and the coach's line names only Mallory's pickup as the clash. The game plan is shown as the review card and Thursday (issue G4). |
| 8 | C-04 is rewritten: she adds the second tutoring session from the review card and moves it to next Tuesday from its page, adds two notes, and asks Edward to take the library run (issues G13, G14). |
| 9 | C-06b: the coach card asks her to add the checkup before it recommends skipping tutoring, and the game plan's review card and the checkup's page are written. |
| 10 | The Sunday coach card for households with school children is described, and its words wait for the Sunday moment (issues G20, G21). A conflict on another day names its day (issue G23). |
| 11 | The Label style now sets the labels the coach owns, and the amber outline joins the dot and the tint as the coach's mark. |
| 12 | Wireframe-only boards for adding to the game plan are written, with Ada's birthday party as their stand-in in Appendix A. |
| 13 | Section 4's Game plan table is rewritten, and Today and Coach gain the rows that follow. The terms table gains review card, read-back strip, week strip and item page. Appendix B items 5, 26, 34 and 61 are updated, and items 64 to 69 are added. |
| 14 | The sixth thing every family shows is restored. Version 3.14 had replaced it with a note about the coach card by mistake. |

## Version 3.16, October 16, 2026

Records Greg's decisions on what stays fixed, what scrolls and what is anchored, after he played the prototype flows. No moment, coach line or person changes.

| # | Change |
| ----- | ----- |
| 1 | Section 2 gains "What stays in place": eight kinds of screen, each with one rule, the title bar that works like Apple Music's, the keyboard as on an iPhone, chats and composers without the tab bar, and sheets that never open another sheet. |
| 2 | "Sheets" adds that a sheet closes before anything it leads to opens. |
| 3 | Section 4 gains the title bar on a tab and on a page, the large title and the small title with its accessible label. |
| 4 | Appendix B gains items 60 to 63. |

## Version 3.15, October 15, 2026

Works out every state of Now, gives Today one way to change a time, and gives the coach ready backups, at Greg's direction.

| # | Change |
| ----- | ----- |
| 1 | Now follows one rule: the next thing today that needs her at a set time, then her leading task, then a quiet line. A timed thing at home can lead Now. Asked and Nobody yet items, someone else's trips and items with no time stay in Later today. |
| 2 | A departure is a leg on a run, and a run is drawn as a line of stops that need not start or end at home. Now shows the current leg, a line naming the next station, and steps down the line as each stop comes due. A leg passes through coming up, time to leave, running late and passed. |
| 3 | The Leave sheet is the one place Today changes a time. It draws the run as a line, lets her change when she leaves any stop, and changes the start time only on her own items. Tomorrow starts rows open it at night. |
| 4 | The coach keeps Plan B and Plan C at the foot of the Leave sheet, and Other options opens that sheet on Today. At least one backup depends on nobody else, wherever one exists. |
| 5 | Sheets become one pattern, with a grabber, a Close icon, four kinds of body, a set state and two heights. The reminder sheet gains a notifications-off state. |
| 6 | Every leaving time follows one rule, which moves the afternoon pickups to 2:15 pm, orchestra to 6:55 am, yoga to 2:00 pm and the checkup to 3:10 pm. School runs in the game plan show the time school starts. |
| 7 | C-03b replaces the Monday afternoon board as a built moment. Boards for running late, Wednesday at 5:10 pm and Sunday are added for the wireframes only. The Sunday board raises the Monday clash between therapy and violin. |
| 8 | The done count reads "today" from noon, the coach card label gains "for today", and section 4 gains the Leave sheet, the backups, every sheet's parts and the new reminder sheets. |
| 9 | Appendix A gains the leaving time rule, the Monday run, two travel times, the therapy session's length, the Monday reminder, Wednesday's dance, the washing machine, Alexis's ordinary Monday, Lakeside's contact and the source of the backups. Appendix B gains items 53 to 57. |
| 10 | Now reads like a boarding pass: the route, the leaving time with a status pill, and the Drive, Arrive and Pickup or Starts fields, above a perforation. The drive line is retired. Checklists in Now, Ready tonight and Tomorrow starts are grouped under each child's name in the children's green, and her tasks under "Before you leave", with no chips and no counts. "Call Brightwater before you leave" becomes "Call Brightwater", and Alexis's violin and orchestra folder become two items. |
| 11 | The header and Now stay in place on Today. The canvas sheet rises over both when she scrolls, and when the header and Now are taller than the screen, they scroll until Now's actions clear the capture bar before they hold still. Ready tonight behaves the same way at night. |
| 12 | The route's chevron, and the Leave sheet behind it, appear only on a leg she travels herself. A pass for a child leaving with someone else, such as Alexis with the Parks in C-03, has no chevron, and its route and time are not tappable. |
| 13 | Ready tonight on Charlotte's first board in C-00 is grouped under Mallory's name, as in C-07, so the rule that checklists are grouped by child has no exception. |

## Version 3.14, October 14, 2026

Records Greg's design decisions after reviewing the board drafts. No moment, coach line or person changes.

| # | Change |
| ----- | ----- |
| 1 | The coach speaks in Inter everywhere in the app. The Today coach card moves from Voice to Body large, and Voice is kept for the coach's lines in onboarding and for article titles. |
| 2 | The capture bar replaces "Send to coach" on Today. It is docked above the tab bar, starts with the coach's dot, reads "Type, talk or add an image", and hides while the coach card asks for a capture. The skipped-capture coach card holds Take a photo, Attach a file and Talk or type. Appendix B item 34 is decided for Today and Coach. |
| 3 | A person's answer shows as their initial and an icon: hourglass, thumbs up or thumbs down. The words remain in notifications, coach lines and accessible labels. |
| 4 | A person page's "This week" is laid out as lanes, with the day abbreviated to three letters and the answer icon on the right. |
| 5 | Appendix B gains items 51 and 52. |
| 6 | Today has two surfaces: the header and Now on paper, and the coach card, Later today and MVP Recommends on a canvas sheet with rounded top corners. |
| 7 | The countdown sits under the departure time and reads "in 15 min" without "Next ·". |
| 8 | A staged plan screen, Choose a plan (0e-p), follows the account. Its words are recorded as proposed. |
| 9 | Greg's answers: the cup is the MVP mark, MVP never writes to her calendar, the household switcher opens from the monogram, and the invented email domains stay. |

## Version 3.13, October 14, 2026

Adds Team as a working tab, chats with the inner circle and the recipient's side of every request, so every tab can be tested at every moment, at Greg's direction.

| # | Change |
| ----- | ----- |
| 1 | Section 2 gains "Talking with her people". The parent messages one member of her inner circle directly or several in a group chat, choosing them when she starts it, and "Everyone on MVP" chooses all of them. Only people with MVP can be in a chat, the coach never reads chats, and nothing in a chat changes the plan. The same composer posts to a village group. Adding someone, inviting by text and creating a village group are described. |
| 2 | Section 2 gains "Every tab at every moment", covering what the Coach, Game plan, Team and Kids tabs show when opened between moments, and what View as shows. |
| 3 | "Her people" gains a number for each person and the five other members of Cedar Grove parents. Section 3 gains "The Team tab", with the tab before and after chats, four person pages, the group page and both composers. |
| 4 | Four moments are added. In C-04b Edward says yes to the library run with a note. In C-05c Charlotte asks Edward and Claire how to tell Alexis about her therapist. In C-06c she messages Claire about dinner. In C-08b the coach names Dr. Ortiz for a question about Mallory's cough. |
| 5 | C-02, C-06 and C-06b gain the recipient's screens: Edward answering and changing his answer, Min-jung's card and Ms. Reyes's text and web page. C-05's composer heading changes from "New post" to "New message", and C-05 gains its reply notifications. |
| 6 | The game plan's library run and checkup rows gain C-04b and C-08b. Section 4's Team table is rewritten, and the Requests and Coach tables gain rows. Appendix A gains eleven rows, Appendix B items 2 and 3 are updated, and items 46 to 50 are added. |
| 7 | "Type" grows to nine styles. Body large and Body strong join it, Subtitle's role is confirmed, and `body-small` leaves the library. Appendix B item 44 is decided. |

## Version 3.12, October 14, 2026

Records Greg's decisions after the readiness scrub and fixes three small faults. No moment or on-screen line changes.

| # | Change |
| ----- | ----- |
| 1 | "Type" grows to seven styles. Title is Inter 20, extra bold, for section names on Today and the line naming the next departure. Subtitle is Inter 17, semibold, for headings inside a page or card, and its role is proposed (Appendix B item 44). Label is JetBrains Mono 13, extra bold, for the coach card's label only. The table gives each style's name in the design library. |
| 2 | Appendix B item 32 is decided, because Greg confirmed the three assumptions from the design rounds. |
| 3 | Today is phone-width only in review build 1, and a wide Today is parked as F20. "Send to coach" appears on Today only in review build 1, and item 34 stays open for later. |
| 4 | Appendix B items 6, 22, 39, 40 and 41 are decided: the coach card is marked by the dot and the coach's tint, the getting ready screen keeps section 4's wording, JetBrains Mono stays for the Label style, the two colors are tokens, and the yoga button carries no icon. |
| 5 | The free dress day starts with Nobody yet as owner, following the rule that a suggested item has no owner until she chooses it. |
| 6 | The terms table now says section 2 lists four statuses and two marks. Appendix B gains items 44 and 45. |

## Version 3.11, October 14, 2026

Puts dates back on Today, rebuilds Charlotte's first board and settles travel times on the zip code, at Greg's direction.

| # | Change |
| ----- | ----- |
| 1 | The demo runs on a fixed calendar, with the demo week from Monday, Oct. 12 to Sunday, Oct. 18, 2026. Today's dateline shows the day and the date, such as "Monday, Oct. 12", and the draft on 0c shows the dates it covers. Everything else keeps naming the day of the week. The seed keeps demo times and gains one anchor date, and the device clock is still never read. This reverses version 3.6. Every Today header, the terms table, the moments table and the moment headings now carry dates. |
| 2 | C-00 moves to Monday, Oct. 5, the week before the demo week, so one October rotation sheet covers both. Her first week's letters become C, D, E, F and A, the draft's rows and line change to match, the field trip moves to Thursday, Oct. 29, the harvest fair is Friday, Oct. 23, and her first newsletter forward moves to the Wednesday of her first week. The Westview card's Documents row reads "last week" for the rotation photo. |
| 3 | The rotation calendar is headed "Westview Kindergarten" with "October 2026", and the read-back calls it "calendar for October". |
| 4 | Her first board shows "Ready tonight" with Mallory's sneakers, both girls under "Tomorrow starts" with "Start time needed", and the coach card asking for Mallory's start time. Answering opens a sheet, fills in Mallory's row with an 8:15 am leaving time, and turns the card to the rest of the week with "Open the game plan". The board has no article. "Nothing is ever settled" gains how the coach card handles an answer, and "Today shows today" says when a card that needs no answer still appears. |
| 5 | Travel times are worked out from her zip code, with five minutes added to each leaving time, and MVP never asks for a home address. "Onboarding" gains the rule, the travel table is described as the zip code estimates, and Appendix A gains a row for it. Appendix B item 20 records the zip code's purpose as settled. |
| 6 | Section 4 gains the answer sheet, "Start time needed", the coach card after an answer, the Answer button and the draft's date line. Appendix A gains the demo calendar and travel times. Appendix B items 9, 20, 24 and 26 are updated, and items 42 and 43 are added. |

## Version 3.10, October 13, 2026

Writes in the Today redesign and the related decisions from the design rounds on the Today variations and the Kids tab icon.

*Corrected October 14, 2026, without a new version: the coach's messages in the Coach tab conversation are set in Inter, as Body, and the Voice style is used on the Today coach card and in onboarding, matching the design library.*

| # | Change |
| ----- | ----- |
| 1 | Section 2 gains "Type", with five styles: Display, Title, Voice, Body and Meta. Everything the coach says is set in Fraunces again, as the Voice style, replacing the October 8 correction to version 3.9. There are no uppercase labels, so the MVP Recommends line and the article labels are now in sentence case. |
| 2 | "Today shows today" is rewritten for the quiet layout: Now, the coach card, Later today and MVP Recommends, in that order. The coach card is the only card, the checklist merges the going with items and her tasks under Now, the per-person rows and the column headings are gone, and at most one article appears. The coach card appears only when the coach needs an answer, so C-07 loses its card. |
| 3 | Section 2 gains "How people are shown". Children appear as name chips in one shared green, with "Both", "All three" and "Family" as group chips, adults as outlined initials and the coach as a solid amber dot. The per-person colors and the children's monograms are retired. |
| 4 | The Kids tab icon becomes two figures of different heights. |
| 5 | The capture button on Today reads "Send to coach", with an up arrow, in place of "Add". The paragraph on the capture bar no longer mentions a send button, which version 3.9 had left in by mistake. |
| 6 | Now gains "Remind me" and "Directions", the reminder sheet, the drive line and the reminder notification, in "Now: reminders and directions" and section 4. |
| 7 | "Nothing is ever settled" gains how a coach card's button carries out the recommendation, with no second confirmation, an Undo link, and "Other options" for the full choice. MVP changes only its own plan, never her calendar, and never books anything. |
| 8 | The Today boards in C-00, C-03, C-05, C-06, C-06b, C-07 and the Monday afternoon board are rewritten in the new layout. C-06 is the design rounds' example. In C-06 and C-06b Charlotte reaches the coach's full options through "Other options", and C-06 shows what the card's own button would have done, and the card for Min-jung saying no follows the same form. The coach's lines in C-00 say "Mallory's checklists" in place of "her going with lists", which also removes a pronoun for a child. |
| 9 | The game plan gains Wednesday's dinner with Claire. Appendix A gains the dinner, Wednesday's drive, the reminder times, Willow's booking link and Wednesday's call. Appendix B gains items 32 to 41, and items 4 and 6 are updated. |
| 10 | Several lines from the change list are corrected so they follow existing rules and facts. The coach card no longer says "collect her", because the coach never uses a pronoun for a child. The line after the yoga move no longer starts "Moved to 12:15", which was a fragment that described what the coach had done. The notification body is one sentence instead of two fragments. Adults and Family are outlined on paper rather than on white. Wednesday's drive is 22 minutes, from the travel times, instead of 12. Only Mallory's pickup changes to "You" after the yoga move, because Alexis's still shows "Edward: yes". The move carries no Changed mark, because the change is hers. The move does not touch her calendar (Appendix B, item 41). Today's rows say "Pick up at", the same as the game plan and requests, where the design rounds wrote "Collect at". Onboarding's capture button reads "Attach a file", the same as the capture sheet, where version 3.9 had "Add a file". |

## Version 3.9, October 6, 2026

Closes the gaps the calendar wireframe pass reported, and writes in the four decisions that pass drew from.

*Corrected October 8, 2026, without a new version: everything the coach says is now set in Inter, with Fraunces reserved for headlines and titles, and the phase of the day and the calendar mark use the icon names from spec §17 instead of Lucide names. The day of the week moves above Today's title as a dateline, following Greg's Ready for dev frames.*

| # | Change |
| ----- | ----- |
| 1 | Requests are answered item by item, with an optional note and a Change link. A "can't" note reopens the item and the coach turns it into options. A "yes" note shows under the item with the Changed mark. There are no read receipts. Section 2 says so, and C-02 and C-06 are rewritten to match. |
| 2 | She hears about every answer and every changed answer through a notification and the item's status. Section 4 gains the notification wording, the note field, the line after answering and the item rows. |
| 3 | Every handoff to another app leaves a task on her list, because MVP cannot see whether it was sent. C-03 gains the WhatsApp reply's address line and its task. |
| 4 | The capture bar has no Send. The microphone becomes an arrow, labeled "Give this to the coach", while the field holds typed text. |
| 5 | Game plan items show the time the thing starts, so Thursday's ballet is at 4:15 pm, and Today's departure shows the 3:55 pm leaving time. |
| 6 | "Taught when useful" gains the WhatsApp message Charlotte pastes, the coach's read-back and times, and the share instructions now say Forward and then the share button, which is how WhatsApp works on an iPhone. |
| 7 | Appendix A gains the forwarding address, the WhatsApp group's name, Westview's email subject and the rule for the rotation calendar's month. |
| 8 | Section 4 gains the provider name on the permission screen, the getting ready labels for a parent who skipped steps, and the calendar mark on the child page. Charlotte's week now uses all three request routes. |

## Version 3.8, October 6, 2026

Adds the parent's own calendar, at Greg's direction. MVP connects to it once during setup, reads it, and keeps the plan in step with it.

| # | Change |
| ----- | ----- |
| 1 | Section 2 gains "Her calendar". MVP connects to Google Calendar, Apple Calendar or Outlook, reads it and never changes it. The coach sorts each event by whom it concerns, calendar items come in owned by her with no status, and a new or moved event that runs into the plan raises a conflict and a coach card. Calendar items carry a calendar mark and are moved in her calendar rather than dragged in the game plan. |
| 2 | Onboarding gains a calendar screen (0q) right after the account, with a staged permission screen. Setup now has five screens, and the counter runs from 01 of 05 to 05 of 05. Getting ready gains the step "Reading your Google Calendar", and the coach's introduction reports what came in from her calendar. The onboarding times move by one minute from the calendar screen on, and C-00 now ends at 8:40 pm. |
| 3 | Charlotte's Google Calendar is added to Appendix A. Alexis's therapy and dance and Mallory's ballet now come from it and carry the calendar mark on Today and in the game plan. |
| 4 | C-06b is added. Charlotte books Mallory's checkup in the Northside portal, it reaches the plan through her Google Calendar, it runs into Friday's tutoring, and she asks Ms. Reyes by text message to skip this week. The Wednesday portal message and the task to call Northside are changed to match, and Friday's rows in the game plan table are updated. |
| 5 | Section 4 gains the calendar screen, the staged permission screen, the calendar mark, the coach card wording for a new calendar event, the source link and the drag message for calendar items, and "Your calendar" in Settings. "Taught when useful" gains the line offering the calendar to a parent who skipped it. |
| 6 | Appendix B gains items 27 to 31, covering writing to her calendar, Apple Calendar on the web, how quickly the plan follows, the school screen's heading, and Edward's own calendar. Item 24 is corrected, because the step counter now runs to five. |

## Version 3.7, October 2, 2026

Adds the hand-off in onboarding and makes the first draft a week, at Greg's direction.

| # | Change |
| ----- | ----- |
| 1 | A check-the-photo screen (0v) follows the first photo, with Use this photo and Retake. It applies to photos only. |
| 2 | The read-back ends with a hand-off. The coach says what it will make and what it keeps for later, and Charlotte starts the draft with "Make Mallory's plan". A "Something's not right" link lets her correct the read-back first. |
| 3 | The first draft covers the rest of this week instead of the rest of the month, because a month is too much to get right and too much can change. The draft is headed "Mallory's plan for this week", and the button, thinking screen, account prompt and getting ready step say "Mallory's plan", because a plan is something the coach can make and a week is not. |
| 4 | The draft adds back-to-school night, which falls in C-00's week. The field trip and the harvest fair go on the Westview card for their own weeks. |
| 5 | Section 4 gains the check-the-photo screen and the hand-off. The prepared calendar photo must carry no month name or year. |

## Version 3.6, October 1, 2026

Removes every fixed date, so the demo can be presented in any week.

| # | Change |
| ----- | ----- |
| 1 | "Dates, times and places" now says the demo shows no calendar date, month name or year, and the seed files hold none. Days are named by the day of the week, and anything further away is relative to the demo week. |
| 2 | The date line on Today becomes a day line, showing only the day of the week, such as "Monday". Every "[date from seed]" is removed. |
| 3 | The rotation calendar no longer names a month. The coach says "this month" and "the rest of the month", and the draft is headed "Mallory's month". |
| 4 | The rule that the demo week must start after the 15th is removed, with the Appendix A row for the calendar's month. |
| 5 | Appendix B item 9 now records that the prototype must not depend on a date. Item 26 is added, noting that the real product will show dates. |

## Version 3.5, October 1, 2026

Records the decisions from the design session after correction pass 5 and answers the gaps listed in the wireframe notes.

| # | Change |
| ----- | ----- |
| 1 | Onboarding is now fifteen screens in three parts. A welcome screen (first name and zip code) and a children screen (names and grades) come before the first capture, both skippable. Thinking screens cover the wait for the read-back and the draft. After setup, a getting ready screen covers account creation, and the coach introduces itself before Today. The section is renamed "Onboarding". |
| 2 | The coach always confirms which child a capture is for, preselecting by grade with one tap. The highlight question stays the coach's one question, and Charlotte's reply drops the sentence about kindergarten. |
| 3 | The account screen asks only for an email address or Apple sign-in, because her name comes from the welcome. The school screen replaces ages with each child's school, and asks an age only for a child not yet in school. |
| 4 | "Here is the rest of September for Mallory" moves from the read-back to the draft screen, after the wait. |
| 5 | Onboarding and setup headlines are set in Fraunces, as display type, which corrects version 3.4. |
| 6 | Failure and waiting states are written: a capture that can't be read, a wait over twenty seconds, account creation that fails, and leaving during account creation. Demo timings are two seconds for each thinking screen and four for getting ready. |
| 7 | The coach's introduction recaps the month rather than tomorrow, carries a ticked library reminder that asks for notification permission, and leaves out "Time saved". |
| 8 | Her first board is at 8:39 pm, with "Mon" in the date line. A board for a parent who skipped the capture is written. |
| 9 | The status model separates the owner, including "Nobody yet", from the four statuses, and treats Changed and Conflict as marks that can sit on any item. This resolves owned items that carried Changed and "Nobody yet" appearing as both owner and status. |
| 10 | Conflicts with several items are named together, such as "Conflicts with both pickups". C-01 gains the game plan's "This week's changes" while the conflict is open. |
| 11 | The date line sits on the title's row, shortened on a phone. Pages inside a tab show Back instead of the monogram. A coach card about no particular day opens its message on the Coach tab. |
| 12 | Jenna's message is shared at 6:16 am, after the newsletter read-back, everywhere it appears. The C-03 coach card gains its game plan link. The C-06 board loses the Westview note task, which appears only after she chooses, and gains the conference article. |
| 13 | A Monday afternoon board is written for the wireframes, with no demo moment. Edward's own Today is described, with his monogram and "This morning". |
| 14 | Section 4 gains copy for the welcome, children, thinking, confirmation, school, getting ready and introduction screens, the web page for someone without MVP, village group lines, the "On MVP" mark, Kids tab rows, "From you", the Add sheet, and what Settings holds. The capture bar's middle control is renamed Attach. |
| 15 | Kids tab rules gain hidden empty sections, source links shown when a fact is opened, and a Changed mark on a school's row. |
| 16 | The Team definition now says versions 3.1 and 3.2 called it Your people. |
| 17 | Appendix A gains the zip code, the calendar header and month rule, the Westview event dates and hours, and the onboarding times. Appendix B is rewritten: resolved items are removed, and new items cover the locked decision, the zip code, the brand mark, the getting ready copy, "Time saved" and the Figma copy changes. |

## Version 3.4, October 1, 2026

Merges the capture-first onboarding with the existing Figma onboarding screens.

| # | Change |
| ----- | ----- |
| 1 | "Onboarding starts with capture" now sets out the whole flow as nine screens in two halves: splash, capture, read-back and draft with the account prompt, followed by four setup screens for the account, children, household and the adults who help, and then Today. |
| 2 | The capture screens carry no step counter. The counter runs from 01 of 04 to 04 of 04 on the setup screens only. |
| 3 | The first screen gains a "Skip for now" link for a parent with nothing to hand over, and the children screen is defined in two states, filled in from a capture and empty. |
| 4 | C-00 now runs from the splash to Charlotte's first board on Today. Mallory arrives on the children screen filled in from the calendar photo, Charlotte adds Alexis, chooses Two parents and English, and adds Edward and Claire as the adults who help. Her first board shows Tuesday's letter day, E, and a coach card asking what time Mallory needs to be at Westview. |
| 5 | The draft month is headed "Mallory's September". |
| 6 | Section 4 gains copy for the splash, the skip link, the draft heading, the step counter and all four setup screens, including corrected versions of the Figma lines. |
| 7 | Appendix A records Charlotte's setup answers and her first board. Appendix B gains item 20, on the new onboarding order for the spec, and item 21, on the four copy fixes the Figma onboarding screens need. |

## Version 3.3, September 30, 2026

Settles the navigation and adds the Kids tab, child pages and school cards.

| # | Change |
| ----- | ----- |
| 1 | The tabs are now Today, Coach, Game plan, Team and Kids. Your people is renamed Team, because Your people and a family tab overlapped. Kids replaces Settings as the fifth tab, and settings open from the parent's monogram at the top right of every tab, or from the bottom of the sidebar at wider sizes. |
| 2 | Section 2 gains "The Kids tab and school cards", covering child pages, the six sections of a school card, how the coach files reference on a card, the Changed mark and history on card facts, the Add button, and the predictable moments when the coach asks for updates. |
| 3 | A new section, "The Kids tab", gives Alexis's and Mallory's pages and the full Westview and Cedar Grove cards as they stand at the start of the demo week. |
| 4 | C-05b is added, an optional moment on Tuesday afternoon. A Westview email moves pickup changes to a new address, and the coach updates the Westview card, marking the changes and keeping the old version in its history. |
| 5 | In C-06, the coach now says Westview needs the note by 11:00 on Thursday, and the note goes to pickups@westviewk.org, the address that changed in C-05b. |
| 6 | The terms table gains Team, Kids, child page and settings, and the school card entry is updated. Section 4 replaces the school card copy with copy for the Kids tab, child pages and school cards, and adds the settings monogram. |
| 7 | Appendix B item 1 now records the navigation decision, including the fallback of Kids and People, and item 18 records that school cards live on the Kids tab, with what the spec still needs to define. Appendix A records the new invented facts. |

## Version 3.2, September 30, 2026

Adds how things get into MVP, an onboarding moment for Charlotte, and the phase-of-the-day title on Today.

| # | Change |
| ----- | ----- |
| 1 | Section 2 gains "How things get into MVP", which defines four entry points (the share menu, a forwarding address, the camera and voice), the three kinds of input the coach handles (one-off events, recurring rules and reference), the read-back, and the source link on every captured item. |
| 2 | Section 2 gains "Onboarding starts with capture". The first screen asks for one thing from this week, and the account comes after the parent has seen her first draft. |
| 3 | C-00 is added, set two weeks before the demo week. Charlotte photographs Westview's rotation calendar before creating an account, and the coach asks one question about the highlighting before drafting Mallory's month. Two coach lines for teaching the share menu and forwarding follow it. |
| 4 | A new section, "What the schools send", holds invented versions of the Westview rotation calendar, the Westview contact list and the Cedar Grove newsletter, based on real material with every name and number replaced. |
| 5 | C-01 now opens with the coach's read-back of the Cedar Grove newsletter, which keeps two items for Alexis and leaves out the rest. Charlotte shares Jenna's message through the share menu instead of forwarding it. Alexis's free dress day is added to Friday. |
| 6 | Mallory's rows show Westview's letter day, and her Monday checklist now reads "Sneakers, it's a motor skills day", tying it to the rotation. |
| 7 | The Westview note in C-06 is addressed to office@westviewk.org, taken from the Westview school card. |
| 8 | Today's title now names the phase of the day, "This morning", "This afternoon" or "Tonight", with a lucide icon. C-03 and C-06 show "This morning" and C-07 shows "Tonight". The evening checklist is renamed "Ready tonight" so that it does not repeat the title. |
| 9 | The terms table gains phase of the day, capture, share menu, forwarding address, source link and school card. |
| 10 | Section 4 gains the phase titles, the capture bar and its placeholder, read-back buttons, the onboarding screens and the school card. |
| 11 | Appendix A records the new invented facts, including the reserved 555-01 phone numbers and a check on the invented email domain. Appendix B gains five items for the spec. |

## Version 3.1, September 29, 2026

A correction pass after the first wireframes, answering the gaps and contradictions listed in the wireframe notes and recording Greg's decisions on seven open questions.

| # | Change |
| ----- | ----- |
| 1 | A "Terms used in this document" table is added to section 1, because several names exist only inside this project and confused readers who had not seen the wireframes. |
| 2 | The tab called Team becomes Your people. It holds the inner circle, the village and the parent's village groups, and village groups are created and managed inside MVP. C-05 now posts to Charlotte's village group, Cedar Grove parents, instead of the WhatsApp group. |
| 3 | Section 2 now sets out three ways a request reaches someone: a card in MVP, a text message with a link, or a handoff to another app. C-02 shows Edward receiving his request in his own MVP, and the Westview note becomes a handoff to email and a task on Charlotte's list. |
| 4 | The rule that nothing leaves MVP any other way is reworded to say that nothing goes to another person unless the parent sends it herself. The old wording contradicted the WhatsApp reply in C-03. |
| 5 | The status names are settled. The seed file uses internal names, and the screen always names the person involved. Items the parent owns herself show "You" and carry no status, which answers what a blank status meant. Changes she makes herself are never flagged back to her. |
| 6 | Conflicts are added as a separate mark. C-01 now shows yoga in conflict with both Thursday pickups until Charlotte chooses. |
| 7 | Today shows only today. The coming-up list moves off Today, the coach card is kept as the one exception with the reason stated, and C-07 shows tonight's preparation and tomorrow's first departures rather than the whole of Thursday. |
| 8 | The game plan holds every item, including routine ones, and opens with "This week's changes". C-04 shows that list before and after Charlotte's changes. |
| 9 | The standing week becomes "The week in the game plan", which lists every item with its on-screen wording, owner, kind, starting status and how it changes during the demo. |
| 10 | C-06 now has its own Wednesday board, and Thursday's reopened pickup reaches Charlotte through the coach card, which quotes Edward's answer. |
| 11 | Ms. Reyes's text moves to Sunday evening, so the tutoring suggestion on Monday morning no longer appears before the message that causes it. |
| 12 | The coach's answer in C-08 now says 7:40, matching the time Mallory leaves in Friday's carpool. Charlotte's own "8am" stays, because a parent can round and the coach can't. |
| 13 | The village replies in C-05 have fixed times and a fixed viewing time, and the newest reply is listed first. |
| 14 | Every board uses the same four columns, including Evening. |
| 15 | Checklist headings use the child's name, such as "Going with Alexis", in place of "Going with her". |
| 16 | The "Her people" table gains a column saying who has MVP and a column with the line shown on screen, written to Charlotte rather than about her. |
| 17 | References to saffron are removed, because how the coach card is visually marked is now undecided. |
| 18 | Section 4 collects every label, heading, button and placeholder on the demo screens, which fills the 21 gaps left open in the first wireframes. |

## Version 3.0, September 29, 2026

A rewrite, starting with Charlotte and Edward only, after the review of version 2.2 found that the document no longer matched the product.

| # | Change |
| ----- | ----- |
| 1 | The document now has two jobs, agreeing the shape of the demo and fixing the on-screen language and seed data. The presenter script moves to its own document and refers to moments here by ID. |
| 2 | The single-Thursday frame is gone. Each family is shown across a stretch of their week as a series of moments, and the household switcher moves between those moments. |
| 3 | Nothing in a plan is presented as settled. Section 2 defines the statuses every item carries, and the coach no longer calls anything set or covered. |
| 4 | "Team" is replaced by the inner circle and the village, with the rule that people see only what the parent sends them. |
| 5 | Messages that go to other people are written in the parent's voice, in the first person, and she sends them herself. The version 2.2 handoffs were written in the third person. |
| 6 | Today is described as a household board, with the next departure at the top, a list of what goes with each child, a row per person and a single coach card. Charlotte's moments give the board's text verbatim. |
| 7 | The seven ordered steps become eight things every family shows. A coach answer to a parenting question is added, along with an MVP Recommends article for it, because version 2.2 never showed the coach answering a question. |
| 8 | Alexis and Mallory now attend different schools, Cedar Grove Elementary and Westview Kindergarten, with different hours. |
| 9 | Charlotte's section is rebuilt as eight moments from Monday to Thursday, including a change that reopens an accepted pickup and a choice she makes against the coach's recommendation. |
| 10 | Charlotte's two MVP Recommends articles are written in full. |
| 11 | Charlotte's full standing week and travel times are added, so the game plan can be seeded for every day. Times now carry am and pm. |
| 12 | Dates are written as days of the demo week, with facts outside the week written as offsets from its Monday. |
| 13 | The orthodontist, the ballet shoes and Edward's Tuesday voicemail from version 2.2 are dropped, because nothing in the demo depended on them. |
| 14 | Spelling is American throughout. |

## Versions 2.0 to 2.2, September 29, 2026

Version 2.0 restructured the document around the notes from the September 22 and 25 calls, version 2.1 added the game plan and team sections and reduced the weight on meals, and version 2.2 was a writing pass. Their full change logs remain in version 2.2, which is also the reference for Calypso, Alexandra and Ben, and Marcus until their sections are rewritten.
