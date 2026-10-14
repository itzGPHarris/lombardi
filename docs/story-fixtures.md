# Demo fixtures: the MVP families

*MVP (Lombardi) · Version 3.10 · October 13, 2026 · Charlotte and Edward only*

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
| Phase of the day | The title at the top of Today, which reads "This morning", "This afternoon" or "Tonight". The board beneath it changes with the phase, and the tab itself still reads "Today". |
| Game plan | The tab that holds the whole week, including routine items. It is also where anything coming up later in the week lives, together with every change and conflict. |
| Coach | The tab where the parent talks to the coach, by voice, by typing or by adding a photo or file. The coach turns what she gives it into the plan and answers her parenting questions. |
| Thinking screen | A short waiting screen with the MVP mark and a line saying what the coach is doing, such as "Reading your photo…". It appears while the coach reads a capture or builds a draft, so a wait never looks like a fault. |
| Capture | Anything the parent gives MVP so the coach can turn it into the plan, such as a photo of a handout, a forwarded email, a message shared from WhatsApp or a voice note. |
| Share menu | The phone's own share sheet. MVP appears in it, so the parent can send a message, email or photo to MVP from any app without copying and pasting. |
| Forwarding address | A private email address each parent gets. Whatever she forwards to it, or sets her email to forward automatically, goes to the coach. |
| Her calendar | The main calendar the parent already keeps, such as Google Calendar, Apple Calendar or Outlook. She connects it once during setup, MVP reads it and keeps the plan in step with it, and MVP never changes anything in it. |
| Calendar mark | A small calendar icon beside any item that came from her calendar, on Today and in the game plan, so she can tell what MVP read from what MVP made. |
| Source link | The line on every captured item that says where it came from, such as "From the Cedar Grove newsletter · Sunday", so the parent can check the original. |
| Team | The tab that holds the adults around the parent, meaning her inner circle and her village, and the conversations she has with her village groups. Versions 3.1 and 3.2 called it Your people. |
| Kids | The tab that holds a page for each child and the cards for the schools in the children's lives. It replaces Settings as the fifth tab. |
| Child page | The page for one child on the Kids tab, with her school, what she does every week and the items that regularly go with her. |
| School card | The page for each school, holding its hours, contacts, rules, calendar, rotation and the original documents it was built from. It lives on the Kids tab and opens from the school's name anywhere in the app. The coach uses it when a message needs to go to the school. |
| Settings | Account and app settings. They open from the parent's avatar at the top right of every tab on a phone, and from the bottom of the sidebar at wider sizes. |
| Inner circle | The people a parent trusts with her children and her private life, such as her partner, grandparents, close friends, a nanny and the family's doctors, therapists and tutors. |
| Village | Everyone else who shares her children's week for a few hours at a time, such as school parents, carpool families, coaches and team parents. |
| Village group | A group of village members that the parent creates inside MVP and invites people to, such as "Cedar Grove parents". Only its members see its posts, and the coach never reads them. |
| Departure | The moment a child leaves for somewhere. Today shows the next departure at the top with a countdown. |
| Going with list | The short checklist under each departure of what goes with that child, headed with the child's name, such as "Going with Alexis". |
| Status | The mark on a plan item that says where it stands, such as "Asked Edward" or "Edward: yes". Section 2 lists all six. |
| Conflict | A mark that appears when the plan asks one adult to be in two places at once, or leaves a child with nobody. |
| Request | Part of the plan that the parent sends to someone else and asks them to take on. The person answers with "I've got it" or "I can't do this". |
| Coach card | The single card on Today where the coach holds the most useful open decision. It is filled and outlined in the coach's color and labeled with a solid dot and "Coach", as in spec §5. |
| MVP Recommends | Short articles written by MVP staff. One appears on Today when something in the week makes it useful, and another is attached to a coach answer when the parent asks for ideas. |
| Moment | A point in a family's week that the demo shows, identified by an ID such as C-03. |
| Household switcher | A hidden presenter control that jumps between families and between moments. It is not part of any screen. |

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

The same capture bar sits on the Coach tab, with a camera, an attach button for files and photos, a microphone and a send button. Today carries a single capture button, labeled Add, instead of the whole bar, so the board stays readable. Her own calendar is a fifth source, connected once rather than used each time, and it has its own section below. Connecting her email account directly is a later feature, because reading a whole inbox asks for much more trust than sharing one email at a time.

**What the coach does with what she gives it.** Whatever arrives falls into one of three kinds, and the coach handles each kind differently.

| Kind | Example | What the coach does |
| ----- | ----- | ----- |
| A one-off event | A school newsletter | Keeps only what applies to her children, using the grades it knows, and leaves out the rest. Most of a newsletter covers other grades, and filtering it is work the parent otherwise does in her head every week. |
| A recurring rule | A rotation calendar, where each letter day means library, science or motor skills | Turns the rule into standing items on the going with lists, such as "Library book" on library days and "Sneakers" on motor skills days. |
| Reference | A school's contact list | Saves it on the school card and uses it later, for example to address a note to the right office when the plan needs one. |

Each capture gets a short read-back from the coach that says what it took, and the coach asks at most one question when something is unclear. New items the coach pulls in arrive as Suggested, and a change to an item already in the plan shows as Changed, so nothing enters the plan without the parent seeing it. Every item keeps a source link to where it came from, because the one thing a parent cannot forgive is a date the coach made up.

**Entry points are taught when they become useful.** Onboarding asks for only one capture. The first time she pastes a WhatsApp message, the coach tells her she can share from WhatsApp directly next time, and after she forwards her first newsletter, it offers to set up automatic forwarding for that sender.

**The prototype stages these moments.** The prototype is a web app, which cannot fully appear in an iPhone's share menu, and it does not read live photos or email. Sharing, forwarding and photographing are scripted moments with prepared results, and the real capability goes to the engineer through the spec.

## Her calendar

Most parents already keep one main calendar, usually Google Calendar, Apple Calendar or Outlook, and much of the family's week is already in it: the children's activities, appointments, and the invitations that schools and clinics send. If MVP ignored it, she would have to give MVP everything twice. MVP therefore connects to her calendar once, during setup, and from then on the plan and the calendar stay in step. The prototype covers those three calendars.

**MVP reads her calendar and never changes it.** It does not add, move or delete anything there. Her calendar stays hers, and MVP is the place where the week is worked out. Whether MVP should ever write plan items back to her calendar is an open question in Appendix B.

**The coach sorts what it finds.** It reads each event and works out whom it concerns. The children's activities, appointments and school events come into the plan on the child's row. Her own appointments come in on her row, because they decide when she can drive. Events with no time, such as birthdays and holidays, stay on the calendar and out of the plan. When the coach cannot tell whom an event concerns, it asks, and it still asks at most one question at a time.

**Calendar items come in owned by her, with no status.** She put them on her calendar herself, so they are not suggestions, and making her approve each one would undo the point of connecting. They come in with "You" as owner, the calendar mark, and the source link "From your Google Calendar", or whichever calendar she uses.

**The plan follows her calendar.** When she adds, moves or deletes an event, the plan follows. A change she makes herself is not marked Changed, by the same rule as everywhere else. When a new or moved event runs into the plan, both items show "Conflicts with", and the coach card offers ways to resolve it, as it does for any conflict. This is how something she books outside MVP still reaches the plan without her sending it.

**Calendar items are moved in her calendar.** Because MVP never writes to her calendar, she moves or deletes a calendar item there, not in the game plan. In MVP she can still add a note to it or put someone's name against it to send a request. If she tries to drag it, the game plan says "Change this in Google Calendar."

**One thing, one item.** When a capture and a calendar event describe the same thing, the coach keeps one item with both source links.

**Nobody else sees her calendar.** Edward, her inner circle and her village see only what she sends them, as before.

**The prototype stages it.** The connect screen and the permission screen look real and connect nothing, and Charlotte's calendar is written into the seed. The real product reads Google Calendar and Outlook through their own accounts. Apple Calendar on an iPhone is read by the native app, so like the share menu it is staged in the prototype.

## Onboarding

Onboarding has three parts. In the first part, before any account, the parent tells MVP her first name and who she is planning for, then gives it one thing from this week and sees it come back as a plan. In the second part she creates the account, connects her calendar and answers three short setup screens. In the third part MVP finishes setting up, the coach introduces itself, and she lands on Today.

| # | Screen | Part | Step counter | Can she skip it? |
| ----- | ----- | ----- | ----- | ----- |
| 0s | Splash | Before the account | None | No |
| 0w | Welcome: her first name and zip code | Before the account | None | Yes, to 0k |
| 0k | Who are you planning for: each child's name and grade | Before the account | None | Yes, to 0a |
| 0a | Show me one thing | Before the account | None | Yes, to 0e |
| 0v | Check the photo: Use this photo or Retake, for a photo only | Before the account | None | No |
| 0r | Thinking, while the coach reads the capture | Before the account | None | No |
| 0b | Read-back, with a tap to confirm which child it is for, at most one question, and the hand-off | Before the account | None | No |
| 0t | Thinking, while the coach builds the draft | Before the account | None | No |
| 0c | The draft, with the account prompt over it | Before the account | None | Not now ends the session |
| 0e | Create your account: an email address or sign-in with Apple | Setup | 01 of 05 | No |
| 0q | Connect your calendar: Google Calendar, Apple Calendar or Outlook | Setup | 02 of 05 | Not now, to 0f |
| 0f | Who's on your calendar: each child's school | Setup | 03 of 05 | No |
| 0g | Your household: household type and home language | Setup | 04 of 05 | No |
| 0h | Who else helps: the adults she counts on | Setup | 05 of 05 | No |
| 0p | Getting everything ready, while the account is created | Finishing | None | No |
| 0j | Nice to meet you: the coach's introduction and a recap | Finishing | None | No |
| 0i | Her first board on Today | Finishing | None | No |

**Value still comes before the account.** The welcome and the children screen come before the first capture so that the coach knows whose week a capture belongs to. Without them, the coach could only guess which child a calendar was for. Both screens are short, neither asks for an account, and both can be skipped. Nothing in the first part is kept unless she creates an account: her name, zip code, children, photo and draft are held only for that session and discarded if she leaves.

**The coach always confirms which child a capture is for.** It preselects a child by matching the grade on the document to a child's grade, and she changes it with one tap. If two children share a grade or the document shows none, nothing is preselected. If she skipped the children screen, the confirmation offers a name field and the grade choices instead. The confirmation is a control, not a question, so the coach can still ask its one question.

**She hands the draft to the coach.** The read-back never runs straight into the draft. Once the child is confirmed and the coach's question is answered, the coach says what it will make, names anything it is keeping for later, and waits for her to tap the button that starts the draft. A link beside the button lets her correct something first. The hand-off is the moment she decides to give the coach the job, so the draft never appears as something the coach did on its own.

**The first draft covers the rest of this week.** A week is short enough to be right and long enough to show what MVP does. Anything on a capture that falls in a later week, such as a field trip or a fair, goes onto the school's card and comes into the plan when its week arrives, and the coach says so at the hand-off.

**Grades cover every child.** The grade choices run from "Not in school yet" through Pre-K, K and 1 to 8, then 9–12. A child marked "Not in school yet" is asked for an age on the setup screen instead of a school, because a five-year-old's Saturday looks nothing like a two-year-old's.

**Waits are shown, never hidden.** A thinking screen appears while the coach reads a capture (0r) and while it builds the draft (0t). Each shows the MVP mark and a line saying what the coach is doing, and each moves on by itself. In the prototype, which does not really read photos, each lasts two seconds. In the product, a capture that cannot be read and a wait longer than twenty seconds each have their own screen with a way to try again, and the wording for both is in section 4. Creating the account takes thirty to ninety seconds, so 0p shows its steps finishing in turn, five of them when she has connected a calendar, with no percentage, because a number that stalls or jumps looks broken. If account creation fails, 0p says so and keeps everything she entered. If she leaves the app during 0p, MVP opens at 0p or 0j when she returns. In the prototype 0p lasts four seconds.

**Her calendar is connected right after the account.** It comes after the first draft, so she has already seen what MVP does before it asks for her calendar, and before the school screen, so the coach can fill in what the calendar already shows. If she taps Not now, connecting stays in Settings, and the coach offers it once, the first time she gives it an appointment.

**The step counter appears on setup only.** The screens before the account carry no counter because they are not a form, and the screens after setup carry none because there is nothing left for her to do. The counter runs from 01 to 05.

**Headlines are display type.** The large headline on every onboarding and setup screen is set in Fraunces, the display face, which is reserved for headlines and titles. Fields, labels, helper lines and buttons are set in Inter. What the coach says in onboarding and on the Today coach card is set in Fraunces, and in the coach chat it is set in Inter. This corrects version 3.4, which said the setup screens were set entirely in sans.

**Her first board is never empty.** If she captured something, Today shows it. If she skipped the capture, the coach card asks for one thing to start with.

A parent who taps Not now on the account prompt, or leaves before creating the account, starts again at the splash the next time she opens the app.

## Nothing is ever settled

A family's plan is the best current version of the week, and it changes whenever someone's day does. MVP never presents a plan as final. When something changes, the coach comes back with options rather than a single fix.

Every item in the plan has an owner and may carry a status. The owner is the adult responsible for the item, shown as their name, as "You" for the parent herself, or as "Nobody yet" when nobody is responsible. "Nobody yet" is drawn with its own mark, because an item with no owner is always something the week still needs from her.

A status says where a request or suggestion stands, so it appears only when another person or the coach is involved. The seed file uses the internal names, and the screen always names the person.

| Internal name | On screen | What it means |
| ----- | ----- | ----- |
| Proposed | Suggested | The coach has suggested it and the parent has not chosen it yet. A suggested item has no owner until she chooses it. |
| Asked | Asked Edward | The parent has sent it to someone, and that person has not answered. |
| Accepted | Edward: yes | The person asked has said yes. The item can still change. |
| Declined | Edward can't | The person asked has said no. The item reopens with options beside it. |

Two marks can sit on any item, whoever owns it, alongside its status.

| Internal name | On screen | What it means |
| ----- | ----- | ----- |
| Changed | Changed | Something about the item moved since the parent last looked, because of a message or another person. The mark stays until she opens the item. A change she makes herself is never flagged back to her. |
| Conflict | Conflicts with yoga | The item collides with another one, as described below. |

A conflict is marked separately from these statuses, because it describes two items that collide rather than where one item stands. When the plan asks one adult to be in two places at once, both items show "Conflicts with" followed by the other item, such as "Conflicts with yoga", until the parent resolves it. An item that collides with two or more items names them together where it can, such as "Conflicts with both pickups", and otherwise gives the number, such as "Conflicts with 3 items".

The coach never calls a plan set, covered, sorted, done or final, and nothing else on screen does either.

## The people around a parent

Parents take their questions and their logistics to two different groups of people, and MVP keeps them apart because they do different jobs. Both live on the Team tab.

**The inner circle** is the people a parent trusts with her children and with her private life. It includes her partner, grandparents, close friends, a nanny, and the family's own doctors, therapists and tutors. These are the people she hands parts of the plan to most often, and when the coach says a question needs a doctor, it names the doctor from her inner circle.

**The village** is everyone else who shares her children's week for a few hours at a time. It includes school parents, carpool families, coaches and team parents, and the parents she sees at birthday parties and play dates. The village knows the local answers, such as which therapist has openings, where to buy sparring gloves, or who can drive on Wednesday.

The village is managed inside MVP. The parent creates village groups and invites people to them, and only the members of a group see what is posted there. Groups that already exist elsewhere, such as a parents' WhatsApp group, stay where they are. She forwards messages from them into MVP when she wants the coach to see them, and she replies to them from the app they live in.

People see only what the parent sends them. Nobody sees her plans, her coach conversations or anything else she has not sent. The coach knows what she has entered about each person, such as which school their children attend, but it never reads her village groups.

## How a request reaches someone

Anything sent to another person is written as the parent, in the first person and in her own plain voice, because the person reading it is hearing from her. The coach drafts it and she changes whatever she wants to change. Nothing goes to another person unless she sends it herself.

A message reaches its recipient in one of three ways, depending on who the recipient is.

| Recipient | How it arrives | How the answer comes back |
| ----- | ----- | ----- |
| Someone who has MVP, such as Edward or Min-jung | As a request card in their own MVP, with a notification on their phone. They see only the requests she sends them and nothing else of her plan. | They answer each item on the card with "I've got it" or "I can't do this", and each answer appears as a status on her plan. |
| Someone who does not have MVP, such as a tutor | As a text message to the mobile number she entered, with a link to a single web page that shows the request and the answer buttons. No account is needed. | The same buttons on that page update her plan in the same way. |
| A group or organization outside MVP, such as the parents' WhatsApp group or a school office | MVP hands the drafted text to the app she chooses, such as WhatsApp, email or her messages app, and she sends it from there. | Nothing comes back into MVP. Sending it becomes a task on her own list, which she ticks off herself. |

Charlotte's week uses all three: Edward and Min-jung through their own MVP, Ms. Reyes through the web page in C-06b, and the parents' WhatsApp group and the Westview office through another app.

**Each item gets its own answer.** A request that covers more than one item, such as Edward's two pickups, lists each item with its own "I've got it" and "I can't do this", so a person can take one and decline the other.

**A person can add a short note.** A note travels with the answer and never changes her plan by itself. A note with "I can't do this" reopens that item, and the coach card turns the note into options, as Edward's note does in C-06. A note with "I've got it", such as "I'll be ten minutes late", shows under the item with the Changed mark until she opens it, and nothing reopens.

**A person can change an answer.** After answering, each item shows the answer and a Change link, and a changed answer reaches her the same way as the first one.

**She hears about answers.** Each answer, and each changed answer, arrives as a notification on her phone and as a status on the item. A "can't" also brings the coach card back with options. There are no read receipts, so nobody can see whether the other person has opened a request, and "Asked Edward" carries no time.

**Another app leaves a task.** MVP cannot see whether a message handed to another app was sent, so every handoff leaves a task on her own list, such as "Send Westview the pickup note", until she ticks it off. The plan itself follows her choice in MVP, not the sending.

## Today shows today

Today is the home tab, and it shows the logistics for the current day and nothing else. It works like a departures board. It borrows from transit boards, where the next departure and its status can be read at a glance from across a room, and from subway maps, where each child's day reads as a line of stops and a handoff between adults works like a change of trains.

- The next departure sits at the top of the screen with a countdown, and everything else on the board comes after it.
- Each departure carries a going with list, headed with the child's name, that the parent can tick off at the door. Getting two children out of the house prepared comes down to two short lists.
- Each child has a row that runs through the day, showing where she is, who takes her, who collects her and when. The adults have rows too, so the parent can see where the children's days depend on her own.
- Anything that has changed today is marked in place on the row it affects.
- Items from her calendar carry the calendar mark, so she can tell what MVP read from her calendar from what MVP made.
- In the evening, the title changes to "Tonight" and the board turns to tonight's preparation. It shows a "Ready tonight" checklist and tomorrow's first departures, because most of the work of getting children out the door happens the night before. Tomorrow's full day stays in the game plan.
- An MVP Recommends card appears only when something in the week makes an article useful.

**The title names the phase of the day.** The top of Today reads "This morning", "This afternoon" or "Tonight", each with an icon, and the day of the week sits on the row above it, at the left, with her avatar at the right, such as "Monday". It is never a calendar date, so the demo works in any week. Tonight shows the day it is, not tomorrow. The phase tells the parent what the board is helping with before she reads anything else: getting everyone out the door in the morning, pickups and activities in the afternoon, and getting ready for tomorrow at night. The word always appears with the icon, and the header is no taller than a plain title, so the next departure stays near the top of the screen. The prototype follows the clock. This morning runs from midnight to noon, this afternoon runs from noon until the board turns to tomorrow, and tonight starts at 7:00 pm, or later if an activity is still scheduled after 7:00 pm.

**The coach card is the one exception to showing only today.** It holds the single most useful open decision, and that decision can be about any day. If it were limited to today, a change to Thursday that arrives on Wednesday would stay invisible until Thursday morning, which is too late to act on. The card names the day it concerns, and its link opens that day in the game plan. A card that concerns no particular day, such as the therapist news in C-05, has no day label and no game plan link, and tapping it opens the full message on the Coach tab.

On every tab, the parent's avatar sits at the top right of the tab's own screen. Pages opened inside a tab, such as a child page, a school card, an article or a draft, show a Back link in its place.

On a phone, the next departure sits at the top and the rows stack beneath it. From tablet width up, the board opens into a full-day grid with one row per person.

## The game plan holds the week

The game plan shows the whole week, from Monday to Sunday, and every item in it, including routine ones such as the daily school runs. Routine items are visually quieter than items that happen only this week, so the week stays readable. A routine item that carries a status, a Changed mark or a conflict is drawn at full weight until it clears. Each item shows its owner, and its status when it has one.

At the top of the game plan sits "This week's changes", which lists every item for the rest of the week that is suggested, asked, declined, changed, owned by nobody or in conflict. It has one entry per item, so an item in conflict appears once with its conflict mark. This is where anything coming up later in the week lives, so the parent can see at a glance what the week still needs from her. Tapping an entry opens its day.

The parent works the game plan directly. She can drag an item to another time or day, add a note to it, or put someone's name against it, which sends that person a request. Items from her calendar carry the calendar mark and are moved in her calendar rather than dragged.

## The Kids tab and school cards

The Kids tab holds a page for each child and a card for each school. Settings, which used to be the fifth tab, move behind the parent's avatar, because parents visit settings rarely and look at their children's schools every week.

**A child page** shows the child's school, what she does every week and the items that regularly go with her, such as sneakers on motor skills days. It links to her school's card. Siblings at the same school share one card, so an update reaches both.

**A school card** holds what a parent otherwise keeps in a drawer of handouts and a folder of emails. It opens from the Kids tab and from the school's name anywhere it appears, such as "Westview" on Mallory's row on Today.

| Section | What it holds | How it changes during the year |
| ----- | ----- | ----- |
| Hours | Start and end times, early dismissal days, and before- and after-school care | For conferences, testing weeks and a new term |
| Contacts | Who to contact for what, organized by reason, such as absences, pickup changes, learning support and the counselor | A new teacher or a new office address, usually at the start of a year or term |
| Rules | The pickup list policy, dress days, lunch, and what each letter day means | Occasionally, often announced in a newsletter |
| Calendar | Term dates, holidays, conferences and school-wide events | In pieces all year |
| Rotation | The letter for each school day | A new sheet each month |
| Documents | The original photos, PDFs and emails the card was built from | With every capture |

Every fact on a card links to where it came from, which is the same source link rule as everywhere else. The link appears when she opens a fact, not under every line. A fact she told the coach herself, such as a start time, shows "From you". Sections with nothing in them are hidden. On the Kids tab, a school's row carries the Changed mark when anything on its card has changed. Keeping the originals also answers one of the most common questions a parent has, which is where a particular handout went.

**Cards are kept current through capture.** There is no separate flow for adding school information, because the four entry points already cover it. When a capture contains reference, the coach files it on the right card and says so in its read-back, while events still go to the game plan and rules still become standing items. A changed fact carries the Changed mark on the card until the parent opens it, and the previous version stays in the card's history. If a new document contradicts an old one in a way the coach cannot resolve, such as two different end times, the coach asks which is right instead of choosing. Each card also has its own Add button, which opens capture already addressed to that school.

**The coach asks at predictable moments.** Near the end of each month it asks for the next rotation sheet, after a long break it asks whether the hours have changed, and in late summer it asks for the new year's handouts, keeping the contacts but marking the teacher and grade for a check.

**Cards start from the first capture.** Onboarding has no step for adding schools. The first card is created from whatever the parent captures first, and when the coach does not yet know a child's school, it asks on Today, the same way it asks for other details about each child. The Kids tab also has an Add a school button for parents who would rather type it in.

The prototype covers schools only. Studios, teams and clinics would suit the same card, and that belongs on the roadmap.

## What every family shows

Every family shows the same set of things, so the demo makes the argument that one product handles households that look nothing alike. The order varies with each family's week, and each family shows one or two of these in more depth than the others.

1. The parent gives MVP something messy, such as a voice note, a photo of a handout, a message shared from another app or a forwarded email, and MVP turns it into the plan. What is already on her own calendar reaches the plan without her sending it.
2. When something needs a decision, the coach offers several ways it could go, recommends one and explains why. Sometimes the parent chooses a different one, because she knows things the coach does not.
3. Part of the plan goes to another person as a request, and their answer comes back as a status.
4. Something changes after a person has accepted, and that part of the plan reopens with options beside it.
5. The parent works the game plan directly, without the coach.
6. The parent asks the coach a parenting question, and the coach answers from what it knows about her family, with an MVP Recommends article attached.
7. The parent takes a question to her village or inner circle, because it needs people rather than a product.
8. The parent uses Today to get the children out of the house prepared.

| Family | Shown in depth | Status |
| ----- | ----- | ----- |
| Charlotte and Edward | Onboarding, the Today board, and how much of the week the coach can build from what she photographs, forwards and says and from her own calendar | Written in this version |
| Calypso | The coach answering a hard parenting question, and a village that is still forming | Proposed |
| Alexandra and Ben | The game plan worked directly, and a plan that changes more than once | Proposed |
| Marcus | Sending parts of the plan to several people, and what each person is allowed to see | Proposed |

## What the coach does not do

The coach does not plan money, find or recommend service providers or sitters, buy anything, or give advice on custody, legal or medical questions. When the demo needs one of those, the answer comes from the parent's inner circle, her village, or a professional the family already has.

## Meals

Every family has something to work around at the table, but none of them opens MVP in order to plan dinner. Dinner appears in a plan only when the schedule forces it to move, and the rest of the time it stays out of the way.

## Dates, times and places

The demo has no calendar dates, so it can be presented in any week without changing anything. Nothing on screen shows a calendar date, a month name or a year. Days are named by the day of the week, such as "Monday" or "Thursday", and anything further away is described relative to the demo week, such as "the Friday after this week", "two weeks ago" or "in four weeks". The seed files follow the same rule: every date is a day of the week plus a number of weeks before or after the demo week, and the seed holds no calendar date at all.

The same rule applies to documents in the story. The Westview rotation calendar covers "this month" without naming it, and the coach's first draft covers the rest of this week. The prepared photo of the calendar must show "Westview Kindergarten" as its header, with no month name or year anywhere on it. If a real device clock is ever used, the prototype still ignores it and runs on the demo week.

Times are written with am and pm, in the time zone America/Los_Angeles. Every person, place and organization is invented, and travel times between places are fixed in the seed file rather than calculated.

# 3. Charlotte and Edward

## The household

| Person | Age | Who they are |
| ----- | ----- | ----- |
| Charlotte | 48 | Charlotte uses MVP. She is home full time and handles the shopping, school, doctors and planning, and every message about the girls arrives on her phone. |
| Edward | 50 | Edward works full time on a hybrid schedule. He commutes 100 miles to the office on Tuesday and Wednesday and works from home the rest of the week. |
| Alexis | 10 | Alexis is in fourth grade at Cedar Grove Elementary. She plays violin in the school orchestra and takes private lessons, dances on Wednesday and sees a therapist once a week. |
| Mallory | 6 | Mallory is in kindergarten at Westview Kindergarten. She takes ballet on Thursday and has reading tutoring on Friday. |

The family lives on Linden Avenue. There is no nanny and no paid help.

## Her people

The last column is the line shown under each person's name on the Team tab.

| Person | Group | Who they are, for the team | Has MVP | On screen |
| ----- | ----- | ----- | ----- | ----- |
| Edward | Inner circle | Her husband | Yes | Your husband |
| Claire | Inner circle | Charlotte's sister, who lives an hour away. Too far for pickups, and they talk most days. | Yes | Your sister |
| Dr. Lena Ortiz | Inner circle | The girls' pediatrician at Northside Pediatrics | No | Pediatrician, Northside Pediatrics |
| Karen Moss | Inner circle | Alexis's therapist at Brightwater Family Therapy for the past year, with sessions on Monday at 3:30 pm | No | Alexis's therapist, Brightwater |
| Ms. Reyes | Inner circle | Mallory's reading tutor, with sessions on Friday at 3:00 pm in the Westview library | No | Mallory's reading tutor |
| Min-jung Park | Village | A Cedar Grove parent. Her daughter Sophie is in Alexis's class and her daughter Hana is in Mallory's class at Westview. The Parks drive the Monday carpool and live two streets from Linden Avenue. | Yes | Sophie and Hana's mom · Monday carpool |
| Jenna Okafor | Village | A Cedar Grove parent. Her daughter Ada is in Alexis's class, and the Okafors drive the Wednesday carpool. | Yes | Ada's mom · Wednesday carpool |

Charlotte has one village group, **Cedar Grove parents**, which she created in her first week and which has eight members, Min-jung and Jenna among them. The fourth-grade parents' WhatsApp group is separate and stays in WhatsApp. She forwards messages from it into MVP when she wants the coach to see them.

## Where Charlotte starts

Charlotte started using MVP two weeks before the demo week, and C-00 shows how. Her first capture was a photo of Westview's rotation calendar, taken before she had an account. She named both girls and both schools during onboarding, and during her first week she gave the coach the girls' weekly schedules, Westview's hours, the carpool and the rest of the people above. She also photographed Westview's family contact list, which now sits on the Westview school card, and set her email to forward the Cedar Grove newsletter to MVP automatically. By the demo week she shares messages from WhatsApp using the share menu rather than pasting them.

## What makes her week hard

The girls go to two schools with different hours, which means two drop-offs and two pickups on most days. On Tuesday and Thursday mornings Alexis has orchestra at 7:15 am, so Charlotte drives Alexis at 7:00 am and comes back for Mallory at 8:15 am. On Tuesdays Edward has already left for the office, so Mallory rides along on the first trip as well. The carpool only runs on Monday, Wednesday and Friday for the same reason. In the afternoon Mallory finishes at 2:30 pm and Alexis at 2:45 pm, twelve minutes apart, and between them the girls have five activities after school. Every school email, text and message from the parents' group lands on Charlotte's phone.

## What the schools send

These are the invented versions of the handouts and emails the two schools send home. Their structure follows real school material, but every name, address and number is invented. Phone numbers use the 555-01 range, which is reserved for fiction.

**Westview rotation calendar.** A one-page calendar for the month, with each school day marked by a letter from A to F. The key at the bottom reads: A, library, return books. B, motor skills. C, science. D, motor skills. E, art and music. F, science and motor skills. It also lists back-to-school night, a field trip to Fir Hollow Farm and the fall harvest fair, and someone has gone over several days with a yellow highlighter.

| Day of the demo week | Westview letter | What it means for Mallory |
| ----- | ----- | ----- |
| Monday | B | Motor skills, so sneakers |
| Tuesday | C | Science |
| Wednesday | D | Motor skills, so sneakers |
| Thursday | E | Art and music |
| Friday | F | Science and motor skills, so sneakers |

**Westview family contact list.** A single printed page headed "Who to contact". General questions go to the front office at 555-0140. Absences, late arrivals and early pickup go to office@westviewk.org and to the classroom teacher, Ms. Hollis in Room 3. Changes to who picks a child up go to the front office in writing, and the office releases children only to people on the pickup list. Questions about learning support go to Dana Lee, and questions for the school counselor go to Priya Nair.

**Cedar Grove weekly newsletter.** Sent every Sunday afternoon to all Cedar Grove families and forwarded automatically to Charlotte's MVP address. The demo week's edition has a list of helpful links, followed by upcoming dates: an early dismissal at 1:30 pm on Thursday for conferences, with no after-school care; conferences on Thursday afternoon and Friday; a free dress day on Friday for all grades; and a fifth-grade field trip to Point Reyes on Wednesday.

## The Kids tab

These are Charlotte's child pages and school cards as they stand at 6:00 am on the Monday of the demo week. The text in each table appears on screen as written.

**Kids, as shown: Alexis**

| Section | Content |
| ----- | ----- |
| Header | Alexis · 10 · Fourth grade |
| School | Cedar Grove Elementary · Ms. Carter's class |
| Every week | Orchestra, Cedar Grove, Tuesday and Thursday 7:15 am · Violin, Lakeside Strings, Monday 4:00 pm · Dance, Studio Ten, Wednesday 3:45 pm · Therapy, Brightwater, Monday 3:30 pm |
| Going with, by day | Library book, Mondays · Violin and orchestra folder, Tuesdays and Thursdays · Dance bag, Wednesdays |

**Kids, as shown: Mallory**

| Section | Content |
| ----- | ----- |
| Header | Mallory · 6 · Kindergarten |
| School | Westview Kindergarten · Ms. Hollis, Room 3 |
| Every week | Ballet, Studio Ten, Thursday 4:15 pm, with the calendar mark · Reading tutoring with Ms. Reyes, Westview library, Friday 3:00 pm |
| Going with, by day | Sneakers on B, D and F days · Library book on A days · Ballet bag, Thursdays |

**Kids, as shown: the Westview card**

| Section | Content |
| ----- | ----- |
| Hours | 8:30 am to 2:30 pm · Pickup at the front entrance |
| Contacts | General questions: front office, 555-0140 · Absences, late arrivals and early pickup: office@westviewk.org and Ms. Hollis · Changes to who picks up: office@westviewk.org, in writing · Learning support: Dana Lee · Counselor: Priya Nair |
| Rules | Children are released only to people on the pickup list · A, library · B and D, motor skills · C, science · E, art and music · F, science and motor skills |
| Calendar | Picture day, Friday · Back-to-school night, the Fir Hollow Farm field trip and the harvest fair, on their dates from the rotation calendar |
| Rotation | This week: Monday B · Tuesday C · Wednesday D · Thursday E · Friday F |
| Documents | Rotation calendar, photo, two weeks ago · Family contact list, photo, last week |

**Kids, as shown: the Cedar Grove card**

| Section | Content |
| ----- | ----- |
| Hours | 8:00 am to 2:45 pm · Pickup at the Oak Street gate · Early dismissal Thursday at 1:30 pm, Changed |
| Contacts | General questions: front office, 555-0120 · Absences: attendance@cedargrovees.org and the classroom teacher |
| Rules | Orchestra meets at 7:15 am on Tuesdays and Thursdays · Free dress days are announced in the newsletter |
| Calendar | Conferences, Thursday afternoon and Friday · Free dress day, Friday |
| Rotation | None |
| Documents | Weekly newsletter, Sunday · Weekly newsletters from earlier weeks |

## The week in the game plan

Each item shows the time the thing itself starts, such as ballet at 4:15 pm, and the departure on Today shows when to leave, such as 3:55 pm. This table is every item in the game plan for the demo week, as it stands at 6:00 am on Monday before C-01. Routine items repeat every week, and the others happen this week only. The last column records how each item changes during the demo.

| Day | Time | On screen | Owner | Kind | Status or mark at start | Changes during the demo |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| Monday | 7:40 am | Alexis · Carpool to Cedar Grove | Min-jung Park | Routine | | |
| Monday | 8:15 am | Mallory · To Westview | You | Routine | | |
| Monday | 2:30 pm | Mallory · Pick up at Westview | You | Routine | | |
| Monday | 2:45 pm | Alexis · Pick up at Cedar Grove | You | Routine | | |
| Monday | 3:30 pm | Alexis · Therapy, Brightwater | You | Routine | | From her Google Calendar. Mallory comes along. |
| Tuesday | 7:00 am | Alexis · Orchestra, Cedar Grove | You | Routine | | Mallory rides along. |
| Tuesday | 8:15 am | Mallory · To Westview | You | Routine | | |
| Tuesday | 2:30 pm | Mallory · Pick up at Westview | You | Routine | | |
| Tuesday | 2:45 pm | Alexis · Pick up at Cedar Grove | You | Routine | | |
| Tuesday | 3:00 pm | Mallory · Second tutoring session, Westview library | Nobody yet | This week | Suggested | In C-04 Charlotte drags it to the following Tuesday. |
| Tuesday | 4:00 pm | Alexis · Violin, Lakeside Strings | You | This week | Changed | Moved from Monday this week only. |
| Wednesday | 7:40 am | Alexis · Carpool to Cedar Grove | Jenna Okafor | Routine | | Becomes Nobody yet when Charlotte shares Jenna's message at 6:16 am. Charlotte takes it in C-03, and it shows You with no status. |
| Wednesday | 8:15 am | Mallory · To Westview | You | Routine | | |
| Wednesday | 2:30 pm | Mallory · Pick up at Westview | You | Routine | | |
| Wednesday | 2:45 pm | Alexis · Pick up at Cedar Grove | You | Routine | | |
| Wednesday | 3:45 pm | Alexis · Dance, Studio Ten | You | Routine | | From her Google Calendar. |
| Thursday | 7:00 am | Alexis · Orchestra, Cedar Grove | You | Routine | | Mallory stays home with Edward. |
| Thursday | 8:15 am | Mallory · To Westview | You | Routine | | |
| Thursday | 1:30 pm | Alexis · Pick up at Cedar Grove, early dismissal | Nobody yet | This week | Changed | After C-01 it conflicts with yoga. In C-02 Edward is asked, and he says yes at 7:52 am. |
| Thursday | 2:15 pm | Yoga, Willow | You | This week | | Added in C-01, with a conflict with both pickups until Charlotte chooses. |
| Thursday | 2:30 pm | Mallory · Pick up at Westview | You | Routine | | After C-01 it conflicts with yoga. Edward is asked in C-02 and says yes, then can't in C-06. Min-jung is asked in C-06 and says yes at 12:30 pm. |
| Thursday | 4:15 pm | Mallory · Ballet, Studio Ten | You | Routine | | From her Google Calendar. Charlotte and Mallory leave home at 3:55 pm. |
| Friday | 7:40 am | Carpool to Cedar Grove, then Westview | You | Routine | | Charlotte drives Alexis, Ada and Sophie, with Mallory along to Westview. |
| Friday | All day | Mallory · Picture day, Westview | You | This week | | Charlotte adds a note in C-04. |
| Friday | All day | Alexis · Free dress day, Cedar Grove | You | This week | Suggested | Pulled from the Cedar Grove newsletter. Charlotte adds it in C-01, and it shows no status. |
| Friday | 9:20 am | Your conference, Cedar Grove | You | This week | | |
| Friday | 2:45 pm | Alexis · Pick up at Cedar Grove | You | Routine | | |
| Friday | 2:30 pm | Mallory · Pick up at Westview | You | This week | | Added in C-06b, when tutoring is skipped this week. |
| Friday | 3:00 pm | Mallory · Tutoring with Ms. Reyes, Westview library | You | Routine | | Charlotte adds a note in C-04. In C-06b it conflicts with the checkup, Charlotte asks Ms. Reyes to skip this week, and it leaves the plan when Ms. Reyes answers. |
| Friday | 3:30 pm | Mallory · Checkup, Northside Pediatrics | You | This week | | Arrives from her Google Calendar in C-06b, in conflict with tutoring. |
| Friday | 3:45 pm | Mallory · Pick up at Westview | You | Routine | | Leaves the plan in C-06b, with tutoring. |
| Saturday | 10:00 am | Library run | Nobody yet | This week | | In C-04 Charlotte puts Edward's name against it, and it shows Asked Edward. |

Two tasks are added to the game plan during the demo, each owned by Charlotte with no status: "Call Brightwater and ask for Dana Whitfield" on Wednesday, added in C-05, and "Send Westview the pickup note" on Wednesday, added in C-06.

## Travel times

| From | To | Minutes |
| ----- | ----- | ----- |
| Home | Cedar Grove Elementary, Oak Street gate | 12 |
| Home | Westview Kindergarten | 10 |
| Westview Kindergarten | Cedar Grove Elementary | 12 |
| Home | Willow Yoga | 10 |
| Home | Studio Ten | 15 |
| Home | Lakeside Strings | 15 |
| Home | Brightwater Family Therapy | 20 |
| Home | Northside Pediatrics | 15 |

## Messages that arrive this week

| When | From | What it says | What MVP does with it |
| ----- | ----- | ----- | ----- |
| Sunday, 4:10 pm | Cedar Grove weekly newsletter, forwarded automatically | Thursday is an early dismissal at 1:30 pm for conferences, with no after-school care. Conferences run Thursday afternoon and Friday. Friday is a free dress day. The fifth grade goes to Point Reyes on Wednesday. | Marks Thursday's 1:30 pm pickup as changed and suggests Friday's free dress day for Alexis. It leaves out the fifth-grade trip and the links. Charlotte's conference is already booked for Friday at 9:20 am. The read-back opens C-01. |
| Sunday, 6:30 pm | Lakeside Strings, text | Alexis's lesson moves to Tuesday at 4:00 pm this week only. | Moves violin to Tuesday and marks it as changed. |
| Sunday, 7:15 pm | Ms. Reyes, text | "Mallory's doing so well. Could we add a second session each week?" | Suggests Tuesdays at 3:00 pm. Charlotte moves the start in C-04. |
| Monday, 5:50 am, shared by Charlotte from WhatsApp at 6:16 am | Parents' WhatsApp group | Jenna Okafor: "Who can do Wednesday morning? I can't this week." | Opens Wednesday's carpool and becomes the coach card in C-03, with Charlotte's reply drafted. |
| Tuesday, 11:50 am | Brightwater Family Therapy, voicemail | Karen Moss is leaving the practice in four weeks. Brightwater will assign a new therapist, or the family can request one. | Becomes the coach card in C-05. |
| Tuesday, 3:30 pm, forwarded by Charlotte at 3:38 pm | Westview, email to families | Starting this week, changes to who picks a child up go to pickups@westviewk.org rather than the main office address, by 11:00 am on the day. | Updates the pickup contact and rule on the Westview card, marks both as changed, and keeps the old version in the card's history. The read-back is C-05b. |
| Wednesday, 9:00 am | Northside Pediatrics, portal | Mallory's six-year checkup is due. | Nothing yet. Charlotte books the checkup in the portal at 1:05 pm, the portal adds it to her Google Calendar, and MVP picks it up from there in C-06b. |
| Wednesday, 11:40 am | Edward, answering his request in MVP | Edward can't collect Mallory on Thursday, and can still collect Alexis. | Reopens Mallory's pickup in C-06. |

Picture day at Westview on Friday came in an email the week before, so MVP already has it.

## The moments

| ID | When | What happens | What it shows | For the script |
| ----- | ----- | ----- | ----- | ----- |
| C-00 | Two weeks earlier, Monday, 8:30 to 8:40 pm | Charlotte names herself and the girls, photographs Westview's rotation calendar, hands it to the coach and sees Mallory's plan for the week, then creates her account, connects her Google Calendar, finishes setup and meets the coach. | Onboarding, from the splash to her first board | Core |
| C-01 | Monday, 6:15 am | Charlotte reads the newsletter read-back, shares Jenna's message from WhatsApp and talks for twenty seconds, and the coach offers three ways Thursday could go. | Capture, a conflict and options | Core |
| C-02 | Monday, 6:40 am | Charlotte asks Edward to take Thursday's pickups, and Edward sees the request in his own MVP. | A request and its status | Core |
| C-03 | Monday, 7:25 am | Charlotte gets both girls out of the house using Today. | The Today board | Core |
| C-04 | Monday, 8:50 pm | Charlotte works the game plan without the coach. | The week and its changes | Optional |
| C-05 | Tuesday, 12:20 pm | Alexis's therapist is leaving, and Charlotte asks her village group. | The village | Core |
| C-05b | Tuesday, 3:40 pm | A Westview email changes the pickup rule, and the coach updates the Westview card. | A school card kept current | Optional |
| C-06 | Wednesday, 11:45 am | Edward can't collect Mallory after all, and Charlotte chooses a different option from the one the coach recommends. | A change that reopens the plan | Core |
| C-06b | Wednesday, 1:15 pm | Charlotte books Mallory's checkup outside MVP, it reaches the plan through her Google Calendar, and it runs into Friday's tutoring. | Her calendar keeping the plan current | Core |
| C-07 | Wednesday, 9:10 pm | The title changes to Tonight and the board turns to preparation for Thursday. | Tonight | Optional |
| C-08 | Thursday, 8:40 pm | Charlotte asks the coach how to get through picture day morning. | A coach answer with an MVP Recommends article | Core |

## C-00 · Two weeks earlier, Monday, 8:30 pm · Charlotte's first night

*The girls are in bed and Charlotte has just downloaded MVP. Before any account, MVP asks her first name and who she is planning for, then for one thing from this week. She photographs the Westview rotation calendar on the fridge, checks the photo, answers the coach's question, and hands it over, and the coach turns it into a plan for Mallory's week before she has created an account. She then creates the account and connects her Google Calendar, and the coach brings in what is already there. The times below follow the screens in order and add up to about ten minutes.*

**Onboarding, as shown: the splash · 8:30 pm**

> [MVP mark] Most Valuable Parent

**Onboarding, as shown: the welcome · 8:30 pm**

> [MVP mark]
>
> Busy parents are experts at spinning plates, so hand one of them to your coach.
>
> Start with your first name and zip code, so the coach knows who it's planning with and what's nearby.
>
> Your name: Charlotte
> Helps the coach know who's talking.
>
> Zip code: 00123
> Helps the coach work out travel times and your local school calendar.
>
> [Continue]
>
> Skip for now

**Onboarding, as shown: who are you planning for · 8:31 pm**

> Who are you planning for, Charlotte?
>
> Names and grades are enough for now.
>
> Alexis · 4 selected from Not in school yet · Pre-K · K · 1 · 2 · 3 · 4 · 5 · 6 · 7 · 8 · 9–12
> Mallory · K selected from the same choices
>
> + Add another child
>
> [Continue]
>
> Skip for now

*If she skipped the welcome, the heading reads "Who are you planning for?"*

**Onboarding, as shown: show me one thing · 8:31 pm**

> Show me one thing from this week, such as a school handout, an email or a voice note, and I'll turn it into a plan.
>
> [Take a photo] [Add a file] [Talk or type]
>
> Skip for now

*She taps Take a photo and photographs the calendar, which is headed "Westview Kindergarten" and covers one month.*

**Onboarding, as shown: check the photo · 8:31 pm**

> [the photo, full width]
>
> [Use this photo] [Retake]

*She taps Use this photo, and the thinking screen shows while the coach reads it. Retake reopens the camera. A file or a voice note skips this screen, because there is nothing to frame.*

**Onboarding, as shown: reading · 8:32 pm**

> [MVP mark]
>
> Reading your photo…

**Onboarding, as shown: the read-back · 8:32 pm**

> This is Westview Kindergarten's calendar for this month, with a six-day letter rotation. A days are library, so books go back that day. B and D are motor skills and F is science and motor skills, so those three days need sneakers. C is science and E is art and music. The calendar also lists back-to-school night, the field trip to Fir Hollow Farm and the harvest fair.

> This calendar is for
> [Mallory · K] [Alexis · 4]

*Mallory is preselected, because the calendar is for kindergarten and Mallory is the child in kindergarten. Charlotte leaves the choice as it is. The coach then asks its one question, about the only thing it cannot tell from the page.*

> Several days are highlighted in yellow. Do the highlights mean anything to plan around?

> "No, that's just Mallory with a highlighter."

**Onboarding, as shown: the hand-off · 8:33 pm**

> Then the letters are all the rotation needs. I can make a plan for Mallory's week from here, with library and sneaker days on her going with lists and back-to-school night on Thursday. The field trip and the harvest fair are in later weeks, so they stay on the Westview card until then.
>
> [Make Mallory's plan]
>
> Something's not right

*Charlotte taps Make Mallory's plan. "Something's not right" returns her to the input with the read-back still in view, so she can say what to fix and the coach reads it back again.*

**Onboarding, as shown: making the draft · 8:33 pm**

> [MVP mark]
>
> Making Mallory's plan…

**Onboarding, as shown: the draft week · 8:33 pm**

> Mallory's plan for this week
>
> Here is the rest of this week for Mallory. Library is on Thursday and sneakers go with Mallory on Wednesday and Friday. Back-to-school night is on Thursday evening as a suggestion. None of it is saved yet.

| Shows | Example rows |
| ----- | ----- |
| Each remaining school day with its letter and what it means | Tuesday · E · Art and music |
| Sneaker days, with "Sneakers" on that morning's going with list | Wednesday · F · Science and motor skills · Sneakers |
| Library days, with "Library book" on that morning's going with list | Thursday · A · Library · Library book |
| The week's school event, marked Suggested | Thursday · Back-to-school night · Suggested |
| The rest of the week | Friday · B · Motor skills · Sneakers |

**Onboarding, as shown: the account prompt**

> Keep Mallory's plan
>
> Create an account to save this plan and add the rest of your family.
>
> [Create account] [Not now]

*If she taps Not now, everything she has entered is discarded when she closes the app. Charlotte taps Create account, and the five setup screens follow. Her name is already known from the welcome, so the account screen asks only how she signs in. Back from the account screen returns to the draft with the account prompt open.*

**Onboarding, as shown: create your account · 01 of 05 · 8:34 pm**

> Create your account
>
> Email
>
> [Continue with Apple]
>
> [Continue]

*Continue with Apple creates the account with her Apple email address and goes straight to the next screen.*

**Onboarding, as shown: connect your calendar · 02 of 05 · 8:35 pm**

> Connect your calendar
>
> Connect the calendar you already use, and the coach brings in what's on it and tells you when something new runs into the plan. MVP reads your calendar and never changes it.
>
> [Google Calendar]
> [Apple Calendar]
> [Outlook]
>
> Not now

*Charlotte taps Google Calendar. A permission screen opens, drawn generic and grayscale, not to Google's brand, and it reads "Most Valuable Parent wants to see your calendar" with Allow and Cancel. She taps Allow and returns to the screen, which now shows the connection.*

> Connect your calendar
>
> Connected · Google Calendar
>
> [Continue]

*If she taps Not now, the next screen follows and connecting stays in Settings. In the prototype the permission screen is staged and connects nothing.*

**Onboarding, as shown: who's on your calendar · 03 of 05 · 8:36 pm**

*Both girls arrive from the children screen with their grades. Mallory's school is filled in from the calendar photo, and Charlotte types Alexis's.*

> Who's on your calendar?
>
> Add each child's school, so the coach knows whose emails and handouts are whose.
>
> Alexis · Fourth grade
> School: Cedar Grove Elementary
>
> Mallory · Kindergarten
> School: Westview Kindergarten · From your calendar photo
>
> + Add another child
>
> [Continue]

*For a parent who skipped the children screen, each row asks for a name, a grade and a school. A child marked "Not in school yet" has an Age field instead of a School field.*

**Onboarding, as shown: your household · 04 of 05 · 8:36 pm**

> Your household
>
> Who's at home with the kids?
> [Two parents] [One parent] [Two homes] [Something else]
>
> Language at home
> [English]
>
> [Continue]

*Charlotte chooses Two parents and leaves English.*

**Onboarding, as shown: who else helps · 05 of 05 · 8:37 pm**

> Who else helps?
>
> Add the adults you count on, such as a partner, a grandparent or a nanny. You decide what each of them sees, and nobody sees anything you don't send them.
>
> Edward · Husband
> Claire · Sister
>
> + Add someone
>
> [Done]

*Edward and Claire become the first members of her inner circle. Min-jung, Jenna and the Cedar Grove parents group come later in her first week.*

**Onboarding, as shown: getting everything ready · 8:38 pm**

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

**Onboarding, as shown: nice to meet you · 8:39 pm**

> your coach · just now
>
> Nice to meet you, Charlotte.
>
> Here is what I have so far. Alexis is in fourth grade at Cedar Grove and Mallory is in kindergarten at Westview. Mallory has library on A days and needs sneakers on B, D and F days, so her going with lists carry them every week. From your Google Calendar, Alexis has therapy at Brightwater on Mondays and dance at Studio Ten on Wednesdays, and Mallory has ballet at Studio Ten on Thursdays, so those are on the plan too. Edward and Claire are in your inner circle. The next thing I need is Mallory's start time at Westview, and I'll ask for it on Today.
>
> [✓] Remind me the night before a library day
>
> [Next]

*The reminder is ticked already. Tapping Next with it ticked brings up the phone's request to allow notifications, which is the first moment notifications are useful to her. The recap covers the week, the standing rules and what came in from her calendar, and leaves tomorrow to Today, so the two screens don't repeat each other. Greg's Figma version showed "Time saved: 20 minutes", which is left out because nothing in the product measures it.*

**Today, as shown: her first board · 8:40 pm**

> [moon icon] Tonight · Monday
>
> Tomorrow starts: Mallory · Westview · E day

> Tuesday · Tomorrow is an E day at Westview. What time does Mallory need to be at school in the morning?
>
> [Answer]

*"Tomorrow starts" is shorter than in C-07, because the coach knows Mallory's letter day but not yet her start time. Her answer goes onto the Westview card with the source "From you". An E day carries nothing for the going with list, so the first list she sees is Thursday's library book.*

*If she skipped the capture, her first board has no departures, and the coach card asks for one thing to start with.*

> Today is empty so far. Send me a school email, a handout or a few words about your week, and I'll start the plan.
>
> [Add]

## Taught when useful

These lines appear during Charlotte's first week. They are not demo moments, but they are the coach's words, so they are fixed here.

*On Tuesday of her first week, at 12:40 pm, Charlotte copies a message from the parents' WhatsApp group and pastes it into the coach.*

> Min-jung Park: I can drive Monday mornings this term if anyone wants to share. 7:40 from our house.

*The coach reads it back, then adds the line that teaches the share menu.*

> Min-jung offers to drive Alexis on Monday mornings at 7:40 from the Parks' house, and it's on Monday as a suggestion.
>
> Next time, you can send a message straight from WhatsApp. Press and hold the message, tap Forward, tap the share button, and choose MVP.

*This is how the Parks came to drive the Monday carpool.*

*On Sunday of her first week, at 4:20 pm, after she forwards her first Cedar Grove newsletter to her MVP address:*

> This newsletter comes from the same Cedar Grove address every Sunday. If you set your email to forward that address to MVP, each one reaches the coach without you forwarding it.
>
> [Show me how] [Not now]

*For a parent who tapped Not now on the calendar screen, the first time she gives the coach an appointment. Charlotte connected hers, so she never sees this line.*

> Appointments like this one are probably on your calendar already. If you connect your calendar, they reach the plan without you sending them, and you hear from me when one runs into something.
>
> [Connect your calendar] [Not now]

## C-01 · Monday, 6:15 am · Charlotte talks to the coach

*The house is quiet and Charlotte opens MVP before anyone is up. The first thing on the Coach tab is the coach's read-back of Sunday's Cedar Grove newsletter, which reached MVP through automatic forwarding.*

**Coach, as shown: the newsletter read-back**

> From the Cedar Grove newsletter, two things are for Alexis. Thursday is an early dismissal at 1:30 for conferences, with no after-school care, so Thursday's pickup has moved. Friday is a free dress day. The fifth-grade trip and the rest of the newsletter are not for Alexis.
>
> From the Cedar Grove newsletter · Sunday
>
> [Add to the plan] [Show the newsletter]

*She taps Add to the plan, and the free dress day moves from Suggested into Friday. Then she opens WhatsApp, presses and holds Jenna's message, and shares it to MVP. MVP shows "Sent to the coach" and returns her to the Coach tab. She taps the microphone and talks for about twenty seconds, correcting herself partway through, because that is how people actually talk to a phone.*

> "Alexis gets out early Thursday, one thirty, it's conferences. Violin moved to Tuesday at four. Mallory needs something for picture day Friday, I think. Edward's home Thursday. And I really want the Thursday yoga class at two, actually it's two fifteen."

*The coach matches what she said to the messages it already has, handles the rest of the week without comment, and names the one day that needs a decision from her. Adding yoga puts it in conflict with both Thursday pickups, and the game plan shows "Conflicts with yoga" on both until she chooses.*

**Game plan, as shown: this week's changes, after the voice note and before she chooses**

| Day | Item | Owner | Status or mark |
| ----- | ----- | ----- | ----- |
| Tuesday | Mallory · Second tutoring session, 3:00 pm | Nobody yet | Suggested |
| Tuesday | Alexis · Violin, Lakeside Strings, 4:00 pm | You | Changed |
| Wednesday | Alexis · Carpool to Cedar Grove, 7:40 am | Nobody yet | |
| Thursday | Alexis · Pick up at Cedar Grove, early dismissal, 1:30 pm | Nobody yet | Changed · Conflicts with yoga |
| Thursday | Yoga, Willow, 2:15 pm | You | Conflicts with both pickups |
| Thursday | Mallory · Pick up at Westview, 2:30 pm | You | Conflicts with yoga |
| Saturday | Library run | Nobody yet | |

> Thursday is the day that needs you. Alexis is out of Cedar Grove at 1:30 and Mallory is out of Westview at 2:30, so both pickups land during your 2:15 yoga class at Willow. The rest of the week already fits. Violin is at Lakeside Strings on Tuesday at 4:00 this week, and picture day at Westview is Friday, so Mallory's outfit goes on Thursday night's list.

*The coach offers three ways Thursday could go and recommends one. Each alternative is a real choice that costs her something different.*

> **Edward takes both pickups.** Recommended
> Edward is home Thursday and free from 1:15. Edward collects Alexis at the Oak Street gate at 1:30 and Mallory at Westview at 2:30, so Alexis is home by 1:45 and Mallory by 2:45. You leave for yoga at 2:05 and you are back at 3:30 to take Mallory to ballet. I would pick this one, because Edward is already home and nobody outside the house is asked for anything.
>
> **Alexis goes home with the Okafors.**
> Jenna Okafor collects Ada at the same gate at 1:30 and lives five minutes from you. Edward then only has Mallory at 2:30, which keeps his early afternoon free. It means asking Jenna for a favor in a week when she has already said she is stretched.
>
> **You do both pickups and move yoga.**
> Willow has a class at 8:30 on Saturday morning. The Friday 9:00 class runs into your conference at Cedar Grove at 9:20, so Saturday is the one that works.

*Charlotte taps the first option. The coach lays out the day and is plain that none of it holds until Edward answers.*

> Here is Thursday with Edward on both pickups. Edward is at the Oak Street gate at 1:30 for Alexis and at Westview at 2:30 for Mallory. You leave for Willow at 2:05, you are home at 3:30, and you leave with Mallory and the ballet bag at 3:55. Edward has not seen any of this yet, so both pickups stay open until Edward answers.
>
> [Ask Edward]

## C-02 · Monday, 6:40 am · Charlotte asks Edward

*Tapping Ask Edward opens a message the coach has drafted in Charlotte's voice. She reads it, changes anything she wants to change, and sends it herself.*

**Charlotte's screen, as shown**

> To Edward
>
> Can you take both pickups Thursday? Cedar Grove lets out at 1:30 for conferences, so Alexis will be at the Oak Street gate at 1:30, and Mallory is at Westview at 2:30 as usual. I'm at yoga from 2:15 and back by 3:30, then I'll take Mallory to ballet. Snacks are in the pantry.
>
> Edward answers each item with
> Thursday · Alexis · Pick up at Cedar Grove, 1:30 pm · [I've got it] [I can't do this]
> Thursday · Mallory · Pick up at Westview, 2:30 pm · [I've got it] [I can't do this]
>
> You send this. MVP never sends anything for you.
>
> [Send]

*Edward has MVP, so the request arrives as a card in his own MVP with a notification on his phone. He sees this request and nothing else of Charlotte's plan.*

> Charlotte asked you about Thursday's pickups.

**Edward's screen, as shown**

*Edward's own Today shows his avatar, E, and the phase title "This morning". It holds only the items he owns and the requests Charlotte sends him.*

> [sunrise icon] This morning · Monday
>
> Request from Charlotte · 6:40 am
>
> Can you take both pickups Thursday? Cedar Grove lets out at 1:30 for conferences, so Alexis will be at the Oak Street gate at 1:30, and Mallory is at Westview at 2:30 as usual. I'm at yoga from 2:15 and back by 3:30, then I'll take Mallory to ballet. Snacks are in the pantry.
>
> Thursday · Alexis · Pick up at Cedar Grove, 1:30 pm
> [I've got it] [I can't do this]
>
> Thursday · Mallory · Pick up at Westview, 2:30 pm
> [I've got it] [I can't do this]
>
> Add a note for Charlotte

*Both pickups show "Asked Edward" in the game plan. Edward answers at 7:52 am, when he is up, with "I've got it" on both and no note. His card then shows his answers and the line below, with a Change link on each item.*

> Charlotte can see your answers. If anything changes, change your answer here.

*Charlotte gets a notification, and both pickups change to "Edward: yes".*

> Edward: yes to both pickups on Thursday.

## C-03 · Monday, 7:25 am · Getting the girls out the door

*This is how Charlotte sends two girls to two schools prepared. The next departure is at the top of the board, what goes with each girl sits under her departure, and the rest of Monday reads across in one row per person. The board shows Monday and nothing else. The coach card is the only part that can reach beyond today, and here it holds Wednesday's carpool.*

**Today, as shown: the header**

> [sunrise icon] This morning · Monday

**Today, as shown: the departures**

| Departure | Going with |
| ----- | ----- |
| **7:40 am · Alexis leaves with the Parks** · in 15 min | **Going with Alexis:** Lunch · Library book, due today · Water bottle |
| **8:15 am · You take Mallory to Westview** · in 50 min | **Going with Mallory:** Lunch · Sneakers, it's a motor skills day · Reading folder, signed |

**Today, as shown: the day**

| | Morning | School | After school | Evening |
| ----- | ----- | ----- | ----- | ----- |
| **Alexis** | Parks carpool, 7:40 am | Cedar Grove, 8:00 am to 2:45 pm | You collect, 2:45 pm · Brightwater, 3:30 pm | Home |
| **Mallory** | With you, 8:15 am | Westview, 8:30 am to 2:30 pm · B day | You collect, 2:30 pm · Along to Brightwater | Home |
| **You** | Westview, 8:15 am | | Westview 2:30 pm · Cedar Grove 2:45 pm · Brightwater 3:30 pm | Home |
| **Edward** | Working from home | Working from home | Working from home | Home |

**Today, as shown: the coach card**

> Wednesday · Jenna Okafor can't drive Wednesday morning and is asking the group. You are free at 7:40 on Wednesday, and a reply is ready if you want to take it.
>
> [See reply] [Not this week]
>
> [Open Wednesday in the game plan]

**Today, as shown: MVP Recommends**

> Recommended · School · 3 min read
>
> **Fifteen minutes with the teacher: making a conference count**
>
> Because Cedar Grove conferences are this week.

*Charlotte ticks the library book and the water bottle as Alexis heads out. At 7:40 am Alexis's departure leaves the top of the board and Mallory's moves up.*

*She taps See reply on the coach card. The reply is in her voice. The WhatsApp group lives outside MVP, so MVP hands the text to WhatsApp and she sends it from there. Wednesday's carpool shows her as the owner, with no status, as soon as she chooses to take it. Because MVP can't see WhatsApp, the handoff also leaves "Reply to the parents' group" on her list, and she ticks it off when she is back.*

> To Cedar Grove 4th Grade Parents
>
> I can do Wednesday. Same time, 7:40?
>
> You send this. MVP never sends anything for you.
>
> [Send from WhatsApp]

## Monday afternoon, for the wireframes only

*No demo moment falls in the afternoon, so this board exists only to show the third phase of the day. It is Monday at 2:10 pm.*

> [sun icon] This afternoon · Monday

| Departure | Going with |
| ----- | ----- |
| **2:20 pm · You leave for Westview and Cedar Grove** · in 10 min | **Going with Mallory:** A book for the waiting room at Brightwater |

*The rows are Monday's rows from C-03, with the morning items shown as done.*

## C-04 · Monday, 8:50 pm · Charlotte works the game plan

*Charlotte opens the game plan once the girls are in bed, and everything she does here she does without the coach. The point is that the plan belongs to her. The coach suggests, and the game plan is where she decides. It is also where she sees what the rest of the week still needs from her.*

**Game plan, as shown: this week's changes, when she opens it**

| Day | Item | Status |
| ----- | ----- | ----- |
| Tuesday | Mallory · Second tutoring session, 3:00 pm | Suggested |
| Tuesday | Alexis · Violin, Lakeside Strings, 4:00 pm | Changed |
| Thursday | Alexis · Pick up at Cedar Grove, 1:30 pm | Edward: yes |
| Thursday | Mallory · Pick up at Westview, 2:30 pm | Edward: yes |
| Saturday | Library run | Nobody yet |

Tuesday already has two school runs before 8:30 am and violin at 4:00 pm, so Charlotte drags the suggested tutoring session onto the following Tuesday, where it starts next week. She adds a note to Friday's tutoring session, "Tell Ms. Reyes Tuesdays at 3:00 work from next week," so that she can say it in person.

She taps Friday's picture day and adds "Green dress, hanging in the laundry room," so that it is written down rather than remembered.

She puts Edward's name against Saturday's library run. Edward has MVP, so he receives a request card that reads "Can you do the library run Saturday morning?", and the item shows "Asked Edward".

She opens violin, which clears its Changed mark.

**Game plan, as shown: this week's changes, when she closes it**

| Day | Item | Status |
| ----- | ----- | ----- |
| Thursday | Alexis · Pick up at Cedar Grove, 1:30 pm | Edward: yes |
| Thursday | Mallory · Pick up at Westview, 2:30 pm | Edward: yes |
| Saturday | Library run | Asked Edward |

## C-05 · Tuesday, 12:20 pm · Asking the village

*Brightwater's voicemail arrived at 11:50 am. The coach does not look up therapists or recommend people, so it tells Charlotte who can help with each part of this, and names Karen as the right person for Alexis's side of it. The card concerns no particular day, so it names none.*

**Today, as shown: the coach card**

> Karen Moss is leaving Brightwater in four weeks. Brightwater will assign Alexis a new therapist, and you can ask for a particular person instead of taking the first opening. Karen is the right person to help plan how Alexis finishes, so it is worth raising at Monday's session. For names, the Cedar Grove parents in your village know more than MVP does.
>
> [Ask my village] [Remind me Monday]

*She taps Ask my village, which opens a new post on the Team tab, drafted in her words and addressed to her village group. She can change any of it before it goes.*

**Team, as shown: the new post**

> New post
>
> Inner circle | **Village**
>
> To: Cedar Grove parents
>
> Alexis's therapist at Brightwater is leaving next month. Has anyone seen someone there they'd recommend for a ten-year-old? She's been going about a year and I'd like to keep her at Brightwater if we can.
>
> Only the people in this group see this. The coach doesn't read it.
>
> [Post]

*Two replies arrive that afternoon. The screen below is as Charlotte sees it at 5:00 pm on Tuesday, with the newest reply first. The coach does not read them. Charlotte reads them herself, then adds "Call Brightwater and ask for Dana Whitfield" to Wednesday in the game plan.*

**Team, as shown: the post at 5:00 pm**

> **You** · 12:20 pm
> Alexis's therapist at Brightwater is leaving next month. Has anyone seen someone there they'd recommend for a ten-year-old? She's been going about a year and I'd like to keep her at Brightwater if we can.
>
> **Min-jung Park** · 3:05 pm
> Sophie sees Dana Whitfield there and really likes her. She had a wait list in the spring, so I'd ask soon.
>
> **Jenna Okafor** · 1:40 pm
> Another vote for Dana. Ask for a Monday after school if you can get one, the evening sessions are hard on a school night.
>
> [Reply]

## C-05b · Tuesday, 3:40 pm · The Westview card changes

*Westview emails every family about a new rule for pickup changes, and Charlotte forwards it to her MVP address from the car line. The email holds no event for the game plan. It changes reference, so the coach files it on the Westview card and says what changed. The next day, in C-06, the pickup note goes to the new address, which shows why the card matters.*

**Coach, as shown: the read-back**

> From the Westview email, one change for the Westview card. Changes to who picks Mallory up now go to pickups@westviewk.org, by 11:00 on the day, instead of the office address. The card shows the new rule and keeps the old one in its history.
>
> From Westview · email, Tuesday
>
> [Open the Westview card] [Show the email]

*She taps Open the Westview card. The pickup contact and the pickup rule both carry the Changed mark, and both clear once she has seen them.*

**Kids, as shown: the Westview card, contacts and rules after the change**

| Section | Content |
| ----- | ----- |
| Contacts | Changes to who picks up: pickups@westviewk.org, by 11:00 am on the day · Changed |
| Rules | Children are released only to people on the pickup list. Changes to who picks up must reach pickups@westviewk.org by 11:00 am on the day. · Changed |
| Earlier version | Changes to who picks up: office@westviewk.org, in writing · Until Tuesday |
| Documents | Pickup change email, Tuesday · Rotation calendar, photo, two weeks ago · Family contact list, photo, last week |

## C-06 · Wednesday, 11:45 am · Edward can't do Mallory

*Edward was asked on Monday and said yes, and now his Thursday has changed. At 11:40 am he changes his answer on Mallory's pickup to "I can't do this" and adds a note, and keeps "I've got it" on Alexis's. Charlotte gets the notification "Edward changed his answer for Thursday." This is the moment that shows nothing in the plan is ever settled. Today shows Wednesday, and Thursday's reopened pickup reaches Charlotte through the coach card, which quotes Edward's answer and names the day. In the game plan, Mallory's pickup now shows "Edward can't" and Alexis's still shows "Edward: yes".*

**Today, as shown: the header**

> [sunrise icon] This morning · Wednesday

**Today, as shown: the departures**

| Departure | Going with |
| ----- | ----- |
| **2:20 pm · You leave for Westview and Cedar Grove** · in 2 hr 35 min | **Going with Alexis:** Dance bag, for Studio Ten at 3:45 pm |

**Today, as shown: the day**

| | Morning | School | After school | Evening |
| ----- | ----- | ----- | ----- | ----- |
| **Alexis** | With you, carpool 7:40 am | Cedar Grove, 8:00 am to 2:45 pm | You collect, 2:45 pm · Studio Ten, 3:45 pm | Home |
| **Mallory** | With you, 8:15 am | Westview, 8:30 am to 2:30 pm · D day | You collect, 2:30 pm · Along to Studio Ten | Home |
| **You** | Carpool 7:40 am · Westview 8:15 am | Call Brightwater | Westview 2:30 pm · Cedar Grove 2:45 pm · Studio Ten 3:45 pm | Home |
| **Edward** | At the office | At the office | At the office | Home |

**Today, as shown: the coach card**

> Thursday · Edward: "Got pulled into a 2:00 Thursday, can't get Mallory at 2:30. I can still do Alexis at 1:30."
>
> Edward can still collect Alexis at 1:30, but Mallory's pickup at Westview at 2:30 is open again. Edward is on a call in the house from 2:00, and Alexis is home from 1:45.
>
> **Take the 12:15 class at Willow.** Recommended
> Willow has a 12:15 class on Thursday that finishes at 1:15. You collect Mallory at 2:30 yourself, and nobody else is asked for anything. I would pick this one.
>
> **Ask Min-jung to bring Mallory home.**
> Min-jung collects Hana at Westview at 2:30 and lives two streets from you, so Mallory is home by 2:45. You keep the 2:15 class.
>
> **Collect Mallory yourself and skip yoga this week.**
> Thursday runs like an ordinary Thursday, and Mallory rides with you to ballet as usual.
>
> [Open Thursday in the game plan]

**Today, as shown: MVP Recommends**

> Recommended · School · 3 min read
>
> **Fifteen minutes with the teacher: making a conference count**
>
> Because Cedar Grove conferences are this week.

*Charlotte picks the second option. She knows things the coach does not, in this case that the 12:15 class is not one she likes, and the demo shows that choosing against the recommendation is normal. The coach lays out the new version and points out something only she can do.*

> Mallory goes home with Min-jung once Min-jung says yes. Min-jung collects Mallory with Hana at 2:30 and drops Mallory at the house by 2:45, where Edward and Alexis are. The 2:15 class stays on the plan. Westview only releases Mallory to people on the pickup list, so Westview needs a note from you by 11:00 on Thursday.
>
> [Ask Min-jung] [Note to Westview]

*Both messages are drafted in Charlotte's voice, and she sends each one herself. Min-jung has MVP, so her request arrives as a card in her own MVP. The Westview office is outside MVP, so MVP hands the note to Charlotte's email app, addressed to the pickup changes contact on the Westview card, which the Westview email updated in C-05b. Sending it adds "Send Westview the pickup note" to her row and her list, where it stays until she ticks it off.*

> To Min-jung Park
>
> Hi Min-jung, could you bring Mallory home with Hana on Thursday? Edward got pulled into a meeting and I'm at yoga until 3:15. We're on Linden, right on your way, and Edward will be home to meet her. Happy to return the favor.
>
> Min-jung answers with
> [I've got it] [I can't do this]

> To Westview Kindergarten, pickup changes · pickups@westviewk.org
>
> Min-jung Park will pick up Mallory from Room 3 on Thursday at 2:30. Please let me know if you need anything else from me. Charlotte

*Min-jung answers at 12:30 pm, and Mallory's pickup changes to "Min-jung: yes".*

## C-06b · Wednesday, 1:15 pm · A checkup lands on Friday

*Northside's portal reminded Charlotte at 9:00 am that Mallory's six-year checkup is due. At lunch she books it in the portal herself, taking the first opening, Friday at 3:30 pm, and the portal adds it to her Google Calendar. She sends MVP nothing. MVP reads the new event from her calendar, sees that it runs into Mallory's tutoring, and the coach card turns to Friday. This is the moment that shows her calendar keeping the plan current without any extra work from her.*

**Today, as shown: the header**

> [sun icon] This afternoon · Wednesday

**Today, as shown: the departures**

| Departure | Going with |
| ----- | ----- |
| **2:20 pm · You leave for Westview and Cedar Grove** · in 1 hr 5 min | **Going with Alexis:** Dance bag, for Studio Ten at 3:45 pm |

**Today, as shown: the day**

The rows are the same as in C-06, with the morning shown as done. Alexis's dance at Studio Ten carries the calendar mark, because it comes from her Google Calendar, and Charlotte's row now also carries "Send Westview the pickup note", added in C-06.

**Today, as shown: the coach card**

> Friday · Mallory's checkup at Northside Pediatrics at 3:30 is new on your Google Calendar. Mallory is at tutoring with Ms. Reyes in the Westview library from 3:00 to 3:45, so the two overlap.
>
> **Skip tutoring this Friday.** Recommended
> You collect Mallory at Westview at 2:30 and Alexis at Cedar Grove at 2:45, and you leave home for Northside at 3:15. Ms. Reyes gets a text from you. I would pick this one, because Mallory's new Tuesday session starts next week, so Mallory sees Ms. Reyes again in four days.
>
> **Move the checkup.**
> Call Northside for a time after 3:45 or on another day, and Friday stays as it is. The call goes on your list for this afternoon.
>
> [Open Friday in the game plan]

*In the game plan, the checkup and the tutoring session both show "Conflicts with" the other until Charlotte chooses. The checkup carries the calendar mark and the source link "From your Google Calendar". Charlotte picks the first option, and the coach drafts the text. Ms. Reyes doesn't have MVP, so the request goes as a text message with a link to the single web page, the route nobody else in Charlotte's week uses.*

> To Ms. Reyes
>
> Hi Ms. Reyes, Mallory has her checkup on Friday at 3:30, so she'll miss tutoring this week. Tuesdays at 3:00 work for us from next week. Thank you, Charlotte
>
> Ms. Reyes answers with
> [I've got it] [I can't do this]
>
> You send this. MVP never sends anything for you.
>
> [Send]

*She sends it at 1:20 pm. Ms. Reyes gets a text with the link, and her web page shows "Request from Charlotte · 1:20 pm", the text, and the single item "Friday · Mallory · Tutoring with Ms. Reyes, Westview library, 3:00 pm" with its two buttons. Once it is sent, Friday's tutoring shows "Asked Ms. Reyes". Ms. Reyes answers "I've got it" on the web page at 3:10 pm, and Charlotte gets the notification "Ms. Reyes: yes to Friday." Friday's tutoring and the 3:45 pm pickup leave the plan, Mallory's pickup moves to 2:30 pm, and the checkup stays at 3:30 pm. The same text covers the note Charlotte left on Friday's tutoring in C-04, so that note goes too. MVP changes nothing on her Google Calendar.*

## C-07 · Wednesday, 9:10 pm · Tonight

*After dinner the title changes to Tonight and the board turns to tonight's preparation. It shows what has to be ready tonight and how tomorrow starts, and it leaves the rest of Thursday to the game plan.*

**Today, as shown: the header**

> [moon icon] Tonight · Wednesday

**Today, as shown: ready tonight**

| Ready tonight |
| ----- |
| Violin and orchestra folder by the door |
| Ballet bag packed for 3:55 pm |
| Lunches for Alexis and Mallory |

**Today, as shown: tomorrow starts**

| Departure | Going with |
| ----- | ----- |
| **7:00 am · You take Alexis to orchestra** | **Going with Alexis:** Violin · Orchestra folder · Lunch · Early day, out at 1:30 pm |
| **8:15 am · You take Mallory to Westview** · E day | **Going with Mallory:** Lunch |

**Today, as shown: the coach card**

> Thursday · Everyone you asked about tomorrow has said yes, and Min-jung has Mallory at 2:30. If Edward's 2:00 meeting runs long, Alexis is still home with Edward, so nothing else moves.
>
> [Open Thursday in the game plan]

## C-08 · Thursday, 8:40 pm · A question for the coach

*This is the coach as the second half of the product, answering the kind of question Charlotte would otherwise post on Reddit. The answer starts from the fact that she is struggling, gives her something specific to do tonight, and shows the family details it was based on. The staff article attached below it carries the longer version. Charlotte says "8am" because parents round, but the coach uses the real time.*

> "Mallory fights me every single morning about clothes and tomorrow is picture day. How do I get through 8am without a meltdown?"

> Mornings with Mallory are wearing you down, and picture day raises the stakes. Settle the outfit tonight: put the green dress out next to one other outfit Mallory likes, and let Mallory choose between the two before bed. A six-year-old who has already chosen has much less to fight about at 7:40, and the choice is real because you are happy with either answer. If Mallory has second thoughts in the morning, the other outfit is ready, and the green dress can go in Mallory's backpack for the photo.

**Coach, as shown under the answer**

> Based on
> Mallory, 6, kindergarten at Westview · Picture day on Friday · Your note about the green dress · You leave with Mallory at 7:40 am

**Coach, as shown: attached article**

> Recommended · Mornings · 4 min read
>
> **Two outfits, not twenty: getting dressed without the standoff**

## The day in full: Thursday

| Time | Who | What | Status |
| ----- | ----- | ----- | ----- |
| 7:00 am | Charlotte | Leaves with Alexis for orchestra. Mallory stays home with Edward. | |
| 7:15 am | Alexis | Orchestra at Cedar Grove | |
| 7:25 am | Charlotte | Home | |
| 8:15 am | Charlotte | Leaves with Mallory | |
| 8:25 am | Mallory | At Westview | |
| 1:15 pm | Edward | Leaves for Cedar Grove | Edward: yes |
| 1:30 pm | Edward | Collects Alexis at the Oak Street gate | Edward: yes |
| 1:45 pm | Edward | Home with Alexis | |
| 2:00 pm | Edward | Meeting until 3:00 pm, working from home | |
| 2:05 pm | Charlotte | Leaves for Willow Yoga | |
| 2:15 to 3:15 pm | Charlotte | Yoga | |
| 2:30 pm | Min-jung Park | Collects Mallory with Hana at Westview | Min-jung: yes |
| 2:45 pm | Min-jung Park | Drops Mallory at home | Min-jung: yes |
| 3:30 pm | Charlotte | Home | |
| 3:55 pm | Charlotte | Leaves with Mallory and the ballet bag | |
| 4:15 to 5:00 pm | Mallory | Ballet at Studio Ten | |
| 5:15 pm | Charlotte | Home with Mallory | |

## If Min-jung says no

*If Min-jung taps "I can't do this", Mallory's pickup shows "Min-jung can't" in the game plan, and the coach card comes back with the two options Charlotte did not take, one line each.*

> Thursday · Min-jung can't bring Mallory home Thursday. You can take the 12:15 class at Willow and collect Mallory yourself at 2:30, or skip yoga this week and do the pickup.

## MVP Recommends for Charlotte

These are the two staff articles in Charlotte's week. Both are written by MVP staff in their own voice. The bylines are placeholders until real staff writers are named.

### Fifteen minutes with the teacher: making a conference count

*SCHOOL · 3 MIN READ · By Nora Lindqvist, MVP staff*

*Appears on Today from Monday to Thursday, because Cedar Grove conferences fall on Thursday and Friday.*

Most parent-teacher conferences run fifteen or twenty minutes, and the first five usually go to the teacher's overview. That leaves about ten minutes that are yours, so it helps to walk in knowing what you want from them.

Before you go, ask your child two questions: what is the best part of the day, and what is the hardest part. Children often say things at home that never come up in class, and the teacher will want to hear them. Then write down one or two things you want to understand better. A specific question, such as how your child handles group work or what happens when a math problem gets hard, gets a more useful answer than asking how things are going.

Tell the teacher about anything at home that affects school. A move, a new sibling, a change in activities or a child who is seeing a therapist can all explain what a teacher is noticing, and you decide how much to share.

Before you leave, agree on one thing each of you will do and how you will stay in touch about it. Teachers see a lot of families during conference week, and a short follow-up email a few days later keeps your conversation from getting lost.

If fifteen minutes is not enough, say so and ask for a second meeting. Most teachers would rather schedule one than rush a conversation that matters.

### Two outfits, not twenty: getting dressed without the standoff

*MORNINGS · 4 MIN READ · By Sam Adeyemi, MVP staff*

*Attached to the coach's answer in C-08.*

For a lot of five- and six-year-olds, getting dressed is the first decision of the day and the first chance to push back. The fight is rarely about the clothes themselves. It is about who decides, and it tends to happen at the moment you have the least time.

Move the decision to the night before. Lay out two outfits you are happy with and let your child choose one before bed. Two is enough to feel like a real choice and few enough to settle quickly. Put the chosen outfit somewhere your child can reach, in the order it goes on.

Keep the second outfit nearby. A child who wakes up and changes their mind can switch without a negotiation, and you lose nothing because you approved both.

For days that matter, like picture day or a family event, give the important piece a job it can do later. A dress or a collared shirt can travel in a backpack and go on just before the photo, which takes the pressure off the morning for both of you.

Expect a few rough mornings while this becomes a habit. Most children settle into it within a couple of weeks, especially when the evening choice happens at the same time every night.

If mornings stay hard, or the resistance shows up across the whole day, mention it to your pediatrician or your child's teacher. Sometimes a struggle with clothes is really about texture or comfort, and they can help you work out whether that is part of it.

# 4. Interface copy

These are the labels, headings, buttons and placeholders on the demo screens that are not written out in the moments above. They are interface text rather than coach speech, so they follow plain language rather than the coach voice rules. The engineer should find every visible word in this section or in the moments.

## Navigation

| Where | Text |
| ----- | ----- |
| The five tabs, in order | Today · Coach · Game plan · Team · Kids |
| Settings, on a phone | The parent's avatar, an outlined circle with her initial, at the top right of every tab's header, with the accessible label "Settings and account" |
| Settings, from tablet width up | Settings, at the bottom of the sidebar |
| Link out of any page opened inside a tab | Back, in place of the avatar. This covers child pages, school cards, articles and drafts. |
| What Settings holds | Your account · Your calendar · Notifications · Your forwarding address · Language at home · Privacy. Settings is not drawn for the demo. |

## Today

| Where | Text |
| ----- | ----- |
| Title, by phase of the day | "This morning" with a sunrise icon, "This afternoon" with a sun icon, or "Tonight" with a moon icon. The icons are `phase-morning`, `phase-afternoon` and `phase-tonight` from the icon set in spec §17, and the word always appears with the icon. |
| Day line | On its own row above the title, at the left, with her avatar at the right: the day of the week only, such as "Monday". Never a calendar date or month, even where a design frame shows one. Tonight shows the day it is. |
| Calendar mark | The `calendar-mark` icon beside an item that came from her calendar, with the accessible label "From your Google Calendar", or the calendar she connected |
| Coach card for a new calendar event | The day it concerns, then the event, then "is new on your Google Calendar", or the calendar she connected, such as "Friday · Mallory's checkup at Northside Pediatrics at 3:30 is new on your Google Calendar." |
| What the Add button opens | A sheet with Take a photo · Attach a file · Talk or type, the same three choices as onboarding |
| Coach card with nothing captured yet | Today is empty so far. Send me a school email, a handout or a few words about your week, and I'll start the plan. · Button: Add |
| Letter day on a child's row | The school's letter for the day after the school hours, such as "B day" |
| Capture button | Add |
| Countdown on a departure | "in 15 min", or "in 1 hr 5 min" for anything an hour or more away |
| Heading of each checklist | "Going with" followed by the child's name, such as "Going with Alexis" |
| Row column headings | Morning · School · After school · Evening |
| Heading of the evening checklist | Ready tonight |
| Heading for tomorrow's first departures | Tomorrow starts |
| Day label on the coach card | "Coach · for" and the day it concerns, such as "Coach · for Thursday", after the coach's dot. "Coach" alone when the card concerns no particular day. In the moments, a coach card written as "Wednesday · …" shows this label above its text. |
| Link on a coach card about another day | Open Thursday in the game plan, with the day that applies |
| Link under a coach card's button | More options |
| Coach Alert | "Coach Alert:" and what the coach found, such as "Coach Alert: Conflict found with Edward". When it appears is still open (spec §5). |
| Label line on an MVP Recommends card | "Recommended", the topic and the reading time, such as "Recommended · School · 3 min read" |
| Reason line on an MVP Recommends card | A single sentence beginning "Because", such as "Because Cedar Grove conferences are this week." |

## Coach

| Where | Text |
| ----- | ----- |
| Input placeholder | Talk, type or add a photo |
| Controls on the capture bar | Camera · Attach · Microphone, as icons with these accessible labels. The middle control is Attach, so that Add means only the capture button on Today. While the field holds typed text, the microphone becomes an arrow with the accessible label "Give this to the coach". There is no Send on the capture bar, because Send means sending something to another person. |
| Example of typed text, for the wireframes only | Picture day is Friday, and the green dress is in the laundry room. |
| A capture that can't be read | I couldn't read this photo clearly. Try again with the whole page in the frame and good light. · Buttons: Retake photo, Choose another |
| A wait longer than twenty seconds | This is taking longer than it should. Your photo is safe, and you can try again. · Button: Try again |
| Source link under a captured item | "From" followed by the source and the day, such as "From the Cedar Grove newsletter · Sunday" |
| Buttons on a read-back | Add to the plan · Show the newsletter, with the source named as it applies |
| Confirmation after sharing from another app | Sent to the coach |
| Label on a voice note | Voice note · 0:20, with the recording's length |
| Tag on the recommended option | Recommended |
| Heading of the details under an answer | Based on |

## Requests

| Where | Text |
| ----- | ----- |
| Address line on a draft | "To" followed by the name, such as "To Edward" |
| Line above the preview of the recipient's buttons | "Edward answers each item with", with the recipient's name, or "Edward answers with" when the request has one item |
| Each item on a request | The day and the item as it appears in the plan, such as "Thursday · Mallory · Pick up at Westview, 2:30 pm", each with its own two buttons |
| Note field on a request | "Add a note for" followed by the parent's name, such as "Add a note for Charlotte" |
| After answering | Charlotte can see your answers. If anything changes, change your answer here. · Each item shows the answer given and a Change link |
| Notification when a request arrives | The parent's name, "asked you about" and the day's items, such as "Charlotte asked you about Thursday's pickups." |
| Notification when someone answers | The person's name and the answer, such as "Edward: yes to both pickups on Thursday." or "Ms. Reyes: yes to Friday." |
| Notification when someone changes an answer | The person's name and the day, such as "Edward changed his answer for Thursday." |
| Task left by a handoff | What was sent and where, such as "Send Westview the pickup note" or "Reply to the parents' group" |
| Address line for a WhatsApp group | "To" followed by the group's name, such as "To Cedar Grove 4th Grade Parents" |
| Line above the send button | You send this. MVP never sends anything for you. |
| Send button | Send |
| Send button when MVP hands the text to another app | Send from WhatsApp, or the app that applies, such as "Send from Mail" |
| Heading on a request received in MVP | "Request from Charlotte" and the time, such as "Request from Charlotte · 6:40 am" |
| Web page for someone without MVP | Heading: "Request from Charlotte" and the time, the same as in MVP · Line under the buttons: You don't need MVP to answer. |
| Text message to someone without MVP | "Charlotte sent you a request through MVP. You can answer here:" followed by the link |
| The recipient's buttons | I've got it · I can't do this, on each item |

## Game plan

| Where | Text |
| ----- | ----- |
| Heading of the changes list | This week's changes |
| Heading of the week | This week |
| Heading of the following week | Next week |
| Owner on the parent's own items | You |
| Conflict mark | "Conflicts with" followed by the other item, such as "Conflicts with yoga", or the items together, such as "Conflicts with both pickups", or a number, such as "Conflicts with 3 items" |
| Owner with nobody responsible | Nobody yet |
| Source link on a calendar item | From your Google Calendar, or the calendar she connected |
| Trying to drag a calendar item | Change this in Google Calendar. |

## Team

| Where | Text |
| ----- | ----- |
| Section headings | Inner circle · Village · Village groups |
| Button for adding someone | Add someone |
| Button for creating a group | New village group |
| Line under a village group | The number of members, such as "8 members" |
| Mark after the name of someone who has MVP | On MVP |
| Heading of the post composer | New post |
| Choice of audience in the composer | Inner circle · Village |
| Note under the composer | Only the people in this group see this. The coach doesn't read it. |
| Post button | Post |
| Author label on the parent's own posts | You |
| Reply field placeholder | Reply |

## Onboarding

| Where | Text |
| ----- | ----- |
| Splash | The MVP mark with "Most Valuable Parent" beneath it |
| Welcome screen | Headline: Busy parents are experts at spinning plates, so hand one of them to your coach. · Line: Start with your first name and zip code, so the coach knows who it's planning with and what's nearby. · Field: Your name, with the helper "Helps the coach know who's talking." · Field: Zip code, with the helper "Helps the coach work out travel times and your local school calendar." · Button: Continue · Link: Skip for now |
| Children screen | Heading: "Who are you planning for," followed by her name, such as "Who are you planning for, Charlotte?", or "Who are you planning for?" if she skipped the welcome · Line: Names and grades are enough for now. · Field: Child name · Grade choices: Not in school yet · Pre-K · K · 1 · 2 · 3 · 4 · 5 · 6 · 7 · 8 · 9–12 · Link: + Add another child · Button: Continue · Link: Skip for now |
| First capture screen | Headline: the coach's line in C-00 · Buttons: Take a photo · Add a file · Talk or type · Link: Skip for now |
| Check the photo | The photo, full width · Buttons: Use this photo · Retake |
| Hand-off | The coach's line, saying what the draft will hold and what it keeps for later · Button: "Make" followed by the draft's name, such as "Make Mallory's plan" · Link: Something's not right |
| Thinking screens | "Reading your photo…", or "Reading your file…" or "Listening…" as the capture applies, while the coach reads it, and "Making" followed by the draft's name, such as "Making Mallory's plan…", while it builds the draft |
| Confirmation under a read-back | Label: This calendar is for, with the kind of document named, such as "This newsletter is for" · Choices: each child's name and grade, such as "Mallory · K". If she skipped the children screen: a Child name field and the grade choices. |
| Heading of the draft | The child's name, "plan" and what the draft covers, such as "Mallory's plan for this week" |
| Heading of the account prompt | "Keep" followed by the draft's subject, such as "Keep Mallory's plan" |
| Line on the account prompt | Create an account to save this plan and add the rest of your family. |
| Buttons on the account prompt | Create account · Not now |
| Step counter | "01 of 05" to "05 of 05", on the five setup screens only |
| Account screen | Heading: Create your account · Field: Email · Buttons: Continue with Apple, Continue |
| Calendar screen | Heading: Connect your calendar · Line: Connect the calendar you already use, and the coach brings in what's on it and tells you when something new runs into the plan. MVP reads your calendar and never changes it. · Buttons: Google Calendar · Apple Calendar · Outlook · Link: Not now · After connecting: Connected, followed by the calendar's name, such as "Connected · Google Calendar" · Button: Continue |
| Calendar permission, staged | At the top, the calendar's name in plain text, such as "Google Calendar", with no logo · Most Valuable Parent wants to see your calendar · Buttons: Allow · Cancel. Drawn generic, not to any calendar's brand. |
| School screen | Heading: Who's on your calendar? · Line: Add each child's school, so the coach knows whose emails and handouts are whose. · For each child: the name, the grade written out, such as "Fourth grade", and a School field · Note under a school filled in from a capture: From your calendar photo, or the capture that applies · For a child not in school yet: an Age field in place of School · Link: + Add another child · Button: Continue |
| Household screen | Heading: Your household · Question: Who's at home with the kids? · Choices: Two parents, One parent, Two homes, Something else · Field: Language at home · Button: Continue |
| Helpers screen | Heading: Who else helps? · Line: Add the adults you count on, such as a partner, a grandparent or a nanny. You decide what each of them sees, and nobody sees anything you don't send them. · Fields: Name, Who they are · Link: + Add someone · Button: Done |
| Getting ready screen | Headline: Getting everything ready · Steps: Saving your account · Adding the children by name, such as "Adding Alexis and Mallory", or "Adding your children" when she skipped the children screen and named them later · Reading the connected calendar by name, such as "Reading your Google Calendar", shown only when she connected one · Setting up the draft by name, shown only when she made one, such as "Setting up Mallory's plan" · Getting Today ready · Each step shows done, working or waiting · Line: This takes about a minute. You can put your phone down, and everything you've entered is safe. |
| Getting ready, when account creation fails | Your account wasn't saved. Everything you entered is still here. · Button: Try again |
| Coach introduction | Byline: your coach · just now · Greeting: "Nice to meet you," followed by her name · The recap, as in C-00 · Reminder, ticked: Remind me the night before a library day, or the reminder that fits her capture · Button: Next |

## Kids

| Where | Text |
| ----- | ----- |
| Tab heading | Kids |
| Section headings on the tab | Kids · Schools |
| A child's row on the tab | The name, with the grade and school beneath it, such as "Alexis" over "Fourth grade · Cedar Grove" |
| A school's row on the tab | The school's full name, with the children who attend it beneath it, such as "Westview Kindergarten" over "Mallory", and the Changed mark when anything on its card has changed |
| Source link on a fact the parent told the coach | From you |
| Button for adding a school | Add a school |
| Header on a child page | The child's name, age and grade, such as "Mallory · 6 · Kindergarten" |
| Section headings on a child page | School · Every week · Going with, by day |
| Heading on a school card | The school's name, such as "Westview Kindergarten" |
| Section headings on a school card | Hours · Contacts · Rules · Calendar · Rotation · Documents |
| Button on a school card | Add to this card |
| Heading of a card's history | Earlier version |
| Source link on a card fact | "From" followed by the document, such as "From the family contact list · photo" |
| Buttons on a card read-back | Open the Westview card · Show the email, with the school and source named as they apply |

## MVP Recommends article

| Where | Text |
| ----- | ----- |
| Link back out of an article | Back |
| Byline | "By" followed by the writer's name and "MVP staff", such as "By Nora Lindqvist, MVP staff" |

# Appendix A: the facts we invented

The user stories left gaps, and everything in this table is a fact we invented to close one of them. Each fact goes into the seed file's metadata, so that the engineer can tell a story fact from a demo choice and so that any of these decisions can be overruled later.

## Charlotte and Edward

| Gap | What we decided | Why |
| ----- | ----- | ----- |
| Ages | Charlotte 48, Edward 50, Alexis 10 in fourth grade, Mallory 6 in kindergarten | The girls' ages and grades come from the September 25 notes. The adult ages are new. |
| Schools | Alexis at Cedar Grove Elementary, 8:00 am to 2:45 pm, collected at the Oak Street gate. Mallory at Westview Kindergarten, 8:30 am to 2:30 pm, Room 3. | The girls attend different schools, and the different hours make both the morning and the afternoon real. |
| Home | Linden Avenue, 12 minutes from Cedar Grove and 10 from Westview | Gives the Parks a reason to be the easy option, since they live two streets away. |
| Hard mornings | Orchestra at 7:15 am on Tuesday and Thursday means two trips, at 7:00 am and 8:15 am. On Tuesday Mallory rides along on both because Edward has left for the office. | Explains why Tuesday and Thursday mornings are the hardest, and why the carpool only runs on the other three days. |
| Carpool | Mornings only. The Parks drive Monday, the Okafors Wednesday and Charlotte Friday, with Mallory riding along on Friday to Westview. | The WhatsApp message comes from Jenna Okafor, and Friday explains why Mallory leaves at 7:40 am that day. |
| Edward's week | At the office Tuesday and Wednesday. Home Thursday, free from 1:15 pm until a 2:00 pm meeting is added on Wednesday. | Thursday has to be a day Edward is home so he can be asked, and the new meeting shows an accepted item reopening. |
| Who has MVP | Edward, Claire, Min-jung Park and Jenna Okafor have MVP. Dr. Ortiz, Karen Moss and Ms. Reyes do not. | Village members need MVP to take part in a village group, and Edward and Min-jung receive requests inside MVP. |
| Village group | Cedar Grove parents, created by Charlotte in her first week, with eight members including Min-jung and Jenna | Gives C-05 a group inside MVP to post to, separate from the WhatsApp group. |
| Alexis's week | Therapy Monday 3:30 pm at Brightwater, violin usually Monday at Lakeside Strings and this week Tuesday at 4:00 pm, dance Wednesday 3:45 pm at Studio Ten, orchestra Tuesday and Thursday 7:15 am | Violin follows the teacher's text. |
| Mallory's week | Ballet Thursday 4:15 pm at Studio Ten, reading tutoring Friday 3:00 pm with Ms. Reyes in the Westview library | Keeps Thursday afternoon real without crowding it. |
| The tutor's request | Ms. Reyes texts on Sunday evening asking for a second weekly session. The coach suggests Tuesdays at 3:00 pm and Charlotte moves the start to the following week. | Arriving on Sunday lets the suggestion appear on Monday morning, and it gives Charlotte something to overrule in the game plan without the coach. |
| Charlotte's time | Yoga Thursday 2:15 to 3:15 pm at Willow Yoga. Willow also has a Thursday class at 12:15 pm and a Saturday class at 8:30 am. | She names the class herself. The other two classes make the coach's options real. |
| Conferences | Cedar Grove conferences on Thursday afternoon and Friday. Charlotte's is Friday at 9:20 am. | Explains the early dismissal, rules out the Friday yoga class and gives the Today article its reason. |
| The therapist | Karen Moss is leaving Brightwater in four weeks. The village recommends Dana Whitfield. | Replaces a plain reschedule with a question that needs people, which is what the village is for. |
| Min-jung Park | Sophie is in Alexis's class, Hana is in Mallory's class at Westview, and the Parks live two streets away. Charlotte entered these details when she added the Parks to her village. | Gives the village a practical role in the plan. The coach knows these details because Charlotte entered them, not because it reads the village. |
| Westview pickup list | Westview releases children only to people on the pickup list, so a note from the parent is needed. | A rule parents will recognize. It keeps the coach from contacting the school on her behalf and shows the third way a message leaves MVP. |
| Picture day | Friday at Westview. The green dress is hanging in the laundry room. | Carries through the voice note, the game plan and the coach question. |
| Pediatrician | Dr. Lena Ortiz at Northside Pediatrics. Mallory's six-year checkup is due, and Charlotte books it in the Northside portal on Wednesday at 1:05 pm for Friday at 3:30 pm. | Gives the coach a named doctor for any medical question. |
| Charlotte's sister | Claire, an hour away | An inner circle member who gives advice but cannot do pickups. |
| Library run | Saturday at 10:00 am, with nobody on it until Charlotte asks Edward | Gives Charlotte an item to hand to someone directly from the game plan. |
| Navigation | Today, Coach, Game plan, Team and Kids, with settings behind the parent's avatar | Adults are on Team and the children and their organizations are under Kids, so a parent can guess where anything lives. Kids replaces Settings because parents look at their children's schools every week and at settings rarely. |
| Class teachers | Alexis is in Ms. Carter's class at Cedar Grove. Mallory is in Ms. Hollis's class, Room 3, at Westview. | Gives each child page and school card a named teacher. |
| Cedar Grove contacts | Front office 555-0120, attendance@cedargrovees.org | Fills the Cedar Grove card. The phone number is in the reserved 555-01 range, and the email domain needs the same check as Westview's. |
| Westview pickup email | On Tuesday at 3:30 pm Westview moves pickup changes to pickups@westviewk.org, due by 11:00 am on the day. | Gives the demo one card update, and the new address is used the next day in C-06. |
| Charlotte's setup answers | Zip code 00123. Alexis in fourth grade at Cedar Grove Elementary and Mallory in kindergarten at Westview Kindergarten. Two parents at home, English as the home language, and Edward and Claire as the adults who help. | Her household as the rest of the document describes it. ZIP codes beginning 001 are not assigned to any real place. Min-jung and Jenna join in her first week, through the village. |
| The calendar header | The rotation calendar is headed "Westview Kindergarten" and covers one unnamed month, which includes both C-00 and the demo week. | Gives the coach a grade to match, so it can preselect Mallory, and keeps the demo free of month names. |
| Westview events | Back-to-school night on the Thursday of C-00's week. The Fir Hollow Farm field trip on the Thursday of the week before the demo week. The harvest fair at 3:00 pm on the Friday after the demo week. | Puts back-to-school night in C-00's own week, so the first draft adds one event, and puts the other two in later weeks, so the hand-off can say the coach is keeping them on the Westview card. Keeps the harvest fair clear of Friday tutoring in the demo week. By the demo week, the Westview card's calendar shows picture day and the harvest fair. |
| Westview hours | Charlotte gives the start time on Tuesday of her first week, answering the coach card on her first board, and the end time later that week. The card shows both as "From you". | Gives the hours on the card a source. |
| The onboarding times | The splash and welcome at 8:30 pm, the children screen and capture at 8:31 pm, the read-back at 8:32 pm, the hand-off and the draft at 8:33 pm, the account at 8:34 pm, the calendar at 8:35 pm, the school and household screens at 8:36 pm, the helpers at 8:37 pm, getting ready at 8:38 pm, the introduction at 8:39 pm and Today at 8:40 pm | Gives each screen a time for the wireframes and seed. |
| Her first board | She lands on Today at 8:40 pm, and the coach card asks what time Mallory needs to be at Westview | Shows that Today is never empty after onboarding, and that detail about each child comes through the coach's questions. |
| First capture | Two weeks before the demo week, on a Monday at 8:30 pm, Charlotte photographs Westview's rotation calendar before creating an account. | Shows value before the account, and explains how MVP knows Mallory's sneaker days in C-03. |
| The highlights | The yellow highlighting on the calendar is Mallory's, and means nothing. | Gives the coach one honest question to ask, and lets Charlotte's answer tell it the child's name. |
| Westview rotation | A six-day letter rotation, A to F. The demo week runs B to F from Monday to Friday, which puts the Tuesday after C-00 on an E day. | B, D and F are motor skills days, which is where Mallory's sneakers come from. |
| Westview contacts | Front office 555-0140, office@westviewk.org, Ms. Hollis in Room 3, Dana Lee for learning support and Priya Nair as counselor | Gives the Westview note in C-06 a real address to go to, taken from the school card. The phone number is in the reserved 555-01 range. The email domain must be checked before the build to confirm it does not belong to a real school, or be replaced with an example domain. |
| Cedar Grove newsletter | Sent every Sunday afternoon and forwarded to MVP automatically, with a free dress day and a fifth-grade trip alongside the early dismissal | Gives the coach something to filter out, since most of a newsletter never applies to one child. |
| How Charlotte shares | She set up automatic forwarding for the newsletter and shares WhatsApp messages through the share menu, both learned in her first week | Shows two entry points being used as habits by the demo week. |
| The source material | The handouts and newsletter are modeled on real school material that Greg supplied, with every name, number and address replaced | The real material carries a real school's staff names and contact details, which must never appear in the demo. |
| Forwarding address | Charlotte's private MVP address is charlotte-k7m@forward.mvp.example. | The .example domain is reserved and can never belong to anyone. It is replaced when MVP has its own domain. |
| The parents' WhatsApp group | Named "Cedar Grove 4th Grade Parents" | Gives the C-03 reply an address line. |
| Westview's email subject | "Changes to pickup requests start this week" | Gives the forwarded email in C-05b a subject line. |
| The rotation calendar's month | C-00 falls in the first week of the calendar's month, so the same sheet covers both C-00 and the demo week two weeks later. | Lets one photo serve both, with no month named on screen. |
| Her calendar | Charlotte uses Google Calendar and connects it during setup in C-00. It holds Alexis's therapy at Brightwater on Mondays at 3:30 pm, Alexis's dance at Studio Ten on Wednesdays at 3:45 pm and Mallory's ballet at Studio Ten on Thursdays at 4:15 pm, each as a repeating event. | Gives the coach something real to bring in at setup, and explains why those three items carry the calendar mark through the week. Google Calendar is the most common calendar to connect and the simplest to stage. |
| The checkup booking | Charlotte books Mallory's checkup in the Northside portal for Friday at 3:30 pm, the first opening, and the portal adds it to her Google Calendar. | Shows something booked outside MVP reaching the plan without her sending it, and gives the calendar a conflict to find. |
| Northside travel | Northside Pediatrics is 15 minutes from home. | Lets the coach give a leaving time for the checkup. |
| Ms. Reyes's answer | Ms. Reyes answers "I've got it" on the web page at 3:10 pm on Wednesday. | Uses the text-message route for someone without MVP, which no other moment shows. |
| Meals | Mostly vegetarian, with a plain version set aside for Mallory, who is a picky eater | Kept in the seed for accuracy. Dinner does not move this week, so it does not appear in the demo. |

# Appendix B: what is still open

1. **The navigation changes to Today, Coach, Game plan, Team and Kids, which is a spec decision.** Team holds the adults, with the inner circle, the village and village groups as its sections. Kids replaces Settings as the fifth tab, and settings move behind the parent's avatar. The plain fallback, if the sports naming is judged too much for this tab, is Kids and People. The tab names face customers, so they also need a brand sign-off.
2. **Village groups live inside MVP, which is a spec decision.** Only members see a group's posts, and members need MVP to take part. Groups that exist elsewhere, such as WhatsApp groups, stay outside, and the parent forwards messages from them.
3. **The three ways a request reaches someone need to go into the spec.** This includes what someone else's MVP shows them. This document assumes Edward's own Today holds only the items he owns and the requests Charlotte sends him, under his own avatar.
4. **The rules for Today need to go into the spec.** They cover showing only today, the coach card as the one exception, the phase of the day, the day line on the title's row, and what a card with no day opens. A later version could follow the family rather than the clock, ending the morning when the last child is dropped off, and that idea belongs on the roadmap.
5. **The game plan rules need to go into the spec.** They cover routine items shown more quietly unless they carry a status or mark, one entry per item in "This week's changes", and how conflicts are detected.
6. *Resolved in version 3.10. The coach card's treatment is decided in spec §5 (T3), and saffron has no role.*
7. **The single-Thursday premise is gone, and it still appears in the project instructions and the spec.** The spec's definition of checkpoints needs to match the moment IDs here.
8. **The status model has changed and the spec needs to match it.** Version 3.5 separates the owner, including "Nobody yet", from the four statuses, and treats Changed and Conflict as marks that can sit on any item.
9. **The prototype must not depend on a date, and the spec needs to say so.** The demo runs in any week. The spec should state that the prototype ignores the device clock and shows only days of the week, and that the seed files hold no calendar dates.
10. **It is not decided whether the four families live in the same town.** If they do, the place names reused from version 2.2 can stay.
11. **The MVP Recommends bylines are placeholders,** and it is not decided who writes the six articles still needed.
12. **Nobody has explained what "PAS eater" means.** It stays out of the demo until someone can.
13. **A fifth household has been suggested.** This stays parked.
14. **Marcus gets no personal time in his week.** This carries into his rewrite.
15. **The four entry points need to go into the spec,** including the platform limit on the share menu for a web app.
16. **Everything given before the account needs a storage rule in the spec.** This document assumes her name, zip code, children, photo and draft are held only for the session and discarded if no account is created.
17. **The source link needs to go into the spec,** along with "From you" for facts the parent tells the coach and the rule that new captured items arrive as Suggested.
18. **The Kids tab, child pages and school cards need spec sections.** The spec still needs to define how long a card's history is kept, and how the coach decides that a captured fact is reference for a card rather than an event for the game plan. Cards for studios, teams and clinics belong on the roadmap.
19. **Onboarding now asks two things before the first capture, which changes the wording of a locked decision.** "Value before account" still holds, because the account still comes after she has seen her draft. What changes is the line "It asks for one thing before it asks who she is", because the welcome and the children screen now come first. Greg made this decision in the design session so the coach knows whose capture it is. Heather needs to see it, and the creative brief and spec need the new order.
20. **The zip code's purpose needs agreeing.** Greg's Figma helper said it "helps the coach find activities near you", but MVP is not a directory of activities, so this version says it helps with travel times and the local school calendar. If location is meant for anything else, the spec needs to say what.
21. **The mark on the welcome and thinking screens needs confirming.** This version treats the small cup on Greg's Figma screens as the MVP mark, which the design system allows. If it is a separate drawing, it is an illustration outside the articles and needs an exception from Hearth.
22. **The getting ready screen uses proposed wording.** Greg's Figma screen has its own headline and four step labels. They replace the ones in section 4 once he confirms them, as long as they describe what is actually being saved.
23. **"Time saved" is left out of the coach's introduction.** A number would need a rule for how it is worked out, and nothing in the product measures it.
24. **The Figma onboarding copy needs these changes before it is reused.**
   - The welcome headline is rewritten from two short sentences into one, keeping Greg's image.
   - The body line no longer says "MVP Coach".
   - The location helper no longer promises activities.
   - "Ages tell the coach a lot" moves to the age field for a child not yet in school, and loses its em-dash.
   - "your kids busy day" is no longer used.
   - The step counter now runs to five, because connecting her calendar is a setup step, so Greg's five-step counter is right again.
   - "Nice to meet you, Charlotte!" ends with a full stop, because the coach is warm without exclaiming.
25. **The coach's line asking for next month's rotation sheet is not written,** because it falls outside the demo week.
26. **The real product will show calendar dates.** Parents will expect full dates on Today and in the game plan, and the rule against them applies to the prototype only. The spec needs both rules, kept apart.
27. **Whether MVP ever writes to her calendar is not decided.** This version reads her calendar and never changes it. The obvious next step is putting MVP's own plan items, such as Edward's pickups, onto her calendar, which would keep her calendar complete but would also change something she did not touch.
28. **Apple Calendar needs the native app.** A web app cannot read an iPhone's calendar, so Apple Calendar is staged in the prototype, the same as the share menu.
29. **How quickly the plan follows her calendar needs a number in the spec,** along with what happens when she deletes an event that someone has already been asked about.
30. **The school screen is headed "Who's on your calendar?"** It now follows a screen about connecting her calendar, so the two may read as the same thing. A heading such as "Where do they go to school?" would avoid it, and the choice is Greg's.
31. **Edward's own calendar is out of scope.** Edward has MVP and could connect his own calendar, which would let the coach see his Thursday meeting without being told. The prototype does not show it.

# Appendix C: change log

## Version 3.10, October 13, 2026

Follows the Today redesign and spec version 0.11.

| # | Change |
| ----- | ----- |
| 1 | The coach card is filled and outlined in the coach's color, labeled with a solid dot and "Coach · for" and the day, and closes with "More options". A Coach Alert can sit at the top of Today. Saffron has no role. |
| 2 | The coach speaks in Fraunces on the Today coach card and in onboarding, and in Inter in the coach chat. This replaces the October 8 correction to version 3.9. |
| 3 | The parent's avatar, an outlined circle with her initial, replaces her monogram, including Edward's on his own Today. Children appear as name chips in plan rows and as monograms everywhere else. |
| 4 | The day line moves to its own row above the title, with the avatar, and stays the day of the week only, even where a design frame shows a date. |
| 5 | The Recommends label line reads "Recommended · School · 3 min read", without capitals and without "MVP" on its own. |
| 6 | Appendix B item 6 is resolved. |

## Version 3.9, October 6, 2026

Closes the gaps the calendar wireframe pass reported, and writes in the four decisions that pass drew from.

*Corrected October 8, 2026, without a new version: everything the coach says is now set in Inter, with Fraunces reserved for headlines and titles, and the phase of the day and the calendar mark use the icon names from spec §17 instead of Lucide names.*

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
